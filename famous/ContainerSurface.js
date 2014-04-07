define(
	"famous/ContainerSurface", 
	[
		"require", 
		"exports", 
		"module", 
		"./Surface", 
		"./Context"
	], 
	function (t, i, e) 
	{
        function s(t) {
            o.call(this, t), this._container = document.createElement("div"), this._container.classList.add("group"), this._container.style.width = "100%", this._container.style.height = "100%", this._container.style.position = "relative", this._shouldRecalculateSize = !1, this.context = new n(this._container), this.setContent(this._container)
        }

        var o = t("./Surface"),
            n = t("./Context");
        s.prototype = Object.create(o.prototype), s.prototype.elementType = "div", s.prototype.elementClass = "surface", s.prototype.link = function () {
            return this.context.link.apply(this.context, arguments)
        }, s.prototype.add = function () {
            return this.context.add.apply(this.context, arguments)
        }, s.prototype.mod = function () {
            return this.context.mod.apply(this.context, arguments)
        }, s.prototype.render = function () {
            return this._sizeDirty && (this._shouldRecalculateSize = !0), o.prototype.render.call(this)
        }, s.prototype.commit = function () {
            var t = o.prototype.commit.apply(this, arguments);
            return this._shouldRecalculateSize && (this.context.setSize(), this._shouldRecalculateSize = !1), this.context.update(), t
        }, e.exports = s
    }
); 