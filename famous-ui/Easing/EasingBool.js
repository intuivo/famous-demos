define(
	"famous-ui/Easing/EasingBool", 
	[
		"require", 
		"exports", 
		"module", 
		"./EasingVisualizer", 
		"famous/EventHandler"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            this.easingOpts = {
                value: !1,
                selectedProperties: {
                    border: "3px solid #33ccff"
                },
                normalProperties: {
                    border: "none"
                }
            }, n.apply(this, arguments), this.setOptions(i, this.easingOpts), this.on("click", this.toggle.bind(this)), o.call(this)
        }

        function o() {
            var t = this.easingOpts.value ? this.easingOpts.selectedProperties : this.easingOpts.normalProperties;
            this.setProperties(t)
        }

        var n = t("./EasingVisualizer");
        t("famous/EventHandler"), s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.prototype.silentSet = function (t) {
            this.easingOpts.value = t, o.call(this)
        }, s.prototype.toggle = function () {
            this.set(!this.value)
        }, s.prototype.set = function (t) {
            this.easingOpts.value = t, this.emit("boolChange", {
                value: this.easingOpts.value
            }), o.call(this)
        }, e.exports = s
    }
);