define(
	"famous/EventArbiter", 
	[
		"require", 
		"exports", 
		"module", 
		"./EventHandler"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.dispatchers = {}, this.currMode = void 0, this.setMode(t)
        }

        var o = t("./EventHandler");
        s.prototype.setMode = function (t) {
            if (t != this.currMode) {
                var i = this.currMode;
                this.dispatchers[this.currMode] && this.dispatchers[this.currMode].emit("unpipe"), this.currMode = t, this.dispatchers[t] && this.dispatchers[t].emit("pipe"), this.emit("change", {
                    from: i,
                    to: t
                })
            }
        }, s.prototype.forMode = function (t) {
            return this.dispatchers[t] || (this.dispatchers[t] = new o), this.dispatchers[t]
        }, s.prototype.emit = function (t, i) {
            if (void 0 == this.currMode) return !1;
            i || (i = {});
            var e = this.dispatchers[this.currMode];
            return e ? e.emit(t, i) : void 0
        }, e.exports = s
    }
); 