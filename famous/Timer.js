define(
	"famous/Timer", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Engine"
	], 
	function (t, i, e) 
	{
        function s(t) {
            return u.on(p, t), t
        }

        function o(t, i) {
            var e = c(),
                o = function () {
                    var s = c();
                    s - e >= i && (t.apply(this, arguments), u.unbind(p, o))
                };
            return s(o)
        }

        function n(t, i) {
            var e = c(),
                o = function () {
                    var s = c();
                    s - e >= i && (t.apply(this, arguments), e = c())
                };
            return s(o)
        }

        function r(t, i) {
            if (void 0 !== i) {
                var e = function () {
                    i--, 0 >= i && (t.apply(this, arguments), h(e))
                };
                return s(e)
            }
        }

        function a(t, i) {
            i = i || 1;
            var e = i,
                o = function () {
                    i--, 0 >= i && (t.apply(this, arguments), i = e)
                };
            return s(o)
        }

        function h(t) {
            u.unbind(p, t)
        }

        var u = t("famous/Engine"),
            p = "prerender",
            c = window.performance ? function () {
                return performance.now()
            } : function () {
                return Date.now()
            };
        e.exports = {
            setTimeout: o,
            setInterval: n,
            after: r,
            every: a,
            clear: h
        }
    }
); 