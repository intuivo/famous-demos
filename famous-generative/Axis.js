define(
	"famous-generative/Axis", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/Matrix", 
		"./Box"
	], 
	function (t, i, e) 
	{
        function s() {
            this.radius = 256, this.box = new r(this.radius, this.radius, this.radius), this.xyPlane = new o({
                size: [this.radius, this.radius]
            }), this.xyPlane.addClass("plane-xy"), this.xyTransform = n.rotateX(Math.PI / 2), this.zxPlane = new o({
                size: [this.radius, this.radius]
            }), this.zxPlane.addClass("plane-zx"), this.zxTransform = n.rotateY(Math.PI / 2), this.yzPlane = new o({
                size: [this.radius, this.radius]
            }), this.yzPlane.addClass("plane-yz"), this.yzTransform = n.rotateZ(Math.PI / 2), this.transform = n.identity, this.opacity = 1, this.results = [], this.results.push({
                transform: this.transform,
                opacity: this.opacity,
                target: this.box.render()
            }), this.results.push({
                transform: this.xyTransform,
                opacity: this.opacity,
                target: this.xyPlane.render()
            }), this.results.push({
                transform: this.zxTransform,
                opacity: this.opacity,
                target: this.zxPlane.render()
            }), this.results.push({
                transform: this.yzTransform,
                opacity: this.opacity,
                target: this.yzPlane.render()
            })
        }

        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("./Box");
        s.prototype.render = function () {
            return this.results
        }, e.exports = s
    }
);