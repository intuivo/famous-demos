define(
	"famous-sync/ScrollSync", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/EventHandler", 
		"famous/Engine"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            this.targetGet = t, this.options = {
                direction: void 0,
                minimumEndSpeed: 1 / 0,
                rails: !1,
                scale: 1,
                stallTime: 50
            }, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new r, this.output = new r, r.setInputHandler(this, this.input), r.setOutputHandler(this, this.output), this._prevTime = void 0, this._prevVel = void 0, this._lastFrame = void 0, this.input.on("mousewheel", n.bind(this)), this.input.on("wheel", n.bind(this)), this.inProgress = !1, this._loopBound = !1
        }

        function o() {
            var t = Date.now();
            if (this.inProgress && t - this._prevTime > this.options.stallTime) {
                var i = this.targetGet();
                this.inProgress = !1;
                var e = 0;
                Math.abs(this._prevVel) >= this.options.minimumEndSpeed && (e = this._prevVel), this.output.emit("end", {
                    p: i,
                    v: e,
                    slip: !0
                })
            }
        }

        function n(t) {
            t.preventDefault(), this.inProgress || (this.inProgress = !0, this.output.emit("start", {
                slip: !0
            }), this._loopBound || (a.on("prerender", o.bind(this)), this._loopBound = !0));
            var i = this._prevTime,
                e = void 0 !== t.wheelDeltaX ? t.wheelDeltaX : -t.deltaX,
                n = void 0 !== t.wheelDeltaY ? t.wheelDeltaY : -t.deltaY,
                r = Date.now();
            this.options.rails && (Math.abs(e) > Math.abs(n) ? n = 0 : e = 0);
            var h, u, p = Math.max(r - i, 8),
                c = e / p,
                l = n / p,
                f = this.targetGet(),
                d = this.options.scale;
            this.options.direction == s.DIRECTION_X ? (h = f + d * e, u = d * c) : this.options.direction == s.DIRECTION_Y ? (h = f + d * n, u = d * l) : (h = [f[0] + d * e, f[1] + d * n], u = [d * c, d * l]), this.output.emit("update", {
                p: h,
                v: u,
                slip: !0
            }), this._prevTime = r, this._prevVel = u
        }

        var r = t("famous/EventHandler"),
            a = t("famous/Engine");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.getOptions = function () {
            return this.options
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.minimumEndSpeed && (this.options.minimumEndSpeed = t.minimumEndSpeed), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime)
        }, e.exports = s
    }
); 