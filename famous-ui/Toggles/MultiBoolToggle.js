define(
	"famous-ui/Toggles/MultiBoolToggle", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/RenderNode", 
		"famous/Matrix", 
		"famous/Modifier", 
		"famous/Transitionable", 
		"famous/EventHandler", 
		"famous/View", 
		"famous-animation/Easing", 
		"./BoolToggle"
	], 
	function (t, i, e) 
	{
        function s() {
            c.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value, this.label, this.labelTransform, this.usingLabel = !1, this.bools = [], this.boolValues = [], this.transforms = []
        }

        function o() {
            void 0 !== this.options.name && (this.label = new a({
                size: this.options.size,
                content: '<div class="slider-label" style="margin-top:' + .1 * this.options.size[1] + 'px">' + this.options.name + "</div>"
            }), this.label.setProperties({
                "font-size": .75 * this.options.size[1] + "px"
            }), this.labelTransform = new u, this.transforms.push(this.labelTransform), this.usingLabel = !0, this.node.add(this.labelTransform).link(this.label), r.call(this))
        }

        function n() {
            for (var t = 0; t < this.options.values.length; t++) {
                var i = t == this.options.defaultSelected ? !0 : !1;
                i && (this.value = this.options.values[t]), this._addToggle(i, this.options.values[t], !0)
            }
        }

        function r() {
            this.sizeState.halt();
            var t = this.transforms.length,
                i = t * this.options.size[1] + (t - 1) * this.options.padding;
            this.sizeState.set([this.options.size[0], i], this.options.sizeTransition)
        }

        var a = t("famous/Surface");
        t("famous/RenderNode");
        var h = t("famous/Matrix"),
            u = t("famous/Modifier"),
            p = t("famous/Transitionable");
        t("famous/EventHandler");
        var c = t("famous/View"),
            l = t("famous-animation/Easing"),
            f = t("./BoolToggle");
        s.prototype = Object.create(c.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            size: void 0,
            values: [],
            defaultSelected: 0,
            name: void 0,
            padding: 20,
            sizeTransition: {
                curve: l.inOutBackNorm,
                duration: 400
            },
            opacityTransition: {
                curve: l.inOutBackNorm,
                duration: 400
            }
        }, s.prototype.init = function () {
            void 0 == this.options.size && (this.options.size = [void 0, void 0]), this.sizeState = new p([this.options.size[0], 0]), o.call(this), n.call(this)
        }, s.prototype.setSelectedToggle = function (t) {
            for (var i = 0; i < this.bools.length; i++) i == t ? (this.bools[i].silentSet(!0), this.boolValues[i] = !0, this.value = this.options.values[i], this.emit("change", {
                value: this.options.values[i]
            })) : (this.bools[i].silentSet(!1), this.boolValues[i] = !1)
        }, s.prototype.set = function (t) {
            var i = this.options.values.indexOf(t);
            this.setSelectedToggle(i)
        }, s.prototype.get = function () {
            return this.value
        }, s.prototype._addToggle = function (t, i, e) {
            var s = this.transforms.length,
                o = new f({
                    size: this.options.size,
                    value: t,
                    name: i
                });
            o.init(), o.pipe(this), e || this.options.values.push(i);
            var n = new u({
                transform: h.translate(0, this.options.size[1] * s + this.options.padding * s),
                opacity: 0
            });
            n.setOpacity(1, this.options.opacityTransition), this.bools.push(o), this.transforms.push(n), this.node.add(n).link(o), o.silentSet(t), this.boolValues.push(t), o.on("change", function (t) {
                1 == this.boolValues[t] ? this.bools[t].silentSet(!0) : this.setSelectedToggle(t)
            }.bind(this, this.usingLabel ? s - 1 : s)), r.call(this)
        }, s.prototype.getSize = function () {
            return this.sizeState ? this.sizeState.get() : void 0
        }, s.prototype.setSize = function (t) {
            this.options.size = t
        }, s.prototype.removeToggle = function (t) {
            var i, e;
            "number" == typeof t ? i = t : "string" == typeof t && (i = this.options.values.indexOf(t)), i >= 0 && (e = this.usingLabel ? i + 1 : i, this.transforms[e].setOpacity(0, this.options.sizeTransition, function (t, i) {
                this.branches.splice(i, 1), this.bools.splice(t, 1), this.options.values.splice(t, 1), this.transforms.splice(i, 1), r.call(this)
            }.bind(this, i, e)))
        }, e.exports = s
    }
); 