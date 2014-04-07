define(
	"famous-color/ColorPalette", 
	[
		"require", 
		"exports", 
		"module", 
		"./Color"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.colors = t
        }

        t("./Color"), s.prototype.getColor = function (t) {
            return this.colors[t % this.colors.length]
        }, s.prototype.getCSS = function (t) {
            return this.getColor(t).getCSSColor()
        }, s.prototype.getLighestColor = function () {
            for (var t, i = 0, e = 0; e < this.colors.length; e++) {
                var s = this.colors[e].getLightness();
                s > i && (t = this.colors[e], i = s)
            }
            return t
        }, s.prototype.getDarkestColor = function () {
            for (var t, i = 100, e = 0; e < this.colors.length; e++) {
                var s = this.colors[e].getLightness();
                i > s && (t = this.colors[e], i = s)
            }
            return t
        }, s.prototype.getCount = function () {
            return this.colors.length
        }, e.exports = s
	}
);