define(
	"famous-widgets/ToggleButton", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/EventHandler", 
		"famous-views/ImageFader"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = {
                content: "",
                offClasses: ["off"],
                onClasses: ["on"],
                size: void 0,
                outTransition: {
                    curve: "easeInOut",
                    duration: 300
                },
                inTransition: {
                    curve: "easeInOut",
                    duration: 300
                },
                toggleMode: s.TOGGLE,
                crossfade: !1
            }, this.eventOutput = new n, n.setOutputHandler(this, this.eventOutput), this.offSurface = new o, this.offSurface.on("click", function () {
                this.options.toggleMode !== s.OFF && this.select()
            }.bind(this)), this.offSurface.pipe(this.eventOutput), this.onSurface = new o, this.onSurface.on("click", function () {
                this.options.toggleMode !== s.ON && this.deselect()
            }.bind(this)), this.onSurface.pipe(this.eventOutput), this.arbiter = new r({
                crossfade: this.options.crossfade
            }), this.arbiter.forMode(s.OFF).link(this.offSurface), this.arbiter.forMode(s.ON).link(this.onSurface), this.arbiter.setMode(s.OFF), this.selected = !1, t && this.setOptions(t)
        }

        var o = t("famous/Surface"),
            n = t("famous/EventHandler"),
            r = t("famous-views/ImageFader");
        s.OFF = 0, s.ON = 1, s.TOGGLE = 2, s.prototype.select = function () {
            this.selected = !0, this.arbiter.setMode(s.ON, this.options.inTransition), this.eventOutput.emit("select")
        }, s.prototype.deselect = function () {
            this.selected = !1, this.arbiter.setMode(s.OFF, this.options.outTransition), this.eventOutput.emit("deselect")
        }, s.prototype.isSelected = function () {
            return this.selected
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.content && (this.options.content = t.content, this.offSurface.setContent(this.options.content), this.onSurface.setContent(this.options.content)), t.offClasses && (this.options.offClasses = t.offClasses, this.offSurface.setClasses(this.options.offClasses)), t.onClasses && (this.options.onClasses = t.onClasses, this.onSurface.setClasses(this.options.onClasses)), void 0 !== t.size && (this.options.size = t.size, this.onSurface.setSize(this.options.size), this.offSurface.setSize(this.options.size)), void 0 !== t.toggleMode && (this.options.toggleMode = t.toggleMode), void 0 !== t.outTransition && (this.options.outTransition = t.outTransition), void 0 !== t.inTransition && (this.options.inTransition = t.inTransition), void 0 !== t.crossfade && (this.options.crossfade = t.crossfade, this.arbiter.setOptions({
                crossfade: this.options.crossfade
            }))
        }, s.prototype.getSize = function () {
            return this.options.size
        }, s.prototype.render = function () {
            return this.arbiter.render()
        }, e.exports = s
    }
); 