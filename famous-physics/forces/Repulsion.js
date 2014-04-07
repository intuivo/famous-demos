define(
	"famous-physics/forces/Repulsion", 
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
                strength: 1,
                anchor: void 0,
                radii: {
                    min: 0,
                    max: 1 / 0
                },
                cutoff: 0,
                cap: 1 / 0,
                decayFunction: s.DECAY_FUNCTIONS.GRAVITY
            }, t && this.setOpts(t), this.setOpts(t), this.disp = new n, o.call(this)
        }

        var o = t("famous-physics/forces/Force"),
            n = t("famous-physics/math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.DECAY_FUNCTIONS = {
            LINEAR: function (t, i) {
                return Math.max(1 - 1 / i * t, 0)
            },
            MORSE: function (t, i) {
                var e = 0 == i ? 100 : i,
                    s = t + e * (1 - Math.log(2));
                return Math.max(1 - Math.pow(1 - Math.exp(s / e - 1), 2), 0)
            },
            INVERSE: function (t, i) {
                return 1 / (1 - i + t)
            },
            GRAVITY: function (t, i) {
                return 1 / (1 - i + t * t)
            }
        }, s.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor)), delete t.anchor);
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyForce = function (t, i) {
            var e = this.opts,
                s = this.force,
                o = this.disp,
                n = e.strength,
                r = e.anchor || i.p,
                a = e.cap,
                h = e.cutoff,
                u = e.radii.max,
                p = e.radii.min,
                c = e.decayFunction;
            if (0 != n)
                for (var l in t) {
                    var f = t[l];
                    if (f != i) {
                        var d = f.m,
                            m = f.p;
                        o.set(m.sub(r));
                        var y = o.norm();
                        u > y && y > p && (o.normalize(n * d * c(y, h)).cap(a).put(s), f.applyForce(s))
                    }
                }
        }, e.exports = s
    }
); 