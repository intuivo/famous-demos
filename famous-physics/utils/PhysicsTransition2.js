define(
	"famous-physics/utils/PhysicsTransition2", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/PhysicsEngine", 
		"famous-physics/constraints/StiffSpring", 
		"famous-physics/forces/VectorField", 
		"famous-physics/constraints/Wall", 
		"famous-physics/math/Vector", 
		"famous/EventHandler"
	], 
	function (t, i, e) 
	{
        function s(t) {
            t = t || 0, this.endState = t, this.prevState = void 0, this.direction = void 0, this.defaultDefinition = {
                transition: {
                    curve: {
                        v: 1,
                        thrust: 0
                    },
                    duration: 500
                },
                bounce: {
                    period: 0,
                    dampingRatio: 0
                },
                walls: !1
            }, this._anchor = new O(t, 0, 0), this.stageOneActive = !1, this.attachedSpring = void 0, this.attachedWall = void 0, this.attachedThrust = void 0, this.eventHandler = new _, this.eventHandler.on("initStageTwo", y.bind(this)), this.PE = new x, this.particle = this.PE.createBody({
                p: [t, 0, 0],
                v: [0, 0, 0]
            }), this.spring = new w({
                anchor: this._anchor
            }), this.thrust = new z({
                strength: 0,
                field: z.FIELDS.CONSTANT,
                direction: [1, 0, 0]
            }), this.wall = new T({
                restitution: .5,
                k: 0,
                n: new O(-1, 0, 0)
            })
        }

        function o() {
            return this.particle.p.x <= this.endState ? 1 : -1
        }

        function n(t) {
            this.direction = t
        }

        function r() {
            1 == this.stageOneActive && this.direction != o.call(this) && this.eventHandler.emit("initStageTwo")
        }

        function a(t) {
            var i, e, o = t.transition.duration,
                n = t.transition.curve;
            "string" == typeof n && (n = s.TRANSITIONS[n]), e = this.direction * n.v, i = this.direction * n.thrust;
            var r = this.endState - this.particle.p.x;
            if (0 == o) this.v = e || 0, this.a = 0;
            else {
                var a;
                0 == i ? a = r / (e * o) : (0 > e * e + 2 * i * r && console.warn("unphysical choices for (v,a), target cannot be reached"), a = r > 0 ? (-e + Math.sqrt(e * e + 2 * i * r)) / (i * o) : (-e - Math.sqrt(e * e + 2 * i * r)) / (i * o)), this.v = a * e, this.a = a * a * i
            }
            var h = t.bounce;
            "string" == typeof h && (h = s.BOUNCE[h]), this.spring.setOpts({
                period: h.period,
                dampingRatio: h.dampingRatio
            }), this.wallsActive = t.walls
        }

        function h(t) {
            this.prevState = this.endState, this.endState = t, n.call(this, o.call(this))
        }

        function u(t) {
            void 0 === this.attachedSpring && (this._anchor.x = t, this.attachedSpring = this.PE.attach(this.spring, this.particle))
        }

        function p() {
            void 0 !== this.attachedSpring && (this.PE.detach(this.attachedSpring, this.particle), this.attachedSpring = void 0)
        }

        function c(t, i) {
            this.wallsActive && (this.wall.setOpts({
                d: Math.abs(t),
                n: [-i, 0, 0]
            }), this.attachedWall = this.PE.attach(this.wall, this.particle))
        }

        function l() {
            void 0 !== this.attachedWall && (this.PE.detach(this.attachedWall, this.particle), this.attachedWall = void 0)
        }

        function f(t) {
            this.thrust.setOpts({
                strength: t
            }), this.attachedThrust = this.PE.attach(this.thrust, this.particle)
        }

        function d() {
            void 0 !== this.attachedThrust && (this.PE.detach(this.attachedThrust), this.attachedThrust = void 0)
        }

        function m() {
            this.stageOneActive = !0, p.call(this), d.call(this), l.call(this), f.call(this, this.a), g.call(this, this.v), M = Date.now()
        }

        function y() {
            console.log("Duration : ", Date.now() - M), this.stageOneActive = !1, d.call(this), v.call(this, this.endState), u.call(this, this.endState), c.call(this, this.endState, this.direction)
        }

        function g(t) {
            this.particle.v.x = t
        }

        function v(t) {
            this.particle.p.x = t
        }

        function S(t) {
            this.spring.setOpts({
                callback: t
            })
        }

        function b() {
            this.PE.step(), r.call(this)
        }

        var x = t("famous-physics/PhysicsEngine"),
            w = t("famous-physics/constraints/StiffSpring"),
            z = t("famous-physics/forces/VectorField"),
            T = t("famous-physics/constraints/Wall"),
            O = t("famous-physics/math/Vector"),
            _ = t("famous/EventHandler");
        s.TRANSITIONS = {
            linear: {
                v: 1,
                thrust: 0
            },
            easeIn: {
                v: 0,
                thrust: 2
            },
            backIn: {
                v: -1,
                thrust: 2
            }
        }, s.BOUNCE = {
            none: {
                dampingRatio: 0,
                period: 0
            },
            low: {
                dampingRatio: .5,
                period: 300
            },
            medium: {
                dampingRatio: .3,
                period: 600
            },
            high: {
                dampingRatio: .1,
                period: 800
            }
        };
        var M;
        s.forceFunctions = w.forceFunctions, s.prototype.reset = function (t, i) {
            i = i || 0, t = t || 0, this.PE.detachAll(), v.call(this, t), g.call(this, i), S.call(this, void 0)
        }, s.prototype.set = function (t, i, e) {
            return i ? (h.call(this, t), a.call(this, i), S.call(this, e), m.call(this), void 0) : (this.reset(t), e && e(), void 0)
        }, s.prototype.get = function () {
            return b.call(this), this.particle.p.x
        }, s.prototype.getVelocity = function () {
            return b.call(this), this.particle.v.x
        }, s.prototype.getTarget = function () {
            return this.endState
        }, e.exports = s
    }
); 