define(
	"famous-physics/bodies/Body", 
	[
		"require", 
		"exports", 
		"module", 
		"./Particle", 
		"famous-physics/math/Vector", 
		"famous-physics/math/Quaternion", 
		"famous/Matrix"
	], function (t, i, e) 
	{
        function s(t) {
            o.call(this, t), this.q = t.q ? new r(t.q) : new r, this.w = t.w ? new n(t.w) : new n, this.L = t.L ? new n(t.L) : new n, this.t = t.t ? new n(t.t) : new n, this.I = [1, 0, 0, 1, 0, 0, 1, 0, 0], this.Iinv = [1, 0, 0, 1, 0, 0, 1, 0, 0], this.w.w = 0
        }

        var o = t("./Particle"),
            n = t("famous-physics/math/Vector"),
            r = t("famous-physics/math/Quaternion"),
            a = t("famous/Matrix");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.updateAngularVelocity = function () {
            var t = this.Iinv,
                i = this.L,
                e = i.x,
                s = i.y,
                o = i.z,
                n = t[0],
                r = t[1],
                a = t[2];
            this.w.setXYZ(n[0] * e + n[1] * s + n[2] * o, r[0] * e + r[1] * s + r[2] * o, a[0] * e + a[1] * s + a[2] * o)
        }, s.prototype.applyTorque = function (t) {
            this.getImmunity() || this.t.add(t, this.t)
        }, s.prototype.getTransform = function () {
            return a.move(this.q.getMatrix(), this.p.get())
        }, e.exports = s
    }
);