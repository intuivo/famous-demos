define(
	"famous-audio/SoundPlayer", 
	[
		"require", 
		"exports", 
		"module", 
		"./BufferLoader"
	], 
	function (t, i, e) {
        function s(t, i) {
            this.context;
            try {
                window.AudioContext = window.AudioContext || window.webkitAudioContext, this.context = new AudioContext, this.bufferLoader = new o(this.context, t, this.setSounds.bind(this)), this.sounds, this.callback = i || void 0, this.bufferLoader.load()
            } catch (e) {}
        }

        var o = t("./BufferLoader");
        s.prototype.setSounds = function (t) {
            this.sounds = t, console.log("sounds loaded", t), void 0 != this.callback && this.callback()
        }, s.prototype.playSound = function (t, i) {
            if (this.context && this.sounds) {
                var e = this.context.createBufferSource(),
                    s = this.context.createGainNode ? this.context.createGainNode() : this.context.createGain();
                e.buffer = this.sounds[t], e.connect(s), s.connect(this.context.destination), s.gain.value = "undefined" == typeof i ? .125 : i, e.start(0)
            }
        }, e.exports = s
    }
); 