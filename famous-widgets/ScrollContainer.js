define(
	"famous-widgets/ScrollContainer", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/ContainerSurface", 
		"famous/EventHandler", 
		"famous-views/Scrollview", 
		"famous/Utility"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new o(this.options.look), this.scrollview = new r(this.options.feel), t && this.setOptions(t), this.surface.link(this.scrollview), n.setInputHandler(this, this.surface), n.setOutputHandler(this, this.surface), this.pipe(this.scrollview)
        }

        var o = t("famous/ContainerSurface"),
            n = t("famous/EventHandler"),
            r = t("famous-views/Scrollview"),
            a = t("famous/Utility");
        s.DEFAULT_OPTIONS = {
            look: void 0,
            feel: {
                direction: a.Direction.X
            }
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look)), void 0 !== t.feel && (this.options.feel = t.feel, this.scrollview.setOptions(this.options.feel))
        }, s.prototype.sequenceFrom = function () {
            return this.scrollview.sequenceFrom.apply(this.scrollview, arguments)
        }, s.prototype.render = function () {
            return this.surface.render.apply(this.surface, arguments)
        }, e.exports = s
    }
); 