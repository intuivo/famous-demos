define(
    "famous-feedback/Circle", 
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
            u.apply(this, arguments), this.arrows = [], this.points = [], this.pointMods = [], this.arrowMods = [], this.setContentRef(this.points)
        }

        t("famous/Engine"), t("famous/View");
        var o = t("famous/Surface"),
            n = t("famous/Modifier"),
            r = t("famous/Matrix"),
            a = t("famous-animation/Easing"),
            h = t("famous-utils/Utils"),
            u = t("./FeedbackBase");
        s.prototype = Object.create(u.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            zDepth: 2,
            pointSize: [50, 50],
            pointScale: [2, 2],
            arrowSize: [5, 100],
            fadeCurve: {
                duration: 500,
                curve: a.inOutBackNorm
            },
            pointProperties: {
                borderRadius: "50px",
                border: "1px solid white"
            },
            arrowProperties: {
                backgroundColor: "#ffffff"
            }
        }, s.prototype.create = function () {
            var t = new o({
                size: this.options.pointSize,
                properties: this.options.pointProperties
            }),
                i = new n({
                    opacity: 0,
                    size: this.options.pointSize,
                    transform: r.scale(.001, .001)
                });
            this.points.push(t), this.pointMods.push(i), this.node.add(i).link(t)
        }, s.prototype.animate = function (t, i, e) {
            var s = h.getCenterMatrix(t, this.options.pointSize, 2),
                o = this.options.pointSize,
                n = [t[0] - o[0], t[1] - o[1], this.options.zDepth];
            this.pointMods[i].halt(), this.pointMods[i].setTransform(s), this.pointMods[i].setTransform(r.move(r.scale(this.options.pointScale[0], this.options.pointScale[1]), n), this.options.fadeCurve), this.pointMods[i].setOpacity(1), this.pointMods[i].setOpacity(0, this.options.fadeCurve, function (t, i) {
                t && t(), this.pointMods[i].setTransform(r.scale(1e-4, 1e-4))
            }.bind(this, e, i))
        }, e.exports = s
    }
); 