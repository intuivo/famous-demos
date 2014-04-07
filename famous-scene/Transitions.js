define(
	"famous-scene/Transitions", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-animation/Easing", 
		"famous/Matrix"
	], 
	function (t, i, e) 
	{
        var s = t("famous-animation/Easing"),
            o = t("famous/Matrix");
        e.exports = {
            popIn: function (t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.move(o.scale(1e-6, 1e-6), [.5 * window.innerWidth, .5 * window.innerHeight])), t.setTransform(o.identity, e, i)
            },
            popOut: function (t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.move(o.scale(1e-6, 1e-6), [.5 * window.innerWidth, .5 * window.innerHeight]), e, i)
            },
            fadeLeft: function (t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.translate(-window.innerWidth, 0, 0), e, i), t.setOpacity(0, e)
            },
            fadeInLeft: function (t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.translate(window.innerWidth, 0, 0)), t.setTransform(o.identity, e, i), t.setOpacity(0), t.setOpacity(1, e)
            },
            fadeRight: function (t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.translate(window.innerWidth, 0, 0), e, i), t.setOpacity(0, e)
            },
            fadeInRight: function (t, i) {
                var e = {
                    curve: s.inOutExpoNorm,
                    duration: 1e3
                };
                t.halt(), t.setTransform(o.translate(-window.innerWidth, 0, 0)), t.setTransform(o.identity, e, i), t.setOpacity(0), t.setOpacity(1, e)
            }
        }
    }
);