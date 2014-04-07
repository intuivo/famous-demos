define(
	"famous-physics/math/Random", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            return t + Math.random() * (i - t)
        }

        function o(t, i) {
            return Math.floor(t + Math.random() * (i - t + 1))
        }

        e.exports = {
            integer: function (t, i, e) {
                if (t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 1, void 0 !== e) {
                    for (var s = [], n = 0; e > n; n++) s.push(o(t, i));
                    return s
                }
                return o(t, i)
            },
            range: function (t, i, e) {
                if (t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 1, void 0 !== e) {
                    for (var o = [], n = 0; e > n; n++) o.push(s(t, i));
                    return o
                }
                return s(t, i)
            },
            sign: function (t) {
                return t = void 0 !== t ? t : .5, Math.random() < t ? 1 : -1
            },
            bool: function (t) {
                return t = void 0 !== t ? t : .5, Math.random() < t
            }
        }
    }
); 