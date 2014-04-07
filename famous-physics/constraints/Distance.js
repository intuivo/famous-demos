define(
	"famous-physics/constraints/Distance", 
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
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.impulse = new n, this.n = new n, this.diffP = new n, this.diffV = new n
        }

        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof n && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period)
        }, s.prototype.applyConstraint = function (t, i, e) {
            var s = this.n,
                o = this.diffP,
                n = this.diffV,
                r = this.impulse;
            if (i) var a = i.p,
            h = i.mInv, u = i.v;
            else var a = this.opts.anchor,
            h = 0;
            for (var p = this.opts.length, c = 0, l = 0; l < t.length; l++) {
                var f = t[l],
                    d = f.v,
                    m = f.p,
                    y = f.mInv;
                o.set(m.sub(a)), s.set(o.normalize());
                var g = o.norm() - p;
                i ? n.set(d.sub(u)) : n.set(d);
                var v = 1 / (y + h);
                if (0 == this.opts.period) var S = 0,
                b = 1;
                else var x = 4 * v * Math.PI * this.opts.dampingRatio / this.opts.period,
                w = 4 * v * Math.PI * Math.PI / (this.opts.period * this.opts.period), S = 1 / (x + e * w), b = e * w / (x + e * w);
                var z = b / e * g,
                    T = -(s.dot(n) + z) / (S + e / v);
                r.set(s.mult(e * T)), f.applyImpulse(r), i && i.applyImpulse(r.mult(-1)), c += Math.abs(T)
            }
            return c
        }, s.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }
); 