define(
	"famous-ui/PanelScrollview", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-views/Scrollview"
	], 
	function (require, exports, module)
	{
        function PanelScrollView(options) {

            this.panelOpts = {
                scrollviewOptions: {
                    direction: "y",
                    itemSpacing: 20
                },
                width: 256,
                sliderHeight: 20
            };

            this.setPanelOptions(options);

            ScrollView.call(this, this.panelOpts.scrollviewOptions);
            this.uiItems = [];
            this._sequenced = false;
        }

        function addUiItem(item)
        {
            this.uiItems.push(item);
            if (this._sequenced === false) {
                this.sequenceFrom(this.uiItems);
                this._sequenced = true;
            }
            if (void 0 === item.getSize() && item.setSize) {
                item.setSize([this.panelOpts.width, this.panelOpts.sliderHeight]);
            }
            if (item.init) {
                item.init();
            }
            if (item.pipe) {
                item.pipe(this);
            }
        }

        var ScrollView = require("famous-views/Scrollview");

        PanelScrollView.prototype = Object.create(ScrollView.prototype);

        PanelScrollView.prototype.setPanelOptions = function (t)
        {
            for (var i in t) {
                this.panelOpts[i] = t[i];
            }
        };

        PanelScrollView.prototype.reset = function ()
        {
            this.uiItems = [];
            this._sequenced = false;
        };

        PanelScrollView.prototype.add = function (t)
        {
            if (t instanceof Array) {
                for (var i = 0; i < t.length; i++) {
                    addUiItem.call(this, t[i]);
                }
            }
            else addUiItem.call(this, t);
        };

        PanelScrollView.prototype.addBackground = function () {};

        module.exports = PanelScrollView;
    }
); 