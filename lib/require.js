var requirejs, require, define;
!function (t) {
    function i(t, i) {
        var e, s, o, n, r, a, h, u, p, c, l = i && i.split("/"),
            f = d.map,
            m = f && f["*"] || {};
        if (t && "." === t.charAt(0) && i) {
            for (l = l.slice(0, l.length - 1), t = l.concat(t.split("/")), u = 0; u < t.length; u += 1)
                if (c = t[u], "." === c) t.splice(u, 1), u -= 1;
                else if (".." === c) {
                if (1 === u && (".." === t[2] || ".." === t[0])) break;
                u > 0 && (t.splice(u - 1, 2), u -= 2)
            }
            t = t.join("/")
        }
        if ((l || m) && f) {
            for (e = t.split("/"), u = e.length; u > 0; u -= 1) {
                if (s = e.slice(0, u).join("/"), l)
                    for (p = l.length; p > 0; p -= 1)
                        if (o = f[l.slice(0, p).join("/")], o && (o = o[s])) {
                            n = o, r = u;
                            break
                        }
                if (n) break;
                !a && m && m[s] && (a = m[s], h = u)
            }!n && a && (n = a, r = h), n && (e.splice(0, r, n), t = e.join("/"))
        }
        return t
    }

    function e(i, e) {
        return function () {
            return u.apply(t, y.call(arguments, 0).concat([i, e]))
        }
    }

    function s(t) {
        return function (e) {
            return i(e, t)
        }
    }

    function o(t) {
        return function (i) {
            l[t] = i
        }
    }

    function n(i) {
        if (f.hasOwnProperty(i)) {
            var e = f[i];
            delete f[i], m[i] = !0, h.apply(t, e)
        }
        if (!l.hasOwnProperty(i) && !m.hasOwnProperty(i)) throw new Error("No " + i);
        return l[i]
    }

    function r(t) {
        var i, e = t ? t.indexOf("!") : -1;
        return e > -1 && (i = t.substring(0, e), t = t.substring(e + 1, t.length)), [i, t]
    }

    function a(t) {
        return function () {
            return d && d.config && d.config[t] || {}
        }
    }

    var h, u, p, c, l = {}, f = {}, d = {}, m = {}, y = [].slice;
    p = function (t, e) {
        var o, a = r(t),
            h = a[0];
        return t = a[1], h && (h = i(h, e), o = n(h)), h ? t = o && o.normalize ? o.normalize(t, s(e)) : i(t, e) : (t = i(t, e), a = r(t), h = a[0], t = a[1], h && (o = n(h))), {
            f: h ? h + "!" + t : t,
            n: t,
            pr: h,
            p: o
        }
    }, c = {
        require: function (t) {
            return e(t)
        },
        exports: function (t) {
            var i = l[t];
            return "undefined" != typeof i ? i : l[t] = {}
        },
        module: function (t) {
            return {
                id: t,
                uri: "",
                exports: l[t],
                config: a(t)
            }
        }
    }, h = function (i, s, r, a) {
        var h, u, d, y, g, v, S = [];
        if (a = a || i, "function" == typeof r) {
            for (s = !s.length && r.length ? ["require", "exports", "module"] : s, g = 0; g < s.length; g += 1)
                if (y = p(s[g], a), u = y.f, "require" === u) S[g] = c.require(i);
                else if ("exports" === u) S[g] = c.exports(i), v = !0;
            else if ("module" === u) h = S[g] = c.module(i);
            else if (l.hasOwnProperty(u) || f.hasOwnProperty(u) || m.hasOwnProperty(u)) S[g] = n(u);
            else {
                if (!y.p) throw new Error(i + " missing " + u);
                y.p.load(y.n, e(a, !0), o(u), {}), S[g] = l[u]
            }
            d = r.apply(l[i], S), i && (h && h.exports !== t && h.exports !== l[i] ? l[i] = h.exports : d === t && v || (l[i] = d))
        } else i && (l[i] = r)
    }, requirejs = require = u = function (i, e, s, o, r) {
        return "string" == typeof i ? c[i] ? c[i](e) : n(p(i, e).f) : (i.splice || (d = i, e.splice ? (i = e, e = s, s = null) : i = t), e = e || function () {}, "function" == typeof s && (s = o, o = r), o ? h(t, i, e, s) : setTimeout(function () {
            h(t, i, e, s)
        }, 15), u)
    }, u.config = function (t) {
        return d = t, u
    }, define = function (t, i, e) {
        i.splice || (e = i, i = []), f[t] = [t, i, e]
    }, define.amd = {
        jQuery: !0
    }
}();