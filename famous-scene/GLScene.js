define(
	"famous-scene/GLScene", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Engine", 
		"famous/Surface", 
		"famous/WebGLSurface", 
		"famous/Matrix", 
		"famous-utils/Utils", 
		"./Scene"
	], 
	function (t, i, e) 
	{
        function s() {
            h.apply(this, arguments), this.gl = null, this.glReady = !1, this.glSurface = new n([this.width, this.height], {
                antialias: !0
            })
        }

        var o = t("famous/Engine");
        t("famous/Surface");
        var n = t("famous/WebGLSurface"),
            r = t("famous/Matrix"),
            a = t("famous-utils/Utils"),
            h = t("./Scene");
        s.prototype = Object.create(h.prototype), s.prototype.constructor = s, s.prototype.bindEvents = function () {
            this.callbacks.prerender = this.__update.bind(this), this.callbacks.touchstart = this.touchstart.bind(this), this.callbacks.touchmove = this.touchmove.bind(this), this.callbacks.touchend = this.touchend.bind(this), this.callbacks.keypress = this.keypress.bind(this), this.callbacks.resize = this._resize.bind(this), this.callbacks.mousedown = this._mousedown.bind(this), this.callbacks.mousemove = this._mousemove.bind(this), this.callbacks.mouseover = this._mouseover.bind(this), this.callbacks.mouseup = this._mouseup.bind(this), this.callbacks.mouseout = this._mouseout.bind(this), this.callbacks.keydown = this.keydown.bind(this), this.callbacks.keyup = this.keyup.bind(this);
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++) o.on(t[i], this.callbacks[t[i]])
        }, s.prototype.setup = function () {}, s.prototype.__update = function () {
            this.initGL() && (o.unbind("prerender", this.callbacks.prerender), this.callbacks.prerender = this._update.bind(this), o.on("prerender", this.callbacks.prerender))
        }, s.prototype._update = function () {
            this.update(this.gl), this.draw(this.gl)
        }, s.prototype.update = function () {}, s.prototype.draw = function () {}, s.prototype.render = function () {
            return {
                transform: r.identity,
                opacity: 1,
                target: this.glSurface.render()
            }
        }, s.prototype._resize = function (t) {
            var i = a.getDevicePixelRatio();
            this.width = a.getWidth(), this.height = a.getHeight(), this.glSurface.setSize([this.width, this.height]), this.gl.viewportWidth = this.width * i, this.gl.viewportHeight = this.height * i, this.resize(t)
        }, s.prototype.initGL = function () {
            var t = this.glSurface.getContext({
                antialias: !0
            });
            if (null != t) {
                this.gl = t;
                var i = a.getDevicePixelRatio();
                this.gl.viewportWidth = this.width * i, this.gl.viewportHeight = this.height * i, this.glReady = !0, this.setup(this.gl)
            }
            return this.glReady
        }, s.prototype.createShaderProgram = function (t, i) {
            var e = this.gl,
                s = this.initVertShader(t),
                o = this.initFragShader(i),
                n = e.createProgram();
            return e.attachShader(n, s), e.attachShader(n, o), e.linkProgram(n), e.getProgramParameter(n, e.LINK_STATUS) || alert("Could not initialise shaders"), n
        }, s.prototype.initFragShader = function (t) {
            var i = this.gl,
                e = i.createShader(i.FRAGMENT_SHADER);
            return i.shaderSource(e, t), i.compileShader(e), i.getShaderParameter(e, i.COMPILE_STATUS) ? e : (alert(i.getShaderInfoLog(e)), null)
        }, s.prototype.initVertShader = function (t) {
            var i = this.gl,
                e = i.createShader(i.VERTEX_SHADER);
            return i.shaderSource(e, t), i.compileShader(e), i.getShaderParameter(e, i.COMPILE_STATUS) ? e : (alert(i.getShaderInfoLog(e)), null)
        }, e.exports = s
    }
);