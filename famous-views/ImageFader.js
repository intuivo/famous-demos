define(
	"famous-views/ImageFader", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/RenderNode", 
		"./Fader", 
		"famous/Matrix"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.nodes = [], this.faders = [], this.mode = -1, t && this.setOptions(t)
        }

        var o = t("famous/RenderNode"),
            n = t("./Fader"),
            r = t("famous/Matrix");
        s.DEFAULT_OPTIONS = {
            crossfade: !1
        }, s.prototype.getMode = function () {
            return this.mode
        }, s.prototype.setMode = function (t, i, e) {
            if (this.mode = t, this.options.crossfade) {
                for (var s = 0; s < this.faders.length; s++) this.faders[s].set(0, i);
                this.faders[t].set(1, i, e)
            } else this.faders[t].set(1, i, function () {
                if (this.mode == t) {
                    for (var i = 0; i < this.faders.length; i++) i != t && this.faders[i].set(0);
                    e && e()
                }
            }.bind(this))
        }, s.prototype.forMode = function (t) {
            return this.nodes[t] || (this.nodes[t] = new o, this.faders[t] = new n(this.options)), this.nodes[t]
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.crossfade && (this.options.crossfade = t.crossfade)
        }, s.behindMatrix = r.translate(0, 0, -.01), s.prototype.render = function () {
            for (var t = [], i = 0; i < this.nodes.length; i++) {
                var e = this.faders[i].render(this.nodes[i].render());
                i != this.mode && (e = {
                    transform: s.behindMatrix,
                    target: e
                }), t[i] = e
            }
            return t
        }, e.exports = s
    }
); 