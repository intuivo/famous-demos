define(
	"famous-css/StyleManager", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, e) 
	{
        function s() {
            for (x in document.styleSheets) {
                var t = document.styleSheets[x],
                    e = t.cssRules ? t.cssRules : t.rules;
                if (e)
                    for (i = 0; i < e.length; i++) {
                        var s = e[i].selectorText;
                        if (s in n)
                            for (key in n[s]) "height" == key ? e[i].style.height = n[s][key] : "width" == key ? e[i].style.width = n[s][key] : "line-height" == key ? e[i].style.lineHeight = n[s][key] : "margin-top" == key ? e[i].style.marginTop = n[s][key] : "margin-bottom" == key ? e[i].style.marginBottom = n[s][key] : "margin-right" == key ? e[i].style.marginRight = n[s][key] : "min-height" == key ? e[i].style.minHeight = n[s][key] : "left" == key ? e[i].style.left = n[s][key] : "right" == key ? e[i].style.right = n[s][key] : "padding" == key ? e[i].style.padding = n[s][key] : "top" == key ? e[i].style.top = n[s][key] : "bottom" == key ? e[i].style.bottom = n[s][key] : "text-shadow" == key ? e[i].style.textShadow = n[s][key] : "font-family" == key ? e[i].style.fontFamily = n[s][key] : "font-size" == key ? e[i].style.fontSize = n[s][key] : "background-size" == key ? e[i].style.backgroundSize = n[s][key] : "margin" == key ? e[i].style.margin = n[s][key] : "padding-left" == key ? e[i].style.paddingLeft = n[s][key] : "padding-right" == key ? e[i].style.paddingRight = n[s][key] : "padding-top" == key ? e[i].style.paddingTop = n[s][key] : "padding-bottom" == key ? e[i].style.paddingBottom = n[s][key] : "letter-spacing" == key ? e[i].style.letterSpacing = n[s][key] : "margin-left" == key ? e[i].style.marginLeft = n[s][key] : "min-width" == key ? e[i].style.minWidth = n[s][key] : "max-height" == key ? e[i].style.maxHeight = n[s][key] : "border-top" == key ? e[i].style.borderTop = n[s][key] : "border" == key ? e[i].style.border = n[s][key] : "-webkit-perspective" == key ? e[i].style["-webkit-perspective"] = n[s][key] : "perspective" == key ? e[i].style.perspective = n[s][key] : "background" == key ? (e[i].style["background-color"] = n[s][key], e[i].style.background = n[s][key]) : "box-shadow" == key ? (e[i].style["-webkit-box-shadow"] = n[s][key], e[i].style["-moz-box-shadow"] = n[s][key], e[i].style["box-shadow"] = n[s][key]) : "border-top-right-radius" == key ? (e[i].style["border-top-right-radius"] = n[s][key], e[i].style["-webkit-border-top-right-radius"] = n[s][key], e[i].style["-moz-border-radius-topright"] = n[s][key]) : "border-radius" == key ? (e[i].style["-moz-border-radius"] = n[s][key], e[i].style["-webkit-border-radius"] = n[s][key], e[i].style.borderRadius = n[s][key]) : console.log("Cant set CSS variable. No function associated with: " + key)
                    }
            }
            n = {}, e = null, t = null
        }

        function o(t, i, e) {
            t in n || (n[t] = {}), e = e.toString().toLowerCase(), e.indexOf("rgb") < 0 && e.indexOf("px") < 0 && e.indexOf("%") < 0 && e.indexOf(!1) && (e += "px"), n[t][i] = e
        }

        var n = {};
        e.setStyles = s, e.setRule = o
    }
); 