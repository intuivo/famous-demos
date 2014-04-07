define(
	"famous-scene/SceneTransitions", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-scene/SceneController", 
		"famous-animation/Easing", 
		"famous/Matrix", 
		"./Transitions"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.controller = t
        }

        t("famous-scene/SceneController"), t("famous-animation/Easing"), t("famous/Matrix");
        var o = t("./Transitions");
        s.prototype.setController = function (t) {
            this.controller = t
        }, s.prototype.popIn = function (t) {
            o.popIn(this.controller.getActiveTransform(), t)
        }, s.prototype.popOut = function (t) {
            o.popOut(this.controller.getActiveTransform(), t)
        }, s.prototype.sceneFadeLeft = function (t) {
            o.fadeLeft(this.controller.getActiveTransform(), t)
        }, s.prototype.sceneFadeInLeft = function (t) {
            o.fadeInLeft(this.controller.getActiveTransform(), t)
        }, s.prototype.sceneFadeRight = function (t) {
            o.fadeRight(this.controller.getActiveTransform(), t)
        }, s.prototype.sceneFadeInRight = function (t) {
            o.fadeInRight(this.controller.getActiveTransform(), t)
        }, e.exports = s
    }
); 