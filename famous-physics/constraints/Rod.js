define(
	"famous-physics/constraints/Rod", 
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
                stiffness: 1
            }, t && this.setOpts(t), this.disp = new n, this.push = new n
        }

        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor)), delete t.anchor);
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function (t, i, e) {
            var s = this.opts,
                o = this.disp,
                n = this.push,
                r = s.length,
                a = s.stiffness,
                h = s.anchor || i.p,
                u = t[0],
                p = u.p;
            o.set(p.sub(h));
            var c = o.norm(),
                l = (r - c) / c;
            Math.abs(l) > 0 && (o.mult(.5 * l * a, n), u.immunity || (p.add(n, p), u.v.add(n.div(e), u.v)), i && !i.immunity && (i.p.sub(n, i.p), i.v.sub(n.div(e), i.v)))
        }, e.exports = s
    }
); 