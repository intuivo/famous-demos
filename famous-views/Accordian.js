define(
	"famous-views/Accordion", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Matrix", 
		"famous/Transitionable", 
		"famous/View", 
		"famous/Modifier", 
		"famous-animation/Easing"
	], 
	function (t, i, e) 
	{
        function s(t) {
            r.apply(this, arguments), this.state = new n(0), t && this.setOptions(t), this._isOpen = !1
        }

        var o = t("famous/Matrix"),
            n = t("famous/Transitionable"),
            r = t("famous/View");
        t("famous/Modifier");
        var a = t("famous-animation/Easing");
        s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            transition: {
                curve: a.inOutQuadNorm,
                duration: 500
            }
        }, s.prototype.render = function () {
            return this.state.get() && this.node.get() ? {
                transform: o.translate(0, (this.state.get() - 1) * this.node.get().getSize()[1], 100 * (this.state.get() - 1)),
                target: this.node.render()
            } : void 0
        }, s.prototype.getSize = function () {
            var t = this.node.get().getSize();
            return [t[0], this.state.get() * t[1]]
        }, s.prototype.link = function (t) {
            return this.node.link(t)
        }, s.prototype.setState = function (t, i, e) {
            this.state.halt(), this.state.set(t, i, e)
        }, s.prototype.open = function (t) {
            this._isOpen = !0, this.setState(1, this.options.transition, t)
        }, s.prototype.close = function (t) {
            this._isOpen = !1, this.setState(0, this.options.transition, t)
        }, s.prototype.toggle = function (t) {
            this._isOpen ? this.close(t) : this.open(t)
        }, e.exports = s
    }
); 