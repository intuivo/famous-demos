define(
	"famous-views/SequentialLayout", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Matrix", 
		"famous/Transitionable", 
		"famous/Modifier", 
		"famous/RenderNode", 
		"famous/ViewSequence", 
		"famous/Utility"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.items = void 0, this._size = void 0, this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t)
        }

        var o = t("famous/Matrix");
        t("famous/Transitionable"), t("famous/Modifier"), t("famous/RenderNode");
        var n = t("famous/ViewSequence"),
            r = t("famous/Utility");
        s.DEFAULT_OPTIONS = {
            direction: r.Direction.X,
            defaultItemSize: [50, 50],
            itemSpacing: 0
        }, s.prototype.getSize = function () {
            return this._size || this.render(), this._size
        }, s.prototype.sequenceFrom = function (t) {
            t instanceof Array && (t = new n(t)), this.items = t
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.defaultItemSize && (this.options.defaultItemSize = t.defaultItemSize), void 0 !== t.itemSpacing && (this.options.itemSpacing = t.itemSpacing), void 0 !== t.transition && (this.options.transition = t.transition)
        }, s.prototype.render = function () {
            for (var t = 0, i = 0, e = this.options.direction == r.Direction.X ? 0 : 1, s = this.options.direction == r.Direction.X ? 1 : 0, n = this.items, a = []; n;) {
                var h = n.get();
                t && (t += this.options.itemSpacing);
                var u;
                h && h.getSize && (u = h.getSize()), u || (u = this.options.defaultItemSize), i && u[s] !== !0 && (i = Math.max(i, u[s]));
                var p = this.options.direction == r.Direction.X ? o.translate(t, 0) : o.translate(0, t);
                a.push({
                    transform: p,
                    target: h.render()
                }), u[e] && u[e] !== !0 && (t += u[e]), n = n.getNext()
            }
            return i || (i = void 0), this._size || (this._size = [0, 0]), this._size[e] = t, this._size[s] = i, {
                group: !0,
                target: a
            }
        }, e.exports = s
    }
); 