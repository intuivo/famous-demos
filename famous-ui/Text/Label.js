define(
	"famous-ui/Text/Label", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = {
                size: void 0,
                content: "",
                properties: {},
                classes: ["ui-label"]
            }, this._dirty = !0;
            for (var i in t) this.options[i] = t[i];
            this.surface
        }

        var o = t("famous/Surface");
        s.prototype.init = function () {
            this.surface = new o({
                size: this.options.size,
                content: "<div>" + this.options.content + "</div>",
                classes: this.options.classes,
                properties: this.options.properties
            })
        }, s.prototype.setSize = function (t) {
            this.options.size = [t[0], 0]
        }, s.prototype.getSize = function () {
            return this.options.size ? this.options.size : void 0
        }, s.prototype.pipe = function (t) {
            return this.surface.pipe(t)
        }, s.prototype.render = function () {
            return this._dirty && this.surface._currTarget && (this.options.size = [this.options.size[0], this.surface._currTarget.firstChild.clientHeight], this.surface.setSize(this.options.size), this._dirty = !1), this.surface.render()
        }, e.exports = s
    }
); 