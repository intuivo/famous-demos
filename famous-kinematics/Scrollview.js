define(
	"famous-kinematics/Scrollview", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Matrix", 
		"./EnergyHelper"
	], 
	function (t, e, s) 
	{
        function o(t, i) {
            t || (t = "y"), this.dir = t, this.opts = i, this.opts || (this.opts = {}), this.opts.edgeGrip || (this.opts.edgeGrip = .5), this.opts.linkVelocityTimeout || (this.opts.linkVelocityTimeout = 50), this.opts.friction || (this.opts.friction = 5e-5), this.opts.drag || (this.opts.drag = .001), this.opts.grease || (this.opts.grease = 1), this.opts.edgeFirmness || (this.opts.edgeFirmness = 2e-4), this.opts.edgeDamp || (this.opts.edgeDamp = 1), this.opts.speedLimit || (this.opts.speedLimit = 4), this.opts.edgeMax || (this.opts.edgeMax = 0), this.opts.paginated || (this.opts.paginated = !1), this.opts.pageChangeThreshold || (this.opts.pageChangeThreshold = .1), this.opts.pageThrowInterval || (this.opts.pageThrowInterval = 300), this.opts.pageEngagementSpeed || (this.opts.pageEngagementSpeed = 1), this.opts.pageFirmness || (this.opts.pageFirmness = 2e-4), this.opts.pageDamp || (this.opts.pageDamp = 1), this.opts.clipSize || (this.opts.clipSize = "x" == this.dir ? window.innerWidth : window.innerHeight), this.opts.startPos || (this.opts.startPos = 0), this.opts.endPos || (this.opts.endPos = 0), this.opts.autoSize || (this.opts.autoSize = !1), this.opts.strongRails || (this.opts.strongRails = !1), this.opts.edgeMax === !0 && (this.opts.edgeMax = this.opts.clipSize), this.opts.viewSize && (this.opts.endPos = this.opts.startPos + this.opts.viewSize - this.opts.clipSize), this.bindings = {}, this.energyHelper = new r({
                position: 0
            }), this.controller = this._buildController(), this.pullDownReady = !0, this._linkAttached = !1, this._linkAllow = [], this._linkCounter = 0, this.frictionAgent = r.friction(this.opts.friction), this.dragAgent = r.drag(this.opts.drag), this.setStartPos(this.opts.startPos, !0), this.setEndPos(this.opts.endPos, !0), this.externalAgents = [], this._currPage = 0, this._targetPage = 0, this._lastPageTime = 0, this.setPageStops(), this.disabled = !1
        }
        var n = t("famous/Matrix"),
            r = t("./EnergyHelper");
        o.prototype = {
            on: function (t, i) {
                this.bindings[t] || (this.bindings[t] = []), i in this.bindings[t] || this.bindings[t].push(i)
            },
            unbind: function (t, i) {
                if (this.bindings[t]) {
                    for (var e = 0; this.bindings[t][e] != i;) e++;
                    this.bindings[t].splice(e, 1)
                }
            },
            emit: function (t, i) {
                if (this.controller.emit(t, i), this.bindings[t])
                    for (var e = 0; e < this.bindings[t].length; e++) this.bindings[t][e](i)
            },
            render: function (t) {
                if (this.opts.autoSize) {
                    var i = 0;
                    if ("object" == typeof t) {
                        if ("function" == typeof t.getSize) {
                            var e = t.getSize();
                            i = "x" == this.dir ? e[0] : e[1]
                        }
                        "object" == typeof t.size && (i = "x" == this.dir ? t.size[0] : t.size[1])
                    }
                    var s = Math.max(i - this.getClipSize(), 0);
                    this.setEndPos(this.getStartPos() + s)
                }
                var o = this.energyHelper.getPos(),
                    a = this.energyHelper.getVelo();
                if (this.opts.paginated) {
                    if (this._currPage != this._targetPage) {
                        if (this.energyHelper.removeAgent(this.pageAgent), this._targetPage >= 0) {
                            var h = Math.min(Math.max(this.getPageStops()[this._targetPage], this.getStartPos()), this.getEndPos());
                            this.pageAgent = r.spring(h, this.opts.pageFirmness, this.opts.pageDamp), this.energyHelper.addAgent(this.pageAgent)
                        }
                        this._currPage = this._targetPage, this.emit("pageChange", this._currPage)
                    }
                    this._targetPage < 0 && Math.abs(a) < this.opts.pageEngagementSpeed && (this._targetPage = this.closestPageTo(o)), (this.pageAgent && !this._linkAttached || this._linkAllow.indexOf("page") >= 0) && this.energyHelper.addAgent(this.pageAgent)
                }(!this._linkAttached || this._linkAllow.indexOf("edge") >= 0) && (o < this.getStartPos() || o > this.getEndPos()) && (this.edgeSpringActive || (this.energyHelper.setAgents([]), this.edgeSpringActive = !0), this.startSpringAgent && o < this.getStartPos() && 0 >= a && (this.energyHelper.addAgent(this.startSpringAgent), this.pullDownReady && (this.emit("pullDown"), this.pullDownReady = !1)), this.endSpringAgent && o > this.getEndPos() && a >= 0 && this.energyHelper.addAgent(this.endSpringAgent)), this.emit("render", {
                    position: o,
                    velocity: a
                }), 0 == o && (this.pullDownReady = !0);
                var u = "x" == this.dir ? n.translate(-o, 0) : n.translate(0, -o);
                return {
                    transform: u,
                    target: t,
                    group: !0
                }
            },
            _buildController: function () {
                function t(t) {
                    if (!s.disabled) {
                        s.attachLink(), (new Date).getTime();
                        for (var i = 0; i < t.targetTouches.length; i++) {
                            var e = t.targetTouches[i];
                            o[e.identifier] = {
                                x: e.pageX,
                                y: e.pageY
                            }
                        }
                        n = void 0
                    }
                }

                function i(t) {
                    for (var i = 0, e = 0; e < t.changedTouches.length; e++) {
                        var r = t.changedTouches[e];
                        if (o.hasOwnProperty(r.identifier)) {
                            var a = o[r.identifier],
                                h = r.pageX - a.x,
                                u = r.pageY - a.y,
                                p = 0;
                            p = "x" == s.getDir() ? Math.abs(h) > Math.abs(u) ? h : 0 : Math.abs(u) > Math.abs(h) ? u : 0, s.opts.strongRails && (n || (Math.abs(h) > Math.abs(u) && (n = "x"), Math.abs(u) > Math.abs(h) && (n = "y")), n != s.getDir() && (p = 0)), i -= p, a.x = r.pageX, a.y = r.pageY
                        }
                    }
                    s.disabled || s._strongRailLock || (i > 0 && (s.pullDownReady = !1), i && s.moveLink(i), s.emit("scrollmove"))
                }

                function e(t) {
                    for (var i = 0; i < t.changedTouches.length; i++) {
                        var e = t.changedTouches[i];
                        o.hasOwnProperty(e.identifier) && (o[e.identifier], delete o[e.identifier])
                    }
                    for (var i = 0; i < t.touches.length; i++)
                        if (o.hasOwnProperty(t.touches[i].identifier)) return;
                    s.detachLink(), s._strongRailLock = !1
                }
                var s = this,
                    o = {}, n = void 0,
                    r = {};
                return r.emit = function (s, o) {
                    "touchmove" == s ? i(o) : "touchstart" == s ? t(o) : "touchend" == s && e(o)
                }, r
            },
            disable: function () {
                this.disabled = !0
            },
            enable: function () {
                this.disabled = !1
            },
            getDir: function () {
                return this.dir
            },
            getPage: function () {
                return this._currPage
            },
            getPos: function () {
                return this.energyHelper.getPos()
            },
            getVelo: function () {
                return this.energyHelper.getVelo()
            },
            getClipSize: function () {
                return this.opts.clipSize
            },
            getViewSize: function () {
                return this.getEndPos() - this.getStartPos()
            },
            getClip: function () {
                return this.opts.clip
            },
            getStartPos: function () {
                return this.opts.startPos
            },
            setStartPos: function (t, i) {
                (i || t != this.opts.startPos) && (this.opts.startPos = t, this.energyHelper.removeAgent(this.startSpringAgent), this.startSpringAgent = t > -1 / 0 ? this.opts.edgeMax && this.opts.edgeMax < 1 / 0 ? r.springFENE(t, this.opts.edgeFirmness, this.opts.edgeDamp, this.opts.edgeMax) : r.spring(t, this.opts.edgeFirmness, this.opts.edgeDamp) : null, this.edgeSpringActive = !1)
            },
            getEndPos: function () {
                return this.opts.endPos
            },
            setEndPos: function (t, i) {
                (i || t != this.opts.endPos) && (this.opts.endPos = t, this.energyHelper.removeAgent(this.endSpringAgent), this.endSpringAgent = 1 / 0 > t ? this.opts.edgeMax && this.opts.edgeMax < 1 / 0 ? r.springFENE(t, this.opts.edgeFirmness, this.opts.edgeDamp, this.opts.edgeMax) : r.spring(t, this.opts.edgeFirmness, this.opts.edgeDamp) : null, this.edgeSpringActive = !1)
            },
            atBounds: function (t) {
                return t || (t = this.getPos()), t <= this.getStartPos() || t >= this.getEndPos()
            },
            setBounds: function (t, i) {
                this.setStartPos(t), this.setEndPos(i)
            },
            closestPageTo: function (t) {
                var e = 0,
                    s = 1 / 0;
                for (i = 0; i < this.opts.pageStops.length; i++) {
                    var o = this.opts.pageStops[i] - t;
                    Math.abs(o) < s && (e = i, s = Math.abs(o))
                }
                return e
            },
            closestPageStopTo: function (t) {
                return this.opts.pageStops[this.closestPageTo(t)]
            },
            getPageStops: function () {
                return this.opts.pageStops
            },
            setPageStops: function (t) {
                if (this.getViewSize() < 1 / 0 && !t) {
                    t = [];
                    for (var i = this.getClipSize(), e = Math.round(this.getViewSize() / i), s = 0; e > s; s++) t.push(s * i)
                }
                this.opts.pageStops = t, this.emit("pageStopsChange")
            },
            goToPage: function (t) {
                this._targetPage = t, this.nudge()
            },
            setPos: function (t) {
                this.energyHelper.setPos(t)
            },
            halt: function () {
                this.energyHelper.setVelo(0)
            },
            nudge: function () {
                if (this.edgeSpringActive = !1, this.energyHelper.setAgents([]), (!this._linkAttached || this._linkAllow.indexOf("resist") >= 0) && (this.energyHelper.addAgent(this.frictionAgent), this.energyHelper.addAgent(this.dragAgent)), !this._linkAttached || this._linkAllow.indexOf("external") >= 0)
                    for (var t = 0; t < this.externalAgents.length; t++) this.externalAgents[t] && this.energyHelper.addAgent(this.externalAgents[t]);
                if (this._linkAttached)
                    for (var t = 0; t < this._linkAgents.length; t++) this.energyHelper.addAgent(this._linkAgents[t])
            },
            attachLink: function (t, i) {
                t || (t = []), i || (i = []), this._linkAttached && this.detachLink(), t.indexOf("flow") < 0 && this.halt(), this._linkAttached = !0, this._linkAllow = t, this._linkAgents = i;
                for (var e = 0; e < this._linkAgents.length; e++) this.energyHepler.addAgent(this._linkAgents[e]);
                return this.nudge(), this._linkVelocity = 0, this._linkLastUpdate = (new Date).getTime(), ++this._linkCounter
            },
            detachLink: function (t) {
                if (t && t != this.getCurrentLink()) return 0;
                (new Date).getTime() - this._linkLastUpdate > this.opts.linkVelocityTimeout && (this._linkVelocity = 0), this._linkAttached = !1, this._linkAllow.indexOf("flow") < 0 && this.energyHelper.setVelo(this._linkVelocity * this.opts.grease), this._linkAllow = [];
                for (var i = 0; i < this._linkAgents.length; i++) this.energyHelper.removeAgent(this._linkAgents[i]);
                if (this._linkAgents = [], this.nudge(), this.opts.paginated) {
                    var e = this.closestPageTo(this.getPos());
                    Math.abs(e - this._currPage) > 1 && (this._targetPage = e), this._linkVelocity > this.opts.pageChangeThreshold ? this._targetPage++ : this._linkVelocity < -this.opts.pageChangeThreshold ? this._targetPage-- : this._targetPage = e, this._targetPage < 0 && (this._targetPage = 0), this._targetPage >= this.getPageStops().length && (this._targetPage = this.getPageStops().length - 1);
                    var s = (new Date).getTime();
                    Math.abs(this._linkVelocity) > this.opts.pageEngagementSpeed && s - this._lastPageTime < this.opts.pageThrowInterval && (this._targetPage = -1), this._lastPageTime = s
                }
                return this._linkCounter
            },
            getCurrentLink: function () {
                return this._linkAttached ? this._linkCounter : 0
            },
            moveLink: function (t) {
                var i = this.atBounds() ? this.opts.edgeGrip * t : t;
                this.setPos(this.getPos() + i);
                var e = (new Date).getTime(),
                    s = e - this._linkLastUpdate;
                this._linkLastUpdate = e, s && (this._linkVelocity = t / s), this._linkVelocity > this.opts.speedLimit ? this._linkVelocity = this.opts.speedLimit : this._linkVelocity < -this.opts.speedLimit && (this._linkVelocity = -this.opts.speedLimit)
            },
            addExternalAgent: function (t) {
                var i = this.externalAgents.push(t) - 1;
                return this.nudge(), i
            },
            removeExternalAgent: function (t) {
                delete this.externalAgents[t], this.nudge()
            }
        }, s.exports = o
    }
); 