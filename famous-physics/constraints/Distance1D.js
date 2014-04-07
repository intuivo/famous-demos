define(
	"famous-physics/constraints/Distance1D", 
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
            }, t && this.setOpts(t), this.impulse = new n
        }

        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function (t, i, e) {
            var s, o, n = this.impulse;
            if (i) var r = i.p.x,
            a = i.mInv, h = i.v.x;
            else var r = this.opts.anchor,
            a = 0;
            for (var u = this.opts.length, p = this.opts.period, c = this.opts.dampingRatio, l = 0, f = 0; f < t.length; f++) {
                var d = t[f],
                    m = d.v.x,
                    y = d.p.x,
                    g = d.mInv;
                s = y - r;
                var v = s - u;
                o = i ? m - h : m;
                var S = 1 / (g + a);
                if (0 == p) var b = 0,
                x = 1;
                else var w = 4 * S * Math.PI * c / p,
                z = 4 * S * Math.PI * Math.PI / (p * p), b = 1 / (w + e * z), x = e * z / (w + e * z);
                var T = x / e * v,
                    O = -(o + T) / (b + e / S);
                n.setXYZ(e * O, 0, 0), d.applyImpulse(n), i && i.applyImpulse(n.mult(-1)), l += Math.abs(O)
            }
            return l
        }, s.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init instanceof Function && t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }
); 