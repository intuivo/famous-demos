define(
	"famous/ViewSequence", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            this.array = t, this.index = i || 0, this.loop = e || !1, this._prev = void 0, this._prevIndex = void 0, this._next = void 0, this._nextIndex = void 0
        }

        s.prototype.getPrevious = function () {
            var t = this.index - 1;
            if (0 == this.index) {
                if (!this.loop) return void 0;
                t = this.array.length - 1
            }
            return this._prev && this._prevIndex == t || (this._prev = new s(this.array, t, this.loop), this._prevIndex = t), this._prev
        }, s.prototype.getNext = function () {
            var t = this.index + 1;
            if (t >= this.array.length) {
                if (!this.loop) return void 0;
                t = 0
            }
            return this._next && this._next == t || (this._next = new s(this.array, t, this.loop), this._nextIndex = t), this._next
        }, s.prototype.toString = function () {
            return this.index
        }, s.prototype.get = function () {
            return this.array[this.index]
        }, s.prototype.getSize = function () {
            var t = this.get();
            if (t) return t.getSize ? t.getSize.apply(t, arguments) : void 0
        }, s.prototype.render = function () {
            var t = this.get();
            if (t) return t.render.apply(t, arguments)
        }, e.exports = s
    }
); 