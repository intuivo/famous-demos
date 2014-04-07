define(
	"famous-ui/ColorPicker/AlphaPicker", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous-color/Color", 
		"./CanvasPicker", 
		"famous-ui/Easing/CanvasDrawer"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            var s = e || [35, 35];
            r.call(this, t, i, {
                railsY: !0,
                pickerProperties: {
                    border: "3px solid white",
                    borderRadius: t[0] / 2 + "px",
                    boxShadow: "0px 1px 0px #888",
                    marginTop: "2px"
                },
                pickerPosX: i.a,
                pickerSize: s,
                colorPicker: !0,
                normalizedColors: !0
            }), this.alpha = this.color.a, this.backgroundCanvas = n.call(this), this.drawGradient(), this.on("change", this.drawPickerColor.bind(this)), this.pickerColor
        }

        function o(t, i, e, s) {
            colorAlpha = s.substring(0, s.length - 2);
            var o = t.createLinearGradient(this.canvasSize[0] * i[0], this.canvasSize[1] * i[1], this.canvasSize[0] * e[0], this.canvasSize[1] * e[1]);
            o.addColorStop(0, colorAlpha + "0)"), o.addColorStop(1, colorAlpha + "1)"), console.log(colorAlpha), t.fillStyle = o, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }

        function n() {
            var t = document.createElement("canvas");
            t.width = this.canvasSize[0], t.height = this.canvasSize[1];
            var i = t.getContext("2d");
            i.fillStyle = "#ffffff", a.rect(i, 0, 0, this.canvasSize[0], this.canvasSize[1]), i.fillStyle = "#cccccc";
            for (var e = 16, s = 2, o = height = this.canvasSize[0] / e, n = 0; e > n; n++)
                for (var r = 0; s > r; r++) 0 == n % 2 && 0 == r % 2 ? a.rect(i, o * n, r * height, o, height) : 1 == n % 2 && 1 == r % 2 && a.rect(i, o * n, r * height, o, height);
            return t
        }

        t("famous/Surface"), t("famous-color/Color");
        var r = t("./CanvasPicker"),
            a = t("famous-ui/Easing/CanvasDrawer");
        s.prototype = Object.create(r.prototype), s.prototype.drawPickerColor = function (t) {
            this.picker.colorSurface(t.value.getCSSColor())
        }, s.prototype.setColor = function (t) {
            this.color = t, this.drawGradient(), this.drawPickerColor({
                value: this.color
            })
        }, s.prototype.drawGradient = function () {
            var t = this.gradient.getContext("2d");
            t.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), t.drawImage(this.backgroundCanvas, 0, 0);
            var i = this.color.clone();
            i.a = 0, o.call(this, t, [0, 0], [1, 1], i.getCSSColor())
        }, s.prototype.updateColor = function () {
            var t = parseFloat((this._selectedCoords[0] / this.size[0]).toFixed(2));
            this.color.a = t, this.emit("change", {
                value: this.color
            })
        }, e.exports = s
    }
); 