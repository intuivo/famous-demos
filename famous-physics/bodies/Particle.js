define(
	"famous-physics/bodies/Particle", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/RenderNode", 
		"famous-physics/math/Vector", 
		"famous/Matrix"
	], 
	function (t, i, e) 
	{
        function s(t) {
            t = t || {}, this.p = t.p ? new n(t.p) : new n(0, 0, 0), this.v = t.v ? new n(t.v) : new n(0, 0, 0), this.a = t.a ? new n(t.a) : new n(0, 0, 0), this.f = t.f ? new n(t.f) : new n(0, 0, 0), this.m = void 0 !== t.m ? t.m : 1, this.restitution = void 0 !== t.restitution ? t.restitution : .5, this.dissipation = void 0 !== t.dissipation ? t.dissipation : 0, this.immunity = void 0 !== t.immunity ? t.immunity : !1, this.axis = void 0 !== t.axis ? t.axis : void 0, this.mInv = 1 / this.m, this.size = [0, 0, 0], this.node = void 0, this.spec = {
                size: [0, 0],
                target: {
                    origin: [.5, .5],
                    transform: void 0,
                    target: void 0
                }
            }
        }

        var o = t("famous/RenderNode"),
            n = t("famous-physics/math/Vector"),
            r = t("famous/Matrix");
        s.AXIS = {
            X: 0,
            Y: 1,
            Z: 2
        }, s.prototype.setPos = function (t) {
            this.p.set(t)
        }, s.prototype.getPos = function () {
            return this.p.get()
        }, s.prototype.setVel = function (t, i) {
            (!this.getImmunity() || i) && this.v.set(t)
        }, s.prototype.getVel = function () {
            return this.v.get()
        }, s.prototype.setMass = function (t) {
            this.m = t, this.mInv = 1 / t
        }, s.prototype.getMass = function () {
            return this.m
        }, s.prototype.setImmunity = function (t) {
            this.immunity = t
        }, s.prototype.getImmunity = function () {
            return this.immunity
        }, s.prototype.toggleImmunity = function () {
            this.setImmunity(!this.getImmunity())
        }, s.prototype.clear = function (t, i) {
            t = t || new n, i = i || new n, this.setPos(t), this.setVel(i), this.f.clear(), this.a.clear()
        }, s.prototype.applyForce = function (t) {
            this.immunity || this.f.add(t, this.f)
        }, s.prototype.applyImpulse = function (t) {
            this.immunity || this.v.add(t.mult(this.mInv), this.v)
        }, s.prototype.getEnergy = function () {
            return .5 * this.m * this.v.dot(this.v)
        }, s.prototype.updateAcceleration = function () {
            this.a.set(this.f.mult(this.mInv)), this.f.clear()
        }, s.prototype.getTransform = function () {
            var t = this.p;
            return void 0 !== this.axis && (s.AXIS.X == this.axis && (t.y = 0, t.z = 0), s.AXIS.Y == this.axis && (t.x = 0, t.z = 0), s.AXIS.Z == this.axis && (t.x = 0, t.y = 0)), r.translate(t.x, t.y, t.z)
        }, s.prototype.link = function (t) {
            return this.node = new o, this.node.link(t)
        }, s.prototype.add = function (t) {
            return this.node || (this.node = new o), this.node.add(t)
        }, s.prototype.render = function (t) {
            return t = t || this.node, t ? (this.spec.target.transform = this.getTransform(), this.spec.target.target = t.render(), this.spec) : void 0
        }, e.exports = s
    }
);