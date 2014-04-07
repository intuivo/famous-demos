define(
	"famous-animation/AnimationEngine", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Engine", 
		"./Timer", 
		"./Animation"
	], 
	function (t, i, e) 
	{
        function s() {
            this.animations = [], this.timer = new n, o.on("prerender", this.update.bind(this))
        }

        var o = t("famous/Engine"),
            n = t("./Timer");
        t("./Animation"), s.prototype.update = function () {
            for (var t = 0; t < this.animations.length; t++) this.animations[t].tick()
        }, s.prototype.render = function () {
            for (var t = [], i = 0; i < this.animations.length; i++) this.animations[i].normalizedTime > 0 && t.push(this.animations[i].render()), this.animations[i].isDead() && this.animations.splice(this.animations.indexOf(this.animations[i]), 1);
            return t
        }, s.prototype.emit = function (t) {
            "prerender" == t && (this.update(), this.render())
        }, s.prototype.addAnimation = function (t) {
            -1 == this.animations.indexOf(t) && this.animations.push(t)
        }, s.prototype.removeAnimation = function (t) {
            t.setDead(!0)
        }, s.prototype.getTime = function () {
            return this.timer.getTime()
        }, e.exports = s
    }
); 