define(
	"famous-physics/constraints/Surface", 
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
                f: void 0,
                df: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.J = new n, this.impulse = new n, this.eps = 1e-7
        }

        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function (t, i, e) {
            for (var s = this.impulse, o = this.J, n = this.opts.f, r = this.opts.df, a = 0, h = 0; h < t.length; h++) {
                var u = t[h],
                    p = u.v,
                    c = u.p,
                    l = u.m;
                if (0 == this.opts.period) var f = 0,
                d = 1;
                else var m = 4 * l * Math.PI * this.opts.dampingRatio / this.opts.period,
                y = 4 * l * Math.PI * Math.PI / (this.opts.period * this.opts.period), f = 1 / (m + e * y), d = e * y / (m + e * y);
                if (void 0 === r) {
                    var g = this.eps,
                        v = n(c.x, c.y, c.z),
                        S = (n(c.x + g, c.y, c.z) - v) / g,
                        b = (n(c.x, c.y + g, c.z) - v) / g,
                        x = (n(c.x, c.y, c.z + g) - v) / g;
                    o.setXYZ(S, b, x)
                } else o.setXYZ.apply(o, r(c.x, c.y, c.z));
                var w = d / e * n(c.x, c.y, c.z),
                    z = -(o.dot(p) + w) / (f + e * o.normSquared() / l);
                s.set(o.mult(e * z)), u.applyImpulse(s), a += Math.abs(z)
            }
            return a
        }, s.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }
); 