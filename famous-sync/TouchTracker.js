define(
	"famous-sync/TouchTracker", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/EventHandler"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.selective = t, this.touchHistory = {}, this.eventHandler = new u(!0)
        }

        function o(t, i, e, s) {
            var o = {};
            for (var n in t) o[n] = t[n];
            return {
                touch: o,
                origin: i,
                timestamp: +Date.now(),
                count: s,
                history: e
            }
        }

        function n(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i],
                    s = o(e, t.origin, void 0, t.touches.length);
                this.eventHandler.emit("trackstart", s), this.selective || this.touchHistory[e.identifier] || this.track(s)
            }
        }

        function r(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i],
                    s = this.touchHistory[e.identifier];
                if (s) {
                    var n = o(e, t.origin, s, t.touches.length);
                    this.touchHistory[e.identifier].push(n), this.eventHandler.emit("trackmove", n)
                }
            }
        }

        function a(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i],
                    s = this.touchHistory[e.identifier];
                if (s) {
                    var n = o(e, t.origin, s, t.touches.length);
                    this.eventHandler.emit("trackend", n), delete this.touchHistory[e.identifier]
                }
            }
        }

        function h() {
            for (var t in this.touchHistory) {
                var i = this.touchHistory[t];
                this.eventHandler.emit("trackend", {
                    touch: i[i.length - 1].touch,
                    timestamp: +Date.now(),
                    count: 0,
                    history: i
                }), delete this.touchHistory[t]
            }
        }

        var u = t("famous/EventHandler");
        s.prototype.track = function (t) {
            this.touchHistory[t.touch.identifier] = [t]
        }, s.prototype.emit = function (t, i) {
            return "touchstart" == t ? n.call(this, i) : "touchmove" == t ? r.call(this, i) : "touchend" == t ? a.call(this, i) : "touchcancel" == t ? a.call(this, i) : "unpipe" == t ? h.call(this) : void 0
        }, s.prototype.on = function (t, i) {
            return this.eventHandler.on(t, i)
        }, s.prototype.unbind = function (t, i) {
            return this.eventHandler.unbind(t, i)
        }, s.prototype.pipe = function (t) {
            return this.eventHandler.pipe(t)
        }, s.prototype.unpipe = function (t) {
            return this.eventHandler.unpipe(t)
        }, e.exports = s
    }
);