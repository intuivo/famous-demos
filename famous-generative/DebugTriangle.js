define(
	"famous-generative/DebugTriangle", 
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
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.opacity = t.opacity || 1, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o({
                size: [this.size, this.size]
            }), this.surface.addClass("DebugTriangle"), this.surface.setProperties({
                "background-color": "rgba(0, 0, 0, 0.0)",
                "border-radius": "0px",
                "border-top": "0px solid",
                "border-right": .5 * this.size + "px solid red",
                "border-left": .5 * this.size + "px solid blue",
                "border-bottom": this.size + "px solid rgba(255, 255, 255, .75)"
            }), this.line0 = new h({
                x1: this.x1,
                y1: this.y1,
                x2: this.x2,
                y2: this.y2,
                width: 2,
                opacity: .5
            }), this.line1 = new h({
                x1: this.x2,
                y1: this.y2,
                x2: this.x3,
                y2: this.y3,
                width: 2,
                opacity: .5
            }), this.line2 = new h({
                x1: this.x3,
                y1: this.y3,
                x2: this.x1,
                y2: this.y1,
                width: 2,
                opacity: .5
            }), this.line0.setLineWidth(4);
            var i = "font-size: 24px; ";
            i += "line-height: 30px; ", i += "margin: 0px; ";
            var e = .75,
                s = 30;
            this.p1Surf = new o({
                size: [s, s]
            }), this.p1Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p1Surf.setProperties(r.borderRadius(s)), this.p1Surf.setContent('<p class="triangleIndex" style="' + i + '">' + 1 + "</p>"), this.p1Surf.mtx = n.identity, this.p1Surf.opacity = e, this.p2Surf = new o({
                size: [s, s]
            }), this.p2Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p2Surf.setProperties(r.borderRadius(s)), this.p2Surf.setContent('<p class="triangleIndex" style="' + i + '">' + 2 + "</p>"), this.p2Surf.mtx = n.identity, this.p2Surf.opacity = e, this.p3Surf = new o({
                size: [s, s]
            }), this.p3Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p3Surf.setProperties(r.borderRadius(s)), this.p3Surf.setContent('<p class="triangleIndex" style="' + i + '">' + 3 + "</p>"), this.p3Surf.mtx = n.identity, this.p3Surf.opacity = e, this.calculateTransform()
        }

        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-utils/Utils");
        t("famous/RenderNode"), t("famous-math/Quaternion");
        var a = t("famous-math/Vector"),
            h = t("./Line");
        s.prototype.setProperties = function (t) {
            this.surface.setProperties(t)
        }, s.prototype.setColor = function (t, i, e, s) {
            return this.surface.setProperties(r.backgroundColor(t, i, e, 1)), this.opacity = s, this
        }, s.prototype.setOpacity = function (t) {
            return this.opacity = t, this
        }, s.prototype.render = function () {
            var t = [{
                transform: this.mtx,
                opacity: this.opacity,
                origin: [.5, .5],
                target: this.surface.render()
            }];
            return t.push(this.line0.render()), t.push(this.line1.render()), t.push(this.line2.render()), t.push({
                transform: this.p1Surf.mtx,
                opacity: this.p1Surf.opacity,
                origin: [.5, .5],
                target: this.p1Surf.render()
            }), t.push({
                transform: this.p2Surf.mtx,
                opacity: this.p2Surf.opacity,
                origin: [.5, .5],
                target: this.p2Surf.render()
            }), t.push({
                transform: this.p3Surf.mtx,
                opacity: this.p3Surf.opacity,
                origin: [.5, .5],
                target: this.p3Surf.render()
            }), t
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
            this.p1Surf.mtx = n.move(n.identity, [t, i, e]), this.p2Surf.mtx = n.move(n.identity, [s, o, h]), this.p3Surf.mtx = n.move(n.identity, [u, p, c]), this.line0.set(t, i, e, s, o, h), this.line0.setColor(255, 255, 0, 1), this.line1.set(t, i, e, u, p, c), this.line1.setColor(255, 0, 255, 1), this.line2.set(s, o, h, u, p, c), this.line2.setColor(0, 255, 255, 1);
            var S = 1,
                b = 1,
                x = 0,
                w = 0,
                z = Math.atan((o - i) / (s - t));
            isNaN(z) && (z = this.halfPi);
            var T = .5 * (l + f + d),
                O = Math.sqrt(T * (T - l) * (T - f) * (T - d)),
                _ = 2 * O / m,
                M = Math.asin(_ / r.distance3D(t, i, e, u, p, c)),
                C = Math.asin(_ / r.distance3D(s, o, h, u, p, c)),
                P = _ / Math.tan(C) / m,
                k = _ / Math.tan(M) / m,
                I = new a(s - t, o - i, h - e),
                E = new a(s - u, o - p, h - c),
                F = new a;
            if (I.cross(E, F), F.z > 0 && (S = -1), t == s) {
                S *= -1;
                var q = k;
                k = P, P = q
            }
            var A = this.invSize * _,
                D = this.invSize * m;
            rot = n.multiply(n.identity, n.rotate(x, w, z)), this.surface.setProperties({
                "border-radius": "0px",
                "border-right": this.size * k + "px solid rgba(255, 0, 0, .50)",
                "border-left": this.size * P + "px solid rgba(0, 0, 255, .50)",
                "border-bottom": this.size + "px solid rgba(0, 255, 0, .50)"
            });
            var R = .5 * (t + s) - .5 * S * _ * Math.sin(-z),
                N = .5 * (i + o) - .5 * S * _ * Math.cos(Math.abs(z)),
                L = n.move(n.identity, [R, N, 0]);
            this.mtx = n.multiply(n.identity, n.scale(D * b, A * S, 1), rot, L)
        }, e.exports = s
    }
);