define(
	"famous-ui/Toggles/BoolToggle", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/Matrix", 
		"famous/EventHandler", 
		"famous/Modifier", 
		"famous/Modifier", 
		"famous-animation/Easing", 
		"famous/RenderNode", 
		"famous-utils/Utils", 
		"famous/View"
	], 
	function (t, i, e) 
	{
        function s(t) {
            p.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value = t.value, this.name = t.name
        }

        function o() {
            this.toggle()
        }

        function n() {
            this.transform.halt();
            var t = this.value ? a.scale(1, 1, 1) : a.move(a.scale(1e-4, 1e-4, 1e-4), [.5 * this.options.size[1], .5 * this.options.size[1], 0]),
                i = this.value ? 1 : 0;
            this.transform.setTransform(t, this.options.transition), this.transform.setOpacity(i, this.options.transition)
        }

        var r = t("famous/Surface"),
            a = t("famous/Matrix");
        t("famous/EventHandler"), t("famous/Modifier");
        var h = t("famous/Modifier"),
            u = t("famous-animation/Easing");
        t("famous/RenderNode"), t("famous-utils/Utils");
        var p = t("famous/View");
        s.prototype = Object.create(p.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            size: void 0,
            value: !0,
            name: "bool toggle",
            transition: {
                duration: 250,
                curve: u.inOutBackNorm
            },
            padding: 20
        }, s.prototype.init = function () {
            void 0 == this.options.size && (this.options.size = [void 0, void 0]);
            var t = 1 == this.options.value ? 1 : 0;
            this.label = new r({
                size: this.options.size,
                content: '<div style="border: 1px solid #ffffff; width:' + this.options.size[1] + "px; height: " + this.options.size[1] + 'px; float: left;"></div>' + '<div class="slider-label" style="float: left; margin-left:' + this.options.size[1] + "px;margin-top:" + .1 * this.options.size[1] + 'px">' + this.name + "</div>",
                properties: {
                    "font-size": .75 * this.options.size[1] + "px"
                }
            }), this.fill = new r({
                size: [this.options.size[1], this.options.size[1]],
                properties: {
                    "background-color": "#ffffff"
                }
            }), this.transform = new h({
                opacity: t,
                size: [this.options.size[1], this.options.size[1]]
            }), this.labelTransform = new h({
                transform: a.translate(this.options.padding, 0)
            }), this.fill.pipe(this), this.label.pipe(this), this.on("click", o.bind(this)), this.node.add(this.transform).link(this.fill), this.node.add(this.label), this.set(this.options.value)
        }, s.prototype.silentSet = function (t) {
            this.value = t, n.call(this)
        }, s.prototype.toggle = function () {
            this.set(!this.value)
        }, s.prototype.set = function (t) {
            this.value !== t && (this.value = t, this.emit("change", {
                value: this.value
            }), n.call(this))
        }, s.prototype.get = function () {
            return this.value
        }, s.prototype.getSize = function () {
            return this.options.size
        }, s.prototype.setSize = function (t) {
            this.options.size = t
        }, e.exports = s
    }
); 