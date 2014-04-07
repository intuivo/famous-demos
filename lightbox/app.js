//  CodePen Evaluation License
//  
//  Copyright (c) 2013 Famous Industries, Inc.
//  
//  Non-sublicensable permission is hereby granted, free of charge, to any person obtaining a 
//  copy of this software and associated documentation files directly from codepen.io (the 
//  "Software"), solely to internally make and internally use copies of the Software to test, 
//  explore, and evaluate the Software solely in such personâ€™s non-commercial, non-
//  production environments, provided that the above copyright notice and this permission 
//  notice shall be included in all copies or substantial portions of the Software. 
//  
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
//  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
//  MERCHANTABILITY, FITNESS FOR A ARTICULAR PURPOSE AND 
//  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
//  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
//  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR 
//  IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
//  SOFTWARE.
//


Famous(function(require,exports,module)
{    
    require('famous-sync/FastClick');
    // ANIMATIONS!
    var RegisterEasing  = require('famous-animation/RegisterEasing');

    // Physics!!
    var Transitionable  = require('famous/Transitionable');
    var PhysicsTrans    = require('famous-physics/utils/PhysicsTransition');
    Transitionable.registerMethod('physics', PhysicsTrans);
    
    var Surface         = require('famous/Surface'); 
    var Engine          = require('famous/Engine');        
    var Utility         = require('famous/Utility');
    var Time            = require('famous-utils/Time');
    var KeyCodes        = require('famous-utils/KeyCodes');
    var SceneController = require('app/SceneController');

    var LightboxScene   = require('app/scenes/LightboxScene');
    var BlankLightbox   = require('app/scenes/BlankLightbox');

    var mainCtx = Engine.createContext();
    mainCtx.setPerspective( 1000 );

    mainCtx.add( SceneController );
    
    SceneController.addScenes({
        'lightbox' : LightboxScene,
        'blank'    : BlankLightbox
    });

    SceneController.setScene('lightbox');

    Engine.on('keydown', function ( e ) {

        if( e.keyCode == KeyCodes.LEFT_ARROW ) { 
            SceneController.prev();

        } else if ( e.keyCode == KeyCodes.RIGHT_ARROW ) {
            SceneController.next();

        }
    }); 
});
