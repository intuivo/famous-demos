define(
	"famous/Scene", 
	[
		"require", 
		"exports", 
		"module", 
		"./RenderNode", 
		"./Modifier", 
		"./SceneCompiler"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.id = {}, this.transforms = [], this.node = new o, this._def = void 0, t && this.load(t)
        }

        var o = t("./RenderNode"),
            n = t("./Modifier"),
            r = t("./SceneCompiler"),
            a = o.prototype.link,
            h = o.prototype.add;
        s.prototype.create = function () {
            return new s(this._def)
        }, s.prototype.load = function (t) {
            t instanceof s ? t = t._def : t instanceof Function || (t = r.compile(t)), this.node = t(n, o, a, h, this.id, this.transforms), this._def = t
        }, s.prototype.getTransforms = function () {
            return this.transforms
        }, s.prototype.add = function () {
            return this.node.add.apply(this.node, arguments)
        }, s.prototype.mod = function () {
            return this.node.mod.apply(this.node, arguments)
        }, s.prototype.link = function () {
            return this.node.link.apply(this.node, arguments)
        }, s.prototype.render = function () {
            return this.node.render.apply(this.node, arguments)
        }, e.exports = s
    }
); 