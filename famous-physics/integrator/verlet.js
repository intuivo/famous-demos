define(
	"famous-physics/integrator/verlet", 
	[
		"require", 
		"exports", 
		"module", 
		"../math/Vector"
	], 
	function (t, i, e) 
	{
        function s(t) {
            t = t || {}, this.vCap = t.vCap || 1 / 0, this.aCap = t.aCap || 1 / 0, this.drag = t.drag || 1, this.diff = new o, this.pOldCopy = new o, this.dragVector = new o
        }

        var o = t("../math/Vector");
        s.prototype.integrate = function (t, i, e) {
            var s = t.pOld,
                o = t.p,
                n = t.a;
            if (this.diff.set(o.sub(s)), e) {
                var r = t.v;
                t.hasImmunity("velocity") || r.add(n.mult(.5 * i), r), t.hasImmunity("position") || (s.set(o), o.add(r.mult(i), o))
            } else this.pOldCopy.set(s), t.hasImmunity("position") || (this.dragVector.set(this.diff.mult(this.drag)), s.set(o), o.add(n.mult(i * i), o), o.add(this.dragVector, o))
        }, s.prototype.integrateVelocity = function (t, i, e) {
            var s = t.p,
                o = t.a;
            if (e) {
                var n = t.v;
                n.add(o.mult(.5 * i), n), s.add(n.mult(i), s)
            } else s.add(o.mult(i * i), s)
        }, s.prototype.integratePosition = function (t) {
            var i = t.p,
                e = t.pOld,
                s = this.pOldCopy;
            s.set(e), e.set(i), i.add(i.sub(s).mult(this.drag), i)
        }, e.exports = s
    }
); 