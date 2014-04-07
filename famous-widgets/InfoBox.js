define(
	"famous-widgets/InfoBox", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/EventHandler", 
		"famous/Surface"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new r(this.options.look), t && this.setOptions(t), n.setInputHandler(this, this.surface), n.setOutputHandler(this, this.surface, !0)
        }

        function o(t) {
            for (var i = "<ul>", e = 0; e < t.length; e++) {
                var s = t[e],
                    o = Object.keys(s)[0];
                i += '<li><span class="key">' + o + "</span> " + s[o] + "</li>"
            }
            return i += "</ul>"
        }

        var n = t("famous/EventHandler"),
            r = t("famous/Surface");
        s.DEFAULT_OPTIONS = {
            look: {
                classes: ["infoBox"],
                size: [void 0, !0]
            },
            content: []
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.content && (this.options.content = t.content, this.surface.setContent(o(this.options.content))), void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look))
        }, s.prototype.render = function () {
            return this.surface.render()
        }, e.exports = s
    }
); 