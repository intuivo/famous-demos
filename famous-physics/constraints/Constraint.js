define(
	"famous-physics/constraints/Constraint", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s() {}

        s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function () {}, s.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init && t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }
);