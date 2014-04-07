define(
	"famous-sync/PinchSync", 
	[
		"require", 
		"exports", 
		"module", 
		"./TwoFingerSync"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            n.call(this, t, i), this._dist = void 0
        }

        function o(t, i) {
            var e = i[0] - t[0],
                s = i[1] - t[1];
            return Math.sqrt(e * e + s * s)
        }

        var n = t("./TwoFingerSync");
        s.prototype = Object.create(n.prototype), s.prototype._startUpdate = function () {
            this._dist = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                count: event.touches.length,
                touches: [this.touchAId, this.touchBId],
                distance: this._dist
            })
        }, s.prototype._moveUpdate = function (t) {
            var i = o(this.posA, this.posB),
                e = i - this._dist,
                s = e / t,
                n = this.targetGet(),
                r = this.options.scale;
            this.output.emit("update", {
                p: n + r * e,
                v: r * s,
                touches: [this.touchAId, this.touchBId],
                distance: i
            }), this._dist = i, this._vel = s
        }, e.exports = s
    }
); 