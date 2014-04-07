define(
	"famous-css/StyleSheet", 
	[
		"require", 
		"exports", 
		"module", 
		"./StyleManager"
	], 
	function (t, i) 
	{
        function e() {
            s.setRule("body", "font-size", .02 * window.innerWidth), s.setRule("body", "background", "#000000"), s.setStyles()
        }

        var s = t("./StyleManager");
        i.buildStyleSheet = e
    }
); 