define(
	"famous-views/Shaper", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/RenderNode", 
		"famous/Matrix", 
		"famous/Modifier", 
		"famous/Utility"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.nodes = [], this.transforms = [], this.defaultTransition = {
                duration: 1e3,
                curve: "easeInOut"
            };
            for (var i in t) this.side(i).from(t[i])
        }

        var o = t("famous/RenderNode"),
            n = t("famous/Matrix"),
            r = t("famous/Modifier"),
            a = t("famous/Utility");
        s.prototype.side = function (t) {
            return this.nodes[t] || (this.transforms[t] = new r, this.transforms[t].setDefaultTransition(this.defaultTransition), this.nodes[t] = new o(this.transforms[t])), this.nodes[t]
        }, s.prototype.halt = function (t) {
            this.transforms[t].halt()
        }, s.prototype.haltSet = function (t) {
            for (var i = 0; i < t.length; i++) this.halt(i)
        }, s.prototype.haltAll = function () {
            this.haltSet(this.all())
        }, s.prototype.set = function (t, i, e, s) {
            return this.transforms[t] ? (this.transforms[t].setTransform(i, e, s), void 0) : (s && s(), void 0)
        }, s.prototype.setShape = function (t, i, e, s) {
            for (var o = "function" == typeof i ? i : function (t) {
                    return i[t]
                }, n = s ? a.after(t.length, s) : void 0, r = 0; r < t.length; r++) this.set(t[r], o(r), e, n)
        }, s.prototype.setShapeAll = function (t, i, e) {
            this.setShape(this.all(), t, i, e)
        }, s.prototype.modify = function (t, i, e, s) {
            var o = n.multiply(this.transforms[t].getFinalTransform(), i);
            this.set(t, o, e, s)
        }, s.prototype.modifySet = function (t, i, e, s) {
            for (var o = s ? a.after(t.length, s) : void 0, n = 0; n < t.length; n++) this.modify(t[n], i, e, o)
        }, s.prototype.modifyAll = function (t, i, e) {
            this.modify(this.all(), t, i, e)
        }, s.prototype.setOpacity = function (t, i, e, s) {
            this.transforms[t].setOpacity(i, e, s)
        }, s.prototype.setOpacitySet = function (t, i, e, s) {
            for (var o = s ? a.after(t.length, s) : void 0, n = 0; n < t.length; n++) this.setOpacity(t[n], i, e, o)
        }, s.prototype.setOpacityAll = function (t, i, e) {
            this.setOpacitySet(this.all(), t, i, e)
        }, s.prototype.all = function () {
            var t = [];
            for (var i in this.nodes) t.push(i);
            return t
        }, s.prototype.getTransform = function (t) {
            return this.transforms[t].getTransform()
        }, s.prototype.getOpacity = function (t) {
            return this.transforms[t].getOpacity()
        }, s.prototype.isMoving = function (t) {
            return this.transforms[t].isMoving()
        }, s.prototype.render = function () {
            for (var t = [], i = 0; i < this.nodes.length; i++) t[i] = this.nodes[i].execute();
            return t
        }, e.exports = s
    }
); 