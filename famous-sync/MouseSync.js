define(
	"famous-sync/MouseSync", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/EventHandler"
	], 
	function (t, i, e) 
	{
        function s(t, i) {
            this.targetGet = t, this.options = {
                direction: void 0,
                rails: !1,
                scale: 1,
                stallTime: 50,
                propogate: !0
            }, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new h, this.output = new h, h.setInputHandler(this, this.input), h.setOutputHandler(this, this.output), this._prevCoord = void 0, this._prevTime = void 0, this._prevVel = void 0, this.input.on("mousedown", o.bind(this)), this.input.on("mousemove", n.bind(this)), this.input.on("mouseup", r.bind(this)), this.options.propogate ? this.input.on("mouseleave", a.bind(this)) : this.input.on("mouseleave", r.bind(this))
        }

        function o(t) {
            t.preventDefault(), this._prevCoord = [t.clientX, t.clientY], this._prevTime = Date.now(), this._prevVel = void 0 !== this.options.direction ? 0 : [0, 0], this.output.emit("start")
        }

        function n(t) {
            if (this._prevCoord) {
                var i = this._prevCoord,
                    e = this._prevTime,
                    o = [t.clientX, t.clientY],
                    n = Date.now(),
                    r = o[0] - i[0],
                    a = o[1] - i[1];
                this.options.rails && (Math.abs(r) > Math.abs(a) ? a = 0 : r = 0);
                var h, u, p = Math.max(n - e, 8),
                    c = r / p,
                    l = a / p,
                    f = this.targetGet(),
                    d = this.options.scale;
                this.options.direction == s.DIRECTION_X ? (h = f + d * r, u = d * c) : this.options.direction == s.DIRECTION_Y ? (h = f + d * a, u = d * l) : (h = [f[0] + d * r, f[1] + d * a], u = [d * c, d * l]), this.output.emit("update", {
                    p: h,
                    v: u
                }), this._prevCoord = o, this._prevTime = n, this._prevVel = u
            }
        }

        function r() {
            if (this._prevCoord) {
                var t = this._prevTime,
                    i = Date.now();
                i - t > this.options.stallTime && (this._prevVel = void 0 == this.options.direction ? [0, 0] : 0);
                var e = this.targetGet();
                this.output.emit("end", {
                    p: e,
                    v: this._prevVel
                }), this._prevCoord = void 0, this._prevTime = void 0, this._prevVel = void 0
            }
        }

        function a() {
            if (this._prevCoord) {
                var t = function (t) {
                    n.call(this, t)
                }.bind(this),
                    i = function (e) {
                        r.call(this, e), document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", i)
                    }.bind(this);
                document.addEventListener("mousemove", t), document.addEventListener("mouseup", i)
            }
        }

        var h = t("famous/EventHandler");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.getOptions = function () {
            return this.options
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime), void 0 !== t.propogate && (this.options.propogate = t.propogate)
        }, e.exports = s
    }
); 