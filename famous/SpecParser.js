define(
    "famous/SpecParser", 
    [
        "require", 
        "exports", 
        "module", 
        "./Matrix"
    ], 
    function (t, i, e) 
    {
        function s() {
            this.reset()
        }

        function o(t, i) {
            return [t[0] * i[0] + t[1] * i[4] + t[2] * i[8], t[0] * i[1] + t[1] * i[5] + t[2] * i[9], t[0] * i[2] + t[1] * i[6] + t[2] * i[10]]
        }

        var n = t("./Matrix");
        s.parse = function (t, i) {
            var e = new s,
                o = e.parse(t);
            return i ? (i(o), void 0) : o
        }, s.prototype.parse = function (t) {
            return this.reset(), this._parseSpec(t, n.identity, 1, [0, 0], void 0, n.identity), this.result
        }, s.prototype.reset = function () {
            this.result = {}
        }, s.prototype._parseSpec = function (t, i, e, s, r, a) {
            if (void 0 == t);
            else if ("number" == typeof t) {
                var h = t,
                    u = r ? [s[0] * r[0], s[1] * r[1], 0] : [0, 0, 0];
                i || (i = n.identity), this.result[h] = [n.move(i, o(u, a)), e, s, r]
            } else if (t instanceof Array)
                for (var p = 0; p < t.length; p++) this._parseSpec(t[p], i, e, s, r, a);
            else if (void 0 !== t.target) {
                var c = t.target,
                    l = i,
                    f = e,
                    d = s,
                    m = r;
                void 0 !== t.opacity && (f = e * t.opacity), t.transform && (l = n.multiply(t.transform, i)), t.origin && (d = t.origin), t.size && (m = t.size, void 0 === m[0] && (m[0] = r[0]), void 0 === m[1] && (m[1] = r[1]), r || (r = m), d || (d = [0, 0]), l || (l = n.identity), l = n.move(l, o([d[0] * r[0], d[1] * r[1], 0], a)), l = n.moveThen([-d[0] * m[0], -d[1] * m[1], 0], l), a = i ? i : n.identity, d = [0, 0]), this._parseSpec(c, l, f, d, m, a)
            }
        }, 
        e.exports = s
    }
);