define(
	"famous-kinematics/AttractorField", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Matrix", 
		"famous-kinematics/Vector3", 
		"famous-kinematics/Particle", 
		"famous-kinematics/Fields3"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.panels = t, this.particles = {}, this.locked = {};
            for (var i in this.panels) {
                var e = 2 * (Math.random() - .5) * window.innerWidth,
                    s = 2 * (Math.random() - .5) * window.innerHeight,
                    o = 800 * (Math.random() - .5);
                this.particles[i] = new r({
                    p: new n(e, s, o),
                    vf: a.none3
                })
            }
            this.lastUpdateTime = (new Date).getTime()
        }
        var o = t("famous/Matrix"),
            n = t("famous-kinematics/Vector3"),
            r = t("famous-kinematics/Particle"),
            a = t("famous-kinematics/Fields3");
        s.prototype = {
            setField: function (t, i) {
                this.particles[t].setVectorField(i)
            },
            setFieldAll: function (t) {
                for (var i in this.panels) this.setField(i, t)
            },
            render: function () {
                var t = (new Date).getTime(),
                    i = t - this.lastUpdateTime;
                this.lastUpdateTime = t;
                var e = [];
                for (var s in this.panels) {
                    this.particles[s].update(i);
                    var n = this.particles[s].getTranslate();
                    e.push({
                        transform: o.multiply(o.rotateX(Math.PI / 2), o.translate(n.x, n.y, n.z)),
                        target: this.panels[s]
                    })
                }
                return e
            }
        }, e.exports = s
    }
); 