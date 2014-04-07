define(
	"famous-ui/Easing/CanvasDrawer", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i, e, s, o) {
            t.beginPath(), t.moveTo(i, e), t.lineTo(s, o), t.stroke(), t.closePath()
        }

        function o(t, i, e, s, o) {
            t.beginPath(), t.rect(i, e, s, o), t.fill(), t.closePath()
        }

        e.exports = {
            lineTo: s,
            rect: o
        }
    }
);