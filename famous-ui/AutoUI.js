define(
	"famous-ui/AutoUI", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/View", 
		"famous/Matrix", 
		"famous/Modifier", 
		"famous-animation/Easing", 
		"famous-ui/PanelScrollview", 
		"famous-ui/Toggles/BoolToggle", 
		"famous-ui/Toggles/MultiBoolToggle", 
		"famous-ui/Easing/MultiEasingToggle", 
		"famous-ui/Dropdown/Dropdown", 
		"famous-ui/Slider", 
		"famous-ui/ColorPicker/ColorPicker", 
		"famous-ui/Text/Label"
	], 
	function (t, i, e) 
	{
        function s() {
            n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.panel = new u(this.options.panelOptions), this.autoUIElements = [], this.panelModifier = new a({
                transform: this.options.defaultMatrix
            }), this._add(this.panelModifier).link(this.panel), this.options.defaultSelected && this.setCurrentObject(this.options.defaultSelected)
        }

        function o() {
            if (this.currentObject.autoUI)
                for (var t = 0; t < this.currentObject.autoUI.length; t++) {
                    var i = this.currentObject.autoUI[t];
                    i.type && this._optionToUI(i, this.panel)
                }
            this._scaledDown && (this.panelModifier.setTransform(this.options.defaultMatrix, this.options.scaleTransition), this._scaledDown = !1)
        }

        var n = t("famous/View"),
            r = t("famous/Matrix"),
            a = t("famous/Modifier"),
            h = t("famous-animation/Easing"),
            u = t("famous-ui/PanelScrollview"),
            p = t("famous-ui/Toggles/BoolToggle"),
            c = t("famous-ui/Toggles/MultiBoolToggle"),
            l = t("famous-ui/Easing/MultiEasingToggle"),
            f = t("famous-ui/Dropdown/Dropdown"),
            d = t("famous-ui/Slider"),
            m = t("famous-ui/ColorPicker/ColorPicker"),
            y = t("famous-ui/Text/Label");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            scaleTransition: {
                curve: h.inOutBackNorm,
                duration: 500
            },
            opacityTransition: {
                curve: h.inOutBackNorm,
                duration: 500
            },
            saveValues: !1,
            panelOptions: {},
            defaultSelected: void 0,
            defaultMatrix: r.translate(0, 0),
            animateIn: !1
        }, s.UI_ELEMENTS = {
            slider: d,
            dropdown: f,
            colorPicker: m,
            toggle: p,
            multiBoolToggle: c,
            easing: l,
            label: y
        }, s.prototype.setCurrentObject = function (t) {
            t !== this.currentObj && (this.currentObject = t, this.clear(o.bind(this)))
        }, s.prototype.toJSON = function () {}, s.prototype.reset = function () {
            this.panel.reset(), this.autoUIElements = []
        }, s.prototype.clear = function (t) {
            function i(t) {
                this.panelModifier.halt(), this.panelModifier.setOpacity(1, this.options.opacityTransition), this.reset(), t && t()
            }

            this._scaledDown = !0, this.options.animateIn ? (this.panelModifier.setOpacity(0, this.options.opacityTransition), this.panelModifier.setTransform(r.move(r.scale(1, 1e-5), this.options.defaultMatrix), this.options.scaleTransition, i.bind(this, t))) : (this.reset(), t && t())
        }, s.prototype._optionToUI = function (t) {
            var i = s.UI_ELEMENTS[t.type],
                e = new i(t.uiOptions);
            if (this.panel.add(e), this.autoUIElements.push(e), t.key) {
                var o = t.object ? t.object : this.currentObject.options;
                e.on("change", function (t, i, e, s) {
                    t[i] = s.value, e && e.call(this, s.value)
                }.bind(this.currentObject, o, t.key, t.callback))
            } else t.callback && e.on("change", function (t, i) {
                t.call(this, i.value)
            }.bind(this.currentObject, t.callback))
        }, e.exports = s
    }
); 