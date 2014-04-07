define(
	"famous-physics/constraints/CollisionJacobian", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/constraints/Constraint", 
		"famous-physics/math/Vector"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.opts = {
                k: .5,
                restitution: .5
            }, t && this.setOpts(t), this.n = new n, this.pDiff = new n, this.vDiff = new n, this.impulse1 = new n, this.impulse2 = new n, this.slop = 0
        }

        var o = t("famous-physics/constraints/Constraint"),
            n = t("famous-physics/math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function (t, i, e) {
            for (var s = this.opts.k, o = this.n, n = this.pDiff, r = this.vDiff, a = this.impulse1, h = this.impulse2, u = i.v, p = i.p, c = i.mInv, l = i.r, f = i.restitution, d = 0; d < t.length; d++) {
                var m = t[d];
                if (m != i) {
                    var y = m.v,
                        g = m.p,
                        v = m.mInv,
                        S = m.r,
                        b = m.restitution,
                        x = void 0 !== this.opts.restitution ? this.opts.restitution : Math.sqrt(f * b);
                    n.set(g.sub(p)), r.set(y.sub(u)), n.normalize(1, o);
                    var w = n.norm(),
                        z = w - (l + S),
                        T = 1 / (c + v),
                        O = 0;
                    if (0 > z) {
                        var _ = z <= this.slop ? ((1 + x) * o.dot(r) + s / e * (z - this.slop)) / (O + e / T) : (1 + x) * o.dot(r) / (O + e / T);
                        o.mult(e * _).put(a), a.mult(-1).put(h), i.applyImpulse(a), m.applyImpulse(h), p.add(o.mult(z / 2), p), g.add(o.mult(-z / 2), g)
                    }
                }
            }
        }, e.exports = s
    }
); 