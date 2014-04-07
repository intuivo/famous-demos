define(
	"famous-physics/constraints/Wall", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/constraints/Constraint", 
		"../math/Vector", 
		"famous/EventHandler"
	], function (t, i, e) 
	{
        function s(t) {
            this.opts = {
                restitution: .7,
                k: 0,
                n: new n,
                d: 0,
                onContact: s.ON_CONTACT.REFLECT
            }, t && this.setOpts(t), this.diff = new n, this.impulse = new n, this.slop = -1, this.eventHandler = new r, r.setOutputHandler(this, this.eventHandler)
        }

        var o = t("famous-physics/constraints/Constraint"),
            n = t("../math/Vector"),
            r = t("famous/EventHandler");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.ON_CONTACT = {
            REFLECT: 0,
            WRAP: 1,
            ABSORB: 2
        }, s.prototype.setOpts = function (t) {
            void 0 !== t.restitution && (this.opts.restitution = t.restitution), void 0 !== t.k && (this.opts.k = t.k), void 0 !== t.d && (this.opts.d = t.d), void 0 !== t.onContact && (this.opts.onContact = t.onContact), void 0 !== t.n && this.opts.n.set(t.n)
        }, s.prototype.getNormalVelocity = function (t) {
            var i = this.opts.n;
            return t.dot(i)
        }, s.prototype.getDistance = function (t) {
            var i = this.opts.n,
                e = this.opts.d;
            return t.dot(i) + e
        }, s.prototype.onEnter = function (t, i, e) {
            var o = t.p,
                n = t.v,
                r = t.m,
                a = this.opts.n,
                h = this.opts.onContact,
                u = this.opts.restitution,
                p = this.impulse,
                c = this.opts.k,
                l = 0,
                f = {
                    particle: t,
                    wall: this,
                    overlap: i
                };
            switch (this.eventHandler.emit("enter", f), h) {
            case s.ON_CONTACT.REFLECT:
                var d = i < this.slop ? -((1 + u) * a.dot(n) + c / e * (i - this.slop)) / (r * e + l) : -((1 + u) * a.dot(n)) / (r * e + l);
                p.set(a.mult(e * d)), t.applyImpulse(p), o.add(a.mult(-i), o);
                break;
            case s.ON_CONTACT.ABSORB:
                var d = a.dot(n) / (r * e + l);
                p.set(a.mult(e * d)), t.applyImpulse(p), o.add(a.mult(-i), o), n.clear();
                break;
            case s.ON_CONTACT.WRAP:
                i < -t.r && this.eventHandler.emit("wrap", f)
            }
        }, s.prototype.onExit = function (t, i) {
            var e = this.opts.onContact,
                o = t.p,
                n = this.opts.n;
            e == s.ON_CONTACT.REFLECT ? o.add(n.mult(-i), o) : e == s.ON_CONTACT.WRAP || e == s.ON_CONTACT.ABSORB, this.eventHandler.emit("exit", {
                particle: t,
                wall: this,
                overlap: i
            })
        }, s.prototype.applyConstraint = function (t, i, e) {
            for (var s = this.opts.n, o = 0; o < t.length; o++) {
                var n = t[o],
                    r = n.p,
                    a = n.v,
                    h = n.r || 0,
                    u = this.getDistance(r.add(s.mult(-h))),
                    p = this.getNormalVelocity(a);
                0 > u && (0 > p ? this.onEnter(n, u, e) : this.onExit(n, u, e))
            }
        }, e.exports = s
    }
);