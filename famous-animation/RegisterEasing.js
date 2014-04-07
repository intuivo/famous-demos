define(
	"famous-animation/RegisterEasing", 
	[
		"require", 
		"exports", 
		"module", 
		"./Easing", 
		"famous/TweenTransition"
	], function (t) 
	{
        function i() {
            for (var t = /norm/gi, i = e(o).filter(function (i) {
                    return t.test(i)
                }).sort(), s = {}, n = 0; n < i.length; n++) s[i[n]] = o[i[n]];
            return s
        }

        function e(t) {
            var i = [];
            for (key in t) t.hasOwnProperty(key) && i.push(key);
            return i
        }

        function s() {
            var t = i();
            for (var e in t) n.registerCurve(e, t[e])
        }

        var o = t("./Easing"),
            n = t("famous/TweenTransition");
        s()
    }
);