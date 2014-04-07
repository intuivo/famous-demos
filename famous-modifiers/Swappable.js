define(
	"famous-modifiers/Swappable", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/RenderNode", 
		"famous/Matrix", 
		"famous/Modifier"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = {
                initTransform: h.identity,
                initOpacity: 0,
                finalTransform: h.identity,
                finalOpacity: 0,
                inTransition: {
                    duration: 500,
                    curve: "easeInOut"
                },
                outTransition: {
                    duration: 500,
                    curve: "easeInOut"
                },
                async: !1
            }, this.nodes = {}, this.transforms = [], this.currIndex = -1, this.prevIndex = -1, this.setOptions(t)
        }

        function o(t, i, e, s, o, n, r) {
            if (t in this.nodes) {
                var a = this.nodes[t].get();
                a.isMoving() || (i && a.setTransform(i), void 0 !== e && a.setOpacity(e)), a.setTransform(s, n), a.setOpacity(o, n, r)
            }
        }

        function n(t, i) {
            o.call(this, t, this.options.initTransform, this.options.initOpacity, h.identity, 1, this.options.inTransition, i)
        }

        function r(t, i) {
            o.call(this, t, void 0, void 0, this.options.finalTransform, this.options.finalOpacity, this.options.outTransition, i)
        }

        var a = t("famous/RenderNode"),
            h = t("famous/Matrix"),
            u = t("famous/Modifier");
        s.prototype.item = function (t) {
            var i = new a(new u(this.options.initTransform, this.options.initOpacity), !0);
            return this.nodes[t] = i, i
        }, s.prototype.select = function (t, i) {
            t != this.currIndex && (this.options.async ? r.call(this, this.currIndex, function () {
                n.call(this, this.currIndex, i)
            }.bind(this)) : (r.call(this, this.currIndex), n.call(this, t, i)), this.currIndex = t)
        }, s.prototype.setOptions = function (t) {
            for (var i in t) this.options[i] = t[i]
        }, s.prototype.getOptions = function () {
            return this.options
        }, s.prototype.render = function () {
            var t = [];
            for (var i in this.nodes) t.push(this.nodes[i].render());
            return t
        }, e.exports = s
    }
); 