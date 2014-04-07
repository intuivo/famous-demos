define(
	"famous-math/Quaternion", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Matrix"
	], 
	function (t, i, e) 
	{
        function s(t, i, e, s) {
            return this.w = void 0 !== t ? t : 1, this.x = i || 0, this.y = e || 0, this.z = s || 0, this
        }

        t("famous/Matrix"), s.prototype.makeFromAngleAndAxis = function (t, i) {
            i.normalize();
            var e = .5 * t,
                s = Math.sin(e);
            return this.x = s * i.x, this.y = s * i.y, this.z = s * i.z, this.w = Math.cos(e), this
        }, s.prototype.clone = function () {
            return new s(this.w, this.x, this.y, this.z)
        }, s.prototype.setWXYZ = function (t, i, e, s) {
            return this.w = t, this.x = i, this.y = e, this.z = s, this
        }, s.prototype.set = function (t) {
            return this.w = t.w, this.x = t.x, this.y = t.y, this.z = t.z, this
        }, s.prototype.clear = function () {
            return this.w = 1, this.x = 0, this.y = 0, this.z = 0, this
        }, s.prototype.normalize = function () {
            var t = Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
            if (0 == t) this.w = 1, this.x = this.y = this.z = 0;
            else {
                var i = 1 / t;
                this.w *= i, this.x *= i, this.y *= i, this.z *= i
            }
            return this
        }, s.prototype.getMatrix = function () {
            return this.normalize(), [1 - 2 * this.y * this.y - 2 * this.z * this.z, 2 * this.x * this.y - 2 * this.z * this.w, 2 * this.x * this.z + 2 * this.y * this.w, 0, 2 * this.x * this.y + 2 * this.z * this.w, 1 - 2 * this.x * this.x - 2 * this.z * this.z, 2 * this.y * this.z - 2 * this.x * this.w, 0, 2 * this.x * this.z - 2 * this.y * this.w, 2 * this.y * this.z + 2 * this.x * this.w, 1 - 2 * this.x * this.x - 2 * this.y * this.y, 0, 0, 0, 0, 1]
        }, s.prototype.multiply = function (t, i) {
            return i = i || this.register, i.w = this.w * t.w - this.x * t.x - this.y * t.y - this.z * t.z, i.x = this.w * t.x + this.x * t.w + this.y * t.z - this.z * t.y, i.y = this.w * t.y - this.x * t.z + this.y * t.w + this.z * t.x, i.z = this.w * t.z + this.x * t.y - this.y * t.x + this.z * t.w, i
        }, s.prototype.isEqual = function (t) {
            return t.w == this.w && t.x == this.x && t.y == this.y && t.z == this.z ? !0 : !1
        }, s.prototype.dot = function (t) {
            return this.w * t.w + this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.add = function (t, i) {
            return i = i || this.register, i.w = this.w + t.w, i.x = this.x + t.x, i.y = this.y + t.y, i.z = this.z + t.z, i
        }, s.prototype.sub = function (t, i) {
            return i = i || this.register, i.w = this.w - t.w, i.x = this.x - t.x, i.y = this.y - t.y, i.z = this.z - t.z, i
        }, s.prototype.normSquared = function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }, s.prototype.norm = function () {
            return Math.sqrt(this.normSquared())
        }, s.prototype.conj = function (t) {
            return t = t || this.register, t.w = this.w, t.x = -this.x, t.y = -this.y, t.z = -this.z, t
        }, s.prototype.inverse = function (t) {
            return t = t || this.register, this.conj(t), t.scalarDivide(this.normSquared(), t), t
        }, s.prototype.scalarDivide = function (t, i) {
            return i = i || this.register, t = 1 / t, i.w = this.w * t, i.x = this.x * t, i.y = this.y * t, i.z = this.z * t, i
        }, s.prototype.scalarMult = function (t, i) {
            return i = i || this.register, i.w = this.w * t, i.x = this.x * t, i.y = this.y * t, i.z = this.z * t, i
        }, s.prototype.isZero = function () {
            return 0 == this.x && 0 == this.y && 0 == this.z && 1 == this.w ? !0 : !1
        }, s.prototype.negate = function () {
            return this.w = -this.w, this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }, s.prototype.zeroRotation = function () {
            return this.x = 0, this.y = 0, this.z = 0, this.w = 1, this
        }, s.prototype.slerp = function (t, i, e) {
            e = e || this.register;
            var s, o, n, r, a;
            return this.to.set(t), this.from.set(this), o = this.dot(t), 0 > o && (o = -o, this.to.negate()), 1 - o > this.epsilon ? (s = Math.acos(o), n = Math.sin(s), r = Math.sin((1 - i) * s) / n, a = Math.sin(i * s) / n) : (r = 1 - i, a = i), this.from.scalarMult(r, this.from), this.to.scalarMult(a, this.to), this.from.add(this.to, e), e
        }, s.prototype.epsilon = 1e-5, s.prototype.from = new s(0, 0, 0, 0), s.prototype.to = new s(0, 0, 0, 0), s.prototype.register = new s(0, 0, 0, 0), s.prototype.zero = new s(0, 0, 0, 0), s.prototype.one = new s(1, 1, 1, 1), e.exports = s
    }
); 