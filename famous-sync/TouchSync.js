define(
    "famous-sync/TouchSync", 
    [
        "require", 
        "exports", 
        "module", 
        "./TouchTracker", 
        "famous/EventHandler"
    ], 
    function (t, i, e) 
    {
        function s(t, i) {
            this.targetGet = t, this.output = new h, this.touchTracker = new a, this.options = {
                direction: void 0,
                rails: !1,
                scale: 1
            }, i ? this.setOptions(i) : this.setOptions(this.options), h.setOutputHandler(this, this.output), h.setInputHandler(this, this.touchTracker), this.touchTracker.on("trackstart", o.bind(this)), this.touchTracker.on("trackmove", n.bind(this)), this.touchTracker.on("trackend", r.bind(this))
        }

        function o(t) {
            this.output.emit("start", {
                count: t.count,
                touch: t.touch.identifier
            })
        }

        function n(t) {
            var i = t.history,
                e = i[i.length - 2].timestamp,
                o = i[i.length - 1].timestamp,
                n = i[i.length - 2].touch,
                r = i[i.length - 1].touch,
                a = r.pageX - n.pageX,
                h = r.pageY - n.pageY;
            this.options.rails && (Math.abs(a) > Math.abs(h) ? h = 0 : a = 0);
            var u = Math.max(o - e, 8),
                p = a / u,
                c = h / u;
            if (i.length > 2) var l = i[i.length - 3].touch,
            f = (r.pageX - 2 * n.pageX + l.pageX) / (u * u), d = (r.pageY - 2 * n.pageY + l.pageY) / (u * u);
            else var f = 0,
            d = 0;
            var m, y, g, v = this.targetGet(),
                S = this.options.scale;
            this.options.direction == s.DIRECTION_X ? (m = v + S * a, y = S * p, g = S * c) : this.options.direction == s.DIRECTION_Y ? (m = v + S * h, y = S * c, g = S * d) : (m = [v[0] + S * a, v[1] + S * h], y = [S * p, S * c], g = [S * f, S * d]), this.output.emit("update", {
                p: m,
                v: y,
                a: g,
                touch: t.touch.identifier
            })
        }

        function r(t) {
            var i = void 0 !== this.options.direction ? 0 : [0, 0],
                e = t.history,
                o = t.count,
                n = this.targetGet();
            if (e.length > 1) {
                var r = e[e.length - 2].timestamp,
                    a = e[e.length - 1].timestamp,
                    h = e[e.length - 2].touch,
                    u = e[e.length - 1].touch,
                    p = u.pageX - h.pageX,
                    c = u.pageY - h.pageY;
                this.options.rails && (Math.abs(p) > Math.abs(c) ? c = 0 : p = 0);
                var i, l = Math.max(a - r, 1),
                    f = p / l,
                    d = c / l,
                    m = this.options.scale;
                i = this.options.direction == s.DIRECTION_X ? m * f : this.options.direction == s.DIRECTION_Y ? m * d : [m * f, m * d]
            }
            this.output.emit("end", {
                p: n,
                v: i,
                count: o,
                touch: t.touch.identifier
            })
        }

        var a = t("./TouchTracker"),
            h = t("famous/EventHandler");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale)
        }, s.prototype.getOptions = function () {
            return this.options
        }, e.exports = s
    }
); 