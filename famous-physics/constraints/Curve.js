define(
	"famous-physics/constraints/Curve", 
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
                f: function (t, i) {
                    return 100 * Math.sin(t / 100) - i
                },
                df: void 0,
                g: function (t, i, e) {
                    return e
                },
                dg: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.J = new n, this.impulse = new n
        }

        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function (t, i, e) {
            for (var s = this.impulse, o = this.J, n = this.opts.f, r = this.opts.f, a = this.opts.df, h = this.opts.dg, u = 0, p = 0; p < t.length; p++) {
                var c = t[p],
                    l = c.v,
                    f = c.p,
                    d = c.m;
                if (0 == this.opts.period) var m = 0,
                y = 1;
                else var g = 4 * d * Math.PI * this.opts.dampingRatio / this.opts.period,
                v = 4 * d * Math.PI * Math.PI / (this.opts.period * this.opts.period), m = 1 / (g + e * v), y = e * v / (g + e * v);
                if (void 0 === a) {
                    var S = 1e-7,
                        b = n(f.x, f.y, f.z),
                        x = (n(f.x + S, f.y, f.z) - b) / S,
                        w = (n(f.x, f.y + S, f.z) - b) / S,
                        z = (n(f.x, f.y, f.z + S) - b) / S,
                        T = r(f.x, f.y, f.z),
                        O = (r(f.x + S, f.y, f.z) - T) / S,
                        _ = (r(f.x, f.y + S, f.z) - T) / S,
                        M = (r(f.x, f.y, f.z + S) - T) / S;
                    o.setXYZ(x + O, w + _, z + M)
                } else {
                    var C = a(f.x, f.y, f.z),
                        P = h(f.x, f.y, f.z);
                    o.setXYZ(C[0] + P[0], C[1] + P[1], C[2] + P[2])
                }
                var k = y / e * (n(f.x, f.y, f.z) + r(f.x, f.y, f.z)),
                    I = -(o.dot(l) + k) / (m + e * o.normSquared() / d);
                s.set(o.mult(e * I)), c.applyImpulse(s), u += Math.abs(I)
            }
            return u
        }, s.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }
); 