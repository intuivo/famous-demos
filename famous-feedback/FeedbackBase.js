define(
	"famous-feedback/FeedbackBase", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Engine", 
		"famous/View", 
		"famous/Surface", 
		"famous/Modifier", 
		"famous-animation/Easing", 
		"famous/Matrix"
	], 
	function (t, i, e) 
	{
        function s() {
            o.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this._inTransition = [], this.content = [], this.on("mousedown", this._feedback.bind(this)), this.on("touchstart", this._feedback.bind(this))
        }

        t("famous/Engine");
        var o = t("famous/View");
        t("famous/Surface"), t("famous/Modifier"), t("famous-animation/Easing"), t("famous/Matrix"), s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, s.prototype.create = function () {}, s.prototype.setContentRef = function (t) {
            this._contentRef = t
        }, s.prototype._feedback = function (t) {
            var i = this.getAvailable(),
                e = [t.pageX, t.pageY];
            this.content[i] || (this._inTransition.push(!1), this.create()), this._triggerAnimation(e, i)
        }, s.prototype._triggerAnimation = function (t, i) {
            this._inTransition[i] = !0, this._callback = function () {
                this._inTransition[i] = !1
            }.bind(this, i), this.animate(t, i, this._callback)
        }, s.prototype.getAvailable = function () {
            for (var t = 0; t < this._inTransition.length; t++)
                if (!this._inTransition[t]) return t;
            return this._inTransition.length
        }, e.exports = s
    }
); 