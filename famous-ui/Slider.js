define(
	"famous-ui/Slider", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/Matrix", 
		"famous/EventHandler", 
		"famous-utils/Utils", 
		"famous/Engine", 
		"famous/View"
	], 
	function (t, i, e) 
	{
        function s() {
            S.apply(this, arguments), this.eventInput.pipe(this.eventOutput), void 0 === this.options.defaultValue && (this.options.defaultValue = .5 * (this.options.range[0] + this.options.range[1])), this.pos = [], this.value = this.options.defaultValue, this._dirty = !0, this.currTouchId = null
        }

        function o(t) {
            t.preventDefault(), t.stopPropagation()
        }

        function n(t) {
            if (o(t), !this.currTouchId) {
                var i = t.changedTouches[0];
                this.currTouchId = i.identifier, this._handleStart(i)
            }
        }

        function r(t) {
            o(t), v.on("mousemove", this._mouseMove), v.on("mouseup", this._mouseUp), v.on("mouseout", this._mouseLeave), this._handleStart(t)
        }

        function a(t) {
            this._dirty && (this.pos = g.getSurfacePosition(this.back), this._dirty = !1), this.set(g.map((t.pageX - this.pos[0]) / this.options.size[0], 0, 1, this.options.range[0], this.options.range[1], !0))
        }

        function h(t) {
            o(t);
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i];
                if (e.identifier == this.currTouchId) {
                    this._handleMove(e);
                    break
                }
            }
        }

        function u(t) {
            o(t), this._handleMove(t)
        }

        function p(t) {
            this.set(g.map((t.pageX - this.pos[0]) / this.options.size[0], 0, 1, this.options.range[0], this.options.range[1], !0))
        }

        function c(t) {
            o(t);
            for (var i = 0; i < t.changedTouches.length; i++)
                if (t.changedTouches[i].identifier == this.currTouchId) {
                    this.currTouchId = void 0;
                    break
                }
        }

        function l(t) {
            o(t), this._endMouse()
        }

        function f(t) {
            var i = t.relatedTarget || t.toElement;
            i && "HTML" != i.nodeName || this._endMouse()
        }

        function d() {
            return this.options.name + " <span class='slider-value' style='float:right'>" + this.value.toFixed(this.options.precision) + "</span>"
        }

        var m = t("famous/Surface"),
            y = t("famous/Matrix");
        t("famous/EventHandler");
        var g = t("famous-utils/Utils"),
            v = t("famous/Engine"),
            S = t("famous/View");
        s.prototype = Object.create(S.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            size: void 0,
            range: [0, 10],
            defaultValue: void 0,
            precision: 2,
            name: "Slider",
            backOpacity: 1
        }, s.prototype.init = function () {
            this.fill = new m({
                size: this.options.size,
                classes: ["slider-fill", "no-user-select"]
            }), this.back = new m({
                size: this.options.size,
                classes: ["slider-back", "no-user-select"]
            }), this.backMatrix = y.translate(0, 0, 1), this.label = new m({
                size: this.options.size,
                classes: ["slider-label", "no-user-select"],
                properties: {
                    fontSize: .75 * this.options.size[1] + "px",
                    lineHeight: this.options.size[1] + "px"
                },
                content: d.call(this)
            }), this.labelMatrix = y.translate(0, this.options.size[1], 1.2), this.back.pipe(this), this.label.pipe(this), this.fill.pipe(this), this.on("touchstart", n.bind(this)), this.on("touchmove", h.bind(this)), this.on("touchend", c.bind(this)), this.on("touchcancel", c.bind(this)), this.on("mousedown", r.bind(this)), this.on("mousedown", r.bind(this)), this._mouseMove = u.bind(this), this._mouseUp = l.bind(this), this._mouseLeave = f.bind(this), this._handleStart = a.bind(this), this._handleMove = p.bind(this), this._add(this.fill), this._add(this.back), this._add(this.label)
        }, s.prototype._endMouse = function () {
            v.unbind("mousemove", this._mouseMove), v.unbind("mouseup", this._mouseUp), v.unbind("mouseout", this._mouseLeave)
        }, s.prototype.get = function () {
            return this.value
        }, s.prototype.setSize = function (t) {
            this.options.size = t
        }, s.prototype.getSize = function () {
            return this.options.size ? [this.options.size[0], 2 * this.options.size[1]] : void 0
        }, s.prototype.set = function (t) {
            return this.value = Math.min(Math.max(this.options.range[0], t), this.options.range[1]), this.setLabelContent(), this.emit("change", {
                value: this.get(),
                range: this.range
            }), this
        }, s.prototype.setLabelContent = function () {
            this.label.setContent(d.call(this))
        }, s.prototype.render = function () {
            var t = (this.get() - this.options.range[0]) / (this.options.range[1] - this.options.range[0]);
            return [{
                transform: this.backMatrix,
                opacity: this.options.backOpacity,
                target: this.back.render()
            }, {
                transform: y.move(y.scale(t, 1, 1), [0, 0, 2]),
                target: this.fill.render()
            }, {
                transform: this.labelMatrix,
                target: this.label.render()
            }]
        }, e.exports = s
    }
); 