define(
    "famous-physics/forces/Force", 
    [
        "require", 
        "exports", 
        "module", 
        "famous-physics/math/Vector"
    ], 
    function (t, i, e) 
    {
        function s() {
            this.force = new o
        }

        var o = t("famous-physics/math/Vector");
        s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function () {}, s.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init && t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, s.prototype.getEnergy = function () {
            return 0
        }, e.exports = s
    }
);