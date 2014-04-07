define(
	"famous-kinematics/VectorField3", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-kinematics/Vector3"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            this.p = t.p, this.q = t.q, this.r = t.r, i || (i = {}), this.width = i.width || window.innerWidth, this.height = i.height || window.innerHeight, this.depth = i.depth || Math.max(this.width, this.height)
        }

        function o(t, i, e) {
            return {
                u: 1 * t / this.width,
                v: -1 * i / this.height,
                w: 1 * e / this.depth
            }
        }
        var n = t("famous-kinematics/Vector3");
        s.prototype.eval = function (t, i, e) {
            var s = o.call(this, t, i, e);
            return new n(this.p(s.u, s.v, s.w), -this.q(s.u, s.v, s.w), this.r(s.u, s.v, s.w))
        }, e.exports = s
    }
); 