define(
	"famous/WebGLSurface", 
	[
		"require", 
		"exports", 
		"module", 
		"./Surface"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            this.options = i, this._canvas = document.createElement("canvas"), o.call(this, t), this.setContent(this._canvas), this.setSize(t)
        }

        var o = t("./Surface");
        s.prototype = Object.create(o.prototype), s.prototype.getContext = function () {
            return this._canvas.getContext("experimental-webgl", this.options)
        }, s.prototype.setSize = function (t) {
            o.prototype.setSize.apply(this, arguments), this._canvas.style.width = t[0] + "px", this._canvas.style.height = t[1] + "px";
            var i = window.devicePixelRatio ? window.devicePixelRatio : 1;
            this._canvas.width = t[0] * i, this._canvas.height = t[1] * i
        }, e.exports = s
    }
); 