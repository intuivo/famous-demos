define(
	"famous-views/RenderArbiter", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/EventHandler", 
		"famous/RenderNode", 
		"./Fader"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.nodes = {}, this.faders = {}, this.mode = -1, this.cull = t, this.outputEvents = new o, o.setOutputHandler(this, this.outputEvents)
        }

        var o = t("famous/EventHandler"),
            n = t("famous/RenderNode"),
            r = t("./Fader");
        s.prototype.getMode = function () {
            return this.mode
        }, s.prototype.setMode = function (t, i, e) {
            for (var s in this.faders) s != t ? this.faders[s].set(0, i) : this.faders[s].set(1, i, e);
            var o = this.mode;
            this.mode = t, this.outputEvents.emit("change", {
                from: o,
                to: t
            })
        }, s.prototype.forMode = function (t) {
            return this.nodes[t] || (this.nodes[t] = new n, this.faders[t] = new r({
                cull: this.cull
            })), this.nodes[t]
        }, s.prototype.render = function () {
            var t = [];
            for (var i in this.nodes) this.faders[i].isVisible() && t.push(this.faders[i].render(this.nodes[i].render()));
            return t
        }, e.exports = s
    }
); 