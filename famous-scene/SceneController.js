define(
	"famous-scene/SceneController", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/View", 
		"famous/Matrix", 
		"famous/Modifier", 
		"famous/Engine"
	], 
	function (t, i, e) 
	{
        function s() {
            o.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.routes = {}, this.sceneArray = [], this.sceneIndex = 0
        }

        var o = t("famous/View");
        t("famous/Matrix");
        var n = t("famous/Modifier"),
            r = t("famous/Engine");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            loop: !0
        },
        s.prototype.addScene = function (t, i) {
            this.routes[t] = i, this.sceneArray.push(t), this.emit("add", {
                key: t,
                view: i
            })
        }, s.prototype.addScenes = function (t) {
            for (var i in t) this.addScene(i, t[i])
        }, s.prototype.removeScene = function (t) {
            delete this.routes[t], this.emit("remove", {
                key: t
            })
        }, s.prototype.reset = function () {
            this.node.object = void 0
        }, s.prototype.next = function () {
            this.sceneIndex++,
            this.sceneIndex == this.sceneArray.length ?
                this.options.loop ?
                (this.sceneIndex = 0,
                this.setScene(this.sceneArray[this.sceneIndex], "next")) : (this.emit("end"), this.sceneIndex--) : this.setScene(this.sceneArray[this.sceneIndex], "next"),
            this.emit("next", this.sceneArray[this.sceneIndex])
        }, s.prototype.prev = function () {
            this.sceneIndex--, this.sceneIndex < 0 ? this.options.loop ? (this.sceneIndex = this.sceneArray.length - 1, this.setScene(this.sceneArray[this.sceneIndex], "prev")) : (this.emit("beginning"), this.sceneIndex++) : this.setScene(this.sceneArray[this.sceneIndex], "prev"), this.emit("prev", this.sceneArray[this.sceneIndex])
        }, s.prototype.setActiveTransform = function (t, i, e) {
            this.activeTransform && (this.activeTransform.halt(), this.activeTransform.setTransform(t, i, e))
        }, s.prototype.setScene = function (t, i) {
            var e = this.routes[t];
            return "undefined" == typeof e ? (console.warn("No view exists!", t), void 0) : (this.currentRoute = t, this.ActiveConstructor = e, this.inTransition = !0, void 0 == i && (this.sceneIndex = this.sceneArray.indexOf(this.currentRoute)), this.emit("set", {
                key: t,
                view: e,
                index: this.sceneIndex
            }), this.activeScene && this.activeScene.deactivate ? (this.activeScene.deactivate(this.activateScene.bind(this), i), this.emit("deactivate"), void 0) : this.activateScene(i))
        }, s.prototype.setSceneOrder = function (t) {
            this.sceneArray = t, this.emit("reorder", {
                array: this.sceneArray
            })
        }, s.prototype.activateScene = function () {
            this.reset(), r.unpipe(this.activeScene), this.activeScene = new this.ActiveConstructor, this.activeTransform = new n, this.activeScene.setController && this.activeScene.setController(this), r.pipe(this.activeScene), this.node.add(this.activeTransform).link(this.activeScene), this.activeScene.activate ? this.activeScene.activate(function () {
                this.inTransition = !1, this.emit("activate")
            }.bind(this)) : (this.inTransition = !1, this.emit("activate"))
        }, s.prototype.getCurrentRoute = function () {
            return this.currentRoute
        }, s.prototype.getCurrentIndex = function () {
            return this.sceneIndex
        }, s.prototype.getRoutes = function () {
            return this.routes
        }, s.prototype.getSceneOrder = function () {
            return this.sceneArray
        }, s.prototype.getOrderedScenes = function () {
            for (var t = [], i = 0; i < this.sceneArray.length; i++) t.push(this.routes[this.sceneArray[i]]);
            return t
        }, s.prototype.getActiveTransform = function () {
            return this.activeTransform
        }, e.exports = s
    }
);