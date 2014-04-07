define(
	"famous-widgets/Slider", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/CanvasSurface", 
		"famous-sync/GenericSync", 
		"famous/Matrix", 
		"famous/EventHandler"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = {
                size: [200, 60],
                indicatorSize: [200, 30],
                labelSize: [200, 30],
                range: [0, 1],
                precision: 2,
                defaultValue: 0,
                label: "",
                fillColor: "rgba(170, 170, 170, 1)"
            }, t && this.setOptions(t), this.value = this.options.defaultValue, this.indicator = new r({
                size: this.options.indicatorSize
            }), this.indicator.addClass("slider-back"), this.label = new n({
                size: this.options.labelSize,
                content: this.options.label,
                classes: ["slider-label"]
            }), this.label.setProperties({
                "pointer-events": "none"
            }), this.eventOutput = new u, this.eventInput = new u, u.setInputHandler(this, this.eventInput), u.setOutputHandler(this, this.eventOutput), this.sync = new a(this.get.bind(this), {
                scale: (this.options.range[1] - this.options.range[0]) / this.options.indicatorSize[0],
                direction: a.DIRECTION_X
            }), this.eventInput.on("update", function (t) {
                this.set(t.p)
            }.bind(this)), this.indicator.pipe(this.sync).pipe(this.eventInput), this._drawPos = 0, o.call(this)
        }

        function o() {
            this.label.setContent(this.options.label + '<span style="float: right">' + this.get().toFixed(this.options.precision) + "</span>")
        }

        var n = t("famous/Surface"),
            r = t("famous/CanvasSurface"),
            a = t("famous-sync/GenericSync"),
            h = t("famous/Matrix"),
            u = t("famous/EventHandler");
        s.prototype.getOptions = function () {
            return this.options
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.size && (this.options.size = t.size), void 0 !== t.indicatorSize && (this.options.indicatorSize = t.indicatorSize), void 0 !== t.labelSize && (this.options.labelSize = t.labelSize), void 0 !== t.range && (this.options.range = t.range), void 0 !== t.precision && (this.options.precision = t.precision), void 0 !== t.defaultValue && (this.options.defaultValue = t.defaultValue), void 0 !== t.label && (this.options.label = t.label), void 0 !== t.fillColor && (this.options.fillColor = t.fillColor)
        }, s.prototype.get = function () {
            return this.value
        }, s.prototype.set = function (t) {
            this.value = Math.min(Math.max(this.options.range[0], t), this.options.range[1]), o.call(this), this.eventOutput.emit("change", {
                value: this.get(),
                range: this.options.range
            })
        }, s.prototype.getSize = function () {
            return this.options.size
        }, s.prototype.render = function () {
            var t = this.options.range,
                i = Math.floor((this.get() - t[0]) / (t[1] - t[0]) * this.options.indicatorSize[0]);
            if (i < this._drawPos) this.indicator.getContext("2d").clearRect(i, 0, this._drawPos - i + 1, this.options.indicatorSize[1]);
            else if (i > this._drawPos) {
                var e = this.indicator.getContext("2d");
                e.fillStyle = this.options.fillColor, e.fillRect(this._drawPos - 1, 0, i - this._drawPos + 1, this.options.indicatorSize[1])
            }
            return this._drawPos = i, {
                size: this.options.size,
                target: [{
                    origin: [.5, 0],
                    target: this.indicator.render()
                }, {
                    transform: h.translate(0, 0, 1),
                    origin: [.5, 1],
                    target: this.label.render()
                }]
            }
        }, e.exports = s
    }
); 