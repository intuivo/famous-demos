define(
	"famous-generative/Triangle", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/Matrix", 
		"famous-utils/Utils", 
		"famous/RenderNode", 
		"famous-math/Quaternion", 
		"famous-math/Vector", 
		"./Line"
	], 
	function (t, i, e) 
	{
        function s(t) {
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.red = "undefined" == typeof t.red ? 255 : t.red, this.green = "undefined" == typeof t.green ? 255 : t.green, this.blue = "undefined" == typeof t.blue ? 255 : t.blue, this.opacity = "undefined" == typeof t.opacity ? 1 : t.opacity, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o({
                size: [this.size, this.size]
            }), this.surface.addClass("Triangle"), this.surface.setProperties({
                "background-color": "rgba(0, 0, 0, 0.0)",
                "border-radius": "0px",
                "border-top": "0px solid",
                "border-right": .5 * this.size + "px solid transparent",
                "border-left": .5 * this.size + "px solid transparent",
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            }), this.calculateTransform()
        }

        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-utils/Utils");
        t("famous/RenderNode"), t("famous-math/Quaternion");
        var a = t("famous-math/Vector");
        t("./Line"), s.prototype.setProperties = function (t) {
            this.surface.setProperties(t)
        }, s.prototype.setColor = function (t, i, e, s) {
            return this.red = Math.abs(Math.floor(t)), this.green = Math.abs(Math.floor(i)), this.blue = Math.abs(Math.floor(e)), this.opacity = s, this.surface.setProperties({
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            }), this
        }, s.prototype.setOpacity = function (t) {
            return this.opacity = t, this
        }, s.prototype.render = function () {
            var t = {
                transform: this.mtx,
                opacity: this.opacity,
                origin: [.5, .5],
                target: this.surface.render()
            };
            return t
        }, s.prototype.setP1 = function (t, i, e) {
            this.set(t, i, e, this.x2, this.y2, this.z2, this.x3, this.y3, this.z3)
        }, s.prototype.setP2 = function (t, i, e) {
            this.set(this.x1, this.y1, this.z1, t, i, e, this.x3, this.y3, this.z3)
        }, s.prototype.setP3 = function (t, i, e) {
            this.set(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2, t, i, e)
        }, s.prototype.set = function (t, i, e, s, o, n, r, a, h) {
            this.x1 = t, this.y1 = i, this.z1 = e, this.x2 = s, this.y2 = o, this.z2 = n, this.x3 = r, this.y3 = a, this.z3 = h, this.calculateTransform()
        }, s.prototype.getP1 = function () {
            return [this.x1, this.y1, this.z1]
        }, s.prototype.getP2 = function () {
            return [this.x2, this.y2, this.z2]
        }, s.prototype.getP3 = function () {
            return [this.x3, this.y3, this.z3]
        }, s.prototype.getLength = function () {
            return this.length
        }, s.prototype.calculateTransform = function () {
            var t = 0,
                i = 0,
                e = 0,
                s = 0,
                o = 0,
                h = 0,
                u = 0,
                p = 0,
                c = 0,
                l = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2),
                f = r.distance3D(this.x1, this.y1, this.z1, this.x3, this.y3, this.z3),
                d = r.distance3D(this.x2, this.y2, this.z2, this.x3, this.y3, this.z3),
                m = 0;
            if (l > f ? l > d ? (this.y1 < this.y2 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x2, o = this.y2, h = this.z2) : (t = this.x2, i = this.y2, e = this.z2, s = this.x1, o = this.y1, h = this.z1), u = this.x3, p = this.y3, c = this.z3, m = l) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, m = d) : f > d ? (this.y1 < this.y3 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x1, o = this.y1, h = this.z1), u = this.x2, p = this.y2, c = this.z2, m = f) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, m = d), s >= t) {
                var y = t,
                    g = i,
                    v = e;
                t = s, i = o, e = h, s = y, o = g, h = v
            }
            var S = 1,
                b = 1,
                x = Math.atan((o - i) / (s - t)),
                w = .5 * (l + f + d),
                z = Math.sqrt(w * (w - l) * (w - f) * (w - d)),
                T = 2 * z / m,
                O = Math.asin(T / r.distance3D(t, i, e, u, p, c)),
                _ = Math.asin(T / r.distance3D(s, o, h, u, p, c)),
                M = T / Math.tan(_) / m,
                C = T / Math.tan(O) / m,
                P = new a(s - t, o - i, h - e),
                k = new a(s - u, o - p, h - c),
                I = new a;
            if (P.cross(k, I), I.z > 0 && (S = -1), t == s) {
                S *= -1;
                var E = C;
                C = M, M = E
            }
            var F = this.invSize * T,
                q = this.invSize * m;
            rot = n.multiply(n.identity, n.rotateZ(x)), this.surface.setProperties({
                "border-radius": "0px",
                "border-right": this.size * C + "px solid transparent",
                "border-left": this.size * M + "px solid transparent",
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            });
            var A = .5 * (t + s) - .5 * S * T * Math.sin(-x),
                D = .5 * (i + o) - .5 * S * T * Math.cos(Math.abs(x));
            this.mtx = n.multiply(n.identity, n.scale(q * b, F * S, 1), rot, n.move(n.identity, [A, D, 0]))
        }, e.exports = s
    }
); 