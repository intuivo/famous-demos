define("famous/Matrix", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e)
    {
        var matrix = {};
        matrix.precision = 1e-6;

        matrix.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

        matrix.multiply4x4 = function o(t, i)
        {
            var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            return e[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + t[3] * i[12], e[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + t[3] * i[13], e[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + t[3] * i[14], e[3] = t[0] * i[3] + t[1] * i[7] + t[2] * i[11] + t[3] * i[15], e[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8] + t[7] * i[12], e[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9] + t[7] * i[13], e[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10] + t[7] * i[14], e[7] = t[4] * i[3] + t[5] * i[7] + t[6] * i[11] + t[7] * i[15], e[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8] + t[11] * i[12], e[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9] + t[11] * i[13], e[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10] + t[11] * i[14], e[11] = t[8] * i[3] + t[9] * i[7] + t[10] * i[11] + t[11] * i[15], e[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + t[15] * i[12], e[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + t[15] * i[13], e[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + t[15] * i[14], e[15] = t[12] * i[3] + t[13] * i[7] + t[14] * i[11] + t[15] * i[15], arguments.length <= 2 ? e : o.apply(null, [e].concat(Array.prototype.slice.call(arguments, 2)))
        };

        matrix.multiply = function n(t, i)
        {
            if (!t || !i) return t || i;
            var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return e[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8], e[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9], e[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10], e[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8], e[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9], e[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10], e[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8], e[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9], e[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10], e[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + i[12], e[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + i[13], e[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + i[14], arguments.length <= 2 ? e : n.apply(null, [e].concat(Array.prototype.slice.call(arguments, 2)))
        };

        matrix.move = function (t, i)
        {
            return i[2] || (i[2] = 0), [t[0], t[1], t[2], 0, t[4], t[5], t[6], 0, t[8], t[9], t[10], 0, t[12] + i[0], t[13] + i[1], t[14] + i[2], 1]
        };
        matrix.moveThen = function (t, i)
        {
            t[2] || (t[2] = 0);
            var e = t[0] * i[0] + t[1] * i[4] + t[2] * i[8],
                o = t[0] * i[1] + t[1] * i[5] + t[2] * i[9],
                n = t[0] * i[2] + t[1] * i[6] + t[2] * i[10];
            return matrix.move(i, [e, o, n])
        };
        matrix.translate = function (t, i, e)
        {
            return void 0 === e && (e = 0), [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, e, 1]
        };
        matrix.scale = function (t, i, e)
        {
            return void 0 === e && (e = 1), [t, 0, 0, 0, 0, i, 0, 0, 0, 0, e, 0, 0, 0, 0, 1]
        };
        matrix.rotateX = function (t) {
            var i = Math.cos(t),
                e = Math.sin(t);
            return [1, 0, 0, 0, 0, i, e, 0, 0, -e, i, 0, 0, 0, 0, 1]
        };
        matrix.rotateY = function (t) {
            var i = Math.cos(t),
                e = Math.sin(t);
            return [i, 0, -e, 0, 0, 1, 0, 0, e, 0, i, 0, 0, 0, 0, 1]
        };
        matrix.rotateZ = function (t) {
            var i = Math.cos(t),
                e = Math.sin(t);
            return [i, e, 0, 0, -e, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        };
        matrix.rotate = function (t, i, e) {
            var s = Math.cos(t),
                o = Math.sin(t),
                n = Math.cos(i),
                r = Math.sin(i),
                a = Math.cos(e),
                h = Math.sin(e),
                u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return u[0] = n * a, u[1] = s * h + o * r * a, u[2] = o * h - s * r * a, u[4] = -n * h, u[5] = s * a - o * r * h, u[6] = o * a + s * r * h, u[8] = r, u[9] = -o * n, u[10] = s * n, u
        };
        matrix.rotateAxis = function (t, i) {
            var e = Math.sin(i),
                s = Math.cos(i),
                o = 1 - s,
                n = t[0] * t[0] * o,
                r = t[0] * t[1] * o,
                a = t[0] * t[2] * o,
                h = t[1] * t[1] * o,
                u = t[1] * t[2] * o,
                p = t[2] * t[2] * o,
                c = t[0] * e,
                l = t[1] * e,
                f = t[2] * e,
                d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return d[0] = n + s, d[1] = r + f, d[2] = a - l, d[4] = r - f, d[5] = h + s, d[6] = u + c, d[8] = a + l, d[9] = u - c, d[10] = p + s, d
        };

        matrix.aboutOrigin = function (t, i)
        {
            var e = t[0] - (t[0] * i[0] + t[1] * i[4] + t[2] * i[8]),
                o = t[1] - (t[0] * i[1] + t[1] * i[5] + t[2] * i[9]),
                n = t[2] - (t[0] * i[2] + t[1] * i[6] + t[2] * i[10]);
            return matrix.move(i, [e, o, n])
        };

        matrix.formatCSS = function (t)
        {
            for (var i = t.slice(0), e = 0; e < i.length; e++) i[e] < 1e-6 && i[e] > -1e-6 && (i[e] = 0);
            return "matrix3d(" + i.join() + ")"
        };

        matrix.skew = function (t, i, e)
        {
            return [1, 0, 0, 0, Math.tan(e), 1, 0, 0, Math.tan(i), Math.tan(t), 1, 0, 0, 0, 0, 1]
        };

        matrix.getTranslate = function (t)
        {
            return [t[12], t[13], t[14]]
        };

        matrix.inverse = function (t)
        {
            var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                e = t[5] * t[10] - t[6] * t[9],
                s = t[4] * t[10] - t[6] * t[8],
                o = t[4] * t[9] - t[5] * t[8],
                n = t[1] * t[10] - t[2] * t[9],
                r = t[0] * t[10] - t[2] * t[8],
                a = t[0] * t[9] - t[1] * t[8],
                h = t[1] * t[6] - t[2] * t[5],
                u = t[0] * t[6] - t[2] * t[4],
                p = t[0] * t[5] - t[1] * t[4],
                c = t[0] * e - t[1] * s + t[2] * o,
                l = 1 / c;
            return i[0] = l * e, i[1] = -l * n, i[2] = l * h, i[4] = -l * s, i[5] = l * r, i[6] = -l * u, i[8] = l * o, i[9] = -l * a, i[10] = l * p, i[12] = -t[12] * i[0] - t[13] * i[4] - t[14] * i[8], i[13] = -t[12] * i[1] - t[13] * i[5] - t[14] * i[9], i[14] = -t[12] * i[2] - t[13] * i[6] - t[14] * i[10], i
        };

        matrix.interpret = function (t)
        {
            function i(t) {
                return 2 == t.length ? t[0] * t[0] + t[1] * t[1] : t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
            }

            function e(t) {
                return Math.sqrt(i(t))
            }

            function o(t) {
                return 0 > t ? -1 : 1
            }

            var n = [t[0], t[1], t[2]],
                r = o(n[0]),
                a = e(n),
                h = [n[0] + r * a, n[1], n[2]],
                u = 2 / i(h),
                p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            p[0] = 1 - u * h[0] * h[0], p[5] = 1 - u * h[1] * h[1], p[10] = 1 - u * h[2] * h[2], p[1] = -u * h[0] * h[1], p[2] = -u * h[0] * h[2], p[6] = -u * h[1] * h[2], p[4] = p[1], p[8] = p[2], p[9] = p[6];
            var c = matrix.multiply(t, p),
                l = [c[5], c[6]],
                f = o(l[0]),
                d = e(l),
                m = [l[0] + f * d, l[1]],
                y = 2 / i(m),
                g = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            g[5] = 1 - y * m[0] * m[0], g[10] = 1 - y * m[1] * m[1], g[6] = -y * m[0] * m[1], g[9] = g[6];
            var v = matrix.multiply(p, g),
                S = matrix.multiply(t, v),
                b = matrix.scale(S[0] < 0 ? -1 : 1, S[5] < 0 ? -1 : 1, S[10] < 0 ? -1 : 1);
            S = matrix.multiply(b, S), v = matrix.multiply(v, b);
            var x = {};
            return x.translate = matrix.getTranslate(t), x.rotate = [Math.atan2(-v[6], v[10]), Math.asin(v[2]), Math.atan2(-v[1], v[0])], x.rotate[0] || (x.rotate[0] = 0, x.rotate[2] = Math.atan2(v[4], v[5])), x.scale = [S[0], S[5], S[10]], x.skew = [Math.atan(S[9] / x.scale[2]), Math.atan(S[8] / x.scale[2]), Math.atan(S[4] / x.scale[0])], Math.abs(x.rotate[0]) + Math.abs(x.rotate[2]) > 1.5 * Math.PI && (x.rotate[1] = Math.PI - x.rotate[1], x.rotate[1] > Math.PI && (x.rotate[1] -= 2 * Math.PI), x.rotate[1] < -Math.PI && (x.rotate[1] += 2 * Math.PI), x.rotate[0] < 0 ? x.rotate[0] += Math.PI : x.rotate[0] -= Math.PI, x.rotate[2] < 0 ? x.rotate[2] += Math.PI : x.rotate[2] -= Math.PI), x
        };

        matrix.build = function (t)
        {
            var i = matrix.scale(t.scale[0], t.scale[1], t.scale[2]),
                e = matrix.skew(t.skew[0], t.skew[1], t.skew[2]),
                o = matrix.rotate(t.rotate[0], t.rotate[1], t.rotate[2]);
            return matrix.move(matrix.multiply(i, e, o), t.translate)
        };

        matrix.equals = function (t, i)
        {
            if (t === i) return !0;
            if (!t || !i) return !1;
            for (var e = 0; e < t.length; e++)
                if (t[e] != i[e]) return !1;
            return !0
        };

        matrix.normalizeRotation = function (t) {
            var i = t.slice(0);
            for ((i[0] == Math.PI / 2 || i[0] == -Math.PI / 2) && (i[0] = -i[0], i[1] = Math.PI - i[1], i[2] -= Math.PI), i[0] > Math.PI / 2 && (i[0] = i[0] - Math.PI, i[1] = Math.PI - i[1], i[2] -= Math.PI), i[0] < -Math.PI / 2 && (i[0] = i[0] + Math.PI, i[1] = -Math.PI - i[1], i[2] -= Math.PI); i[1] < -Math.PI;) i[1] += 2 * Math.PI;
            for (; i[1] >= Math.PI;) i[1] -= 2 * Math.PI;
            for (; i[2] < -Math.PI;) i[2] += 2 * Math.PI;
            for (; i[2] >= Math.PI;) i[2] -= 2 * Math.PI;
            return i
        };

        matrix.vecMultiply = function (t, i) {
            return [t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + i[12], t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + i[13], t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + i[14]]
        };

        matrix.applyPerspective = function (t, i) {
            var e = i / (i - t[2]);
            return [e * t[0], e * t[1]]
        };

        e.exports = matrix;
    }
);