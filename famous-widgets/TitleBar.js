define(
	"famous-widgets/TitleBar", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Matrix", 
		"famous/Surface", 
		"famous-views/LightBox"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.lightbox = new r, this._surfaces = {}, t && this.setOptions(t)
        }

        var o = t("famous/Matrix"),
            n = t("famous/Surface"),
            r = t("famous-views/LightBox");
        s.DEFAULT_OPTIONS = {
            widget: n,
            inOrigin: [.5, 0],
            outOrigin: [.5, 0],
            showOrigin: [.5, 0],
            inTransition: !0,
            outTransition: !0,
            size: [void 0, 50],
            look: void 0
        }, s.prototype.show = function (t) {
            var i = this.options.widget;
            if (!(t in this._surfaces)) {
                var e = new i({
                    size: this.options.size
                });
                e.setOptions(this.options.look), e.setContent(t), this._surfaces[t] = e
            }
            this.lightbox.show(this._surfaces[t])
        }, s.prototype.getSize = function () {
            return this.options.size
        }, s.prototype.setOptions = function (t) {
            if (this.lightbox.setOptions(t), t.widget && (this.options.widget = t.widget, this._surfaces = {}), t.look && (this.options.look = t.look), t.size) {
                this.options.size = t.size;
                var i = o.translate(0, -this.options.size[1]);
                this.lightbox.setOptions({
                    inTransform: i,
                    outTransform: i
                })
            }
        }, s.prototype.render = function () {
            return this.lightbox.render()
        }, e.exports = s
    }
);