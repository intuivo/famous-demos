define(
	"famous/Context", 
	[
		"require", 
		"exports", 
		"module", 
		"./RenderNode", 
		"./EventHandler", 
		"./SpecParser", 
		"./ElementAllocator", 
		"./Matrix", 
		"./Transitionable"
	], function (require, exports, module)
	{
        function Context(t) {
            this.container = t;
            this.allocator = new ElementAllocator(t);
            this.srcNode = new RenderNode;
            this.eventHandler = new EventHandler;
            this._size = [window.innerWidth, window.innerHeight];
            this.perspectiveState = new Transitionable(0);
            this._perspective = void 0;
            this.eventHandler.on("resize",
                function ()
                {
                    this._size = o(this.container);
                }.bind(this)
            );
        }

        function o(t) {
            return [t.clientWidth, t.clientHeight]
        }

        var RenderNode = require("./RenderNode"),
            EventHandler = require("./EventHandler");

        require("./SpecParser");

        var ElementAllocator = require("./ElementAllocator"),
            Matrix = require("./Matrix"),
            Transitionable = require("./Transitionable");

        Context.prototype.getAllocator = function ()
        {
            return this.allocator;
        };

        Context.prototype.link = function (t)
        {
            return this.srcNode.link(t);
        };

        Context.prototype.add = function (t)
        {
            return this.srcNode.add(t)
        };

        Context.prototype.mod = function (t)
        {
            return this.srcNode.mod(t)
        };

        Context.prototype.migrate = function (t)
        {
            if (t !== this.container) {
                this.container = t;
                this.allocator.migrate(t);
            }
        };

        Context.prototype.getSize = function ()
        {
            return this._size
        };

        Context.prototype.setSize = function (t)
        {
            t || (t = o(this.container)), this._size = t
        };

        Context.prototype.update = function ()
        {
            var t = this.perspectiveState.get();
            if (t !== this._perspective) {
                if (t) {
                    this.container.style.perspective = t.toFixed() + "px";
                    this.container.style.webkitPerspective = t.toFixed();
                } else {
                    this.container.style.perspective = "";
                    this.container.style.webkitPerspective = "";
                }
                this._perspective = t;
            }
            if (this.srcNode) {
                this.srcNode.commit(this, Matrix.identity, 1, [0, 0], this._size);
            }
        };

        Context.prototype.getOutputTransform = function(t)
        {
            var i = this.parsedCache;
            if (i) {
                var e = t.id,
                    s = {
                        transform: i.transforms[e],
                        opacity: i.opacities[e]
                    };
                if (i.origins[e] && (s.origin = i.origins[e]), i.groups[e]) {
                    var o = i.groups[e];
                    s.transform = Matrix.multiply(s.transform, i.groupTransforms[o]), i.groupOpacities[o] && (s.opacity *= i.groupOpacities[o])
                }
                return s
            }
        };

        Context.prototype.getPerspective = function ()
        {
            return this.perspectiveState.get()
        };

        Context.prototype.setPerspective = function (t, i, e)
        {
            return this.perspectiveState.set(t, i, e)
        };

        Context.prototype.emit = function (t, i)
        {
            return this.eventHandler.emit(t, i)
        };

        Context.prototype.on = function (t, i)
        {
            return this.eventHandler.on(t, i)
        };

        Context.prototype.unbind = function (t, i)
        {
            return this.eventHandler.unbind(t, i)
        };

        Context.prototype.pipe = function (t)
        {
            return this.eventHandler.pipe(t)
        };

        Context.prototype.unpipe = function (t)
        {
            return this.eventHandler.unpipe(t)
        };

        module.exports = Context;
    }
);