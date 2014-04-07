define(
	"famous-physics/forces/Drag", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/forces/Force"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.opts = {
                strength: .01,
                forceFunction: s.FORCE_FUNCTIONS.LINEAR
            }, t && this.setOpts(t), o.call(this)
        }

        var o = t("famous-physics/forces/Force");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.FORCE_FUNCTIONS = {
            LINEAR: function (t) {
                return t
            },
            QUADRATIC: function (t) {
                return t.mult(t.norm())
            }
        }, s.prototype.applyForce = function (t) {
            var i = this.opts.strength,
                e = this.opts.forceFunction,
                s = this.force;
            for (var o in t) {
                var n = t[o];
                e(n.v).mult(-i).put(s), n.applyForce(s), n.L && n.L.mult(1 - this.opts.strength, n.L)
            }
        }, s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] = t[i]
        }, e.exports = s
    }
); 