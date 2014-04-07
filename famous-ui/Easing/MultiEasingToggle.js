define(
    "famous-ui/Easing/MultiEasingToggle", 
    [
        "require", 
        "exports", 
        "module", 
        "./EasingBool", 
        "famous-animation/Easing", 
        "famous/View", 
        "famous/Modifier", 
        "famous/Matrix"
    ], 
    function (t, i, e) 
    {
        function s() {
            h.apply(this, arguments), this.value = this.options.easingFns[this.options.defaultSelected], this.height = 0, this.bools = [], this.initialized = !1
        }

        function o() {
            for (var t = this.options.easingFns.length, i = [], e = 0, s = -1, o = 0; t > o; o++) s = o % this.options.columns, 0 === s && 0 !== o && e++, i.push(p.translate(s * this.options.easingBoolSize[0], e * this.options.easingBoolSize[1], 0)), o == t - 1 && (this.options.size[1] = (e + 1) * this.options.easingBoolSize[1]);
            return i
        }

        function n(t, i) {
            for (var e = !i, s = 0; s < this.bools.length; s++) s == t ? this.bools[s].silentSet(i) : this.bools[s].silentSet(e);
            this.value = this.options.easingFns[t], this.eventOutput.emit("change", {
                value: this.value
            })
        }

        var r = t("./EasingBool"),
            a = t("famous-animation/Easing"),
            h = t("famous/View"),
            u = t("famous/Modifier"),
            p = t("famous/Matrix");
        s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            easingFns: [a.inOutBackNorm, a.outBounceNorm, a.inOutBackNorm, a.outBounceNorm],
            columns: 3,
            size: void 0,
            panelSize: 216,
            easingAspect: [1.25, 1],
            defaultSelected: 0,
            easingBoolSize: [void 0, void 0],
            selectedProperties: void 0,
            normalProperties: void 0
        }, s.prototype.init = function () {
            for (var t = o.call(this), i = 0; i < this.options.easingFns.length; i++) {
                value = i == this.options.defaultSelected ? !0 : !1;
                var e = {
                    value: value
                };
                this.options.selectedProperties && (e.selectedProperties = this.options.selectedProperties), this.options.normalProperties && (e.normalProperties = this.options.normalProperties);
                var s = new r({
                    fn: this.options.easingFns[i],
                    size: this.options.easingBoolSize
                }, e);
                s.on("boolChange", n.bind(this, i)), s.pipe(this.eventOutput), this.node.add(new u(t[i])).link(s), this.bools.push(s)
            }
            this.initialized = !0
        }, s.prototype.set = function (t) {
            var i = this.options.easingFns.indexOf(t);
            n.call(this, i, !0)
        }, s.prototype.get = function () {
            return this.value
        }, s.prototype.setSize = function (t) {
            this.options.easingBoolSize[0] = Math.floor(t[0] / this.options.columns), this.options.easingBoolSize[1] = Math.floor(this.options.easingBoolSize[0] / this.options.easingAspect[0]), this.options.size = [], this.options.size[0] = t[0]
        }, s.prototype.getSize = function () {
            return this.initialized ? this.options.size : void 0
        }, e.exports = s
    }
);