define(
    "famous/EventHandler", 
    [
        "require", 
        "exports", 
        "module"
    ], function (t, i, e) {
        function s() {
            this.listeners = {}, this.downstream = [], this.downstreamFn = [], this.owner = this
        }

        function o(t, i) {
            for (var e = !1, s = 0; s < this.downstream.length; s++) e = this.downstream[s].emit(t, i) || e;
            for (var s = 0; s < this.downstreamFn.length; s++) e = this.downstreamFn[s](t, i) || e;
            return e
        }

        s.prototype.emit = function (t, i) {
            i || (i = {});
            var e = this.listeners[t],
                s = !1;
            if (e)
                for (var n = 0; n < e.length; n++) e[n].call(this.owner, i) && (s = !0);
            return o.call(this, t, i) || s
        }, s.prototype.on = function (t, i) {
            this.listeners[t] || (this.listeners[t] = []);
            var e = this.listeners[t].indexOf(i);
            return 0 > e && this.listeners[t].push(i), this
        }, s.prototype.unbind = function (t, i) {
            var e = this.listeners[t].indexOf(i);
            e >= 0 && this.listeners[t].splice(e, 1)
        }, s.prototype.pipe = function (t) {
            var i = t instanceof Function ? this.downstreamFn : this.downstream,
                e = i.indexOf(t);
            return 0 > e && i.push(t), t instanceof Function ? t("pipe") : t.emit("pipe"), t
        }, s.prototype.unpipe = function (t) {
            var i = t instanceof Function ? this.downstreamFn : this.downstream,
                e = i.indexOf(t);
            return e >= 0 ? (i.splice(e, 1), t instanceof Function ? t("unpipe") : t.emit("unpipe"), t) : !1
        }, s.prototype.bindThis = function (t) {
            this.owner = t
        }, s.setInputHandler = function (t, i) {
            t.emit = i.emit.bind(i)
        }, s.setOutputHandler = function (t, i) {
            i instanceof s && i.bindThis(t), t.pipe = i.pipe.bind(i), t.unpipe = i.unpipe.bind(i), t.on = i.on.bind(i), t.unbind = i.unbind.bind(i)
        }, e.exports = s
    });