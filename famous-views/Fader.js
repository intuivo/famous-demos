define(
	"famous-views/Fader", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Transitionable"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            this.options = {
                cull: !1,
                transition: !0,
                pulseInTransition: !0,
                pulseOutTransition: !0,
                visibilityThreshold: 0
            }, t && this.setOptions(t), i || (i = 0), this.transitionHelper = new o(i)
        }

        var o = t("famous/Transitionable");
        s.prototype.getOptions = function () {
            return this.options
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.cull && (this.options.cull = t.cull), void 0 !== t.transition && (this.options.transition = t.transition), void 0 !== t.pulseInTransition && (this.options.pulseInTransition = t.pulseInTransition), void 0 !== t.pulseOutTransition && (this.options.pulseOutTransition = t.pulseOutTransition), void 0 !== t.visibilityThreshold && (this.options.visibilityThreshold = t.visibilityThreshold)
        }, s.prototype.show = function (t) {
            this.set(1, this.options.transition, t)
        }, s.prototype.hide = function (t) {
            this.set(0, this.options.transition, t)
        }, s.prototype.pulse = function (t, i) {
            void 0 === t && (t = 1);
            var e = this.transitionHelper.get();
            this.transitionHelper.set(t, this.options.pulseInTransition), this.transitionHelper.set(e, this.options.pulseOutTransition, i)
        }, s.prototype.set = function (t, i, e) {
            this.transitionHelper.halt(), this.transitionHelper.set(t, i, e)
        }, s.prototype.render = function (t) {
            var i = this.transitionHelper.get();
            return this.options.cull && !i ? void 0 : {
                opacity: i,
                target: t
            }
        }, s.prototype.isVisible = function () {
            var t = this.options.visibilityThreshold;
            return t >= 1 ? 1 == this.transitionHelper.get() : this.transitionHelper.get() > t
        }, e.exports = s
    }
); 