define(
	"famous-views/GridLayout", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Entity", 
		"famous/RenderNode", 
		"famous/Matrix", 
		"famous/ViewSequence"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = {
                size: [1, 1]
            }, t && this.setOptions(t), this.id = o.register(this), this._targetPositionsCache = [], this._targetSizesCache = [], this._contextSizeCache = [0, 0], this._gridSizeCache = [0, 0]
        }

        var o = t("famous/Entity");
        t("famous/RenderNode");
        var n = t("famous/Matrix"),
            r = t("famous/ViewSequence");
        s.prototype.render = function () {
            return this.id
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.size && (this.options.size = t.size)
        }, s.prototype.sequenceFrom = function (t) {
            t instanceof Array && (t = new r(t)), this.sequence = t
        }, s.prototype.commit = function (t, i, e, s, o) {
            var r = this.options.size[1],
                a = this.options.size[0];
            if (o[0] != this._contextSizeCache[0] || o[1] !== this._contextSizeCache[1] || r !== this._gridSizeCache[0] || a !== this._gridSizeCache[1])
                for (var h = o[1] / r, u = o[0] / a, p = 0; r > p; p++)
                    for (var c = Math.round(h * p), l = 0; a > l; l++) {
                        var f = Math.round(u * l),
                            d = p * a + l;
                        this._targetPositionsCache[d] = n.translate(f, c), this._targetSizesCache[d] = [Math.round(u * (l + 1)) - f, Math.round(h * (p + 1)) - c]
                    }
            for (var m = this.sequence, y = [], d = 0; m && d <= this._targetPositionsCache.length;) {
                var g = m.get();
                g && (y[d] = {
                    transform: this._targetPositionsCache[d],
                    size: this._targetSizesCache[d],
                    target: g.render()
                }), m = m.getNext(), d++
            }
            o && (i = n.move(i, [-o[0] * s[0], -o[1] * s[1], 0]));
            var v = {
                transform: i,
                opacity: e,
                origin: s,
                size: o,
                target: y
            };
            return v
        }, e.exports = s
    }
); 