define(
	"famous-utils/NoiseImage", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            t || (t = [128, 128]), i || (i = 8), o.width = t[0], o.height = t[1];
            var s = i >> 1,
                r = o.width / i,
                a = i * i >> 1,
                h = 1 / s;
            u(e), n.fillRect(0, 0, t[0], t[1]), u(e);
            for (var p, c, l = 0; a > l; l++) Math.random() + .5 >> 0 && (c = l * h >> 0, p = l - s * c, n.fillRect(p * r, c * r, r, r), n.fillRect((i - (p + 1)) * r, c * r, r, r));
            var f = o.toDataURL("image/png");
            return f
        }

        var o = document.createElement("canvas"),
            n = o.getContext("2d"),
            r = function (t) {
                var i = 361 * Math.random() >> 0,
                    e = t ? 360 * .125 * t - (46 * Math.random() >> 0) : i;
                return e
            }, a = function () {
                return 30 + 71 * Math.random() >> 0
            }, h = function () {
                return 30 + 71 * Math.random() >> 0
            }, u = function (t) {
                n.fillStyle = "hsl(" + r(t) + "," + a() + "%," + h() + "%)"
            };
        e.exports = {
            generate: s
        }
    }
); 