 define(
 	"famous-sync/TwoFingerSync", 
 	[
	 	"require", 
	 	"exports", 
	 	"module", 
	 	"famous/EventHandler"
 	], 
 	function (t, i, e) 
 	{
        function s(t, i) {
            this.targetGet = t, this.options = {
                scale: 1
            }, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new o, this.output = new o, o.setInputHandler(this, this.input), o.setOutputHandler(this, this.output), this.touchAId = void 0, this.posA = void 0, this.timestampA = void 0, this.touchBId = void 0, this.posB = void 0, this.timestampB = void 0, this.input.on("touchstart", this.handleStart.bind(this)), this.input.on("touchmove", this.handleMove.bind(this)), this.input.on("touchend", this.handleEnd.bind(this)), this.input.on("touchcancel", this.handleEnd.bind(this))
        }

        var o = t("famous/EventHandler");
        s.prototype.getOptions = function () {
            return this.options
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.scale && (this.options.scale = t.scale)
        }, s.prototype.handleStart = function (t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i];
                this.touchAId ? this.touchBId || (this.touchBId = e.identifier, this.posB = [e.pageX, e.pageY], this.timestampB = Date.now(), this._startUpdate()) : (this.touchAId = e.identifier, this.posA = [e.pageX, e.pageY], this.timestampA = Date.now())
            }
        }, s.prototype.handleMove = function (t) {
            if (this.touchAId && this.touchBId) {
                for (var i, e = this.timestampA, s = this.timestampB, o = 0; o < t.changedTouches.length; o++) {
                    var n = t.changedTouches[o];
                    n.identifier == this.touchAId ? (this.posA = [n.pageX, n.pageY], this.timestampA = Date.now(), i = this.timestampA - e) : n.identifier == this.touchBId && (this.posB = [n.pageX, n.pageY], this.timestampB = Date.now(), i = this.timestampB - s)
                }
                i && this._moveUpdate(i)
            }
        }, s.prototype.handleEnd = function (t) {
            for (var i = this.targetGet(), e = this.options.scale, s = 0; s < t.changedTouches.length; s++) {
                var o = t.changedTouches[s];
                (o.identifier == this.touchAId || o.identifier == this.touchBId) && (this.touchAId && this.touchBId && this.output.emit("end", {
                    p: i,
                    v: e * this._vel,
                    touches: [this.touchAId, this.touchBId],
                    angle: this._angle
                }), this.touchAId = void 0, this.touchBId = void 0)
            }
        }, e.exports = s
    }
); 