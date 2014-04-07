define(
	"famous-widgets/FeedStream", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/EventHandler", 
		"famous-views/Scrollview", 
		"./FeedItem"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.scrollview = new n({
                direction: "y",
                margin: 0
            }), t && this.setOptions(t), this.eventInput = new o, o.setInputHandler(this, this.eventInput), this.eventInput.pipe(this.scrollview)
        }

        var o = t("famous/EventHandler"),
            n = t("famous-views/Scrollview"),
            r = t("./FeedItem");
        s.DEFAULT_OPTIONS = {
            widget: r,
            content: []
        }, s.prototype.setContent = function (t) {
            this.options.content = t;
            var i = this.options.widget;
            this.scrollview.sequenceFrom(t.map(function (t) {
                return new i({
                    content: t
                })
            }))
        }, s.prototype.getSize = function () {
            return this.scrollview.getSize()
        }, s.prototype.setSize = function (t) {
            this.scrollview.setOptions({
                clipSize: t[1]
            })
        }, s.prototype.setOptions = function (t) {
            t.widget && (this.options.widget = t.widget), t.content && this.setContent(t.content)
        }, s.prototype.render = function () {
            return this.scrollview.render()
        }, e.exports = s
    }
); 