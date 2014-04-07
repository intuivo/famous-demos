define(
	"famous-physics/utils/WallTransition", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/PhysicsEngine", 
		"famous-physics/forces/Spring", 
		"famous-physics/constraints/Wall", 
		"famous-physics/math/Vector"
	], 
	function (t, i, e) 
	{
        function s(t) {
            t = t || 0, this._anchor = new y(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest = !0, this.spring = new d({
                anchor: this._anchor
            }), this.wall = new m, this.PE = new f, this.particle = this.PE.createParticle({
                p: [t, 0, 0]
            }), this.PE.attach(this.spring, this.particle), this.PE.attach(this.wall, this.particle)
        }

        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                g > t && (this.atRest = !0, h.call(this, this.endState), this.callback && this.callback())
            }
        }

        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }

        function r(t) {
            var i = s.DEFAULT_OPTIONS;
            void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), void 0 === t.restitution && (t.restitution = i.restitution), this.spring.setOpts({
                period: t.period,
                dampingRatio: t.dampingRatio
            }), this.wall.setOpts({
                restitution: t.restitution
            }), u.call(this, t.velocity)
        }

        function a(t) {
            this.prevState = this.endState, this.endState = t;
            var i;
            i = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, this._anchor.x = t, this.wall.setOpts({
                d: Math.abs(t),
                n: [-i, 0, 0]
            }), u.call(this, i * c.call(this))
        }

        function h(t) {
            this.particle.p.x = t
        }

        function u(t) {
            this.particle.v.x = t
        }

        function p() {
            return this.particle.p.x
        }

        function c() {
            return this.particle.v.x
        }

        function l(t) {
            this.callback = t
        }

        var f = t("famous-physics/PhysicsEngine"),
            d = t("famous-physics/forces/Spring"),
            m = t("famous-physics/constraints/Wall"),
            y = t("famous-physics/math/Vector");
        s.DEFAULT_OPTIONS = {
            period: 300,
            dampingRatio: 0,
            restitution: .4,
            velocity: 0
        }, s.forceFunctions = d.forceFunctions;
        var g = 1e-5;
        s.prototype.reset = function (t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
        }, s.prototype.getVelocity = function () {
            return o.call(this), c.call(this)
        }, s.prototype.halt = function () {
            this.set(this.get())
        }, s.prototype.get = function () {
            return o.call(this), p.call(this)
        }, s.prototype.set = function (t, i, e) {
            return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), l.call(this, e), void 0) : (this.reset(t), e && e(), void 0)
        }, e.exports = s
    }
); 