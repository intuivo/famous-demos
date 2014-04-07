define(
	"famous-ui/ColorPicker/ColorPicker", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/CanvasSurface", 
		"famous/Matrix", 
		"famous/EventHandler", 
		"famous/Modifier", 
		"famous/Transitionable", 
		"famous-utils/Utils", 
		"famous-color/Color", 
		"famous/View", 
		"famous/Engine", 
		"famous-animation/Easing", 
		"famous-utils/Time", 
		"./GradientPicker", 
		"./HuePicker", 
		"./AlphaPicker", 
		"./ColorButton"
	], 
	function (t, i, e) 
	{
        function s() {
            f.apply(this, arguments), this.color = this.options.defaultColor, this.sizeState = new c([0, 0]), this.visible = !1, this.boundListener = !1, this._closeListen = this.hide.bind(this)
        }

        function o(t) {
            var i = t.value.getCSSColor();
            this.gradientPicker.drawGradient(i), a.call(this)
        }

        function n() {
            a.call(this)
        }

        function r() {
            a.call(this)
        }

        function a() {
            var t = this.gradientPicker.getColor();
            this.options.useAlpha && (t.a = this.alphaPicker.getColor().a, this.alphaPicker.setColor(t)), this.color = t, h.call(this, {
                value: this.color
            }), this.eventOutput.emit("change", {
                value: this.color
            })
        }

        function h(t) {
            var i = t.value.getCSSColor();
            this.openingSurface.colorSurface(i)
        }

        t("famous/Surface"), t("famous/CanvasSurface");
        var u = t("famous/Matrix");
        t("famous/EventHandler");
        var p = t("famous/Modifier"),
            c = t("famous/Transitionable");
        t("famous-utils/Utils");
        var l = t("famous-color/Color"),
            f = t("famous/View"),
            d = t("famous/Engine"),
            m = t("famous-animation/Easing");
        t("famous-utils/Time");
        var y = t("./GradientPicker"),
            g = t("./HuePicker"),
            v = t("./AlphaPicker"),
            S = t("./ColorButton");
        s.prototype = Object.create(f.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            transition: {
                curve: m.inOutBackNorm,
                duration: 400
            },
            hueSize: 30,
            pickerSize: [25, 25],
            size: void 0,
            defaultColor: new l(80, 255, 255),
            name: "",
            useAlpha: !0,
            padding: 5
        }, s.prototype.init = function () {
            this.defaultPositions = {
                gradientPicker: u.translate(0, this.options.size[1], 1),
                huePicker: u.translate(0, this.options.size[1] + this.options.size[0], 1),
                alphaPicker: u.translate(0, 2 * this.options.size[1] + this.options.size[0] + 3 * this.options.padding, 1)
            }, this.gradientPicker = new y([this.options.size[0], this.options.size[0]], this.color), this.gradientTransform = new p({
                transform: this.defaultPositions.gradientPicker
            }), this.huePicker = new g([this.options.size[0], this.options.hueSize], this.color, this.options.pickerSize), this.hueTransform = new p({
                transform: this.defaultPositions.huePicker
            }), this.openingSurface = new S(this.options.size, this.color, this.options.name), this.openingTransform = new p, this.node.add(this.hueTransform).link(this.huePicker), this.node.add(this.openingTransform).link(this.openingSurface), this.node.add(this.gradientTransform).link(this.gradientPicker), this.openingSurface.on("click", this.togglePicker.bind(this)), this.huePicker.on("change", o.bind(this)), this.gradientPicker.on("change", n.bind(this)), this.on("change", h.bind(this)), this.options.useAlpha && (this.alphaPicker = new v([this.options.size[0], this.options.hueSize], this.color, this.options.pickerSize), this.alphaTransform = new p({
                transform: this.defaultPositions.alphaPicker
            }), this.node.add(this.alphaTransform).link(this.alphaPicker), this.alphaPicker.on("change", r.bind(this))), this.hide()
        }, s.prototype.set = function () {}, s.prototype.get = function () {
            return this.color
        }, s.prototype.togglePicker = function () {
            0 == this.visible ? this.show() : this.hide()
        }, s.prototype.hide = function () {
            this.visible = !1;
            var t = u.multiply(u.scale(1, 1e-7), this.defaultPositions.gradientPicker);
            this.hueTransform.halt(), this.hueTransform.setOpacity(0, this.options.transition), this.hueTransform.setTransform(t, this.options.transition), this.gradientTransform.halt(), this.gradientTransform.setOpacity(0, this.options.transition), this.gradientTransform.setTransform(t, this.options.transition), this.options.useAlpha && (this.alphaTransform.halt(), this.alphaTransform.setOpacity(0, this.options.transition), this.alphaTransform.setTransform(t, this.options.transition)), this.sizeState.set([this.options.size[0], this.options.size[1]], this.options.transition), 1 == this.boundListener && this.unbindClickClose()
        }, s.prototype.show = function () {
            this.emit("showing"), this.visible = !0, this.hueTransform.halt(), this.hueTransform.setOpacity(1, this.options.transition), this.hueTransform.setTransform(this.defaultPositions.huePicker, this.options.transition), this.gradientTransform.halt(), this.gradientTransform.setOpacity(1, this.options.transition), this.gradientTransform.setTransform(this.defaultPositions.gradientPicker, this.options.transition), this.options.useAlpha ? (this.alphaTransform.halt(), this.alphaTransform.setOpacity(1, this.options.transition), this.alphaTransform.setTransform(this.defaultPositions.alphaPicker, this.options.transition), this.sizeState.set([this.options.size[0], this.gradientPicker.getSize()[1] + this.huePicker.getSize()[1] + this.openingSurface.getSize()[1] + this.alphaPicker.getSize()[1]], this.options.transition)) : this.sizeState.set([this.options.size[0], this.gradientPicker.getSize()[1] + this.huePicker.getSize()[1] + this.openingSurface.getSize()[1]], this.options.transition), d.defer(this.bindClickClose.bind(this))
        }, s.prototype.setSize = function (t) {
            this.options.size = t
        }, s.prototype.getSize = function () {
            return this.options.size ? this.sizeState.get() : void 0
        }, s.prototype.bindClickClose = function () {
            d.on("click", this._closeListen), this.boundListener = !0
        }, s.prototype.unbindClickClose = function () {
            d.unbind("click", this._closeListen), this.boundListener = !1
        }, s.prototype.render = function () {
            return {
                size: this.sizeState.get(),
                target: this.node.render()
            }
        }, e.exports = s
    }
); 