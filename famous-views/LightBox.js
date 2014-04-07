define(
	"famous-views/LightBox", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Matrix", 
		"famous/Modifier", 
		"famous/RenderNode", 
		"famous/Utility"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = {
                inTransform: o.scale(.001, .001, .001),
                inOpacity: 0,
                inOrigin: [.5, .5],
                outTransform: o.scale(.001, .001, .001),
                outOpacity: 0,
                outOrigin: [.5, .5],
                showTransform: o.identity,
                showOpacity: 1,
                showOrigin: [.5, .5],
                inTransition: !0,
                outTransition: !0,
                overlap: !1
            }, t && this.setOptions(t), this._showing = !1, this.nodes = [], this.transforms = []
        }

        var o = t("famous/Matrix"),
            n = t("famous/Modifier"),
            r = t("famous/RenderNode"),
            a = t("famous/Utility");
        s.prototype.getOptions = function () {
            return this.options
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.inTransform && (this.options.inTransform = t.inTransform), void 0 !== t.inOpacity && (this.options.inOpacity = t.inOpacity), void 0 !== t.inOrigin && (this.options.inOrigin = t.inOrigin), void 0 !== t.outTransform && (this.options.outTransform = t.outTransform), void 0 !== t.outOpacity && (this.options.outOpacity = t.outOpacity), void 0 !== t.outOrigin && (this.options.outOrigin = t.outOrigin), void 0 !== t.showTransform && (this.options.showTransform = t.showTransform), void 0 !== t.showOpacity && (this.options.showOpacity = t.showOpacity), void 0 !== t.showOrigin && (this.options.showOrigin = t.showOrigin), void 0 !== t.inTransition && (this.options.inTransition = t.inTransition), void 0 !== t.outTransition && (this.options.outTransition = t.outTransition), void 0 !== t.overlap && (this.options.overlap = t.overlap)
        }, s.prototype.show = function (t, i, e) {
            if (!t) return this.hide(e);
            if (i instanceof Function && (e = i, i = void 0), this._showing) {
                if (!this.options.overlap) return this.hide(this.show.bind(this, t, e)), void 0;
                this.hide()
            }
            this._showing = !0;
            var s = new n({
                transform: this.options.inTransform,
                opacity: this.options.inOpacity,
                origin: this.options.inOrigin
            }),
                o = new r;
            o.link(s).link(t), this.nodes.push(o), this.transforms.push(s);
            var h = e ? a.after(3, e) : void 0;
            i || (i = this.options.inTransition), s.setTransform(this.options.showTransform, i, h), s.setOpacity(this.options.showOpacity, i, h), s.setOrigin(this.options.showOrigin, i, h)
        }, s.prototype.hide = function (t, i) {
            if (this._showing) {
                this._showing = !1, t instanceof Function && (i = t, t = void 0);
                var e = this.nodes[this.nodes.length - 1],
                    s = this.transforms[this.transforms.length - 1],
                    o = a.after(3, function () {
                        this.nodes.splice(this.nodes.indexOf(e), 1), this.transforms.splice(this.transforms.indexOf(s), 1), i && i.call(this)
                    }.bind(this));
                t || (t = this.options.outTransition), s.setTransform(this.options.outTransform, t, o), s.setOpacity(this.options.outOpacity, t, o), s.setOrigin(this.options.outOrigin, t, o)
            }
        }, s.prototype.render = function () {
            for (var t = [], i = 0; i < this.nodes.length; i++) t.push(this.nodes[i].render());
            return t
        }, e.exports = s
    }
); 