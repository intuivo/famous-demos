define(
    "famous-physics/math/Vector", 
    [
        "require", 
        "exports", 
        "module"
    ], 
    function (t, i, e) 
    {
        function s(t, i, e) {
            return 1 == arguments.length ? (t instanceof Array && this.setXYZ.apply(this, t), t instanceof s && this.set(t)) : (this.x = t || 0, this.y = i || 0, this.z = e || 0), this
        }

        var o = new s(0, 0, 0);
        s.prototype.add = function (t, i) {
            return i = i || o, i.setXYZ(this.x + (t.x || 0), this.y + (t.y || 0), this.z + (t.z || 0))
        }, s.prototype.sub = function (t, i) {
            return i = i || o, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
        }, s.prototype.mult = function (t, i) {
            return i = i || o, i.setXYZ(t * this.x, t * this.y, t * this.z)
        }, s.prototype.div = function (t, i) {
            return this.mult(1 / t, i)
        }, s.prototype.cross = function (t, i) {
            return i = i || o, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
        }, s.prototype.equals = function (t) {
            return t.x == this.x && t.y == this.y && t.z == this.z
        }, s.prototype.rotate = function (t, i) {
            var e = t.x,
                s = t.y,
                o = t.z;
            return this.rotateX(e, i).rotateY(s, i).rotateZ(o, i)
        }, s.prototype.rotateX = function (t, i) {
            i = i || o;
            var e = this.x,
                s = this.y,
                n = this.z,
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(e, -n * a + s * r, n * r - s * a)
        }, s.prototype.rotateY = function (t, i) {
            i = i || o;
            var e = this.x,
                s = this.y,
                n = this.z,
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(-n * a + e * r, s, n * r + e * a)
        }, s.prototype.rotateZ = function (t, i) {
            i = i || o;
            var e = this.x,
                s = this.y,
                n = this.z,
                r = Math.cos(t),
                a = Math.sin(t);
            return i.setXYZ(-s * a + e * r, s * r + e * a, n)
        }, s.prototype.dot = function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.normSquared = function () {
            return this.dot(this)
        }, s.prototype.norm = function () {
            return Math.sqrt(this.normSquared())
        }, s.prototype.normalize = function (t, i) {
            t = void 0 !== t ? t : 1, i = i || o;
            var e = 1e-7,
                s = this.norm();
            return Math.abs(s) > e ? this.mult(t / s, i) : i.setXYZ(t, 0, 0)
        }, s.prototype.clone = function () {
            return new s(this.x, this.y, this.z)
        }, s.prototype.isZero = function () {
            return !(this.x || this.y || this.z)
        }, s.prototype.set = function (t) {
            return t instanceof Array ? (this.x = t[0], this.y = t[1], this.z = t[2] || 0) : (this.x = t.x, this.y = t.y, this.z = t.z || 0), this !== o && o.clear(), this
        }, s.prototype.put = function (t) {
            t.set(o)
        }, s.prototype.setXYZ = function (t, i, e) {
            return o.clear(), this.x = t, this.y = i, this.z = e, this
        }, s.prototype.clear = function () {
            this.x = 0, this.y = 0, this.z = 0
        }, s.prototype.cap = function (t, i) {
            if (i = i || o, 1 / 0 === t) return i;
            var e = this.norm();
            return e > t && this.normalize().mult(t, i), i
        }, s.prototype.project = function (t, i) {
            return i = i || o, t.mult(this.dot(t), i)
        }, s.prototype.reflect = function (t, i) {
            return i = i || o, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, s.prototype.toArray = function () {
            return [this.x, this.y, this.z]
        }, s.prototype.get = function () {
            return this.toArray()
        }, s.prototype.zero = new s(0, 0, 0), s.prototype.one = new s(1, 1, 1), e.exports = s
    }
);