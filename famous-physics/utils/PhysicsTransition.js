define(
	"famous-physics/utils/PhysicsTransition", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/PhysicsEngine", 
		"famous-physics/constraints/StiffSpring", 
		"famous-physics/constraints/Wall", 
		"famous-physics/math/Vector"
		], 
	function (t, i, e) 
	{
        function s(t) {
            this.defaultDefinition = {
                spring: {
                    period: 300,
                    dampingRatio: .5
                },
                v: 0,
                wall: !1
            }, t = t || 0, this._anchor = new v(t, 0, 0), this.endState = t, this.prevState = void 0, this.direction = void 0, this.atRest = !0, this.spring = new y({
                anchor: this._anchor
            }), this.wall = new g({
                restitution: .5,
                k: 0,
                n: new v(-1, 0, 0)
            }), this.attachedWall = void 0, this.PE = new m, this.particle = this.PE.createParticle({
                p: [t, 0, 0]
            }), this.attachedSpring = this.PE.attach(this.spring, this.particle)
        }

        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                S > t && (this.atRest = !0, p.call(this, this.endState), this.callback && this.callback())
            }
        }

        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }

        function r(t) {
            this.spring.setOpts(t.spring), c.call(this, t.v), t.wall ? h.call(this) : u.call(this)
        }

        function a(t) {
            this.prevState = this.endState, this.endState = t, this.direction = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, void 0 !== this.attachedSpring && (this._anchor.x = t), void 0 !== this.attachedWall && this.wall.setOpts({
                d: Math.abs(t),
                n: [-this.direction, 0, 0]
            }), c.call(this, this.direction * f.call(this))
        }

        function h() {
            this.attachedWall = this.PE.attach(this.wall, this.particle)
        }

        function u() {
            void 0 !== this.attachedWall && this.PE.detach(this.attachedWall)
        }

        function p(t) {
            this.particle.p.x = t
        }

        function c(t) {
            this.particle.v.x = t
        }

        function l() {
            return this.particle.p.x
        }

        function f() {
            return this.particle.v.x
        }

        function d(t) {
            this.callback = t
        }

        var m = t("famous-physics/PhysicsEngine"),
            y = t("famous-physics/constraints/StiffSpring"),
            g = t("famous-physics/constraints/Wall"),
            v = t("famous-physics/math/Vector");
        s.forceFunctions = y.forceFunctions;
        var S = 1e-5;
        s.prototype.reset = function (t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, p.call(this, t), c.call(this, i), a.call(this, t), d.call(this, void 0)
        }, s.prototype.getVelocity = function () {
            return o.call(this), f.call(this)
        }, s.prototype.halt = function () {
            this.set(this.get())
        }, s.prototype.get = function () {
            return o.call(this), l.call(this)
        }, s.prototype.set = function (t, i, e) {
            return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), d.call(this, e), void 0) : (this.reset(t), e && e(), void 0)
        }, e.exports = s
    }
);