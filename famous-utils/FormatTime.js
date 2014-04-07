define(
	"famous-utils/FormatTime", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            var e = t.toString().match(/(\d+)/g),
                s = new Date(e[0], e[1] - 1, e[2], e[3], e[4], e[5], 0),
                r = new Date,
                a = .001 * (r.getTime() - s.getTime()),
                h = parseInt(a / 60, 10),
                u = parseInt(h / 60, 10),
                p = parseInt(u / 24, 10),
                c = o(s),
                l = 10,
                f = "";
            return 720 > h ? 60 > h ? 2 > h ? (f = "just now", l = 1, [f, l]) : 30 > h ? (f = h + " minutes ago", l = 2, [f, l]) : 40 > h ? (f = "about a half hour ago", l = 2, [f, l]) : 50 > h ? (f = "about 45 minutes ago", l = 3, [f, l]) : (f = "about an hour ago", l = 4, [f, l]) : (f = 1 == i ? c[6] + ":" + c[7] + c[8] : "earlier today at " + c[6] + ":" + c[7] + c[8], l = 5, [f, l]) : 1440 > h ? (f = "yesterday at " + c[6] + ":" + c[7] + c[8], l = 6, [f, l]) : p >= 1 && 2 >= p ? (f = "yesterday at " + c[6] + ":" + c[7] + c[8], l = 7, [f, l]) : 6 > p ? (f = c[0] + " at " + c[6] + ":" + c[7] + c[8], l = 8, [f, l]) : 30 > p ? (f = 1 == i ? c[3] + "/" + c[1] + " at " + c[6] + ":" + c[7] + c[8] : c[4] + " " + c[1] + c[2] + " around " + c[6] + c[8], l = 9, [f, l]) : (f = n(c, r), l = 10, [f, l])
        }

        function o(t) {
            var i = t.getDate(),
                e = t.getDay(),
                s = t.getMonth() + 1,
                o = t.getFullYear(),
                n = t.getHours(),
                r = t.getMinutes().toString(),
                a = 12 > n ? "am" : "pm";
            r.length < 2 && (r = "0" + r);
            var h = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                u = {
                    1: "st",
                    2: "nd",
                    3: "rd",
                    4: "th",
                    5: "th",
                    6: "th",
                    7: "th",
                    8: "th",
                    9: "th",
                    10: "th",
                    11: "th",
                    12: "th",
                    13: "th",
                    14: "th",
                    15: "th",
                    16: "th",
                    17: "th",
                    18: "th",
                    19: "th",
                    20: "th",
                    21: "st",
                    22: "nd",
                    23: "rd",
                    24: "th",
                    25: "th",
                    26: "th",
                    27: "th",
                    28: "th",
                    29: "th",
                    30: "th",
                    31: "st"
                }, p = {
                    1: "Jan",
                    2: "Feb",
                    3: "Mar",
                    4: "April",
                    5: "May",
                    6: "June",
                    7: "July",
                    8: "Aug",
                    9: "Sep",
                    10: "Oct",
                    11: "Nov",
                    12: "Dec"
                };
            return 0 === n && (n = 12), n > 12 && (n -= 12), [h[e], i, u[i], s, p[s], o, n, r, a]
        }

        function n(t, i) {
            i ? i : new Date;
            var e = i.getFullYear() === t[5] ? t[4] + " " + t[1] + t[2] : t[4] + " " + t[1] + t[2] + " " + t[5];
            return e
        }

        e.exports = s
    }
); 