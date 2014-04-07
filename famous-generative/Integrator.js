define(
	"famous-generative/Integrator", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i, e, s, o) {
            this.targeting = !0, this.target = i || 0, this.pos = t || 0, this.delta = this.target - this.pos, this.vel = 0, this.acc = 0, this.damping = e || .125, this.extForce = 0, this.extForceInQue = !1, this.velLimit = s || .125, this.accLimit = o || .0125
        }

        s.prototype.setPhysics = function (t, i, e) {
            this.damping = t, this.velLimit = i, this.accLimit = e
        }, s.prototype.update = function () {
            return this.targeting && (this.acc = 0, this.acc += this.goToTarget(), this.extForceInQue && (this.acc += this.extForce, this.extForceInQue = !1, this.extForce = 0), this.accLimitCheck(), this.acc -= this.vel * this.damping, this.vel += this.acc, this.velLimitCheck(), this.pos += this.vel), this.pos
        }, s.prototype.setTarget = function (t) {
            this.target = t
        }, s.prototype.setTargetAndHome = function (t) {
            this.target = t, this.pos = t
        }, s.prototype.getValue = function () {
            return this.pos
        }, s.prototype.goToTarget = function () {
            return this.delta = this.target - this.pos, this.delta
        }, s.prototype.addForce = function (t) {
            this.extForceInQue = !0, this.extForce += t
        }, s.prototype.accLimitCheck = function () {
            Math.abs(this.acc) > this.accLimit && (this.acc = this.acc > 0 ? this.accLimit : -this.accLimit)
        }, s.prototype.velLimitCheck = function () {
            Math.abs(this.vel) > this.velLimit && (this.vel = this.vel > 0 ? this.velLimit : -this.velLimit)
        }, e.exports = s
    }
); 