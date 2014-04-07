define(
	"famous-ui/Buttons/SpringButton.ui", 
	[
		"require", 
		"exports", 
		"module", 
		"./SpringButton"
	], 
	function (t, i, e) 
	{
        function s() {
            o.apply(this, arguments), this.autoUI = [{
                type: "label",
                uiOptions: {
                    content: "PHYSICS",
                    properties: {
                        "border-bottom": "1px solid #f2786f",
                        color: "#f2786f",
                        "font-size": "16px"
                    }
                }
            }, {
                option: "springPeriod",
                type: "slider",
                uiOptions: {
                    range: [100, 2e3],
                    name: "SPRING DURATION"
                }
            }, {
                option: "springPeriod",
                callback: this.setDamping,
                type: "slider",
                uiOptions: {
                    range: [.002, .8],
                    name: "SPRING DAMPING"
                }
            }, {
                type: "label",
                uiOptions: {
                    content: "APPEARANCE",
                    properties: {
                        "border-bottom": "1px solid white",
                        color: "rgba( 255, 255, 255, 1 )",
                        "font-size": "16px"
                    }
                }
            }, {
                callback: this.setBackgroundColor,
                type: "colorPicker",
                uiOptions: {
                    name: "Background Color"
                }
            }, {
                callback: this.setBorderColor,
                type: "colorPicker",
                uiOptions: {
                    name: "Stroke Color"
                }
            }, {
                callback: this.setBorderRadius,
                type: "slider",
                uiOptions: {
                    range: [0, 100],
                    name: "BORDER RADIUS"
                }
            }]
        }

        var o = t("./SpringButton");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.prototype.setPeriod = function (t) {
            this.setOptions({
                period: t
            })
        }, s.prototype.setDamping = function (t) {
            this.setOptions({
                dampingRatio: t
            })
        }, s.prototype.setBackgroundColor = function (t) {
            this.surface.setProperties({
                "background-color": t.getCSSColor()
            })
        }, s.prototype.setBorderColor = function (t) {
            this.surface.setProperties({
                border: "1px solid " + t.getCSSColor()
            })
        }, s.prototype.setBorderRadius = function (t) {
            this.surface.setProperties({
                "border-radius": t + "px"
            })
        }, e.exports = s
    }
); 