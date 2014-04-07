define(
	"famous-physics/constraints/Walls", 
	[
		"require", 
		"exports", 
		"module", 
		"famous-physics/constraints/Constraint", 
		"famous-physics/math/Vector", 
		"famous-physics/constraints/Wall"
	], 
	function (t, i, e) 
	{
        function s(t) {
            this.opts = {
                sides: [s.SIDES.LEFT, s.SIDES.RIGHT, s.SIDES.TOP, s.SIDES.BOTTOM],
                size: [window.innerWidth, window.innerHeight, 0],
                origin: [.5, .5, .5],
                k: 0,
                restitution: .5,
                onContact: s.ON_CONTACT.REFLECT
            }, this.setSize(this.opts.size, this.opts.origin), this.setOptsForEach({
                restitution: this.opts.restitution,
                k: this.opts.k
            }), t && this.setOpts(t)
        }

        var o = t("famous-physics/constraints/Constraint"),
            n = t("famous-physics/math/Vector"),
            r = t("famous-physics/constraints/Wall");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.SIDES = {
            LEFT: new r({
                n: new n(1, 0, 0)
            }),
            RIGHT: new r({
                n: new n(-1, 0, 0)
            }),
            TOP: new r({
                n: new n(0, 1, 0)
            }),
            BOTTOM: new r({
                n: new n(0, -1, 0)
            }),
            FRONT: new r({
                n: new n(0, 0, 1)
            }),
            BACK: new r({
                n: new n(0, 0, -1)
            })
        }, s.ON_CONTACT = r.ON_CONTACT, s.prototype.setOpts = function (t) {
            var i = !1;
            void 0 !== t.restitution && this.setOptsForEach({
                restitution: t.restitution
            }), void 0 !== t.k && this.setOptsForEach({
                k: t.k
            }), void 0 !== t.size && (this.opts.size = t.size, i = !0), void 0 !== t.sides && (this.opts.sides = t.sides), void 0 !== t.onContact && (this.opts.onContact = t.onContact, this.setOnContact(t.onContact)), void 0 !== t.origin && (this.opts.origin = t.origin, i = !0), i && this.setSize(this.opts.size, this.opts.origin)
        }, s.prototype.setSize = function (t, i) {
            i = i || this.opts.origin, i.length < 3 && (i[2] = .5), s.SIDES.LEFT.setOpts({
                d: t[0] * i[0]
            }), s.SIDES.TOP.setOpts({
                d: t[1] * i[1]
            }), s.SIDES.FRONT.setOpts({
                d: t[2] * i[2]
            }), s.SIDES.RIGHT.setOpts({
                d: t[0] * (1 - i[0])
            }), s.SIDES.BOTTOM.setOpts({
                d: t[1] * (1 - i[1])
            }), s.SIDES.BACK.setOpts({
                d: t[2] * (1 - i[2])
            }), this.opts.size = t, this.opts.origin = i
        }, s.prototype.setOptsForEach = function (t) {
            this.forEachWall(function (i) {
                i.setOpts(t)
            });
            for (var i in t) this.opts[i] = t[i]
        }, s.prototype.setOnContact = function (t) {
            switch (this.forEachWall(function (i) {
                i.setOpts({
                    onContact: t
                })
            }), t) {
            case s.ON_CONTACT.REFLECT:
                break;
            case s.ON_CONTACT.WRAP:
                this.forEachWall(function (i) {
                    i.setOpts({
                        onContact: t
                    }), i.on("wrap", function (t) {
                        var e = t.particle,
                            o = i.opts.n,
                            n = i.opts.d;
                        switch (i) {
                        case s.SIDES.RIGHT:
                            var r = s.SIDES.LEFT.opts.d;
                            break;
                        case s.SIDES.LEFT:
                            var r = s.SIDES.TOP.opts.d;
                            break;
                        case s.SIDES.TOP:
                            var r = s.SIDES.BOTTOM.opts.d;
                            break;
                        case s.SIDES.BOTTOM:
                            var r = s.SIDES.TOP.opts.d
                        }
                        e.p.add(o.mult(n + r), e.p)
                    })
                });
                break;
            case s.ON_CONTACT.ABSORB:
            }
        }, s.prototype.applyConstraint = function (t, i, e) {
            this.forEachWall(function (s) {
                s.applyConstraint(t, i, e)
            })
        }, s.prototype.forEachWall = function (t) {
            for (var i = 0; i < this.opts.sides.length; i++) t(this.opts.sides[i])
        }, s.prototype.rotateZ = function (t) {
            this.forEachWall(function (i) {
                var e = i.opts.n;
                e.rotateZ(t, e)
            })
        }, e.exports = s
    }
); 