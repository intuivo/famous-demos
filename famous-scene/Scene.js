define(
	"famous-scene/Scene", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-utils/Utils", 
		"famous-utils/KeyCodes", 
		"famous/Engine", 
		"famous/EventHandler", 
		"famous/View"
	], 
	function (require, exports, module)
	{
        function Scene() {
            View.apply(this, arguments);
            this.width = Utils.getWidth();
            this.height = Utils.getHeight();
            this.mouseDown = false;
            this.callbacks = {};
            this.bindEvents();
        }

        var Utils = require("famous-utils/Utils");

        require("famous-utils/KeyCodes");
        require("famous/Engine");
        require("famous/EventHandler");

        var View = require("famous/View");

        Scene.prototype = Object.create(View.prototype);

        Scene.prototype.bindEvents = function ()
        {
            this.callbacks.prerender = this.update.bind(this);
            this.callbacks.touchstart = this.touchstart.bind(this);
            this.callbacks.touchmove = this.touchmove.bind(this);
            this.callbacks.touchend = this.touchend.bind(this);
            this.callbacks.keypress = this.keypress.bind(this);
            this.callbacks.resize = Utils.debounce(this.resize.bind(this), 333);
            this.callbacks.mousedown = this._mousedown.bind(this);
            this.callbacks.mousemove = this._mousemove.bind(this);
            this.callbacks.mouseover = this._mouseover.bind(this);
            this.callbacks.mouseup = this._mouseup.bind(this);
            this.callbacks.mouseout = this._mouseout.bind(this);
            this.callbacks.keydown = this.keydown.bind(this);
            this.callbacks.keyup = this.keyup.bind(this);
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++)
            {
                this.eventInput.on(t[i],
                this.callbacks[t[i]])
            }
        };
        Scene.prototype.unbindEvents = function ()
        {
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++) {
                this.unbind(t[i], this.callbacks[t[i]])
            }
        };
        Scene.prototype.activate = function (t)
        {
            t && t();
        };
        Scene.prototype.update = function () {};

        Scene.prototype.render = function ()
        {
            return this.node.render();
        };

        Scene.prototype.deactivate = function (t)
        {
            t && t()
        };
        Scene.prototype.touchstart = function () {};
        Scene.prototype.touchmove = function () {};
        Scene.prototype.touchend = function () {};

        Scene.prototype._mousedown = function (t)
        {
            this.mouseDown = true;
            this.mousedown(t);
        };
        Scene.prototype._mousemove = function (t)
        {
            this.mouseDown === !0
                ? this.mousedrag(t)
                : this.mousemove(t);
        };
        Scene.prototype._mouseover = function (t)
        {
            this.mouseover(t);
        };
        Scene.prototype._mouseup = function (t)
        {
            this.mouseDown = false;
            this.mouseup(t);
        };
        Scene.prototype._mouseout = function (t)
        {
            this.mouseout(t);
        };

        Scene.prototype.mousedown = function () {};
        Scene.prototype.mouseup = function () {};
        Scene.prototype.mousemove = function () {};
        Scene.prototype.mouseover = function () {};
        Scene.prototype.mouseout = function () {};
        Scene.prototype.mousedrag = function () {};
        Scene.prototype.keypress = function () {};
        Scene.prototype.keydown = function () {};
        Scene.prototype.keyup = function () {};
        Scene.prototype.keypress = function () {};
        Scene.prototype.resize = function ()
        {
            this.width = Utils.getWidth();
            this.height = Utils.getHeight();
        };
        Scene.prototype.setController = function (t)
        {
            this.controller = t;
        };
        module.exports = Scene
    }
); 