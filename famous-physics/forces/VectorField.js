define(
	"famous-physics/forces/VectorField", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/forces/Force", 
		"../math/Vector"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.opts = {
                strength: 1,
                field: s.FIELDS.CONSTANT
            }, t && this.setOpts(t), this.setFieldOptions(this.opts.field), this.timeDependent = 3 == this.opts.field.length, this.tOrig = void 0, this.register = new n(0, 0, 0), o.call(this)
        }

        var o = t("famous-physics/forces/Force"),
            n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.FIELDS = {
            CONSTANT: function (t, i) {
                return t.set(i.direction)
            },
            LINEAR: function (t, i) {
                return t.mult(i.k, t)
            },
            RADIAL_GRAVITY: function (t) {
                return t.mult(-1, t)
            },
            SPHERE_ATTRACTOR: function (t, i) {
                return t.mult((i.radius - t.norm()) / t.norm(), t)
            },
            POINT_ATTRACTOR: function (t, i) {
                return t.set(i.p.sub(t))
            }
        }, s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.evaluate = function (t, i) {
            return this.register.set(t), this.opts.field(this.register, this.opts, i)
        }, s.prototype.applyForce = function (t) {
            var i, e = this.force;
            this.timeDependent ? (this.tOrig && (this.tOrig = Date.now()), i = .001 * (Date.now() - this.tOrig)) : i = void 0;
            for (var s = 0; s < t.length; s++) {
                var o = t[s];
                e.set(this.evaluate(o.p, i).mult(o.m * this.opts.strength)), o.applyForce(e)
            }
        }, s.prototype.setFieldOptions = function (t) {
            var i = s.FIELDS;
            switch (t) {
            case i.CONSTANT:
                this.opts.direction || (this.opts.direction = new n(0, 1, 0));
                break;
            case i.POINT_ATTRACTOR:
                this.opts.p || (this.opts.p = new n(0, 0, 0));
                break;
            case i.SPHERE_ATTRACTOR:
                this.opts.radius || (this.opts.radius = 1);
                break;
            case i.LINEAR:
                this.opts.k || (this.opts.k = 1)
            }
        }, e.exports = s
    }
); 