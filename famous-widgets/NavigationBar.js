define(
	"famous-widgets/NavigationBar", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/EventHandler", 
		"famous/Utility", 
		"famous/View", 
		"famous-views/GridLayout", 
		"./ToggleButton"
	], 
	function (t, i, e) 
	{
        function s() {
            a.apply(this, arguments), this.layout = new h, this.buttons = [], this._buttonIds = {}, this._buttonCallbacks = {}, this.layout.sequenceFrom(this.buttons), this._link(this.layout), this.optionsManager.on("change", o.bind(this))
        }

        function o(t) {
            var i = t.id,
                e = t.value;
            if ("direction" === i) this.layout.setOptions({
                size: n.call(this.buttons.length, this.options.direction)
            });
            else if ("buttons" === i)
                for (var s in this.buttons) this.buttons[s].setOptions(e);
            else if ("sections" === i)
                for (var i in this.options.sections) this.defineSection(i, this.options.sections[i])
        }

        function n(t, i) {
            return i === r.Direction.X ? [t, 1] : [1, t]
        }

        t("famous/EventHandler");
        var r = t("famous/Utility"),
            a = t("famous/View"),
            h = t("famous-views/GridLayout"),
            u = t("./ToggleButton");
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            sections: [],
            widget: u,
            size: [void 0, 50],
            direction: r.Direction.X,
            buttons: {
                toggleMode: u.ON
            }
        }, s.prototype.defineSection = function (t, i) {
            var e, s = this._buttonIds[t];
            if (void 0 === s) {
                s = this.buttons.length, this._buttonIds[t] = s;
                var o = this.options.widget;
                e = new o, this.buttons[s] = e, this.layout.setOptions({
                    size: n(this.buttons.length, this.options.direction)
                })
            } else e = this.buttons[s], e.unbind("select", this._buttonCallbacks[t]);
            this.options.buttons && e.setOptions(this.options.buttons), e.setOptions(i), this._buttonCallbacks[t] = this.select.bind(this, t), e.on("select", this._buttonCallbacks[t])
        }, s.prototype.select = function (t) {
            var i = this._buttonIds[t];
            this.buttons[i] && this.buttons[i].isSelected() ? this.eventOutput.emit("select", {
                id: t
            }) : this.buttons[i] && this.buttons[i].select();
            for (var e = 0; e < this.buttons.length; e++) e != i && this.buttons[e].deselect()
        }, e.exports = s
    }
); 