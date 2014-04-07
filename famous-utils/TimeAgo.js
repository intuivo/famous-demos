define(
	"famous-utils/TimeAgo", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t) {
            var i = Date.now(),
                e = i - t,
                s = 6e4,
                o = 60 * s,
                n = 24 * o;
            if (s > e) return "Just Now";
            if (o > e) {
                var r = ~~ (e / s);
                return r + "m"
            }
            if (n > e) {
                var a = ~~ (e / o);
                return a + "h"
            }
            var h = ~~ (e / n);
            return h + "d"
        }

        e.exports = {
            parse: s
        }
    }
); 