define(
	"famous-generative/Triangle3DOLD", 
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
		"famous-generative/Line"
	], 
	function (t, i, e) 
	{
        function s(t) {
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.red = "undefined" == typeof t.red ? 255 : t.red, this.green = "undefined" == typeof t.green ? 255 : t.green, this.blue = "undefined" == typeof t.blue ? 255 : t.blue, this.opacity = "undefined" == typeof t.opacity ? 1 : t.opacity, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o([this.size, this.size]), this.surface.addClass("Triangle3D"), this.surface.setProperties({
                "background-color": "rgba(0, 0, 0, 0.0)",
                "border-radius": "0px",
                "border-top": "0px solid",
                "border-right": .5 * this.size + "px solid red",
                "border-left": .5 * this.size + "px solid blue",
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            }), this.normal = new h({
                width: 4,
                opacity: 1
            }), this.line1 = new h({
                width: 4,
                opacity: 1
            }), this.line2 = new h({
                width: 4,
                opacity: 1
            }), this.line3 = new h({
                width: 4,
                opacity: 1
            }), this.line4 = new h({
                width: 4,
                opacity: 1
            }), this.line5 = new h({
                width: 4,
                opacity: 1
            }), this.line6 = new h({
                width: 4,
                opacity: 1
            }), this.normal.setColor(255, 0, 0, 1), this.line1.setColor(255, 255, 0, 1), this.line2.setColor(255, 0, 255, 1), this.line3.setColor(0, 255, 255, 1), this.line4.setColor(255, 0, 0, 1), this.line5.setColor(0, 0, 0, 1), this.line5.setColor(0, 0, 0, 1);
            var i = "font-size: 24px; ";
            i += "line-height: 30px; ", i += "margin: 0px; ";
            var e = .75,
                s = 30;
            this.p1Surf = new o([s, s]), this.p1Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p1Surf.setProperties(r.borderRadius(s)), this.p1Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "1" + "</p>"), this.p1Surf.mtx = n.identity, this.p1Surf.opacity = e, this.p2Surf = new o([s, s]), this.p2Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p2Surf.setProperties(r.borderRadius(s)), this.p2Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "2" + "</p>"), this.p2Surf.mtx = n.identity, this.p2Surf.opacity = e, this.p3Surf = new o([s, s]), this.p3Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p3Surf.setProperties(r.borderRadius(s)), this.p3Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "3" + "</p>"), this.p3Surf.mtx = n.identity, this.p3Surf.opacity = e, this.p4Surf = new o([s, s]), this.p4Surf.setProperties(r.backgroundColor(255, 0, 0, 1)), this.p4Surf.setProperties(r.borderRadius(s)), this.p4Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "C" + "</p>"), this.p4Surf.mtx = n.identity, this.p4Surf.opacity = e, this.p5Surf = new o([s, s]), this.p5Surf.setProperties(r.backgroundColor(0, 255, 0, 1)), this.p5Surf.setProperties(r.borderRadius(s)), this.p5Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "M" + "</p>"), this.p5Surf.mtx = n.identity, this.p5Surf.opacity = e, this.p6Surf = new o([s, s]), this.p6Surf.setProperties(r.backgroundColor(0, 0, 255, 1)), this.p6Surf.setProperties(r.borderRadius(s)), this.p6Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "V" + "</p>"), this.p6Surf.mtx = n.identity, this.p6Surf.opacity = e, this.calculateTransform()
        }

        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-utils/Utils");
        t("famous/RenderNode"), t("famous-math/Quaternion");
        var a = t("famous-math/Vector"),
            h = t("famous-generative/Line");
        s.prototype.setProperties = function (t) {
            this.surface.setProperties(t)
        }, s.prototype.setColor = function (t, i, e, s) {
            return this.red = Math.abs(Math.floor(t)), this.green = Math.abs(Math.floor(i)), this.blue = Math.abs(Math.floor(e)), this.opacity = s, this.surface.setProperties({
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            }), this
        }, s.prototype.setOpacity = function (t) {
            return this.opacity = t, this
        }, s.prototype.render = function () {
            var t = [{
                transform: this.mtx,
                opacity: this.opacity,
                target: this.surface.render()
            }];
            return t.push(this.normal.render()), t.push(this.line1.render()), t.push(this.line2.render()), t.push(this.line3.render()), t.push(this.line4.render()), t.push(this.line5.render()), t.push(this.line6.render()), t.push({
                transform: this.p1Surf.mtx,
                opacity: this.p1Surf.opacity,
                target: this.p1Surf.render()
            }), t.push({
                transform: this.p2Surf.mtx,
                opacity: this.p2Surf.opacity,
                target: this.p2Surf.render()
            }), t.push({
                transform: this.p3Surf.mtx,
                opacity: this.p3Surf.opacity,
                target: this.p3Surf.render()
            }), t.push({
                transform: this.p4Surf.mtx,
                opacity: this.p4Surf.opacity,
                target: this.p4Surf.render()
            }), t.push({
                transform: this.p5Surf.mtx,
                opacity: this.p5Surf.opacity,
                target: this.p5Surf.render()
            }), t.push({
                transform: this.p6Surf.mtx,
                opacity: this.p6Surf.opacity,
                target: this.p6Surf.render()
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
                m = 0,
                y = 0,
                g = 0,
                v = 0,
                S = 0;
            if (l > f ? l > d ? (this.y1 < this.y2 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x2, o = this.y2, h = this.z2) : (t = this.x2, i = this.y2, e = this.z2, s = this.x1, o = this.y1, h = this.z1), u = this.x3, p = this.y3, c = this.z3, y = l) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, y = d) : f > d ? (this.y1 < this.y3 ? (t = this.x1, i = this.y1, e = this.z1, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x1, o = this.y1, h = this.z1), u = this.x2, p = this.y2, c = this.z2, y = f) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, e = this.z2, s = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, e = this.z3, s = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, y = d), s >= t) {
                var b = t,
                    x = i,
                    w = e;
                t = s, i = o, e = h, s = b, o = x, h = w
            }
            var z = new a(t, i, e),
                T = new a(s, o, h),
                O = new a(u, p, c),
                _ = new a(t + s, i + o, e + h);
            _.mult(.5, _);
            var M = new a;
            M.add(z).sub(_, M), this.line5.set(_.x, _.y, _.z, _.x + M.x, _.y + M.y, _.z + M.z), this.p5Surf.mtx = n.translate(_.x, _.y, _.z), this.p1Surf.mtx = n.move(n.identity, [t, i, e]), this.p2Surf.mtx = n.move(n.identity, [s, o, h]), this.p3Surf.mtx = n.move(n.identity, [u, p, c]);
            var C = new a(t + s + u, i + o + p, e + h + c);
            C.mult(1 / 3, C);
            var P = new a;
            P.add(T).sub(z, P);
            var k = new a;
            k.add(O).sub(T, k);
            var I = new a;
            I.add(O).sub(z, I);
            var E = new a;
            P.cross(k, E), m = .5 * E.norm(), g = 2 * m / y;
            var F = new a;
            F = M.cross(E, F), F.normalize(g / 2, F), this.line6.set(_.x, _.y, _.z, _.x + F.x, _.y + F.y, _.z + F.z);
            var q = new a(_.x + F.x, _.y + F.y, _.z + F.z);
            this.p6Surf.mtx = n.translate(q.x, q.y, q.z);
            var A = Math.asin(g / I.getLength()),
                D = Math.asin(g / k.getLength()),
                v = g / Math.tan(D) / y,
                S = g / Math.tan(A) / y;
            E.normalize(150, E), this.line4.set(C.x, C.y, C.z, C.x + E.x, C.y + E.y, C.z + E.z), this.p4Surf.mtx = n.translate(C.x, C.y, C.z);
            var R = Math.acos(P.dot(k) / (P.norm() * k.norm())),
                N = Math.atan2(E.x, Math.sqrt(E.z * E.z + E.y * E.y)),
                L = Math.atan2(-E.y, E.z);
            this.surface.setProperties({
                "border-radius": "0px",
                "border-right": this.size * S + "px solid red",
                "border-left": this.size * v + "px solid green",
                "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"
            });
            var B = C.x - (C.x - q.x),
                U = C.y - (C.y - q.y),
                V = C.z - (C.z - q.z);
            this.line1.setLineWidth(10), this.line1.set(0, 0, 0, C.x, C.y, C.z), this.mtx = n.scale(this.invSize * y, this.invSize * g, 1), this.mtx = n.multiply(this.mtx, n.rotateZ(-R + .5 * Math.PI), n.rotate(L, N, 0)), this.mtx = n.move(this.mtx, [B, U, V])
        }, e.exports = s
    }
); 