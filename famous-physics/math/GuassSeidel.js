define(
	"famous-physics/math/GaussSeidel", 
	[
		"require", 
		"exports", 
		"module"], 
	function (t, i, e) 
	{
        function s(t, i) {
            this.numIterations = t || 10, this.tolerance = i || 1e-7, this.prevX = [], this.x = []
        }

        function o() {
            for (var t = 0, i = this.x.length, e = 0; i > e; e++) t += Math.pow(this.prevX[e] - this.x[e], 2) / (this.x[e] * this.x[e]);
            return Math.sqrt(t)
        }

        s.prototype.solve = function (t, i) {
            for (var e, s = this.numIterations, n = i.length, r = this.x, a = this.prevX, h = 0; n > h; h++) this.x[h] = 0;
            for (var u = 0, p = 1 / 0; s > u && p > this.tolerance;) {
                for (var h = 0; n > h; h++) {
                    a[h] = r[h], e = 0;
                    for (var c = 0; n > c; c++) c != h && (e += t[h][c] * r[c]);
                    r[h] = (i[h] - e) / t[h][h]
                }
                p = o(), u++
            }
            return r
        }, e.exports = s
    }
); 