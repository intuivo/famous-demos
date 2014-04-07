define(
	"famous-ui/Buttons/SpringButton", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/PhysicsEngine", 
		"famous/View", 
		"famous-physics/forces/Spring", 
		"famous/Surface", 
		"famous-physics/math/Vector", 
		"famous-utils/Utils"
	], 
	function (t, i, e) 
	{
        function s() {
            a.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.PE = new r, this.available = !0, this.anchor = this.PE.createParticle({
                p: this.options.pos,
                v: this.options.vel,
                immunity: !0
            }), this.particle = this.PE.createParticle({
                p: this.options.pos,
                v: this.options.vel
            }), this.spring = new h({
                period: this.options.springPeriod,
                dampingRatio: this.options.springDampingRatio,
                length: this.options.springLength,
                anchor: this.options.pos,
                callback: n.bind(this)
            }), this.PE.attach(this.spring, this.particle), this.surface = new u({
                size: this.options.size,
                content: this.options.content,
                classes: this.options.surfaceClasses,
                properties: this.options.surfaceProperties
            }), this.surface.pipe(this), this.on("click", o.bind(this))
        }

        function o() {
            this._addForce(this.options.clickForce)
        }

        function n() {
            this.options.limitTouches && (this.available = !0)
        }

        var r = t("famous-physics/PhysicsEngine"),
            a = t("famous/View"),
            h = t("famous-physics/forces/Spring"),
            u = t("famous/Surface");
        t("famous-physics/math/Vector");
        var p = t("famous-utils/Utils");
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            size: [200, 200],
            pos: [0, 0, 0],
            vel: [0, 0, 0],
            springPeriod: 200,
            springDampingRatio: .8,
            springLength: 0,
            content: "",
            surfaceProperties: {},
            surfaceClasses: [],
            limitTouches: !1,
            forceMult: [10, 10, 10],
            padding: 0,
            callbackTolerance: 1e-4,
            clickForce: [0, 0, -.005]
        }, s.prototype.setPeriod = function (t) {
            this.spring.setPeriod(t)
        }, s.prototype.setDamping = function (t) {
            this.spring.setDampingRatio(t)
        }, s.prototype.setCallbackTolerance = function (t) {
            this.spring.opts.callbackTolerance = t
        }, s.prototype.addForce = function (t) {
            var i = {
                x: 0,
                y: 0,
                z: 0
            };
            p.isArray(t) ? (i.x = t[0] * this.options.forceMult[0], i.y = t[1] * this.options.forceMult[1], i.z = t[2] * this.options.forceMult[2]) : (i.x = t.x * this.options.forceMult[0], i.y = t.y * this.options.forceMult[1], i.z = t.z * this.options.forceMult[2]), this.options.limitTouches ? this.available && (this.particle.applyForce(i), this.available = !1, this.emit("selection")) : (this.particle.applyForce(i), this.emit("selection"))
        }, s.prototype.render = function () {
            return this.PE.step(), {
                opacity: 1,
                transform: this.PE.getTransform(this.particle),
                target: this.surface.render()
            }
        }, e.exports = s
    }
); 