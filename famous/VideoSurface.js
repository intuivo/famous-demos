define(
	"famous/VideoSurface", 
	[
		"require", 
		"exports", 
		"module", 
		"./Surface"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.autoplay = t.autoplay || !1, this.videoUrl = void 0, o.apply(this, arguments)
        }

        var o = t("./Surface");
        s.prototype = Object.create(o.prototype), s.prototype.elementType = "video", s.prototype.elementClass = "surface", s.prototype.setContent = function (t) {
            this.videoUrl = t, this.contentDirty = !0
        }, s.prototype.deploy = function (t) {
            t.src = this.videoUrl, t.autoplay = this.autoplay
        }, s.prototype.recall = function (t) {
            t.src = ""
        }, e.exports = s
    }
); 