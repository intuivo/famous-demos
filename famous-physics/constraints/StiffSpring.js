define(
    "famous-physics/constraints/StiffSpring", 
    [
        "require", 
        "exports", 
        "module", 
        "famous-physics/constraints/Constraint", 
        "../math/Vector"
    ], 
    function (t, i, e) 
    {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                dampingRatio: 1,
                period: 1e3,
                callback: void 0,
                callbackTolerance: 1e-4
            }, t && this.setOpts(t), this.pDiff = new a, this.vDiff = new a, this.n = new a, this.impulse1 = new a, this.impulse2 = new a, this._canFireCallback = !0
        }

        function o(t, i, e) {
            e < this.opts.callbackTolerance ? this._canFireCallback && (i.call(this, t), this._canFireCallback = !1) : this._canFireCallback = !0
        }

        function n(t, i, e) {
            var s = Math.abs(t.dot(i) / e);
            return s
        }

        var r = t("famous-physics/constraints/Constraint"),
            a = t("../math/Vector");
        s.prototype = Object.create(r.prototype), s.prototype.constructor = r, s.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor instanceof a && (this.opts.anchor = t.anchor), t.anchor.p instanceof a && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new a(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.callback && (this.opts.callback = t.callback, this._canFireCallback = !0), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance)
        }, s.prototype.applyConstraint = function (t, i, e) {
            for (var s = this.opts, r = this.pDiff, a = this.vDiff, h = this.impulse1, u = this.impulse2, p = s.length, c = s.anchor || i.p, l = s.period, f = s.dampingRatio, d = 0; d < t.length; d++) {
                var m = t[d],
                    y = m.p,
                    g = m.v,
                    v = m.m,
                    S = m.mInv;
                r.set(y.sub(c));
                var b = r.norm() - p;
                if (i) {
                    var x = i.mInv,
                        w = i.v;
                    a.set(g.sub(w));
                    var z = 1 / (S + x)
                } else {
                    a.set(g);
                    var z = v
                }
                if (0 == this.opts.period) var T = 0,
                O = 1;
                else var _ = 4 * z * Math.PI * Math.PI / (l * l),
                M = 4 * z * Math.PI * f / l, O = e * _ / (M + e * _), T = 1 / (M + e * _);
                var C = O / e * b;
                if (r.normalize(-C).sub(a).mult(e / (T + e / z)).put(h), m.applyImpulse(h), i && (h.mult(-1).put(u), i.applyImpulse(u)), this.opts.callback) {
                    var P = m.getEnergy() + n(h, r, e);
                    o.call(this, m, this.opts.callback, P)
                }
            }
        }, s.prototype.getEnergy = function (t, i) {
            var e = this.opts,
                s = e.length,
                o = e.period,
                n = e.anchor || i.p;
            if (0 === o) return 0;
            var r = 4 * t.m * Math.PI * Math.PI / (o * o),
                a = n.sub(t.p),
                h = a.norm() - s;
            return .5 * r * h * h
        }, s.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init instanceof Function && t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }
);