define(
	"famous-animation/Sequence", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s() {
            this.startTime = 0, this.setupPos = 0, this.schedule = [], this.seqLoc = -1
        }

        s.prototype._execute = function (t) {
            for (this.seqLoc < 0 && (this.seqLoc = 0); this.seqLoc < this.schedule.length && this.schedule[this.seqLoc].pos <= t;) this.schedule[this.seqLoc].action.call(this), this.seqLoc++
        }, s.prototype.update = function () {
            if (!(this.seqLoc < 0 || this.seqLoc >= this.schedule.length)) {
                var t = (new Date).getTime() - this.startTime;
                this._execute(t)
            }
        }, s.prototype.at = function (t, i) {
            this.schedule.push({
                pos: t,
                action: i
            }), this.setupPos = t
        }, s.prototype.after = function (t, i) {
            this.at(this.setupPos + t, i)
        }, s.prototype.play = function (t) {
            this.schedule.sort(function (t, i) {
                return t.pos - i.pos
            }), this.startTime = (new Date).getTime();
            for (var i = 0; i < this.schedule.length && this.schedule[i].pos < t;) i++;
            this.seqLoc = i
        }, s.prototype.fastForward = function (t) {
            "undefined" == typeof t && (t = 1 / 0), this._execute(t)
        }, s.prototype.stop = function () {
            this.seqLoc = -1
        }, e.exports = s
    }
); 