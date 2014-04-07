define(
	"famous-physics/math/vectorArray", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            return this.v = t instanceof Array ? t.splice(0) : t instanceof s ? t.v : [t || 0, i || 0, e || 0], this
        }

        s.prototype.add = function (t, i) {
            i = i || this.register;
            var e = this.v,
                s = t.v;
            return i.setXYZ(e[0] + s[0], e[1] + s[1], e[2] + s[2])
        }, s.prototype.sub = function (t, i) {
            i = i || this.register;
            var e = this.v,
                s = t.v;
            return i.setXYZ(e[0] - s[0], e[1] - s[1], e[2] - s[2])
        }, s.prototype.mult = function (t, i) {
            i = i || this.register;
            var e = this.v;
            return i.setXYZ(t * e[0], t * e[1], t * e[2])
        }, s.prototype.div = function (t, i) {
            return this.mult(1 / t, i)
        }, s.prototype.cross = function (t, i) {
            var e = this.v,
                s = t.v;
            return i = i || this.register, i.setXYZ(e[1] * s[2] - e[2] * s[1], e[2] * s[0] - e[0] * s[2], e[0] * s[1] - e[1] * s[0])
        }, s.prototype.rotate = function (t, i, e, s) {
            return this.rotateX(t, s).rotateY(i, s).rotateZ(e, s)
        }, s.prototype.rotateX = function (t, i) {
            i = i || this.register;
            var e = this.v,
                s = e[0],
                o = e[1],
                n = e[2],
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(s, -n * a + o * r, n * r - o * a)
        }, s.prototype.rotateY = function (t, i) {
            i = i || this.register;
            var e = this.v,
                s = e[0],
                o = e[1],
                n = e[2],
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(-n * a + s * r, o, n * r + s * a)
        }, s.prototype.rotateZ = function (t, i) {
            i = i || this.register;
            var e = this.v,
                s = e[0],
                o = e[1],
                n = e[2],
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(-o * a + s * r, o * r + s * a, n)
        }, s.prototype.dot = function (t) {
            var i = this.v,
                e = t.v;
            return i[0] * e[0] + i[1] * e[1] + i[2] * e[2]
        }, s.prototype.normSquared = function () {
            return this.dot(this)
        }, s.prototype.norm = function () {
            return Math.sqrt(this.normSquared())
        }, s.prototype.normalize = function (t, i) {
            t = t || 1, i = i || this.register;
            var e = 1e-7,
                s = this.norm();
            return Math.abs(s) > e ? this.mult(t / s, i) : i.setXYZ(t, 0, 0)
        }, s.prototype.clone = function () {
            return new s(this.v)
        }, s.prototype.isZero = function () {
            var t = this.v;
            return !t[0] && !t[1] && !t[2]
        }, s.prototype.get = function () {
            return this.v
        }, s.prototype.set = function (t) {
            var i = t.v,
                e = this.v;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], this != this.register && this.register.clear(), this
        }, s.prototype.setXYZ = function (t, i, e) {
            return this.register.clear(), this.v = [t, i, e], this
        }, s.prototype.clear = function () {
            this.v = [0, 0, 0]
        }, s.prototype.cap = function (t) {
            if (1 / 0 == t) return this;
            var i = this.norm();
            return i > t && this.normalize().mult(t, this), this
        }, s.prototype.project = function (t, i) {
            return i = i || this.register, t.mult(this.dot(t), i)
        }, s.prototype.reflect = function (t, i) {
            return i = i || this.register, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, s.prototype.register = new s(0, 0, 0), e.exports = s
    }
); 