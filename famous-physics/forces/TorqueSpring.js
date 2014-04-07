define(
	"famous-physics/forces/TorqueSpring", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/forces/Force", 
		"famous-physics/math/Vector"
	], 
	function (t, i, e) 
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
	        }, t && this.setOpts(t), this.torque = new h, this.init(), this._canFireCallback = void 0, a.call(this)
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

	    var a = t("famous-physics/forces/Force"),
	        h = t("famous-physics/math/Vector");
	    s.prototype = Object.create(a.prototype), s.prototype.constructor = a, s.FORCE_FUNCTIONS = {
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
	    }, s.prototype.applyForce = function (t) {
	        for (var i = this.torque, e = this.opts, s = e.stiffness, o = e.damping, n = e.length, r = e.anchor, a = 0; a < t.length; a++) {
	            var h = t[a],
	                u = r.sub(h.q),
	                p = u.norm() - n;
	            if (0 == p) return;
	            var c = h.m;
	            s *= c, o *= c, i.set(u.normalize(s * this.forceFunction(p, this.opts.lMax))), o && i.add(h.w.mult(-o), i), h.applyTorque(i)
	        }
	    }, s.prototype.setOpts = function (t) {
	        void 0 !== t.anchor && (t.anchor.p instanceof h && (this.opts.anchor = t.anchor.p), t.anchor instanceof h && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new h(t.anchor))), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.lMin && (this.opts.lMin = t.lMin), void 0 !== t.lMax && (this.opts.lMax = t.lMax), void 0 !== t.forceFunction && (this.opts.forceFunction = t.forceFunction), void 0 !== t.callback && (this.opts.callback = t.callback), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance), this.init()
	    }, e.exports = s
	}
); 