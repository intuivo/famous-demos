define(
	"famous-utils/Time", 
	[
	"require", 
	"exports", 
	"module", 
	"famous/Engine"
	], 
	function (t, i, e) 
	{

        function s(t, i) {
            var e = Date.now(),
                s = function () {
                    var s = Date.now();
                    s - e >= i && (t(), e = Date.now())
                };
            return h.on("prerender", s), s
        }

        function o(t) {
            h.unbind("prerender", t)
        }

        function n(t, i, e) {
            var s = Date.now(),
                o = function () {
                    var n = Date.now(),
                        r = (n - s) / t;
                    return n - s >= t ? (i(1), h.unbind("prerender", o), e && e(), void 0) : (i(r), void 0)
                };
            h.on("prerender", o)
        }

        function r(t, i) {
            var e = Date.now(),
                s = function () {
                    var o = Date.now();
                    return o - e >= i ? (h.unbind("prerender", s), t(), void 0) : void 0
                };
            return h.on("prerender", s), s
        }

        function a(t) {
            h.unbind("prerender", t)
        }

        var h = t("famous/Engine");
        e.exports = {
            setInterval: s,
            removeInterval: o,
            executeOver: n,
            setTimeout: r,
            removeTimeout: a
        }
    }
);