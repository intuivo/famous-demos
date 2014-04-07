 define(
	 "famous/View", 
	 [
        "require", 
        "exports", 
        "module", 
        "./RenderNode", 
        "./EventHandler", 
        "./OptionsManager"
    ], 
    function (require, exports, module)
    {
        function View(t)
        {
            this.node = new RenderNode;
            this.eventInput = new EventHandler;
            this.eventOutput = new EventHandler;
            EventHandler.setInputHandler(this, this.eventInput);
            EventHandler.setOutputHandler(this, this.eventOutput);
            this.options = Object.create(this.constructor.DEFAULT_OPTIONS || View.DEFAULT_OPTIONS);
            this.optionsManager = new OptionsManager(this.options);
            t && this.setOptions(t);
        }

        var RenderNode = require("./RenderNode"),
            EventHandler = require("./EventHandler"),
            OptionsManager = require("./OptionsManager");

        View.DEFAULT_OPTIONS = null;

        View.prototype.getOptions = function ()
        {
            return this.optionsManager.value();
        };

        View.prototype.setOptions = function (t)
        {
            this.optionsManager.patch(t)
        };

        View.prototype._add = function ()
        {
            return this.node.add.apply(this.node, arguments);
        };

        View.prototype._link = function ()
        {
            return this.node.link.apply(this.node, arguments)
        };

        View.prototype.render = function ()
        {
            return this.node.render.apply(this.node, arguments)
        };

        View.prototype.getSize = function ()
        {
            var t = this.node.get();
            return t.getSize ? t.getSize.apply(t, arguments) : this.options.size
        };
        module.exports = View;
	}
);