 define(
 	"famous/OptionsManager", 
 	[
	 	"require", 
	 	"exports", 
	 	"module", 
	 	"./EventHandler"
 	], function (t, i, e) 
 	{
        function s(t) {
            this._value = t, this.eventOutput = null
        }

        function o() {
            this.eventOutput = new n, this.eventOutput.bindThis(this), n.setOutputHandler(this, this.eventOutput)
        }

        var n = t("./EventHandler");
        s.prototype.patch = function () {
            for (var t = this._value, i = 0; i < arguments.length; i++) {
                var e = arguments[i];
                for (var s in e) s in t && "object" == typeof t[s] && !Array.isArray(t[s]) && "function" != typeof t[s] && null !== t[s] ? (t.hasOwnProperty(s) || (t[s] = Object.create(t[s])), this.key(s).patch(e[s]), this.eventOutput && this.eventOutput.emit("change", {
                    id: s,
                    value: this.key(s).value()
                })) : this.set(s, e[s])
            }
            return this
        }, 
        s.prototype.setOptions = s.prototype.patch, s.prototype.key = function (t) {
            var i = new s(this._value[t]);
            return (!(i._value instanceof Object) || i._value instanceof Array) && (i._value = {}), i
        }, 
        s.prototype.get = function (t) {
            return this._value[t]
        }, 
        s.prototype.getOptions = s.prototype.get, s.prototype.set = function (t, i) {
            var e = this.get(t);
            return this._value[t] = i, this.eventOutput && i !== e && this.eventOutput.emit("change", {
                id: t,
                value: i
            }), this
        }, 
        s.prototype.value = function () {
            return this._value
        }, 
        s.prototype.on = function () {
            return o.call(this), this.on.apply(this, arguments)
        }, 
        s.prototype.unbind = function () {
            return o.call(this), this.unbind.apply(this, arguments)
        }, s.prototype.pipe = function () {
            return o.call(this), this.pipe.apply(this, arguments)
        }, s.prototype.unpipe = function () {
            return o.call(this), this.unpipe.apply(this, arguments)
        }, 
        e.exports = s;
    }
);