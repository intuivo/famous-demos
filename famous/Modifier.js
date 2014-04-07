define(
	"famous/Modifier", 
	[
		"require", 
		"exports", 
		"module", 
		"./Matrix", 
		"./Transitionable", 
		"./Utility"
	], 
	function (require, exports, module)
	{
        function Modifier(options)
        {
            var transform = Matrix.identity,
                opacity = 1,
                origin = void 0,
                size = void 0;

            // if the arguments are provided as sequential parameters
            // (transform, opacity, origin, size)
            if (arguments.length > 1 || arguments[0] instanceof Array) {
                if (arguments[0] !== void 0) {
                    transform = arguments[0];
                }
                if (arguments[1] !== void 0) {
                    opacity = arguments[1];
                }
                origin = arguments[2];
                size = arguments[3];
            } else if (options) {
                if (options.transform) {
                    transform = options.transform;
                }
                if (options.opacity !== void 0) {
                    opacity = options.opacity
                }
                if (options.origin) {
                    origin = options.origin;
                }
                if (options.size) {
                    size = options.size;
                }
            }

            this.transformTranslateState = new Transitionable([0, 0, 0]);
            this.transformRotateState = new Transitionable([0, 0, 0]);
            this.transformSkewState = new Transitionable([0, 0, 0]);
            this.transformScaleState = new Transitionable([1, 1, 1]);
            this.opacityState = new Transitionable(opacity);
            this.originState = new Transitionable([0, 0]);
            this.sizeState = new Transitionable([0, 0]);
            this._originEnabled = false;
            this._sizeEnabled = false;
            this.setTransform(transform);
            this.setOpacity(opacity);
            this.setOrigin(origin);
            this.setSize(size);
        }

        var Matrix = require("./Matrix");
        var Transitionable = require("./Transitionable");
        var Utility = require("./Utility");

        Modifier.prototype.getTransform = function ()
        {
            return this.isActive()
                ? Matrix.build(
                    {
                        translate: this.transformTranslateState.get(),
                        rotate: this.transformRotateState.get(),
                        skew: this.transformSkewState.get(),
                        scale: this.transformScaleState.get()
                    }
                )
                : this.getFinalTransform();
        };

        Modifier.prototype.getFinalTransform = function ()
        {
            return this._finalTransform
        };

        Modifier.prototype.setTransform = function (transform, transition, callback)
        {
            var transformStateCallback = callback ? Utility.after(4, callback) : void 0;
            if (transition) {
                if (this._transformDirty)
                {
                    var n = Matrix.interpret(this.getFinalTransform());
                    this.transformTranslateState.set(n.translate);
                    this.transformRotateState.set(n.rotate);
                    this.transformSkewState.set(n.skew);
                    this.transformScaleState.set(n.scale);
                    this._transformDirty = !1;
                }
                var a = Matrix.interpret(transform);
                this.transformTranslateState.set(a.translate, transition, transformStateCallback);
                this.transformRotateState.set(a.rotate, transition, transformStateCallback);
                this.transformSkewState.set(a.skew, transition, transformStateCallback);
                this.transformScaleState.set(a.scale, transition, transformStateCallback);
            } else {
                this.transformTranslateState.halt();
                this.transformRotateState.halt();
                this.transformSkewState.halt();
                this.transformScaleState.halt();
                this._transformDirty = !0;
            }
            this._finalTransform = transform
        };

        Modifier.prototype.getOpacity = function ()
        {
            return this.opacityState.get()
        };

        Modifier.prototype.setOpacity = function (t, i, e)
        {
            this.opacityState.set(t, i, e)
        };

        Modifier.prototype.getOrigin = function ()
        {
            return this._originEnabled ? this.originState.get() : void 0
        };

        Modifier.prototype.setOrigin = function (origin, i, e)
        {
            this._originEnabled = !!origin;

            if (!origin) {
                origin = [0, 0];
            }
            if (!(origin instanceof Array)) {
                    origin = Utility.origins[origin];
            }

            this.originState.set(origin, i, e);
        };

        Modifier.prototype.getSize = function ()
        {
            return this._sizeEnabled ? this.sizeState.get() : void 0
        };

        Modifier.prototype.setSize = function (t, i, e)
        {
            this._sizeEnabled = !! t, t || (t = [0, 0]), this.sizeState.set(t, i, e)
        };

        Modifier.prototype.setDefaultTransition = function (t)
        {
            this.transformTranslateState.setDefault(t);
            this.transformRotateState.setDefault(t);
            this.transformSkewState.setDefault(t);
            this.transformScaleState.setDefault(t);
            this.opacityState.setDefault(t);
            this.originState.setDefault(t);
            this.sizeState.setDefault(t);
        };

        Modifier.prototype.halt = function ()
        {
            this.transformTranslateState.halt();
            this.transformRotateState.halt();
            this.transformSkewState.halt();
            this.transformScaleState.halt();
            this.opacityState.halt();
            this.originState.halt();
            this.sizeState.halt();
        };

        Modifier.prototype.isActive = function ()
        {
            return this.transformTranslateState.isActive() || this.transformRotateState.isActive() || this.transformSkewState.isActive() || this.transformScaleState.isActive()
        };

        Modifier.prototype.render = function (t)
        {
            return {
                transform: this.getTransform(),
                opacity: this.getOpacity(),
                origin: this.getOrigin(),
                size: this.getSize(),
                target: t
            };
        };

        module.exports = Modifier;
    }
);