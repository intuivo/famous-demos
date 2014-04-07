define(
	"famous-generative/Touch", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/Matrix", 
		"famous-math/Vector", 
		"./Integrator", 
		"famous-utils/Utils"
	], 
	function (t, i, e) 
	{
        function s() {
            this.identifier = -1, this.modAmp = .05, this.modSpeed = .2, this.angle = 0, this.alive = !1, this.radius = 64, this.surface = new o({
                size: [2 * this.radius, 2 * this.radius]
            }), this.surface.addClass("touch"), this.pos = new r, this.mtx = n.identity, this.opacity = 0, this.damping = .3, this.velLimit = .25, this.accLimit = .1, this.integrator = new a(0, 0, this.damping, this.velLimit, this.accLimit), this.modulator = new a(0, 0), this.scale = 0, this.surfaceBack = new o({
                size: [2 * this.radius, 2 * this.radius]
            }), this.surfaceBack.addClass("touch-back"), this.mtxBack = n.identity, this.opacityBack = 0, this.backAlpha = 4, this.backIntegrator = new a(0, 0, .75, .25, .025)
        }

        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-math/Vector"),
            a = t("./Integrator"),
            h = t("famous-utils/Utils");
        s.prototype.setIdentifier = function (t) {
            this.identifier = t
        }, s.prototype.setRadius = function (t) {
            this.radius = t, this.surface.setSize([2 * this.radius, 2 * this.radius]), this.surfaceBack.setSize([2 * this.radius, 2 * this.radius])
        }, s.prototype.isAlive = function () {
            return this.alive || this.integrator.getValue() > 1e-7 ? !0 : !1
        }, s.prototype.update = function () {
            this.alive && (this.angle += this.modSpeed * this.modulator.update(), this.integrator.addForce(this.modAmp * Math.sin(this.angle))), this.opacity = this.integrator.update(), this.scale = this.integrator.getValue(), this.mtx = n.multiply(n.scale(this.scale, this.scale, 1), n.move(n.identity, this.pos.toArray()));
            var t = h.clamp(this.backIntegrator.update(), 0, 1);
            this.opacityBack = -this.backAlpha * t * t + this.backAlpha * t, this.mtxBack = n.multiply(n.scale(.5 * this.angle, .5 * this.angle, 1), n.move(n.identity, this.pos.toArray()))
        }, s.prototype.render = function () {
            return {
                transform: this.mtx,
                origin: [.5, .5],
                opacity: this.opacity,
                target: this.surface.render()
            }
        }, s.prototype.renderBack = function () {
            return {
                transform: this.mtxBack,
                origin: [.5, .5],
                opacity: this.opacityBack,
                target: this.surfaceBack.render()
            }
        }, s.prototype.touchstart = function (t, i) {
            this.angle = 0, this.freed = !1, this.alive = !0, this.integrator.setTarget(1), this.integrator.setPhysics(this.damping, this.velLimit, this.accLimit), this.backIntegrator.setTarget(1), this.modulator.setTarget(1), t = t - .5 * h.getWidth() + this.radius, i = i - .5 * h.getHeight() + this.radius, this.pos.setXYZ(t - this.radius, i - this.radius, 0)
        }, s.prototype.touchmove = function (t, i) {
            t = t - .5 * h.getWidth() + this.radius, i = i - .5 * h.getHeight() + this.radius, this.pos.setXYZ(t - this.radius, i - this.radius, 0)
        }, s.prototype.touchend = function () {
            this.alive = !1, this.integrator.setTarget(0), this.integrator.setPhysics(.1, .25, .0125), this.modulator.setTargetAndHome(0), this.backIntegrator.setTargetAndHome(0)
        }, e.exports = s
    }
); 