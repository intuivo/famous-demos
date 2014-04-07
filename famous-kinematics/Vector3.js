define(
	"famous-kinematics/Vector3", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            return this.x = t || 0, this.y = i || 0, this.z = e || 0, this
        }
        s.prototype = {
            set: function (t, i, e) {
                return this.x = t || 0, this.y = i || 0, this.z = e || 0, this
            },
            add: function (t) {
                return new s(this.x + t.x, this.y + t.y, this.z + t.z)
            },
            sub: function (t) {
                return new s(this.x - t.x, this.y - t.y, this.z - t.z)
            },
            mult: function (t) {
                return new s(t * this.x, t * this.y, t * this.z)
            },
            div: function (t) {
                return new s(1 / t * this.x, 1 / t * this.y, 1 / t * this.z)
            },
            dot: function (t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            },
            norm: function () {
                return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2))
            },
            toArray: function () {
                return [this.x, this.y, this.z]
            },
            toScreen: function () {
                return world.toScreen(this)
            },
            clone: function () {
                return new s(this.x, this.y, this.z)
            },
            normalize: function () {
                var t = this.norm();
                return 0 != t ? this.div(t) : this
            },
            reflect: function (t, i) {
                i = i || 1;
                var e = t.normalize(),
                    s = e.mult((1 + i) * e.dot(this));
                return this.subFrom(s)
            },
            addFrom: function (t) {
                return this.x += t.x, this.y += t.y, this.z += t.z, this
            },
            subFrom: function (t) {
                return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
            },
            multFrom: function (t) {
                return this.x *= t, this.y *= t, this.z *= t, this
            },
            divFrom: function (t) {
                return this.x *= 1 / t, this.y *= 1 / t, this.z *= 1 / t, this
            },
            rotateY: function (t) {
                var i = this.x,
                    e = this.z,
                    s = Math.cos(t),
                    o = Math.sin(t);
                this.x = i * s + i * o, this.z = e * -o + e * s
            }
        }, e.exports = s
    }
);