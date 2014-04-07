define(
    "famous-ui/ColorPicker/ColorButton", 
    [
        "require", 
        "exports", 
        "module", 
        "famous/EventHandler", 
        "famous/CanvasSurface"
    ], 
    function (t, i, e) 
    {
        function s(t, i) {
            this.size = t, this.canvasSize = [2 * this.size[0], 2 * this.size[1]], o.call(this, {
                size: this.size,
                canvasSize: this.canvasSize
            }), this.color = i, this.colorSurface(this.color.getHex())
        }

        t("famous/EventHandler");
        var o = t("famous/CanvasSurface");
        s.prototype = Object.create(o.prototype), s.prototype.colorSurface = function (t) {
            var i = this.getContext("2d");
            i.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), i.fillStyle = t, i.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }, e.exports = s
    }
); 