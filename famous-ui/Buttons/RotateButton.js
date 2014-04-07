define(
	"famous-ui/Buttons/RotateButton", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/View", 
		"famous/Matrix", 
		"famous/Modifier", 
		"famous-animation/Easing"
	], 
	function (t, i, e) 
	{
        function s() {
            n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.surface = new o(this.options.surfaceOptions), this.surface.pipe(this), this.transform = new a({
                origin: [.5, .5],
                size: this.surface.getSize()
            }), this.node.link(this.transform).link(this.surface), this.surface.pipe(this), this.surface.on("touchstart", this.toggle.bind(this)), this.surface.on("mousedown", this.toggle.bind(this)), this._state = !1, this._boundOpen = this.emit.bind(this, "open"), this._boundClose = this.emit.bind(this, "close")
        }

        var o = t("famous/Surface"),
            n = t("famous/View"),
            r = t("famous/Matrix"),
            a = t("famous/Modifier"),
            h = t("famous-animation/Easing");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            surfaceOptions: {},
            openState: r.identity,
            closeState: r.rotateZ(.75 * Math.PI),
            transition: {
                curve: h.inOutBackNorm,
                duration: 500
            }
        }, s.prototype.getSize = function () {
            return this.surface.getSize()
        }, s.prototype.toggle = function (t) {
            t && t.stopPropagation && t.stopPropagation(), 0 == this._state ? this.open() : this.close()
        }, s.prototype.open = function () {
            this._state = !0, this.transform.halt(), this.emit("open"), this.transform.setTransform(this.options.closeState, this.options.transition)
        }, s.prototype.close = function () {
            this._state = !1, this.transform.halt(), this.emit("close"), this.transform.setTransform(this.options.openState, this.options.transition)
        }, e.exports = s
    }
); 