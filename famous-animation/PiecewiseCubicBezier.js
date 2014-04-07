define(
	"famous-animation/PiecewiseCubicBezier", 
	[
		"require", 
		"exports", 
		"module", 
		"./CubicBezier"
	], 
	function (t, i, e) 
	{
        function s(t) {
            t = t || {}, this.split = t.split || .5;
            var i = t.overshoot || 0,
                e = t.vLeft || [0, 1 + i, 0, 0],
                s = t.vRight || [1 + i, 1, 0, 0];
            this.bezLeft = new o(e).create(), this.bezRight = new o(s).create()
        }

        var o = t("./CubicBezier");
        s.prototype.create = function () {
            var t = this;
            return function (i) {
                i = i || 0;
                var e, s = t.split;
                return s > i ? (e = i / s, t.bezLeft(e)) : (e = (i - s) / (1 - s), t.bezRight(e))
            }
        }, e.exports = s
    }
); 