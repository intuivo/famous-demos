define(
	"famous-audio/BufferLoader", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            this.context = t, this.urlList = i, this.onload = e, this.bufferList = [], this.loadCount = 0
        }

        s.prototype.loadBuffer = function (t, i) {
            var e = new XMLHttpRequest;
            e.open("GET", t, !0), e.responseType = "arraybuffer";
            var s = this;
            e.onload = function () {
                s.context.decodeAudioData(e.response, function (e) {
                    return e ? (s.bufferList[i] = e, ++s.loadCount == s.urlList.length && s.onload(s.bufferList), void 0) : (console.log("error decoding file data: " + t), void 0)
                })
            }, e.onerror = function () {
                console.log("BufferLoader: XHR error")
            }, e.send()
        }, s.prototype.load = function () {
            for (var t = 0; t < this.urlList.length; ++t) this.loadBuffer(this.urlList[t], t)
        }, e.exports = s
    }
); 