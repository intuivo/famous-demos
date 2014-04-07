define(
	"famous/Group", 
	[
		"require", 
		"exports", 
		"module", 
		"./Context", 
		"./Matrix", 
		"./Surface"
	], 
	function (t, i, e) 
	{
        function s(t) {
            r.call(this, t), this._shouldRecalculateSize = !1, this._container = document.createDocumentFragment(), this.context = new o(this._container), this.setContent(this._container), this._groupSize = [void 0, void 0], this._origin = void 0, this._originTransfer = {
                render: function (t) {
                    return {
                        origin: this._origin,
                        target: t
                    }
                }.bind(this)
            }
        }

        var o = t("./Context"),
            n = t("./Matrix"),
            r = t("./Surface");
        s.SIZE_ZERO = [0, 0], s.prototype = Object.create(r.prototype), s.prototype.elementType = "div", s.prototype.elementClass = "group", s.prototype.link = function () {
            var t = this.context.link(this._originTransfer);
            return t.link.apply(t, arguments)
        }, s.prototype.add = function () {
            return this.context.add.apply(this.context, arguments)
        }, s.prototype.mod = function () {
            return this.context.mod.apply(this.context, arguments)
        }, s.prototype.render = function () {
            return r.prototype.render.call(this)
        }, s.prototype.deploy = function (t) {
            this.context.migrate(t)
        }, s.prototype.recall = function () {
            this._container = document.createDocumentFragment(), this.context.migrate(this._container)
        }, s.prototype.commit = function (t, i, e, o, a) {
            i = n.moveThen([-o[0] * a[0], -o[1] * a[1], 0], i);
            var h = r.prototype.commit.call(this, t, i, e, o, s.SIZE_ZERO);
            return this._origin = o, (a[0] != this._groupSize[0] || a[1] != this._groupSize[1]) && (this.context.setSize(a), this._groupSize[0] = a[0], this._groupSize[1] = a[1]), this.context.update(), h
        }, e.exports = s
    }
); 