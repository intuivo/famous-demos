define(
	"famous-ui/ColorPicker/HuePicker", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-color/Color", 
		"./CanvasPicker"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            var s = new n,
                o = i.getHue();
            s.setFromHSL(o, 100, 50);
            var a = e || [35, 35];
            r.call(this, t, s, {
                railsY: !0,
                pickerProperties: {
                    border: "2px solid white",
                    borderRadius: t[0] / 2 + "px",
                    boxShadow: "0px 1px 0px #888",
                    marginTop: "2px"
                },
                pickerPosX: 1 - o / 360,
                pickerSize: a,
                colorPicker: !0,
                normalizedColors: !0
            }), this.drawGradient(this.color.getCSSColor()), this.on("change", this.drawPickerColor.bind(this)), this.pickerColor
        }

        function o(t, i, e) {
            var s = t.createLinearGradient(this.canvasSize[0] * i[0], this.canvasSize[1] * i[1], this.canvasSize[0] * e[0], this.canvasSize[1] * e[1]);
            s.addColorStop(0, "rgb(255,   0,   0)"), s.addColorStop(.16, "rgb(255,   0, 255)"), s.addColorStop(.33, "rgb(0,     0, 255)"), s.addColorStop(.5, "rgb(0,   255, 255)"), s.addColorStop(.67, "rgb(0,   255,   0)"), s.addColorStop(.83, "rgb(255, 255,   0)"), s.addColorStop(1, "rgb(255,   0,   0)"), t.fillStyle = s, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }

        var n = t("famous-color/Color"),
            r = t("./CanvasPicker");
        s.prototype = Object.create(r.prototype), s.prototype.drawPickerColor = function (t) {
            this.pickerColor !== t.value.hex && (this.picker.colorSurface(t.value.hex), this.pickerColor = t.value.hex)
        }, s.prototype.drawGradient = function () {
            var t = this.gradient.getContext("2d");
            t.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), o.call(this, t, [0, .5], [1, .5])
        }, e.exports = s
    }
); 