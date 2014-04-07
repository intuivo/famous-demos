define(
	"famous-sync/ScaleSync", 
	[
		"require", 
		"exports", 
		"module", 
		"./TwoFingerSync"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            r.call(this, t, i), this._startDist = void 0, this._prevScale = void 0, this.input.on("pipe", n.bind(this))
        }

        function o(t, i) {
            var e = i[0] - t[0],
                s = i[1] - t[1];
            return Math.sqrt(e * e + s * s)
        }

        function n() {
            this.touchAId = void 0, this.touchBId = void 0
        }

        var r = t("./TwoFingerSync");
        s.prototype = Object.create(r.prototype), s.prototype._startUpdate = function () {
            this._prevScale = 1, this._startDist = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                count: event.touches.length,
                touches: [this.touchAId, this.touchBId],
                distance: this._startDist
            })
        }, s.prototype._moveUpdate = function (t) {
            var i = o(this.posA, this.posB),
                e = i / this._startDist,
                s = e - this._prevScale,
                n = s / t,
                r = this.targetGet(),
                a = this.options.scale;
            this.output.emit("update", {
                p: r + a * s,
                v: a * n,
                touches: [this.touchAId, this.touchBId],
                distance: i
            }), this._prevScale = e, this._vel = n
        }, e.exports = s
    }
); 