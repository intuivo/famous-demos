define("famous/TweenTransition", 
    [
        "require", 
        "exports", 
        "module", 
        "famous/Utility"
    ], function (t, i, e) 
    {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._startTime = 0, this._startValue = 0, this._updateTime = 0, this._endValue = 0, this._curve = void 0, this._duration = 0, this._active = !1, this._callback = void 0, this.state = 0
        }

        function o(t, i, e) {
            return (1 - e) * t + e * i
        }

        function n(t) {
            return t instanceof Object ? t instanceof Array ? t.slice(0) : Object.create(t) : t
        }

        function r(t, i) {
            var e = {
                curve: i.curve
            };
            return i.duration && (e.duration = i.duration), i.speed && (e.speed = i.speed), t instanceof Object && (void 0 !== t.duration && (e.duration = t.duration), t.curve && (e.curve = t.curve), t.speed && (e.speed = t.speed)), "string" == typeof e.curve && (e.curve = s.getCurve(e.curve)), e
        }

        var a = t("famous/Utility");
        s.SUPPORTS_MULTIPLE = !0, s.DEFAULT_OPTIONS = {
            curve: a.Curve.linear,
            duration: 500,
            speed: 0
        };
        var h = {};
        s.registerCurve = function (t, i) {
            return h[t] ? !1 : (h[t] = i, !0)
        }, s.unregisterCurve = function (t) {
            return h[t] ? (delete h[t], !0) : !1
        }, s.getCurve = function (t) {
            return h[t]
        }, s.getCurves = function () {
            return h
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.curve && (this.options.curve = t.curve), void 0 !== t.duration && (this.options.duration = t.duration), void 0 !== t.speed && (this.options.speed = t.speed)
        }, s.prototype.set = function (t, i, e) {
            if (!i) return this.reset(t), e && e(), void 0;
            if (this._startValue = n(this.get()), i = r(i, this.options), i.speed) {
                var s = this._startValue;
                if (s instanceof Object) {
                    var o = 0;
                    for (var a in s) o += (t[a] - s[a]) * (t[a] - s[a]);
                    i.duration = Math.sqrt(o) / i.speed
                } else i.duration = Math.abs(t - s) / i.speed
            }
            this._startTime = Date.now(), this._endValue = n(t), this._duration = i.duration, this._curve = i.curve, this._active = !0, this._callback = e
        }, s.prototype.reset = function (t) {
            if (this._callback) {
                var i = this._callback;
                this._callback = void 0, i()
            }
            this.state = n(t), this._startTime = 0, this._duration = 0, this._updateTime = 0, this._startValue = this.state, this._endValue = this.state, this._active = !1
        }, s.prototype.get = function (t) {
            return this.update(t), this.state
        }, s.prototype.update = function (t) {
            if (this._active) {
                if (t || (t = Date.now()), !(this._updateTime >= t)) {
                    this._updateTime = t;
                    var i = t - this._startTime;
                    if (i >= this._duration) this.state = this._endValue, this._active = !1;
                    else if (0 > i) this.state = this._startValue;
                    else {
                        var e = i / this._duration;
                        if (this.state instanceof Object)
                            for (var s in this.state) this.state[s] = o(this._startValue[s], this._endValue[s], this._curve(e));
                        else this.state = o(this._startValue, this._endValue, this._curve(e))
                    }
                }
            } else if (this._callback) {
                var n = this._callback;
                this._callback = void 0, n()
            }
        }, s.prototype.isActive = function () {
            return this._active
        }, s.prototype.halt = function () {
            this.reset(this.get())
        }, s.registerCurve("linear", a.Curve.linear), s.registerCurve("easeIn", a.Curve.easeIn), s.registerCurve("easeOut", a.Curve.easeOut), s.registerCurve("easeInOut", a.Curve.easeInOut), s.registerCurve("easeOutBounce", a.Curve.easeOutBounce), s.registerCurve("spring", a.Curve.spring), e.exports = s
    }
);