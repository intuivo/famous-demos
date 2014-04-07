define(
	"famous-ui/ColorPicker/CanvasPicker", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/CanvasSurface", 
		"famous/Matrix", 
		"famous/EventHandler", 
		"famous/Modifier", 
		"famous-utils/Utils", 
		"famous-color/Color", 
		"famous/Engine", 
		"famous-animation/Easing", 
		"./ColorButton", 
		"famous/View"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            x.call(this, e), this.eventInput.pipe(this.eventOutput), this.size = t, this.color = i.clone(), this.name = name, this.pos = [], this._dirty = !0, this.canvasSize = [2 * this.size[0], 2 * this.size[1]], this._selectedCoords = [g.map(this.options.pickerPosX, 0, 1, 0, this.size[0] - 1, !0), g.map(this.options.pickerPosY, 0, 1, 0, this.size[1] - 1, !0)], this.gradient = new d({
                size: [this.size[0], this.size[0]],
                canvasSize: [2 * this.size[0], 2 * this.size[0]]
            });
            var s = n.call(this, this.size[0] * this.options.pickerPosX, this.size[1] * this.options.pickerPosY);
            this.pickerTransform = new y({
                transform: m.translate(s[0], s[1], 0)
            }), this.picker = this.options.colorPicker ? new b(this.options.pickerSize, this.color) : new f({
                size: this.options.pickerSize
            }), this.picker.setProperties(this.options.pickerProperties), this._mousemove = h.bind(this), this._mouseup = u.bind(this), this.gradient.on("mousedown", r.bind(this)), this.picker.on("mousedown", r.bind(this)), this.gradient.on("touchstart", a.bind(this)), this.picker.on("touchstart", a.bind(this)), this.gradient.on("touchmove", p.bind(this)), this.picker.on("touchmove", p.bind(this)), this.gradient.on("click", c), this.picker.on("click", c), this.on("updatePosition", this.updateColor.bind(this)), this.on("updatePosition", o.bind(this)), this.node.add(this.pickerTransform).link(this.picker), this.node.add(this.gradient)
        }

        function o(t) {
            var i = n.call(this, this._selectedCoords[0], this._selectedCoords[1]);
            this.options.railsY && (i[1] = 0), this.pickerTransform.halt(), t.shouldAnimate ? this.pickerTransform.setTransform(m.translate(i[0], i[1], this.options.pickerZ), this.options.transition) : this.pickerTransform.setTransform(m.translate(i[0], i[1], this.options.pickerZ))
        }

        function n(t, i) {
            var e = .5 * this.options.pickerSize[0];
            return [g.map(t, 0, this.size[0], -e, this.size[0] - e, !0), this.options.railsY ? 0 : g.map(i, 0, this.size[1], -e, this.size[1] - e, !0)]
        }

        function r(t) {
            t.preventDefault(), t.stopPropagation(), this._dirty = !0, l.call(this, t, !0), v.on("mousemove", this._mousemove), v.on("mouseup", this._mouseup)
        }

        function a(t) {
            this._dirty = !0, t.preventDefault(), t.stopPropagation(), l.call(this, t.touches[0])
        }

        function h(t) {
            t.preventDefault(), t.stopPropagation(), l.call(this, t)
        }

        function u(t) {
            t.preventDefault(), t.stopPropagation(), v.unbind("mousemove", this._mousemove), v.unbind("mouseup", this._mouseup)
        }

        function p(t) {
            t.preventDefault(), t.stopPropagation(), l.call(this, t.touches[0])
        }

        function c(t) {
            t.preventDefault(), t.stopPropagation()
        }

        function l(t, i) {
            this._dirty && (this.pos = g.getSurfacePosition(this.gradient), this._dirty = !1), this._selectedCoords = [g.clamp(t.pageX - this.pos[0], 0, this.size[0] - 1), g.clamp(t.pageY - this.pos[1], 0, this.size[1] - 1)], this.emit("updatePosition", {
                shouldAnimate: i
            })
        }

        var f = t("famous/Surface"),
            d = t("famous/CanvasSurface"),
            m = t("famous/Matrix");
        t("famous/EventHandler");
        var y = t("famous/Modifier"),
            g = t("famous-utils/Utils");
        t("famous-color/Color");
        var v = t("famous/Engine"),
            S = t("famous-animation/Easing"),
            b = t("./ColorButton"),
            x = t("famous/View");
        s.prototype = Object.create(x.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            pickerSize: [4, 25],
            transition: {
                curve: S.inSineNorm,
                duration: 50
            },
            pickerPosX: 0,
            pickerPosY: 0,
            pickerZ: 2,
            railsY: !1,
            pickerProperties: {},
            colorPicker: !1
        }, s.prototype.drawGradient = function () {}, s.prototype.getColor = function () {
            return this.color
        }, s.prototype.getSize = function () {
            return this.size
        }, s.prototype.updateColor = function () {
            var t = this.gradient.getContext("2d"),
                i = t.getImageData(2 * this._selectedCoords[0], 2 * this._selectedCoords[1], 1, 1).data;
            this.color.setFromRGBA(i[0], i[1], i[2]), this.emit("change", {
                value: this.color
            })
        }, e.exports = s
    }
); 