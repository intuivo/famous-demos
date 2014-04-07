define(
	"famous-animation/Idle", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            this.idleFn = t, this.timeout = i, this.enabled = i > 0, this.reset()
        }

        s.prototype.timeoutIn = function (t) {
            this.lastTouchTime = (new Date).getTime() - this.timeout + t
        }, s.prototype.enable = function () {
            this.enabled = !0
        }, s.prototype.disable = function () {
            this.enabled = !1
        }, s.prototype.setIdleFunction = function (t) {
            this.idleFn = t
        }, s.prototype.update = function () {
            if (!this.idling && this.enabled && this.idleFn) {
                var t = (new Date).getTime();
                t - this.lastTouchTime > this.timeout && (this.idling = !0, this.idleFn.call(this))
            }
        }, s.prototype.isIdling = function () {
            return this.idling
        }, s.prototype.reset = function () {
            this.lastTouchTime = (new Date).getTime(), this.idling = !1
        }, s.prototype.emit = function () {
            this.reset()
        }, e.exports = s
    }
); 