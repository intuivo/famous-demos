define(
	"famous-sync/FastClick", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function () 
	{
        if (window.CustomEvent) {
            var t = 300,
                i = {};
            document.addEventListener("touchstart", function (t) {
                for (var e = Date.now(), s = 0; s < t.changedTouches.length; s++) {
                    var o = t.changedTouches[s];
                    i[o.identifier] = e
                }
            }), window.addEventListener("touchmove", function (t) {
                for (var e = 0; e < t.changedTouches.length; e++) {
                    var s = t.changedTouches[e];
                    delete i[s.identifier]
                }
            }), document.addEventListener("touchend", function (e) {
                for (var s = Date.now(), o = 0; o < e.changedTouches.length; o++) {
                    var n = e.changedTouches[o],
                        r = i[n.identifier];
                    if (r && t > s - r) {
                        e.preventDefault();
                        var a = new CustomEvent("click", {
                            bubbles: !0,
                            details: n
                        });
                        e.target.dispatchEvent(a)
                    }
                    delete i[n.identifier]
                }
            })
        }
    }
); 