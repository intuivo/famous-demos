define(
	"famous-sync/GenericSync", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/EventHandler", 
		"./TouchSync", 
		"./ScrollSync"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            this.targetGet = t, this.eventInput = new n, n.setInputHandler(this, this.eventInput), this.eventOutput = new n, n.setOutputHandler(this, this.eventOutput), this._handlers = void 0, this.options = {
                syncClasses: h
            }, this._handlerOptions = this.options, i && this.setOptions(i), this._handlers || o.call(this)
        }

        function o() {
            if (this._handlers)
                for (var t = 0; t < this._handlers.length; t++) this.eventInput.unpipe(this._handlers[t]), this._handlers[t].unpipe(this.eventOutput);
            this._handlers = [];
            for (var t = 0; t < this.options.syncClasses.length; t++) {
                var i = this.options.syncClasses[t];
                this._handlers[t] = new i(this.targetGet, this._handlerOptions), this.eventInput.pipe(this._handlers[t]), this._handlers[t].pipe(this.eventOutput)
            }
        }

        var n = t("famous/EventHandler"),
            r = t("./TouchSync"),
            a = t("./ScrollSync"),
            h = [r, a];
        s.register = function (t) {
            h.indexOf(t) < 0 && h.push(t)
        }, s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.DIRECTION_Z = 2, s.prototype.setOptions = function (t) {
            if (this._handlerOptions = t, t.syncClasses && (this.options.syncClasses = t.syncClasses, o.call(this)), this._handlers)
                for (var i = 0; i < this._handlers.length; i++) this._handlers[i].setOptions(this._handlerOptions)
        }, e.exports = s
    }
); 