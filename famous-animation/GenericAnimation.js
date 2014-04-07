define(
	"famous-animation/GenericAnimation", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/Matrix", 
		"famous-math/Vector", 
		"famous-math/Quaternion", 
		"./Animation", 
		"./AnimationEngine", 
		"./Easing", 
		"famous-utils/Utils", 
		"famous-color/Color"
	], 
	function (t, i, e) 
	{
        function s(t) {
            a.call(this, t), this.surface = t.surface, this.renderSurface = t.renderSurface || !1, this.easing = t.easing || h.inOutCubicNorm, this.animateColor = !1, this.startColor = t.startColor || new p(255, 255, 255, 1), this.endColor = t.endColor || new p(255, 255, 255, 1), this.startColorHSL = new n, this.endColorHSL = new n, this.deltaColorHSL = new n, this.currentColorHSL = new n, this.animateOpacity = !1, this.startOpacity = t.startOpacity || 0, this.endOpacity = t.endOpacity || 0, this.deltaOpacity = 0, this.animatePosition = !1, this.startPosition = t.startPosition || new n(0, 0, 0).fromArray(o.getTranslate(this.surface.mtx)), this.endPosition = t.endPosition || new n(0, 0, 0).fromArray(o.getTranslate(this.surface.mtx)), this.currentPosition = new n(0, 0, 0), this.deltaPosition = new n(0, 0, 0), this.animateOrientation = !1, this.startOrientation = t.startOrientation || new r, this.endOrientation = t.endOrientation || new r, this.currentOrientation = t.currentOrientation || new r, this.animateRadius = !1, this.startRadius = t.startRadius || 0, this.endRadius = t.endRadius || 0, this.deltaRadius = 0, this.currentRadius = 0
        }

        t("famous/Surface");
        var o = t("famous/Matrix"),
            n = t("famous-math/Vector"),
            r = t("famous-math/Quaternion"),
            a = t("./Animation");
        t("./AnimationEngine");
        var h = t("./Easing"),
            u = t("famous-utils/Utils"),
            p = t("famous-color/Color");
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.prototype.activate = function () {
            var t = this.startColor.getHSL(),
                i = this.endColor.getHSL();
            this.startColorHSL.setXYZ(t[0], t[1], t[2]), this.endColorHSL.setXYZ(i[0], i[1], i[2]), this.endColorHSL.sub(this.startColorHSL, this.deltaColorHSL), this.currentColorHSL.set(this.startColorHSL), this.animateColor = this.startColor.r == this.endColor.r && this.startColor.g == this.endColor.g && this.startColor.b == this.endColor.b && this.startColor.a == this.endColor.a ? !1 : !0, this.deltaOpacity = this.endOpacity - this.startOpacity, this.animateOpacity = Math.abs(this.deltaOpacity) > 0 ? !0 : !1, this.endPosition.sub(this.startPosition, this.deltaPosition), this.currentPosition.set(this.startPosition), this.animatePosition = this.deltaPosition.isZero() ? !1 : !0, this.animateOrientation = this.startOrientation.isEqual(this.endOrientation) ? !1 : !0, this.deltaRadius = this.endRadius - this.startRadius, this.currentRadius = this.startRadius, this.animateRadius = 0 === this.deltaRadius ? !1 : !0
        }, s.prototype.tick = function () {
            if (this.playing && !this.halted) {
                if (this.currentTime = this.engine.getTime() - this.startTime, this.normalizedTime = this.currentTime / this.duration, this.normalizedTime > 1) return this.normalizedTime = u.clamp(this.normalizedTime, 0, 1), this._update(), this.update(), this.end(), void 0;
                this.normalizedTime > 1e-6 && (this.activated || (this.activate(), void 0 !== this.activateCallback && this.activateCallback(), this.activated = !0), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this._update(), this.update())
            }
        }, s.prototype._update = function () {
            var t = this.easing(this.normalizedTime);
            this.animateColor && (this.deltaColorHSL.mult(t, this.currentColorHSL), this.currentColorHSL.add(this.startColorHSL, this.currentColorHSL), this.surface.setProperties(u.backgroundColorHSL(this.currentColorHSL.x, this.currentColorHSL.y, this.currentColorHSL.z, 1))), this.animateOpacity && (this.surface.opacity = this.startOpacity + this.deltaOpacity * t), (this.animatePosition || this.animateOrientation) && (this.deltaPosition.mult(t, this.currentPosition), this.currentPosition.add(this.startPosition, this.currentPosition), this.startOrientation.slerp(this.endOrientation, t, this.currentOrientation), this.surface.mtx = o.move(this.currentOrientation.getMatrix(), this.currentPosition.toArray())), this.animateRadius && (this.currentRadius = this.startRadius + this.deltaRadius * t, this.surface.setProperties(u.borderRadius(this.currentRadius)))
        }, s.prototype.render = function () {
            return this.renderSurface && !this.dead && this.normalizedTime > 0 ? {
                transform: this.surface.mtx,
                opacity: this.surface.opacity,
                target: this.surface.render()
            } : void 0
        }, s.prototype.setStartColor = function (t) {
            this.startColor = t
        }, s.prototype.setEndColor = function (t) {
            this.endColor = t
        }, s.prototype.getStartColor = function () {
            return this.startColor
        }, s.prototype.getEndColor = function () {
            return this.endColor
        }, s.prototype.setStartPosition = function (t) {
            this.startPosition = t
        }, s.prototype.setStartPositionX = function (t) {
            this.startPosition.x = t
        }, s.prototype.setStartPositionY = function (t) {
            this.startPosition.y = t
        }, s.prototype.setStartPositionZ = function (t) {
            this.startPosition.z = t
        }, s.prototype.setEndPosition = function (t) {
            this.endPosition = t
        }, s.prototype.setEndPositionX = function (t) {
            this.endPosition.setX(t)
        }, s.prototype.setEndPositionY = function (t) {
            this.endPosition.setY(t)
        }, s.prototype.setEndPositionZ = function (t) {
            this.endPosition.setZ(t)
        }, s.prototype.getEndPosition = function () {
            return this.endPosition
        }, s.prototype.getStartPosition = function () {
            return this.startPosition
        }, s.prototype.getCurrentPosition = function () {
            return this.currentPosition
        }, s.prototype.setStartOpacity = function (t) {
            this.startOpacity = t
        }, s.prototype.setEndOpacity = function (t) {
            this.endOpacity = t
        }, s.prototype.getStartOpacity = function () {
            return this.startOpacity
        }, s.prototype.getEndOpacity = function () {
            return this.endOpacity
        }, s.prototype.setStartRadius = function (t) {
            this.startRadius = t
        }, s.prototype.setEndRadius = function (t) {
            this.endRadius = t
        }, s.prototype.getCurrentRadius = function () {
            return this.currentRadius
        }, s.prototype.getStartRadius = function () {
            return this.startRadius
        }, s.prototype.getEndRadius = function () {
            return this.endRadius
        }, s.prototype.setStartOrientation = function (t) {
            this.startOrientation = t
        }, s.prototype.setEndOrientation = function (t) {
            this.endOrientation = t
        }, s.prototype.getEndOrientation = function () {
            return this.endOrientation
        }, s.prototype.getStartOrientation = function () {
            return this.startOrientation
        }, s.prototype.setEasing = function (t) {
            this.easing = t
        }, s.prototype.setSurface = function (t) {
            this.surface = t
        }, s.prototype.setEndValuesToStartValues = function () {
            this.startColor = this.endColor.clone(), this.startOpacity = this.endOpacity, this.startPosition.set(this.endPosition), this.startOrientation.set(this.endOrientation), this.startRadius = this.endRadius
        }, e.exports = s
    }
); 