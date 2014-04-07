define(
	"famous-generative/Line", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/Matrix", 
		"famous-utils/Utils", 
		"famous/RenderNode", 
		"famous-math/Quaternion", 
		"famous-math/Vector"
	], 
	function (t, i, e) 
	{
        function s(t) {
            t || (t = {}), this.result = [], this.width = t.width || 2, this.opacity = t.opacity || 1, this.calculateTransform("undefined" == typeof t.x1 ? 0 : t.x1, "undefined" == typeof t.y1 ? 0 : t.y1, "undefined" == typeof t.z1 ? 0 : t.z1, "undefined" == typeof t.x2 ? 0 : t.x2, "undefined" == typeof t.y2 ? 0 : t.y2, "undefined" == typeof t.z2 ? 0 : t.z2), this.halfPi = .5 * Math.PI, this.surface = new o({
                size: [500, 500]
            }), this.surface.addClass("line"), this.surface.setProperties({
                "background-color": "rgba(255, 255, 255, 1.0)"
            })
        }

        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-utils/Utils");
        t("famous/RenderNode"), t("famous-math/Quaternion"), t("famous-math/Vector"), s.prototype.setProperties = function (t) {
            this.surface.setProperties(t)
        }, s.prototype.setLineWidth = function (t) {
            return this.width = t, this
        }, s.prototype.getLineWidth = function () {
            return this.width
        }, s.prototype.setColor = function (t, i, e, s) {
            return this.surface.setProperties(r.backgroundColor(t, i, e, 1)), this.opacity = s, this
        }, s.prototype.setOpacity = function (t) {
            return this.opacity = t, this
        }, s.prototype.render = function () {
            var t = {
                transform: this.transform,
                opacity: this.opacity,
                origin: [.5, .5],
                target: this.surface.render()
            };
            return t
        }, s.prototype.setP1 = function (t, i, e) {
            this.calculateTransform(t, i, e, this.x2, this.y2, this.z2)
        }, s.prototype.setP2 = function (t, i, e) {
            this.calculateTransform(this.x1, this.y1, this.z1, t, i, e)
        }, s.prototype.set = function (t, i, e, s, o, n) {
            this.calculateTransform(t, i, e, s, o, n)
        }, s.prototype.setX1 = function (t) {
            this.calculateTransform(t, this.y1, this.z1, this.x2, this.y2, this.z2)
        }, s.prototype.setY1 = function (t) {
            this.calculateTransform(this.x1, t, this.z1, this.x2, this.y2, this.z2)
        }, s.prototype.setZ1 = function (t) {
            this.calculateTransform(this.x1, this.y1, t, this.x2, this.y2, this.z2)
        }, s.prototype.setX2 = function (t) {
            this.calculateTransform(this.x1, this.y1, this.z1, t, this.y2, this.z2)
        }, s.prototype.setY2 = function (t) {
            this.calculateTransform(this.x1, this.y1, this.z1, this.x2, t, this.z2)
        }, s.prototype.setZ2 = function (t) {
            this.calculateTransform(this.x1, this.y1, this.z1, this.x2, this.y2, t)
        }, s.prototype.setX = function (t, i) {
            this.calculateTransform(t, this.y1, this.z1, i, this.y2, this.z2)
        }, s.prototype.setY = function (t, i) {
            this.calculateTransform(this.x1, t, this.z1, this.x2, i, this.z2)
        }, s.prototype.setZ = function (t, i) {
            this.calculateTransform(this.x1, this.y1, t, this.x2, this.y2, i)
        }, s.prototype.getX1 = function () {
            return this.x1
        }, s.prototype.getX2 = function () {
            return this.x2
        }, s.prototype.getY1 = function () {
            return this.y1
        }, s.prototype.getY2 = function () {
            return this.y2
        }, s.prototype.getZ1 = function () {
            return this.z1
        }, s.prototype.getZ2 = function () {
            return this.z2
        }, s.prototype.getX = function () {
            return [this.x1, this.x2]
        }, s.prototype.getY = function () {
            return [this.y1, this.y2]
        }, s.prototype.getZ = function () {
            return [this.z1, this.z2]
        }, s.prototype.getP1 = function () {
            return [this.x1, this.y1, this.z1]
        }, s.prototype.getP2 = function () {
            return [this.x2, this.y2, this.z2]
        }, s.prototype.getLength = function () {
            return this.length
        }, s.prototype.calculateTransform = function (t, i, e, s, o, a) {
            this.x1 = t, this.y1 = i, this.z1 = e, this.x2 = s, this.y2 = o, this.z2 = a, this.length = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2), this.lengthX = this.x2 - this.x1, this.lengthY = this.y2 - this.y1, this.lengthZ = this.z2 - this.z1, this.centerX = .5 * this.lengthX + this.x1, this.centerY = .5 * this.lengthY + this.y1, this.centerZ = .5 * this.lengthZ + this.z1, this.angleZ = Math.atan2(this.lengthY, this.lengthX), this.angleY = Math.asin(this.lengthZ / this.length), isNaN(this.angleZ) && (this.angleZ = .5 * Math.PI), isNaN(this.angleY) && (this.angleY = .5 * Math.PI), this.transform = n.multiply(n.identity, n.rotateY(-this.angleY)), this.transform = n.multiply(this.transform, n.rotateZ(this.angleZ)), this.transform = n.multiply(this.transform, n.translate(this.centerX, this.centerY, this.centerZ)), this.transform = n.multiply(n.scale(this.length / 500, this.width / 500, 1), this.transform)
        }, e.exports = s
    }
);