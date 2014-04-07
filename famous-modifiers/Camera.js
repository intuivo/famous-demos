define(
	"famous-modifiers/Camera", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Transitionable", 
		"famous/Matrix", 
		"famous/Utility"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this._renderMatrix = r.identity, this._scaleState = new n([1, 1, 1]), this._skewState = new n([0, 0, 0]), this._rotateState = new n([0, 0, 0]), this._translateState = new n([0, 0, 0]), this._dirty = !1, t && this.lookAt(t)
        }

        function o() {
            var t = r.scale.apply(this, this._scaleState.get()),
                i = r.skew.apply(this, this._skewState.get()),
                e = r.rotate.apply(this, this._rotateState.get()),
                s = r.move(r.multiply(t, i, e), this._translateState.get());
            return r.inverse(s)
        }

        var n = t("famous/Transitionable"),
            r = t("famous/Matrix"),
            a = t("famous/Utility");
        s.prototype.halt = function () {
            this._scaleState.halt(), this._skewState.halt(), this._rotateState.halt(), this._translateState.halt()
        }, s.prototype.getScale = function () {
            return this._scaleState.get()
        }, s.prototype.setScale = function (t, i, e) {
            return this._dirty = !0, this._scaleState.set(t, i, e)
        }, s.prototype.getSkew = function () {
            return this._skewState.get()
        }, s.prototype.setSkew = function (t, i, e) {
            return this._dirty = !0, this._skewState.set(t, i, e)
        }, s.prototype.getRotation = function () {
            return this._rotateState.get()
        }, s.prototype.setRotation = function (t, i, e) {
            return this._dirty = !0, this._rotateState.set(t, i, e)
        }, s.prototype.getSpin = s.prototype.getRotation, s.prototype.setSpin = s.prototype.setRotation, s.prototype.getPos = function () {
            return this._translateState.get()
        }, s.prototype.setPos = function (t, i, e) {
            return this._dirty = !0, this._translateState.set(t, i, e)
        }, s.prototype.lookAt = function (t, i, e) {
            var s = void 0;
            e && (s = a.after(4, e)), this.halt();
            var o = r.interpret(t);
            this.setScale(o.scale, i, s), this.setSkew(o.skew, i, s), this.setRotation(o.rotate, i, s), this.setPos(o.translate, i, s)
        }, s.prototype.render = function (t) {
            return this._dirty |= this._scaleState.isActive() || this._skewState.isActive() || this._rotateState.isActive() || this._translateState.isActive(), this._dirty && (this._renderMatrix = o.call(this), this._dirty = !1), {
                transform: this._renderMatrix,
                group: !0,
                target: t
            }
        }, e.exports = s
    }
); 