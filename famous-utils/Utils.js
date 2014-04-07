define(
	"famous-utils/Utils", 
	[
		"require", 
		"exports", 
		"module", 
		"./Time", 
		"famous/Matrix"
	], 
	function (t, i, e) 
	{
        var s = t("./Time"),
            o = t("famous/Matrix"),
            n = {
                rad2deg: function (t) {
                    return 57.2957795 * t
                },
                deg2rad: function (t) {
                    return .0174532925 * t
                },
                distance: function (t, i, e, s) {
                    var o = e - t,
                        n = s - i;
                    return Math.sqrt(o * o + n * n)
                },
                distance3D: function (t, i, e, s, o, n) {
                    var r = s - t,
                        a = o - i,
                        h = n - e;
                    return Math.sqrt(r * r + a * a + h * h)
                },
                map: function (t, i, e, s, o, n) {
                    var r = (t - i) / (e - i) * (o - s) + s;
                    return n && (o > s ? r > o ? r = o : s > r && (r = s) : o > r ? r = o : r > s && (r = s)), r
                },
                limit: function (t, i, e) {
                    return t = Math.min(t, e), t = Math.max(t, i)
                },
                perspective: function (t, i, e, s, o) {
                    var n = 1 / Math.tan(i / 2),
                        r = 1 / (s - o);
                    return t[0] = n / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (o + s) * r, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * o * s * r, t[15] = 0, t
                },
                ortho: function (t, i, e, s, o, n, r) {
                    var a = -(e + i) / (e - i),
                        h = -(o + s) / (o - s),
                        u = -(r + n) / (r - n);
                    return t[0] = 2 / (e - i), t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 / (o - s), t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = -2 / (r - n), t[11] = -1, t[12] = a, t[13] = h, t[14] = u, t[15] = 1, t
                },
                normalFromFM: function (t, i) {
                    var e = i[0],
                        s = i[1],
                        o = i[2],
                        n = i[3],
                        r = i[4],
                        a = i[5],
                        h = i[6],
                        u = i[7],
                        p = i[8],
                        c = i[9],
                        l = i[10],
                        f = i[11],
                        d = i[12],
                        m = i[13],
                        y = i[14],
                        g = i[15],
                        v = e * a - s * r,
                        S = e * h - o * r,
                        b = e * u - n * r,
                        x = s * h - o * a,
                        w = s * u - n * a,
                        z = o * u - n * h,
                        T = p * m - c * d,
                        O = p * y - l * d,
                        _ = p * g - f * d,
                        M = c * y - l * m,
                        C = c * g - f * m,
                        P = l * g - f * y,
                        k = v * P - S * C + b * M + x * _ - w * O + z * T;
                    return k ? (k = 1 / k, t[0] = (a * P - h * C + u * M) * k, t[1] = (h * _ - r * P - u * O) * k, t[2] = (r * C - a * _ + u * T) * k, t[3] = (o * C - s * P - n * M) * k, t[4] = (e * P - o * _ + n * O) * k, t[5] = (s * _ - e * C - n * T) * k, t[6] = (m * z - y * w + g * x) * k, t[7] = (y * b - d * z - g * S) * k, t[8] = (d * w - m * b + g * v) * k, t) : null
                },
                clamp: function (t, i, e) {
                    return i > t ? i : t > e ? e : t
                },
                color: function (t, i, e, s) {
                    return "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                },
                backgroundTransparent: function () {
                    return {
                        backgroundColor: "transparent"
                    }
                },
                backgroundColor: function (t, i, e, s) {
                    return {
                        backgroundColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderRadius: function (t) {
                    return {
                        borderRadius: t + "px"
                    }
                },
                borderTopWidth: function (t) {
                    return {
                        borderTopWidth: t + "px"
                    }
                },
                borderBottomWidth: function (t) {
                    return {
                        borderBottomWidth: t + "px"
                    }
                },
                borderLeftWidth: function (t) {
                    return {
                        borderLeftWidth: t + "px"
                    }
                },
                borderRightWidth: function (t) {
                    return {
                        borderRightWidth: t + "px"
                    }
                },
                borderWidth: function (t) {
                    return {
                        borderWidth: t + "px"
                    }
                },
                borderColor: function (t, i, e, s) {
                    return 0 == s ? {
                        borderColor: "transparent"
                    } : {
                        borderColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderTopColor: function (t, i, e, s) {
                    return 0 == s ? {
                        borderTopColor: "transparent"
                    } : {
                        borderTopColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderBottomColor: function (t, i, e, s) {
                    return 0 == s ? {
                        borderBottomColor: "transparent"
                    } : {
                        borderBottomColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderRightColor: function (t, i, e, s) {
                    return 0 == s ? {
                        borderRightColor: "transparent"
                    } : {
                        borderRightColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderLeftColor: function (t, i, e, s) {
                    return 0 == s ? {
                        borderLeftColor: "transparent"
                    } : {
                        borderLeftColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                    }
                },
                borderStyle: function (t) {
                    return {
                        borderStyle: t
                    }
                },
                borderTopStyle: function (t) {
                    return {
                        borderTopStyle: t
                    }
                },
                borderBottomStyle: function (t) {
                    return {
                        borderBottomStyle: t
                    }
                },
                borderRightStyle: function (t) {
                    return {
                        borderRightStyle: t
                    }
                },
                borderLeftStyle: function (t) {
                    return {
                        borderLeftStyle: t
                    }
                },
                colorHSL: function (t, i, e, s) {
                    return "hsla(" + Math.floor(t) + "," + Math.floor(i) + "%," + Math.floor(e) + "%," + s + ")"
                },
                backgroundTransparent: function () {
                    return {
                        backgroundColor: "transparent"
                    }
                },
                backgroundColorHSL: function (t, i, e, s) {
                    return {
                        backgroundColor: "hsla(" + Math.floor(t) + "," + Math.floor(i) + "%," + Math.floor(e) + "%," + s + ")"
                    }
                },
                clipCircle: function (t, i, e) {
                    return {
                        "-webkit-clip-path": "circle(" + t + "px," + i + "px," + e + "px)"
                    }
                },
                getWidth: function () {
                    return window.innerWidth
                },
                getHeight: function () {
                    return window.innerHeight
                },
                getCenter: function () {
                    return [.5 * n.getWidth(), .5 * n.getHeight()]
                },
                isMobile: function () {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? !0 : !1
                },
                isString: function (t) {
                    return "string" == typeof t || t instanceof String
                },
                isArray: function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                extend: function (t, i) {
                    for (var e in i) t[e] = i[e];
                    return t
                },
                getDevicePixelRatio: function () {
                    return window.devicePixelRatio ? window.devicePixelRatio : 1
                },
                getSurfacePosition: function (t) {
                    function i(t) {
                        var s = o(t);
                        if ("" !== s && void 0 !== s) {
                            var n = e(s);
                            r[0] += n[0], r[1] += n[1], r[2] += n[2], i(t.parentNode)
                        }
                    }

                    function e(t) {
                        var i = [];
                        t = s(t), i[0] = parseInt(t[12].replace(" ", "")), i[1] = parseInt(t[13].replace(" ", "")), i[2] = parseInt(t[14].replace(" ", ""));
                        for (var e = 0; e < i.length; e++) "undefined" == typeof i[e] && (i[e] = 0);
                        return i
                    }

                    function s(t) {
                        return t = t.replace("matrix3d(", ""), t = t.replace(")", ""), t.split(",")
                    }

                    function o(t) {
                        var i = t.style.webkitTransform || t.style.transform;
                        return i
                    }

                    var n = t._currTarget,
                        r = [0, 0, 0];
                    return n ? (i(n), r) : void 0
                },
                getCenterMatrix: function (t, i, e) {
                    return void 0 == e && (e = 0), o.translate(t[0] - .5 * i[0], t[1] - .5 * i[1], e)
                },
                debounce: function (t, i) {
                    var e, o, n, r, a;
                    return function () {
                        o = this, a = arguments, n = new Date;
                        var h = function () {
                            var u = new Date - n;
                            i > u ? e = s.setTimeout(h, i - u) : (e = null, r = t.apply(o, a))
                        };
                        return e || (e = s.setTimeout(h, i)), r
                    }
                },
                hasUserMedia: function () {
                    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
                },
                isWebkit: function () {
                    return !!window.webkitURL
                }
            };
        e.exports = n
	}
);