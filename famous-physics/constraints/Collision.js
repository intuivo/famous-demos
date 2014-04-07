define(
	"famous-physics/constraints/Collision", 
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
                restitution: .5
            }, t && this.setOpts(t), this.n = new n, this.vRel = new n, this.I = new n, this.disp = new n
        }

        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function (t, i) {
            for (var e = i.p, s = i.r, o = i.v, n = this.n, r = this.I, a = this.vRel, h = this.disp, u = this.opts.restitution, p = 0; p < t.length; p++) {
                var c = t[p];
                if (i != c) {
                    var l = c.p,
                        f = c.r,
                        d = i.mInv;
                    h.set(e.sub(l));
                    var m = h.norm(),
                        y = s + f - m;
                    if (y > 0) {
                        var g = c.v,
                            v = c.mInv;
                        n.set(h.normalize()), a.set(o.sub(g)), r.set(n.mult((1 + u) * a.dot(n) / (d + v))), o.sub(r.mult(d), o), e.add(n.mult(y / 2), e), g.add(r.mult(v), g), l.add(n.mult(-y / 2), l)
                    }
                }
            }
        }, e.exports = s
    }
); 