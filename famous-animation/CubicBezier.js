define(
	"famous-animation/CubicBezier", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t) {
            var i = [
                [1, 0, 0, 0],
                [0, 0, 1, 0],
                [-3, 3, -2, -1],
                [2, -2, 1, 1]
            ];
            t = t || [0, 1, 0, 0], this.coef = [0, 0, 0, 0];
            for (var e = 0; 4 > e; e++)
                for (var s = 0; 4 > s; s++) this.coef[e] += i[e][s] * t[s]
        }

        s.prototype.create = function () {
            var t = this;
            return function (i) {
                i = i || 0;
                var e = t.coef;
                return e[0] + e[1] * i + e[2] * i * i + e[3] * i * i * i
            }
        }, e.exports = s
    }
); 