define(
	"famous-feedback/Lasers", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Engine", 
		"famous/View", 
		"famous/Surface", 
		"famous/Modifier", 
		"famous-animation/Easing", 
		"famous/Matrix"
	], 
	function (t, i, e) 
	{
        function s() {
            p.apply(this, arguments), this.arrows = [], this.points = [], this.pointMods = [], this.arrowMods = [], this._inTransition = [], u.on("click", n.bind(this)), o.call(this)
        }

        function o() {
            var t = new c({
                size: this.options.pointSize,
                properties: this.options.pointProperties
            }),
                i = new l({
                    opacity: 0,
                    size: this.options.pointSize
                }),
                e = new c({
                    size: this.options.arrowSize,
                    properties: this.options.arrowProperties
                }),
                s = new l({
                    opacity: 0
                });
            this.points.push(t), this.pointMods.push(i), this.arrows.push(e), this.arrowMods.push(s), this._inTransition.push(!1), this.node.add(i).link(t), this.node.add(s).link(e)
        }

        function n(t) {
            var i = r.call(this),
                e = [t.pageX, t.pageY];
            this.points[i] || o.call(this), a.call(this, e, i)
        }

        function r() {
            for (var t = 0; t < this._inTransition.length; t++)
                if (!this._inTransition[t]) return t;
            return this._inTransition.length
        }

        function a(t, i) {
            var e = h(t, this.options.pointSize),
                s = this.options.pointSize,
                o = [t[0] - s[0], t[1] - s[1], this.options.zDepth],
                n = function (t) {
                    this._inTransition[t] = !1
                }.bind(this, i);
            if (this.pointMods[i].halt(), this.pointMods[i].setTransform(e), this.pointMods[i].setTransform(d.move(d.scale(this.options.pointScale[0], this.options.pointScale[1]), o), this.options.fadeCurve), this.pointMods[i].setOpacity(1), this.pointMods[i].setOpacity(0, this.options.fadeCurve, n), this._inTransition[i] = !0, o[0] += .5 * s[0] * this.options.pointScale[0], o[1] += .5 * s[1] * this.options.pointScale[1], this.options.useArrow) {
                var r = 2 * Math.random() * Math.PI;
                this.arrowMods[i].setOpacity(1), this.arrowMods[i].setOpacity(0, this.options.fadeCurve), this.arrowMods[i].setTransform(d.multiply(d.rotateZ(r), d.move(d.scale(1e-5, 1e-5), o, 2))), this.arrowMods[i].setTransform(d.multiply(d.rotateZ(r), d.move(d.scale(2, 2, 1), o)), this.options.fadeCurve)
            }
        }

        function h(t, i) {
            return d.translate(t[0] - .5 * i[0], t[1] - .5 * i[1], 2)
        }

        var u = t("famous/Engine"),
            p = t("famous/View"),
            c = t("famous/Surface"),
            l = t("famous/Modifier"),
            f = t("famous-animation/Easing"),
            d = t("famous/Matrix");
        s.prototype = Object.create(p.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            zDepth: 2,
            pointSize: [50, 50],
            pointScale: [2, 2],
            useArrow: !1,
            arrowSize: [5, 100],
            fadeCurve: {
                duration: 500,
                curve: f.inOutBackNorm
            },
            pointProperties: {
                "border-radius": "50px",
                border: "1px solid white"
            },
            arrowProperties: {
                "background-color": "#ffffff"
            }
        }, e.exports = s
    }
); 