define(
	"famous-physics/forces/Spring", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/forces/Force", 
		"famous-physics/math/Vector"
	], function (t, i, e) 
	{
        function s(t) {
            this.opts = {
                period: 0,
                dampingRatio: 0,
                length: 0,
                lMin: 0,
                lMax: 1 / 0,
                anchor: void 0,
                forceFunction: s.FORCE_FUNCTIONS.HOOK,
                callback: void 0,
                callbackTolerance: 1e-7
            }, t && this.setOpts(t), this.init(), this._canFireCallback = void 0, h.call(this)
        }

        function o(t) {
            this.forceFunction = t
        }

        function n(t) {
            t.stiffness = Math.pow(2 * Math.PI / t.period, 2)
        }

        function r(t) {
            t.damping = 4 * Math.PI * t.dampingRatio / t.period
        }

        function a(t, i) {
            return .5 * t * i * i
        }

        var h = t("famous-physics/forces/Force"),
            u = t("famous-physics/math/Vector");
        s.prototype = Object.create(h.prototype), s.prototype.constructor = h, s.FORCE_FUNCTIONS = {
            FENE: function (t, i) {
                var e = .99 * i,
                    s = Math.max(Math.min(t, e), -e);
                return s / (1 - s * s / (i * i))
            },
            HOOK: function (t) {
                return t
            }
        }, s.prototype.init = function () {
            var t = this.opts;
            o.call(this, t.forceFunction), n.call(this, t), r.call(this, t)
        }, s.prototype.applyForce = function (t, i) {
            for (var e = this.force, s = this.opts, o = s.stiffness, n = s.damping, r = s.length, h = s.anchor || i.p, u = s.callback, p = 0; p < t.length; p++) {
                var c = t[p],
                    l = h.sub(c.p),
                    f = l.norm() - r;
                if (0 == f) return;
                var d = c.m;
                if (o *= d, n *= d, e.set(l.normalize(o * this.forceFunction(f, this.opts.lMax))), n && (i ? e.add(c.v.sub(i.v).mult(-n), e) : e.add(c.v.mult(-n), e)), c.applyForce(e), i && i.applyForce(e.mult(-1)), this.opts.callback) {
                    var m = c.getEnergy() + a(o, f);
                    this.fireCallback(c, u, m)
                }
            }
        }, s.prototype.fireCallback = function (t, i, e) {
            e < this.opts.callbackTolerance ? (this._canFireCallback && i.call(this, t), this._canFireCallback = !1) : this._canFireCallback = !0
        }, s.prototype.getEnergy = function (t, i) {
            var e = this.opts,
                s = e.length,
                o = e.anchor || i.p,
                n = e.stiffness,
                r = o.sub(t.p),
                a = r.norm() - s;
            return .5 * n * a * a
        }, s.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor.p instanceof u && (this.opts.anchor = t.anchor.p), t.anchor instanceof u && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new u(t.anchor))), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.lMin && (this.opts.lMin = t.lMin), void 0 !== t.lMax && (this.opts.lMax = t.lMax), void 0 !== t.forceFunction && (this.opts.forceFunction = t.forceFunction), void 0 !== t.callback && (this.opts.callback = t.callback), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance), this.init()
        }, e.exports = s
    }
); 