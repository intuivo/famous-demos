define(
	"famous-math/Vector", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            return 1 == arguments.length ? (t instanceof Array && this.setXYZ(t[0], t[1], t[2]), "Vector" == t.constructor.name && this.set(t)) : (this.x = t || 0, this.y = i || 0, this.z = e || 0), this
        }

        s.prototype.add = function (t, i) {
            return i = i || this.register, i.setXYZ(this.x + t.x, this.y + t.y, this.z + t.z)
        }, s.prototype.sub = function (t, i) {
            return i = i || this.register, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
        }, s.prototype.mult = function (t, i) {
            return i = i || this.register, i.setXYZ(t * this.x, t * this.y, t * this.z)
        }, s.prototype.div = function (t, i) {
            return this.mult(1 / t, i)
        }, s.prototype.cross = function (t, i) {
            return i = i || this.register, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
        }, s.prototype.rotate = function (t, i) {
            var e = t.x,
                s = t.y,
                o = t.z;
            return this.rotateX(e, i).rotateY(s, i).rotateZ(o, i)
        }, s.prototype.rotateX = function (t, i) {
            i = i || this.register;
            var e = this.x,
                s = this.y,
                o = this.z,
                n = Math.cos(t),
                r = Math.sin(t);
            return i.setXYZ(e, -o * r + s * n, o * n - s * r)
        }, s.prototype.rotateY = function (t, i) {
            i = i || this.register;
            var e = this.x,
                s = this.y,
                o = this.z,
                n = Math.cos(t),
                r = Math.sin(t);
            return i.setXYZ(-o * r + e * n, s, o * n + e * r)
        }, s.prototype.rotateZ = function (t, i) {
            i = i || this.register;
            var e = this.x,
                s = this.y,
                o = this.z,
                n = Math.cos(t),
                r = Math.sin(t);
            return i.setXYZ(-s * r + e * n, s * n + e * r, o)
        }, s.prototype.dot = function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
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
            return new s(this.x, this.y, this.z)
        }, s.prototype.isZero = function () {
            return !this.x && !this.y && !this.z
        }, s.prototype.set = function (t) {
            return t instanceof Array ? (this.x = t[0], this.y = t[1], this.z = t[2] || 0) : (this.x = t.x, this.y = t.y, this.z = t.z), this != this.register && this.register.clear(), this
        }, s.prototype.setXYZ = function (t, i, e) {
            return this.register.clear(), this.x = t, this.y = i, this.z = e, this
        }, s.prototype.clear = function () {
            this.x = 0, this.y = 0, this.z = 0
        }, s.prototype.cap = function (t) {
            if (1 / 0 == t) return this;
            var i = this.norm();
            return i > t && this.normalize().mult(t, this), this
        }, s.prototype.project = function (t, i) {
            return i = i || this.register, t.mult(this.dot(t), i)
        }, s.prototype.reflect = function (t, i) {
            return i = i || this.register, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, s.prototype.toArray = function () {
            return [this.x, this.y, this.z]
        }, s.prototype.fromArray = function (t) {
            this.x = t[0], this.y = t[1], this.z = t[2]
        }, s.prototype.get = function () {
            return this.toArray()
        }, s.prototype.register = new s(0, 0, 0), s.prototype.zero = new s(0, 0, 0), s.prototype.one = new s(1, 1, 1), e.exports = s
    }
); 