define(
	"famous-widgets/NavMenu", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Utility", 
		"famous/EventHandler", 
		"famous-views/Scrollview", 
		"./ToggleButton", 
		"famous/ContainerSurface"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.buttons = [], this._buttonIds = {}, this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this.scrollview = new a({
                direction: this.options.look.direction,
                itemSpacing: this.options.look.itemSpacing
            }), this.eventOutput = new r, r.setOutputHandler(this, this.eventOutput), r.setInputHandler(this, this.scrollview), this.scrollview.sequenceFrom(this.buttons), this.surface = new u(this.options.look), this.surface.link(this.scrollview), this.surface.pipe(this.scrollview)
        }

        function o(t) {
            var i = this.options.sections[t],
                e = this.options.widget,
                s = new e;
            if (this.options.feel && s.setOptions(this.options.feel), this.options.look) {
                var o = Object.create(this.options.look);
                o.size = this.options.look.itemSize, s.setOptions(o)
            }
            s.setOptions(i), s.on("select", this.select.bind(this, t));
            var n = this.buttons.length;
            this.buttons[n] = s, this._buttonIds[t] = n
        }

        var n = t("famous/Utility"),
            r = t("famous/EventHandler"),
            a = t("famous-views/Scrollview"),
            h = t("./ToggleButton"),
            u = t("famous/ContainerSurface");
        s.DEFAULT_OPTIONS = {
            sections: [],
            widget: h,
            look: {
                size: [200, void 0],
                direction: n.Direction.X,
                itemSize: [void 0, 50],
                itemSpacing: 10,
                crossfade: !0
            },
            feel: void 0
        }, s.prototype.select = function (t) {
            var i = this._buttonIds[t];
            this.buttons[i] && this.buttons[i].isSelected() ? this.eventOutput.emit("select", {
                id: t
            }) : this.buttons[i] && this.buttons[i].select();
            for (var e = 0; e < this.buttons.length; e++) e != i && this.buttons[e].deselect()
        }, s.prototype.setOptions = function (t) {
            if (void 0 !== t.widget && (this.options.widget = t.widget), void 0 !== t.look) {
                this.options.look = t.look, this.surface && this.surface.setOptions(this.options.look);
                var i = Object.create(this.options.look);
                i.size = this.options.look.itemSize;
                for (var e = 0; e < this.buttons.length; e++) this.buttons[e].setOptions(i)
            }
            if (void 0 !== t.feel) {
                this.options.feel = t.feel;
                for (var e = 0; e < this.buttons.length; e++) this.buttons[e].setOptions(this.options.feel)
            }
            if (void 0 !== t.sections) {
                this.options.sections = t.sections;
                for (var s in this.options.sections) s in this._buttonIds || o.call(this, s)
            }
        }, s.prototype.getSize = function () {
            return this.options.look.size
        }, s.prototype.render = function () {
            return this.buttons.length ? this.surface.render() : void 0
        }, e.exports = s
    }
);