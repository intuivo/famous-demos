define(
	"famous-animation/Easing", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        var s = {
            linear: function (t, i, e, s) {
                return t * (e / s) + i
            },
            linearNorm: function (t) {
                return t
            },
            inQuad: function (t, i, e, s) {
                return e * (t /= s) * t + i
            },
            inQuadNorm: function (t) {
                return t * t
            },
            outQuad: function (t, i, e, s) {
                return -e * (t /= s) * (t - 2) + i
            },
            outQuadNorm: function (t) {
                return -(t -= 1) * t + 1
            },
            inOutQuad: function (t, i, e, s) {
                return (t /= s / 2) < 1 ? e / 2 * t * t + i : -e / 2 * (--t * (t - 2) - 1) + i
            },
            inOutQuadNorm: function (t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            inCubic: function (t, i, e, s) {
                return e * (t /= s) * t * t + i
            },
            inCubicNorm: function (t) {
                return t * t * t
            },
            outCubic: function (t, i, e, s) {
                return e * ((t = t / s - 1) * t * t + 1) + i
            },
            outCubicNorm: function (t) {
                return --t * t * t + 1
            },
            inOutCubic: function (t, i, e, s) {
                return (t /= s / 2) < 1 ? e / 2 * t * t * t + i : e / 2 * ((t -= 2) * t * t + 2) + i
            },
            inOutCubicNorm: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            inQuart: function (t, i, e, s) {
                return e * (t /= s) * t * t * t + i
            },
            inQuartNorm: function (t) {
                return t * t * t * t
            },
            outQuart: function (t, i, e, s) {
                return -e * ((t = t / s - 1) * t * t * t - 1) + i
            },
            outQuartNorm: function (t) {
                return -(--t * t * t * t - 1)
            },
            inOutQuart: function (t, i, e, s) {
                return (t /= s / 2) < 1 ? e / 2 * t * t * t * t + i : -e / 2 * ((t -= 2) * t * t * t - 2) + i
            },
            inOutQuartNorm: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            inQuint: function (t, i, e, s) {
                return e * (t /= s) * t * t * t * t + i
            },
            inQuintNorm: function (t) {
                return t * t * t * t * t
            },
            outQuint: function (t, i, e, s) {
                return e * ((t = t / s - 1) * t * t * t * t + 1) + i
            },
            outQuintNorm: function (t) {
                return --t * t * t * t * t + 1
            },
            inOutQuint: function (t, i, e, s) {
                return (t /= s / 2) < 1 ? e / 2 * t * t * t * t * t + i : e / 2 * ((t -= 2) * t * t * t * t + 2) + i
            },
            inOutQuintNorm: function (t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            inSine: function (t, i, e, s) {
                return -e * Math.cos(t / s * (Math.PI / 2)) + e + i
            },
            inSineNorm: function (t) {
                return -1 * Math.cos(t * (Math.PI / 2)) + 1
            },
            outSine: function (t, i, e, s) {
                return e * Math.sin(t / s * (Math.PI / 2)) + i
            },
            outSineNorm: function (t) {
                return Math.sin(t * (Math.PI / 2))
            },
            inOutSine: function (t, i, e, s) {
                return -e / 2 * (Math.cos(Math.PI * t / s) - 1) + i
            },
            inOutSineNorm: function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            inExpo: function (t, i, e, s) {
                return 0 == t ? i : e * Math.pow(2, 10 * (t / s - 1)) + i
            },
            inExpoNorm: function (t) {
                return 0 == t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            outExpo: function (t, i, e, s) {
                return t == s ? i + e : e * (-Math.pow(2, -10 * t / s) + 1) + i
            },
            outExpoNorm: function (t) {
                return 1 == t ? 1 : -Math.pow(2, -10 * t) + 1
            },
            inOutExpo: function (t, i, e, s) {
                return 0 == t ? i : t == s ? i + e : (t /= s / 2) < 1 ? e / 2 * Math.pow(2, 10 * (t - 1)) + i : e / 2 * (-Math.pow(2, -10 * --t) + 2) + i
            },
            inOutExpoNorm: function (t) {
                return 0 == t ? 0 : 1 == t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
            },
            inCirc: function (t, i, e, s) {
                return -e * (Math.sqrt(1 - (t /= s) * t) - 1) + i
            },
            inCircNorm: function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
            },
            outCirc: function (t, i, e, s) {
                return e * Math.sqrt(1 - (t = t / s - 1) * t) + i
            },
            outCircNorm: function (t) {
                return Math.sqrt(1 - --t * t)
            },
            inOutCirc: function (t, i, e, s) {
                return (t /= s / 2) < 1 ? -e / 2 * (Math.sqrt(1 - t * t) - 1) + i : e / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
            },
            inOutCircNorm: function (t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            inElastic: function (t, i, e, s) {
                var o = 1.70158,
                    n = 0,
                    r = e;
                if (0 == t) return i;
                if (1 == (t /= s)) return i + e;
                if (n || (n = .3 * s), r < Math.abs(e)) {
                    r = e;
                    var o = n / 4
                } else var o = n / (2 * Math.PI) * Math.asin(e / r);
                return -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - o) * 2 * Math.PI / n)) + i
            },
            inElasticNorm: function (t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 == t ? 0 : 1 == t ? 1 : (e || (e = .3), i = e / (2 * Math.PI) * Math.asin(1 / s), -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * 2 * Math.PI / e)))
            },
            outElastic: function (t, i, e, s) {
                var o = 1.70158,
                    n = 0,
                    r = e;
                if (0 == t) return i;
                if (1 == (t /= s)) return i + e;
                if (n || (n = .3 * s), r < Math.abs(e)) {
                    r = e;
                    var o = n / 4
                } else var o = n / (2 * Math.PI) * Math.asin(e / r);
                return r * Math.pow(2, -10 * t) * Math.sin((t * s - o) * 2 * Math.PI / n) + e + i
            },
            outElasticNorm: function (t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 == t ? 0 : 1 == t ? 1 : (e || (e = .3), i = e / (2 * Math.PI) * Math.asin(1 / s), s * Math.pow(2, -10 * t) * Math.sin((t - i) * 2 * Math.PI / e) + 1)
            },
            inOutElastic: function (t, i, e, s) {
                var o = 1.70158,
                    n = 0,
                    r = e;
                if (0 == t) return i;
                if (2 == (t /= s / 2)) return i + e;
                if (n || (n = s * .3 * 1.5), r < Math.abs(e)) {
                    r = e;
                    var o = n / 4
                } else var o = n / (2 * Math.PI) * Math.asin(e / r);
                return 1 > t ? -.5 * r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - o) * 2 * Math.PI / n) + i : .5 * r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * s - o) * 2 * Math.PI / n) + e + i
            },
            inOutElasticNorm: function (t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 == t ? 0 : 2 == (t /= .5) ? 1 : (e || (e = .3 * 1.5), i = e / (2 * Math.PI) * Math.asin(1 / s), 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * 2 * Math.PI / e) : .5 * s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - i) * 2 * Math.PI / e) + 1)
            },
            inBack: function (t, i, e, s, o) {
                return void 0 == o && (o = 1.70158), e * (t /= s) * t * ((o + 1) * t - o) + i
            },
            inBackNorm: function (t, i) {
                return void 0 == i && (i = 1.70158), t * t * ((i + 1) * t - i)
            },
            outBack: function (t, i, e, s, o) {
                return void 0 == o && (o = 1.70158), e * ((t = t / s - 1) * t * ((o + 1) * t + o) + 1) + i
            },
            outBackNorm: function (t, i) {
                return void 0 == i && (i = 1.70158), --t * t * ((i + 1) * t + i) + 1
            },
            inOutBack: function (t, i, e, s, o) {
                return void 0 == o && (o = 1.70158), (t /= s / 2) < 1 ? e / 2 * t * t * (((o *= 1.525) + 1) * t - o) + i : e / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + i
            },
            inOutBackNorm: function (t, i) {
                return void 0 == i && (i = 1.70158), (t /= .5) < 1 ? .5 * t * t * (((i *= 1.525) + 1) * t - i) : .5 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2)
            },
            inBounce: function (t, i, e, o) {
                return e - s.outBounce(o - t, 0, e, o) + i
            },
            inBounceNorm: function (t) {
                return 1 - s.outBounceNorm(1 - t)
            },
            outBounce: function (t, i, e, s) {
                return (t /= s) < 1 / 2.75 ? e * 7.5625 * t * t + i : 2 / 2.75 > t ? e * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? e * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : e * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
            },
            outBounceNorm: function (t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            inOutBounce: function (t, i, e, o) {
                return o / 2 > t ? .5 * s.inBounce(2 * t, 0, e, o) + i : .5 * s.outBounce(2 * t - o, 0, e, o) + .5 * e + i
            },
            inOutBounceNorm: function (t) {
                return .5 > t ? .5 * s.inBounceNorm(2 * t) : .5 * s.outBounceNorm(2 * t - 1) + .5
            }
        };
        e.exports = s
    }
);