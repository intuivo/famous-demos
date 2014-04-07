define(
	"famous-kinematics/EnergyHelper", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            this.x = 0, this.v = 0, this.agents = [], this.featureSize = e ? e : .5, this.jitter = Math.min(1e-4, .1 * this.featureSize), this.minStepTime = 1, this.lastUpdateTime = (new Date).getTime(), this.atRest = !1, this.set(t, i)
        }
        s.drag = function (t) {
            return function (i, e, s) {
                return -t * e * e * s
            }
        }, s.friction = function (t) {
            return function (i, e, s) {
                return -t * Math.abs(e) * s
            }
        }, s.spring = function (t, i, e) {
            i || (i = 0), e || (e = 0);
            var s = 2 * e * Math.sqrt(i);
            return function (e, o, n) {
                var r = e - t,
                    a = r + o * n,
                    h = .5 * i * r * r,
                    u = .5 * i * a * a,
                    p = 0 > r / a ? h : u - h,
                    c = s * o * o * n;
                return -p - c
            }
        }, s.springFENE = function (t, i, e, o) {
            i || (i = 0), e || (e = 0), o || (o = 0);
            var n = 2 * e * Math.sqrt(i),
                r = s.spring(t, i, e),
                a = !1;
            return function (e, s, h) {
                var u = e - t,
                    p = u + s * h;
                if (Math.abs(s) < 1e-4 && Math.abs(p) < o && (a = !1), a || Math.abs(u) >= o || Math.abs(p) >= o) return a = !0, r(e, s, h);
                var c = -.5 * i * o * o * Math.log(o * o - u * u),
                    l = -.5 * i * o * o * Math.log(o * o - p * p),
                    f = 0 > u / p ? -c : l - c,
                    d = n * s * s * h;
                return -f - d
            }
        }, s.magnet = function (t, i) {
            var e = .5;
            return i || (i = 0),
            function (s, o, n) {
                var r = s - t,
                    a = r + o * n;
                if (Math.abs(r) < e && Math.abs(a) < e) return -.5 * o * o * n;
                var h = -i / Math.max(Math.abs(r), e),
                    u = -i / Math.max(Math.abs(a), e),
                    p = u - h;
                return -p
            }
        }, s.prototype = {
            _updateReset: function () {
                this.lastUpdateTime = (new Date).getTime(), this.atRest = !1
            },
            set: function (t, i) {
                "number" == typeof t && this.setPos(t), "number" == typeof i && this.setVelo(i)
            },
            setPos: function (t) {
                this.x = t, this._updateReset()
            },
            setVelo: function (t) {
                this.v = t, this._updateReset()
            },
            addAgent: function (t) {
                "function" != typeof t && console.error("Invalid agent"), this.agents.indexOf(t) < 0 && (this.agents.push(t), this.atRest = !1)
            },
            removeAgent: function (t) {
                var i = this.agents.indexOf(t);
                i >= 0 && (this.agents.splice(i, 1), this.atRest = !1)
            },
            setAgents: function (t) {
                this.agents = t.slice(0), this.atRest = !1
            },
            getPos: function () {
                return this.update(), this.x
            },
            getVelo: function () {
                return this.update(), this.v
            },
            update: function (t) {
                for (t || (t = (new Date).getTime()); this.lastUpdateTime < t;) {
                    var i = t - this.lastUpdateTime;
                    this.v && (i = Math.min(i, this.featureSize / Math.abs(this.v))), i = Math.max(i, this.minStepTime), this._step(i)
                }
            },
            _step: function (t) {
                function i(t, i, s) {
                    for (var o = e.agents, n = 0, r = 0; r < o.length; r++) n += o[r](t, i, s);
                    return n
                }
                if (this.lastUpdateTime += t, !this.atRest) {
                    var e = this,
                        s = 0,
                        o = 0;
                    if (Math.abs(this.v) > this.jitter) s = i(this.x, this.v, t), o = this.v > 0 ? 1 : -1;
                    else {
                        var n = i(this.x, this.jitter, t),
                            r = i(this.x, -this.jitter, t);
                        s = Math.max(n, r), o = n > r ? 1 : -1, 0 >= n && 0 >= r && (this.atRest = !0)
                    }
                    var a = this.v,
                        h = .5 * a * a,
                        u = h + s;
                    if (0 > u) this.x += this.v * t * (u / s), this.v = 0;
                    else {
                        var p = o * Math.sqrt(2 * Math.abs(u));
                        this.x += this.v * t, this.v = p
                    }
                    this.atRest && (this.x = Math.round(this.x / this.featureSize) * this.featureSize, this.v = 0)
                }
            }
        }, e.exports = s
    }
); 