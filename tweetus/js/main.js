//CodePen Evaluation License 
//
//Copyright (c) 2013 Famo.us, Inc.
//
// Non-sublicensable permission is hereby granted, free of charge,
// to any person obtaining a copy of this software and associated
// documentation files directly from codepen.io (the "Software"), solely to
// internally make and internally use copies of the Software to test,
// explore, and evaluate the Software solely in such person’s non-commercial,
// non-production environments, provided that the above copyright
// notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Famous(function(require) {
    // import dependencies
    var FamousEngine = require('famous/Engine');
    var FastClick = require('famous-sync/FastClick');

    var Scrollview = require('famous-views/Scrollview');
    var ViewSequence = require('famous/ViewSequence');
    var Surface = require('famous/Surface');
  
    var View = require('famous/View');
    var EventHandler = require('famous/EventHandler');
    var OptionsManager = require('famous/OptionsManager');
    var RenderNode = require('famous/RenderNode');
    var Utility = require('famous/Utility');
    
    var HeaderFooterLayout = require('famous-views/HeaderFooterLayout');
    var EdgeSwapper = require('famous-views/EdgeSwapper');
    
    var NavigationBar = require('famous-widgets/NavigationBar');
    var TitleBar = require('famous-widgets/TitleBar');

    function App(options) {
        // extend from view
        View.apply(this, arguments);

        // create the layout
        this.layout = new HeaderFooterLayout();

        // create the header
        this.header = new TitleBar(this.options.header);

        // create the navigation bar
        this.navigation = new NavigationBar(this.options.navigation);

        // create the content area
        this.contentArea = new EdgeSwapper(this.options.content);

        // link endpoints of layout to widgets
        this.layout.id['header'].link(this.header);
        this.layout.id['footer'].link(Utility.transformInFront).link(this.navigation);
        this.layout.id['content'].link(Utility.transformBehind).link(this.contentArea);
        
        // assign received events to content area
        this.eventInput.pipe(this.contentArea);

        // navigation events are app events
        EventHandler.setOutputHandler(this, this.navigation);

        // declare the render nodes
        this._currentSection = undefined;
        this._sections = {};
        this._sectionTitles = {};

        // respond to the the selection of a different section
        this.navigation.on('select', function(data) {
            this._currentSection = data.id;
            this.header.show(this._sectionTitles[data.id]);
            this.contentArea.show(this._sections[data.id].get());
        }.bind(this));

        // assign the layout to this view
        this._link(this.layout);
    };
    App.prototype = Object.create(View.prototype);
    App.prototype.constructor = App;

    App.DEFAULT_OPTIONS = {
        header: {
            size: [undefined, 50],
            inTransition: true,
            outTransition: true,
            look: {
                size: [undefined, 50]
            }
        },
        navigation: {
            size: [undefined, 50],
            direction: Utility.Direction.X,
            buttons: {
                inTransition: true,
                outTransition: true
            }
        },
        content: {
            inTransition: true,
            outTransition: true,
            overlap: true
        }
    };

    App.prototype.getState = function() {
        return this._currentSection;
    };

    App.prototype.section = function(id) {
        // create the section if it doesn't exist
        if(!(id in this._sections)) {
            this._sections[id] = new RenderNode();

            // make it possible to set the section's properties
            this._sections[id].setOptions = (function(options) {
                this._sectionTitles[id] = options.title;
                this.navigation.defineSection(id, {
                   content: '<span class="icon">' + options.navigation.icon + '</span><br />' + options.navigation.caption
                });
            }).bind(this);
        }
        return this._sections[id];
    };

    App.prototype.select = function(id) {
        this._currentSection = id;
        if(!(id in this._sections)) return false;
        this.navigation.select(id);
        return true;
    };

    var FeedItem = require('famous-widgets/FeedItem');
    var Transitionable = require('famous/Transitionable');
    var OptionsManager = require('famous/OptionsManager');
    var Matrix = require('famous/Matrix');

    var userInfoFirebase = null;
    var userInfo = {};

    function SparkItem(options) {
        FeedItem.apply(this, arguments);
        if(options) this.setOptions(options);

        this.inState = new Transitionable(0);
        this.inState.set(1, this.options.inTransition);
    };
    
    SparkItem.prototype = Object.create(FeedItem.prototype);
    SparkItem.prototype.constructor = SparkItem;

    SparkItem.DEFAULT_OPTIONS = OptionsManager.patch(FeedItem.DEFAULT_OPTIONS, {
        classes: ['tweet'],
        size: [undefined, 80],
        inTransition: {curve: 'easeOut', duration: 500}
    });
    
    SparkItem.setFirebase = function(firebase) {
        userInfoFirebase = firebase;
    };

    SparkItem.prototype.render = function(input) {
        var result = FeedItem.prototype.render.apply(this, arguments);
        if(!this.inState.isActive()) return result;
        else return {opacity: this.inState.get(), target: result};
    };

    SparkItem.prototype.setContent = function(content) {
        var userId = content['author'];
        var iconUrl = 'content/default-pic.gif';
        if(userId in userInfo) {
            iconUrl = userInfo[userId]['pic'];
        }
        else {
            var userRef = userInfoFirebase.child('people').child(userId);
            userRef.on('value', function(dataSnapshot) {
                userInfo[userId] = dataSnapshot.val();
                if(userInfo[userId]['pic']) this.setContent(content);
            }.bind(this));
        }

        var feedContent = {icon: iconUrl, source: content['by'], time: content['timestamp'], text: content['content']};
        return FeedItem.prototype.setContent.call(this, feedContent);
    };

    // define the options
    var headerOptions = {
        look: {classes: ['header']},
        inTransition: {curve: 'easeOutBounce', duration: 375},
        outTransition: {curve: 'easeIn', duration: 225},
        overlap: false
    };

    var navigationOptions = {
        buttons: {
            onClasses: ['navigation', 'on'],
            offClasses: ['navigation', 'off'],
            inTransition: {curve: 'easeInOut', duration: 150},
            outTransition: {curve: 'easeInOut', duration: 150}
        }
    };

    var contentOptions = {
        inTransition: {curve: 'easeOutBounce', duration: 500},
        outTransition: {duration: 300},
        overlap: true 
    };

    // create the App from the template and hook it into the context
    var myApp = new App({header: headerOptions, navigation: navigationOptions, content: contentOptions});
    var mainDisplay = FamousEngine.createContext();
    mainDisplay.link(myApp);
    FamousEngine.pipe(myApp);

    // setup Firebase
    var firebase = new Firebase('https://firefeed.firebaseio.com/');
    SparkItem.setFirebase(firebase);

    // create the 'Home' section
    var homeSection = myApp.section('home');
    homeSection.setOptions({
        title: '<span class="bird">&#62217;</span>',
        navigation: {caption: 'Home', icon: '<span class="entypo">&#8962;</span>'}
    });
    var homeItems = new ViewSequence();
    var homeScroll = new Scrollview();
    homeSection.link(homeScroll);

    // create the 'Connect' section
    var connectSection = myApp.section('connect');
    connectSection.setOptions({
        title: 'Connect',
        navigation: {caption: 'Connect', icon: '@'}
    });
    var connectItems = new ViewSequence();
    var connectScroll = new Scrollview();
    connectSection.link(connectScroll);

    // create the 'Discover' section
    var discoverSection = myApp.section('discover');
    discoverSection.setOptions({
        title: 'Discover',
        navigation: {caption: 'Discover', icon: '#'}
    });
    var discoverItems = new ViewSequence();
    var discoverScroll = new Scrollview();
    discoverSection.link(discoverScroll);

    // create the 'Me' section
    var meSection = myApp.section('me');
    meSection.setOptions({
        title: 'Me',
        navigation: {caption: 'Me', icon: '<span class="entypo">&#128100;</span>'}
    });
    // stubbed default to Mark for demo purposes
    var myAuth = {
        'id': '819290432',
        'pic': 'https://graph.facebook.com/819290432/picture/?width=200&height=200&return_ssl_resources=1',
        'fullName': 'Mark Lu',
        'location': 'San Francisco'
    };
    var profile = new Surface({
        size: [undefined, 160],
        classes: ['profile'],
        content: '<img src="' + myAuth['pic'] + '" /><p>' + myAuth['fullName'] + ' &bull; ' + myAuth['location'] + '</p>'
    });
    var meItems = new ViewSequence([profile]); // start with profile
    var meScroll = new Scrollview();
    meSection.link(meScroll);

    // populate the scrollviews
    var sparks = firebase.child('sparks');

    // display the scrollviews when loaded
    sparks.once('value', function() {
        // rewind the pointers
        while(homeItems.getPrevious()) homeItems = homeItems.getPrevious();
        while(discoverItems.getPrevious()) discoverItems = discoverItems.getPrevious();
        while(connectItems.getPrevious()) connectItems = connectItems.getPrevious();
        while(meItems.getPrevious()) meItems = meItems.getPrevious();

        // hook them up
        homeScroll.sequenceFrom(homeItems);
        discoverScroll.sequenceFrom(discoverItems);
        connectScroll.sequenceFrom(connectItems);
        meScroll.sequenceFrom(meItems);
    });

    // update the scrollviews with data as they come in
    var recentTimestampLimit = Date.now() - 90*86400000; // limit to 90 days
    sparks.on('child_added', function(snapshot) {
        var value = snapshot.val();
        if(value['timestamp'] > recentTimestampLimit) {
            homeItems.unshift(new SparkItem({content: value}));
            homeScroll.goToPreviousPage();
        }
        if(value['author'] === myAuth['id']) {
            meItems.splice(1, 0, new SparkItem({content: value}));
            meScroll.goToPreviousPage();
        }
        if(value['content'].indexOf('@') >= 0) {
            connectItems.unshift(new SparkItem({content: value}));
            connectScroll.goToPreviousPage();
        }
        if(value['content'].indexOf('#') >= 0) {
            discoverItems.unshift(new SparkItem({content: value}));
            discoverScroll.goToPreviousPage();
        }
    });

    // start on the home section
    myApp.select('home');

    // signup button
    var Modifier = require('famous/Modifier');
    var Matrix = require('famous/Matrix');
    var signupContext = FamousEngine.createContext();
    signupContext.link(new Modifier({origin: [0, 0], transform: Matrix.translate(10, 10), opacity: 0.7})).link(new Surface({
        size: [true, true],
        classes: ['signup'],
        content: '<a href="http://demo.famo.us/signup">sign up</a>'
    }));
});
