define(
	"famous-physics/PhysicsEngine", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/bodies/Particle", 
		"famous-physics/bodies/Body", 
		"famous-physics/bodies/Circle", 
		"famous-physics/bodies/Rectangle", 
		"famous-physics/forces/Force", 
		"famous-physics/constraints/Constraint", 
		"famous-physics/integrator/SymplecticEuler"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.opts = {
                speed: 1,
                steps: 1,
                vCap: 1 / 0,
                aCap: 1 / 0,
                constraintSteps: 2,
                constraintTolerance: 1e-4
            }, t && this.setOpts(t), this._particles = [], this._agents = {}, this._forces = [], this._constraints = [], this._playing = !0, this._buffer = 0, this._timestep = 1e3 / 60 / this.opts.steps, this._prevTime = void 0, this._currTime = void 0, this._integrator = new E({
                vCap: this.opts.vCap,
                aCap: this.opts.aCap
            }), this._currAgentId = 0, this.BODIES = s.BODIES
        }

        function o() {
            return Date.now()
        }

        function n(t, i, e) {
            void 0 === i && (i = this.getParticles()), i instanceof Array || (i = [i]), this._agents[this._currAgentId] = {
                agent: t,
                targets: i,
                source: e
            };
            var s = this._currAgentId,
                o = r.call(this, t);
            return o.push(s), this._currAgentId++
        }

        function r(t) {
            return t instanceof k ? this._forces : t instanceof I ? this._constraints : void 0
        }

        function a(t) {
            return this._agents[t]
        }

        function h(t) {
            var i = a.call(this, this._forces[t]);
            i.agent.applyForce(i.targets, i.source)
        }

        function u(t, i) {
            var e = this._agents[this._constraints[t]];
            return e.agent.applyConstraint(e.targets, e.source, i)
        }

        function p() {
            for (var t = this._forces.length - 1; t > -1; t--) h.call(this, t)
        }

        function c(t) {
            var i = 1 / 0,
                e = 0;
            for (this.opts.constraintTolerance; e < this.opts.constraintSteps;) {
                i = 0;
                for (var s = this._constraints.length - 1; s > -1; s--) i += u.call(this, s, t);
                e++
            }
        }

        function l(t) {
            t.immunity || t.updateAcceleration()
        }

        function f(t, i) {
            t.immunity || this._integrator.integrateVelocity(t, i)
        }

        function d(t) {
            !t.immunity && t instanceof M && t.updateAngularVelocity()
        }

        function m(t, i) {
            !t.immunity && t instanceof M && this._integrator.integrateAngularMomentum(t, i)
        }

        function y(t, i) {
            t.immunity || this._integrator.integratePosition(t, i)
        }

        function g(t, i) {
            !t.immunity && t instanceof M && this._integrator.integrateOrientation(t, i)
        }

        function v() {
            this.forEachParticle(l)
        }

        function S(t) {
            this.forEachParticle(f, t)
        }

        function b(t) {
            this.forEachParticle(y, t)
        }

        function x() {
            this.forEachParticle(d)
        }

        function w(t) {
            this.forEachParticle(m, t)
        }

        function z(t) {
            this.forEachParticle(g, t)
        }

        function T(t) {
            p.call(this), v.call(this), S.call(this, t), w.call(this, t), x.call(this, t), c.call(this, t), b.call(this, t), z.call(this, t)
        }

        function O(t, i) {
            i.push(t.render())
        }

        var _ = t("famous-physics/bodies/Particle"),
            M = t("famous-physics/bodies/Body"),
            C = t("famous-physics/bodies/Circle"),
            P = t("famous-physics/bodies/Rectangle"),
            k = t("famous-physics/forces/Force"),
            I = t("famous-physics/constraints/Constraint"),
            E = t("famous-physics/integrator/SymplecticEuler");
        s.BODIES = {
            POINT: _,
            BODY: M,
            CIRCLE: C,
            RECTANGLE: P
        }, s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] && (this.opts[i] = t[i])
        }, s.prototype.addBody = function (t) {
            return this._particles.push(t), t
        }, s.prototype.createParticle = function (t) {
            return this.addBody(new _(t))
        }, s.prototype.createBody = function (t) {
            var i = t.shape || s.BODIES.POINT;
            return this.addBody(new i(t))
        }, s.prototype.remove = function (t) {
            var i = this._particles.indexOf(t);
            if (i > -1) {
                for (var e = 0; e < Object.keys(this._agents); e++) this.detachFrom(e, t);
                this._particles.splice(i, 1)
            }
        }, s.prototype.attach = function (t, i, e) {
            if (t instanceof Array) {
                for (var s = [], o = 0; o < t.length; o++) s[o] = n.call(this, t[o], i, e);
                return s
            }
            return n.call(this, t, i, e)
        }, s.prototype.attachTo = function (t, i) {
            a.call(this, t).targets.push(i)
        }, s.prototype.detach = function (t) {
            var i = this.getAgent(t),
                e = r.call(this, i),
                s = e.indexOf(t);
            e.splice(s, 1), delete this._agents[t]
        }, s.prototype.detachFrom = function (t, i) {
            var e = a.call(this, t);
            if (e.source === i) this.detach(t);
            else {
                var s = e.targets,
                    o = s.indexOf(i);
                o > -1 && s.splice(o, 1)
            }
        }, s.prototype.detachAll = function () {
            this._agents = {}, this._forces = [], this._constraints = [], this._currAgentId = 0
        }, s.prototype.getAgent = function (t) {
            return a.call(this, t).agent
        }, s.prototype.getParticles = function () {
            return this._particles
        }, s.prototype.getParticlesExcept = function (t) {
            var i = [];
            return this.forEachParticle(function (e) {
                -1 === t.indexOf(e) && i.push(e)
            }), i
        }, s.prototype.getPos = function (t) {
            return (t || this._particles[0]).getPos()
        }, s.prototype.getVel = function (t) {
            return (t || this._particles[0]).getVel()
        }, s.prototype.getTransform = function (t) {
            return (t || this._particles[0]).getTransform()
        }, s.prototype.setPos = function (t, i) {
            (i || this._particles[0]).setPos(t)
        }, s.prototype.setVel = function (t, i) {
            (i || this._particles[0]).setVel(t)
        }, s.prototype.forEachParticle = function (t, i) {
            for (var e = this.getParticles(), s = 0, o = e.length; o > s; s++) t.call(this, e[s], i)
        }, s.prototype.step = function () {
            if (this._playing) {
                this._prevTime || (this._prevTime = o()), this._currTime = o();
                var t = this._currTime - this._prevTime;
                this._prevTime = this._currTime, 0 != t && T.call(this, this.opts.speed * this._timestep)
            }
        }, s.prototype.render = function () {
            this.step();
            var t = [];
            return this.forEachParticle(O, t), t
        }, s.prototype.play = function () {
            this._prevTime = o(), this._playing = !0
        }, s.prototype.pause = function () {
            this._playing = !1
        }, s.prototype.toggle = function () {
            this._playing ? this.pause() : this.play()
        }, s.prototype.reverseTime = function () {
            this.opts.speed *= -1
        }, s.prototype.reverseVelocities = function () {
            this.forEachParticle(function (t) {
                t.v.mult(-1, t.v)
            })
        }, e.exports = s
    }
);