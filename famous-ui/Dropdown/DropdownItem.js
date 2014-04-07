define(
	"famous-ui/Dropdown/DropdownItem", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/View", 
		"famous/Matrix", 
		"famous/Modifier", 
		"famous/Surface", 
		"famous-animation/Easing", 
		"famous-utils/Utils", 
		"famous-views/Scrollview"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value = i, this._isSelected = e || !1, this._styleType, this.options.itemContent.unshift(this.options.name), this.surface = new h({
                size: this.options.itemSize,
                content: this.options.template.apply(this, this.options.itemContent)
            }), this.transform = new a, o.call(this), this.surface.pipe(this), this.surface.on("click", this.emit.bind(this, "selection", {
                value: this.value,
                origin: this
            })), this.node.link(this.transform).link(this.surface)
        }

        function o() {
            this.transform.halt(), this._isSelected ? (this.surface.setProperties(this.options.selectedProperties), this._styleType = !0, this.transform.setTransform(r.move(r.scale(.7, .7), [.125 * this.options.itemSize[0], .125 * this.options.itemSize[1]])), this.transform.setTransform(r.identity, this.options.squishCurve, this.emit.bind(this, "selectionEnd"))) : (this.surface.setProperties(this.options.properties), this._styleType = !1, this.transform.getFinalTransform() !== r.identity && this.transform.setTransform(r.identity))
        }

        var n = t("famous/View"),
            r = t("famous/Matrix"),
            a = t("famous/Modifier"),
            h = t("famous/Surface"),
            u = t("famous-animation/Easing");
        t("famous-utils/Utils"), t("famous-views/Scrollview"), s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            name: "Food",
            itemSize: [216, 50],
            classes: [],
            properties: {
                color: "#ffffff",
                "background-color": "#333",
                border: "1px solid #ccc"
            },
            selectedProperties: {},
            template: function (t) {
                return '<h2 style="padding: 10px;">' + t + "</h2>"
            },
            defaultCurve: {
                curve: u.inOutBackNorm,
                duration: 400
            },
            squishCurve: {
                curve: u.outBounceNorm,
                duration: 400
            },
            itemContent: []
        }, s.prototype.setTemplate = function () {}, s.prototype.setSelected = function (t) {
            this._isSelected = t, o.call(this)
        }, s.prototype.getSize = function () {
            return this.surface.getSize()
        }, s.prototype.getName = function () {
            return this.options.name
        }, e.exports = s
    }
);