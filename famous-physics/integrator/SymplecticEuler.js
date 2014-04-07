define(
    "famous-physics/integrator/SymplecticEuler", 
    [
        "require", 
        "exports", 
        "module"
    ], 
    function (t, i, e) 
    {
        function s(t) {
            this.opts = {
                vCap: 1 / 0,
                aCap: 1 / 0
            }, t && this.setOpts(t)
        }

        s.prototype.integrateVelocity = function (t, i) {
            var e = t.v,
                s = t.a;
            s.isZero() || (s.cap(this.opts.aCap, s), e.add(s.mult(i), e))
        }, s.prototype.integratePosition = function (t, i) {
            var e = t.p,
                s = t.v;
            s.isZero() || (s.cap(this.opts.vCap, s), e.add(s.mult(i), e))
        }, s.prototype.integrateAngularMomentum = function (t, i) {
            var e = t.L,
                s = t.t;
            s.isZero() || (e.add(s.mult(i), e), s.clear())
        }, s.prototype.integrateOrientation = function (t, i) {
            var e = t.q,
                s = t.w;
            s.isZero() || (e.normalize(), e.add(e.multiply(s).scalarMult(.5 * i), e))
        }, s.prototype.setOpts = function (t) {
            for (var i in t) this.opts[i] = t[i]
        }, e.exports = s
    }
);