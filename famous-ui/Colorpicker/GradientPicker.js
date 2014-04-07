define(
    "famous-ui/ColorPicker/GradientPicker", 
    [
        "require", 
        "exports", 
        "module", 
        "famous-color/Color", 
        "./CanvasPicker"
    ], 
    function (t, i, e) 
    {
        function s(t, i) {
            var e = i.getSaturation() / 100,
                s = i.getBrightness() / 100;
            i.setSaturation(100), n.call(this, t, i, {
                pickerSize: [26, 26],
                pickerProperties: {
                    borderRadius: "13px",
                    border: "1px solid white"
                },
                pickerPosX: e,
                pickerPosY: 1 - s
            }), this.drawGradient(this.color.getCSSColor())
        }

        function o(t, i, e, s, o) {
            var n = t.createLinearGradient(this.canvasSize[0] * s[0], this.canvasSize[1] * s[1], this.canvasSize[0] * o[0], this.canvasSize[1] * o[1]);
            n.addColorStop(0, i), n.addColorStop(1, e), t.fillStyle = n, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }

        t("famous-color/Color");
        var n = t("./CanvasPicker");
        s.prototype = Object.create(n.prototype), s.prototype.drawGradient = function (t) {
            var i = this.gradient.getContext("2d");
            i.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), o.call(this, i, "rgba(255, 255, 255, 1)", t, [0, .5], [1, .5]), o.call(this, i, "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)", [.5, 1], [.5, 0]), this.updateColor()
        }, e.exports = s
    }
); 