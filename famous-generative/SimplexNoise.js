define(
	"famous-generative/SimplexNoise", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i, e, s) {
            this.x = t || 0, this.y = i || 0, this.z = e || 0, this.w = s || 0
        }

        function o(t, i, e) {
            return t.x * i + t.y * e
        }

        function n(t, i, e, s) {
            return t.x * i + t.y * e + t.z * s
        }

        function r(t, i, e, s, o) {
            return t.x * i + t.y * e + t.z * s + t.w * o
        }

        function a() {
            this.F2 = .5 * (Math.sqrt(3) - 1), this.G2 = (3 - Math.sqrt(3)) / 6, this.F3 = 1 / 3, this.G3 = 1 / 6, this.F4 = (Math.sqrt(5) - 1) / 4, this.G4 = (5 - Math.sqrt(5)) / 20, this.grad3 = [new s(1, 1, 0), new s(-1, 1, 0), new s(1, -1, 0), new s(-1, -1, 0), new s(1, 0, 1), new s(-1, 0, 1), new s(1, 0, -1), new s(-1, 0, -1), new s(0, 1, 1), new s(0, -1, 1), new s(0, 1, -1), new s(0, -1, -1)], this.grad4 = [new s(0, 1, 1, 1), new s(0, 1, 1, -1), new s(0, 1, -1, 1), new s(0, 1, -1, -1), new s(0, -1, 1, 1), new s(0, -1, 1, -1), new s(0, -1, -1, 1), new s(0, -1, -1, -1), new s(1, 0, 1, 1), new s(1, 0, 1, -1), new s(1, 0, -1, 1), new s(1, 0, -1, -1), new s(-1, 0, 1, 1), new s(-1, 0, 1, -1), new s(-1, 0, -1, 1), new s(-1, 0, -1, -1), new s(1, 1, 0, 1), new s(1, 1, 0, -1), new s(1, -1, 0, 1), new s(1, -1, 0, -1), new s(-1, 1, 0, 1), new s(-1, 1, 0, -1), new s(-1, -1, 0, 1), new s(-1, -1, 0, -1), new s(1, 1, 1, 0), new s(1, 1, -1, 0), new s(1, -1, 1, 0), new s(1, -1, -1, 0), new s(-1, 1, 1, 0), new s(-1, 1, -1, 0), new s(-1, -1, 1, 0), new s(-1, -1, -1, 0)], this.p = [];
            for (var t = 0; 255 >= t; t++) this.p[t] = Math.floor(255 * Math.random());
            this.perm = [], this.permMod12 = [];
            for (var t = 0; 512 > t; t++) this.perm[t] = this.p[255 & t], this.permMod12[t] = this.perm[t] % 12
        }

        a.prototype.noise2D = function (t, i) {
            var e, s, n = 0,
                r = 0,
                a = 0,
                h = (t + i) * this.F2,
                u = Math.floor(t + h),
                p = Math.floor(i + h),
                c = (u + p) * this.G2,
                l = u - c,
                f = p - c,
                d = t - l,
                m = i - f;
            d > m ? (e = 1, s = 0) : (e = 0, s = 1);
            var y = d - e + this.G2,
                g = m - s + this.G2,
                v = d - 1 + 2 * this.G2,
                S = m - 1 + 2 * this.G2,
                b = 255 & u,
                x = 255 & p,
                w = .5 - d * d - m * m;
            if (w >= 0) {
                var z = this.permMod12[b + this.perm[x]];
                w *= w, n = w * w * o(this.grad3[z], d, m)
            }
            var T = .5 - y * y - g * g;
            if (T >= 0) {
                var O = this.permMod12[b + e + this.perm[x + s]];
                T *= T, r = T * T * o(this.grad3[O], y, g)
            }
            var _ = .5 - v * v - S * S;
            if (_ >= 0) {
                var M = this.permMod12[b + 1 + this.perm[x + 1]];
                _ *= _, a = _ * _ * o(this.grad3[M], v, S)
            }
            return 70 * (n + r + a)
        }, a.prototype.noise3D = function (t, i, e) {
            var s, o, r, a, h, u, p = 0,
                c = 0,
                l = 0,
                f = 0,
                d = (t + i + e) * this.F3,
                m = Math.floor(t + d),
                y = Math.floor(i + d),
                g = Math.floor(e + d),
                v = (m + y + g) * this.G3,
                S = m - v,
                b = y - v,
                x = g - v,
                w = t - S,
                z = i - b,
                T = e - x;
            w >= z ? z >= T ? (s = 1, o = 0, r = 0, a = 1, h = 1, u = 0) : w >= T ? (s = 1, o = 0, r = 0, a = 1, h = 0, u = 1) : (s = 0, o = 0, r = 1, a = 1, h = 0, u = 1) : T > z ? (s = 0, o = 0, r = 1, a = 0, h = 1, u = 1) : T > w ? (s = 0, o = 1, r = 0, a = 0, h = 1, u = 1) : (s = 0, o = 1, r = 0, a = 1, h = 1, u = 0);
            var O = w - s + this.G3,
                _ = z - o + this.G3,
                M = T - r + this.G3,
                C = w - a + 2 * this.G3,
                P = z - h + 2 * this.G3,
                k = T - u + 2 * this.G3,
                I = w - 1 + 3 * this.G3,
                E = z - 1 + 3 * this.G3,
                F = T - 1 + 3 * this.G3,
                q = 255 & m,
                A = 255 & y,
                D = 255 & g,
                R = .6 - w * w - z * z - T * T;
            if (R >= 0) {
                var N = this.permMod12[q + this.perm[A + this.perm[D]]];
                R *= R, p = R * R * n(this.grad3[N], w, z, T)
            }
            var L = .6 - O * O - _ * _ - M * M;
            if (L >= 0) {
                var B = this.permMod12[q + s + this.perm[A + o + this.perm[D + r]]];
                L *= L, c = L * L * n(this.grad3[B], O, _, M)
            }
            var U = .6 - C * C - P * P - k * k;
            if (U >= 0) {
                var V = this.permMod12[q + a + this.perm[A + h + this.perm[D + u]]];
                U *= U, l = U * U * n(this.grad3[V], C, P, k)
            }
            var H = .6 - I * I - E * E - F * F;
            if (H >= 0) {
                var G = this.permMod12[q + 1 + this.perm[A + 1 + this.perm[D + 1]]];
                H *= H, f = H * H * n(this.grad3[G], I, E, F)
            }
            return 32 * (p + c + l + f)
        }, a.prototype.noise4D = function (t, i, e, s) {
            var o = 0,
                n = 0,
                a = 0,
                h = 0,
                u = 0,
                p = (t + i + e + s) * this.F4,
                c = Math.floor(t + p),
                l = Math.floor(i + p),
                f = Math.floor(e + p),
                d = Math.floor(s + p),
                m = (c + l + f + d) * this.G4,
                y = c - m,
                g = l - m,
                v = f - m,
                S = d - m,
                b = t - y,
                x = i - g,
                w = e - v,
                z = s - S,
                T = 0,
                O = 0,
                _ = 0,
                M = 0;
            b > x ? T++ : O++, b > w ? T++ : _++, b > z ? T++ : M++, x > w ? O++ : _++, x > z ? O++ : M++, w > z ? _++ : M++;
            var C, P, k, I, E, F, q, A, D, R, N, L;
            C = T >= 3 ? 1 : 0, P = O >= 3 ? 1 : 0, k = _ >= 3 ? 1 : 0, I = M >= 3 ? 1 : 0, E = T >= 2 ? 1 : 0, F = O >= 2 ? 1 : 0, q = _ >= 2 ? 1 : 0, A = M >= 2 ? 1 : 0, D = T >= 1 ? 1 : 0, R = O >= 1 ? 1 : 0, N = _ >= 1 ? 1 : 0, L = M >= 1 ? 1 : 0;
            var B = b - C + this.G4,
                U = x - P + this.G4,
                V = w - k + this.G4,
                H = z - I + this.G4,
                G = b - E + 2 * this.G4,
                j = x - F + 2 * this.G4,
                X = w - q + 2 * this.G4,
                Y = z - A + 2 * this.G4,
                W = b - D + 3 * this.G4,
                Z = x - R + 3 * this.G4,
                Q = w - N + 3 * this.G4,
                K = z - L + 3 * this.G4,
                J = b - 1 + 4 * this.G4,
                $ = x - 1 + 4 * this.G4,
                ti = w - 1 + 4 * this.G4,
                ii = z - 1 + 4 * this.G4,
                ei = 255 & c,
                si = 255 & l,
                oi = 255 & f,
                ni = 255 & d,
                ri = .6 - b * b - x * x - w * w - z * z;
            if (ri >= 0) {
                var ai = this.perm[ei + this.perm[si + this.perm[oi + this.perm[ni]]]] % 32;
                ri *= ri, o = ri * ri * r(this.grad4[ai], b, x, w, z)
            }
            var hi = .6 - B * B - U * U - V * V - H * H;
            if (hi >= 0) {
                var ui = this.perm[ei + C + this.perm[si + P + this.perm[oi + k + this.perm[ni + I]]]] % 32;
                hi *= hi, n = hi * hi * r(this.grad4[ui], B, U, V, H)
            }
            var pi = .6 - G * G - j * j - X * X - Y * Y;
            if (pi >= 0) {
                var ci = this.perm[ei + E + this.perm[si + F + this.perm[oi + q + this.perm[ni + A]]]] % 32;
                pi *= pi, a = pi * pi * r(this.grad4[ci], G, j, X, Y)
            }
            var li = .6 - W * W - Z * Z - Q * Q - K * K;
            if (li >= 0) {
                var fi = this.perm[ei + D + this.perm[si + R + this.perm[oi + N + this.perm[ni + L]]]] % 32;
                li *= li, h = li * li * r(this.grad4[fi], W, Z, Q, K)
            }
            var di = .6 - J * J - $ * $ - ti * ti - ii * ii;
            if (0 > di) {
                var mi = this.perm[ei + 1 + this.perm[si + 1 + this.perm[oi + 1 + this.perm[ni + 1]]]] % 32;
                di *= di, u = di * di * r(this.grad4[mi], J, $, ti, ii)
            }
            return 27 * (o + n + a + h + u)
        }, e.exports = a
    }
); 