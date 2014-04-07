define(
	"famous-widgets/ShrinkContainer", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/ContainerSurface", 
		"famous/EventHandler", 
		"famous-views/SequentialLayout", 
		"famous/Utility"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new n(this.options.look), this.layout = new a(this.options), t && this.setOptions(t), this.surface.link(this.layout), r.setInputHandler(this, this.surface), r.setOutputHandler(this, this.surface, !0)
        }

        function o() {
            var t = this.layout.getSize(),
                i = this.surface.getSize(),
                e = this.surface.context.getSize();
            if (t && i && e) {
                var s = [t[0] + (i[0] - e[0]), t[1] + (i[1] - e[1])];
                isNaN(s[0]) && (s[0] = void 0), isNaN(s[1]) && (s[1] = void 0), (s[0] != i[0] || s[1] != i[1]) && this.surface.setSize.call(this.surface, s)
            }
        }

        var n = t("famous/ContainerSurface"),
            r = t("famous/EventHandler"),
            a = t("famous-views/SequentialLayout");
        t("famous/Utility"), s.DEFAULT_OPTIONS = {
            look: void 0
        }, s.prototype.getSize = function () {
            return this.surface.getSize()
        }, s.prototype.setOptions = function (t) {
            this.layout.setOptions(t), void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look))
        }, s.prototype.sequenceFrom = function () {
            return this.layout.sequenceFrom.apply(this.layout, arguments)
        }, s.prototype.mod = function () {
            return this.surface.mod.apply(this.surface, arguments)
        }, s.prototype.render = function () {
            return o.call(this), this.surface.render.apply(this.surface, arguments)
        }, e.exports = s
    }
); 