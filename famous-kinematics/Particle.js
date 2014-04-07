define(
	"famous-kinematics/Particle", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-kinematics/VectorField3", 
		"famous-kinematics/Vector3"
	], 
	function (t, i, e) 
	{
        function s(t) {
            t = t || {}, this.id = t.id || 0, this.r = t.r || 20, this.m = t.m || this.r / 8, this.p = t.p || new r(0, 0, 0), this.v = t.v || new r(0, 0, 0), this.a = t.a || new r(0, 0, 0), this.friction = t.friction || 1, this.drag = t.drag || .1, this.pOrig = this.p.clone();
            var i = t.vf || {
                p: function () {
                    return 0
                },
                q: function () {
                    return 0
                },
                r: function () {
                    return 0
                }
            };
            this.setVectorField(i)
        }

        function o(t, i) {
            return t.eval(i.x, i.y, i.z)
        }
        var n = t("famous-kinematics/VectorField3"),
            r = t("famous-kinematics/Vector3");
        s.prototype.update = function (t) {
            t *= .12;
            var i = this.drag,
                e = o(this.vf, this.p),
                s = this.v.mult(-i);
            this.a = e.add(s).div(this.m), this.v = this.v.add(this.a.mult(t)), this.p = this.p.add(this.v.mult(t))
        }, s.prototype.getPos = function () {
            return this.p
        }, s.prototype.getTranslate = function () {
            return this.p
        }, s.prototype.setVectorField = function (t) {
            this.vf = new n(t)
        }, e.exports = s
    }
); 