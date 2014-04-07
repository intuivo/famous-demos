define(
	"famous-animation/Animation", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/Matrix", 
		"famous-utils/Utils", 
		"./Easing"
	], 
	function (t, i, e) 
	{
        function s(t) {
            return this.name = t.name || "base", this.dead = !1, this.engine = t.engine || void 0, this.duration = t.duration || 500, this.delay = t.delay || 0, this.nextAnimations = [], void 0 !== t.next && (t.next instanceof Array ? this.nextAnimations.concat(t.next) : this.nextAnimations.push(t.next)), this.callback = t.callback || void 0, this.startTime = 0, this.endTime = 0, this.currentTime = 0, this.normalizedTime = 0, this.timePassed = 0, this.halted = !1, this.playing = !1, this.activated = !1, this.activateCallback = t.activateCallback || void 0, this.deactivateCallback = t.deactivateCallback || void 0, this.loop = t.loop || !1, this.reverse = t.reverse || !1, this.reverseUponLoop = t.reverseUponLoop || !1, this
        }

        t("famous/Surface"), t("famous/Matrix");
        var o = t("famous-utils/Utils");
        t("./Easing"), s.prototype.setDead = function (t) {
            return this.dead = t, this
        }, s.prototype.isDead = function () {
            return this.dead
        }, s.prototype.setup = function () {}, s.prototype.update = function () {}, s.prototype.render = function () {}, s.prototype.isPlaying = function () {
            return this.playing
        }, s.prototype.setDuration = function (t) {
            return this.duration = t, this
        }, s.prototype.setDelay = function (t) {
            return this.delay = t, this
        }, s.prototype.setCallback = function (t) {
            return this.callback = t || void 0, this
        }, s.prototype.setReverse = function (t) {
            return this.reverse = t, this
        }, s.prototype.toggleReverse = function () {
            return this.reverse = !this.reverse, this
        }, s.prototype.setLoop = function (t) {
            return this.loop = t, this
        }, s.prototype.setReverseUponLoop = function (t) {
            return this.reverseUponLoop = t, this
        }, s.prototype.isHalted = function () {
            return this.halted
        }, s.prototype.halt = function () {
            this.halted = !0, this.timePassed = this.engine.getTime() - this.startTime
        }, s.prototype.continueAnimation = function () {
            this.halted = !1, this.startTime = this.engine.getTime() - this.timePassed, this.timePassed = 0
        }, s.prototype.activate = function () {}, s.prototype.deactivate = function () {}, s.prototype.start = function () {
            this.engine.addAnimation(this), this.setDead(!1), this.halted = !1, this.playing = !0, this.startTime = this.engine.getTime() + this.delay - this.timePassed, this.endTime = this.startTime + this.duration, this.normalizedTime = 0
        }, s.prototype.tick = function () {
            if (this.playing && !this.halted) {
                if (this.currentTime = this.engine.getTime() - this.startTime, this.normalizedTime = this.currentTime / this.duration, this.normalizedTime > 1) return this.normalizedTime = o.clamp(this.normalizedTime, 0, 1), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this.update(), this.end(), void 0;
                this.normalizedTime > 1e-6 && (this.activated || (this.activate(), void 0 !== this.activateCallback && this.activateCallback(), this.activated = !0), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this.update())
            }
        }, s.prototype.getTime = function () {
            return this.normalizedTime
        }, s.prototype.end = function () {
            if (this.activated = !1, this.playing = !1, this.deactivate(), void 0 !== this.deactivateCallback && this.deactivateCallback(), this.engine.removeAnimation(this), this.reverseUponLoop && this.toggleReverse(), this.loop) this.start();
            else
                for (var t = 0; t < this.nextAnimations.length; t++) this.nextAnimations[t].start();
            void 0 !== this.callback && this.callback()
        }, s.prototype.setNext = function (t) {
            t instanceof Array ? this.nextAnimations = this.nextAnimations.concat(this.nextAnimations, t) : this.nextAnimations.push(t)
        }, s.prototype.setName = function (t) {
            this.name = t
        }, s.prototype.getName = function () {
            return this.name
        }, s.prototype.setActivateCallback = function (t) {
            this.activateCallback = t
        }, s.prototype.setDeactivateCallback = function (t) {
            this.deactivateCallback = t
        }, e.exports = s
    }
);