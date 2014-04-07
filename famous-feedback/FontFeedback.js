define(
	"famous-feedback/FontFeedback", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Engine", 
		"famous/View", 
		"famous/Surface", 
		"famous/Modifier", 
		"famous/Matrix", 
		"famous-animation/Easing", 
		"famous-utils/Utils", 
		"./FeedbackBase"
	], 
	function (t, i, e) 
	{
        function s() {
            h.apply(this, arguments), this.fontSurfaces = [], this.fontMods = [], this._fontContent = 0, this.setContentRef(this.fontSurfaces)
        }

        function o(t, i) {
            return [Math.cos(t) * i, Math.sin(t) * i]
        }

        t("famous/Engine"), t("famous/View");
        var n = t("famous/Surface"),
            r = t("famous/Modifier"),
            a = t("famous/Matrix");
        t("famous-animation/Easing"), t("famous-utils/Utils");
        var h = t("./FeedbackBase");
        s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            zDepth: 2,
            fontContent: ["a", "b", "c", "d", "e", "f"],
            properties: [],
            size: [150, 100],
            curve: {
                duration: 500,
                curve: "linear"
            },
            opacityCurve: {
                duration: 600,
                curve: "outSineNorm"
            },
            fontProperties: {},
            fontClasses: ["feedback-font"],
            radius: 300
        }, s.prototype.create = function () {
            var t = new n({
                size: this.options.size,
                properties: this.options.fontProperties,
                classes: this.options.fontClasses
            }),
                i = new r({
                    opacity: 0,
                    size: this.options.size,
                    transform: a.translate(0, 0, -20)
                });
            this.fontSurfaces.push(t), this.fontMods.push(i), this.node.add(i).link(t)
        }, s.prototype.animate = function (t, i, e) {
            var s = t[0] - .5 * this.options.size[0],
                n = t[1] - .5 * this.options.size[1],
                r = a.move(a.scale(.5, .5), [s, n, this.options.zDepth]);
            this.options.pointSize;
            var h = Math.random() * Math.PI,
                u = o(h, this.options.radius);
            this.fontSurfaces[i].setContent(this.getContent()), this.fontMods[i].halt(), this.fontMods[i].setTransform(r), this.fontMods[i].setTransform(a.translate(s - u[0], n - u[1]), this.options.curve), this.fontMods[i].setOpacity(1), this.fontMods[i].setOpacity(0, this.options.opacityCurve, e)
        }, s.prototype.getContent = function () {
            var t = this._fontContent;
            return this._fontContent++, this.options.fontContent[t % this.options.fontContent.length]
        }, e.exports = s
    }
); 