 define(
 	"famous-modifiers/Draggable", 
 	[
	 	"require", 
	 	"exports", 
	 	"module", 
	 	"famous/Matrix", 
	 	"famous-sync/MouseSync", 
	 	"famous-sync/TouchSync", 
	 	"famous-sync/GenericSync", 
	 	"famous/Transitionable", 
	 	"famous/EventHandler"
 	], 
 	function (t, i, e) 
 	{
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._positionState = new f([0, 0]), this._cursorPos = [0, 0], this._active = !0, this.sync = new l(function () {
                return this._cursorPos
            }.bind(this), {
                scale: this.options.scale,
                syncClasses: [p, c]
            }), this.eventOutput = new d, d.setInputHandler(this, this.sync), d.setOutputHandler(this, this.eventOutput), a.call(this)
        }

        function o() {
            var t = this.getPosition();
            this._cursorPos = t.slice(), this.eventOutput.emit("dragstart", {
                p: t
            })
        }

        function n(t) {
            this._active && (this.setPosition(h.call(this, t.p), this.options.transition), this._cursorPos = t.p), this.eventOutput.emit("dragmove", {
                p: this.getPosition()
            })
        }

        function r() {
            this.eventOutput.emit("dragend", {
                p: this.getPosition()
            })
        }

        function a() {
            this.sync.on("start", o.bind(this)), this.sync.on("update", n.bind(this)), this.sync.on("end", r.bind(this))
        }

        function h(t) {
            var i = this.options,
                e = i.projection,
                s = i.maxX,
                o = i.maxY,
                n = i.snapX,
                r = i.snapY,
                a = e & m.x ? t[0] : 0,
                h = e & m.y ? t[1] : 0;
            return n > 0 && (a -= a % n), r > 0 && (h -= h % r), a = Math.max(Math.min(a, s), -s), h = Math.max(Math.min(h, o), -o), [a, h]
        }

        var u = t("famous/Matrix"),
            p = t("famous-sync/MouseSync"),
            c = t("famous-sync/TouchSync"),
            l = t("famous-sync/GenericSync"),
            f = t("famous/Transitionable"),
            d = t("famous/EventHandler"),
            m = {
                x: 1,
                y: 2
            };
        s.DEFAULT_OPTIONS = {
            projection: m.x | m.y,
            scale: 1,
            maxX: 1 / 0,
            maxY: 1 / 0,
            snapX: 0,
            snapY: 0,
            transition: {
                duration: 0
            }
        }, s.prototype.setOptions = function (t) {
            var i = this.options;
            if (void 0 !== t.projection) {
                var e = t.projection;
                this.options.projection = 0, ["x", "y"].forEach(function (t) {
                    -1 != e.indexOf(t) && (i.projection |= m[t])
                })
            }
            void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.maxX && (i.maxX = t.maxX), void 0 !== t.maxY && (i.maxY = t.maxY), void 0 !== t.snapX && (i.snapX = t.snapX), void 0 !== t.snapY && (i.snapY = t.snapY), void 0 !== t.transition && (i.transition = t.transition)
        }, s.prototype.getPosition = function () {
            return this._positionState.get()
        }, s.prototype.setPosition = function (t, i, e) {
            this._positionState.isActive() && this._positionState.halt(), this._positionState.set(t, i, e)
        }, s.prototype.activate = function () {
            this._active = !0
        }, s.prototype.deactivate = function () {
            this._active = !1
        }, s.prototype.toggle = function () {
            this._active = !this._active
        }, s.prototype.render = function (t) {
            var i = this.getPosition();
            return {
                transform: u.translate(i[0], i[1]),
                target: t
            }
        }, e.exports = s
    }
); 