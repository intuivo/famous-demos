define(
	"famous-physics/constraints/joint", 
	[
		"require", 
		"exports", 
		"module", 
		"../math/matrix", 
		"../math/GaussSeidel", 
		"../math/Vector"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.opts = {
                length: 0
            }, t && this.setOpts(t);
            var i = 10,
                e = 1e-5;
            this.solver = new n(i, e)
        }

        var o = t("../math/matrix"),
            n = t("../math/GaussSeidel"),
            r = t("../math/Vector");
        s.prototype.getPosition = function (t, i, e) {
            var s = 2,
                n = 1,
                a = [],
                h = [],
                u = [],
                p = [],
                c = [],
                l = t;
            a[0] = l.getVel(), h[0] = l.p, u[0] = l.mInv, p[0] = l.f, c[0] = l.m, a[1] = i.v, h[1] = i.p, u[1] = i.mInv, p[1] = i.f, c[1] = i.m;
            for (var f = [], d = 0; n > d; d++) {
                f[d] = [];
                for (var m = 0; s > m; m++) {
                    var y;
                    m == d ? y = h[d].sub(h[d + 1]) : m == d + 1 && (y = h[d + 1].sub(h[d])), f[d][3 * m + 0] = y.x, f[d][3 * m + 1] = y.y, f[d][3 * m + 2] = y.z
                }
            }
            var g = new o(n, 3 * s);
            g.set(f);
            for (var v = [], d = 0; n > d; d++) {
                v[d] = [];
                for (var m = 0; s > m; m++) {
                    var y;
                    m == d ? y = a[d].sub(a[d + 1]) : m == d + 1 && (y = a[d + 1].sub(a[d])), v[d][3 * m + 0] = y.x, v[d][3 * m + 1] = y.y, v[d][3 * m + 2] = y.z
                }
            }
            for (var S = [], b = [], x = 0; s > x; x++) S[3 * x + 0] = u[x], S[3 * x + 1] = u[x], S[3 * x + 2] = u[x], b[3 * x + 0] = a[x].x, b[3 * x + 1] = a[x].y, b[3 * x + 2] = a[x].z;
            var w = new o(3 * s, 3 * s).diag(S),
                z = new o(n, n);
            g.rightMult(w).rightMult(g.transpose(), z);
            for (var T = g.vMult(b), O = 1, _ = [], x = 0; n > x; x++) {
                var M = this.length,
                    C = h[x + 1].sub(h[x]).normSquared();
                _[x] = .5 * (C - M * M)
            }
            for (var P = [], k = 0; n > k; k++) P[k] = -T[k] - O / e * _[k];
            for (var I = this.solver.solve(z.values, P), E = g.transpose().vMult(I), F = [], x = 0; s > x; x++) F[x] = new r(E[3 * x + 0], E[3 * x + 1], E[3 * x + 2]);
            for (var x = 0; s > x; x++) {
                var b = a[x],
                    q = c[x],
                    A = F[x];
                (0 != x || 0 != l.id) && (1 == x && 0 == l.id ? b.add(A.sub(F[0]).div(q), b) : b.add(A.div(q), b))
            }
        }, s.prototype.getError = function () {}, e.exports = s
    }
);