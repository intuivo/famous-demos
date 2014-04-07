define(
	"famous/Transitionable", 
	[
		"require", 
		"exports", 
		"module", 
		"./Utility", 
		"./MultipleTransition", 
		"./TweenTransition"
	], 
	function (t, i, e) 
	{
        function Transitionable(t) {
            this.currentAction = null;
            this.actionQueue = [];
            this.callbackQueue = [];
            this.state = 0;
            this._callback = void 0;
            this._engineInstance = null;
            this._currentMethod = null;
            this.set(t);
        }

        function next() {
            if (this._callback) {
                var t = this._callback;
                this._callback = void 0;
                t();
            }

            if (this.actionQueue.length <= 0) {
                this.set(this._engineInstance);
                return void 0;
            }

            this.currentAction = this.actionQueue.shift();
            this._callback = this.callbackQueue.shift();

            var i = null;
            var e = this.currentAction[0];
            var s = this.currentAction[1];
            if (s instanceof Object && s.method) {
                i = s.method;
                if ("string" == typeof i) {
                    i = a[i];
                }
            } else {
                i = TweenTransition;
            }
            if (this._currentMethod !== i) {
                this._engineInstance = (!(e instanceof Object) || i.SUPPORTS_MULTIPLE === true || e.length <= i.SUPPORTS_MULTIPLE)
                    ? new i
                    : new MultipleTransition(i);
                this._currentMethod = i;
            }

            this._engineInstance.reset(this.state);
            this._engineInstance.set(e, s, next.bind(this));
        }

        t("./Utility");

        var MultipleTransition = t("./MultipleTransition"),
            TweenTransition = t("./TweenTransition"),
            a = {};

        Transitionable.registerMethod = function (t, i) {
            return t in a ? false : (a[t] = i, true)
        };

        Transitionable.unregisterMethod = function (t) {
            return t in a ? (delete a[t], true) : false;
        };

        Transitionable.prototype.set = function (transform, transition, callback)
        {
            if (!transition) {
                this.reset(transform);
                callback && callback();
                return void 0;
            }
            var s = [transform, transition];
            this.actionQueue.push(s);
            this.callbackQueue.push(callback);
            this.currentAction || next.call(this);
        };

        Transitionable.prototype.reset = function (t)
        {
            this._currentMethod = null;
            this._engineInstance = null;
            this.state = t;
            this.currentAction = null;
            this.actionQueue = [];
            this.callbackQueue = [];
        };

        Transitionable.prototype.delay = function (t, i) {
            this.set(
                this._engineInstance,
                {
                    duration: t,
                    curve: function () {
                        return 0
                    }
                },
                i
            );
        };

        Transitionable.prototype.get = function (t)
        {
            if (this._engineInstance) {
                this.state = this._engineInstance.get(t);
            }
            return this.state;
        };

        Transitionable.prototype.isActive = function ()
        {
            return !!this.currentAction
        };

        Transitionable.prototype.halt = function ()
        {
            this.set(this.get())
        };

        e.exports = Transitionable;
    }
);