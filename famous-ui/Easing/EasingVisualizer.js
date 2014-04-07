define(
    "famous-ui/Easing/EasingVisualizer", 
    [
        "require", 
        "exports", 
        "module", 
        "famous-animation/Easing", 
        "famous/CanvasSurface", 
        "./CanvasDrawer"
    ], 
    function (t, i, e) 
    {
        function s(t) {
            this.opts = {
                size: [1e3, 1e3],
                strokeColor: "#33ccff",
                fillColor: "#333",
                fn: n.inOutBackNorm,
                divisions: 30
            }, this.setOpts(t), this.opts.canvasSize = [2 * this.opts.size[0], 2 * this.opts.size[1]], this.opts.gutter = Math.floor(.35 * this.opts.size[0]), r.call(this, {
                size: this.opts.size,
                canvasSize: this.opts.canvasSize
            }), this.update()
        }

        function o() {
            var t = document.createElement("canvas");
            t.width = this.opts.canvasSize[0], t.height = this.opts.canvasSize[1];
            var i = t.getContext("2d");
            i.strokeStyle = this.opts.strokeColor, i.lineWidth = 2, i.fillStyle = this.opts.fillColor, a.rect(i, 0, 0, this.opts.canvasSize[0], this.opts.canvasSize[1]);
            for (var e = 1 / this.opts.divisions, s = this.opts.canvasSize[0] - this.opts.gutter, o = this.opts.canvasSize[1] - this.opts.gutter, n = .5 * this.opts.gutter, r = 1; r < this.opts.divisions; r++) {
                var h = e * (r - 1),
                    u = e * r,
                    p = h * s + n,
                    c = u * s + n,
                    l = o - this.opts.fn(h) * (o - this.opts.gutter),
                    f = o - this.opts.fn(u) * (o - this.opts.gutter);
                a.lineTo(i, p, l, c, f)
            }
            return t
        }

        var n = t("famous-animation/Easing"),
            r = t("famous/CanvasSurface"),
            a = t("./CanvasDrawer");
        s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.prototype.setOpts = function (t, i) {
            i || (i = this.opts);
            for (var e in t) i[e] = t[e]
        }, s.prototype.setCurve = function (t) {
            this.opts.fn = t, this.update()
        }, s.prototype.update = function () {
            var t = o.call(this),
                i = this.getContext("2d");
            i.drawImage(t, 0, 0)
        }, e.exports = s
    }
);