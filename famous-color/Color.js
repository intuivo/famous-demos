define(
	"famous-color/Color", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-utils/Utils"
	], 
	function (t, i, e) 
	{
        function s(t, i, e, o) {
            t instanceof s ? (this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this.hex = t.getHex()) : (this.r = "undefined" == typeof t ? 255 : t, this.g = "undefined" == typeof i ? 255 : i, this.b = "undefined" == typeof e ? 255 : e, this.a = "undefined" == typeof o ? 1 : o, this.hex = this.getHex())
        }

        function o(t, i, e) {
            return 0 > e && (e += 1), e > 1 && (e -= 1), 1 / 6 > e ? t + 6 * (i - t) * e : .5 > e ? i : 2 / 3 > e ? t + 6 * (i - t) * (2 / 3 - e) : t
        }

        var n = t("famous-utils/Utils");
        s.prototype.getHue = function () {
            var t = this.r / 255,
                i = this.g / 255,
                e = this.b / 255,
                s = Math.max(t, i, e),
                o = Math.min(t, i, e),
                n = 0,
                r = s - o;
            switch (s) {
            case t:
                n = (i - e) / r + (e > i ? 6 : 0);
                break;
            case i:
                n = (e - t) / r + 2;
                break;
            case e:
                n = (t - i) / r + 4
            }
            return n *= 60, isNaN(n) && (n = 0), n
        }, s.prototype.getSaturation = function () {
            var t, i = this.r / 255,
                e = this.g / 255,
                s = this.b / 255,
                o = Math.max(i, e, s),
                n = Math.min(i, e, s),
                r = (o + n) / 2;
            if (o == n) h = t = 0;
            else {
                var a = o - n;
                switch (t = r > .5 ? a / (2 - o - n) : a / (o + n), o) {
                case i:
                    h = (e - s) / a + (s > e ? 6 : 0);
                    break;
                case e:
                    h = (s - i) / a + 2;
                    break;
                case s:
                    h = (i - e) / a + 4
                }
                h *= 60
            }
            return 100 * t
        }, s.prototype.getBrightness = function () {
            var t = this.r / 255,
                i = this.g / 255,
                e = this.b / 255;
            return 100 * Math.max(t, i, e)
        }, s.prototype.getLightness = function () {
            var t = this.r / 255,
                i = this.g / 255,
                e = this.b / 255;
            return 100 * ((Math.max(t, i, e) + Math.min(t, i, e)) / 2)
        }, s.prototype.getHex = function () {
            function t(t) {
                var i = t.toString(16);
                return 1 === i.length ? "0" + i : i
            }

            return "#" + t(this.r) + t(this.g) + t(this.b)
        }, s.prototype.getHSL = function () {
            var t, i, e = this.r / 255,
                s = this.g / 255,
                o = this.b / 255,
                n = Math.max(e, s, o),
                r = Math.min(e, s, o),
                a = (n + r) / 2;
            if (n == r) t = i = 0;
            else {
                var h = n - r;
                switch (i = a > .5 ? h / (2 - n - r) : h / (n + r), n) {
                case e:
                    t = (s - o) / h + (o > s ? 6 : 0);
                    break;
                case s:
                    t = (o - e) / h + 2;
                    break;
                case o:
                    t = (e - s) / h + 4
                }
                t *= 60
            }
            return [t, 100 * i, 100 * a]
        }, s.prototype.setFromHSL = function (t, i, e) {
            t /= 360, i /= 100, e /= 100;
            var s, n, r;
            if (0 === i) s = n = r = e;
            else {
                var a = .5 > e ? e * (1 + i) : e + i - e * i,
                    h = 2 * e - a;
                s = o(h, a, t + 1 / 3), n = o(h, a, t), r = o(h, a, t - 1 / 3)
            }
            return this.r = Math.round(255 * s), this.g = Math.round(255 * n), this.b = Math.round(255 * r), this.hex = this.getHex(), this
        }, s.prototype.setFromHex = function (t) {
            return t = "#" === t.charAt(0) ? t.substring(1, t.length) : t, 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), this.hex = "#" + t, this.r = parseInt(t.substring(0, 2), 16), this.g = parseInt(t.substring(2, 4), 16), this.b = parseInt(t.substring(4, 6), 16), this
        }, s.prototype.setFromRGBA = function (t, i, e, s) {
            return this.r = t, this.g = i, this.b = e, s && (this.a = s), this.hex = this.getHex(), this
        }, s.prototype.setHue = function (t) {
            var i = this.getHSL();
            return this.setFromHSL(t, i[1], i[2])
        }, s.prototype.setSaturation = function (t) {
            var i = this.getHSL();
            return this.setFromHSL(i[0], t, i[2])
        }, s.prototype.setLightness = function (t) {
            var i = this.getHSL();
            return this.setFromHSL(i[0], i[1], t)
        }, s.prototype.getCSSBackgroundColor = function () {
            return n.backgroundColor(this.r, this.b, this.g, this.a)
        }, s.prototype.getCSSColor = function () {
            return n.color(this.r, this.g, this.b, this.a)
        }, s.prototype.clone = function () {
            return new s(this.r, this.g, this.b, this.a)
        }, s.prototype.toNormalizeColorArray = function () {
            return [this.r / 255, this.g / 255, this.b / 255, this.a]
        }, e.exports = s
    }
);