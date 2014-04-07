define(
	"famous-views/Scrollview", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Utility", 
		"famous-physics/PhysicsEngine", 
		"famous-physics/bodies/Particle", 
		"famous-physics/forces/Drag", 
		"famous-physics/forces/Spring", 
		"famous/Matrix", 
		"famous/EventHandler", 
		"famous-sync/GenericSync", 
		"famous/ViewSequence", 
		"famous/Group", 
		"famous/Entity"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.options = {
                direction: b.Direction.Y,
                rails: !0,
                defaultItemSize: [100, 100],
                itemSpacing: 0,
                clipSize: void 0,
                margin: void 0,
                friction: .001,
                drag: 1e-4,
                edgeGrip: .5,
                edgePeriod: 300,
                edgeDamp: 1,
                paginated: !1,
                pagePeriod: 500,
                pageDamp: .8,
                pageStopSpeed: 1 / 0,
                pageSwitchSpeed: 1,
                speedLimit: 10
            }, this.node = null, this.physicsEngine = new x, this.particle = new w, this.physicsEngine.addBody(this.particle), this.spring = new T({
                anchor: [0, 0, 0]
            }), this.drag = new z({
                forceFunction: z.FORCE_FUNCTIONS.QUADRATIC
            }), this.friction = new z({
                forceFunction: z.FORCE_FUNCTIONS.LINEAR
            }), this.sync = new M(function () {
                return -this.getPosition()
            }.bind(this), {
                direction: this.options.direction == b.Direction.X ? M.DIRECTION_X : M.DIRECTION_Y
            }), this.eventInput = new _, this.eventOutput = new _, this.sync.pipe(this.eventInput), this.sync.pipe(this.eventOutput), _.setOutputHandler(this, this.eventOutput), this._outputFunction = void 0, this._masterOutputFunction = void 0, this.setOutputFunction(), this.touchCount = 0, this._springAttached = !1, this._onEdge = 0, this._springPosition = 0, this._touchVelocity = void 0, this._earlyEnd = !1, this._masterOffset = 0, this._lastFrameNode = void 0, t ? this.setOptions(t) : this.setOptions({}), a.call(this), this.group = new P, this.group.link({
                render: S.bind(this)
            }), this._entityId = k.register(this), this._contextSize = [window.innerWidth, window.innerHeight], this._offsets = {}
        }

        function o(t) {
            this.touchCount = t.count, void 0 === t.count && (this.touchCount = 1), u.call(this), this.setVelocity(0), this._touchVelocity = 0, this._earlyEnd = !1
        }

        function n(t) {
            var i = -t.p,
                e = -t.v;
            this._onEdge && t.slip && (0 > e && this._onEdge < 0 || e > 0 && this._onEdge > 0 ? this._earlyEnd || (r.call(this, t), this._earlyEnd = !0) : this._earlyEnd && Math.abs(e) > Math.abs(this.particle.getVel()[0]) && o.call(this, t)), this._earlyEnd || (this._touchVelocity = e, this.setPosition(i))
        }

        function r(t) {
            if (this.touchCount = t.count || 0, !this.touchCount) {
                u.call(this), this._onEdge && (this._springAttached = !0), h.call(this);
                var i = -t.v,
                    e = this.options.speedLimit;
                t.slip && (e *= this.options.edgeGrip), -e > i ? i = -e : i > e && (i = e), this.setVelocity(i), this._touchVelocity = void 0
            }
        }

        function a() {
            this.eventInput.on("start", o.bind(this)), this.eventInput.on("update", n.bind(this)), this.eventInput.on("end", r.bind(this))
        }

        function h() {
            this._springAttached ? this.physicsEngine.attach([this.spring], this.particle) : this.physicsEngine.attach([this.drag, this.friction], this.particle)
        }

        function u() {
            this._springAttached = !1, this.physicsEngine.detachAll()
        }

        function p(t) {
            return t || (t = this.options.defaultItemSize), t[this.options.direction == b.Direction.X ? 0 : 1]
        }

        function c(t) {
            this._springPosition += t, this.setPosition(this.getPosition() + t), this.spring.setOpts({
                anchor: [this._springPosition, 0, 0]
            })
        }

        function l() {
            for (var t = !1; !t && this.getPosition() < 0;) {
                var i = this.node.getPrevious ? this.node.getPrevious() : void 0;
                if (i) {
                    var e = i.getSize ? i.getSize() : this.options.defaultItemSize,
                        s = p.call(this, e) + this.options.itemSpacing;
                    c.call(this, s), this._masterOffset -= s, this.node = i
                } else t = !0
            }
            for (var o = this.node && this.node.getSize ? this.node.getSize() : this.options.defaultItemSize; !t && this.getPosition() >= p.call(this, o) + this.options.itemSpacing;) {
                var n = this.node.getNext ? this.node.getNext() : void 0;
                if (n) {
                    var s = p.call(this, o) + this.options.itemSpacing;
                    c.call(this, -s), this._masterOffset += s, this.node = n, o = this.node.getSize ? this.node.getSize() : this.options.defaultItemSize
                } else t = !0
            }
            Math.abs(this._masterOffset) > v.call(this) + this.options.margin && (this._masterOffset = 0)
        }

        function f(t) {
            !this._onEdge && t ? (this.sync.setOptions({
                scale: this.options.edgeGrip
            }), this.touchCount || this._springAttached || (this._springAttached = !0, this.physicsEngine.attach([this.spring], this.particle))) : this._onEdge && !t && (this.sync.setOptions({
                scale: 1
            }), this._springAttached && (u.call(this), h.call(this))), this._onEdge = t
        }

        function d() {
            if (0 == this.touchCount && !this._springAttached && !this._onEdge && this.options.paginated && Math.abs(this.getVelocity()) < this.options.pageStopSpeed) {
                var t = this.node.getSize ? this.node.getSize() : this.options.defaultItemSize,
                    i = Math.abs(this.getVelocity()) > this.options.pageSwitchSpeed,
                    e = this.getVelocity() > 0,
                    s = this.getPosition() > .5 * p.call(this, t);
                i && e || !i && s ? this.goToNextPage() : m.call(this)
            }
        }

        function m() {
            y.call(this, 0, {
                period: this.options.pagePeriod,
                damp: this.options.pageDamp
            }), this._springAttached || (this._springAttached = !0, this.physicsEngine.attach([this.spring], this.particle))
        }

        function y(t, i) {
            i || (i = {
                period: this.options.edgePeriod,
                damp: this.options.edgeDamp
            }), this._springPosition = t, this.spring.setOpts({
                anchor: [this._springPosition, 0, 0],
                period: i.period,
                dampingRatio: i.damp
            })
        }

        function g(t, i, e) {
            var s = t.getSize ? t.getSize() : this.options.defaultItemSize;
            s || (s = this.options.defaultItemSize);
            var o = this._outputFunction(i);
            return e.push({
                transform: o,
                target: t.render()
            }), s[this.options.direction == b.Direction.X ? 0 : 1]
        }

        function v() {
            return this.options.clipSize ? this.options.clipSize : p.call(this, this._contextSize)
        }

        function S() {
            var t = {};
            if (this.node) {
                var i = this.getPosition(),
                    e = [],
                    s = 0,
                    o = 0,
                    n = this.node;
                for (t[n] = 0; n && o - i < v.call(this) + this.options.margin;) o += g.call(this, n, o + this._masterOffset, e) + this.options.itemSpacing, n = n.getNext ? n.getNext() : void 0, t[n] = o, !n && o - i - this.options.itemSpacing <= v.call(this) && (this._onEdge || y.call(this, o - v.call(this) - this.options.itemSpacing), s = 1);
                if (n = this.node && this.node.getPrevious ? this.node.getPrevious() : void 0, o = 0, n) {
                    var r = n.getSize ? n.getSize() : this.options.defaultItemSize;
                    o -= p.call(this, r) + this.options.itemSpacing
                } else 0 >= i && (this._onEdge || y.call(this, 0), s = -1);
                for (; n && o - i > -(v.call(this) + this.options.margin);)
                    if (t[n] = o, g.call(this, n, o + this._masterOffset, e), n = n.getPrevious ? n.getPrevious() : void 0) {
                        var r = n.getSize ? n.getSize() : this.options.defaultItemSize;
                        o -= p.call(this, r) + this.options.itemSpacing
                    }
                return this._offsets = t, f.call(this, s), d.call(this), this.options.paginated && this._lastFrameNode !== this.node && (this.eventOutput.emit("pageChange"), this._lastFrameNode = this.node), e
            }
        }

        var b = t("famous/Utility"),
            x = t("famous-physics/PhysicsEngine"),
            w = t("famous-physics/bodies/Particle"),
            z = t("famous-physics/forces/Drag"),
            T = t("famous-physics/forces/Spring"),
            O = t("famous/Matrix"),
            _ = t("famous/EventHandler"),
            M = t("famous-sync/GenericSync"),
            C = t("famous/ViewSequence"),
            P = t("famous/Group"),
            k = t("famous/Entity");
        s.prototype.emit = function (t, i) {
            "update" == t || "start" == t || "end" == t ? this.eventInput.emit(t, i) : this.sync.emit(t, i)
        }, s.prototype.getPosition = function (t) {
            var i = this.particle.getPos()[0];
            if (t) {
                var e = this._offsets[t];
                return void 0 !== e ? i - e : void 0
            }
            return i
        }, s.prototype.setPosition = function (t) {
            this.particle.setPos([t, 0, 0])
        }, s.prototype.getVelocity = function () {
            return this.touchCount ? this._touchVelocity : this.particle.getVel()[0]
        }, s.prototype.setVelocity = function (t) {
            this.particle.setVel([t, 0, 0])
        }, s.prototype.getOptions = function () {
            return this.options
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction, "x" === this.options.direction ? this.options.direction = b.Direction.X : "y" === this.options.direction && (this.options.direction = b.Direction.Y)), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.defaultItemSize && (this.options.defaultItemSize = t.defaultItemSize), void 0 !== t.itemSpacing && (this.options.itemSpacing = t.itemSpacing), void 0 !== t.clipSize && (t.clipSize !== this.options.clipSize && (this._onEdge = 0), this.options.clipSize = t.clipSize), void 0 !== t.margin && (this.options.margin = t.margin), void 0 !== t.drag && (this.options.drag = t.drag), void 0 !== t.friction && (this.options.friction = t.friction), void 0 !== t.edgeGrip && (this.options.edgeGrip = t.edgeGrip), void 0 !== t.edgePeriod && (this.options.edgePeriod = t.edgePeriod), void 0 !== t.edgeDamp && (this.options.edgeDamp = t.edgeDamp), void 0 !== t.paginated && (this.options.paginated = t.paginated), void 0 !== t.pageStopSpeed && (this.options.pageStopSpeed = t.pageStopSpeed), void 0 !== t.pageSwitchSpeed && (this.options.pageSwitchSpeed = t.pageSwitchSpeed), void 0 !== t.pagePeriod && (this.options.pagePeriod = t.pagePeriod), void 0 !== t.pageDamp && (this.options.pageDamp = t.pageDamp), void 0 !== t.speedLimit && (this.options.speedLimit = t.speedLimit), void 0 === this.options.margin && (this.options.margin = .5 * Math.max(window.innerWidth, window.innerHeight)), this.drag.setOpts({
                strength: this.options.drag
            }), this.friction.setOpts({
                strength: this.options.friction
            }), this.spring.setOpts({
                period: this.options.edgePeriod,
                dampingRatio: this.options.edgeDamp
            }), this.sync.setOptions({
                rails: this.options.rails,
                direction: this.options.direction == b.Direction.X ? M.DIRECTION_X : M.DIRECTION_Y
            })
        }, s.prototype.setOutputFunction = function (t, i) {
            t || (t = function (t) {
                return this.options.direction == b.Direction.X ? O.translate(t, 0) : O.translate(0, t)
            }.bind(this), i = t), this._outputFunction = t, this._masterOutputFunction = i ? i : function (i) {
                return O.inverse(t(-i))
            }
        }, s.prototype.goToPreviousPage = function () {
            if (this.node) {
                var t = this.node.getPrevious ? this.node.getPrevious() : void 0;
                if (t) {
                    var i = p.call(this, this.node.getSize()) + this.options.itemSpacing;
                    this.setPosition(this.getPosition() + i), this.node = t;
                    for (var e in this._offsets) this._offsets[e] += i;
                    m.call(this)
                }
                return t
            }
        }, s.prototype.goToNextPage = function () {
            if (this.node) {
                var t = this.node.getNext ? this.node.getNext() : void 0;
                if (t) {
                    var i = p.call(this, this.node.getSize()) + this.options.itemSpacing;
                    this.setPosition(this.getPosition() - i), this.node = t;
                    for (var e in this._offsets) this._offsets[e] -= i;
                    m.call(this)
                }
                return t
            }
        }, s.prototype.getCurrentNode = function () {
            return this.node
        }, s.prototype.sequenceFrom = function (t) {
            t instanceof Array && (t = new C(t)), this.node = t, this._lastFrameNode = t
        }, s.prototype.getSize = function () {
            return this.options.direction == b.Direction.X ? [v.call(this), void 0] : [void 0, v.call(this)]
        }, s.prototype.render = function () {
            return this.node ? (this.physicsEngine.step(), this._entityId) : void 0
        }, s.prototype.commit = function (t, i, e, s, o) {
            this.options.clipSize || o[0] == this._contextSize[0] && o[1] == this._contextSize[1] || (this._onEdge = 0, this._contextSize = o), l.call(this);
            var n = this.getPosition(),
                r = this._masterOutputFunction(-(n + this._masterOffset));
            return {
                transform: O.moveThen([-s[0] * o[0], -s[1] * o[1], 0], i),
                opacity: e,
                origin: s,
                size: o,
                target: {
                    transform: r,
                    origin: s,
                    target: this.group.render()
                }
            }
        }, e.exports = s
    }
); 