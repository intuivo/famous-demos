define(
	"famous-generative/TouchVisualizer", 
	[
		"require", 
		"exports", 
		"module", 
		"./Touch"
	], 
	function (t, i, e) 
	{
        function s() {
            this.touches = [], this.cachedTouches = [], this.unActiveTouches = [], this.activeIdentifies = [];
            for (var t = 0; 20 > t; t++) this.cachedTouches[t] = new o(this), this.unActiveTouches[t] = this.cachedTouches[t]
        }

        var o = t("./Touch");
        s.prototype.update = function () {
            for (var t = 0; t < this.activeIdentifies.length; t++) {
                var i = this.activeIdentifies[t];
                void 0 != this.touches[i] && this.touches[i].update()
            }
        }, s.prototype.render = function () {
            for (var t = [], i = 0; i < this.activeIdentifies.length; i++) {
                var e = this.activeIdentifies[i];
                void 0 != this.touches[e] && this.touches[e].isAlive() ? (t.push(this.touches[e].render()), t.push(this.touches[e].renderBack())) : this.touchFreed(this.touches[e])
            }
            return t
        }, s.prototype.emit = function (t, i) {
            "touchstart" == t ? this.touchstart(i) : "touchmove" == t ? this.touchmove(i) : "touchend" == t ? this.touchend(i) : "prerender" == t && this.update(i)
        }, s.prototype.getCachedTouch = function () {
            return this.unActiveTouches.pop()
        }, s.prototype.touchstart = function (t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i].identifier;
                void 0 == this.touches[e] && this.cachedTouches.length > 0 && (-1 == this.activeIdentifies.indexOf(e) && this.activeIdentifies.push(e), this.touches[e] = this.getCachedTouch(), this.touches[e].setIdentifier(e)), this.touches[e].touchstart(t.changedTouches[i].clientX, t.changedTouches[i].clientY)
            }
        }, s.prototype.touchmove = function (t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i].identifier;
                void 0 != this.touches[e] && this.touches[e].touchmove(t.changedTouches[i].clientX, t.changedTouches[i].clientY)
            }
        }, s.prototype.touchend = function (t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i].identifier;
                void 0 != this.touches[e] && this.touches[e].touchend()
            }
        }, s.prototype.touchFreed = function (t) {
            if (void 0 != t) {
                var i = t.identifier,
                    e = this.activeIdentifies.indexOf(i);
                this.activeIdentifies.splice(e, 1), this.unActiveTouches.push(t), this.touches[i] = void 0
            }
        }, e.exports = s
    }
);