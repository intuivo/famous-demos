define(
	"famous-sync/RotateSync", 
	[
		"require", 
		"exports", 
		"module", 
		"./TwoFingerSync"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            n.call(this, t, i), this._angle = void 0
        }

        function o(t, i) {
            var e = i[0] - t[0],
                s = i[1] - t[1];
            return Math.atan2(s, e)
        }

        var n = t("./TwoFingerSync");
        s.prototype = Object.create(n.prototype), s.prototype._startUpdate = function () {
            this._angle = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                count: event.touches.length,
                touches: [this.touchAId, this.touchBId],
                angle: this._angle
            })
        }, s.prototype._moveUpdate = function (t) {
            var i = o(this.posA, this.posB),
                e = i - this._angle,
                s = e / t,
                n = this.targetGet(),
                r = this.options.scale;
            this.output.emit("update", {
                p: n + r * e,
                v: r * s,
                touches: [this.touchAId, this.touchBId],
                angle: i
            }), this._angle = i, this._vel = s
        }, e.exports = s
    }
); 