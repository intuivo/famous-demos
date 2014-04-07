define(
	"famous-widgets/FeedItem", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/View", 
		"famous-utils/TimeAgo"
	], 
	function (t, i, e) 
	{
        function s(t) {
            n.apply(this, arguments), this.surface = new o({
                size: this.options.size,
                classes: this.options.classes
            }), t && this.setOptions(t), this.surface.pipe(this.eventInput), this.optionsManager.on("change", function (t) {
                if ("content" == t.id) this.setContent(t.value);
                else {
                    var i = {};
                    i[t.id] = t.value, this.surface.setOptions(i)
                }
            }.bind(this)), this.node.link(this.surface)
        }

        var o = t("famous/Surface"),
            n = t("famous/View"),
            r = t("famous-utils/TimeAgo");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            classes: ["feedItem"],
            size: [void 0, 80],
            content: {
                icon: void 0,
                source: void 0,
                time: void 0,
                text: ""
            }
        }, s.prototype.setContent = function (t) {
            this.options.content = t;
            var i = .6 * this.options.size[1],
                e = '<img src="' + t.icon + '" class="icon" width="' + i + '" height="' + i + '" />',
                s = '<p class="source">' + t.source + "</p>",
                o = '<p class="time">' + r.parse(t.time) + "</p>",
                n = '<p class="text">' + t.text + "</p>";
            this.surface.setContent(e + o + s + n)
        }, e.exports = s
    }
); 