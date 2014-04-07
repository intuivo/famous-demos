define(
	"famous-generative/Particle", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-math/Vector"
	], 
	function (t, i, e) 
	{
        function s() {
            this.theta = 0, this.speed = .01, this.home = new o(0, 0, 0), this.ppos = new o(0, 0, 0), this.pos = new o(0, 0, 0), this.vel = new o(0, 0, 0), this.acc = new o(0, 0, 0), this.velLimit = 10, this.accLimit = .25, this.radius = .5
        }

        var o = t("famous-math/Vector");
        s.prototype.update = function () {
            this.ppos.set(this.pos), this.ppos.sub(this.pos, this.vel), this.vel.add(this.acc.cap(this.accLimit), this.vel), this.pos.add(this.vel.cap(this.velLimit), this.pos)
        }, e.exports = s
    }
); 