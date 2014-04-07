define(
	"famous-views/Flip", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Matrix", 
		"famous/Transitionable", 
		"famous/RenderNode"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = {
                transition: !0,
                cull: !0
            }, t && this.setOptions(t), this._side = 0, this.state = new n(0), this.frontNode = new r, this.backNode = new r
        }

        var o = t("famous/Matrix"),
            n = t("famous/Transitionable"),
            r = t("famous/RenderNode");
        s.prototype.setDefaultTransition = function (t) {
            this.transition = t
        }, s.prototype.flip = function (t, i) {
            void 0 === t && (t = 1 == this._side ? 0 : 1), this._side = t, this.state.set(t, this.options.transition, i)
        }, s.prototype.getOptions = function () {
            return this.options
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.transition && (this.options.transition = t.transition), void 0 !== t.cull && (this.options.cull = t.cull)
        }, s.prototype.linkFront = function (t) {
            return this.frontNode.link(t)
        }, s.prototype.linkBack = function (t) {
            return this.backNode.link(t)
        }, s.prototype.render = function (t) {
            var i = this.state.get();
            return void 0 !== t ? {
                transform: o.rotateY(Math.PI * i),
                target: t
            } : this.options.cull && !this.state.isActive() ? i ? this.backNode.render() : this.frontNode.render() : [{
                transform: o.rotateY(Math.PI * i),
                target: this.frontNode.render()
            }, {
                transform: o.rotateY(Math.PI * (i + 1)),
                target: this.backNode.render()
            }]
        }, e.exports = s
    }
); 