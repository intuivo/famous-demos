/**
 * almond 0.2.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

/**
 * @license RequireJS text 2.0.7 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

!function (t, i) {
    if ("function" == typeof define && define.amd)define(i); else if ("object" == typeof window) {
        var s;
        window.addEventListener("load", function () {
            t.Famous = i(), s && t.Famous(s)
        }), t.Famous = function (t) {
            s = t
        }
    } else t.Famous = i()
}(this, function () {
    var requirejs, require, define;
    return function (t) {
        function i(t, i) {
            var s, e, o, n, r, a, h, u, p, c, l = i && i.split("/"), f = d.map, m = f && f["*"] || {};
            if (t && "." === t.charAt(0) && i) {
                for (l = l.slice(0, l.length - 1), t = l.concat(t.split("/")), u = 0; u < t.length; u += 1)if (c = t[u], "." === c)t.splice(u, 1), u -= 1; else if (".." === c) {
                    if (1 === u && (".." === t[2] || ".." === t[0]))break;
                    u > 0 && (t.splice(u - 1, 2), u -= 2)
                }
                t = t.join("/")
            }
            if ((l || m) && f) {
                for (s = t.split("/"), u = s.length; u > 0; u -= 1) {
                    if (e = s.slice(0, u).join("/"), l)for (p = l.length; p > 0; p -= 1)if (o = f[l.slice(0, p).join("/")], o && (o = o[e])) {
                        n = o, r = u;
                        break
                    }
                    if (n)break;
                    !a && m && m[e] && (a = m[e], h = u)
                }
                !n && a && (n = a, r = h), n && (s.splice(0, r, n), t = s.join("/"))
            }
            return t
        }

        function s(i, s) {
            return function () {
                return u.apply(t, v.call(arguments, 0).concat([i, s]))
            }
        }

        function e(t) {
            return function (s) {
                return i(s, t)
            }
        }

        function o(t) {
            return function (i) {
                l[t] = i
            }
        }

        function n(i) {
            if (f.hasOwnProperty(i)) {
                var s = f[i];
                delete f[i], m[i] = !0, h.apply(t, s)
            }
            if (!l.hasOwnProperty(i) && !m.hasOwnProperty(i))throw new Error("No " + i);
            return l[i]
        }

        function r(t) {
            var i, s = t ? t.indexOf("!") : -1;
            return s > -1 && (i = t.substring(0, s), t = t.substring(s + 1, t.length)), [i, t]
        }

        function a(t) {
            return function () {
                return d && d.config && d.config[t] || {}
            }
        }

        var h, u, p, c, l = {}, f = {}, d = {}, m = {}, v = [].slice;
        p = function (t, s) {
            var o, a = r(t), h = a[0];
            return t = a[1], h && (h = i(h, s), o = n(h)), h ? t = o && o.normalize ? o.normalize(t, e(s)) : i(t, s) : (t = i(t, s), a = r(t), h = a[0], t = a[1], h && (o = n(h))), {f: h ? h + "!" + t : t, n: t, pr: h, p: o}
        }, c = {require: function (t) {
            return s(t)
        }, exports: function (t) {
            var i = l[t];
            return"undefined" != typeof i ? i : l[t] = {}
        }, module: function (t) {
            return{id: t, uri: "", exports: l[t], config: a(t)}
        }}, h = function (i, e, r, a) {
            var h, u, d, v, y, g, x = [];
            if (a = a || i, "function" == typeof r) {
                for (e = !e.length && r.length ? ["require", "exports", "module"] : e, y = 0; y < e.length; y += 1)if (v = p(e[y], a), u = v.f, "require" === u)x[y] = c.require(i); else if ("exports" === u)x[y] = c.exports(i), g = !0; else if ("module" === u)h = x[y] = c.module(i); else if (l.hasOwnProperty(u) || f.hasOwnProperty(u) || m.hasOwnProperty(u))x[y] = n(u); else {
                    if (!v.p)throw new Error(i + " missing " + u);
                    v.p.load(v.n, s(a, !0), o(u), {}), x[y] = l[u]
                }
                d = r.apply(l[i], x), i && (h && h.exports !== t && h.exports !== l[i] ? l[i] = h.exports : d === t && g || (l[i] = d))
            } else i && (l[i] = r)
        }, requirejs = require = u = function (i, s, e, o, r) {
            return"string" == typeof i ? c[i] ? c[i](s) : n(p(i, s).f) : (i.splice || (d = i, s.splice ? (i = s, s = e, e = null) : i = t), s = s || function () {
            }, "function" == typeof e && (e = o, o = r), o ? h(t, i, s, e) : setTimeout(function () {
                h(t, i, s, e)
            }, 15), u)
        }, u.config = function (t) {
            return d = t, u
        }, define = function (t, i, s) {
            i.splice || (s = i, i = []), f[t] = [t, i, s]
        }, define.amd = {jQuery: !0}
    }(), define("lib/almond", function () {
    }), "undefined" == typeof document || "classList"in document.createElement("a") || function (t) {
        var i = "classList", s = "prototype", e = (t.HTMLElement || t.Element)[s], o = Object, n = String[s].trim || function () {
            return this.replace(/^\s+|\s+$/g, "")
        }, r = Array[s].indexOf || function (t) {
            for (var i = 0, s = this.length; s > i; i++)if (i in this && this[i] === t)return i;
            return-1
        }, a = function (t, i) {
            this.name = t, this.code = DOMException[t], this.message = i
        }, h = function (t, i) {
            if ("" === i)throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
            if (/\s/.test(i))throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
            return r.call(t, i)
        }, u = function (t) {
            for (var i = n.call(t.className), s = i ? i.split(/\s+/) : [], e = 0, o = s.length; o > e; e++)this.push(s[e]);
            this._updateClassName = function () {
                t.className = this.toString()
            }
        }, p = u[s] = [], c = function () {
            return new u(this)
        };
        if (a[s] = Error[s], p.item = function (t) {
            return this[t] || null
        }, p.contains = function (t) {
            return t += "", -1 !== h(this, t)
        }, p.add = function (t) {
            t += "", -1 === h(this, t) && (this.push(t), this._updateClassName())
        }, p.remove = function (t) {
            t += "";
            var i = h(this, t);
            -1 !== i && (this.splice(i, 1), this._updateClassName())
        }, p.toggle = function (t) {
            t += "", -1 === h(this, t) ? this.add(t) : this.remove(t)
        }, p.toString = function () {
            return this.join(" ")
        }, o.defineProperty) {
            var l = {get: c, enumerable: !0, configurable: !0};
            try {
                o.defineProperty(e, i, l)
            } catch (f) {
                -2146823252 === f.number && (l.enumerable = !1, o.defineProperty(e, i, l))
            }
        } else o[s].__defineGetter__ && e.__defineGetter__(i, c)
    }(self), define("lib/classList", function () {
    }), Function.prototype.bind || (Function.prototype.bind = function (t) {
        if ("function" != typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var i = Array.prototype.slice.call(arguments, 1), s = this, e = function () {
        }, o = function () {
            return s.apply(this instanceof e && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
        };
        return e.prototype = this.prototype, o.prototype = new e, o
    }), define("lib/functionPrototypeBind", function () {
    }), window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
        return window.setTimeout(function () {
            t(+new Date)
        }, 1e3 / 60)
    }), define("lib/requestAnimationFrame", function () {
    }), define("lib/text", ["module"], function (t) {
        var i, s, e, o, n = ["Msxml2.XMLhttp", "Microsoft.XMLhttp", "Msxml2.XMLhttp.4.0"], r = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, a = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, h = "undefined" != typeof location && location.href, u = h && location.protocol && location.protocol.replace(/\:/, ""), p = h && location.hostname, c = h && (location.port || void 0), l = {}, f = t.config && t.config() || {};
        return i = {version: "2.0.7", strip: function (t) {
            if (t) {
                t = t.replace(r, "");
                var i = t.match(a);
                i && (t = i[1])
            } else t = "";
            return t
        }, jsEscape: function (t) {
            return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        }, createXhr: f.createXhr || function () {
            var t, i, s;
            if ("undefined" != typeof XMLHttpRequest)return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)for (i = 0; 3 > i; i += 1) {
                s = n[i];
                try {
                    t = new ActiveXObject(s)
                } catch (e) {
                }
                if (t) {
                    n = [s];
                    break
                }
            }
            return t
        }, parseName: function (t) {
            var i, s, e, o = !1, n = t.indexOf("."), r = 0 === t.indexOf("./") || 0 === t.indexOf("../");
            return-1 !== n && (!r || n > 1) ? (i = t.substring(0, n), s = t.substring(n + 1, t.length)) : i = t, e = s || i, n = e.indexOf("!"), -1 !== n && (o = "strip" === e.substring(n + 1), e = e.substring(0, n), s ? s = e : i = e), {moduleName: i, ext: s, strip: o}
        }, xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/, useXhr: function (t, s, e, o) {
            var n, r, a, h = i.xdRegExp.exec(t);
            return h ? (n = h[2], r = h[3], r = r.split(":"), a = r[1], r = r[0], !(n && n !== s || r && r.toLowerCase() !== e.toLowerCase() || (a || r) && a !== o)) : !0
        }, finishLoad: function (t, s, e, o) {
            e = s ? i.strip(e) : e, f.isBuild && (l[t] = e), o(e)
        }, load: function (t, s, e, o) {
            if (o.isBuild && !o.inlineText)return e(), void 0;
            f.isBuild = o.isBuild;
            var n = i.parseName(t), r = n.moduleName + (n.ext ? "." + n.ext : ""), a = s.toUrl(r), l = f.useXhr || i.useXhr;
            !h || l(a, u, p, c) ? i.get(a, function (s) {
                i.finishLoad(t, n.strip, s, e)
            }, function (t) {
                e.error && e.error(t)
            }) : s([r], function (t) {
                i.finishLoad(n.moduleName + "." + n.ext, n.strip, t, e)
            })
        }, write: function (t, s, e) {
            if (l.hasOwnProperty(s)) {
                var o = i.jsEscape(l[s]);
                e.asModule(t + "!" + s, "define(function () { return '" + o + "';});\n")
            }
        }, writeFile: function (t, s, e, o, n) {
            var r = i.parseName(s), a = r.ext ? "." + r.ext : "", h = r.moduleName + a, u = e.toUrl(r.moduleName + a) + ".js";
            i.load(h, e, function () {
                var s = function (t) {
                    return o(u, t)
                };
                s.asModule = function (t, i) {
                    return o.asModule(t, u, i)
                }, i.write(t, h, s, n)
            }, n)
        }}, "node" === f.env || !f.env && "undefined" != typeof process && process.versions && process.versions.node ? (s = require.nodeRequire("fs"), i.get = function (t, i, e) {
            try {
                var o = s.readFileSync(t, "utf8");
                0 === o.indexOf("﻿") && (o = o.substring(1)), i(o)
            } catch (n) {
                e(n)
            }
        }) : "xhr" === f.env || !f.env && i.createXhr() ? i.get = function (t, s, e, o) {
            var n, r = i.createXhr();
            if (r.open("GET", t, !0), o)for (n in o)o.hasOwnProperty(n) && r.setRequestHeader(n.toLowerCase(), o[n]);
            f.onXhr && f.onXhr(r, t), r.onreadystatechange = function () {
                var i, o;
                4 === r.readyState && (i = r.status, i > 399 && 600 > i ? (o = new Error(t + " http status: " + i), o.xhr = r, e(o)) : s(r.responseText), f.onXhrComplete && f.onXhrComplete(r, t))
            }, r.send(null)
        } : "rhino" === f.env || !f.env && "undefined" != typeof Packages && "undefined" != typeof java ? i.get = function (t, i) {
            var s, e, o = "utf-8", n = new java.io.File(t), r = java.lang.System.getProperty("line.separator"), a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(n), o)), h = "";
            try {
                for (s = new java.lang.StringBuffer, e = a.readLine(), e && e.length() && 65279 === e.charAt(0) && (e = e.substring(1)), null !== e && s.append(e); null !== (e = a.readLine());)s.append(r), s.append(e);
                h = String(s.toString())
            } finally {
                a.close()
            }
            i(h)
        } : ("xpconnect" === f.env || !f.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (e = Components.classes, o = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), i.get = function (t, i) {
            var s, n, r = {}, a = new FileUtils.File(t);
            try {
                s = e["@mozilla.org/network/file-input-stream;1"].createInstance(o.nsIFileInputStream), s.init(a, 1, 0, !1), n = e["@mozilla.org/intl/converter-input-stream;1"].createInstance(o.nsIConverterInputStream), n.init(s, "utf-8", s.available(), o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), n.readString(s.available(), r), n.close(), s.close(), i(r.value)
            } catch (h) {
                throw new Error((a && a.path || "") + ": " + h)
            }
        }), i
    }), define("app/ID", ["require", "exports", "module"], function (t, i, s) {
        s.exports = 1e3
    }), define("famous/Entity", ["require", "exports", "module"], function (t, i, s) {
        function e(t) {
            var i = r.length;
            return n(i, t), i
        }

        function o(t) {
            return r[t]
        }

        function n(t, i) {
            r[t] = i
        }

        var r = [];
        s.exports = {register: e, get: o, set: n}
    }), define("famous/Matrix", ["require", "exports", "module"], function (t, i, s) {
        var e = {};
        e.precision = 1e-6, e.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e.multiply4x4 = function o(t, i) {
            var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            return s[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + t[3] * i[12], s[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + t[3] * i[13], s[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + t[3] * i[14], s[3] = t[0] * i[3] + t[1] * i[7] + t[2] * i[11] + t[3] * i[15], s[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8] + t[7] * i[12], s[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9] + t[7] * i[13], s[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10] + t[7] * i[14], s[7] = t[4] * i[3] + t[5] * i[7] + t[6] * i[11] + t[7] * i[15], s[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8] + t[11] * i[12], s[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9] + t[11] * i[13], s[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10] + t[11] * i[14], s[11] = t[8] * i[3] + t[9] * i[7] + t[10] * i[11] + t[11] * i[15], s[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + t[15] * i[12], s[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + t[15] * i[13], s[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + t[15] * i[14], s[15] = t[12] * i[3] + t[13] * i[7] + t[14] * i[11] + t[15] * i[15], arguments.length <= 2 ? s : o.apply(null, [s].concat(Array.prototype.slice.call(arguments, 2)))
        }, e.multiply = function n(t, i) {
            if (!t || !i)return t || i;
            var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return s[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8], s[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9], s[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10], s[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8], s[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9], s[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10], s[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8], s[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9], s[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10], s[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + i[12], s[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + i[13], s[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + i[14], arguments.length <= 2 ? s : n.apply(null, [s].concat(Array.prototype.slice.call(arguments, 2)))
        }, e.move = function (t, i) {
            return i[2] || (i[2] = 0), [t[0], t[1], t[2], 0, t[4], t[5], t[6], 0, t[8], t[9], t[10], 0, t[12] + i[0], t[13] + i[1], t[14] + i[2], 1]
        }, e.moveThen = function (t, i) {
            t[2] || (t[2] = 0);
            var s = t[0] * i[0] + t[1] * i[4] + t[2] * i[8], o = t[0] * i[1] + t[1] * i[5] + t[2] * i[9], n = t[0] * i[2] + t[1] * i[6] + t[2] * i[10];
            return e.move(i, [s, o, n])
        }, e.translate = function (t, i, s) {
            return void 0 === s && (s = 0), [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, s, 1]
        }, e.scale = function (t, i, s) {
            return void 0 === s && (s = 1), [t, 0, 0, 0, 0, i, 0, 0, 0, 0, s, 0, 0, 0, 0, 1]
        }, e.rotateX = function (t) {
            var i = Math.cos(t), s = Math.sin(t);
            return[1, 0, 0, 0, 0, i, s, 0, 0, -s, i, 0, 0, 0, 0, 1]
        }, e.rotateY = function (t) {
            var i = Math.cos(t), s = Math.sin(t);
            return[i, 0, -s, 0, 0, 1, 0, 0, s, 0, i, 0, 0, 0, 0, 1]
        }, e.rotateZ = function (t) {
            var i = Math.cos(t), s = Math.sin(t);
            return[i, s, 0, 0, -s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }, e.rotate = function (t, i, s) {
            var e = Math.cos(t), o = Math.sin(t), n = Math.cos(i), r = Math.sin(i), a = Math.cos(s), h = Math.sin(s), u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return u[0] = n * a, u[1] = e * h + o * r * a, u[2] = o * h - e * r * a, u[4] = -n * h, u[5] = e * a - o * r * h, u[6] = o * a + e * r * h, u[8] = r, u[9] = -o * n, u[10] = e * n, u
        }, e.rotateAxis = function (t, i) {
            var s = Math.sin(i), e = Math.cos(i), o = 1 - e, n = t[0] * t[0] * o, r = t[0] * t[1] * o, a = t[0] * t[2] * o, h = t[1] * t[1] * o, u = t[1] * t[2] * o, p = t[2] * t[2] * o, c = t[0] * s, l = t[1] * s, f = t[2] * s, d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return d[0] = n + e, d[1] = r + f, d[2] = a - l, d[4] = r - f, d[5] = h + e, d[6] = u + c, d[8] = a + l, d[9] = u - c, d[10] = p + e, d
        }, e.aboutOrigin = function (t, i) {
            var s = t[0] - (t[0] * i[0] + t[1] * i[4] + t[2] * i[8]), o = t[1] - (t[0] * i[1] + t[1] * i[5] + t[2] * i[9]), n = t[2] - (t[0] * i[2] + t[1] * i[6] + t[2] * i[10]);
            return e.move(i, [s, o, n])
        }, e.formatCSS = function (t) {
            for (var i = t.slice(0), s = 0; s < i.length; s++)i[s] < 1e-6 && i[s] > -1e-6 && (i[s] = 0);
            return"matrix3d(" + i.join() + ")"
        }, e.skew = function (t, i, s) {
            return[1, 0, 0, 0, Math.tan(s), 1, 0, 0, Math.tan(i), Math.tan(t), 1, 0, 0, 0, 0, 1]
        }, e.getTranslate = function (t) {
            return[t[12], t[13], t[14]]
        }, e.inverse = function (t) {
            var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], s = t[5] * t[10] - t[6] * t[9], e = t[4] * t[10] - t[6] * t[8], o = t[4] * t[9] - t[5] * t[8], n = t[1] * t[10] - t[2] * t[9], r = t[0] * t[10] - t[2] * t[8], a = t[0] * t[9] - t[1] * t[8], h = t[1] * t[6] - t[2] * t[5], u = t[0] * t[6] - t[2] * t[4], p = t[0] * t[5] - t[1] * t[4], c = t[0] * s - t[1] * e + t[2] * o, l = 1 / c;
            return i[0] = l * s, i[1] = -l * n, i[2] = l * h, i[4] = -l * e, i[5] = l * r, i[6] = -l * u, i[8] = l * o, i[9] = -l * a, i[10] = l * p, i[12] = -t[12] * i[0] - t[13] * i[4] - t[14] * i[8], i[13] = -t[12] * i[1] - t[13] * i[5] - t[14] * i[9], i[14] = -t[12] * i[2] - t[13] * i[6] - t[14] * i[10], i
        }, e.interpret = function (t) {
            function i(t) {
                return 2 == t.length ? t[0] * t[0] + t[1] * t[1] : t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
            }

            function s(t) {
                return Math.sqrt(i(t))
            }

            function o(t) {
                return 0 > t ? -1 : 1
            }

            var n = [t[0], t[1], t[2]], r = o(n[0]), a = s(n), h = [n[0] + r * a, n[1], n[2]], u = 2 / i(h), p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            p[0] = 1 - u * h[0] * h[0], p[5] = 1 - u * h[1] * h[1], p[10] = 1 - u * h[2] * h[2], p[1] = -u * h[0] * h[1], p[2] = -u * h[0] * h[2], p[6] = -u * h[1] * h[2], p[4] = p[1], p[8] = p[2], p[9] = p[6];
            var c = e.multiply(t, p), l = [c[5], c[6]], f = o(l[0]), d = s(l), m = [l[0] + f * d, l[1]], v = 2 / i(m), y = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            y[5] = 1 - v * m[0] * m[0], y[10] = 1 - v * m[1] * m[1], y[6] = -v * m[0] * m[1], y[9] = y[6];
            var g = e.multiply(p, y), x = e.multiply(t, g), S = e.scale(x[0] < 0 ? -1 : 1, x[5] < 0 ? -1 : 1, x[10] < 0 ? -1 : 1);
            x = e.multiply(S, x), g = e.multiply(g, S);
            var b = {};
            return b.translate = e.getTranslate(t), b.rotate = [Math.atan2(-g[6], g[10]), Math.asin(g[2]), Math.atan2(-g[1], g[0])], b.rotate[0] || (b.rotate[0] = 0, b.rotate[2] = Math.atan2(g[4], g[5])), b.scale = [x[0], x[5], x[10]], b.skew = [Math.atan(x[9] / b.scale[2]), Math.atan(x[8] / b.scale[2]), Math.atan(x[4] / b.scale[0])], Math.abs(b.rotate[0]) + Math.abs(b.rotate[2]) > 1.5 * Math.PI && (b.rotate[1] = Math.PI - b.rotate[1], b.rotate[1] > Math.PI && (b.rotate[1] -= 2 * Math.PI), b.rotate[1] < -Math.PI && (b.rotate[1] += 2 * Math.PI), b.rotate[0] < 0 ? b.rotate[0] += Math.PI : b.rotate[0] -= Math.PI, b.rotate[2] < 0 ? b.rotate[2] += Math.PI : b.rotate[2] -= Math.PI), b
        }, e.build = function (t) {
            var i = e.scale(t.scale[0], t.scale[1], t.scale[2]), s = e.skew(t.skew[0], t.skew[1], t.skew[2]), o = e.rotate(t.rotate[0], t.rotate[1], t.rotate[2]);
            return e.move(e.multiply(i, s, o), t.translate)
        }, e.equals = function (t, i) {
            if (t === i)return!0;
            if (!t || !i)return!1;
            for (var s = 0; s < t.length; s++)if (t[s] != i[s])return!1;
            return!0
        }, e.normalizeRotation = function (t) {
            var i = t.slice(0);
            for ((i[0] == Math.PI / 2 || i[0] == -Math.PI / 2) && (i[0] = -i[0], i[1] = Math.PI - i[1], i[2] -= Math.PI), i[0] > Math.PI / 2 && (i[0] = i[0] - Math.PI, i[1] = Math.PI - i[1], i[2] -= Math.PI), i[0] < -Math.PI / 2 && (i[0] = i[0] + Math.PI, i[1] = -Math.PI - i[1], i[2] -= Math.PI); i[1] < -Math.PI;)i[1] += 2 * Math.PI;
            for (; i[1] >= Math.PI;)i[1] -= 2 * Math.PI;
            for (; i[2] < -Math.PI;)i[2] += 2 * Math.PI;
            for (; i[2] >= Math.PI;)i[2] -= 2 * Math.PI;
            return i
        }, e.vecMultiply = function (t, i) {
            return[t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + i[12], t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + i[13], t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + i[14]]
        }, e.applyPerspective = function (t, i) {
            var s = i / (i - t[2]);
            return[s * t[0], s * t[1]]
        }, s.exports = e
    }), define("famous/SpecParser", ["require", "exports", "module", "./Matrix"], function (t, i, s) {
        function e() {
            this.reset()
        }

        function o(t, i) {
            return[t[0] * i[0] + t[1] * i[4] + t[2] * i[8], t[0] * i[1] + t[1] * i[5] + t[2] * i[9], t[0] * i[2] + t[1] * i[6] + t[2] * i[10]]
        }

        var n = t("./Matrix");
        e.parse = function (t, i) {
            var s = new e, o = s.parse(t);
            return i ? (i(o), void 0) : o
        }, e.prototype.parse = function (t) {
            return this.reset(), this._parseSpec(t, n.identity, 1, [0, 0], void 0, n.identity), this.result
        }, e.prototype.reset = function () {
            this.result = {}
        }, e.prototype._parseSpec = function (t, i, s, e, r, a) {
            if (void 0 == t); else if ("number" == typeof t) {
                var h = t, u = r ? [e[0] * r[0], e[1] * r[1], 0] : [0, 0, 0];
                i || (i = n.identity), this.result[h] = [n.move(i, o(u, a)), s, e, r]
            } else if (t instanceof Array)for (var p = 0; p < t.length; p++)this._parseSpec(t[p], i, s, e, r, a); else if (void 0 !== t.target) {
                var c = t.target, l = i, f = s, d = e, m = r;
                void 0 !== t.opacity && (f = s * t.opacity), t.transform && (l = n.multiply(t.transform, i)), t.origin && (d = t.origin), t.size && (m = t.size, void 0 === m[0] && (m[0] = r[0]), void 0 === m[1] && (m[1] = r[1]), r || (r = m), d || (d = [0, 0]), l || (l = n.identity), l = n.move(l, o([d[0] * r[0], d[1] * r[1], 0], a)), l = n.moveThen([-d[0] * m[0], -d[1] * m[1], 0], l), a = i ? i : n.identity, d = [0, 0]), this._parseSpec(c, l, f, d, m, a)
            }
        }, s.exports = e
    }), define("famous/RenderNode", ["require", "exports", "module", "./Entity", "./SpecParser", "./Matrix"], function (t, i, s) {
        function e(t) {
            this.modifiers = [], this.object = void 0, t && this.set(t), this._hasCached = !1, this._resultCache = {}, this._prevResults = {}
        }

        function o(t, i, s) {
            var e = r.parse(t);
            for (var a in e) {
                var h = n.get(a), u = e[a];
                u.unshift(i);
                var p = h.commit.apply(h, u);
                p ? o(p, i, s) : s[a] = u
            }
        }

        var n = t("./Entity"), r = t("./SpecParser");
        t("./Matrix"), e.prototype.get = function () {
            return this.object
        }, e.prototype.set = function (t) {
            this.object = t
        }, e.prototype.link = function (t) {
            if (t instanceof Array)this.set(t); else {
                var i = this.get();
                i ? i instanceof Array ? this.modifiers.unshift(t) : (this.modifiers.unshift(i), this.set(t)) : this.set(t)
            }
            return this
        }, e.prototype.add = function (t) {
            this.get()instanceof Array || this.set([]);
            var i = new e(t);
            return this.get().push(i), i
        }, e.prototype.mod = function (t) {
            return this.modifiers.push(t), this
        }, e.prototype.commit = function (t, i, s, e, r) {
            var a = this.render(void 0, this._hasCached);
            if (a !== !0) {
                for (var h in this._prevResults)if (!(h in this._resultCache)) {
                    var u = n.get(h);
                    u.cleanup && u.cleanup(t.getAllocator())
                }
                this._prevResults = this._resultCache, this._resultCache = {}, o({transform: i, size: r, origin: e, opacity: s, target: a}, t, this._resultCache), this._hasCached = !0
            }
        }, e.prototype.render = function (t) {
            var i = t, s = this.get();
            if (s)if (s.render)i = s.render(t); else {
                var e = s.length - 1;
                for (i = new Array(e); e >= 0;)i[e] = s[e].render(), e--
            }
            for (var o = this.modifiers.length, e = 0; o > e; e++)i = this.modifiers[e].render(i);
            return i
        }, s.exports = e
    }), define("famous/EventHandler", ["require", "exports", "module"], function (t, i, s) {
        function e() {
            this.listeners = {}, this.downstream = [], this.downstreamFn = [], this.owner = this
        }

        function o(t, i) {
            for (var s = !1, e = 0; e < this.downstream.length; e++)s = this.downstream[e].emit(t, i) || s;
            for (var e = 0; e < this.downstreamFn.length; e++)s = this.downstreamFn[e](t, i) || s;
            return s
        }

        e.prototype.emit = function (t, i) {
            i || (i = {});
            var s = this.listeners[t], e = !1;
            if (s)for (var n = 0; n < s.length; n++)s[n].call(this.owner, i) && (e = !0);
            return o.call(this, t, i) || e
        }, e.prototype.on = function (t, i) {
            this.listeners[t] || (this.listeners[t] = []);
            var s = this.listeners[t].indexOf(i);
            return 0 > s && this.listeners[t].push(i), this
        }, e.prototype.unbind = function (t, i) {
            var s = this.listeners[t].indexOf(i);
            s >= 0 && this.listeners[t].splice(s, 1)
        }, e.prototype.pipe = function (t) {
            var i = t instanceof Function ? this.downstreamFn : this.downstream, s = i.indexOf(t);
            return 0 > s && i.push(t), t instanceof Function ? t("pipe") : t.emit("pipe"), t
        }, e.prototype.unpipe = function (t) {
            var i = t instanceof Function ? this.downstreamFn : this.downstream, s = i.indexOf(t);
            return s >= 0 ? (i.splice(s, 1), t instanceof Function ? t("unpipe") : t.emit("unpipe"), t) : !1
        }, e.prototype.bindThis = function (t) {
            this.owner = t
        }, e.setInputHandler = function (t, i) {
            t.emit = i.emit.bind(i)
        }, e.setOutputHandler = function (t, i) {
            i instanceof e && i.bindThis(t), t.pipe = i.pipe.bind(i), t.unpipe = i.unpipe.bind(i), t.on = i.on.bind(i), t.unbind = i.unbind.bind(i)
        }, s.exports = e
    }), define("famous/OptionsManager", ["require", "exports", "module", "./EventHandler"], function (t, i, s) {
        function e(t) {
            this._value = t, this.eventOutput = null
        }

        function o() {
            this.eventOutput = new n, this.eventOutput.bindThis(this), n.setOutputHandler(this, this.eventOutput)
        }

        var n = t("./EventHandler");
        e.prototype.patch = function () {
            for (var t = this._value, i = 0; i < arguments.length; i++) {
                var s = arguments[i];
                for (var e in s)!(e in t && "object" == typeof t[e]) || t[e]instanceof Array || "object" != typeof s[e] || s[e]instanceof Array ? this.set(e, s[e]) : (t.hasOwnProperty(e) || (t[e] = Object.create(t[e])), this.key(e).patch(s[e]), this.eventOutput && this.eventOutput.emit("change", {id: e, value: this.key(e).value()}))
            }
            return this
        }, e.prototype.setOptions = e.prototype.patch, e.prototype.key = function (t) {
            var i = new e(this._value[t]);
            return(!(i._value instanceof Object) || i._value instanceof Array) && (i._value = {}), i
        }, e.prototype.get = function (t) {
            return this._value[t]
        }, e.prototype.getOptions = e.prototype.get, e.prototype.set = function (t, i) {
            var s = this.get(t);
            return this._value[t] = i, this.eventOutput && i !== s && this.eventOutput.emit("change", {id: t, value: i}), this
        }, e.prototype.value = function () {
            return this._value
        }, e.prototype.on = function () {
            return o.call(this), this.on.apply(this, arguments)
        }, e.prototype.unbind = function () {
            return o.call(this), this.unbind.apply(this, arguments)
        }, e.prototype.pipe = function () {
            return o.call(this), this.pipe.apply(this, arguments)
        }, e.prototype.unpipe = function () {
            return o.call(this), this.unpipe.apply(this, arguments)
        }, s.exports = e
    }), define("famous/View", ["require", "exports", "module", "./RenderNode", "./EventHandler", "./OptionsManager"], function (t, i, s) {
        function e(t) {
            this.node = new o, this.eventInput = new n, this.eventOutput = new n, n.setInputHandler(this, this.eventInput), n.setOutputHandler(this, this.eventOutput), this.options = Object.create(this.constructor.DEFAULT_OPTIONS || e.DEFAULT_OPTIONS), this.optionsManager = new r(this.options), t && this.setOptions(t)
        }

        var o = t("./RenderNode"), n = t("./EventHandler"), r = t("./OptionsManager");
        e.DEFAULT_OPTIONS = null, e.prototype.getOptions = function () {
            return this.optionsManager.value()
        }, e.prototype.setOptions = function (t) {
            this.optionsManager.patch(t)
        }, e.prototype._add = function () {
            return this.node.add.apply(this.node, arguments)
        }, e.prototype._link = function () {
            return this.node.link.apply(this.node, arguments)
        }, e.prototype.render = function () {
            return this.node.render.apply(this.node, arguments)
        }, e.prototype.getSize = function () {
            var t = this.node.get();
            return t.getSize ? t.getSize.apply(t, arguments) : this.options.size
        }, s.exports = e
    }), define("famous/Utility", ["require", "exports", "module"], function (t, i, s) {
        var e = {};
        e.Curve = {linear: function (t) {
            return t
        }, easeIn: function (t) {
            return t * t
        }, easeOut: function (t) {
            return t * (2 - t)
        }, easeInOut: function (t) {
            return.5 >= t ? 2 * t * t : -2 * t * t + 4 * t - 1
        }, easeOutBounce: function (t) {
            return t * (3 - 2 * t)
        }, spring: function (t) {
            return(1 - t) * Math.sin(6 * Math.PI * t) + t
        }}, e.Direction = {X: 0, Y: 1, Z: 2}, e.Origin = {tl: [0, 0], t: [.5, 0], tr: [1, 0], l: [0, .5], c: [.5, .5], r: [1, .5], bl: [0, 1], b: [.5, 1], br: [1, 1]}, e.after = function (t, i) {
            var s = t;
            return function () {
                s--, 0 === s && i.apply(this, arguments)
            }
        }, e.loadURL = function (t, i) {
            var s = new XMLHttpRequest;
            s.onreadystatechange = function () {
                4 == this.readyState && i && i(this.responseText)
            }, s.open("GET", t), s.send()
        }, e.transformInFrontMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1], e.transformInFront = {render: function (t) {
            return{transform: e.transformInFrontMatrix, target: t}
        }}, e.transformBehindMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1, 1], e.transformBehind = {render: function (t) {
            return{transform: e.transformBehindMatrix, target: t}
        }}, e.customizeComponent = function (t, i, s) {
            var e = function (e) {
                t.call(this, i), e && this.setOptions(e), s && s.call(this)
            };
            return e.prototype = Object.create(t.prototype), e
        }, s.exports = e
    }), define("famous/MultipleTransition", ["require", "exports", "module", "./Utility"], function (t, i, s) {
        function e(t) {
            this.method = t, this._instances = [], this.state = []
        }

        var o = t("./Utility");
        e.SUPPORTS_MULTIPLE = !0, e.prototype.get = function () {
            for (var t = 0; t < this._instances.length; t++)this.state[t] = this._instances[t].get();
            return this.state
        }, e.prototype.set = function (t, i, s) {
            for (var e = o.after(t.length, s), n = 0; n < t.length; n++)this._instances[n] || (this._instances[n] = new this.method), this._instances[n].set(t[n], i, e)
        }, e.prototype.reset = function (t) {
            for (var i = 0; i < t.length; i++)this._instances[i] || (this._instances[i] = new this.method), this._instances[i].reset(t[i])
        }, s.exports = e
    }), define("famous/TweenTransition", ["require", "exports", "module", "famous/Utility"], function (t, i, s) {
        function e(t) {
            this.options = Object.create(e.DEFAULT_OPTIONS), t && this.setOptions(t), this._startTime = 0, this._startValue = 0, this._updateTime = 0, this._endValue = 0, this._curve = void 0, this._duration = 0, this._active = !1, this._callback = void 0, this.state = 0
        }

        function o(t, i, s) {
            return(1 - s) * t + s * i
        }

        function n(t) {
            return t instanceof Object ? t instanceof Array ? t.slice(0) : Object.create(t) : t
        }

        function r(t, i) {
            var s = {curve: i.curve};
            return i.duration && (s.duration = i.duration), i.speed && (s.speed = i.speed), t instanceof Object && (void 0 !== t.duration && (s.duration = t.duration), t.curve && (s.curve = t.curve), t.speed && (s.speed = t.speed)), "string" == typeof s.curve && (s.curve = e.getCurve(s.curve)), s
        }

        var a = t("famous/Utility");
        e.SUPPORTS_MULTIPLE = !0, e.DEFAULT_OPTIONS = {curve: a.Curve.linear, duration: 500, speed: 0};
        var h = {};
        e.registerCurve = function (t, i) {
            return h[t] ? !1 : (h[t] = i, !0)
        }, e.unregisterCurve = function (t) {
            return h[t] ? (delete h[t], !0) : !1
        }, e.getCurve = function (t) {
            return h[t]
        }, e.getCurves = function () {
            return h
        }, e.prototype.setOptions = function (t) {
            void 0 !== t.curve && (this.options.curve = t.curve), void 0 !== t.duration && (this.options.duration = t.duration), void 0 !== t.speed && (this.options.speed = t.speed)
        }, e.prototype.set = function (t, i, s) {
            if (!i)return this.reset(t), s && s(), void 0;
            if (this._startValue = n(this.get()), i = r(i, this.options), i.speed) {
                var e = this._startValue;
                if (e instanceof Object) {
                    var o = 0;
                    for (var a in e)o += (t[a] - e[a]) * (t[a] - e[a]);
                    i.duration = Math.sqrt(o) / i.speed
                } else i.duration = Math.abs(t - e) / i.speed
            }
            this._startTime = Date.now(), this._endValue = n(t), this._duration = i.duration, this._curve = i.curve, this._active = !0, this._callback = s
        }, e.prototype.reset = function (t) {
            if (this._callback) {
                var i = this._callback;
                this._callback = void 0, i()
            }
            this.state = n(t), this._startTime = 0, this._duration = 0, this._updateTime = 0, this._startValue = this.state, this._endValue = this.state, this._active = !1
        }, e.prototype.get = function (t) {
            return this.update(t), this.state
        }, e.prototype.update = function (t) {
            if (this._active) {
                if (t || (t = Date.now()), !(this._updateTime >= t)) {
                    this._updateTime = t;
                    var i = t - this._startTime;
                    if (i >= this._duration)this.state = this._endValue, this._active = !1; else if (0 > i)this.state = this._startValue; else {
                        var s = i / this._duration;
                        if (this.state instanceof Object)for (var e in this.state)this.state[e] = o(this._startValue[e], this._endValue[e], this._curve(s)); else this.state = o(this._startValue, this._endValue, this._curve(s))
                    }
                }
            } else if (this._callback) {
                var n = this._callback;
                this._callback = void 0, n()
            }
        }, e.prototype.isActive = function () {
            return this._active
        }, e.prototype.halt = function () {
            this.reset(this.get())
        }, e.registerCurve("linear", a.Curve.linear), e.registerCurve("easeIn", a.Curve.easeIn), e.registerCurve("easeOut", a.Curve.easeOut), e.registerCurve("easeInOut", a.Curve.easeInOut), e.registerCurve("easeOutBounce", a.Curve.easeOutBounce), e.registerCurve("spring", a.Curve.spring), s.exports = e
    }), define("famous/Transitionable", ["require", "exports", "module", "./Utility", "./MultipleTransition", "./TweenTransition"], function (t, i, s) {
        function e(t) {
            this.currentAction = null, this.actionQueue = [], this.callbackQueue = [], this.state = 0, this._callback = void 0, this._engineInstance = null, this._currentMethod = null, this.set(t)
        }

        function o() {
            if (this._callback) {
                var t = this._callback;
                this._callback = void 0, t()
            }
            if (this.actionQueue.length <= 0)return this.set(this._engineInstance), void 0;
            this.currentAction = this.actionQueue.shift(), this._callback = this.callbackQueue.shift();
            var i = null, s = this.currentAction[0], e = this.currentAction[1];
            e instanceof Object && e.method ? (i = e.method, "string" == typeof i && (i = a[i])) : i = r, this._currentMethod !== i && (this._engineInstance = !(s instanceof Object) || i.SUPPORTS_MULTIPLE === !0 || s.length <= i.SUPPORTS_MULTIPLE ? new i : new n(i), this._currentMethod = i), this._engineInstance.reset(this.state), this._engineInstance.set(s, e, o.bind(this))
        }

        t("./Utility");
        var n = t("./MultipleTransition"), r = t("./TweenTransition"), a = {};
        e.registerMethod = function (t, i) {
            return t in a ? !1 : (a[t] = i, !0)
        }, e.unregisterMethod = function (t) {
            return t in a ? (delete a[t], !0) : !1
        }, e.prototype.set = function (t, i, s) {
            if (!i)return this.reset(t), s && s(), void 0;
            var e = [t, i];
            this.actionQueue.push(e), this.callbackQueue.push(s), this.currentAction || o.call(this)
        }, e.prototype.reset = function (t) {
            this._currentMethod = null, this._engineInstance = null, this.state = t, this.currentAction = null, this.actionQueue = [], this.callbackQueue = []
        }, e.prototype.delay = function (t, i) {
            this.set(this._engineInstance, {duration: t, curve: function () {
                return 0
            }}, i)
        }, e.prototype.get = function (t) {
            return this._engineInstance && (this.state = this._engineInstance.get(t)), this.state
        }, e.prototype.isActive = function () {
            return!!this.currentAction
        }, e.prototype.halt = function () {
            this.set(this.get())
        }, s.exports = e
    }), define("famous/Modifier", ["require", "exports", "module", "./Matrix", "./Transitionable", "./Utility"], function (t, i, s) {
        function e(t) {
            var i = o.identity, s = 1, e = void 0, r = void 0;
            arguments.length > 1 || arguments[0]instanceof Array ? (void 0 !== arguments[0] && (i = arguments[0]), void 0 !== arguments[1] && (s = arguments[1]), e = arguments[2], r = arguments[3]) : t && (t.transform && (i = t.transform), void 0 !== t.opacity && (s = t.opacity), t.origin && (e = t.origin), t.size && (r = t.size)), this.transformTranslateState = new n([0, 0, 0]), this.transformRotateState = new n([0, 0, 0]), this.transformSkewState = new n([0, 0, 0]), this.transformScaleState = new n([1, 1, 1]), this.opacityState = new n(s), this.originState = new n([0, 0]), this.sizeState = new n([0, 0]), this._originEnabled = !1, this._sizeEnabled = !1, this.setTransform(i), this.setOpacity(s), this.setOrigin(e), this.setSize(r)
        }

        var o = t("./Matrix"), n = t("./Transitionable"), r = t("./Utility");
        e.prototype.getTransform = function () {
            return this.isActive() ? o.build({translate: this.transformTranslateState.get(), rotate: this.transformRotateState.get(), skew: this.transformSkewState.get(), scale: this.transformScaleState.get()}) : this.getFinalTransform()
        }, e.prototype.getFinalTransform = function () {
            return this._finalTransform
        }, e.prototype.setTransform = function (t, i, s) {
            var e = s ? r.after(4, s) : void 0;
            if (i) {
                if (this._transformDirty) {
                    var n = o.interpret(this.getFinalTransform());
                    this.transformTranslateState.set(n.translate), this.transformRotateState.set(n.rotate), this.transformSkewState.set(n.skew), this.transformScaleState.set(n.scale), this._transformDirty = !1
                }
                var a = o.interpret(t);
                this.transformTranslateState.set(a.translate, i, e), this.transformRotateState.set(a.rotate, i, e), this.transformSkewState.set(a.skew, i, e), this.transformScaleState.set(a.scale, i, e)
            } else this.transformTranslateState.halt(), this.transformRotateState.halt(), this.transformSkewState.halt(), this.transformScaleState.halt(), this._transformDirty = !0;
            this._finalTransform = t
        }, e.prototype.getOpacity = function () {
            return this.opacityState.get()
        }, e.prototype.setOpacity = function (t, i, s) {
            this.opacityState.set(t, i, s)
        }, e.prototype.getOrigin = function () {
            return this._originEnabled ? this.originState.get() : void 0
        }, e.prototype.setOrigin = function (t, i, s) {
            this._originEnabled = !!t, t || (t = [0, 0]), t instanceof Array || (t = r.origins[t]), this.originState.set(t, i, s)
        }, e.prototype.getSize = function () {
            return this._sizeEnabled ? this.sizeState.get() : void 0
        }, e.prototype.setSize = function (t, i, s) {
            this._sizeEnabled = !!t, t || (t = [0, 0]), this.sizeState.set(t, i, s)
        }, e.prototype.setDefaultTransition = function (t) {
            this.transformTranslateState.setDefault(t), this.transformRotateState.setDefault(t), this.transformSkewState.setDefault(t), this.transformScaleState.setDefault(t), this.opacityState.setDefault(t), this.originState.setDefault(t), this.sizeState.setDefault(t)
        }, e.prototype.halt = function () {
            this.transformTranslateState.halt(), this.transformRotateState.halt(), this.transformSkewState.halt(), this.transformScaleState.halt(), this.opacityState.halt(), this.originState.halt(), this.sizeState.halt()
        }, e.prototype.isActive = function () {
            return this.transformTranslateState.isActive() || this.transformRotateState.isActive() || this.transformSkewState.isActive() || this.transformScaleState.isActive()
        }, e.prototype.render = function (t) {
            return{transform: this.getTransform(), opacity: this.getOpacity(), origin: this.getOrigin(), size: this.getSize(), target: t}
        }, s.exports = e
    }), define("famous/ElementAllocator", ["require", "exports", "module"], function (t, i, s) {
        function e(t) {
            t || (t = document.createDocumentFragment()), this.container = t, this.detachedNodes = {}, this.nodeCount = 0
        }

        e.prototype.migrate = function (t) {
            var i = this.container;
            if (t !== i) {
                if (i instanceof DocumentFragment)t.appendChild(i); else for (; i.hasChildNodes();)t.appendChild(i.removeChild(i.firstChild));
                this.container = t
            }
        }, e.prototype.allocate = function (t) {
            t = t.toLowerCase(), t in this.detachedNodes || (this.detachedNodes[t] = []);
            var i, s = this.detachedNodes[t];
            return s.length > 0 ? i = s.pop() : (i = document.createElement(t), this.container.appendChild(i)), this.nodeCount++, i
        }, e.prototype.deallocate = function (t) {
            var i = t.nodeName.toLowerCase(), s = this.detachedNodes[i];
            s.push(t), this.nodeCount--
        }, e.prototype.getNodeCount = function () {
            return this.nodeCount
        }, s.exports = e
    }), define("famous/Context", ["require", "exports", "module", "./RenderNode", "./EventHandler", "./SpecParser", "./ElementAllocator", "./Matrix", "./Transitionable"], function (t, i, s) {
        function e(t) {
            this.container = t, this.allocator = new a(t), this.srcNode = new n, this.eventHandler = new r, this._size = [window.innerWidth, window.innerHeight], this.perspectiveState = new u(0), this._perspective = void 0, this.eventHandler.on("resize", function () {
                this._size = o(this.container)
            }.bind(this))
        }

        function o(t) {
            return[t.clientWidth, t.clientHeight]
        }

        var n = t("./RenderNode"), r = t("./EventHandler");
        t("./SpecParser");
        var a = t("./ElementAllocator"), h = t("./Matrix"), u = t("./Transitionable");
        e.prototype.getAllocator = function () {
            return this.allocator
        }, e.prototype.link = function (t) {
            return this.srcNode.link(t)
        }, e.prototype.add = function (t) {
            return this.srcNode.add(t)
        }, e.prototype.mod = function (t) {
            return this.srcNode.mod(t)
        }, e.prototype.migrate = function (t) {
            t !== this.container && (this.container = t, this.allocator.migrate(t))
        }, e.prototype.getSize = function () {
            return this._size
        }, e.prototype.setSize = function (t) {
            t || (t = o(this.container)), this._size = t
        }, e.prototype.update = function () {
            var t = this.perspectiveState.get();
            t !== this._perspective && (this.container.style.perspective = t ? t.toFixed() + "px" : "", this.container.style.webkitPerspective = t ? t.toFixed() : "", this._perspective = t), this.srcNode && this.srcNode.commit(this, h.identity, 1, [0, 0], this._size)
        }, e.prototype.getOutputTransform = function (t) {
            var i = this.parsedCache;
            if (i) {
                var s = t.id, e = {transform: i.transforms[s], opacity: i.opacities[s]};
                if (i.origins[s] && (e.origin = i.origins[s]), i.groups[s]) {
                    var o = i.groups[s];
                    e.transform = h.multiply(e.transform, i.groupTransforms[o]), i.groupOpacities[o] && (e.opacity *= i.groupOpacities[o])
                }
                return e
            }
        }, e.prototype.getPerspective = function () {
            return this.perspectiveState.get()
        }, e.prototype.setPerspective = function (t, i, s) {
            return this.perspectiveState.set(t, i, s)
        }, e.prototype.emit = function (t, i) {
            return this.eventHandler.emit(t, i)
        }, e.prototype.on = function (t, i) {
            return this.eventHandler.on(t, i)
        }, e.prototype.unbind = function (t, i) {
            return this.eventHandler.unbind(t, i)
        }, e.prototype.pipe = function (t) {
            return this.eventHandler.pipe(t)
        }, e.prototype.unpipe = function (t) {
            return this.eventHandler.unpipe(t)
        }, s.exports = e
    }), define("famous/Engine", ["require", "exports", "module", "./Context", "./EventHandler"], function (t, i, s) {
        function e() {
            var t = Date.now();
            if (T && T > t - w)return requestAnimationFrame(e), void 0;
            M = t - w, w = t, z.emit("prerender");
            for (var i = 0; i < S.length; i++)S[i].call(this);
            for (S = []; b.length && Date.now() - t < C;)b.shift().call(this);
            for (var i = 0; i < x.length; i++)x[i].update();
            z.emit("postrender"), requestAnimationFrame(e)
        }

        function o(t) {
            if (document.activeElement && "INPUT" == document.activeElement.nodeName)return document.activeElement.addEventListener("blur", function s() {
                this.removeEventListener("blur", s), o(t)
            }), void 0;
            window.scrollTo(0, 0);
            for (var i = 0; i < x.length; i++)x[i].emit("resize");
            z.emit("resize")
        }

        function n(t) {
            return z.pipe(t)
        }

        function r(t) {
            return z.unpipe(t)
        }

        function a(t, i) {
            z.on(t, i)
        }

        function h(t, i) {
            z.emit(t, i)
        }

        function u(t, i) {
            z.unbind(t, i)
        }

        function p() {
            return 1e3 / M
        }

        function c(t) {
            T = Math.floor(1e3 / t)
        }

        function l(t) {
            void 0 === t ? (t = document.createElement("div"), t.classList.add("container"), document.body.appendChild(t)) : t instanceof Element || (t = document.createElement("div"), console.warn("Tried to create context on non-existent element"));
            var i = new y(t);
            return x.push(i), i
        }

        function f(t) {
            S.push(t)
        }

        function d(t) {
            return P[t]
        }

        function m(t) {
            var i = P.length;
            return P[i] = t, i
        }

        function v(t) {
            b.push(t)
        }

        var y = t("./Context"), g = t("./EventHandler"), x = [], S = [], b = [], w = Date.now(), M = void 0, T = void 0, z = new g, C = 10, P = [];
        requestAnimationFrame(e), window.addEventListener("resize", o, !1), o(), window.addEventListener("touchmove", function (t) {
            t.preventDefault()
        }, !1);
        for (var _ = ["touchstart", "touchmove", "touchend", "touchcancel", "click", "keydown", "keyup", "keypress", "mouseup", "mousedown", "mousemove", "mouseover", "mouseout", "mousewheel", "wheel", "resize"], O = 0; O < _.length; O++) {
            var E = _[O];
            document.body.addEventListener(E, function (t) {
                z.emit(t.type, t, !1)
            }, !1)
        }
        s.exports = {on: a, defer: v, emit: h, unbind: u, pipe: n, unpipe: r, createContext: l, getFPS: p, setFPSCap: c, nextTick: f, getEntity: d, registerEntity: m}
    }), define("famous-scene/SceneController", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous/Engine"], function (t, i, s) {
        function e() {
            o.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.routes = {}, this.sceneArray = [], this.sceneIndex = 0
        }

        var o = t("famous/View");
        t("famous/Matrix");
        var n = t("famous/Modifier"), r = t("famous/Engine");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {loop: !0}, e.prototype.addScene = function (t, i) {
            this.routes[t] = i, this.sceneArray.push(t), this.emit("add", {key: t, view: i})
        }, e.prototype.addScenes = function (t) {
            for (var i in t)this.addScene(i, t[i])
        }, e.prototype.removeScene = function (t) {
            delete this.routes[t], this.emit("remove", {key: t})
        }, e.prototype.reset = function () {
            this.node.object = void 0
        }, e.prototype.next = function () {
            this.sceneIndex++, this.sceneIndex == this.sceneArray.length ? this.options.loop ? (this.sceneIndex = 0, this.setScene(this.sceneArray[this.sceneIndex], "next")) : (this.emit("end"), this.sceneIndex--) : this.setScene(this.sceneArray[this.sceneIndex], "next"), this.emit("next", this.sceneArray[this.sceneIndex])
        }, e.prototype.prev = function () {
            this.sceneIndex--, this.sceneIndex < 0 ? this.options.loop ? (this.sceneIndex = this.sceneArray.length - 1, this.setScene(this.sceneArray[this.sceneIndex], "prev")) : (this.emit("beginning"), this.sceneIndex++) : this.setScene(this.sceneArray[this.sceneIndex], "prev"), this.emit("prev", this.sceneArray[this.sceneIndex])
        }, e.prototype.setActiveTransform = function (t, i, s) {
            this.activeTransform && (this.activeTransform.halt(), this.activeTransform.setTransform(t, i, s))
        }, e.prototype.setScene = function (t, i) {
            var s = this.routes[t];
            return"undefined" == typeof s ? (console.warn("No view exists!", t), void 0) : (this.currentRoute = t, this.ActiveConstructor = s, this.inTransition = !0, void 0 == i && (this.sceneIndex = this.sceneArray.indexOf(this.currentRoute)), this.emit("set", {key: t, view: s, index: this.sceneIndex}), this.activeScene && this.activeScene.deactivate ? (this.activeScene.deactivate(this.activateScene.bind(this), i), this.emit("deactivate"), void 0) : this.activateScene(i))
        }, e.prototype.setSceneOrder = function (t) {
            this.sceneArray = t, this.emit("reorder", {array: this.sceneArray})
        }, e.prototype.activateScene = function () {
            this.reset(), r.unpipe(this.activeScene), this.activeScene = new this.ActiveConstructor, this.activeTransform = new n, this.activeScene.setController && this.activeScene.setController(this), r.pipe(this.activeScene), this.node.add(this.activeTransform).link(this.activeScene), this.activeScene.activate ? this.activeScene.activate(function () {
                this.inTransition = !1, this.emit("activate")
            }.bind(this)) : (this.inTransition = !1, this.emit("activate"))
        }, e.prototype.getCurrentRoute = function () {
            return this.currentRoute
        }, e.prototype.getCurrentIndex = function () {
            return this.sceneIndex
        }, e.prototype.getRoutes = function () {
            return this.routes
        }, e.prototype.getSceneOrder = function () {
            return this.sceneArray
        }, e.prototype.getOrderedScenes = function () {
            for (var t = [], i = 0; i < this.sceneArray.length; i++)t.push(this.routes[this.sceneArray[i]]);
            return t
        }, e.prototype.getActiveTransform = function () {
            return this.activeTransform
        }, s.exports = e
    }), define("app/SceneController", ["require", "exports", "module", "famous-scene/SceneController"], function (t, i, s) {
        var e = t("famous-scene/SceneController"), o = new e;
        s.exports = o
    }), define("famous-animation/Easing", ["require", "exports", "module"], function (t, i, s) {
        var e = {linear: function (t, i, s, e) {
            return t * (s / e) + i
        }, linearNorm: function (t) {
            return t
        }, inQuad: function (t, i, s, e) {
            return s * (t /= e) * t + i
        }, inQuadNorm: function (t) {
            return t * t
        }, outQuad: function (t, i, s, e) {
            return-s * (t /= e) * (t - 2) + i
        }, outQuadNorm: function (t) {
            return-(t -= 1) * t + 1
        }, inOutQuad: function (t, i, s, e) {
            return(t /= e / 2) < 1 ? s / 2 * t * t + i : -s / 2 * (--t * (t - 2) - 1) + i
        }, inOutQuadNorm: function (t) {
            return(t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, inCubic: function (t, i, s, e) {
            return s * (t /= e) * t * t + i
        }, inCubicNorm: function (t) {
            return t * t * t
        }, outCubic: function (t, i, s, e) {
            return s * ((t = t / e - 1) * t * t + 1) + i
        }, outCubicNorm: function (t) {
            return--t * t * t + 1
        }, inOutCubic: function (t, i, s, e) {
            return(t /= e / 2) < 1 ? s / 2 * t * t * t + i : s / 2 * ((t -= 2) * t * t + 2) + i
        }, inOutCubicNorm: function (t) {
            return(t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, inQuart: function (t, i, s, e) {
            return s * (t /= e) * t * t * t + i
        }, inQuartNorm: function (t) {
            return t * t * t * t
        }, outQuart: function (t, i, s, e) {
            return-s * ((t = t / e - 1) * t * t * t - 1) + i
        }, outQuartNorm: function (t) {
            return-(--t * t * t * t - 1)
        }, inOutQuart: function (t, i, s, e) {
            return(t /= e / 2) < 1 ? s / 2 * t * t * t * t + i : -s / 2 * ((t -= 2) * t * t * t - 2) + i
        }, inOutQuartNorm: function (t) {
            return(t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, inQuint: function (t, i, s, e) {
            return s * (t /= e) * t * t * t * t + i
        }, inQuintNorm: function (t) {
            return t * t * t * t * t
        }, outQuint: function (t, i, s, e) {
            return s * ((t = t / e - 1) * t * t * t * t + 1) + i
        }, outQuintNorm: function (t) {
            return--t * t * t * t * t + 1
        }, inOutQuint: function (t, i, s, e) {
            return(t /= e / 2) < 1 ? s / 2 * t * t * t * t * t + i : s / 2 * ((t -= 2) * t * t * t * t + 2) + i
        }, inOutQuintNorm: function (t) {
            return(t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, inSine: function (t, i, s, e) {
            return-s * Math.cos(t / e * (Math.PI / 2)) + s + i
        }, inSineNorm: function (t) {
            return-1 * Math.cos(t * (Math.PI / 2)) + 1
        }, outSine: function (t, i, s, e) {
            return s * Math.sin(t / e * (Math.PI / 2)) + i
        }, outSineNorm: function (t) {
            return Math.sin(t * (Math.PI / 2))
        }, inOutSine: function (t, i, s, e) {
            return-s / 2 * (Math.cos(Math.PI * t / e) - 1) + i
        }, inOutSineNorm: function (t) {
            return-.5 * (Math.cos(Math.PI * t) - 1)
        }, inExpo: function (t, i, s, e) {
            return 0 == t ? i : s * Math.pow(2, 10 * (t / e - 1)) + i
        }, inExpoNorm: function (t) {
            return 0 == t ? 0 : Math.pow(2, 10 * (t - 1))
        }, outExpo: function (t, i, s, e) {
            return t == e ? i + s : s * (-Math.pow(2, -10 * t / e) + 1) + i
        }, outExpoNorm: function (t) {
            return 1 == t ? 1 : -Math.pow(2, -10 * t) + 1
        }, inOutExpo: function (t, i, s, e) {
            return 0 == t ? i : t == e ? i + s : (t /= e / 2) < 1 ? s / 2 * Math.pow(2, 10 * (t - 1)) + i : s / 2 * (-Math.pow(2, -10 * --t) + 2) + i
        }, inOutExpoNorm: function (t) {
            return 0 == t ? 0 : 1 == t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
        }, inCirc: function (t, i, s, e) {
            return-s * (Math.sqrt(1 - (t /= e) * t) - 1) + i
        }, inCircNorm: function (t) {
            return-(Math.sqrt(1 - t * t) - 1)
        }, outCirc: function (t, i, s, e) {
            return s * Math.sqrt(1 - (t = t / e - 1) * t) + i
        }, outCircNorm: function (t) {
            return Math.sqrt(1 - --t * t)
        }, inOutCirc: function (t, i, s, e) {
            return(t /= e / 2) < 1 ? -s / 2 * (Math.sqrt(1 - t * t) - 1) + i : s / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        }, inOutCircNorm: function (t) {
            return(t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, inElastic: function (t, i, s, e) {
            var o = 1.70158, n = 0, r = s;
            if (0 == t)return i;
            if (1 == (t /= e))return i + s;
            if (n || (n = .3 * e), r < Math.abs(s)) {
                r = s;
                var o = n / 4
            } else var o = n / (2 * Math.PI) * Math.asin(s / r);
            return-(r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * e - o) * 2 * Math.PI / n)) + i
        }, inElasticNorm: function (t) {
            var i = 1.70158, s = 0, e = 1;
            return 0 == t ? 0 : 1 == t ? 1 : (s || (s = .3), i = s / (2 * Math.PI) * Math.asin(1 / e), -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * 2 * Math.PI / s)))
        }, outElastic: function (t, i, s, e) {
            var o = 1.70158, n = 0, r = s;
            if (0 == t)return i;
            if (1 == (t /= e))return i + s;
            if (n || (n = .3 * e), r < Math.abs(s)) {
                r = s;
                var o = n / 4
            } else var o = n / (2 * Math.PI) * Math.asin(s / r);
            return r * Math.pow(2, -10 * t) * Math.sin((t * e - o) * 2 * Math.PI / n) + s + i
        }, outElasticNorm: function (t) {
            var i = 1.70158, s = 0, e = 1;
            return 0 == t ? 0 : 1 == t ? 1 : (s || (s = .3), i = s / (2 * Math.PI) * Math.asin(1 / e), e * Math.pow(2, -10 * t) * Math.sin((t - i) * 2 * Math.PI / s) + 1)
        }, inOutElastic: function (t, i, s, e) {
            var o = 1.70158, n = 0, r = s;
            if (0 == t)return i;
            if (2 == (t /= e / 2))return i + s;
            if (n || (n = e * .3 * 1.5), r < Math.abs(s)) {
                r = s;
                var o = n / 4
            } else var o = n / (2 * Math.PI) * Math.asin(s / r);
            return 1 > t ? -.5 * r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * e - o) * 2 * Math.PI / n) + i : .5 * r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * e - o) * 2 * Math.PI / n) + s + i
        }, inOutElasticNorm: function (t) {
            var i = 1.70158, s = 0, e = 1;
            return 0 == t ? 0 : 2 == (t /= .5) ? 1 : (s || (s = .3 * 1.5), i = s / (2 * Math.PI) * Math.asin(1 / e), 1 > t ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * 2 * Math.PI / s) : .5 * e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - i) * 2 * Math.PI / s) + 1)
        }, inBack: function (t, i, s, e, o) {
            return void 0 == o && (o = 1.70158), s * (t /= e) * t * ((o + 1) * t - o) + i
        }, inBackNorm: function (t, i) {
            return void 0 == i && (i = 1.70158), t * t * ((i + 1) * t - i)
        }, outBack: function (t, i, s, e, o) {
            return void 0 == o && (o = 1.70158), s * ((t = t / e - 1) * t * ((o + 1) * t + o) + 1) + i
        }, outBackNorm: function (t, i) {
            return void 0 == i && (i = 1.70158), --t * t * ((i + 1) * t + i) + 1
        }, inOutBack: function (t, i, s, e, o) {
            return void 0 == o && (o = 1.70158), (t /= e / 2) < 1 ? s / 2 * t * t * (((o *= 1.525) + 1) * t - o) + i : s / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + i
        }, inOutBackNorm: function (t, i) {
            return void 0 == i && (i = 1.70158), (t /= .5) < 1 ? .5 * t * t * (((i *= 1.525) + 1) * t - i) : .5 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2)
        }, inBounce: function (t, i, s, o) {
            return s - e.outBounce(o - t, 0, s, o) + i
        }, inBounceNorm: function (t) {
            return 1 - e.outBounceNorm(1 - t)
        }, outBounce: function (t, i, s, e) {
            return(t /= e) < 1 / 2.75 ? s * 7.5625 * t * t + i : 2 / 2.75 > t ? s * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? s * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : s * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        }, outBounceNorm: function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, inOutBounce: function (t, i, s, o) {
            return o / 2 > t ? .5 * e.inBounce(2 * t, 0, s, o) + i : .5 * e.outBounce(2 * t - o, 0, s, o) + .5 * s + i
        }, inOutBounceNorm: function (t) {
            return.5 > t ? .5 * e.inBounceNorm(2 * t) : .5 * e.outBounceNorm(2 * t - 1) + .5
        }};
        s.exports = e
    }), define("famous-scene/Transitions", ["require", "exports", "module", "famous-animation/Easing", "famous/Matrix"], function (t, i, s) {
        var e = t("famous-animation/Easing"), o = t("famous/Matrix");
        s.exports = {popIn: function (t, i) {
            var s = {curve: e.inOutExpoNorm, duration: 1e3};
            t.halt(), t.setTransform(o.move(o.scale(1e-6, 1e-6), [.5 * window.innerWidth, .5 * window.innerHeight])), t.setTransform(o.identity, s, i)
        }, popOut: function (t, i) {
            var s = {curve: e.inOutExpoNorm, duration: 1e3};
            t.halt(), t.setTransform(o.move(o.scale(1e-6, 1e-6), [.5 * window.innerWidth, .5 * window.innerHeight]), s, i)
        }, fadeLeft: function (t, i) {
            var s = {curve: e.inOutExpoNorm, duration: 1e3};
            t.halt(), t.setTransform(o.translate(-window.innerWidth, 0, 0), s, i), t.setOpacity(0, s)
        }, fadeInLeft: function (t, i) {
            var s = {curve: e.inOutExpoNorm, duration: 1e3};
            t.halt(), t.setTransform(o.translate(window.innerWidth, 0, 0)), t.setTransform(o.identity, s, i), t.setOpacity(0), t.setOpacity(1, s)
        }, fadeRight: function (t, i) {
            var s = {curve: e.inOutExpoNorm, duration: 1e3};
            t.halt(), t.setTransform(o.translate(window.innerWidth, 0, 0), s, i), t.setOpacity(0, s)
        }, fadeInRight: function (t, i) {
            var s = {curve: e.inOutExpoNorm, duration: 1e3};
            t.halt(), t.setTransform(o.translate(-window.innerWidth, 0, 0)), t.setTransform(o.identity, s, i), t.setOpacity(0), t.setOpacity(1, s)
        }}
    }), define("famous-scene/SceneTransitions", ["require", "exports", "module", "famous-scene/SceneController", "famous-animation/Easing", "famous/Matrix", "./Transitions"], function (t, i, s) {
        function e(t) {
            this.controller = t
        }

        t("famous-scene/SceneController"), t("famous-animation/Easing"), t("famous/Matrix");
        var o = t("./Transitions");
        e.prototype.setController = function (t) {
            this.controller = t
        }, e.prototype.popIn = function (t) {
            o.popIn(this.controller.getActiveTransform(), t)
        }, e.prototype.popOut = function (t) {
            o.popOut(this.controller.getActiveTransform(), t)
        }, e.prototype.sceneFadeLeft = function (t) {
            o.fadeLeft(this.controller.getActiveTransform(), t)
        }, e.prototype.sceneFadeInLeft = function (t) {
            o.fadeInLeft(this.controller.getActiveTransform(), t)
        }, e.prototype.sceneFadeRight = function (t) {
            o.fadeRight(this.controller.getActiveTransform(), t)
        }, e.prototype.sceneFadeInRight = function (t) {
            o.fadeInRight(this.controller.getActiveTransform(), t)
        }, s.exports = e
    }), define("app/SceneTransitions", ["require", "exports", "module", "famous-scene/SceneTransitions", "app/SceneController"], function (t, i, s) {
        var e = t("famous-scene/SceneTransitions"), o = t("app/SceneController"), n = new e;
        n.setController(o), s.exports = n
    }), define("famous/Surface", ["require", "exports", "module", "./Entity", "./EventHandler", "./Matrix"], function (t, i, s) {
        function e(t) {
            this.options = {}, this.properties = {}, this.content = "", this.classList = [], this.size = void 0, this._classesDirty = !0, this._stylesDirty = !0, this._sizeDirty = !0, this._contentDirty = !0, this._dirtyClasses = [], this._matrix = void 0, this._opacity = 1, this._origin = void 0, this._size = void 0, this.eventForwarder = function (t) {
                this.emit(t.type, t)
            }.bind(this), this.eventHandler = new f, this.eventHandler.bindThis(this), this.id = l.register(this), t && this.setOptions(t), this._currTarget = void 0
        }

        function o(t) {
            for (var i = this.surfaceEvents, s = 0; s < i.length; s++)t.addEventListener(i[s], this.eventForwarder)
        }

        function r(t) {
            for (var i = this.surfaceEvents, s = 0; s < i.length; s++)t.removeEventListener(i[s], this.eventForwarder)
        }

        function a(t) {
            for (var i = 0; i < this._dirtyClasses.length; i++)t.classList.remove(this._dirtyClasses[i]);
            this._dirtyClasses = []
        }

        function h(t) {
            for (var i in this.properties)t.style[i] = this.properties[i]
        }

        function u(t) {
            for (var i in this.properties)t.style[i] = ""
        }

        function p(t, i) {
            return t || i ? t && i ? t[0] == i[0] && t[1] == i[1] : !1 : !0
        }

        function c(t) {
            return(100 * t[0]).toFixed(6) + "% " + (100 * t[1]).toFixed(6) + "%"
        }

        var l = t("./Entity"), f = t("./EventHandler"), d = t("./Matrix"), m = void 0 !== document.body.style.webkitTransform;
        e.prototype.surfaceEvents = ["touchstart", "touchmove", "touchend", "touchcancel", "click", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "mousewheel", "wheel"], e.prototype.elementType = "div", e.prototype.elementClass = "surface", e.prototype.on = function (t, i) {
            this.eventHandler.on(t, i)
        }, e.prototype.unbind = function (t, i) {
            this.eventHandler.unbind(t, i)
        }, e.prototype.emit = function (t, i) {
            i && !i.origin && (i.origin = this);
            var s = this.eventHandler.emit(t, i);
            return s && i.stopPropagation && i.stopPropagation(), s
        }, e.prototype.pipe = function (t) {
            return this.eventHandler.pipe(t)
        }, e.prototype.pipeEvents = function () {
            return console.warn("pipeEvents is deprecated; use pipe instead"), this.pipe.apply(this, arguments)
        }, e.prototype.unpipe = function (t) {
            return this.eventHandler.unpipe(t)
        }, e.prototype.render = function () {
            return this.id
        }, e.prototype.setProperties = function (t) {
            for (n in t)this.properties[n] = t[n];
            this._stylesDirty = !0
        }, e.prototype.getProperties = function () {
            return this.properties
        }, e.prototype.addClass = function (t) {
            this.classList.indexOf(t) < 0 && (this.classList.push(t), this._classesDirty = !0)
        }, e.prototype.removeClass = function (t) {
            var i = this.classList.indexOf(t);
            i >= 0 && (this._dirtyClasses.push(this.classList.splice(i, 1)[0]), this._classesDirty = !0)
        }, e.prototype.setClasses = function (t) {
            for (var i = [], s = 0; s < this.classList.length; s++)t.indexOf(this.classList[s]) < 0 && i.push(this.classList[s]);
            for (var s = 0; s < i.length; s++)this.removeClass(i[s]);
            for (var s = 0; s < t.length; s++)this.addClass(t[s])
        }, e.prototype.getClassList = function () {
            return this.classList
        }, e.prototype.setContent = function (t) {
            this.content != t && (this.content = t, this._contentDirty = !0)
        }, e.prototype.getContent = function () {
            return this.content
        }, e.prototype.setOptions = function (t) {
            t.size && this.setSize(t.size), t.classes && this.setClasses(t.classes), t.properties && this.setProperties(t.properties), t.content && this.setContent(t.content)
        };
        var v, y, g;
        v = m ? function (t, i) {
            t.style.webkitTransform = d.formatCSS(i)
        } : function (t, i) {
            t.style.transform = d.formatCSS(i)
        }, y = m ? function (t, i) {
            t.style.webkitTransformOrigin = c(i)
        } : function (t, i) {
            t.style.transformOrigin = c(i)
        }, g = m ? function (t) {
            t.style.webkitTransform = "scale3d(0.0001,0.0001,1)", t.style.opacity = 0
        } : function (t) {
            t.style.transform = "scale3d(0.0001,0.0001,1)", t.style.opacity = 0
        }, e.prototype.setup = function (t) {
            var i = t.allocate(this.elementType);
            if (this.elementClass)if (this.elementClass instanceof Array)for (var s = 0; s < this.elementClass.length; s++)i.classList.add(this.elementClass[s]); else i.classList.add(this.elementClass);
            o.call(this, i), y(i, [0, 0]), this._currTarget = i, this._stylesDirty = !0, this._classesDirty = !0, this._sizeDirty = !0, this._contentDirty = !0, this._matrix = void 0, this._opacity = void 0, this._origin = void 0, this._size = void 0
        }, e.prototype.commit = function (t, i, s, e, o) {
            this._currTarget || this.setup(t.getAllocator());
            var n = this._currTarget;
            if (this.size) {
                var r = o;
                o = this.size.slice(0), void 0 === o[0] && r[0] && (o[0] = r[0]), void 0 === o[1] && r[1] && (o[1] = r[1])
            }
            if (p(this._size, o) || (this._size = o.slice(0), this._sizeDirty = !0), !i && this._matrix)return this._matrix = void 0, this._opacity = 0, g(n), void 0;
            if (this._opacity !== s && (this._opacity = s, n.style.opacity = Math.min(s, .999999)), !p(this._origin, e) || !d.equals(this._matrix, i)) {
                i || (i = d.identity), e || (e = [0, 0]), this._origin = e.slice(0), this._matrix = i;
                var u = i;
                e && (u = d.moveThen([-this._size[0] * e[0], -this._size[1] * e[1]], i)), v(n, u)
            }
            if (this._classesDirty || this._stylesDirty || this._sizeDirty || this._contentDirty) {
                if (this._classesDirty) {
                    a.call(this, n);
                    for (var c = this.getClassList(), l = 0; l < c.length; l++)n.classList.add(c[l]);
                    this._classesDirty = !1
                }
                this._stylesDirty && (h.call(this, n), this._stylesDirty = !1), this._sizeDirty && (this._size && (n.style.width = this._size[0] !== !0 ? this._size[0] + "px" : "", n.style.height = this._size[1] !== !0 ? this._size[1] + "px" : ""), this._sizeDirty = !1), this._contentDirty && (this.deploy(n), this._contentDirty = !1)
            }
        }, e.prototype.cleanup = function (t) {
            var i = this._currTarget;
            this.recall(i), i.style.width = "", i.style.height = "", this._size = void 0, u.call(this, i);
            var s = this.getClassList();
            a.call(this, i);
            for (var e = 0; e < s.length; e++)i.classList.remove(s[e]);
            r.call(this, i), this._currTarget = void 0, t.deallocate(i), g(i)
        }, e.prototype.deploy = function (t) {
            var i = this.getContent();
            "string" == typeof i ? t.innerHTML = i : t.appendChild(i)
        }, e.prototype.recall = function (t) {
            for (var i = document.createDocumentFragment(); t.hasChildNodes();)i.appendChild(t.firstChild);
            this.setContent(i)
        }, e.prototype.getSize = function (t) {
            return t ? this._size : this.size || this._size
        }, e.prototype.setSize = function (t) {
            this.size = t ? t.slice(0, 2) : void 0, this._sizeDirty = !0
        }, s.exports = e
    }), define("core/ExpandingSurface", ["require", "exports", "module", "famous/Surface", "famous/Engine"], function (t, i, s) {
        function e() {
            n.apply(this, arguments), this._resizeDirty = !0, this._checkHeight = o.bind(this), r.on("postrender", this._checkHeight)
        }

        function o() {
            if (this._resizeDirty && this._currTarget) {
                var t = [this.size[0], this._currTarget.firstChild.clientHeight];
                this.setSize(t), this.emit("resize", t), this._dirty = !1, r.unbind("postrender", this._checkHeight)
            }
        }

        var n = t("famous/Surface"), r = t("famous/Engine");
        e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.prototype.setHeightDirty = function () {
            this._resizeDirty = !0, r.on("postrender", this._checkHeight)
        }, s.exports = e
    }), define("core/GA", ["require", "exports", "module"], function (t, i, s) {
        var e = e || [];
        e.push(["_setAccount", "UA-34653957-1"]), e.push(["_setCampSourceKey", "utm_source"]), e.push(["_setCampMediumKey", "utm_medium"]), e.push(["_setCampContentKey", "utm_keyword"]), e.push(["_setCampTermKey", "utm_keyword"]), e.push(["_setCampNameKey", "utm_campaign"]), e.push(["_trackPageview"]), function () {
            var t = document.createElement("script");
            t.type = "text/javascript", t.async = !0, t.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(t, i)
        }(), s.exports = e
    }), define("famous-utils/Time", ["require", "exports", "module", "famous/Engine"], function (t, i, s) {
        function e(t, i) {
            var s = Date.now(), e = function () {
                var e = Date.now();
                e - s >= i && (t(), s = Date.now())
            };
            return h.on("prerender", e), e
        }

        function o(t) {
            h.unbind("prerender", t)
        }

        function n(t, i, s) {
            var e = Date.now(), o = function () {
                var n = Date.now(), r = (n - e) / t;
                return n - e >= t ? (i(1), h.unbind("prerender", o), s && s(), void 0) : (i(r), void 0)
            };
            h.on("prerender", o)
        }

        function r(t, i) {
            var s = Date.now(), e = function () {
                var o = Date.now();
                return o - s >= i ? (h.unbind("prerender", e), t(), void 0) : void 0
            };
            return h.on("prerender", e), e
        }

        function a(t) {
            h.unbind("prerender", t)
        }

        var h = t("famous/Engine");
        s.exports = {setInterval: e, removeInterval: o, executeOver: n, setTimeout: r, removeTimeout: a}
    }), define("famous-utils/Utils", ["require", "exports", "module", "./Time", "famous/Matrix"], function (t, i, s) {
        var e = t("./Time"), o = t("famous/Matrix"), n = {rad2deg: function (t) {
            return 57.2957795 * t
        }, deg2rad: function (t) {
            return.0174532925 * t
        }, distance: function (t, i, s, e) {
            var o = s - t, n = e - i;
            return Math.sqrt(o * o + n * n)
        }, distance3D: function (t, i, s, e, o, n) {
            var r = e - t, a = o - i, h = n - s;
            return Math.sqrt(r * r + a * a + h * h)
        }, map: function (t, i, s, e, o, n) {
            var r = (t - i) / (s - i) * (o - e) + e;
            return n && (o > e ? r > o ? r = o : e > r && (r = e) : o > r ? r = o : r > e && (r = e)), r
        }, limit: function (t, i, s) {
            return t = Math.min(t, s), t = Math.max(t, i)
        }, perspective: function (t, i, s, e) {
            var o = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], n = 1 / Math.tan(t / 2), r = 1 / (s - e);
            return o[0] = n / i, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = n, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = (e + s) * r, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = 2 * e * s * r, o[15] = 0, o
        }, ortho: function (t, i, s, e, o, n) {
            var r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], a = -(i + t) / (i - t), h = -(e + s) / (e - s), u = -(n + o) / (n - o);
            return r[0] = 2 / (i - t), r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 2 / (e - s), r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = -2 / (n - o), r[11] = -1, r[12] = a, r[13] = h, r[14] = u, r[15] = 1, r
        }, normalFromFM: function (t, i) {
            var s = i[0], e = i[1], o = i[2], n = i[3], r = i[4], a = i[5], h = i[6], u = i[7], p = i[8], c = i[9], l = i[10], f = i[11], d = i[12], m = i[13], v = i[14], y = i[15], g = s * a - e * r, x = s * h - o * r, S = s * u - n * r, b = e * h - o * a, w = e * u - n * a, M = o * u - n * h, T = p * m - c * d, z = p * v - l * d, C = p * y - f * d, P = c * v - l * m, _ = c * y - f * m, O = l * y - f * v, E = g * O - x * _ + S * P + b * C - w * z + M * T;
            return E ? (E = 1 / E, t[0] = (a * O - h * _ + u * P) * E, t[1] = (h * C - r * O - u * z) * E, t[2] = (r * _ - a * C + u * T) * E, t[3] = (o * _ - e * O - n * P) * E, t[4] = (s * O - o * C + n * z) * E, t[5] = (e * C - s * _ - n * T) * E, t[6] = (m * M - v * w + y * b) * E, t[7] = (v * S - d * M - y * x) * E, t[8] = (d * w - m * S + y * g) * E, t) : null
        }, clamp: function (t, i, s) {
            return i > t ? i : t > s ? s : t
        }, color: function (t, i, s, e) {
            return"rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(s) + "," + e + ")"
        }, backgroundTransparent: function () {
            return{backgroundColor: "transparent"}
        }, backgroundColor: function (t, i, s, e) {
            return{backgroundColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(s) + "," + e + ")"}
        }, borderRadius: function (t) {
            return{borderRadius: t + "px"}
        }, borderTopWidth: function (t) {
            return{borderTopWidth: t + "px"}
        }, borderBottomWidth: function (t) {
            return{borderBottomWidth: t + "px"}
        }, borderLeftWidth: function (t) {
            return{borderLeftWidth: t + "px"}
        }, borderRightWidth: function (t) {
            return{borderRightWidth: t + "px"}
        }, borderWidth: function (t) {
            return{borderWidth: t + "px"}
        }, borderColor: function (t, i, s, e) {
            return 0 == e ? {borderColor: "transparent"} : {borderColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(s) + "," + e + ")"}
        }, borderTopColor: function (t, i, s, e) {
            return 0 == e ? {borderTopColor: "transparent"} : {borderTopColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(s) + "," + e + ")"}
        }, borderBottomColor: function (t, i, s, e) {
            return 0 == e ? {borderBottomColor: "transparent"} : {borderBottomColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(s) + "," + e + ")"}
        }, borderRightColor: function (t, i, s, e) {
            return 0 == e ? {borderRightColor: "transparent"} : {borderRightColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(s) + "," + e + ")"}
        }, borderLeftColor: function (t, i, s, e) {
            return 0 == e ? {borderLeftColor: "transparent"} : {borderLeftColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(s) + "," + e + ")"}
        }, borderStyle: function (t) {
            return{borderStyle: t}
        }, borderTopStyle: function (t) {
            return{borderTopStyle: t}
        }, borderBottomStyle: function (t) {
            return{borderBottomStyle: t}
        }, borderRightStyle: function (t) {
            return{borderRightStyle: t}
        }, borderLeftStyle: function (t) {
            return{borderLeftStyle: t}
        }, colorHSL: function (t, i, s, e) {
            return"hsla(" + Math.floor(t) + "," + Math.floor(i) + "%," + Math.floor(s) + "%," + e + ")"
        }, backgroundTransparent: function () {
            return{backgroundColor: "transparent"}
        }, backgroundColorHSL: function (t, i, s, e) {
            return{backgroundColor: "hsla(" + Math.floor(t) + "," + Math.floor(i) + "%," + Math.floor(s) + "%," + e + ")"}
        }, backfaceVisible: function (t) {
            return t ? {"backface-visibility": "visible", "-webkit-backface-visibility": "visible", "-moz-backface-visibility": "visible", "-ms-backface-visibility": "visible"} : {"backface-visibility": "hidden", "-webkit-backface-visibility": "hidden", "-moz-backface-visibility": "hidden", "-ms-backface-visibility": "hidden"}
        }, clipCircle: function (t, i, s) {
            return{"-webkit-clip-path": "circle(" + t + "px," + i + "px," + s + "px)"}
        }, getWidth: function () {
            return window.innerWidth
        }, getHeight: function () {
            return window.innerHeight
        }, getCenter: function () {
            return[.5 * n.getWidth(), .5 * n.getHeight()]
        }, isMobile: function () {
            return/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? !0 : !1
        }, isString: function (t) {
            return"string" == typeof t || t instanceof String
        }, isArray: function (t) {
            return"[object Array]" === Object.prototype.toString.call(t)
        }, extend: function (t, i) {
            for (var s in i)t[s] = i[s];
            return t
        }, getDevicePixelRatio: function () {
            return window.devicePixelRatio ? window.devicePixelRatio : 1
        }, supportsWebGL: function () {
            return/Android|Chrome|Mozilla/i.test(navigator.appCodeName) && window.WebGLRenderingContext ? !0 : !1
        }, getSurfacePosition: function (t) {
            function i(t) {
                var e = o(t);
                if ("" !== e && void 0 !== e) {
                    var n = s(e);
                    r[0] += n[0], r[1] += n[1], r[2] += n[2]
                }
                t.parentElement !== document.body && i(t.parentNode)
            }

            function s(t) {
                var i = [];
                t = e(t), i[0] = parseInt(t[12].replace(" ", "")), i[1] = parseInt(t[13].replace(" ", "")), i[2] = parseInt(t[14].replace(" ", ""));
                for (var s = 0; s < i.length; s++)"undefined" == typeof i[s] && (i[s] = 0);
                return i
            }

            function e(t) {
                return t = t.replace("matrix3d(", ""), t = t.replace(")", ""), t.split(",")
            }

            function o(t) {
                var i = t.style.webkitTransform || t.style.transform;
                return i
            }

            var n = t._currTarget, r = [0, 0, 0];
            return n ? (i(n), r) : void 0
        }, getCenterMatrix: function (t, i, s) {
            return void 0 == s && (s = 0), o.translate(t[0] - .5 * i[0], t[1] - .5 * i[1], s)
        }, debounce: function (t, i) {
            var s, o, n, r, a;
            return function () {
                o = this, a = arguments, n = new Date;
                var h = function () {
                    var u = new Date - n;
                    i > u ? s = e.setTimeout(h, i - u) : (s = null, r = t.apply(o, a))
                };
                return s || (s = e.setTimeout(h, i)), r
            }
        }, hasUserMedia: function () {
            return!!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
        }, getUserMedia: function () {
            return navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
        }, isWebkit: function () {
            return!!window.webkitURL
        }};
        s.exports = n
    }), define("famous-utils/KeyCodes", ["require", "exports", "module"], function (t, i, s) {
        var e = {0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, a: 97, b: 98, c: 99, d: 100, e: 101, f: 102, g: 103, h: 104, i: 105, j: 106, k: 107, l: 108, m: 109, n: 110, o: 111, p: 112, q: 113, r: 114, s: 115, t: 116, u: 117, v: 118, w: 119, x: 120, y: 121, z: 122, ENTER: 13, LEFT_ARROW: 37, RIGHT_ARROW: 39, UP_ARROW: 38, DOWN_ARROW: 40, SPACE: 32, SHIFT: 16, TAB: 9};
        s.exports = e
    }), define("famous-scene/Scene", ["require", "exports", "module", "famous-utils/Utils", "famous-utils/KeyCodes", "famous/Engine", "famous/EventHandler", "famous/View"], function (t, i, s) {
        function e() {
            n.apply(this, arguments), this.width = o.getWidth(), this.height = o.getHeight(), this.mouseDown = !1, this.callbacks = {}, this.bindEvents()
        }

        var o = t("famous-utils/Utils");
        t("famous-utils/KeyCodes"), t("famous/Engine"), t("famous/EventHandler");
        var n = t("famous/View");
        e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.prototype.bindEvents = function () {
            this.callbacks.prerender = this.update.bind(this), this.callbacks.touchstart = this.touchstart.bind(this), this.callbacks.touchmove = this.touchmove.bind(this), this.callbacks.touchend = this.touchend.bind(this), this.callbacks.keypress = this.keypress.bind(this), this.callbacks.resize = o.debounce(this.resize.bind(this), 333), this.callbacks.mousedown = this._mousedown.bind(this), this.callbacks.mousemove = this._mousemove.bind(this), this.callbacks.mouseover = this._mouseover.bind(this), this.callbacks.mouseup = this._mouseup.bind(this), this.callbacks.mouseout = this._mouseout.bind(this), this.callbacks.keydown = this.keydown.bind(this), this.callbacks.keyup = this.keyup.bind(this);
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++)this.eventInput.on(t[i], this.callbacks[t[i]])
        }, e.prototype.unbindEvents = function () {
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++)this.unbind(t[i], this.callbacks[t[i]])
        }, e.prototype.activate = function (t) {
            t && t()
        }, e.prototype.update = function () {
        }, e.prototype.render = function () {
            return this.node.render()
        }, e.prototype.deactivate = function (t) {
            t && t()
        }, e.prototype.touchstart = function () {
        }, e.prototype.touchmove = function () {
        }, e.prototype.touchend = function () {
        }, e.prototype._mousedown = function (t) {
            this.mouseDown = !0, this.mousedown(t)
        }, e.prototype._mousemove = function (t) {
            this.mouseDown === !0 ? this.mousedrag(t) : this.mousemove(t)
        }, e.prototype._mouseover = function (t) {
            this.mouseover(t)
        }, e.prototype._mouseup = function (t) {
            this.mouseDown = !1, this.mouseup(t)
        }, e.prototype._mouseout = function (t) {
            this.mouseout(t)
        }, e.prototype.mousedown = function () {
        }, e.prototype.mouseup = function () {
        }, e.prototype.mousemove = function () {
        }, e.prototype.mouseover = function () {
        }, e.prototype.mouseout = function () {
        }, e.prototype.mousedrag = function () {
        }, e.prototype.keypress = function () {
        }, e.prototype.keydown = function () {
        }, e.prototype.keyup = function () {
        }, e.prototype.keypress = function () {
        }, e.prototype.resize = function () {
            this.width = o.getWidth(), this.height = o.getHeight()
        }, e.prototype.setController = function (t) {
            this.controller = t
        }, s.exports = e
    }), define("famous-physics/math/Vector", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s) {
            return 1 == arguments.length ? (t instanceof Array && this.setXYZ.apply(this, t), t instanceof e && this.set(t)) : (this.x = t || 0, this.y = i || 0, this.z = s || 0), this
        }

        var o = new e(0, 0, 0);
        e.prototype.add = function (t, i) {
            return i = i || o, i.setXYZ(this.x + (t.x || 0), this.y + (t.y || 0), this.z + (t.z || 0))
        }, e.prototype.sub = function (t, i) {
            return i = i || o, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
        }, e.prototype.mult = function (t, i) {
            return i = i || o, i.setXYZ(t * this.x, t * this.y, t * this.z)
        }, e.prototype.div = function (t, i) {
            return this.mult(1 / t, i)
        }, e.prototype.cross = function (t, i) {
            return i = i || o, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
        }, e.prototype.equals = function (t) {
            return t.x == this.x && t.y == this.y && t.z == this.z
        }, e.prototype.rotate = function (t, i) {
            var s = t.x, e = t.y, o = t.z;
            return this.rotateX(s, i).rotateY(e, i).rotateZ(o, i)
        }, e.prototype.rotateX = function (t, i) {
            i = i || o;
            var s = this.x, e = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(s, -n * a + e * r, n * r - e * a)
        }, e.prototype.rotateY = function (t, i) {
            i = i || o;
            var s = this.x, e = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(-n * a + s * r, e, n * r + s * a)
        }, e.prototype.rotateZ = function (t, i) {
            i = i || o;
            var s = this.x, e = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(-e * a + s * r, e * r + s * a, n)
        }, e.prototype.dot = function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, e.prototype.normSquared = function () {
            return this.dot(this)
        }, e.prototype.norm = function () {
            return Math.sqrt(this.normSquared())
        }, e.prototype.normalize = function (t, i) {
            t = void 0 !== t ? t : 1, i = i || o;
            var s = 1e-7, e = this.norm();
            return Math.abs(e) > s ? this.mult(t / e, i) : i.setXYZ(t, 0, 0)
        }, e.prototype.clone = function () {
            return new e(this.x, this.y, this.z)
        }, e.prototype.isZero = function () {
            return!(this.x || this.y || this.z)
        }, e.prototype.set = function (t) {
            return t instanceof Array ? (this.x = t[0], this.y = t[1], this.z = t[2] || 0) : (this.x = t.x, this.y = t.y, this.z = t.z || 0), this !== o && o.clear(), this
        }, e.prototype.put = function (t) {
            t.set(o)
        }, e.prototype.setXYZ = function (t, i, s) {
            return o.clear(), this.x = t, this.y = i, this.z = s, this
        }, e.prototype.clear = function () {
            this.x = 0, this.y = 0, this.z = 0
        }, e.prototype.cap = function (t, i) {
            if (i = i || o, 1 / 0 === t)return i;
            var s = this.norm();
            return s > t && this.normalize().mult(t, i), i
        }, e.prototype.project = function (t, i) {
            return i = i || o, t.mult(this.dot(t), i)
        }, e.prototype.reflect = function (t, i) {
            return i = i || o, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, e.prototype.toArray = function () {
            return[this.x, this.y, this.z]
        }, e.prototype.get = function () {
            return this.toArray()
        }, e.prototype.zero = new e(0, 0, 0), e.prototype.one = new e(1, 1, 1), s.exports = e
    }), define("famous-physics/bodies/Particle", ["require", "exports", "module", "famous/RenderNode", "famous-physics/math/Vector", "famous/Matrix"], function (t, i, s) {
        function e(t) {
            t = t || {}, this.p = t.p ? new n(t.p) : new n(0, 0, 0), this.v = t.v ? new n(t.v) : new n(0, 0, 0), this.a = t.a ? new n(t.a) : new n(0, 0, 0), this.f = t.f ? new n(t.f) : new n(0, 0, 0), this.m = void 0 !== t.m ? t.m : 1, this.restitution = void 0 !== t.restitution ? t.restitution : .5, this.dissipation = void 0 !== t.dissipation ? t.dissipation : 0, this.immunity = void 0 !== t.immunity ? t.immunity : !1, this.axis = void 0 !== t.axis ? t.axis : void 0, this.mInv = 1 / this.m, this.size = [0, 0, 0], this.node = void 0, this.spec = {size: [0, 0], target: {origin: [.5, .5], transform: void 0, target: void 0}}
        }

        var o = t("famous/RenderNode"), n = t("famous-physics/math/Vector"), r = t("famous/Matrix");
        e.AXIS = {X: 0, Y: 1, Z: 2}, e.prototype.setPos = function (t) {
            this.p.set(t)
        }, e.prototype.getPos = function () {
            return this.p.get()
        }, e.prototype.setVel = function (t, i) {
            (!this.getImmunity() || i) && this.v.set(t)
        }, e.prototype.getVel = function () {
            return this.v.get()
        }, e.prototype.setMass = function (t) {
            this.m = t, this.mInv = 1 / t
        }, e.prototype.getMass = function () {
            return this.m
        }, e.prototype.setImmunity = function (t) {
            this.immunity = t
        }, e.prototype.getImmunity = function () {
            return this.immunity
        }, e.prototype.toggleImmunity = function () {
            this.setImmunity(!this.getImmunity())
        }, e.prototype.clear = function (t, i) {
            t = t || new n, i = i || new n, this.setPos(t), this.setVel(i), this.f.clear(), this.a.clear()
        }, e.prototype.applyForce = function (t) {
            this.immunity || this.f.add(t, this.f)
        }, e.prototype.applyImpulse = function (t) {
            this.immunity || this.v.add(t.mult(this.mInv), this.v)
        }, e.prototype.getEnergy = function () {
            return.5 * this.m * this.v.dot(this.v)
        }, e.prototype.updateAcceleration = function () {
            this.a.set(this.f.mult(this.mInv)), this.f.clear()
        }, e.prototype.getTransform = function () {
            var t = this.p;
            return void 0 !== this.axis && (e.AXIS.X == this.axis && (t.y = 0, t.z = 0), e.AXIS.Y == this.axis && (t.x = 0, t.z = 0), e.AXIS.Z == this.axis && (t.x = 0, t.y = 0)), r.translate(t.x, t.y, t.z)
        }, e.prototype.link = function (t) {
            return this.node = new o, this.node.link(t)
        }, e.prototype.add = function (t) {
            return this.node || (this.node = new o), this.node.add(t)
        }, e.prototype.render = function (t) {
            return t = t || this.node, t ? (this.spec.target.transform = this.getTransform(), this.spec.target.target = t.render(), this.spec) : void 0
        }, s.exports = e
    }), define("famous-physics/math/Quaternion", ["require", "exports", "module", "famous/Matrix"], function (t, i, s) {
        function e(t, i, s, e) {
            return this.w = void 0 !== t ? t : 0, this.x = i || 0, this.y = s || 0, this.z = e || 0, this
        }

        t("famous/Matrix"), e.prototype.makeFromAngleAndAxis = function (t, i) {
            i.normalize();
            var s = .5 * t, e = Math.sin(s);
            return this.x = e * i.x, this.y = e * i.y, this.z = e * i.z, this.w = Math.cos(s), this
        }, e.prototype.clone = function () {
            return new e(this.w, this.x, this.y, this.z)
        }, e.prototype.setWXYZ = function (t, i, s, e) {
            return this.w = t, this.x = i, this.y = s, this.z = e, this
        }, e.prototype.set = function (t) {
            return this.w = t.w, this.x = t.x, this.y = t.y, this.z = t.z, this
        }, e.prototype.clear = function () {
            return this.w = 1, this.x = 0, this.y = 0, this.z = 0, this
        }, e.prototype.normalize = function () {
            var t = Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
            if (0 == t)this.w = 1, this.x = this.y = this.z = 0; else {
                var i = 1 / t;
                this.w *= i, this.x *= i, this.y *= i, this.z *= i
            }
            return this
        }, e.prototype.getMatrix = function () {
            return this.normalize(), [1 - 2 * this.y * this.y - 2 * this.z * this.z, -2 * this.x * this.y - 2 * this.z * this.w, 2 * this.x * this.z - 2 * this.y * this.w, 0, -2 * this.x * this.y + 2 * this.z * this.w, 1 - 2 * this.x * this.x - 2 * this.z * this.z, -2 * this.y * this.z - 2 * this.x * this.w, 0, 2 * this.x * this.z + 2 * this.y * this.w, -2 * this.y * this.z + 2 * this.x * this.w, 1 - 2 * this.x * this.x - 2 * this.y * this.y, 0, 0, 0, 0, 1]
        }, e.prototype.multiply = function (t, i) {
            return i = i || this.register, i.w = this.w * t.w - this.x * t.x - this.y * t.y - this.z * t.z, i.x = this.w * t.x + this.x * t.w + this.y * t.z - this.z * t.y, i.y = this.w * t.y - this.x * t.z + this.y * t.w + this.z * t.x, i.z = this.w * t.z + this.x * t.y - this.y * t.x + this.z * t.w, i
        }, e.prototype.isEqual = function (t) {
            return t.w == this.w && t.x == this.x && t.y == this.y && t.z == this.z ? !0 : !1
        }, e.prototype.dot = function (t) {
            return this.w * t.w + this.x * t.x + this.y * t.y + this.z * t.z
        }, e.prototype.add = function (t, i) {
            return i = i || this.register, i.w = this.w + t.w, i.x = this.x + t.x, i.y = this.y + t.y, i.z = this.z + t.z, i
        }, e.prototype.sub = function (t, i) {
            return i = i || this.register, i.w = this.w - t.w, i.x = this.x - t.x, i.y = this.y - t.y, i.z = this.z - t.z, i
        }, e.prototype.normSquared = function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }, e.prototype.norm = function () {
            return Math.sqrt(this.normSquared())
        }, e.prototype.conj = function (t) {
            return t = t || this.register, t.w = this.w, t.x = -this.x, t.y = -this.y, t.z = -this.z, t
        }, e.prototype.inverse = function (t) {
            return t = t || this.register, this.conj(t), t.scalarDivide(this.normSquared(), t), t
        }, e.prototype.scalarDivide = function (t, i) {
            return i = i || this.register, t = 1 / t, i.w = this.w * t, i.x = this.x * t, i.y = this.y * t, i.z = this.z * t, i
        }, e.prototype.scalarMult = function (t, i) {
            return i = i || this.register, i.w = this.w * t, i.x = this.x * t, i.y = this.y * t, i.z = this.z * t, i
        }, e.prototype.isZero = function () {
            return 0 == this.x && 0 == this.y && 0 == this.z && 1 == this.w ? !0 : !1
        }, e.prototype.negate = function () {
            return this.w = -this.w, this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }, e.prototype.zeroRotation = function () {
            return this.x = 0, this.y = 0, this.z = 0, this.w = 1, this
        }, e.prototype.slerp = function (t, i, s) {
            s = s || this.register;
            var e, o, n, r, a;
            return this.to.set(t), this.from.set(this), o = this.dot(t), 0 > o && (o = -o, this.to.negate()), 1 - o > this.epsilon ? (e = Math.acos(o), n = Math.sin(e), r = Math.sin((1 - i) * e) / n, a = Math.sin(i * e) / n) : (r = 1 - i, a = i), this.from.scalarMult(r, this.from), this.to.scalarMult(a, this.to), this.from.add(this.to, s), s
        }, e.prototype.epsilon = 1e-5, e.prototype.from = new e(0, 0, 0, 0), e.prototype.to = new e(0, 0, 0, 0), e.prototype.register = new e(0, 0, 0, 0), e.prototype.zero = new e(0, 0, 0, 0), e.prototype.one = new e(1, 1, 1, 1), s.exports = e
    }), define("famous-physics/bodies/Body", ["require", "exports", "module", "./Particle", "famous-physics/math/Vector", "famous-physics/math/Quaternion", "famous/Matrix"], function (t, i, s) {
        function e(t) {
            o.call(this, t), this.q = t.q ? new r(t.q) : new r, this.w = t.w ? new n(t.w) : new n, this.L = t.L ? new n(t.L) : new n, this.t = t.t ? new n(t.t) : new n, this.I = [1, 0, 0, 1, 0, 0, 1, 0, 0], this.Iinv = [1, 0, 0, 1, 0, 0, 1, 0, 0], this.w.w = 0
        }

        var o = t("./Particle"), n = t("famous-physics/math/Vector"), r = t("famous-physics/math/Quaternion"), a = t("famous/Matrix");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.updateAngularVelocity = function () {
            var t = this.Iinv, i = this.L, s = i.x, e = i.y, o = i.z, n = t[0], r = t[1], a = t[2];
            this.w.setXYZ(n[0] * s + n[1] * e + n[2] * o, r[0] * s + r[1] * e + r[2] * o, a[0] * s + a[1] * e + a[2] * o)
        }, e.prototype.applyTorque = function (t) {
            this.getImmunity() || this.t.add(t, this.t)
        }, e.prototype.getTransform = function () {
            return a.move(this.q.getMatrix(), this.p.get())
        }, s.exports = e
    }), define("famous-physics/bodies/Circle", ["require", "exports", "module", "./Body"], function (t, i, s) {
        function e(t) {
            o.call(this, t), t = t || {}, this.r = t.r || 0, this.size = [2 * this.r, 2 * this.r];
            var i = this.r, s = this.m;
            this.I = [
                [.25 * s * i * i, 0, 0],
                [0, .25 * s * i * i, 0],
                [0, 0, .5 * s * i * i]
            ], this.Iinv = [
                [4 / (s * i * i), 0, 0],
                [0, 4 / (s * i * i), 0],
                [0, 0, 2 / (s * i * i)]
            ]
        }

        var o = t("./Body");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-physics/bodies/Rectangle", ["require", "exports", "module", "./Body"], function (t, i, s) {
        function e(t) {
            o.call(this, t), t = t || {}, this.size = t.size || [0, 0];
            var i = this.size[0], s = this.size[1];
            this.I = [
                [s * s / 12, 0, 0],
                [0, i * i / 12, 0],
                [0, 0, (i * i + s * s) / 12]
            ], this.Iinv = [
                [12 / (s * s), 0, 0],
                [0, 12 / (i * i), 0],
                [0, 0, 12 / (i * i + s * s)]
            ]
        }

        var o = t("./Body");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-physics/math/vector", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s) {
            return 1 == arguments.length ? (t instanceof Array && this.setXYZ.apply(this, t), t instanceof e && this.set(t)) : (this.x = t || 0, this.y = i || 0, this.z = s || 0), this
        }

        var o = new e(0, 0, 0);
        e.prototype.add = function (t, i) {
            return i = i || o, i.setXYZ(this.x + (t.x || 0), this.y + (t.y || 0), this.z + (t.z || 0))
        }, e.prototype.sub = function (t, i) {
            return i = i || o, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
        }, e.prototype.mult = function (t, i) {
            return i = i || o, i.setXYZ(t * this.x, t * this.y, t * this.z)
        }, e.prototype.div = function (t, i) {
            return this.mult(1 / t, i)
        }, e.prototype.cross = function (t, i) {
            return i = i || o, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
        }, e.prototype.equals = function (t) {
            return t.x == this.x && t.y == this.y && t.z == this.z
        }, e.prototype.rotate = function (t, i) {
            var s = t.x, e = t.y, o = t.z;
            return this.rotateX(s, i).rotateY(e, i).rotateZ(o, i)
        }, e.prototype.rotateX = function (t, i) {
            i = i || o;
            var s = this.x, e = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(s, -n * a + e * r, n * r - e * a)
        }, e.prototype.rotateY = function (t, i) {
            i = i || o;
            var s = this.x, e = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(-n * a + s * r, e, n * r + s * a)
        }, e.prototype.rotateZ = function (t, i) {
            i = i || o;
            var s = this.x, e = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(-e * a + s * r, e * r + s * a, n)
        }, e.prototype.dot = function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, e.prototype.normSquared = function () {
            return this.dot(this)
        }, e.prototype.norm = function () {
            return Math.sqrt(this.normSquared())
        }, e.prototype.normalize = function (t, i) {
            t = void 0 !== t ? t : 1, i = i || o;
            var s = 1e-7, e = this.norm();
            return Math.abs(e) > s ? this.mult(t / e, i) : i.setXYZ(t, 0, 0)
        }, e.prototype.clone = function () {
            return new e(this.x, this.y, this.z)
        }, e.prototype.isZero = function () {
            return!(this.x || this.y || this.z)
        }, e.prototype.set = function (t) {
            return t instanceof Array ? (this.x = t[0], this.y = t[1], this.z = t[2] || 0) : (this.x = t.x, this.y = t.y, this.z = t.z || 0), this !== o && o.clear(), this
        }, e.prototype.put = function (t) {
            t.set(o)
        }, e.prototype.setXYZ = function (t, i, s) {
            return o.clear(), this.x = t, this.y = i, this.z = s, this
        }, e.prototype.clear = function () {
            this.x = 0, this.y = 0, this.z = 0
        }, e.prototype.cap = function (t, i) {
            if (i = i || o, 1 / 0 === t)return i;
            var s = this.norm();
            return s > t && this.normalize().mult(t, i), i
        }, e.prototype.project = function (t, i) {
            return i = i || o, t.mult(this.dot(t), i)
        }, e.prototype.reflect = function (t, i) {
            return i = i || o, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, e.prototype.toArray = function () {
            return[this.x, this.y, this.z]
        }, e.prototype.get = function () {
            return this.toArray()
        }, e.prototype.zero = new e(0, 0, 0), e.prototype.one = new e(1, 1, 1), s.exports = e
    }), define("famous-physics/forces/Force", ["require", "exports", "module", "famous-physics/math/vector"], function (t, i, s) {
        function e() {
            this.force = new o
        }

        var o = t("famous-physics/math/vector");
        e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.applyConstraint = function () {
        }, e.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({value: this.opts[i]}), t.init && t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.prototype.getEnergy = function () {
            return 0
        }, s.exports = e
    }), define("famous-physics/constraints/Constraint", ["require", "exports", "module"], function (t, i, s) {
        function e() {
        }

        e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.applyConstraint = function () {
        }, e.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({value: this.opts[i]}), t.init && t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, s.exports = e
    }), define("famous-physics/integrator/SymplecticEuler", ["require", "exports", "module"], function (t, i, s) {
        function e(t) {
            this.opts = {vCap: 1 / 0, aCap: 1 / 0}, t && this.setOpts(t)
        }

        e.prototype.integrateVelocity = function (t, i) {
            var s = t.v, e = t.a;
            e.isZero() || (e.cap(this.opts.aCap, e), s.add(e.mult(i), s))
        }, e.prototype.integratePosition = function (t, i) {
            var s = t.p, e = t.v;
            e.isZero() || (e.cap(this.opts.vCap, e), s.add(e.mult(i), s))
        }, e.prototype.integrateAngularMomentum = function (t, i) {
            var s = t.L, e = t.t;
            e.isZero() || (s.add(e.mult(i), s), e.clear())
        }, e.prototype.integrateOrientation = function (t, i) {
            var s = t.q, e = t.w;
            e.isZero() || (s.normalize(), s.add(s.multiply(e).scalarMult(.5 * i), s))
        }, e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] = t[i]
        }, s.exports = e
    }), define("famous-physics/PhysicsEngine", ["require", "exports", "module", "famous-physics/bodies/Particle", "famous-physics/bodies/Body", "famous-physics/bodies/Circle", "famous-physics/bodies/Rectangle", "famous-physics/forces/Force", "famous-physics/constraints/Constraint", "famous-physics/integrator/SymplecticEuler"], function (t, i, s) {
        function e(t) {
            this.opts = {speed: 1, steps: 1, vCap: 1 / 0, aCap: 1 / 0, constraintSteps: 2, constraintTolerance: 1e-4}, t && this.setOpts(t), this._particles = [], this._agents = {}, this._forces = [], this._constraints = [], this._playing = !0, this._buffer = 0, this._timestep = 1e3 / 60 / this.opts.steps, this._prevTime = void 0, this._currTime = void 0, this._integrator = new k({vCap: this.opts.vCap, aCap: this.opts.aCap}), this._currAgentId = 0, this.BODIES = e.BODIES
        }

        function o() {
            return Date.now()
        }

        function n(t, i, s) {
            void 0 === i && (i = this.getParticles()), i instanceof Array || (i = [i]), this._agents[this._currAgentId] = {agent: t, targets: i, source: s};
            var e = this._currAgentId, o = r.call(this, t);
            return o.push(e), this._currAgentId++
        }

        function r(t) {
            return t instanceof E ? this._forces : t instanceof I ? this._constraints : void 0
        }

        function a(t) {
            return this._agents[t]
        }

        function h(t) {
            var i = a.call(this, this._forces[t]);
            i.agent.applyForce(i.targets, i.source)
        }

        function u(t, i) {
            var s = this._agents[this._constraints[t]];
            return s.agent.applyConstraint(s.targets, s.source, i)
        }

        function p() {
            for (var t = this._forces.length - 1; t > -1; t--)h.call(this, t)
        }

        function c(t) {
            var i = 1 / 0, s = 0;
            for (this.opts.constraintTolerance; s < this.opts.constraintSteps;) {
                i = 0;
                for (var e = this._constraints.length - 1; e > -1; e--)i += u.call(this, e, t);
                s++
            }
        }

        function l(t) {
            t.immunity || t.updateAcceleration()
        }

        function f(t, i) {
            t.immunity || this._integrator.integrateVelocity(t, i)
        }

        function d(t) {
            !t.immunity && t instanceof P && t.updateAngularVelocity()
        }

        function m(t, i) {
            !t.immunity && t instanceof P && this._integrator.integrateAngularMomentum(t, i)
        }

        function v(t, i) {
            t.immunity || this._integrator.integratePosition(t, i)
        }

        function y(t, i) {
            !t.immunity && t instanceof P && this._integrator.integrateOrientation(t, i)
        }

        function g() {
            this.forEachParticle(l)
        }

        function x(t) {
            this.forEachParticle(f, t)
        }

        function S(t) {
            this.forEachParticle(v, t)
        }

        function b() {
            this.forEachParticle(d)
        }

        function w(t) {
            this.forEachParticle(m, t)
        }

        function M(t) {
            this.forEachParticle(y, t)
        }

        function T(t) {
            p.call(this), g.call(this), x.call(this, t), w.call(this, t), b.call(this, t), c.call(this, t), S.call(this, t), M.call(this, t)
        }

        function z(t, i) {
            i.push(t.render())
        }

        var C = t("famous-physics/bodies/Particle"), P = t("famous-physics/bodies/Body"), _ = t("famous-physics/bodies/Circle"), O = t("famous-physics/bodies/Rectangle"), E = t("famous-physics/forces/Force"), I = t("famous-physics/constraints/Constraint"), k = t("famous-physics/integrator/SymplecticEuler");
        e.BODIES = {POINT: C, BODY: P, CIRCLE: _, RECTANGLE: O}, e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] && (this.opts[i] = t[i])
        }, e.prototype.addBody = function (t) {
            return this._particles.push(t), t
        }, e.prototype.createParticle = function (t) {
            return this.addBody(new C(t))
        }, e.prototype.createBody = function (t) {
            var i = t.shape || e.BODIES.POINT;
            return this.addBody(new i(t))
        }, e.prototype.remove = function (t) {
            var i = this._particles.indexOf(t);
            if (i > -1) {
                for (var s = 0; s < Object.keys(this._agents); s++)this.detachFrom(s, t);
                this._particles.splice(i, 1)
            }
        }, e.prototype.attach = function (t, i, s) {
            if (t instanceof Array) {
                for (var e = [], o = 0; o < t.length; o++)e[o] = n.call(this, t[o], i, s);
                return e
            }
            return n.call(this, t, i, s)
        }, e.prototype.attachTo = function (t, i) {
            a.call(this, t).targets.push(i)
        }, e.prototype.detach = function (t) {
            var i = this.getAgent(t), s = r.call(this, i), e = s.indexOf(t);
            s.splice(e, 1), delete this._agents[t]
        }, e.prototype.detachFrom = function (t, i) {
            var s = a.call(this, t);
            if (s.source === i)this.detach(t); else {
                var e = s.targets, o = e.indexOf(i);
                o > -1 && e.splice(o, 1)
            }
        }, e.prototype.detachAll = function () {
            this._agents = {}, this._forces = [], this._constraints = [], this._currAgentId = 0
        }, e.prototype.getAgent = function (t) {
            return a.call(this, t).agent
        }, e.prototype.getParticles = function () {
            return this._particles
        }, e.prototype.getParticlesExcept = function (t) {
            var i = [];
            return this.forEachParticle(function (s) {
                -1 === t.indexOf(s) && i.push(s)
            }), i
        }, e.prototype.getPos = function (t) {
            return(t || this._particles[0]).getPos()
        }, e.prototype.getVel = function (t) {
            return(t || this._particles[0]).getVel()
        }, e.prototype.getTransform = function (t) {
            return(t || this._particles[0]).getTransform()
        }, e.prototype.setPos = function (t, i) {
            (i || this._particles[0]).setPos(t)
        }, e.prototype.setVel = function (t, i) {
            (i || this._particles[0]).setVel(t)
        }, e.prototype.forEachParticle = function (t, i) {
            for (var s = this.getParticles(), e = 0, o = s.length; o > e; e++)t.call(this, s[e], i)
        }, e.prototype.step = function () {
            if (this._playing) {
                this._prevTime || (this._prevTime = o()), this._currTime = o();
                var t = this._currTime - this._prevTime;
                this._prevTime = this._currTime, 0 != t && T.call(this, this.opts.speed * this._timestep)
            }
        }, e.prototype.render = function () {
            this.step();
            var t = [];
            return this.forEachParticle(z, t), t
        }, e.prototype.play = function () {
            this._prevTime = o(), this._playing = !0
        }, e.prototype.pause = function () {
            this._playing = !1
        }, e.prototype.toggle = function () {
            this._playing ? this.pause() : this.play()
        }, e.prototype.reverseTime = function () {
            this.opts.speed *= -1
        }, e.prototype.reverseVelocities = function () {
            this.forEachParticle(function (t) {
                t.v.mult(-1, t.v)
            })
        }, s.exports = e
    }), define("famous-physics/constraints/StiffSpring", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function (t, i, s) {
        function e(t) {
            this.opts = {length: 0, anchor: void 0, dampingRatio: 1, period: 1e3, callback: void 0, callbackTolerance: 1e-4}, t && this.setOpts(t), this.pDiff = new a, this.vDiff = new a, this.n = new a, this.impulse1 = new a, this.impulse2 = new a, this._canFireCallback = !0
        }

        function o(t, i, s) {
            s < this.opts.callbackTolerance ? this._canFireCallback && (i.call(this, t), this._canFireCallback = !1) : this._canFireCallback = !0
        }

        function n(t, i, s) {
            var e = Math.abs(t.dot(i) / s);
            return e
        }

        var r = t("famous-physics/constraints/Constraint"), a = t("../math/Vector");
        e.prototype = Object.create(r.prototype), e.prototype.constructor = r, e.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor instanceof a && (this.opts.anchor = t.anchor), t.anchor.p instanceof a && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new a(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.callback && (this.opts.callback = t.callback, this._canFireCallback = !0), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance)
        }, e.prototype.applyConstraint = function (t, i, s) {
            for (var e = this.opts, r = this.pDiff, a = this.vDiff, h = this.impulse1, u = this.impulse2, p = e.length, c = e.anchor || i.p, l = e.period, f = e.dampingRatio, d = 0; d < t.length; d++) {
                var m = t[d], v = m.p, y = m.v, g = m.m, x = m.mInv;
                r.set(v.sub(c));
                var S = r.norm() - p;
                if (i) {
                    var b = i.mInv, w = i.v;
                    a.set(y.sub(w));
                    var M = 1 / (x + b)
                } else {
                    a.set(y);
                    var M = g
                }
                if (0 == this.opts.period)var T = 0, z = 1; else var C = 4 * M * Math.PI * Math.PI / (l * l), P = 4 * M * Math.PI * f / l, z = s * C / (P + s * C), T = 1 / (P + s * C);
                var _ = z / s * S;
                if (r.normalize(-_).sub(a).mult(s / (T + s / M)).put(h), m.applyImpulse(h), i && (h.mult(-1).put(u), i.applyImpulse(u)), this.opts.callback) {
                    var O = m.getEnergy() + n(h, r, s);
                    o.call(this, m, this.opts.callback, O)
                }
            }
        }, e.prototype.getEnergy = function (t, i) {
            var s = this.opts, e = s.length, o = s.period, n = s.anchor || i.p;
            if (0 === o)return 0;
            var r = 4 * t.m * Math.PI * Math.PI / (o * o), a = n.sub(t.p), h = a.norm() - e;
            return.5 * r * h * h
        }, e.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({value: this.opts[i]}), t.init instanceof Function && t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, s.exports = e
    }), define("famous-physics/constraints/Wall", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector", "famous/EventHandler"], function (t, i, s) {
        function e(t) {
            this.opts = {restitution: .7, k: 0, n: new n, d: 0, onContact: e.ON_CONTACT.REFLECT}, t && this.setOpts(t), this.diff = new n, this.impulse = new n, this.slop = -1, this.eventHandler = new r, r.setOutputHandler(this, this.eventHandler)
        }

        var o = t("famous-physics/constraints/Constraint"), n = t("../math/Vector"), r = t("famous/EventHandler");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.ON_CONTACT = {REFLECT: 0, WRAP: 1, ABSORB: 2}, e.prototype.setOpts = function (t) {
            void 0 !== t.restitution && (this.opts.restitution = t.restitution), void 0 !== t.k && (this.opts.k = t.k), void 0 !== t.d && (this.opts.d = t.d), void 0 !== t.onContact && (this.opts.onContact = t.onContact), void 0 !== t.n && this.opts.n.set(t.n)
        }, e.prototype.getNormalVelocity = function (t) {
            var i = this.opts.n;
            return t.dot(i)
        }, e.prototype.getDistance = function (t) {
            var i = this.opts.n, s = this.opts.d;
            return t.dot(i) + s
        }, e.prototype.onEnter = function (t, i, s) {
            var o = t.p, n = t.v, r = t.m, a = this.opts.n, h = this.opts.onContact, u = this.opts.restitution, p = this.impulse, c = this.opts.k, l = 0, f = {particle: t, wall: this, overlap: i};
            switch (this.eventHandler.emit("enter", f), h) {
                case e.ON_CONTACT.REFLECT:
                    var d = i < this.slop ? -((1 + u) * a.dot(n) + c / s * (i - this.slop)) / (r * s + l) : -((1 + u) * a.dot(n)) / (r * s + l);
                    p.set(a.mult(s * d)), t.applyImpulse(p), o.add(a.mult(-i), o);
                    break;
                case e.ON_CONTACT.ABSORB:
                    var d = a.dot(n) / (r * s + l);
                    p.set(a.mult(s * d)), t.applyImpulse(p), o.add(a.mult(-i), o), n.clear();
                    break;
                case e.ON_CONTACT.WRAP:
                    i < -t.r && this.eventHandler.emit("wrap", f)
            }
        }, e.prototype.onExit = function (t, i) {
            var s = this.opts.onContact, o = t.p, n = this.opts.n;
            s == e.ON_CONTACT.REFLECT ? o.add(n.mult(-i), o) : s == e.ON_CONTACT.WRAP || s == e.ON_CONTACT.ABSORB, this.eventHandler.emit("exit", {particle: t, wall: this, overlap: i})
        }, e.prototype.applyConstraint = function (t, i, s) {
            for (var e = this.opts.n, o = 0; o < t.length; o++) {
                var n = t[o], r = n.p, a = n.v, h = n.r || 0, u = this.getDistance(r.add(e.mult(-h))), p = this.getNormalVelocity(a);
                0 > u && (0 > p ? this.onEnter(n, u, s) : this.onExit(n, u, s))
            }
        }, s.exports = e
    }), define("famous-physics/utils/PhysicsTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/constraints/Wall", "famous-physics/math/Vector"], function (t, i, s) {
        function e(t) {
            this.defaultDefinition = {spring: {period: 300, dampingRatio: .5}, v: 0, wall: !1}, t = t || 0, this._anchor = new g(t, 0, 0), this.endState = t, this.prevState = void 0, this.direction = void 0, this.atRest = !0, this.spring = new v({anchor: this._anchor}), this.wall = new y({restitution: .5, k: 0, n: new g(-1, 0, 0)}), this.attachedWall = void 0, this.PE = new m, this.particle = this.PE.createParticle({p: [t, 0, 0]}), this.attachedSpring = this.PE.attach(this.spring, this.particle)
        }

        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                x > t && (this.atRest = !0, p.call(this, this.endState), this.callback && this.callback())
            }
        }

        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }

        function r(t) {
            this.spring.setOpts(t.spring), c.call(this, t.v), t.wall ? h.call(this) : u.call(this)
        }

        function a(t) {
            this.prevState = this.endState, this.endState = t, this.direction = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, void 0 !== this.attachedSpring && (this._anchor.x = t), void 0 !== this.attachedWall && this.wall.setOpts({d: Math.abs(t), n: [-this.direction, 0, 0]}), c.call(this, this.direction * f.call(this))
        }

        function h() {
            this.attachedWall = this.PE.attach(this.wall, this.particle)
        }

        function u() {
            void 0 !== this.attachedWall && this.PE.detach(this.attachedWall)
        }

        function p(t) {
            this.particle.p.x = t
        }

        function c(t) {
            this.particle.v.x = t
        }

        function l() {
            return this.particle.p.x
        }

        function f() {
            return this.particle.v.x
        }

        function d(t) {
            this.callback = t
        }

        var m = t("famous-physics/PhysicsEngine"), v = t("famous-physics/constraints/StiffSpring"), y = t("famous-physics/constraints/Wall"), g = t("famous-physics/math/Vector");
        e.forceFunctions = v.forceFunctions;
        var x = 1e-5;
        e.prototype.reset = function (t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, p.call(this, t), c.call(this, i), a.call(this, t), d.call(this, void 0)
        }, e.prototype.getVelocity = function () {
            return o.call(this), f.call(this)
        }, e.prototype.halt = function () {
            this.set(this.get())
        }, e.prototype.get = function () {
            return o.call(this), l.call(this)
        }, e.prototype.set = function (t, i, s) {
            return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), d.call(this, s), void 0) : (this.reset(t), s && s(), void 0)
        }, s.exports = e
    }), define("famous-ui/Buttons/ButtonBase", ["require", "exports", "module", "famous/Surface", "famous/View", "famous/Matrix", "famous/Modifier", "famous-animation/Easing"], function (t, i, s) {
        function e() {
            n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.surface = new o(this.options.surfaceOptions), this.surface.pipe(this), this.transform = new a({size: this.surface.getSize()}), this.node.link(this.transform).link(this.surface), this.surface.pipe(this), this.surface.on("click", this._handleClick.bind(this)), this._state = !1
        }

        var o = t("famous/Surface"), n = t("famous/View"), r = t("famous/Matrix"), a = t("famous/Modifier"), h = t("famous-animation/Easing");
        e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {surfaceOptions: {}, openState: r.identity, closeState: r.rotateZ(.75 * Math.PI), transition: {curve: h.inOutBackNorm, duration: 500}}, e.prototype._handleClick = function () {
        }, e.prototype.halt = function () {
            this.transform.halt()
        }, e.prototype.setTransform = function () {
            this.transform.setTransform.apply(this.transform, arguments)
        }, e.prototype.setOpacity = function () {
            this.transform.setOpacity.apply(this.transform, arguments)
        }, e.prototype.getSize = function () {
            return this.surface.getSize()
        }, s.exports = e
    }), define("famous-ui/Buttons/RotateButton", ["require", "exports", "module", "famous/Surface", "famous/View", "famous/Matrix", "famous/Modifier", "famous-animation/Easing", "./ButtonBase"], function (t, i, s) {
        function e() {
            r.apply(this, arguments), this.transform.setOrigin([.5, .5]), this._state = !1
        }

        t("famous/Surface"), t("famous/View");
        var o = t("famous/Matrix");
        t("famous/Modifier");
        var n = t("famous-animation/Easing"), r = t("./ButtonBase");
        e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {surfaceOptions: {}, openState: o.identity, closeState: o.rotateZ(.75 * Math.PI), transition: {curve: n.inOutBackNorm, duration: 500}}, e.prototype._handleClick = function (t) {
            t.stopPropagation(), this.toggle()
        }, e.prototype.getSize = function () {
            return this.surface.getSize()
        }, e.prototype.toggle = function () {
            0 == this._state ? this.open() : this.close()
        }, e.prototype.open = function () {
            this._state = !0, this.transform.halt(), this.emit("open"), this.transform.setTransform(this.options.closeState, this.options.transition)
        }, e.prototype.close = function () {
            this._state = !1, this.transform.halt(), this.emit("close"), this.transform.setTransform(this.options.openState, this.options.transition)
        }, s.exports = e
    }), define("core/NextButton", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Surface", "famous/Modifier", "famous/Utility", "famous-utils/Utils", "famous-animation/Easing", "famous-ui/Buttons/RotateButton", "app/ID", "famous-utils/Time"], function (t, i, s) {
        function e() {
            o.apply(this, arguments), this.nextButton, this.nextButtonModifier, this.nextButtonX, this.nextButtonY, this.hidden = !1, this.descriptionVisible = !1, this.descriptionInit = !1, this.nextDescriptionMod, this.nextDescription, this.sceneWidth, this.sceneHeight, this.positions(), this.initButton(), this._ajaxNext(), this.show()
        }

        var o = t("famous/View"), n = t("famous/Matrix"), r = t("famous/Surface"), a = t("famous/Modifier"), h = t("famous/Utility"), u = t("famous-utils/Utils");
        t("famous-animation/Easing"), t("famous-ui/Buttons/RotateButton");
        var p = t("app/ID"), c = t("famous-utils/Time");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {offset: [0, 0], buttonSize: [0, 0], showTransition: {curve: "inOutBackNorm", duration: 400}, hideTransition: {curve: "inOutBackNorm", duration: 400}, hoverTransition: {curve: "inOutSineNorm", duration: 800}, nextDescriptionSize: [200, 60], descriptionInTransition: {method: "physics", spring: {period: 800, dampingRatio: .41}, wall: !0, v: 0}, descriptionOutTransition: {method: "physics", spring: {period: 400, dampingRatio: .5}, wall: !1, v: 0}, position: "tr"}, e.prototype.resize = function () {
            this.positions(), this.descriptionVisible ? (this.descriptionVisible = !this.descriptionVisible, this.showNextDescription()) : (this.descriptionVisible = !this.descriptionVisible, this.hideNextDescription()), this.show()
        }, e.prototype.positions = function () {
            var t = window.innerWidth;
            window.innerHeight, "tr" == this.options.position ? (this.hiddenPositions = {next: n.translate(t - this.options.offset[0] - this.options.buttonSize[0], -this.options.buttonSize[1], 0), nextDescription: n.translate(t, this.options.offset[1], 0)}, this.shownPositions = {next: n.translate(t - this.options.offset[0] - this.options.buttonSize[0], this.options.offset[1], 0), nextDescription: n.translate(t - this.options.nextDescriptionSize[0], this.options.offset[1], 0)}) : "tc" == this.options.position && (this.hiddenPositions = {next: n.translate(.5 * t - .5 * this.options.buttonSize[0], -this.options.buttonSize[1], 0), nextDescription: n.translate(.5 * t + .5 * this.options.buttonSize[0], -this.options.nextDescriptionSize[1], 0)}, this.shownPositions = {next: n.translate(.5 * t - .5 * this.options.buttonSize[0], this.options.offset[1], 0), nextDescription: n.translate(.5 * t + .5 * this.options.buttonSize[0], 0, 0)})
        }, e.prototype.show = function () {
            if (!this.hidden) {
                var t = this.shownPositions.next, i = this.nextButton.getSize();
                this.nextButtonX = t[12] + .5 * i[0], this.nextButtonY = t[13] + .5 * i[1], this.nextButtonModifier.halt(), this.nextButtonModifier.setTransform(t, this.options.showTransition)
            }
        }, e.prototype.showAll = function () {
            this.hidden = !1, this.show()
        }, e.prototype.hideAll = function () {
            this.hidden = !0, this.hideNextDescription(), this.hide()
        }, e.prototype.hide = function () {
            this.nextButtonModifier.halt(), this.nextButtonModifier.setTransform(this.hiddenPositions.next, this.options.hideTransition)
        }, e.prototype.hideNextDescription = function () {
            this.descriptionInit && this.descriptionVisible && (this.show(), this.nextDescriptionMod.halt(), this.nextDescriptionMod.setTransform(this.hiddenPositions.nextDescription, this.options.descriptionOutTransition), this.descriptionVisible = !1)
        }, e.prototype.showNextDescription = function () {
            this.descriptionInit && (this.descriptionVisible || (this.hide(), this.nextDescriptionMod.halt(), c.setTimeout(function () {
                1 == this.descriptionVisible && this.nextDescriptionMod.setTransform(this.shownPositions.nextDescription, this.options.descriptionInTransition)
            }.bind(this), 110), this.descriptionVisible = !0))
        }, e.prototype.mousemove = function (t, i) {
            var s = u.distance(t.pageX, t.pageY, this.nextButtonX, this.nextButtonY);
            i > s ? this.showNextDescription() : this.hideNextDescription()
        }, e.prototype._ajaxNext = function () {
            h.loadURL("http://fsrv.us/?f=getNextDemo&currentID=" + p + "&source=" + window.location.host, function (t) {
                if (t) {
                    var i = JSON.parse(t);
                    this.demoData = i.demoData, this.nextDemo = i.nextDemoData, this.nextDemo && this.demoData && this.initNextDescription()
                }
            }.bind(this))
        }, e.prototype.initButton = function () {
            this.nextButton = new r({properties: {backgroundColor: "rgba( 0, 0, 0, 0.0)"}, content: '<img draggable="false" class="no-user-select" src="js/core/next.svg" height="' + this.options.buttonSize[1] + '"></img>', size: this.options.buttonSize}), this.nextButtonModifier = new a({size: this.nextButton.getSize(), transform: this.hiddenPositions.next, opacity: this.nextButtonOpacity}), this.node.add(this.nextButtonModifier).link(this.nextButton)
        }, e.prototype.initNextDescription = function () {
            this.descriptionInit = !0;
            var t = "s.codepen.io" == window.location.host ? this.nextDemo.codepenURL : this.nextDemo.staticURL;
            this.nextButton.setContent('<a href="' + t + '">' + this.nextButton.getContent() + "</a>");
            var i = this.nextDemo.name, s = "http://notAvailableYet" !== this.nextDemo.thumbSRC ? this.nextDemo.thumbSRC : "s3-us-west-1.amazonaws.com/disrupt.famo.us/widgets-lightbox/thumb.jpg";
            this.nextDescription = new r({content: '<a target="_blank" style=" text-decoration: none; float: left;" href="' + t + '">' + '<img style="float: left; width: 50px;" src="' + s + '" width="50"></img>' + '<div style="float: left; padding-left: 5px;">' + '<span class="core-next-demo">NEXT DEMO:</span><br><span class="core-next-name">' + i + "</span>" + "</div>" + "</a>", size: this.options.nextDescriptionSize, classes: ["core-nextDescription"], properties: {padding: "5px", backgroundColor: "#000"}}), this.nextDescription.on("click", function (t, i) {
                i.preventDefault(), window.location.href = t
            }.bind(this, t)), this.nextDescriptionMod = new a({transform: this.hiddenPositions.nextDescription}), this.node.add(this.nextDescriptionMod).link(this.nextDescription), this.descriptionVisible = !1
        }, s.exports = e
    }), define("famous/ImageSurface", ["require", "exports", "module", "./Surface"], function (t, i, s) {
        function e() {
            this.imageUrl = void 0, o.apply(this, arguments)
        }

        var o = t("./Surface");
        e.prototype = Object.create(o.prototype), e.prototype.surfaceEvents = o.prototype.surfaceEvents.concat(["load"]), e.prototype.elementType = "img", e.prototype.elementClass = "surface", e.prototype.setContent = function (t) {
            this.imageUrl = t, this._contentDirty = !0
        }, e.prototype.deploy = function (t) {
            t.src = this.imageUrl || ""
        }, e.prototype.recall = function (t) {
            t.src = ""
        }, s.exports = e
    }), define("core/Fader", ["require", "exports", "module", "famous/Surface", "famous/View", "famous/Modifier"], function (t, i, s) {
        function e() {
            n.apply(this, arguments), this.fade = new o({properties: {backgroundColor: this.options.color}, classes: ["background-fader"]}), this.fadeMod = new r({opacity: this.options.visible ? this.options.fadePercent : 0}), this.node.link(this.fadeMod).link(this.fade)
        }

        var o = t("famous/Surface"), n = t("famous/View"), r = t("famous/Modifier");
        e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {color: "#000000", fadePercent: .8, visible: !0, fadeTransition: {curve: "outExpoNorm", duration: 500}, fadePercent: .8}, e.prototype.show = function () {
            this.fadeMod.setOpacity(this.options.fadePercent, this.options.fadeTransition)
        }, e.prototype.hide = function () {
            this.fadeMod.setOpacity(0, this.options.fadeTransition)
        }, s.exports = e
    }), define("core/Submit", ["require", "exports", "module", "famous/Surface", "famous-utils/Time"], function (t, i, s) {
        function e() {
            this._submitDelay = 200, this.submit = new n({properties: {backgroundColor: "rgba( 255, 255, 255, 1.0)", color: "rgba( 0, 0, 0, 1.0 )", textAlign: "center"}, classes: ["submit"], content: "JOIN!", size: this._submitSize}), this.loadingIndex = 2
        }

        function o() {
            if (this.isLoading) {
                for (var t = "", i = 1; i < this.loadingIndex; i++)t += ".";
                this.loadingIndex = (this.loadingIndex + 1) % 4 + 1, this.submit.setContent(t), r.setTimeout(this._boundLoading, this._submitDelay)
            }
        }

        var n = t("famous/Surface"), r = t("famous-utils/Time");
        e.prototype.render = function () {
            return this.submit.render()
        }, e.prototype.on = function (t, i) {
            return this.submit.on(t, i)
        }, e.prototype.setLoading = function () {
            this.isLoading = !0, this._boundLoading = o.bind(this), o.call(this)
        }, e.prototype.setSuccess = function () {
            this.isLoading = !1, this.submit.setContent("SENT")
        }, e.prototype.setDefault = function () {
            this.isLoading = !1, this.submit.setContent("JOIN!")
        }, s.exports = e
    }), define("core/SignupData", ["require", "exports", "module", "famous/EventHandler", "famous/Utility", "app/ID", "./GA"], function (t, i, s) {
        function e(t) {
            this.options = {formId: "", emailId: "", githubId: "", twitterId: ""};
            for (var i in t)this.options[i] = t[i];
            this.form, this.email, this.github, this.twitter, this.eventHandler = new n, n.setInputHandler(this, this.eventHandler), n.setOutputHandler(this, this.eventHandler), this._onSubmit = o.bind(this), this.registerView(), this.reset()
        }

        function o(t) {
            t.preventDefault(), this.sendData()
        }

        var n = t("famous/EventHandler"), r = t("famous/Utility"), a = t("app/ID"), h = t("./GA");
        e.prototype.reset = function () {
            this.form = document.getElementById(this.options.formId), this.email = document.getElementById(this.options.emailId), this.github = document.getElementById(this.options.githubId), this.twitter = document.getElementById(this.options.twitterId), this.events()
        }, e.prototype.events = function () {
            this.form.addEventListener("submit", this._onSubmit)
        }, e.prototype._getData = function () {
            var t = {};
            return this.email && (t.email = this.email.value), this.github && (t.github = this.github.value), this.twitter && (t.twitter = this.twitter.value), t
        }, e.prototype.registerView = function () {
            if (!(window.location.host.search("localhost") > -1)) {
                var t = "http://fsrv.us/?f=registerView&demoID=" + a;
                r.loadURL(t)
            }
        }, e.prototype.sendData = function () {
            var t = this._getData(), i = "http://fsrv.us/?f=registerUserforNewsletter&email=" + t.email + "&demoID=" + a;
            t.github && (i += "&github=" + t.github), t.twitter && (i += "&twitter=" + t.twitter), this.emit("loadingStart"), h.push(["_trackEvent", "sign-up", "submit", , 1, !0]), r.loadURL(i, function (t) {
                this.signupResponse = JSON.parse(t), this.parseResponse()
            }.bind(this))
        }, e.prototype.parseResponse = function () {
            this.emit("loadingEnd"), null == this.signupResponse.error ? this.emit("success") : this.emit("error", this.signupResponse.error)
        }, s.exports = e
    }), define("core/SignupContent", ["require", "exports", "module"], function (t, i, s) {
        var e = "", o = '<span class = "famous-signup-label">Twitter</span> <span class = "famous-signup-optional">optional</span>', n = '<span class = "famous-signup-label">Github</span ><span class  = "famous-signup-optional">optional</span>', r = "Email Address", a = "Handle", h = "Name", u = "Join", p = "Sign up for Beta", c = "LOADING", l = "SENT!", f = "famo.us is a free and open source Javascript platform for building apps, games and interfaces in DOM, Canvas and WebGL.", d = "", m = "", v = !1, y = !1;
        s.exports = {getEmailLabel: function () {
            return e
        }, setEmailLabel: function (t) {
            e = t
        }, getEmailMessage: function () {
            return r
        }, setEmailMessage: function (t) {
            r = t
        }, getTwitterMessage: function () {
            return a
        }, setTwitterMessage: function (t) {
            a = t
        }, getEmailMessage: function () {
            return r
        }, setEmailMessage: function (t) {
            r = t
        }, getGithubMessage: function () {
            return h
        }, setGithubMessage: function (t) {
            h = t
        }, getHeadLine: function () {
            return f
        }, setHeadline: function (t) {
            f = t
        }, getSubHeadLine: function () {
            return d
        }, setSubHeadline: function (t) {
            d = t
        }, getMainText: function () {
            return m
        }, setMainText: function (t) {
            m = t
        }, getSignupButton: function () {
            return u
        }, setSignupButton: function (t) {
            u = t
        }, getOpenMessage: function () {
            return p
        }, setOpenMessage: function (t) {
            p = t
        }, useGithub: function () {
            return v
        }, setGithub: function (t) {
            v = t
        }, useTwitter: function () {
            return y
        }, setTwitter: function (t) {
            y = t
        }, getLoadingStart: function () {
            return c
        }, setLoadingStart: function (t) {
            c = t
        }, getLoadingEnd: function () {
            return l
        }, setLoadingEnd: function (t) {
            l = t
        }, getContent: function () {
            var t = '<div class="famous-signup-backing" style="float: left;">';
            return"" !== f && (t += '<h1 class="famous-signup-spacer famous-signup-headline">' + f + "</h1>"), "" !== d && (t += '<h6 class="famous-signup-spacer famous-signup-sub-headline">' + d + "</h6>"), "" !== m && (t += '<h3 class="famous-signup-main-text">' + m + "</h3>"), t += '<form id="famous-signup-form"><div class="famous-signup-spacer" style="width: 100%; float: left;">', 0 == v && 0 == y ? (t += '<input class="famous-signup-input" id="famous-signup-email" type="email" size="50" style="float: left; width: 65%;" name="email" maxlength="75" placeholder="' + r + '">', t += '<div style="width: 30%; float: left; margin-left: 5%; " ><input class="famous-signup-button" style="float: left; width: 100%;"type="submit" value="' + u + '">' + "</div>" + "</form>" + "</div>") : (t += "" !== e ? '<label for="email" style="width: 30%;float: left;padding-top: 15px;">' + e + "</label>" + '<input class="famous-signup-input" id="famous-signup-email" type="email" size="50" style="float: left; width: 70%;" name="email" maxlength="75" placeholder="' + r + '">' + "<br>" + "</div>" : '<input class="famous-signup-input" id="famous-signup-email" type="email" size="50" style="float: left; width: 100%;" name="email" maxlength="75" placeholder="' + r + '">', v && (t += '<div style="width: 100%;float: left;" class="famous-signup-spacer" ><label for="github" style="width: 30%; float: left;padding-top: 15px;">' + n + "</label>" + '<input class="famous-signup-input" id="famous-signup-github" type="text" size="30" style="float: left;width: 70%;"  name="github" maxlength="75" placeholder="' + h + '">' + "<br>" + "</div>"), y && (t += '<div style="width: 100%; float: left;" class="famous-signup-spacer"><label for="twitter" style="width: 30%; float: left;padding-top: 15px;">' + o + "</label>" + '<input class="famous-signup-input" id="famous-signup-twitter" type="text" size="30" style="float: left;width: 70%;" name="twitter" maxlength="75" placeholder="' + a + '">' + "</div>"), t += '<div style="width: 100%; float: left;" ><input class="famous-signup-button" style="float: left; width: 100%;"type="submit" value="' + u + '">' + "</div>" + "</form>" + "</div>"), t
        }}
    }), define("core/Signup", ["require", "exports", "module", "famous/Engine", "famous/View", "famous/Matrix", "famous/ImageSurface", "famous/Surface", "./ExpandingSurface", "famous/Modifier", "famous/Utility", "./Fader", "famous-animation/Easing", "famous-utils/Utils", "famous-utils/KeyCodes", "app/ID", "famous-utils/Time", "./Submit", "famous/RenderNode", "app/SceneController", "./SignupData", "./SignupContent", "famous/Transitionable", "famous-physics/utils/PhysicsTransition"], function (t, i, s) {
        function e() {
            h.apply(this, arguments), this.close, this.closeMod, this.signupBacking, this.signupBackingMod, this._signupSize, this.openForm, this.openFormMod, this.error, this.errorMod, this.signupData, this._initData = r.bind(this), this._isVisible = !0, this.initSignup(), this.events()
        }

        function o() {
            this._originalSignupMessage = l.getSignupButton(), l.setSignupButton(l.getLoadingStart()), this.resetBackingContent()
        }

        function n() {
            l.setSignupButton(l.getLoadingEnd()), this.resetBackingContent()
        }

        function r() {
            this.signupData = new c({formId: "famous-signup-form", emailId: "famous-signup-email", githubId: "famous-signup-github", twitterId: "famous-signup-twitter"}), this.eventOutput.emit("dataAdded", this.signupData), this.dataEvents(), a.unbind("postrender", this._initData)
        }

        var a = t("famous/Engine"), h = t("famous/View");
        t("famous/Matrix"), t("famous/ImageSurface"), t("famous/Surface");
        var u = t("./ExpandingSurface"), p = t("famous/Modifier");
        t("famous/Utility"), t("./Fader"), t("famous-animation/Easing"), t("famous-utils/Utils"), t("famous-utils/KeyCodes"), t("app/ID"), t("famous-utils/Time"), t("./Submit"), t("famous/RenderNode"), t("app/SceneController");
        var c = t("./SignupData"), l = t("./SignupContent"), f = t("famous/Transitionable"), d = t("famous-physics/utils/PhysicsTransition");
        f.registerMethod("physics", d), e.prototype = Object.create(h.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {animateScene: !0, closeSize: [50, 50], hideOpen: !1, hideOpenOnMobile: !0, openButtonZPos: 2, errorFailedProperties: {color: "rgb(253, 98, 85)"}, errorSuccessProperties: {color: "rgb(90, 226, 132)"}}, e.prototype.events = function () {
            a.on("postrender", this._initData), this.signupBacking.on("resize", function (t) {
                this._signupSize = t, this.signupData && this.signupData.reset(), this.eventOutput.emit("resize")
            }.bind(this))
        }, e.prototype.dataEvents = function () {
            this.signupData.on("loadingStart", o.bind(this)), this.signupData.on("loadingEnd", n.bind(this))
        }, e.prototype.resetBackingContent = function () {
            this.signupBacking.setContent(l.getContent()), this.signupBacking.setHeightDirty()
        }, e.prototype.initSignup = function () {
            this._signupSize = [256, 20], this.signupBacking = new u({content: l.getContent(), size: this._signupSize}), this.signupBackingMod = new p({opacity: 1}), this.node.add(this.signupBackingMod).link(this.signupBacking)
        }, e.prototype.setVisible = function (t) {
            this._isVisible = t
        }, e.prototype.getSize = function () {
            return this.signupBacking.getSize()
        }, s.exports = e
    }), define("famous/ContainerSurface", ["require", "exports", "module", "./Surface", "./Context"], function (t, i, s) {
        function e(t) {
            o.call(this, t), this._container = document.createElement("div"), this._container.classList.add("group"), this._container.style.width = "100%", this._container.style.height = "100%", this._container.style.position = "relative", this._shouldRecalculateSize = !1, this.context = new n(this._container), this.setContent(this._container)
        }

        var o = t("./Surface"), n = t("./Context");
        e.prototype = Object.create(o.prototype), e.prototype.elementType = "div", e.prototype.elementClass = "surface", e.prototype.link = function () {
            return this.context.link.apply(this.context, arguments)
        }, e.prototype.add = function () {
            return this.context.add.apply(this.context, arguments)
        }, e.prototype.mod = function () {
            return this.context.mod.apply(this.context, arguments)
        }, e.prototype.render = function () {
            return this._sizeDirty && (this._shouldRecalculateSize = !0), o.prototype.render.call(this)
        }, e.prototype.commit = function () {
            var t = o.prototype.commit.apply(this, arguments);
            return this._shouldRecalculateSize && (this.context.setSize(), this._shouldRecalculateSize = !1), this.context.update(), t
        }, s.exports = e
    }), define("famous-physics/forces/Drag", ["require", "exports", "module", "famous-physics/forces/Force"], function (t, i, s) {
        function e(t) {
            this.opts = {strength: .01, forceFunction: e.FORCE_FUNCTIONS.LINEAR}, t && this.setOpts(t), o.call(this)
        }

        var o = t("famous-physics/forces/Force");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.FORCE_FUNCTIONS = {LINEAR: function (t) {
            return t
        }, QUADRATIC: function (t) {
            return t.mult(t.norm())
        }}, e.prototype.applyForce = function (t) {
            var i = this.opts.strength, s = this.opts.forceFunction, e = this.force;
            for (var o in t) {
                var n = t[o];
                s(n.v).mult(-i).put(e), n.applyForce(e), n.L && n.L.mult(1 - this.opts.strength, n.L)
            }
        }, e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] = t[i]
        }, s.exports = e
    }), define("famous-physics/forces/Spring", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function (t, i, s) {
        function e(t) {
            this.opts = {period: 0, dampingRatio: 0, length: 0, lMin: 0, lMax: 1 / 0, anchor: void 0, forceFunction: e.FORCE_FUNCTIONS.HOOK, callback: void 0, callbackTolerance: 1e-7}, t && this.setOpts(t), this.init(), this._canFireCallback = void 0, h.call(this)
        }

        function o(t) {
            this.forceFunction = t
        }

        function n(t) {
            t.stiffness = Math.pow(2 * Math.PI / t.period, 2)
        }

        function r(t) {
            t.damping = 4 * Math.PI * t.dampingRatio / t.period
        }

        function a(t, i) {
            return.5 * t * i * i
        }

        var h = t("famous-physics/forces/Force"), u = t("famous-physics/math/Vector");
        e.prototype = Object.create(h.prototype), e.prototype.constructor = h, e.FORCE_FUNCTIONS = {FENE: function (t, i) {
            var s = .99 * i, e = Math.max(Math.min(t, s), -s);
            return e / (1 - e * e / (i * i))
        }, HOOK: function (t) {
            return t
        }}, e.prototype.init = function () {
            var t = this.opts;
            o.call(this, t.forceFunction), n.call(this, t), r.call(this, t)
        }, e.prototype.applyForce = function (t, i) {
            for (var s = this.force, e = this.opts, o = e.stiffness, n = e.damping, r = e.length, h = e.anchor || i.p, u = e.callback, p = 0; p < t.length; p++) {
                var c = t[p], l = h.sub(c.p), f = l.norm() - r;
                if (0 == f)return;
                var d = c.m;
                if (o *= d, n *= d, s.set(l.normalize(o * this.forceFunction(f, this.opts.lMax))), n && (i ? s.add(c.v.sub(i.v).mult(-n), s) : s.add(c.v.mult(-n), s)), c.applyForce(s), i && i.applyForce(s.mult(-1)), this.opts.callback) {
                    var m = c.getEnergy() + a(o, f);
                    this.fireCallback(c, u, m)
                }
            }
        }, e.prototype.fireCallback = function (t, i, s) {
            s < this.opts.callbackTolerance ? (this._canFireCallback && i.call(this, t), this._canFireCallback = !1) : this._canFireCallback = !0
        }, e.prototype.getEnergy = function (t, i) {
            var s = this.opts, e = s.length, o = s.anchor || i.p, n = s.stiffness, r = o.sub(t.p), a = r.norm() - e;
            return.5 * n * a * a
        }, e.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor.p instanceof u && (this.opts.anchor = t.anchor.p), t.anchor instanceof u && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new u(t.anchor))), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.lMin && (this.opts.lMin = t.lMin), void 0 !== t.lMax && (this.opts.lMax = t.lMax), void 0 !== t.forceFunction && (this.opts.forceFunction = t.forceFunction), void 0 !== t.callback && (this.opts.callback = t.callback), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance), this.init()
        }, s.exports = e
    }), define("famous-sync/TouchTracker", ["require", "exports", "module", "famous/EventHandler"], function (t, i, s) {
        function e(t) {
            this.selective = t, this.touchHistory = {}, this.eventHandler = new u(!0)
        }

        function o(t, i, s, e) {
            var o = {};
            for (var n in t)o[n] = t[n];
            return{touch: o, origin: i, timestamp: +Date.now(), count: e, history: s}
        }

        function n(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var s = t.changedTouches[i], e = o(s, t.origin, void 0, t.touches.length);
                this.eventHandler.emit("trackstart", e), this.selective || this.touchHistory[s.identifier] || this.track(e)
            }
        }

        function r(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var s = t.changedTouches[i], e = this.touchHistory[s.identifier];
                if (e) {
                    var n = o(s, t.origin, e, t.touches.length);
                    this.touchHistory[s.identifier].push(n), this.eventHandler.emit("trackmove", n)
                }
            }
        }

        function a(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var s = t.changedTouches[i], e = this.touchHistory[s.identifier];
                if (e) {
                    var n = o(s, t.origin, e, t.touches.length);
                    this.eventHandler.emit("trackend", n), delete this.touchHistory[s.identifier]
                }
            }
        }

        function h() {
            for (var t in this.touchHistory) {
                var i = this.touchHistory[t];
                this.eventHandler.emit("trackend", {touch: i[i.length - 1].touch, timestamp: +Date.now(), count: 0, history: i}), delete this.touchHistory[t]
            }
        }

        var u = t("famous/EventHandler");
        e.prototype.track = function (t) {
            this.touchHistory[t.touch.identifier] = [t]
        }, e.prototype.emit = function (t, i) {
            return"touchstart" == t ? n.call(this, i) : "touchmove" == t ? r.call(this, i) : "touchend" == t ? a.call(this, i) : "touchcancel" == t ? a.call(this, i) : "unpipe" == t ? h.call(this) : void 0
        }, e.prototype.on = function (t, i) {
            return this.eventHandler.on(t, i)
        }, e.prototype.unbind = function (t, i) {
            return this.eventHandler.unbind(t, i)
        }, e.prototype.pipe = function (t) {
            return this.eventHandler.pipe(t)
        }, e.prototype.unpipe = function (t) {
            return this.eventHandler.unpipe(t)
        }, s.exports = e
    }), define("famous-sync/TouchSync", ["require", "exports", "module", "./TouchTracker", "famous/EventHandler"], function (t, i, s) {
        function e(t, i) {
            this.targetGet = t, this.output = new h, this.touchTracker = new a, this.options = {direction: void 0, rails: !1, scale: 1}, i ? this.setOptions(i) : this.setOptions(this.options), h.setOutputHandler(this, this.output), h.setInputHandler(this, this.touchTracker), this.touchTracker.on("trackstart", o.bind(this)), this.touchTracker.on("trackmove", n.bind(this)), this.touchTracker.on("trackend", r.bind(this))
        }

        function o(t) {
            this.output.emit("start", {count: t.count, touch: t.touch.identifier})
        }

        function n(t) {
            var i = t.history, s = i[i.length - 2].timestamp, o = i[i.length - 1].timestamp, n = i[i.length - 2].touch, r = i[i.length - 1].touch, a = r.pageX - n.pageX, h = r.pageY - n.pageY;
            this.options.rails && (Math.abs(a) > Math.abs(h) ? h = 0 : a = 0);
            var u = Math.max(o - s, 8), p = a / u, c = h / u;
            if (i.length > 2)var l = i[i.length - 3].touch, f = (r.pageX - 2 * n.pageX + l.pageX) / (u * u), d = (r.pageY - 2 * n.pageY + l.pageY) / (u * u); else var f = 0, d = 0;
            var m, v, y, g = this.targetGet(), x = this.options.scale;
            this.options.direction == e.DIRECTION_X ? (m = g + x * a, v = x * p, y = x * c) : this.options.direction == e.DIRECTION_Y ? (m = g + x * h, v = x * c, y = x * d) : (m = [g[0] + x * a, g[1] + x * h], v = [x * p, x * c], y = [x * f, x * d]), this.output.emit("update", {p: m, v: v, a: y, touch: t.touch.identifier})
        }

        function r(t) {
            var i = void 0 !== this.options.direction ? 0 : [0, 0], s = t.history, o = t.count, n = this.targetGet();
            if (s.length > 1) {
                var r = s[s.length - 2].timestamp, a = s[s.length - 1].timestamp, h = s[s.length - 2].touch, u = s[s.length - 1].touch, p = u.pageX - h.pageX, c = u.pageY - h.pageY;
                this.options.rails && (Math.abs(p) > Math.abs(c) ? c = 0 : p = 0);
                var i, l = Math.max(a - r, 1), f = p / l, d = c / l, m = this.options.scale;
                i = this.options.direction == e.DIRECTION_X ? m * f : this.options.direction == e.DIRECTION_Y ? m * d : [m * f, m * d]
            }
            this.output.emit("end", {p: n, v: i, count: o, touch: t.touch.identifier})
        }

        var a = t("./TouchTracker"), h = t("famous/EventHandler");
        e.DIRECTION_X = 0, e.DIRECTION_Y = 1, e.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale)
        }, e.prototype.getOptions = function () {
            return this.options
        }, s.exports = e
    }), define("famous-sync/ScrollSync", ["require", "exports", "module", "famous/EventHandler", "famous/Engine"], function (t, i, s) {
        function e(t, i) {
            this.targetGet = t, this.options = {direction: void 0, minimumEndSpeed: 1 / 0, rails: !1, scale: 1, stallTime: 50}, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new r, this.output = new r, r.setInputHandler(this, this.input), r.setOutputHandler(this, this.output), this._prevTime = void 0, this._prevVel = void 0, this._lastFrame = void 0, this.input.on("mousewheel", n.bind(this)), this.input.on("wheel", n.bind(this)), this.inProgress = !1, this._loopBound = !1
        }

        function o() {
            var t = Date.now();
            if (this.inProgress && t - this._prevTime > this.options.stallTime) {
                var i = this.targetGet();
                this.inProgress = !1;
                var s = 0;
                Math.abs(this._prevVel) >= this.options.minimumEndSpeed && (s = this._prevVel), this.output.emit("end", {p: i, v: s, slip: !0})
            }
        }

        function n(t) {
            t.preventDefault(), this.inProgress || (this.inProgress = !0, this.output.emit("start", {slip: !0}), this._loopBound || (a.on("prerender", o.bind(this)), this._loopBound = !0));
            var i = this._prevTime, s = void 0 !== t.wheelDeltaX ? t.wheelDeltaX : -t.deltaX, n = void 0 !== t.wheelDeltaY ? t.wheelDeltaY : -t.deltaY, r = Date.now();
            this.options.rails && (Math.abs(s) > Math.abs(n) ? n = 0 : s = 0);
            var h, u, p = Math.max(r - i, 8), c = s / p, l = n / p, f = this.targetGet(), d = this.options.scale;
            this.options.direction == e.DIRECTION_X ? (h = f + d * s, u = d * c) : this.options.direction == e.DIRECTION_Y ? (h = f + d * n, u = d * l) : (h = [f[0] + d * s, f[1] + d * n], u = [d * c, d * l]), this.output.emit("update", {p: h, v: u, slip: !0}), this._prevTime = r, this._prevVel = u
        }

        var r = t("famous/EventHandler"), a = t("famous/Engine");
        e.DIRECTION_X = 0, e.DIRECTION_Y = 1, e.prototype.getOptions = function () {
            return this.options
        }, e.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.minimumEndSpeed && (this.options.minimumEndSpeed = t.minimumEndSpeed), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime)
        }, s.exports = e
    }), define("famous-sync/GenericSync", ["require", "exports", "module", "famous/EventHandler", "./TouchSync", "./ScrollSync"], function (t, i, s) {
        function e(t, i) {
            this.targetGet = t, this.eventInput = new n, n.setInputHandler(this, this.eventInput), this.eventOutput = new n, n.setOutputHandler(this, this.eventOutput), this._handlers = void 0, this.options = {syncClasses: h}, this._handlerOptions = this.options, i && this.setOptions(i), this._handlers || o.call(this)
        }

        function o() {
            if (this._handlers)for (var t = 0; t < this._handlers.length; t++)this.eventInput.unpipe(this._handlers[t]), this._handlers[t].unpipe(this.eventOutput);
            this._handlers = [];
            for (var t = 0; t < this.options.syncClasses.length; t++) {
                var i = this.options.syncClasses[t];
                this._handlers[t] = new i(this.targetGet, this._handlerOptions), this.eventInput.pipe(this._handlers[t]), this._handlers[t].pipe(this.eventOutput)
            }
        }

        var n = t("famous/EventHandler"), r = t("./TouchSync"), a = t("./ScrollSync"), h = [r, a];
        e.register = function (t) {
            h.indexOf(t) < 0 && h.push(t)
        }, e.DIRECTION_X = 0, e.DIRECTION_Y = 1, e.DIRECTION_Z = 2, e.prototype.setOptions = function (t) {
            if (this._handlerOptions = t, t.syncClasses && (this.options.syncClasses = t.syncClasses, o.call(this)), this._handlers)for (var i = 0; i < this._handlers.length; i++)this._handlers[i].setOptions(this._handlerOptions)
        }, s.exports = e
    }), define("famous/ViewSequence", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s) {
            this.array = t, this.index = i || 0, this.loop = s || !1, this._prev = void 0, this._prevIndex = void 0, this._next = void 0, this._nextIndex = void 0
        }

        e.prototype.getPrevious = function () {
            var t = this.index - 1;
            if (0 == this.index) {
                if (!this.loop)return void 0;
                t = this.array.length - 1
            }
            return this._prev && this._prevIndex == t || (this._prev = new e(this.array, t, this.loop), this._prev._next = this, this._prev._nextIndex = this.index, this._prevIndex = t), this._prev
        }, e.prototype.getNext = function () {
            var t = this.index + 1;
            if (t >= this.array.length) {
                if (!this.loop)return void 0;
                t = 0
            }
            return this._next && this._next == t || (this._next = new e(this.array, t, this.loop), this._next._prev = this, this._next._prevIndex = this.index, this._nextIndex = t), this._next
        }, e.prototype.toString = function () {
            return this.index
        }, e.prototype.get = function () {
            return this.array[this.index]
        }, e.prototype.getSize = function () {
            var t = this.get();
            if (t)return t.getSize ? t.getSize.apply(t, arguments) : void 0
        }, e.prototype.render = function () {
            var t = this.get();
            if (t)return t.render.apply(t, arguments)
        }, s.exports = e
    }), define("famous/Group", ["require", "exports", "module", "./Context", "./Matrix", "./Surface"], function (t, i, s) {
        function e(t) {
            r.call(this, t), this._shouldRecalculateSize = !1, this._container = document.createDocumentFragment(), this.context = new o(this._container), this.setContent(this._container), this._groupSize = [void 0, void 0], this._origin = void 0, this._originTransfer = {render: function (t) {
                return{origin: this._origin, target: t}
            }.bind(this)}
        }

        var o = t("./Context"), n = t("./Matrix"), r = t("./Surface");
        e.SIZE_ZERO = [0, 0], e.prototype = Object.create(r.prototype), e.prototype.elementType = "div", e.prototype.elementClass = "group", e.prototype.link = function () {
            var t = this.context.link(this._originTransfer);
            return t.link.apply(t, arguments)
        }, e.prototype.add = function () {
            return this.context.add.apply(this.context, arguments)
        }, e.prototype.mod = function () {
            return this.context.mod.apply(this.context, arguments)
        }, e.prototype.render = function () {
            return r.prototype.render.call(this)
        }, e.prototype.deploy = function (t) {
            this.context.migrate(t)
        }, e.prototype.recall = function () {
            this._container = document.createDocumentFragment(), this.context.migrate(this._container)
        }, e.prototype.commit = function (t, i, s, o, a) {
            i = n.moveThen([-o[0] * a[0], -o[1] * a[1], 0], i);
            var h = r.prototype.commit.call(this, t, i, s, o, e.SIZE_ZERO);
            return this._origin = o, (a[0] != this._groupSize[0] || a[1] != this._groupSize[1]) && (this.context.setSize(a), this._groupSize[0] = a[0], this._groupSize[1] = a[1]), this.context.update(), h
        }, s.exports = e
    }), define("famous-views/Scrollview", ["require", "exports", "module", "famous/Utility", "famous-physics/PhysicsEngine", "famous-physics/bodies/Particle", "famous-physics/forces/Drag", "famous-physics/forces/Spring", "famous/Matrix", "famous/EventHandler", "famous-sync/GenericSync", "famous/ViewSequence", "famous/Group", "famous/Entity"], function (t, i, s) {
        function e(t) {
            this.options = {direction: x.Direction.Y, rails: !0, defaultItemSize: [100, 100], itemSpacing: 0, clipSize: void 0, margin: void 0, drag: .001, edgeGrip: .5, edgePeriod: 300, edgeDamp: 1, paginated: !1, pagePeriod: 500, pageDamp: .8, pageStopSpeed: 1 / 0, pageSwitchSpeed: 1, speedLimit: 10}, this.physicsEngine = new S, this.particle = new b, this.physicsEngine.addBody(this.particle), this.spring = new M({anchor: [0, 0, 0]}), this.drag = new w, this.sync = new C(function () {
                return-this.getPosition()
            }.bind(this), {direction: this.options.direction == x.Direction.X ? C.DIRECTION_X : C.DIRECTION_Y}), this.eventInput = new z, this.eventOutput = new z, this.sync.pipe(this.eventInput), this.sync.pipe(this.eventOutput), z.setOutputHandler(this, this.eventOutput), this._outputFunction = void 0, this._masterOutputFunction = void 0, this.setOutputFunction(), this.touchCount = 0, this._springAttached = !1, this.currSpring = void 0, this._onEdge = 0, this._springPosition = 0, this._touchVelocity = void 0, this._earlyEnd = !1, this._masterOffset = 0, this._lastFrameNode = void 0, t ? this.setOptions(t) : this.setOptions({}), a.call(this), this.group = new _, this.group.link({render: g.bind(this)}), this._entityId = O.register(this), this._contextSize = [window.innerWidth, window.innerHeight], this._offsets = {}
        }

        function o(t) {
            this.touchCount = t.count, void 0 === t.count && (this.touchCount = 1), u.call(this), this.setVelocity(0), this._touchVelocity = 0, this._earlyEnd = !1
        }

        function n(t) {
            var i = -t.p, s = -t.v;
            this._onEdge && t.slip && (0 > s && this._onEdge < 0 || s > 0 && this._onEdge > 0 ? this._earlyEnd || (r.call(this, t), this._earlyEnd = !0) : this._earlyEnd && Math.abs(s) > Math.abs(this.particle.getVel()[0]) && o.call(this, t)), this._earlyEnd || (this._touchVelocity = s, this.setPosition(i))
        }

        function r(t) {
            if (this.touchCount = t.count || 0, !this.touchCount) {
                u.call(this), this._onEdge && (this._springAttached = !0), h.call(this);
                var i = -t.v, s = this.options.speedLimit;
                t.slip && (s *= this.options.edgeGrip), -s > i ? i = -s : i > s && (i = s), this.setVelocity(i), this._touchVelocity = void 0
            }
        }

        function a() {
            this.eventInput.on("start", o.bind(this)), this.eventInput.on("update", n.bind(this)), this.eventInput.on("end", r.bind(this))
        }

        function h() {
            this._springAttached ? this.physicsEngine.attach([this.spring], this.particle) : this.physicsEngine.attach([this.drag], this.particle)
        }

        function u() {
            this._springAttached = !1, this.physicsEngine.detachAll()
        }

        function p(t) {
            return t || (t = this.options.defaultItemSize), t[this.options.direction == x.Direction.X ? 0 : 1]
        }

        function c(t) {
            this._springPosition += t, this.setPosition(this.getPosition() + t), this.spring.setOpts({anchor: [this._springPosition, 0, 0]})
        }

        function l() {
            for (var t = !1; !t && this.getPosition() < 0;) {
                var i = this.node.getPrevious ? this.node.getPrevious() : void 0;
                if (i) {
                    var s = i.getSize ? i.getSize() : this.options.defaultItemSize, e = p.call(this, s) + this.options.itemSpacing;
                    c.call(this, e), this._masterOffset -= e, this.node = i
                } else t = !0
            }
            for (var o = this.node && this.node.getSize ? this.node.getSize() : this.options.defaultItemSize; !t && this.getPosition() >= p.call(this, o) + this.options.itemSpacing;) {
                var n = this.node.getNext ? this.node.getNext() : void 0;
                if (n) {
                    var e = p.call(this, o) + this.options.itemSpacing;
                    c.call(this, -e), this._masterOffset += e, this.node = n, o = this.node.getSize ? this.node.getSize() : this.options.defaultItemSize
                } else t = !0
            }
            Math.abs(this._masterOffset) > y.call(this) + this.options.margin && (this._masterOffset = 0)
        }

        function f(t) {
            !this._onEdge && t ? (this.sync.setOptions({scale: this.options.edgeGrip}), this.touchCount || this._springAttached || (this._springAttached = !0, this.physicsEngine.attach([this.spring], this.particle))) : this._onEdge && !t && (this.sync.setOptions({scale: 1}), this._springAttached && (u.call(this), h.call(this))), this._onEdge = t
        }

        function d() {
            if (0 == this.touchCount && !this._springAttached && !this._onEdge && this.options.paginated && Math.abs(this.getVelocity()) < this.options.pageStopSpeed) {
                var t = this.node.getSize ? this.node.getSize() : this.options.defaultItemSize, i = Math.abs(this.getVelocity()) > this.options.pageSwitchSpeed, s = this.getVelocity() > 0, e = this.getPosition() > .5 * p.call(this, t);
                (i && s || !i && e) && this.goToNextPage(), m.call(this, 0, {period: this.options.pagePeriod, damp: this.options.pageDamp}), this._springAttached = !0, this.physicsEngine.attach([this.spring], this.particle)
            }
        }

        function m(t, i) {
            i || (i = {period: this.options.edgePeriod, damp: this.options.edgeDamp}), this._springPosition = t, this.spring.setOpts({anchor: [this._springPosition, 0, 0], period: i.period, dampingRatio: i.damp})
        }

        function v(t, i, s) {
            var e = t.getSize ? t.getSize() : this.options.defaultItemSize;
            e || (e = this.options.defaultItemSize);
            var o = this._outputFunction(i);
            return s.push({transform: o, target: t.render()}), e[this.options.direction == x.Direction.X ? 0 : 1]
        }

        function y() {
            return this.options.clipSize ? this.options.clipSize : p.call(this, this._contextSize)
        }

        function g() {
            var t = {};
            if (this.node) {
                var i = this.getPosition(), s = [], e = 0, o = 0, n = this.node;
                for (t[n] = 0; n && o - i < y.call(this) + this.options.margin;)o += v.call(this, n, o + this._masterOffset, s) + this.options.itemSpacing, n = n.getNext ? n.getNext() : void 0, t[n] = o, !n && o - i - this.options.itemSpacing <= y.call(this) && (this._onEdge || m.call(this, o - y.call(this) - this.options.itemSpacing), e = 1);
                if (n = this.node && this.node.getPrevious ? this.node.getPrevious() : void 0, o = 0, n) {
                    var r = n.getSize ? n.getSize() : this.options.defaultItemSize;
                    o -= p.call(this, r) + this.options.itemSpacing
                } else 0 >= i && (this._onEdge || m.call(this, 0), e = -1);
                for (; n && o - i > -(y.call(this) + this.options.margin);)if (t[n] = o, v.call(this, n, o + this._masterOffset, s), n = n.getPrevious ? n.getPrevious() : void 0) {
                    var r = n.getSize ? n.getSize() : this.options.defaultItemSize;
                    o -= p.call(this, r) + this.options.itemSpacing
                }
                return this._offsets = t, f.call(this, e), d.call(this), this.options.paginated && this._lastFrameNode !== this.node && (this.eventOutput.emit("pageChange"), this._lastFrameNode = this.node), s
            }
        }

        var x = t("famous/Utility"), S = t("famous-physics/PhysicsEngine"), b = t("famous-physics/bodies/Particle"), w = t("famous-physics/forces/Drag"), M = t("famous-physics/forces/Spring"), T = t("famous/Matrix"), z = t("famous/EventHandler"), C = t("famous-sync/GenericSync"), P = t("famous/ViewSequence"), _ = t("famous/Group"), O = t("famous/Entity");
        e.prototype.emit = function (t, i) {
            "update" == t || "start" == t || "end" == t ? this.eventInput.emit(t, i) : this.sync.emit(t, i)
        }, e.prototype.getPosition = function (t) {
            var i = this.particle.getPos()[0];
            if (t) {
                var s = this._offsets[t];
                return void 0 !== s ? i - s : void 0
            }
            return i
        }, e.prototype.setPosition = function (t) {
            this.particle.setPos([t, 0, 0])
        }, e.prototype.getVelocity = function () {
            return this.touchCount ? this._touchVelocity : this.particle.getVel()[0]
        }, e.prototype.setVelocity = function (t) {
            this.particle.setVel([t, 0, 0])
        }, e.prototype.getOptions = function () {
            return this.options
        }, e.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction, "x" === this.options.direction ? this.options.direction = x.Direction.X : "y" === this.options.direction && (this.options.direction = x.Direction.Y)), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.defaultItemSize && (this.options.defaultItemSize = t.defaultItemSize), void 0 !== t.itemSpacing && (this.options.itemSpacing = t.itemSpacing), void 0 !== t.clipSize && (this.options.clipSize = t.clipSize), void 0 !== t.margin && (this.options.margin = t.margin), void 0 !== t.drag && (this.options.drag = t.drag), void 0 !== t.friction && (this.options.friction = t.friction), void 0 !== t.edgeGrip && (this.options.edgeGrip = t.edgeGrip), void 0 !== t.edgePeriod && (this.options.edgePeriod = t.edgePeriod), void 0 !== t.edgeDamp && (this.options.edgeDamp = t.edgeDamp), void 0 !== t.paginated && (this.options.paginated = t.paginated), void 0 !== t.pageStopSpeed && (this.options.pageStopSpeed = t.pageStopSpeed), void 0 !== t.pageSwitchSpeed && (this.options.pageSwitchSpeed = t.pageSwitchSpeed), void 0 !== t.pagePeriod && (this.options.pagePeriod = t.pagePeriod), void 0 !== t.pageDamp && (this.options.pageDamp = t.pageDamp), void 0 !== t.speedLimit && (this.options.speedLimit = t.speedLimit), void 0 === this.options.margin && (this.options.margin = .5 * Math.max(window.innerWidth, window.innerHeight)), this.drag.setOpts({strength: this.options.drag}), this.spring.setOpts({period: this.options.edgePeriod, dampingRatio: this.options.edgeDamp}), this.sync.setOptions({rails: this.options.rails, direction: this.options.direction == x.Direction.X ? C.DIRECTION_X : C.DIRECTION_Y})
        }, e.prototype.setOutputFunction = function (t, i) {
            t || (t = function (t) {
                return this.options.direction == x.Direction.X ? T.translate(t, 0) : T.translate(0, t)
            }.bind(this), i = t), this._outputFunction = t, this._masterOutputFunction = i ? i : function (i) {
                return T.inverse(t(-i))
            }
        }, e.prototype.goToPreviousPage = function () {
            var t = this.node.getPrevious ? this.node.getPrevious() : void 0;
            if (t) {
                var i = p.call(this, this.node.getSize()) + this.options.itemSpacing;
                this.setPosition(this.getPosition() + i), this.node = t;
                for (var s in this.offsets)this.offsets[s] += i
            }
            return t
        }, e.prototype.goToNextPage = function () {
            var t = this.node.getNext ? this.node.getNext() : void 0;
            if (t) {
                var i = p.call(this, this.node.getSize()) + this.options.itemSpacing;
                this.setPosition(this.getPosition() - i), this.node = t;
                for (var s in this.offsets)this.offsets[s] -= i
            }
            return t
        }, e.prototype.getCurrentNode = function () {
            return this.node
        }, e.prototype.sequenceFrom = function (t) {
            t instanceof Array && (t = new P(t)), this.node = t, this._lastFrameNode = t
        }, e.prototype.getSize = function () {
            return this.options.direction == x.Direction.X ? [y.call(this), void 0] : [void 0, y.call(this)]
        }, e.prototype.render = function () {
            return this.physicsEngine.step(), this._entityId
        }, e.prototype.commit = function (t, i, s, e, o) {
            this._contextSize = o, l.call(this);
            var n = this.getPosition(), r = this._masterOutputFunction(-(n + this._masterOffset));
            return{transform: T.moveThen([-e[0] * o[0], -e[1] * o[1], 0], i), opacity: s, origin: e, size: o, target: {transform: r, origin: e, target: this.group.render()}}
        }, s.exports = e
    }), define("famous-ui/PanelScrollview", ["require", "exports", "module", "famous-views/Scrollview"], function (t, i, s) {
        function e(t) {
            this.panelOpts = Object.create(e.DEFAULT_OPTIONS), t && this.setPanelOptions(t), n.call(this, this.panelOpts.scrollviewOptions), this.uiItems = [], this._sequenced = !1
        }

        function o(t) {
            this.uiItems.push(t), this._sequenced === !1 && (this.sequenceFrom(this.uiItems), this._sequenced = !0), void 0 === t.getSize() && t.setSize && t.setSize([this.panelOpts.width, this.panelOpts.sliderHeight]), t.init && t.init(), t.pipe && t.pipe(this)
        }

        var n = t("famous-views/Scrollview");
        e.DEFAULT_OPTIONS = {scrollviewOptions: {direction: "y", itemSpacing: 8}, width: 256, sliderHeight: 16}, e.prototype = Object.create(n.prototype), e.prototype.setPanelOptions = function (t) {
            for (var i in e.DEFAULT_OPTIONS)void 0 !== t[i] && (this.panelOpts[i] = t[i])
        }, e.prototype.reset = function () {
            this.uiItems = [], this._sequenced = !1
        }, e.prototype.add = function (t) {
            if (t instanceof Array)for (var i = 0; i < t.length; i++)o.call(this, t[i]); else o.call(this, t)
        }, e.prototype.addBackground = function () {
        }, s.exports = e
    }), define("famous-ui/Toggles/BoolToggle", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous/EventHandler", "famous/Modifier", "famous/Modifier", "famous-animation/Easing", "famous/RenderNode", "famous-utils/Utils", "famous/View"], function (t, i, s) {
        function e(t) {
            p.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value = t.value, this.name = t.name
        }

        function o() {
            this.toggle()
        }

        function n() {
            this.transform.halt();
            var t = this.value ? a.scale(1, 1, 1) : a.move(a.scale(1e-4, 1e-4, 1e-4), [.5 * this.options.size[1], .5 * this.options.size[1], 0]), i = this.value ? 1 : 0;
            this.transform.setTransform(t, this.options.transition), this.transform.setOpacity(i, this.options.transition)
        }

        var r = t("famous/Surface"), a = t("famous/Matrix");
        t("famous/EventHandler"), t("famous/Modifier");
        var h = t("famous/Modifier"), u = t("famous-animation/Easing");
        t("famous/RenderNode"), t("famous-utils/Utils");
        var p = t("famous/View");
        e.prototype = Object.create(p.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {size: void 0, value: !0, name: "bool toggle", transition: {duration: 250, curve: u.inOutBackNorm}, padding: 20}, e.prototype.init = function () {
            void 0 == this.options.size && (this.options.size = [void 0, void 0]);
            var t = 1 == this.options.value ? 1 : 0;
            this.label = new r({size: this.options.size, content: '<div style="border: 1px solid #ffffff; width:' + this.options.size[1] + "px; height: " + this.options.size[1] + 'px; float: left;"></div>' + '<div class="slider-label" style="float: left; margin-left:' + .5 * this.options.size[1] + "px;margin-top:" + .1 * this.options.size[1] + 'px">' + this.name + "</div>", properties: {"font-size": .75 * this.options.size[1] + "px"}}), this.fill = new r({size: [this.options.size[1], this.options.size[1]], properties: {"background-color": "#ffffff"}}), this.transform = new h({opacity: t, transform: a.translate(0, 0, 1), size: [this.options.size[1], this.options.size[1]]}), this.labelTransform = new h({transform: a.translate(0, 0, 1)}), this.fill.pipe(this), this.label.pipe(this), this.on("click", o.bind(this)), this.node.add(this.transform).link(this.fill), this.node.add(this.labelTransform).link(this.label), this.set(this.options.value)
        }, e.prototype.silentSet = function (t) {
            this.value = t, n.call(this)
        }, e.prototype.toggle = function () {
            this.set(!this.value)
        }, e.prototype.set = function (t) {
            this.value !== t && (this.value = t, this.emit("change", {value: this.value}), n.call(this))
        }, e.prototype.get = function () {
            return this.value
        }, e.prototype.getSize = function () {
            return this.options.size
        }, e.prototype.setSize = function (t) {
            this.options.size = t
        }, s.exports = e
    }), define("famous-ui/Toggles/MultiBoolToggle", ["require", "exports", "module", "famous/Surface", "famous/RenderNode", "famous/Matrix", "famous/Modifier", "famous/Transitionable", "famous/EventHandler", "famous/View", "famous-animation/Easing", "./BoolToggle"], function (t, i, s) {
        function e() {
            c.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value, this.label, this.labelTransform, this.usingLabel = !1, this.bools = [], this.boolValues = [], this.transforms = []
        }

        function o() {
            void 0 !== this.options.name && (this.label = new a({size: this.options.size, content: '<div class="slider-label" style="margin-top:' + .1 * this.options.size[1] + 'px">' + this.options.name + "</div>"}), this.label.setProperties({"font-size": .75 * this.options.size[1] + "px"}), this.labelTransform = new u, this.transforms.push(this.labelTransform), this.usingLabel = !0, this.node.add(this.labelTransform).link(this.label), r.call(this))
        }

        function n() {
            for (var t = 0; t < this.options.values.length; t++) {
                var i = t == this.options.defaultSelected ? !0 : !1;
                i && (this.value = this.options.values[t]), this._addToggle(i, this.options.values[t], !0)
            }
        }

        function r() {
            this.sizeState.halt();
            var t = this.transforms.length, i = t * this.options.size[1] + (t - 1) * this.options.padding;
            this.sizeState.set([this.options.size[0], i], this.options.sizeTransition)
        }

        var a = t("famous/Surface");
        t("famous/RenderNode");
        var h = t("famous/Matrix"), u = t("famous/Modifier"), p = t("famous/Transitionable");
        t("famous/EventHandler");
        var c = t("famous/View"), l = t("famous-animation/Easing"), f = t("./BoolToggle");
        e.prototype = Object.create(c.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {size: void 0, values: [], defaultSelected: 0, name: void 0, padding: 20, sizeTransition: {curve: l.inOutBackNorm, duration: 400}, opacityTransition: {curve: l.inOutBackNorm, duration: 400}}, e.prototype.init = function () {
            void 0 == this.options.size && (this.options.size = [void 0, void 0]), this.sizeState = new p([this.options.size[0], 0]), o.call(this), n.call(this)
        }, e.prototype.setSelectedToggle = function (t) {
            for (var i = 0; i < this.bools.length; i++)i == t ? (this.bools[i].silentSet(!0), this.boolValues[i] = !0, this.value = this.options.values[i], this.emit("change", {value: this.options.values[i]})) : (this.bools[i].silentSet(!1), this.boolValues[i] = !1)
        }, e.prototype.set = function (t) {
            var i = this.options.values.indexOf(t);
            this.setSelectedToggle(i)
        }, e.prototype.get = function () {
            return this.value
        }, e.prototype._addToggle = function (t, i, s) {
            var e = this.transforms.length, o = new f({size: this.options.size, value: t, name: i});
            o.init(), o.pipe(this), s || this.options.values.push(i);
            var n = new u({transform: h.translate(0, this.options.size[1] * e + this.options.padding * e), opacity: 0});
            n.setOpacity(1, this.options.opacityTransition), this.bools.push(o), this.transforms.push(n), this.node.add(n).link(o), o.silentSet(t), this.boolValues.push(t), o.on("change", function (t) {
                1 == this.boolValues[t] ? this.bools[t].silentSet(!0) : this.setSelectedToggle(t)
            }.bind(this, this.usingLabel ? e - 1 : e)), r.call(this)
        }, e.prototype.getSize = function () {
            return this.sizeState ? this.sizeState.get() : void 0
        }, e.prototype.setSize = function (t) {
            this.options.size = t
        }, e.prototype.removeToggle = function (t) {
            var i, s;
            "number" == typeof t ? i = t : "string" == typeof t && (i = this.options.values.indexOf(t)), i >= 0 && (s = this.usingLabel ? i + 1 : i, this.transforms[s].setOpacity(0, this.options.sizeTransition, function (t, i) {
                this.branches.splice(i, 1), this.bools.splice(t, 1), this.options.values.splice(t, 1), this.transforms.splice(i, 1), r.call(this)
            }.bind(this, i, s)))
        }, s.exports = e
    }), define("famous/CanvasSurface", ["require", "exports", "module", "./Surface"], function (t, i, s) {
        function e(t) {
            t && t.canvasSize && (this.canvasSize = t.canvasSize), o.call(this, t), this.canvasSize || (this.canvasSize = this.getSize()), this.backBuffer = document.createElement("canvas"), this.canvasSize && (this.backBuffer.width = this.canvasSize[0], this.backBuffer.height = this.canvasSize[1]), this._contextId = void 0
        }

        var o = t("./Surface");
        e.prototype = Object.create(o.prototype), e.prototype.elementType = "canvas", e.prototype.elementClass = "surface", e.prototype.setContent = function () {
        }, e.prototype.deploy = function (t) {
            this.canvasSize && (t.width = this.canvasSize[0], t.height = this.canvasSize[1]), "2d" == this._contextId && (t.getContext(this._contextId).drawImage(this.backBuffer, 0, 0), this.backBuffer.width = 0, this.backBuffer.height = 0)
        }, e.prototype.recall = function (t) {
            this.getSize(), this.backBuffer.width = t.width, this.backBuffer.height = t.height, "2d" == this._contextId && (this.backBuffer.getContext(this._contextId).drawImage(t, 0, 0), t.width = 0, t.height = 0)
        }, e.prototype.getContext = function (t) {
            return this._contextId = t, this._currTarget ? this._currTarget.getContext(t) : this.backBuffer.getContext(t)
        }, e.prototype.setSize = function (t, i) {
            o.prototype.setSize.apply(this, arguments), i && (this.canvasSize = i.slice(0)), this._currTarget && (this._currTarget.width = this.canvasSize[0], this._currTarget.height = this.canvasSize[1])
        }, s.exports = e
    }), define("famous-ui/Easing/CanvasDrawer", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s, e, o) {
            t.beginPath(), t.moveTo(i, s), t.lineTo(e, o), t.stroke(), t.closePath()
        }

        function o(t, i, s, e, o) {
            t.beginPath(), t.rect(i, s, e, o), t.fill(), t.closePath()
        }

        s.exports = {lineTo: e, rect: o}
    }), define("famous-ui/Easing/EasingVisualizer", ["require", "exports", "module", "famous-animation/Easing", "famous/CanvasSurface", "./CanvasDrawer"], function (t, i, s) {
        function e(t) {
            this.opts = {size: [1e3, 1e3], strokeColor: "#33ccff", fillColor: "#333", fn: n.inOutBackNorm, divisions: 30}, this.setOpts(t), this.opts.canvasSize = [2 * this.opts.size[0], 2 * this.opts.size[1]], this.opts.gutter = Math.floor(.35 * this.opts.size[0]), r.call(this, {size: this.opts.size, canvasSize: this.opts.canvasSize}), this.update()
        }

        function o() {
            var t = document.createElement("canvas");
            t.width = this.opts.canvasSize[0], t.height = this.opts.canvasSize[1];
            var i = t.getContext("2d");
            i.strokeStyle = this.opts.strokeColor, i.lineWidth = 2, i.fillStyle = this.opts.fillColor, a.rect(i, 0, 0, this.opts.canvasSize[0], this.opts.canvasSize[1]);
            for (var s = 1 / this.opts.divisions, e = this.opts.canvasSize[0] - this.opts.gutter, o = this.opts.canvasSize[1] - this.opts.gutter, n = .5 * this.opts.gutter, r = 1; r < this.opts.divisions; r++) {
                var h = s * (r - 1), u = s * r, p = h * e + n, c = u * e + n, l = o - this.opts.fn(h) * (o - this.opts.gutter), f = o - this.opts.fn(u) * (o - this.opts.gutter);
                a.lineTo(i, p, l, c, f)
            }
            return t
        }

        var n = t("famous-animation/Easing"), r = t("famous/CanvasSurface"), a = t("./CanvasDrawer");
        e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e.prototype.setOpts = function (t, i) {
            i || (i = this.opts);
            for (var s in t)i[s] = t[s]
        }, e.prototype.setCurve = function (t) {
            this.opts.fn = t, this.update()
        }, e.prototype.update = function () {
            var t = o.call(this), i = this.getContext("2d");
            i.drawImage(t, 0, 0)
        }, s.exports = e
    }), define("famous-ui/Easing/EasingBool", ["require", "exports", "module", "./EasingVisualizer", "famous/EventHandler"], function (t, i, s) {
        function e(t, i) {
            this.easingOpts = {value: !1, selectedProperties: {border: "3px solid #33ccff"}, normalProperties: {border: "none"}}, n.apply(this, arguments), this.setOptions(i, this.easingOpts), this.on("click", this.toggle.bind(this)), o.call(this)
        }

        function o() {
            var t = this.easingOpts.value ? this.easingOpts.selectedProperties : this.easingOpts.normalProperties;
            this.setProperties(t)
        }

        var n = t("./EasingVisualizer");
        t("famous/EventHandler"), e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.prototype.silentSet = function (t) {
            this.easingOpts.value = t, o.call(this)
        }, e.prototype.toggle = function () {
            this.set(!this.value)
        }, e.prototype.set = function (t) {
            this.easingOpts.value = t, this.emit("boolChange", {value: this.easingOpts.value}), o.call(this)
        }, s.exports = e
    }), define("famous-ui/Easing/MultiEasingToggle", ["require", "exports", "module", "./EasingBool", "famous-animation/Easing", "famous/View", "famous/Modifier", "famous/Matrix"], function (t, i, s) {
        function e() {
            h.apply(this, arguments), this.value = this.options.easingFns[this.options.defaultSelected], this.height = 0, this.bools = [], this.initialized = !1
        }

        function o() {
            for (var t = this.options.easingFns.length, i = [], s = 0, e = -1, o = 0; t > o; o++)e = o % this.options.columns, 0 === e && 0 !== o && s++, i.push(p.translate(e * this.options.easingBoolSize[0], s * this.options.easingBoolSize[1], 0)), o == t - 1 && (this.options.size[1] = (s + 1) * this.options.easingBoolSize[1]);
            return i
        }

        function n(t, i) {
            for (var s = !i, e = 0; e < this.bools.length; e++)e == t ? this.bools[e].silentSet(i) : this.bools[e].silentSet(s);
            this.value = this.options.easingFns[t], this.eventOutput.emit("change", {value: this.value})
        }

        var r = t("./EasingBool"), a = t("famous-animation/Easing"), h = t("famous/View"), u = t("famous/Modifier"), p = t("famous/Matrix");
        e.prototype = Object.create(h.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {easingFns: [a.inOutBackNorm, a.outBounceNorm, a.inOutBackNorm, a.outBounceNorm], columns: 3, size: void 0, panelSize: 216, easingAspect: [1.25, 1], defaultSelected: 0, easingBoolSize: [void 0, void 0], selectedProperties: void 0, normalProperties: void 0}, e.prototype.init = function () {
            for (var t = o.call(this), i = 0; i < this.options.easingFns.length; i++) {
                value = i == this.options.defaultSelected ? !0 : !1;
                var s = {value: value};
                this.options.selectedProperties && (s.selectedProperties = this.options.selectedProperties), this.options.normalProperties && (s.normalProperties = this.options.normalProperties);
                var e = new r({fn: this.options.easingFns[i], size: this.options.easingBoolSize}, s);
                e.on("boolChange", n.bind(this, i)), e.pipe(this.eventOutput), this.node.add(new u(t[i])).link(e), this.bools.push(e)
            }
            this.initialized = !0
        }, e.prototype.set = function (t) {
            var i = this.options.easingFns.indexOf(t);
            n.call(this, i, !0)
        }, e.prototype.get = function () {
            return this.value
        }, e.prototype.setSize = function (t) {
            this.options.easingBoolSize[0] = Math.floor(t[0] / this.options.columns), this.options.easingBoolSize[1] = Math.floor(this.options.easingBoolSize[0] / this.options.easingAspect[0]), this.options.size = [], this.options.size[0] = t[0]
        }, e.prototype.getSize = function () {
            return this.initialized ? this.options.size : void 0
        }, s.exports = e
    }), define("famous-ui/Dropdown/DropdownItem", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous/Surface", "famous-animation/Easing", "famous-utils/Utils", "famous-views/Scrollview"], function (t, i, s) {
        function e(t, i, s) {
            n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.value = i, this._isSelected = s || !1, this._styleType, this.options.itemContent.unshift(this.options.name), this.surface = new h({size: this.options.itemSize, content: this.options.template.apply(this, this.options.itemContent)}), this.transform = new a, o.call(this), this.surface.pipe(this), this.surface.on("click", this.emit.bind(this, "selection", {value: this.value, origin: this})), this.node.link(this.transform).link(this.surface)
        }

        function o() {
            this.transform.halt(), this._isSelected ? (this.surface.setProperties(this.options.selectedProperties), this._styleType = !0, this.transform.setTransform(r.move(r.scale(.7, .7), [.125 * this.options.itemSize[0], .125 * this.options.itemSize[1]])), this.transform.setTransform(r.identity, this.options.squishCurve, this.emit.bind(this, "selectionEnd"))) : (this.surface.setProperties(this.options.properties), this._styleType = !1, this.transform.getFinalTransform() !== r.identity && this.transform.setTransform(r.identity))
        }

        var n = t("famous/View"), r = t("famous/Matrix"), a = t("famous/Modifier"), h = t("famous/Surface"), u = t("famous-animation/Easing");
        t("famous-utils/Utils"), t("famous-views/Scrollview"), e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {name: "Food", itemSize: [216, 50], classes: [], properties: {color: "#ffffff", "background-color": "#333", border: "1px solid #ccc"}, selectedProperties: {}, template: function (t) {
            return'<h2 style="padding: 10px;">' + t + "</h2>"
        }, defaultCurve: {curve: u.inOutBackNorm, duration: 400}, squishCurve: {curve: u.outBounceNorm, duration: 400}, itemContent: []}, e.prototype.setTemplate = function () {
        }, e.prototype.setSelected = function (t) {
            this._isSelected = t, o.call(this)
        }, e.prototype.getSize = function () {
            return this.surface.getSize()
        }, e.prototype.getName = function () {
            return this.options.name
        }, s.exports = e
    }), define("famous-ui/Dropdown/Dropdown", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous/Transitionable", "famous/Surface", "famous-animation/Easing", "famous-utils/Utils", "famous-views/Scrollview", "./DropdownItem", "famous/ContainerSurface"], function (t, i, s) {
        function e() {
            f.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.options.scrollviewOpts.clipSize = this.options.height, this.label = void 0, this.defaultMtx = void 0, this.closedMtx = void 0, this.arrowClosedPos = void 0, this.arrowOpenPos = void 0, this.labelTemplate = void 0, this.itemTemplate = void 0, this.itemOpts = void 0, this.sizeState = new v([0, 0]), this.items = [], this._isOpen = !1, this.initialized = !1
        }

        function o() {
            this.label = new y({content: this._getLabelContent(this.options.defaultSelected), size: this.options.itemSize}), this.label.setProperties(this.options.labelProperties), this.labelTransform = new m, this.node.add(this.labelTransform).link(this.label), this.label.on("click", this.toggleMenu.bind(this))
        }

        function n() {
            this.arrow = new y({size: this.options.arrowSize, content: this.options.arrowContent}), this.arrowTransform = new m({transform: this.arrowClosedPos}), this.node.add(this.arrowTransform).link(this.arrow)
        }

        function r() {
            this.scrollviewContainer = new b({size: [this.options.itemSize[0], this.options.height], properties: {overflow: "hidden"}}), this.scrollview = new x(this.options.scrollviewOpts), this.scrollview.sequenceFrom(this.items), this.scrollviewTransform = new m({transform: this.closedMtx, opacity: 0, size: [this.options.itemSize[0], this.options.itemSize[1]]}), this.node.add(this.scrollviewTransform).link(this.scrollviewContainer), this.scrollviewContainer.add(this.scrollview)
        }

        function a() {
            for (var t = 0; t < this.options.items.length; t++) {
                var i = this.options.items[t];
                this.addItem(i.name, i.value, i.content)
            }
            this.value = this.items[this.options.defaultSelected].value
        }

        function h(t) {
            var i = t ? this.arrowOpenPos : this.arrowClosedPos;
            this.arrowTransform.setTransform(i, this.options.defaultCurve)
        }

        function u(t) {
            var i = t ? 1 : 1e-6, s = t ? [this.options.itemSize[0], this.options.height] : [this.options.itemSize[0], this.options.itemSize[1]], e = t ? this.defaultMtx : this.closedMtx;
            this.scrollviewTransform.setOpacity(i, this.options.defaultCurve), this.scrollviewTransform.setTransform(e, this.options.defaultCurve), this.sizeState.set(s, this.options.defaultCurve)
        }

        function p(t) {
            var i = this.items.indexOf(t.origin), s = this.items[i];
            s && this.set(s.value, i)
        }

        function c(t) {
            for (var i = 0; i < this.items.length; i++)t == i ? this.items[i].setSelected(!0) : this.items[i].setSelected(!1)
        }

        function l(t) {
            for (var i = 0; i < this.items.length; i++)if (this.items[i].value == t)return i;
            return-1
        }

        var f = t("famous/View"), d = t("famous/Matrix"), m = t("famous/Modifier"), v = t("famous/Transitionable"), y = t("famous/Surface"), g = t("famous-animation/Easing");
        t("famous-utils/Utils");
        var x = t("famous-views/Scrollview"), S = t("./DropdownItem"), b = t("famous/ContainerSurface");
        e.prototype = Object.create(f.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {items: [
            {name: "Apples", value: "apples"},
            {name: "Oranges", value: "oranges"}
        ], defaultSelected: 0, itemSize: void 0, labelProperties: {color: "#ffffff", "background-color": "#333", border: "1px solid #ccc"}, itemClasses: [], itemProperties: {color: "#ccc", "background-color": "#fff", border: "1px solid #ccc"}, itemSelectedProperties: {border: "3px solid #33ccff"}, scrollviewOpts: {direction: 1, clipSize: void 0}, height: 125, defaultCurve: {curve: g.inOutBackNorm, duration: 500}, labelFadeCurve: {curve: g.inOutSineNorm, duration: 200}, arrowSize: [20, 20], arrowPadding: [5, 10, 1], arrowContent: '<img src="js/famous-ui/img/arrowRight.svg"></img>', itemTemplate: function (t) {
            return'<h4 style="line-height:' + this.options.itemSize[1] + 'px; padding-left: 10px;">' + t + "</h4>"
        }, labelTemplate: function (t) {
            return'<h3 style="line-height:' + this.options.itemSize[1] + 'px; padding-left: 10px;">' + t + "</h3>"
        }, autoClose: !1}, e.prototype.init = function () {
            this.defaultMtx = d.translate(0, this.options.itemSize[1], 0), this.closedMtx = d.move(d.scale(1, .01), [0, this.options.itemSize[1], 0]), this.arrowClosedPos = d.translate(this.options.itemSize[0] - this.options.arrowSize[0] - this.options.arrowPadding[0], this.options.arrowPadding[1], this.options.arrowPadding[2]), this.arrowOpenPos = d.move(d.rotateZ(.5 * Math.PI), [this.options.itemSize[0] - .25 * this.options.arrowSize[0] - this.options.arrowPadding[0], this.options.arrowPadding[1], this.options.arrowPadding[2]]), this.options.itemTemplate = this.options.itemTemplate.bind(this), this.options.labelTemplate = this.options.labelTemplate.bind(this), this.itemOpts = {itemSize: this.options.itemSize, itemProperties: this.options.itemProperties, selectedProperties: this.options.itemSelectedProperties, template: this.options.itemTemplate, classes: this.options.itemClasses}, n.call(this), r.call(this), a.call(this), o.call(this), this.sizeState.set(this.options.itemSize), this.initialized = !0
        }, e.prototype.addItem = function (t, i, s) {
            var e = this.itemOpts;
            e.name = t, s && (e.itemContent = s);
            var o = new S(e, i, !1);
            o.setTemplate(this.itemTemplate), o.transform.setOpacity(0), o.transform.setOpacity(1, this.options.defaultCurve), this.items.push(o), o.pipe(this.scrollview), o.on("selection", p.bind(this)), this.options.autoClose && o.on("selectionEnd", this.closeMenu.bind(this))
        }, e.prototype.openMenu = function () {
            this._isOpen = !0, h.call(this, this._isOpen), u.call(this, this._isOpen)
        }, e.prototype.closeMenu = function () {
            this._isOpen = !1, h.call(this, this._isOpen), u.call(this, this._isOpen)
        }, e.prototype.toggleMenu = function () {
            this._isOpen ? this.closeMenu() : this.openMenu()
        }, e.prototype.get = function () {
            return this.value
        }, e.prototype._getLabelContent = function (t) {
            var i = this.items[t], s = i.options.itemContent, e = this.options.labelTemplate.apply(this, s);
            return e
        }, e.prototype.set = function (t) {
            var i = l.call(this, t), s = this.items[i];
            this.value = s.value, c.call(this, i);
            var e = this._getLabelContent(i);
            this.updateLabel(e), this.emit("change", {value: this.value})
        }, e.prototype.setHeight = function (t) {
            this.options.height = t, this.options.scrollviewOpts.clipSize = t, this.scrollview.options.clipSize = t, this.scrollviewContainer.setSize(this.options.itemSize[0], t)
        }, e.prototype.removeItem = function (t) {
            var i;
            "string" == typeof t ? i = l.call(this, t) : "number" == typeof t && (i = t), -1 !== i && this.items[i].transform.setOpacity(0, this.options.defaultCurve, function (t) {
                this.items.splice(t, 1)
            }.bind(this, i))
        }, e.prototype.updateLabel = function (t) {
            var i = function (t) {
                this.label.setContent(t), this.labelTransform.setOpacity(1, this.options.labelFadeCurve)
            };
            this.labelTransform.setOpacity(0, this.options.labelFadeCurve, i.bind(this, t))
        }, e.prototype.setSize = function (t) {
            this.options.itemSize = [t[0], 2 * t[1]]
        }, e.prototype.getSize = function () {
            return this.initialized ? this.sizeState.get() : void 0
        }, s.exports = e
    }), define("famous-ui/Slider", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous/EventHandler", "famous-utils/Utils", "famous/Engine", "famous/View"], function (t, i, s) {
        function e() {
            x.apply(this, arguments), this.eventInput.pipe(this.eventOutput), void 0 === this.options.defaultValue && (this.options.defaultValue = .5 * (this.options.range[0] + this.options.range[1])), this.pos = [], this.value = this.options.defaultValue, this._dirty = !0, this.currTouchId = null
        }

        function o(t) {
            t.preventDefault(), t.stopPropagation()
        }

        function n(t) {
            if (o(t), !this.currTouchId) {
                var i = t.changedTouches[0];
                this.currTouchId = i.identifier, this._handleStart(i)
            }
        }

        function r(t) {
            o(t), g.on("mousemove", this._mouseMove), g.on("mouseup", this._mouseUp), g.on("mouseout", this._mouseLeave), this._handleStart(t)
        }

        function a(t) {
            this._dirty && (this.pos = y.getSurfacePosition(this.back), this._dirty = !1), this.set(y.map((t.pageX - this.pos[0]) / this.options.size[0], 0, 1, this.options.range[0], this.options.range[1], !0))
        }

        function h(t) {
            o(t);
            for (var i = 0; i < t.changedTouches.length; i++) {
                var s = t.changedTouches[i];
                if (s.identifier == this.currTouchId) {
                    this._handleMove(s);
                    break
                }
            }
        }

        function u(t) {
            o(t), this._handleMove(t)
        }

        function p(t) {
            this.set(y.map((t.pageX - this.pos[0]) / this.options.size[0], 0, 1, this.options.range[0], this.options.range[1], !0))
        }

        function c(t) {
            o(t);
            for (var i = 0; i < t.changedTouches.length; i++)if (t.changedTouches[i].identifier == this.currTouchId) {
                this.currTouchId = void 0;
                break
            }
        }

        function l(t) {
            o(t), this._endMouse()
        }

        function f(t) {
            var i = t.relatedTarget || t.toElement;
            i && "HTML" != i.nodeName || this._endMouse()
        }

        function d() {
            return this.options.name + " <span class='slider-value' style='float:right'>" + this.value.toFixed(this.options.precision) + "</span>"
        }

        var m = t("famous/Surface"), v = t("famous/Matrix");
        t("famous/EventHandler");
        var y = t("famous-utils/Utils"), g = t("famous/Engine"), x = t("famous/View");
        e.prototype = Object.create(x.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {size: void 0, range: [0, 10], defaultValue: void 0, precision: 2, name: "Slider", backOpacity: 1}, e.prototype.init = function () {
            this.fill = new m({size: this.options.size, classes: ["slider-fill", "no-user-select"]}), this.back = new m({size: this.options.size, classes: ["slider-back", "no-user-select"]}), this.backMatrix = v.translate(0, 0, 1), this.label = new m({size: this.options.size, classes: ["slider-label", "no-user-select"], properties: {fontSize: .75 * this.options.size[1] + "px", lineHeight: this.options.size[1] + "px"}, content: d.call(this)}), this.labelMatrix = v.translate(0, this.options.size[1], 1.2), this.back.pipe(this), this.label.pipe(this), this.fill.pipe(this), this.on("touchstart", n.bind(this)), this.on("touchmove", h.bind(this)), this.on("touchend", c.bind(this)), this.on("touchcancel", c.bind(this)), this.on("mousedown", r.bind(this)), this.on("mousedown", r.bind(this)), this._mouseMove = u.bind(this), this._mouseUp = l.bind(this), this._mouseLeave = f.bind(this), this._handleStart = a.bind(this), this._handleMove = p.bind(this), this._add(this.fill), this._add(this.back), this._add(this.label)
        }, e.prototype._endMouse = function () {
            g.unbind("mousemove", this._mouseMove), g.unbind("mouseup", this._mouseUp), g.unbind("mouseout", this._mouseLeave)
        }, e.prototype.get = function () {
            return this.value
        }, e.prototype.getRange = function () {
            return this.options.range
        }, e.prototype.setSize = function (t) {
            this.options.size = t
        }, e.prototype.getSize = function () {
            return this.options.size ? [this.options.size[0], 2 * this.options.size[1]] : void 0
        }, e.prototype.set = function (t) {
            return this.value = Math.min(Math.max(this.options.range[0], t), this.options.range[1]), this.setLabelContent(), this.emit("change", {value: this.get(), range: this.range}), this
        }, e.prototype.setLabelContent = function () {
            this.label.setContent(d.call(this))
        }, e.prototype.render = function () {
            var t = (this.get() - this.options.range[0]) / (this.options.range[1] - this.options.range[0]);
            return[
                {transform: this.backMatrix, opacity: this.options.backOpacity, target: this.back.render()},
                {transform: v.move(v.scale(t, 1, 1), [0, 0, 2]), target: this.fill.render()},
                {transform: this.labelMatrix, target: this.label.render()}
            ]
        }, s.exports = e
    }), define("famous-color/Color", ["require", "exports", "module", "famous-utils/Utils"], function (t, i, s) {
        function e(t, i, s, o) {
            t instanceof e ? (this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this.hex = t.getHex()) : (this.r = "undefined" == typeof t ? 255 : t, this.g = "undefined" == typeof i ? 255 : i, this.b = "undefined" == typeof s ? 255 : s, this.a = "undefined" == typeof o ? 1 : o, this.hex = this.getHex())
        }

        function o(t, i, s) {
            return 0 > s && (s += 1), s > 1 && (s -= 1), 1 / 6 > s ? t + 6 * (i - t) * s : .5 > s ? i : 2 / 3 > s ? t + 6 * (i - t) * (2 / 3 - s) : t
        }

        var n = t("famous-utils/Utils");
        e.prototype.getHue = function () {
            var t = this.r / 255, i = this.g / 255, s = this.b / 255, e = Math.max(t, i, s), o = Math.min(t, i, s), n = 0, r = e - o;
            switch (e) {
                case t:
                    n = (i - s) / r + (s > i ? 6 : 0);
                    break;
                case i:
                    n = (s - t) / r + 2;
                    break;
                case s:
                    n = (t - i) / r + 4
            }
            return n *= 60, isNaN(n) && (n = 0), n
        }, e.prototype.getSaturation = function () {
            var t, i = this.r / 255, s = this.g / 255, e = this.b / 255, o = Math.max(i, s, e), n = Math.min(i, s, e), r = (o + n) / 2;
            if (o == n)h = t = 0; else {
                var a = o - n;
                switch (t = r > .5 ? a / (2 - o - n) : a / (o + n), o) {
                    case i:
                        h = (s - e) / a + (e > s ? 6 : 0);
                        break;
                    case s:
                        h = (e - i) / a + 2;
                        break;
                    case e:
                        h = (i - s) / a + 4
                }
                h *= 60
            }
            return 100 * t
        }, e.prototype.getBrightness = function () {
            var t = this.r / 255, i = this.g / 255, s = this.b / 255;
            return 100 * Math.max(t, i, s)
        }, e.prototype.getLightness = function () {
            var t = this.r / 255, i = this.g / 255, s = this.b / 255;
            return 100 * ((Math.max(t, i, s) + Math.min(t, i, s)) / 2)
        }, e.prototype.getHex = function () {
            function t(t) {
                var i = t.toString(16);
                return 1 === i.length ? "0" + i : i
            }

            return"#" + t(this.r) + t(this.g) + t(this.b)
        }, e.prototype.getHSL = function () {
            var t, i, s = this.r / 255, e = this.g / 255, o = this.b / 255, n = Math.max(s, e, o), r = Math.min(s, e, o), a = (n + r) / 2;
            if (n == r)t = i = 0; else {
                var h = n - r;
                switch (i = a > .5 ? h / (2 - n - r) : h / (n + r), n) {
                    case s:
                        t = (e - o) / h + (o > e ? 6 : 0);
                        break;
                    case e:
                        t = (o - s) / h + 2;
                        break;
                    case o:
                        t = (s - e) / h + 4
                }
                t *= 60
            }
            return[t, 100 * i, 100 * a]
        }, e.prototype.setFromHSL = function (t, i, s) {
            t /= 360, i /= 100, s /= 100;
            var e, n, r;
            if (0 === i)e = n = r = s; else {
                var a = .5 > s ? s * (1 + i) : s + i - s * i, h = 2 * s - a;
                e = o(h, a, t + 1 / 3), n = o(h, a, t), r = o(h, a, t - 1 / 3)
            }
            return this.r = Math.round(255 * e), this.g = Math.round(255 * n), this.b = Math.round(255 * r), this.hex = this.getHex(), this
        }, e.prototype.setFromHex = function (t) {
            return t = "#" === t.charAt(0) ? t.substring(1, t.length) : t, 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), this.hex = "#" + t, this.r = parseInt(t.substring(0, 2), 16), this.g = parseInt(t.substring(2, 4), 16), this.b = parseInt(t.substring(4, 6), 16), this
        }, e.prototype.setFromRGBA = function (t, i, s, e) {
            return this.r = t, this.g = i, this.b = s, e && (this.a = e), this.hex = this.getHex(), this
        }, e.prototype.setHue = function (t) {
            var i = this.getHSL();
            return this.setFromHSL(t, i[1], i[2])
        }, e.prototype.setSaturation = function (t) {
            var i = this.getHSL();
            return this.setFromHSL(i[0], t, i[2])
        }, e.prototype.setLightness = function (t) {
            var i = this.getHSL();
            return this.setFromHSL(i[0], i[1], t)
        }, e.prototype.getCSSBackgroundColor = function () {
            return n.backgroundColor(this.r, this.b, this.g, this.a)
        }, e.prototype.getCSSColor = function () {
            return n.color(this.r, this.g, this.b, this.a)
        }, e.prototype.clone = function () {
            return new e(this.r, this.g, this.b, this.a)
        }, e.prototype.toNormalizeColorArray = function () {
            return[this.r / 255, this.g / 255, this.b / 255, this.a]
        }, e.prototype.lerp = function (t, i) {
            var s = this.getHSL(), o = t.getHSL(), n = s[0] + (o[0] - s[0]) * i, r = s[1] + (o[1] - s[1]) * i, a = s[2] + (o[2] - s[2]) * i, h = new e;
            return h.setFromHSL(n, r, a), h
        }, s.exports = e
    }), define("famous-ui/ColorPicker/ColorButton", ["require", "exports", "module", "famous/EventHandler", "famous/CanvasSurface"], function (t, i, s) {
        function e(t, i) {
            this.size = t, this.canvasSize = [2 * this.size[0], 2 * this.size[1]], o.call(this, {size: this.size, canvasSize: this.canvasSize}), this.color = i, this.colorSurface(this.color.getHex())
        }

        t("famous/EventHandler");
        var o = t("famous/CanvasSurface");
        e.prototype = Object.create(o.prototype), e.prototype.colorSurface = function (t) {
            var i = this.getContext("2d");
            i.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), i.fillStyle = t, i.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }, s.exports = e
    }), define("famous-ui/ColorPicker/CanvasPicker", ["require", "exports", "module", "famous/Surface", "famous/CanvasSurface", "famous/Matrix", "famous/EventHandler", "famous/Modifier", "famous-utils/Utils", "famous-color/Color", "famous/Engine", "famous-animation/Easing", "./ColorButton", "famous/View"], function (t, i, s) {
        function e(t, i, s) {
            b.call(this, s), this.eventInput.pipe(this.eventOutput), this.size = t, this.color = i.clone(), this.name = name, this.pos = [], this._dirty = !0, this.canvasSize = [2 * this.size[0], 2 * this.size[1]], this._selectedCoords = [y.map(this.options.pickerPosX, 0, 1, 0, this.size[0] - 1, !0), y.map(this.options.pickerPosY, 0, 1, 0, this.size[1] - 1, !0)], this.gradient = new d({size: [this.size[0], this.size[0]], canvasSize: [2 * this.size[0], 2 * this.size[0]]});
            var e = n.call(this, this.size[0] * this.options.pickerPosX, this.size[1] * this.options.pickerPosY);
            this.pickerTransform = new v({transform: m.translate(e[0], e[1], 0)}), this.picker = this.options.colorPicker ? new S(this.options.pickerSize, this.color) : new f({size: this.options.pickerSize, classes: ["ui-color-picker"]}), this.picker.setProperties(this.options.pickerProperties), this._mousemove = h.bind(this), this._mouseup = u.bind(this), this.gradient.on("mousedown", r.bind(this)), this.picker.on("mousedown", r.bind(this)), this.gradient.on("touchstart", a.bind(this)), this.picker.on("touchstart", a.bind(this)), this.gradient.on("touchmove", p.bind(this)), this.picker.on("touchmove", p.bind(this)), this.gradient.on("click", c), this.picker.on("click", c), this.on("updatePosition", this.updateColor.bind(this)), this.on("updatePosition", o.bind(this)), this.node.add(this.pickerTransform).link(this.picker), this.node.add(this.gradient)
        }

        function o(t) {
            var i = n.call(this, this._selectedCoords[0], this._selectedCoords[1]);
            this.options.railsY && (i[1] = 0), this.pickerTransform.halt(), t.shouldAnimate ? this.pickerTransform.setTransform(m.translate(i[0], i[1], this.options.pickerZ), this.options.transition) : this.pickerTransform.setTransform(m.translate(i[0], i[1], this.options.pickerZ))
        }

        function n(t, i) {
            var s = .5 * this.options.pickerSize[0];
            return[y.map(t, 0, this.size[0], -s, this.size[0] - s, !0), this.options.railsY ? 0 : y.map(i, 0, this.size[1], -s, this.size[1] - s, !0)]
        }

        function r(t) {
            t.preventDefault(), t.stopPropagation(), this._dirty = !0, l.call(this, t, !0), g.on("mousemove", this._mousemove), g.on("mouseup", this._mouseup)
        }

        function a(t) {
            this._dirty = !0, t.preventDefault(), t.stopPropagation(), l.call(this, t.touches[0])
        }

        function h(t) {
            t.preventDefault(), t.stopPropagation(), l.call(this, t)
        }

        function u(t) {
            t.preventDefault(), t.stopPropagation(), g.unbind("mousemove", this._mousemove), g.unbind("mouseup", this._mouseup)
        }

        function p(t) {
            t.preventDefault(), t.stopPropagation(), l.call(this, t.touches[0])
        }

        function c(t) {
            t.preventDefault(), t.stopPropagation()
        }

        function l(t, i) {
            this._dirty && (this.pos = y.getSurfacePosition(this.gradient), this._dirty = !1), this._selectedCoords = [y.clamp(t.pageX - this.pos[0], 0, this.size[0] - 1), y.clamp(t.pageY - this.pos[1], 0, this.size[1] - 1)], this.emit("updatePosition", {shouldAnimate: i})
        }

        var f = t("famous/Surface"), d = t("famous/CanvasSurface"), m = t("famous/Matrix");
        t("famous/EventHandler");
        var v = t("famous/Modifier"), y = t("famous-utils/Utils");
        t("famous-color/Color");
        var g = t("famous/Engine"), x = t("famous-animation/Easing"), S = t("./ColorButton"), b = t("famous/View");
        e.prototype = Object.create(b.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {pickerSize: [4, 25], transition: {curve: x.inSineNorm, duration: 50}, pickerPosX: 0, pickerPosY: 0, pickerZ: 2, railsY: !1, pickerProperties: {}, colorPicker: !1}, e.prototype.drawGradient = function () {
        }, e.prototype.getColor = function () {
            return this.color
        }, e.prototype.getSize = function () {
            return this.size
        }, e.prototype.updateColor = function () {
            var t = this.gradient.getContext("2d"), i = t.getImageData(2 * this._selectedCoords[0], 2 * this._selectedCoords[1], 1, 1).data;
            this.color.setFromRGBA(i[0], i[1], i[2]), this.emit("change", {value: this.color})
        }, s.exports = e
    }), define("famous-ui/ColorPicker/GradientPicker", ["require", "exports", "module", "famous-color/Color", "./CanvasPicker"], function (t, i, s) {
        function e(t, i) {
            var s = i.getSaturation() / 100, e = i.getBrightness() / 100;
            i.setSaturation(100), n.call(this, t, i, {pickerSize: [26, 26], pickerProperties: {borderRadius: "13px", border: "1px solid white"}, pickerPosX: s, pickerPosY: 1 - e}), this.drawGradient(this.color.getCSSColor())
        }

        function o(t, i, s, e, o) {
            var n = t.createLinearGradient(this.canvasSize[0] * e[0], this.canvasSize[1] * e[1], this.canvasSize[0] * o[0], this.canvasSize[1] * o[1]);
            n.addColorStop(0, i), n.addColorStop(1, s), t.fillStyle = n, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }

        t("famous-color/Color");
        var n = t("./CanvasPicker");
        e.prototype = Object.create(n.prototype), e.prototype.drawGradient = function (t) {
            var i = this.gradient.getContext("2d");
            i.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), o.call(this, i, "rgba(255, 255, 255, 1)", t, [0, .5], [1, .5]), o.call(this, i, "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)", [.5, 1], [.5, 0]), this.updateColor()
        }, s.exports = e
    }), define("famous-ui/ColorPicker/HuePicker", ["require", "exports", "module", "famous-color/Color", "./CanvasPicker"], function (t, i, s) {
        function e(t, i, s) {
            var e = new n, o = i.getHue();
            e.setFromHSL(o, 100, 50);
            var a = s || [35, 35];
            r.call(this, t, e, {railsY: !0, pickerProperties: {border: "2px solid white", borderRadius: t[0] / 2 + "px", boxShadow: "0px 1px 0px #888", marginTop: "2px"}, pickerPosX: 1 - o / 360, pickerSize: a, colorPicker: !0, normalizedColors: !0}), this.drawGradient(this.color.getCSSColor()), this.on("change", this.drawPickerColor.bind(this)), this.pickerColor
        }

        function o(t, i, s) {
            var e = t.createLinearGradient(this.canvasSize[0] * i[0], this.canvasSize[1] * i[1], this.canvasSize[0] * s[0], this.canvasSize[1] * s[1]);
            e.addColorStop(0, "rgb(255,   0,   0)"), e.addColorStop(.16, "rgb(255,   0, 255)"), e.addColorStop(.33, "rgb(0,     0, 255)"), e.addColorStop(.5, "rgb(0,   255, 255)"), e.addColorStop(.67, "rgb(0,   255,   0)"), e.addColorStop(.83, "rgb(255, 255,   0)"), e.addColorStop(1, "rgb(255,   0,   0)"), t.fillStyle = e, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }

        var n = t("famous-color/Color"), r = t("./CanvasPicker");
        e.prototype = Object.create(r.prototype), e.prototype.drawPickerColor = function (t) {
            this.pickerColor !== t.value.hex && (this.picker.colorSurface(t.value.hex), this.pickerColor = t.value.hex)
        }, e.prototype.drawGradient = function () {
            var t = this.gradient.getContext("2d");
            t.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), o.call(this, t, [0, .5], [1, .5])
        }, s.exports = e
    }), define("famous-ui/ColorPicker/AlphaPicker", ["require", "exports", "module", "famous/Surface", "famous-color/Color", "./CanvasPicker", "famous-ui/Easing/CanvasDrawer"], function (t, i, s) {
        function e(t, i, s) {
            var e = s || [35, 35];
            r.call(this, t, i, {railsY: !0, pickerProperties: {border: "3px solid white", borderRadius: t[0] / 2 + "px", boxShadow: "0px 1px 0px #888", marginTop: "2px"}, pickerPosX: i.a, pickerSize: e, colorPicker: !0, normalizedColors: !0}), this.alpha = this.color.a, this.backgroundCanvas = n.call(this), this.drawGradient(), this.on("change", this.drawPickerColor.bind(this)), this.pickerColor
        }

        function o(t, i, s, e) {
            colorAlpha = e.substring(0, e.length - 2);
            var o = t.createLinearGradient(this.canvasSize[0] * i[0], this.canvasSize[1] * i[1], this.canvasSize[0] * s[0], this.canvasSize[1] * s[1]);
            o.addColorStop(0, colorAlpha + "0)"), o.addColorStop(1, colorAlpha + "1)"), t.fillStyle = o, t.fillRect(0, 0, this.canvasSize[0], this.canvasSize[1])
        }

        function n() {
            var t = document.createElement("canvas");
            t.width = this.canvasSize[0], t.height = this.canvasSize[1];
            var i = t.getContext("2d");
            i.fillStyle = "#ffffff", a.rect(i, 0, 0, this.canvasSize[0], this.canvasSize[1]), i.fillStyle = "#cccccc";
            for (var s = 16, e = 2, o = height = this.canvasSize[0] / s, n = 0; s > n; n++)for (var r = 0; e > r; r++)0 == n % 2 && 0 == r % 2 ? a.rect(i, o * n, r * height, o, height) : 1 == n % 2 && 1 == r % 2 && a.rect(i, o * n, r * height, o, height);
            return t
        }

        t("famous/Surface"), t("famous-color/Color");
        var r = t("./CanvasPicker"), a = t("famous-ui/Easing/CanvasDrawer");
        e.prototype = Object.create(r.prototype), e.prototype.drawPickerColor = function (t) {
            this.picker.colorSurface(t.value.getCSSColor())
        }, e.prototype.setColor = function (t) {
            this.color = t, this.drawGradient(), this.drawPickerColor({value: this.color})
        }, e.prototype.drawGradient = function () {
            var t = this.gradient.getContext("2d");
            t.clearRect(0, 0, this.canvasSize[0], this.canvasSize[1]), t.drawImage(this.backgroundCanvas, 0, 0);
            var i = this.color.clone();
            i.a = 0, o.call(this, t, [0, 0], [1, 1], i.getCSSColor())
        }, e.prototype.updateColor = function () {
            var t = parseFloat((this._selectedCoords[0] / this.size[0]).toFixed(2));
            this.color.a = t, this.emit("change", {value: this.color})
        }, s.exports = e
    }), define("famous-ui/ColorPicker/ColorPicker", ["require", "exports", "module", "famous/Surface", "famous/CanvasSurface", "famous/Matrix", "famous/EventHandler", "famous/Modifier", "famous/Transitionable", "famous-utils/Utils", "famous-color/Color", "famous/View", "famous/Engine", "famous-animation/Easing", "famous-utils/Time", "./GradientPicker", "./HuePicker", "./AlphaPicker", "./ColorButton"], function (t, i, s) {
        function e() {
            f.apply(this, arguments), this.color = this.options.defaultColor, this.sizeState = new c([0, 0]), this.visible = !1, this.boundListener = !1, this._closeListen = this.hide.bind(this)
        }

        function o(t) {
            var i = t.value.getCSSColor();
            this.gradientPicker.drawGradient(i), a.call(this)
        }

        function n() {
            a.call(this)
        }

        function r() {
            a.call(this)
        }

        function a() {
            var t = this.gradientPicker.getColor();
            this.options.useAlpha && (t.a = this.alphaPicker.getColor().a, this.alphaPicker.setColor(t)), this.color = t, h.call(this, {value: this.color}), this.eventOutput.emit("change", {value: this.color})
        }

        function h(t) {
            var i = t.value.getCSSColor();
            this.openingSurface.colorSurface(i)
        }

        t("famous/Surface"), t("famous/CanvasSurface");
        var u = t("famous/Matrix");
        t("famous/EventHandler");
        var p = t("famous/Modifier"), c = t("famous/Transitionable");
        t("famous-utils/Utils");
        var l = t("famous-color/Color"), f = t("famous/View"), d = t("famous/Engine"), m = t("famous-animation/Easing");
        t("famous-utils/Time");
        var v = t("./GradientPicker"), y = t("./HuePicker"), g = t("./AlphaPicker"), x = t("./ColorButton");
        e.prototype = Object.create(f.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {transition: {curve: m.inOutBackNorm, duration: 400}, hueSize: 30, pickerSize: [25, 25], size: void 0, defaultColor: new l(80, 255, 255), name: "", useAlpha: !0, padding: 5}, e.prototype.init = function () {
            this.defaultPositions = {gradientPicker: u.translate(0, this.options.size[1], 1), huePicker: u.translate(0, this.options.size[1] + this.options.size[0], 1), alphaPicker: u.translate(0, 2 * this.options.size[1] + this.options.size[0] + 3 * this.options.padding, 1)}, this.gradientPicker = new v([this.options.size[0], this.options.size[0]], this.color), this.gradientTransform = new p({transform: this.defaultPositions.gradientPicker}), this.huePicker = new y([this.options.size[0], this.options.hueSize], this.color, this.options.pickerSize), this.hueTransform = new p({transform: this.defaultPositions.huePicker}), this.openingSurface = new x(this.options.size, this.color, this.options.name), this.openingTransform = new p, this.node.add(this.hueTransform).link(this.huePicker), this.node.add(this.openingTransform).link(this.openingSurface), this.node.add(this.gradientTransform).link(this.gradientPicker), this.openingSurface.on("click", this.togglePicker.bind(this)), this.huePicker.on("change", o.bind(this)), this.gradientPicker.on("change", n.bind(this)), this.on("change", h.bind(this)), this.options.useAlpha && (this.alphaPicker = new g([this.options.size[0], this.options.hueSize], this.color, this.options.pickerSize), this.alphaTransform = new p({transform: this.defaultPositions.alphaPicker}), this.node.add(this.alphaTransform).link(this.alphaPicker), this.alphaPicker.on("change", r.bind(this))), this.hide()
        }, e.prototype.set = function () {
        }, e.prototype.get = function () {
            return this.color
        }, e.prototype.togglePicker = function () {
            0 == this.visible ? this.show() : this.hide()
        }, e.prototype.hide = function () {
            this.visible = !1;
            var t = u.multiply(u.scale(1, 1e-7), this.defaultPositions.gradientPicker);
            this.hueTransform.halt(), this.hueTransform.setOpacity(0, this.options.transition), this.hueTransform.setTransform(t, this.options.transition), this.gradientTransform.halt(), this.gradientTransform.setOpacity(0, this.options.transition), this.gradientTransform.setTransform(t, this.options.transition), this.options.useAlpha && (this.alphaTransform.halt(), this.alphaTransform.setOpacity(0, this.options.transition), this.alphaTransform.setTransform(t, this.options.transition)), this.sizeState.set([this.options.size[0], this.options.size[1]], this.options.transition), 1 == this.boundListener && this.unbindClickClose()
        }, e.prototype.show = function () {
            this.emit("showing"), this.visible = !0, this.hueTransform.halt(), this.hueTransform.setOpacity(1, this.options.transition), this.hueTransform.setTransform(this.defaultPositions.huePicker, this.options.transition), this.gradientTransform.halt(), this.gradientTransform.setOpacity(1, this.options.transition), this.gradientTransform.setTransform(this.defaultPositions.gradientPicker, this.options.transition), this.options.useAlpha ? (this.alphaTransform.halt(), this.alphaTransform.setOpacity(1, this.options.transition), this.alphaTransform.setTransform(this.defaultPositions.alphaPicker, this.options.transition), this.sizeState.set([this.options.size[0], this.gradientPicker.getSize()[1] + this.huePicker.getSize()[1] + this.openingSurface.getSize()[1] + this.alphaPicker.getSize()[1]], this.options.transition)) : this.sizeState.set([this.options.size[0], this.gradientPicker.getSize()[1] + this.huePicker.getSize()[1] + this.openingSurface.getSize()[1]], this.options.transition), d.defer(this.bindClickClose.bind(this))
        }, e.prototype.setSize = function (t) {
            this.options.size = t
        }, e.prototype.getSize = function () {
            return this.options.size ? this.sizeState.get() : void 0
        }, e.prototype.bindClickClose = function () {
            d.on("click", this._closeListen), this.boundListener = !0
        }, e.prototype.unbindClickClose = function () {
            d.unbind("click", this._closeListen), this.boundListener = !1
        }, e.prototype.render = function () {
            return{size: this.sizeState.get(), target: this.node.render()}
        }, s.exports = e
    }), define("famous-ui/Text/Label", ["require", "exports", "module", "famous/Surface"], function (t, i, s) {
        function e(t) {
            this.options = {size: void 0, content: "", properties: {}, classes: ["ui-label"]}, this._dirty = !0;
            for (var i in t)this.options[i] = t[i];
            this.surface
        }

        var o = t("famous/Surface");
        e.prototype.init = function () {
            this.surface = new o({size: this.options.size, content: "<div>" + this.options.content + "</div>", classes: this.options.classes, properties: this.options.properties})
        }, e.prototype.setSize = function (t) {
            this.options.size = [t[0], 0]
        }, e.prototype.getSize = function () {
            return this.options.size ? this.options.size : void 0
        }, e.prototype.pipe = function (t) {
            return this.surface.pipe(t)
        }, e.prototype.render = function () {
            return this._dirty && this.surface._currTarget && (this.options.size = [this.options.size[0], this.surface._currTarget.firstChild.clientHeight], this.surface.setSize(this.options.size), this._dirty = !1), this.surface.render()
        }, s.exports = e
    }), define("famous-ui/AutoUI", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Modifier", "famous-animation/Easing", "famous-ui/PanelScrollview", "famous-ui/Toggles/BoolToggle", "famous-ui/Toggles/MultiBoolToggle", "famous-ui/Easing/MultiEasingToggle", "famous-ui/Dropdown/Dropdown", "famous-ui/Slider", "famous-ui/ColorPicker/ColorPicker", "famous-ui/Text/Label"], function (t, i, s) {
        function e() {
            n.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.panel = new u(this.options.panelOptions), this.pipe(this.panel), this.autoUIElements = [], this.autoUIElementsMap = {}, this.panelModifier = new a({transform: this.options.defaultMatrix}), this._add(this.panelModifier).link(this.panel), this.options.defaultSelected && this.setCurrentObject(this.options.defaultSelected)
        }

        function o() {
            if (this.currentObject.autoUI)for (var t = 0; t < this.currentObject.autoUI.length; t++) {
                var i = this.currentObject.autoUI[t];
                i.type && this._optionToUI(i, this.panel)
            }
            this._scaledDown && (this.panelModifier.setTransform(this.options.defaultMatrix, this.options.scaleTransition), this._scaledDown = !1)
        }

        var n = t("famous/View"), r = t("famous/Matrix"), a = t("famous/Modifier"), h = t("famous-animation/Easing"), u = t("famous-ui/PanelScrollview"), p = t("famous-ui/Toggles/BoolToggle"), c = t("famous-ui/Toggles/MultiBoolToggle"), l = t("famous-ui/Easing/MultiEasingToggle"), f = t("famous-ui/Dropdown/Dropdown"), d = t("famous-ui/Slider"), m = t("famous-ui/ColorPicker/ColorPicker"), v = t("famous-ui/Text/Label");
        e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {scaleTransition: {curve: h.inOutBackNorm, duration: 500}, opacityTransition: {curve: h.inOutBackNorm, duration: 500}, saveValues: !1, panelOptions: {}, defaultSelected: void 0, defaultMatrix: r.translate(0, 0), animateIn: !1}, e.UI_ELEMENTS = {slider: d, dropdown: f, colorPicker: m, toggle: p, multiBoolToggle: c, easing: l, label: v}, e.prototype.setCurrentObject = function (t) {
            t !== this.currentObj && (this.currentObject = t, this.clear(o.bind(this)))
        }, e.prototype.setScrollviewOptions = function (t) {
            return this.panel.setOptions(t)
        }, e.prototype.toJSON = function () {
            for (var t = 0; t < this.autoUIElements.length; t++);
        }, e.prototype.reset = function () {
            this.panel.reset(), this.autoUIElements = [], this.autoUIElementsMap = {}
        }, e.prototype.getSize = function () {
            return[this.panel.panelOpts.width, void 0]
        }, e.prototype.clear = function (t) {
            function i(t) {
                this.panelModifier.halt(), this.panelModifier.setOpacity(1, this.options.opacityTransition), this.reset(), t && t()
            }

            this._scaledDown = !0, this.options.animateIn ? (this.panelModifier.setOpacity(0, this.options.opacityTransition), this.panelModifier.setTransform(r.move(r.scale(1, 1e-5), this.options.defaultMatrix), this.options.scaleTransition, i.bind(this, t))) : (this.reset(), t && t())
        }, e.prototype._optionToUI = function (t) {
            var i = e.UI_ELEMENTS[t.type], s = new i(t.uiOptions);
            if (this.panel.add(s), this.autoUIElements.push(s), t.uiOptions.name && (this.autoUIElementsMap[t.uiOptions.name] = s), t.key) {
                var o = t.object ? t.object : this.currentObject.options;
                s.on("change", function (t, i, s, e) {
                    t[i] = e.value, s && s.call(this, e.value)
                }.bind(this.currentObject, o, t.key, t.callback))
            } else t.callback && s.on("change", function (t, i) {
                t.call(this, i.value)
            }.bind(this.currentObject, t.callback))
        }, e.prototype.getUIElementsMap = function () {
            return this.autoUIElementsMap
        }, s.exports = e
    }), define("core/SignupError", ["require", "exports", "module", "famous/Engine", "famous/View", "famous/Matrix", "famous/ImageSurface", "famous/Surface", "./ExpandingSurface", "famous/Modifier", "famous/Utility", "./Fader", "famous-animation/Easing", "famous-utils/Utils", "famous-utils/KeyCodes", "app/ID", "famous-utils/Time", "./Submit", "famous/RenderNode", "app/SceneController", "./SignupData", "./SignupContent", "famous/Transitionable", "famous-physics/utils/PhysicsTransition"], function (t, i, s) {
        function e() {
            a.apply(this, arguments), this.error, this.errorMod, this.signupData, this._isVisible = !0, this.initError(), this.events()
        }

        function o(t) {
            this.signupData = t, this.dataEvents()
        }

        function n(t) {
            this.setErrorFailed(), this.setErrorContent(t), this.showError()
        }

        function r() {
            this.setErrorSuccess(), this.setErrorContent("Success!"), this.showError()
        }

        t("famous/Engine");
        var a = t("famous/View"), h = t("famous/Matrix");
        t("famous/ImageSurface");
        var u = t("famous/Surface");
        t("./ExpandingSurface");
        var p = t("famous/Modifier");
        t("famous/Utility"), t("./Fader"), t("famous-animation/Easing"), t("famous-utils/Utils"), t("famous-utils/KeyCodes"), t("app/ID");
        var c = t("famous-utils/Time");
        t("./Submit"), t("famous/RenderNode"), t("app/SceneController"), t("./SignupData"), t("./SignupContent");
        var l = t("famous/Transitionable"), f = t("famous-physics/utils/PhysicsTransition");
        l.registerMethod("physics", f), e.prototype = Object.create(a.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {signup: void 0, animateScene: !0, closeSize: [50, 50], hideOpen: !1, hideOpenOnMobile: !0, openButtonZPos: 2, errorFailedProperties: {color: "rgb(253, 98, 85)"}, errorSuccessProperties: {color: "rgb(90, 226, 132)"}}, e.prototype.events = function () {
            this.options.signup.on("dataAdded", o.bind(this))
        }, e.prototype.dataEvents = function () {
            this.signupData.on("success", r.bind(this)), this.signupData.on("error", n.bind(this))
        }, e.prototype.initError = function () {
            this.error = new u({size: window.innerWidth > 1400 ? [.25 * window.innerWidth, 100] : [.75 * window.innerWidth, 100], classes: ["famous-signup-error"]}), this.errorMod = new p({transform: h.move(h.scale(1e-5, 1e-5), [0, 0, 3]), origin: [.5, 0], opacity: 0}), this.node.add(this.errorMod).link(this.error)
        }, e.prototype.showError = function () {
            var t = {curve: "outExpoNorm", duration: 500};
            this.errorMod.setOpacity(1, t), this.errorMod.setOrigin([.5, .25], t), this.errorMod.setTransform(h.translate(0, 0, 4), t), c.setTimeout(this.hideError.bind(this), 3e3)
        }, e.prototype.hideError = function () {
            var t = {curve: "inOutExpoNorm", duration: 500};
            this.errorMod.halt(), this.errorMod.setOrigin([.5, 0], t), this.errorMod.setOpacity(0, t), this.errorMod.setTransform(h.move(h.scale(1e-5, 1e-5), [0, 0, 4]), t)
        }, e.prototype.setErrorContent = function (t) {
            this.error.setContent(t)
        }, e.prototype.setErrorFailed = function () {
            this.error.setProperties(this.options.errorFailedProperties)
        }, e.prototype.setErrorSuccess = function () {
            this.error.setProperties(this.options.errorSuccessProperties)
        }, e.prototype.setVisible = function (t) {
            this._isVisible = t
        }, e.prototype.getSize = function () {
            return this.error.getSize()
        }, s.exports = e
    }), define("core/UI", ["require", "exports", "module", "famous/View", "famous/Matrix", "famous/Surface", "famous/Utility", "famous/Modifier", "famous/Engine", "famous/ContainerSurface", "famous-animation/Easing", "famous-ui/AutoUI", "famous-ui/Buttons/RotateButton", "./Signup", "./SignupError", "famous-utils/Time", "famous-utils/Utils"], function (t, i, s) {
        function e() {
            n.apply(this, arguments), this.buttonOpacity = .25, this.uiShowMatrix, this.uiHideMatrix, this.shownPositions, this.hiddenPositions, this.button, this.buttonModifier, this.ui, this.uiModifier, this.backingPanel, this.backingModifier, this.signup, this.error, this.positions(), this.initSignup(), this.backingShowMatrix, this.uiHideMatrix, this.uiShowMatrix, this.shownPositions, this.hiddenPositions, this._uiAdded = !1, this._uiVisible = !1, this.initButton(), this.initUI(), this.initBacking(), this.events(), this.show()
        }

        function o(t) {
            t.stopPropagation()
        }

        var n = t("famous/View"), r = t("famous/Matrix"), a = t("famous/Surface");
        t("famous/Utility");
        var h = t("famous/Modifier");
        t("famous/Engine");
        var u = t("famous/ContainerSurface"), p = t("famous-animation/Easing"), c = t("famous-ui/AutoUI"), l = t("famous-ui/Buttons/RotateButton"), f = t("./Signup"), d = t("./SignupError");
        t("famous-utils/Time");
        var m = t("famous-utils/Utils");
        e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {buttonSize: [40, 40], offset: [20, 20], uiFadeTransition: {curve: p.inOutBackNorm, duration: 400}, uiScaleTransition: {curve: p.inOutCubicNorm, duration: 400}, hoverTransition: {curve: p.inOutSineNorm, duration: 800}, backingFade: .7}, e.prototype.positions = function () {
            var t = this.signup ? this.signup.getSize() : [0, 0], i = 3 * this.options.offset[1] + this.options.buttonSize[1] + t[1];
            this.uiShowMatrix = r.translate(this.options.offset[0], 2 * this.options.offset[1] + this.options.buttonSize[1], 2), this.uiHideMatrix = r.multiply(r.scale(1, 1e-4, 1), this.uiShowMatrix), this.backingShowMatrix = r.translate(0, 0, 1), this.backingHide = r.multiply(r.scale(1, 1e-4, 1), this.backingShowMatrix), this.signupShowMatrix = r.translate(this.options.offset[0], 3 * this.options.offset[1] + this.options.buttonSize[1] + window.innerHeight - i, 2), this.signupHideMatrix = r.multiply(r.scale(1, 1e-4, 1), this.signupShowMatrix), this.shownPositions = {button: r.translate(this.options.offset[0], this.options.offset[1], 2)}, this.hiddenPositions = {button: r.translate(this.options.offset[0], -(this.options.buttonSize[0] + this.options.offset[1]), 2)}, this.ui && this.uiContainer.setSize([t[0], window.innerHeight - i]), this._uiVisible && this.show()
        }, e.prototype.initSignup = function () {
            this.signup = new f, this.signupMod = new h({transform: this.signupHideMatrix, opacity: 0}), this.error = new d({signup: this.signup}), this.node.add(this.error), this.node.add(this.signupMod).link(this.signup), this.signup.on("resize", this.resize.bind(this))
        }, e.prototype.initButton = function () {
            this.button = new l({surfaceOptions: {properties: {backgroundColor: "rgba( 0, 0, 0, 0.0)"}, content: '<img draggable="false" class="no-user-select" src="js/core/plus.svg" height="' + this.options.buttonSize[1] + '"></img>', size: this.options.buttonSize}}), this.buttonModifier = new h({size: this.options.buttonSize, transform: this.hiddenPositions.button, opacity: this.buttonOpacity}), this.node.add(this.buttonModifier).link(this.button)
        }, e.prototype.initUI = function () {
            this.ui = new c, this.uiContainer = new u({size: [256, void 0], properties: {overflow: "hidden"}}), this.uiContainer.pipe(this.ui), this.uiContainer.on("mousewheel", o), this.uiContainer.on("wheel", o), this.uiContainer.on("touchmove", o), this.uiContainer.on("touchstart", o), this.uiContainer.on("touchend", o), this.uiModifier = new h({transform: this.uiHideMatrix, opacity: 0}), this.node.add(this.uiModifier).link(this.uiContainer), this.uiContainer.link(new h({transform: r.translate(0, 0, 1)})).link(this.ui)
        }, e.prototype.initBacking = function () {
            var t = this.ui.getSize();
            this.backingPanel = new a({properties: {backgroundColor: "#000000"}, size: [t[0] + 2 * this.options.offset[0], void 0]}), this.backingModifier = new h({transform: this.backingHide, opacity: 0}), this.node.add(this.backingModifier).link(this.backingPanel)
        }, e.prototype.getUI = function () {
            return this.ui
        }, e.prototype.events = function () {
            this.button.on("open", this.showUI.bind(this)), this.button.on("close", this.hideUI.bind(this))
        }, e.prototype.mousemove = function (t, i) {
            var s = m.distance(t.pageX, t.pageY, this.buttonX, this.buttonY);
            i > s || this.uiModifier.getOpacity() > .01 ? 1 != this.buttonOpacity && (this.buttonOpacity = 1, this.buttonModifier.halt(), this.buttonModifier.setOpacity(this.buttonOpacity, this.options.hoverTransition)) : .5 != this.buttonOpacity && (this.buttonOpacity = .5, this.buttonModifier.halt(), this.buttonModifier.setOpacity(this.buttonOpacity, this.options.hoverTransition))
        }, e.prototype.resize = function () {
            this.positions()
        }, e.prototype.show = function () {
            this.button.open();
            var t = this.shownPositions.button, i = this.options.buttonSize;
            this.buttonX = t[12] + .5 * i[0], this.buttonY = t[13] + .5 * i[1], this.buttonModifier.halt(), this.buttonModifier.setTransform(t, this.options.uiFadeTransition), this.showUI()
        }, e.prototype.showUI = function () {
            this._uiVisible = !0, this.uiModifier.halt(), this.uiModifier.setTransform(this.uiShowMatrix, this.options.uiScaleTransition), this.uiModifier.setOpacity(1, this.options.uiFadeTransition), this.backingModifier.halt(), this.backingModifier.setOpacity(this.options.backingFade, this.options.uiFadeTransition), this.backingModifier.setTransform(this.backingShowMatrix, this.options.uiScaleTransition), this.signupMod.halt(), this.signupMod.setOpacity(1, this.options.uiFadeTransition), this.signupMod.setTransform(this.signupShowMatrix, this.options.uiScaleTransition), this.eventOutput.emit("showUI")
        }, e.prototype.hide = function () {
            this.button.close();
            var t = this.hiddenPositions.button, i = this.options.buttonSize;
            this.buttonX = t[12] + .5 * i[0], this.buttonY = t[13] + .5 * i[1], this.buttonModifier.halt(), this.buttonModifier.setTransform(t, this.options.uiFadeTransition), this.hideUI()
        }, e.prototype.hideUI = function () {
            this._uiVisible = !1, this.uiModifier.halt(), this.uiModifier.setTransform(this.uiHideMatrix, this.options.uiScaleTransition), this.uiModifier.setOpacity(0, this.options.uiFadeTransition), this.backingModifier.halt(), this.backingModifier.setTransform(this.uiHideMatrix, this.options.uiScaleTransition), this.backingModifier.setOpacity(0, this.options.uiFadeTransition), this.signupMod.halt(), this.signupMod.setOpacity(0, this.options.uiFadeTransition), this.signupMod.setTransform(this.signupHideMatrix, this.options.uiScaleTransition), this.eventOutput.emit("hideUI")
        }, e.prototype.setCurrentObject = function (t) {
            this.ui.setCurrentObject(t)
        }, e.prototype.getButton = function () {
            return this.button
        }, s.exports = e
    }), define("core/Interface", ["require", "exports", "module", "famous/Surface", "famous/Modifier", "famous/Matrix", "famous/Utility", "famous-scene/Scene", "famous-utils/Utils", "famous-utils/KeyCodes", "famous-animation/Easing", "famous-utils/Time", "famous/Transitionable", "famous-physics/utils/PhysicsTransition", "./NextButton", "./Signup", "./UI"], function (t, i, s) {
        function e() {
            o.apply(this, arguments), this.options.useUI && (this.UI = new c({offset: this.options.offset, buttonSize: this.options.buttonSize}), this.UI.pipe(this.eventOutput), this.node.add(this.UI)), this.options.useNext && "s.codepen.io" !== window.location.host && (this.nextButton = new u({offset: this.options.offset, buttonSize: this.options.buttonSize, position: this.options.nextPosition}), this.node.add(this.nextButton)), this.options.useSignup && (this.signup = new p({offset: this.options.offset, buttonSize: this.options.buttonSize, textInputScale: this.options.textInputScale, submitScale: this.options.submitScale}), this.node.add(this.signup)), this._uiHidden = !1, this.initForm = this.options.useSignup ? !1 : !0
        }

        t("famous/Surface"), t("famous/Modifier"), t("famous/Matrix"), t("famous/Utility");
        var o = t("famous-scene/Scene"), n = t("famous-utils/Utils");
        t("famous-utils/KeyCodes");
        var r = t("famous-animation/Easing");
        t("famous-utils/Time");
        var a = t("famous/Transitionable"), h = t("famous-physics/utils/PhysicsTransition");
        a.registerMethod("physics", h);
        var u = t("./NextButton"), p = t("./Signup"), c = t("./UI");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {useUI: !0, useNext: !0, useSignup: !1, buttonSize: [40, 40], offset: [20, 20], nextPosition: "tr", submitScale: 2, textInputScale: 6, uiFadeTransition: {curve: r.inOutBackNorm, duration: 400}, uiScaleTransition: {curve: r.inOutCubicNorm, duration: 400}, hoverTransition: {curve: r.inOutSineNorm, duration: 800}, hideAllTransition: {curve: r.inOutBackNorm, duration: 800}}, e.prototype.hideAllUI = function () {
            this._uiHidden = !0, this.signup && this.signup.hideAll(), this.UI && this.UI.hide(), this.nextButton && this.nextButton.hideAll()
        }, e.prototype.showAllUI = function () {
            this._uiHidden = !1, this.signup && this.signup.showAll(), this.UI && this.UI.show(), this.nextButton && this.nextButton.showAll()
        }, e.prototype.getAutoUI = function () {
            return this.UI ? this.UI.getUI() : void 0
        }, e.prototype.getUI = function () {
            return this.UI
        }, e.prototype.setCurrentObject = function (t) {
            this.UI.setCurrentObject(t)
        }, e.prototype.resize = function () {
            this.width = n.getWidth(), this.height = n.getHeight(), !this._uiHidden && this.signup && this.signup.showLogo(), this.nextButton && this.nextButton.resize(), this.signup && this.signup.resize(), this.UI && this.UI.resize()
        }, e.prototype.mousemove = function (t) {
            if (!this._uiHidden) {
                var i = Math.max(this.height / 3, this.options.buttonSize[0] * (this.options.textInputScale + this.options.submitScale) + 3 * this.options.offset[0]);
                this.UI && this.UI.mousemove(t, i), this.nextButton && this.nextButton.mousemove(t, i)
            }
        }, e.prototype.update = function () {
        }, s.exports = e
    }), define("famous/EventArbiter", ["require", "exports", "module", "./EventHandler"], function (t, i, s) {
        function e(t) {
            this.dispatchers = {}, this.currMode = void 0, this.setMode(t)
        }

        var o = t("./EventHandler");
        e.prototype.setMode = function (t) {
            if (t != this.currMode) {
                var i = this.currMode;
                this.dispatchers[this.currMode] && this.dispatchers[this.currMode].emit("unpipe"), this.currMode = t, this.dispatchers[t] && this.dispatchers[t].emit("pipe"), this.emit("change", {from: i, to: t})
            }
        }, e.prototype.forMode = function (t) {
            return this.dispatchers[t] || (this.dispatchers[t] = new o), this.dispatchers[t]
        }, e.prototype.emit = function (t, i) {
            if (void 0 == this.currMode)return!1;
            i || (i = {});
            var s = this.dispatchers[this.currMode];
            return s ? s.emit(t, i) : void 0
        }, s.exports = e
    }), define("famous/SceneCompiler", ["require", "exports", "module", "./Matrix"], function (t, i, s) {
        function e(t) {
            var i = {varCounter: 0}, s = [], e = h.call(i, t, s);
            return s.push("return " + e + ";"), new Function(["FT", "RenderNode", "RN_link", "RN_include", "id", "transforms"], s.join("\n"))
        }

        function o(t, i) {
            return"var " + t + " = " + i + ";"
        }

        function n(t, i) {
            return"id." + t + " = " + i + ";"
        }

        function r(t) {
            return"transforms.push(" + t + ");"
        }

        function a() {
            return"_" + this.varCounter++
        }

        function h(t, i) {
            var s;
            if (t instanceof Array)s = u.call(this, t, i); else if (s = a.call(this), t.target) {
                var e = h.call(this, t.target, i), c = p.call(this, t, i);
                i.push(o(s, "new RenderNode(" + c + ")")), i.push("RN_link.call(" + s + ", " + e + ");"), t.id && i.push(n(t.id, c)), i.push(r(c))
            } else t.id && (i.push(o(s, "new RenderNode()")), i.push(n(t.id, s)));
            return s
        }

        function u(t, i) {
            var s = a.call(this);
            i.push(o(s, "new RenderNode()"));
            for (var e = 0; e < t.length; e++) {
                var n = h.call(this, t[e], i);
                n && i.push("RN_include.call(" + s + ", " + n + ");")
            }
            return s
        }

        function p(t, i) {
            var s = t.transform, e = t.opacity, n = t.origin, r = t.size;
            t.target;
            var h = l.identity;
            if (s instanceof Array)if (16 == s.length && "number" == typeof s[0])h = s; else for (var u = 0; u < s.length; u++)h = l.multiply(h, c(s[u])); else s instanceof Object && (h = c(s));
            var p = a.call(this), f = "[" + h.join(",") + "]", d = n ? "[" + n.join(",") + "]" : void 0, m = r ? "[" + r.join(",") + "]" : void 0;
            return i.push(o(p, "new FT(" + f + "," + e + "," + d + "," + m + ")")), p
        }

        function c(t) {
            for (var i in f)if (i in t) {
                var s = t[i];
                return s instanceof Array || (s = [s]), f[i].apply(this, s)
            }
        }

        var l = t("./Matrix"), f = {translate: l.translate, rotate: l.rotate, rotateX: l.rotateX, rotateY: l.rotateY, rotateZ: l.rotateZ, rotateAxis: l.rotateAxis, scale: l.scale, skew: l.skew, matrix3d: function () {
            return arguments
        }};
        s.exports = {compile: e}
    }), define("famous/Scene", ["require", "exports", "module", "./RenderNode", "./Modifier", "./SceneCompiler"], function (t, i, s) {
        function e(t) {
            this.id = {}, this.transforms = [], this.node = new o, this._def = void 0, t && this.load(t)
        }

        var o = t("./RenderNode"), n = t("./Modifier"), r = t("./SceneCompiler"), a = o.prototype.link, h = o.prototype.add;
        e.prototype.create = function () {
            return new e(this._def)
        }, e.prototype.load = function (t) {
            t instanceof e ? t = t._def : t instanceof Function || (t = r.compile(t)), this.node = t(n, o, a, h, this.id, this.transforms), this._def = t
        }, e.prototype.getTransforms = function () {
            return this.transforms
        }, e.prototype.add = function () {
            return this.node.add.apply(this.node, arguments)
        }, e.prototype.mod = function () {
            return this.node.mod.apply(this.node, arguments)
        }, e.prototype.link = function () {
            return this.node.link.apply(this.node, arguments)
        }, e.prototype.render = function () {
            return this.node.render.apply(this.node, arguments)
        }, s.exports = e
    }), define("famous/Timer", ["require", "exports", "module", "famous/Engine"], function (t, i, s) {
        function e(t) {
            return u.on(p, t), t
        }

        function o(t, i) {
            var s = c(), o = function () {
                var e = c();
                e - s >= i && (t.apply(this, arguments), u.unbind(p, o))
            };
            return e(o)
        }

        function n(t, i) {
            var s = c(), o = function () {
                var e = c();
                e - s >= i && (t.apply(this, arguments), s = c())
            };
            return e(o)
        }

        function r(t, i) {
            if (void 0 !== i) {
                var s = function () {
                    i--, 0 >= i && (t.apply(this, arguments), h(s))
                };
                return e(s)
            }
        }

        function a(t, i) {
            i = i || 1;
            var s = i, o = function () {
                i--, 0 >= i && (t.apply(this, arguments), i = s)
            };
            return e(o)
        }

        function h(t) {
            u.unbind(p, t)
        }

        var u = t("famous/Engine"), p = "prerender", c = window.performance ? function () {
            return performance.now()
        } : function () {
            return Date.now()
        };
        s.exports = {setTimeout: o, setInterval: n, after: r, every: a, clear: h}
    }), define("famous/VideoSurface", ["require", "exports", "module", "./Surface"], function (t, i, s) {
        function e(t) {
            this.autoplay = t.autoplay || !1, this.videoUrl = void 0, o.apply(this, arguments)
        }

        var o = t("./Surface");
        e.prototype = Object.create(o.prototype), e.prototype.elementType = "video", e.prototype.elementClass = "surface", e.prototype.setContent = function (t) {
            this.videoUrl = t, this.contentDirty = !0
        }, e.prototype.deploy = function (t) {
            t.src = this.videoUrl, t.autoplay = this.autoplay
        }, e.prototype.recall = function (t) {
            t.src = ""
        }, s.exports = e
    }), define("famous/WebGLSurface", ["require", "exports", "module", "./Surface"], function (t, i, s) {
        function e(t) {
            this.glOptions = t.glOptions, this._canvas = document.createElement("canvas"), o.call(this, t), this.setContent(this._canvas), this.setSize(t.size)
        }

        var o = t("./Surface");
        e.prototype = Object.create(o.prototype), e.prototype.getContext = function () {
            return this._canvas.getContext("webgl", this.glOptions) || this._canvas.getContext("experimental-webgl", this.glOptions)
        }, e.prototype.setSize = function (t) {
            o.prototype.setSize.apply(this, arguments), this._canvas.style.width = t[0] + "px", this._canvas.style.height = t[1] + "px";
            var i = window.devicePixelRatio ? window.devicePixelRatio : 1;
            this._canvas.width = t[0] * i, this._canvas.height = t[1] * i
        }, s.exports = e
    }), define("famous-animation/Animation", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "./Easing"], function (t, i, s) {
        function e(t) {
            return this.name = t.name || "base", this.dead = !1, this.engine = t.engine || void 0, this.duration = t.duration || 500, this.delay = t.delay || 0, this.nextAnimations = [], void 0 !== t.next && (t.next instanceof Array ? this.nextAnimations.concat(t.next) : this.nextAnimations.push(t.next)), this.callback = t.callback || void 0, this.startTime = 0, this.endTime = 0, this.currentTime = 0, this.normalizedTime = 0, this.timePassed = 0, this.halted = !1, this.playing = !1, this.activated = !1, this.activateCallback = t.activateCallback || void 0, this.deactivateCallback = t.deactivateCallback || void 0, this.loop = t.loop || !1, this.reverse = t.reverse || !1, this.reverseUponLoop = t.reverseUponLoop || !1, this
        }

        t("famous/Surface"), t("famous/Matrix");
        var o = t("famous-utils/Utils");
        t("./Easing"), e.prototype.setDead = function (t) {
            return this.dead = t, this
        }, e.prototype.isDead = function () {
            return this.dead
        }, e.prototype.setup = function () {
        }, e.prototype.update = function () {
        }, e.prototype.render = function () {
        }, e.prototype.isPlaying = function () {
            return this.playing
        }, e.prototype.setDuration = function (t) {
            return this.duration = t, this
        }, e.prototype.setDelay = function (t) {
            return this.delay = t, this
        }, e.prototype.setCallback = function (t) {
            return this.callback = t || void 0, this
        }, e.prototype.setReverse = function (t) {
            return this.reverse = t, this
        }, e.prototype.toggleReverse = function () {
            return this.reverse = !this.reverse, this
        }, e.prototype.setLoop = function (t) {
            return this.loop = t, this
        }, e.prototype.setReverseUponLoop = function (t) {
            return this.reverseUponLoop = t, this
        }, e.prototype.isHalted = function () {
            return this.halted
        }, e.prototype.halt = function () {
            this.halted = !0, this.timePassed = this.engine.getTime() - this.startTime
        }, e.prototype.continueAnimation = function () {
            this.halted = !1, this.startTime = this.engine.getTime() - this.timePassed, this.timePassed = 0
        }, e.prototype.activate = function () {
        }, e.prototype.deactivate = function () {
        }, e.prototype.start = function () {
            this.engine.addAnimation(this), this.setDead(!1), this.halted = !1, this.playing = !0, this.startTime = this.engine.getTime() + this.delay - this.timePassed, this.endTime = this.startTime + this.duration, this.normalizedTime = 0
        }, e.prototype.tick = function () {
            if (this.playing && !this.halted) {
                if (this.currentTime = this.engine.getTime() - this.startTime, this.normalizedTime = this.currentTime / this.duration, this.normalizedTime > 1)return this.normalizedTime = o.clamp(this.normalizedTime, 0, 1), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this.update(), this.end(), void 0;
                this.normalizedTime > 1e-6 && (this.activated || (this.activate(), void 0 !== this.activateCallback && this.activateCallback(), this.activated = !0), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this.update())
            }
        }, e.prototype.getTime = function () {
            return this.normalizedTime
        }, e.prototype.end = function () {
            if (this.activated = !1, this.playing = !1, this.deactivate(), void 0 !== this.deactivateCallback && this.deactivateCallback(), this.engine.removeAnimation(this), this.reverseUponLoop && this.toggleReverse(), this.loop)this.start(); else for (var t = 0; t < this.nextAnimations.length; t++)this.nextAnimations[t].start();
            void 0 !== this.callback && this.callback()
        }, e.prototype.setNext = function (t) {
            t instanceof Array ? this.nextAnimations = this.nextAnimations.concat(this.nextAnimations, t) : this.nextAnimations.push(t)
        }, e.prototype.setName = function (t) {
            this.name = t
        }, e.prototype.getName = function () {
            return this.name
        }, e.prototype.setActivateCallback = function (t) {
            this.activateCallback = t
        }, e.prototype.setDeactivateCallback = function (t) {
            this.deactivateCallback = t
        }, s.exports = e
    }), define("famous-animation/Timer", ["require", "exports", "module"], function (t, i, s) {
        function e() {
            window.performance ? window.performance.now ? this.getTime = function () {
                return window.performance.now()
            } : window.performance.webkitNow && (this.getTime = function () {
                return window.performance.webkitNow()
            }) : this.getTime = function () {
                return Date.now()
            }
        }

        s.exports = e
    }), define("famous-animation/AnimationEngine", ["require", "exports", "module", "famous/Engine", "./Timer", "./Animation"], function (t, i, s) {
        function e() {
            this.animations = [], this.timer = new n, o.on("prerender", this.update.bind(this))
        }

        var o = t("famous/Engine"), n = t("./Timer");
        t("./Animation"), e.prototype.update = function () {
            for (var t = 0; t < this.animations.length; t++)this.animations[t].tick()
        }, e.prototype.render = function () {
            for (var t = [], i = 0; i < this.animations.length; i++)this.animations[i].normalizedTime > 0 && t.push(this.animations[i].render()), this.animations[i].isDead() && this.animations.splice(this.animations.indexOf(this.animations[i]), 1);
            return t
        }, e.prototype.emit = function (t) {
            "prerender" == t && (this.update(), this.render())
        }, e.prototype.addAnimation = function (t) {
            -1 == this.animations.indexOf(t) && this.animations.push(t)
        }, e.prototype.removeAnimation = function (t) {
            t.setDead(!0)
        }, e.prototype.getTime = function () {
            return this.timer.getTime()
        }, s.exports = e
    }), define("famous-animation/CubicBezier", ["require", "exports", "module"], function (t, i, s) {
        function e(t) {
            var i = [
                [1, 0, 0, 0],
                [0, 0, 1, 0],
                [-3, 3, -2, -1],
                [2, -2, 1, 1]
            ];
            t = t || [0, 1, 0, 0], this.coef = [0, 0, 0, 0];
            for (var s = 0; 4 > s; s++)for (var e = 0; 4 > e; e++)this.coef[s] += i[s][e] * t[e]
        }

        e.prototype.create = function () {
            var t = this;
            return function (i) {
                i = i || 0;
                var s = t.coef;
                return s[0] + s[1] * i + s[2] * i * i + s[3] * i * i * i
            }
        }, s.exports = e
    }), define("famous-math/Vector", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s) {
            return 1 == arguments.length ? (t instanceof Array && this.setXYZ(t[0], t[1], t[2]), "Vector" == t.constructor.name && this.set(t)) : (this.x = t || 0, this.y = i || 0, this.z = s || 0), this
        }

        e.prototype.add = function (t, i) {
            return i = i || this.register, i.setXYZ(this.x + t.x, this.y + t.y, this.z + t.z)
        }, e.prototype.sub = function (t, i) {
            return i = i || this.register, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
        }, e.prototype.mult = function (t, i) {
            return i = i || this.register, i.setXYZ(t * this.x, t * this.y, t * this.z)
        }, e.prototype.div = function (t, i) {
            return this.mult(1 / t, i)
        }, e.prototype.cross = function (t, i) {
            return i = i || this.register, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
        }, e.prototype.rotate = function (t, i) {
            var s = t.x, e = t.y, o = t.z;
            return this.rotateX(s, i).rotateY(e, i).rotateZ(o, i)
        }, e.prototype.rotateX = function (t, i) {
            i = i || this.register;
            var s = this.x, e = this.y, o = this.z, n = Math.cos(t), r = Math.sin(t);
            return i.setXYZ(s, -o * r + e * n, o * n - e * r)
        }, e.prototype.rotateY = function (t, i) {
            i = i || this.register;
            var s = this.x, e = this.y, o = this.z, n = Math.cos(t), r = Math.sin(t);
            return i.setXYZ(-o * r + s * n, e, o * n + s * r)
        }, e.prototype.rotateZ = function (t, i) {
            i = i || this.register;
            var s = this.x, e = this.y, o = this.z, n = Math.cos(t), r = Math.sin(t);
            return i.setXYZ(-e * r + s * n, e * n + s * r, o)
        }, e.prototype.dot = function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, e.prototype.normSquared = function () {
            return this.dot(this)
        }, e.prototype.norm = function () {
            return Math.sqrt(this.normSquared())
        }, e.prototype.normalize = function (t, i) {
            t = t || 1, i = i || this.register;
            var s = 1e-7, e = this.norm();
            return Math.abs(e) > s ? this.mult(t / e, i) : i.setXYZ(t, 0, 0)
        }, e.prototype.clone = function () {
            return new e(this.x, this.y, this.z)
        }, e.prototype.isZero = function () {
            return!this.x && !this.y && !this.z
        }, e.prototype.set = function (t) {
            return t instanceof Array ? (this.x = t[0], this.y = t[1], this.z = t[2] || 0) : (this.x = t.x, this.y = t.y, this.z = t.z), this != this.register && this.register.clear(), this
        }, e.prototype.setXYZ = function (t, i, s) {
            return this.register.clear(), this.x = t, this.y = i, this.z = s, this
        }, e.prototype.clear = function () {
            this.x = 0, this.y = 0, this.z = 0
        }, e.prototype.cap = function (t) {
            if (1 / 0 == t)return this;
            var i = this.norm();
            return i > t && this.normalize().mult(t, this), this
        }, e.prototype.project = function (t, i) {
            return i = i || this.register, t.mult(this.dot(t), i)
        }, e.prototype.reflect = function (t, i) {
            return i = i || this.register, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, e.prototype.toArray = function () {
            return[this.x, this.y, this.z]
        }, e.prototype.fromArray = function (t) {
            this.x = t[0], this.y = t[1], this.z = t[2]
        }, e.prototype.get = function () {
            return this.toArray()
        }, e.prototype.register = new e(0, 0, 0), e.prototype.zero = new e(0, 0, 0), e.prototype.one = new e(1, 1, 1), s.exports = e
    }), define("famous-math/Quaternion", ["require", "exports", "module", "famous/Matrix"], function (t, i, s) {
        function e(t, i, s, e) {
            return this.w = void 0 !== t ? t : 1, this.x = i || 0, this.y = s || 0, this.z = e || 0, this
        }

        t("famous/Matrix"), e.prototype.makeFromAngleAndAxis = function (t, i) {
            i.normalize();
            var s = .5 * t, e = Math.sin(s);
            return this.x = e * i.x, this.y = e * i.y, this.z = e * i.z, this.w = Math.cos(s), this
        }, e.prototype.clone = function () {
            return new e(this.w, this.x, this.y, this.z)
        }, e.prototype.setWXYZ = function (t, i, s, e) {
            return this.w = t, this.x = i, this.y = s, this.z = e, this
        }, e.prototype.set = function (t) {
            return this.w = t.w, this.x = t.x, this.y = t.y, this.z = t.z, this
        }, e.prototype.clear = function () {
            return this.w = 1, this.x = 0, this.y = 0, this.z = 0, this
        }, e.prototype.normalize = function () {
            var t = Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
            if (0 == t)this.w = 1, this.x = this.y = this.z = 0; else {
                var i = 1 / t;
                this.w *= i, this.x *= i, this.y *= i, this.z *= i
            }
            return this
        }, e.prototype.getMatrix = function () {
            return this.normalize(), [1 - 2 * this.y * this.y - 2 * this.z * this.z, 2 * this.x * this.y - 2 * this.z * this.w, 2 * this.x * this.z + 2 * this.y * this.w, 0, 2 * this.x * this.y + 2 * this.z * this.w, 1 - 2 * this.x * this.x - 2 * this.z * this.z, 2 * this.y * this.z - 2 * this.x * this.w, 0, 2 * this.x * this.z - 2 * this.y * this.w, 2 * this.y * this.z + 2 * this.x * this.w, 1 - 2 * this.x * this.x - 2 * this.y * this.y, 0, 0, 0, 0, 1]
        }, e.prototype.multiply = function (t, i) {
            return i = i || this.register, i.w = this.w * t.w - this.x * t.x - this.y * t.y - this.z * t.z, i.x = this.w * t.x + this.x * t.w + this.y * t.z - this.z * t.y, i.y = this.w * t.y - this.x * t.z + this.y * t.w + this.z * t.x, i.z = this.w * t.z + this.x * t.y - this.y * t.x + this.z * t.w, i
        }, e.prototype.isEqual = function (t) {
            return t.w == this.w && t.x == this.x && t.y == this.y && t.z == this.z ? !0 : !1
        }, e.prototype.dot = function (t) {
            return this.w * t.w + this.x * t.x + this.y * t.y + this.z * t.z
        }, e.prototype.add = function (t, i) {
            return i = i || this.register, i.w = this.w + t.w, i.x = this.x + t.x, i.y = this.y + t.y, i.z = this.z + t.z, i
        }, e.prototype.sub = function (t, i) {
            return i = i || this.register, i.w = this.w - t.w, i.x = this.x - t.x, i.y = this.y - t.y, i.z = this.z - t.z, i
        }, e.prototype.normSquared = function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }, e.prototype.norm = function () {
            return Math.sqrt(this.normSquared())
        }, e.prototype.conj = function (t) {
            return t = t || this.register, t.w = this.w, t.x = -this.x, t.y = -this.y, t.z = -this.z, t
        }, e.prototype.inverse = function (t) {
            return t = t || this.register, this.conj(t), t.scalarDivide(this.normSquared(), t), t
        }, e.prototype.scalarDivide = function (t, i) {
            return i = i || this.register, t = 1 / t, i.w = this.w * t, i.x = this.x * t, i.y = this.y * t, i.z = this.z * t, i
        }, e.prototype.scalarMult = function (t, i) {
            return i = i || this.register, i.w = this.w * t, i.x = this.x * t, i.y = this.y * t, i.z = this.z * t, i
        }, e.prototype.isZero = function () {
            return 0 == this.x && 0 == this.y && 0 == this.z && 1 == this.w ? !0 : !1
        }, e.prototype.negate = function () {
            return this.w = -this.w, this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }, e.prototype.zeroRotation = function () {
            return this.x = 0, this.y = 0, this.z = 0, this.w = 1, this
        }, e.prototype.slerp = function (t, i, s) {
            s = s || this.register;
            var e, o, n, r, a;
            return this.to.set(t), this.from.set(this), o = this.dot(t), 0 > o && (o = -o, this.to.negate()), 1 - o > this.epsilon ? (e = Math.acos(o), n = Math.sin(e), r = Math.sin((1 - i) * e) / n, a = Math.sin(i * e) / n) : (r = 1 - i, a = i), this.from.scalarMult(r, this.from), this.to.scalarMult(a, this.to), this.from.add(this.to, s), s
        }, e.prototype.epsilon = 1e-5, e.prototype.from = new e(0, 0, 0, 0), e.prototype.to = new e(0, 0, 0, 0), e.prototype.register = new e(0, 0, 0, 0), e.prototype.zero = new e(0, 0, 0, 0), e.prototype.one = new e(1, 1, 1, 1), s.exports = e
    }), define("famous-animation/GenericAnimation", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-math/Vector", "famous-math/Quaternion", "./Animation", "./AnimationEngine", "./Easing", "famous-utils/Utils", "famous-color/Color"], function (t, i, s) {
        function e(t) {
            a.call(this, t), this.surface = t.surface, this.renderSurface = t.renderSurface || !1, this.easing = t.easing || h.inOutCubicNorm, this.animateColor = !1, this.startColor = t.startColor || new p(255, 255, 255, 1), this.endColor = t.endColor || new p(255, 255, 255, 1), this.startColorHSL = new n, this.endColorHSL = new n, this.deltaColorHSL = new n, this.currentColorHSL = new n, this.animateOpacity = !1, this.startOpacity = t.startOpacity || 0, this.endOpacity = t.endOpacity || 0, this.deltaOpacity = 0, this.animatePosition = !1, this.startPosition = t.startPosition || new n(0, 0, 0).fromArray(o.getTranslate(this.surface.mtx)), this.endPosition = t.endPosition || new n(0, 0, 0).fromArray(o.getTranslate(this.surface.mtx)), this.currentPosition = new n(0, 0, 0), this.deltaPosition = new n(0, 0, 0), this.animateOrientation = !1, this.startOrientation = t.startOrientation || new r, this.endOrientation = t.endOrientation || new r, this.currentOrientation = t.currentOrientation || new r, this.animateRadius = !1, this.startRadius = t.startRadius || 0, this.endRadius = t.endRadius || 0, this.deltaRadius = 0, this.currentRadius = 0
        }

        t("famous/Surface");
        var o = t("famous/Matrix"), n = t("famous-math/Vector"), r = t("famous-math/Quaternion"), a = t("./Animation");
        t("./AnimationEngine");
        var h = t("./Easing"), u = t("famous-utils/Utils"), p = t("famous-color/Color");
        e.prototype = Object.create(a.prototype), e.prototype.constructor = e, e.prototype.activate = function () {
            var t = this.startColor.getHSL(), i = this.endColor.getHSL();
            this.startColorHSL.setXYZ(t[0], t[1], t[2]), this.endColorHSL.setXYZ(i[0], i[1], i[2]), this.endColorHSL.sub(this.startColorHSL, this.deltaColorHSL), this.currentColorHSL.set(this.startColorHSL), this.animateColor = this.startColor.r == this.endColor.r && this.startColor.g == this.endColor.g && this.startColor.b == this.endColor.b && this.startColor.a == this.endColor.a ? !1 : !0, this.deltaOpacity = this.endOpacity - this.startOpacity, this.animateOpacity = Math.abs(this.deltaOpacity) > 0 ? !0 : !1, this.endPosition.sub(this.startPosition, this.deltaPosition), this.currentPosition.set(this.startPosition), this.animatePosition = this.deltaPosition.isZero() ? !1 : !0, this.animateOrientation = this.startOrientation.isEqual(this.endOrientation) ? !1 : !0, this.deltaRadius = this.endRadius - this.startRadius, this.currentRadius = this.startRadius, this.animateRadius = 0 === this.deltaRadius ? !1 : !0
        }, e.prototype.tick = function () {
            if (this.playing && !this.halted) {
                if (this.currentTime = this.engine.getTime() - this.startTime, this.normalizedTime = this.currentTime / this.duration, this.normalizedTime > 1)return this.normalizedTime = u.clamp(this.normalizedTime, 0, 1), this._update(), this.update(), this.end(), void 0;
                this.normalizedTime > 1e-6 && (this.activated || (this.activate(), void 0 !== this.activateCallback && this.activateCallback(), this.activated = !0), this.reverse && (this.normalizedTime = 1 - this.normalizedTime), this._update(), this.update())
            }
        }, e.prototype._update = function () {
            var t = this.easing(this.normalizedTime);
            this.animateColor && (this.deltaColorHSL.mult(t, this.currentColorHSL), this.currentColorHSL.add(this.startColorHSL, this.currentColorHSL), this.surface.setProperties(u.backgroundColorHSL(this.currentColorHSL.x, this.currentColorHSL.y, this.currentColorHSL.z, 1))), this.animateOpacity && (this.surface.opacity = this.startOpacity + this.deltaOpacity * t), (this.animatePosition || this.animateOrientation) && (this.deltaPosition.mult(t, this.currentPosition), this.currentPosition.add(this.startPosition, this.currentPosition), this.startOrientation.slerp(this.endOrientation, t, this.currentOrientation), this.surface.mtx = o.move(this.currentOrientation.getMatrix(), this.currentPosition.toArray())), this.animateRadius && (this.currentRadius = this.startRadius + this.deltaRadius * t, this.surface.setProperties(u.borderRadius(this.currentRadius)))
        }, e.prototype.render = function () {
            return this.renderSurface && !this.dead && this.normalizedTime > 0 ? {transform: this.surface.mtx, opacity: this.surface.opacity, target: this.surface.render()} : void 0
        }, e.prototype.setStartColor = function (t) {
            this.startColor = t
        }, e.prototype.setEndColor = function (t) {
            this.endColor = t
        }, e.prototype.getStartColor = function () {
            return this.startColor
        }, e.prototype.getEndColor = function () {
            return this.endColor
        }, e.prototype.setStartPosition = function (t) {
            this.startPosition = t
        }, e.prototype.setStartPositionX = function (t) {
            this.startPosition.x = t
        }, e.prototype.setStartPositionY = function (t) {
            this.startPosition.y = t
        }, e.prototype.setStartPositionZ = function (t) {
            this.startPosition.z = t
        }, e.prototype.setEndPosition = function (t) {
            this.endPosition = t
        }, e.prototype.setEndPositionX = function (t) {
            this.endPosition.setX(t)
        }, e.prototype.setEndPositionY = function (t) {
            this.endPosition.setY(t)
        }, e.prototype.setEndPositionZ = function (t) {
            this.endPosition.setZ(t)
        }, e.prototype.getEndPosition = function () {
            return this.endPosition
        }, e.prototype.getStartPosition = function () {
            return this.startPosition
        }, e.prototype.getCurrentPosition = function () {
            return this.currentPosition
        }, e.prototype.setStartOpacity = function (t) {
            this.startOpacity = t
        }, e.prototype.setEndOpacity = function (t) {
            this.endOpacity = t
        }, e.prototype.getStartOpacity = function () {
            return this.startOpacity
        }, e.prototype.getEndOpacity = function () {
            return this.endOpacity
        }, e.prototype.setStartRadius = function (t) {
            this.startRadius = t
        }, e.prototype.setEndRadius = function (t) {
            this.endRadius = t
        }, e.prototype.getCurrentRadius = function () {
            return this.currentRadius
        }, e.prototype.getStartRadius = function () {
            return this.startRadius
        }, e.prototype.getEndRadius = function () {
            return this.endRadius
        }, e.prototype.setStartOrientation = function (t) {
            this.startOrientation = t
        }, e.prototype.setEndOrientation = function (t) {
            this.endOrientation = t
        }, e.prototype.getEndOrientation = function () {
            return this.endOrientation
        }, e.prototype.getStartOrientation = function () {
            return this.startOrientation
        }, e.prototype.setEasing = function (t) {
            this.easing = t
        }, e.prototype.setSurface = function (t) {
            this.surface = t
        }, e.prototype.setEndValuesToStartValues = function () {
            this.startColor = this.endColor.clone(), this.startOpacity = this.endOpacity, this.startPosition.set(this.endPosition), this.startOrientation.set(this.endOrientation), this.startRadius = this.endRadius
        }, s.exports = e
    }), define("famous-animation/Idle", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i) {
            this.idleFn = t, this.timeout = i, this.enabled = i > 0, this.reset()
        }

        e.prototype.timeoutIn = function (t) {
            this.lastTouchTime = (new Date).getTime() - this.timeout + t
        }, e.prototype.enable = function () {
            this.enabled = !0
        }, e.prototype.disable = function () {
            this.enabled = !1
        }, e.prototype.setIdleFunction = function (t) {
            this.idleFn = t
        }, e.prototype.update = function () {
            if (!this.idling && this.enabled && this.idleFn) {
                var t = (new Date).getTime();
                t - this.lastTouchTime > this.timeout && (this.idling = !0, this.idleFn.call(this))
            }
        }, e.prototype.isIdling = function () {
            return this.idling
        }, e.prototype.reset = function () {
            this.lastTouchTime = (new Date).getTime(), this.idling = !1
        }, e.prototype.emit = function () {
            this.reset()
        }, s.exports = e
    }), define("famous-animation/PiecewiseCubicBezier", ["require", "exports", "module", "./CubicBezier"], function (t, i, s) {
        function e(t) {
            t = t || {}, this.split = t.split || .5;
            var i = t.overshoot || 0, s = t.vLeft || [0, 1 + i, 0, 0], e = t.vRight || [1 + i, 1, 0, 0];
            this.bezLeft = new o(s).create(), this.bezRight = new o(e).create()
        }

        var o = t("./CubicBezier");
        e.prototype.create = function () {
            var t = this;
            return function (i) {
                i = i || 0;
                var s, e = t.split;
                return e > i ? (s = i / e, t.bezLeft(s)) : (s = (i - e) / (1 - e), t.bezRight(s))
            }
        }, s.exports = e
    }), define("famous-animation/RegisterEasing", ["require", "exports", "module", "./Easing", "famous/TweenTransition"], function (t) {
        function i() {
            for (var t = /norm/gi, i = s(o).filter(function (i) {
                return t.test(i)
            }).sort(), e = {}, n = 0; n < i.length; n++)e[i[n]] = o[i[n]];
            return e
        }

        function s(t) {
            var i = [];
            for (key in t)t.hasOwnProperty(key) && i.push(key);
            return i
        }

        function e() {
            var t = i();
            for (var s in t)n.registerCurve(s, t[s])
        }

        var o = t("./Easing"), n = t("famous/TweenTransition");
        e()
    }), define("famous-animation/Sequence", ["require", "exports", "module"], function (t, i, s) {
        function e() {
            this.startTime = 0, this.setupPos = 0, this.schedule = [], this.seqLoc = -1
        }

        e.prototype._execute = function (t) {
            for (this.seqLoc < 0 && (this.seqLoc = 0); this.seqLoc < this.schedule.length && this.schedule[this.seqLoc].pos <= t;)this.schedule[this.seqLoc].action.call(this), this.seqLoc++
        }, e.prototype.update = function () {
            if (!(this.seqLoc < 0 || this.seqLoc >= this.schedule.length)) {
                var t = (new Date).getTime() - this.startTime;
                this._execute(t)
            }
        }, e.prototype.at = function (t, i) {
            this.schedule.push({pos: t, action: i}), this.setupPos = t
        }, e.prototype.after = function (t, i) {
            this.at(this.setupPos + t, i)
        }, e.prototype.play = function (t) {
            this.schedule.sort(function (t, i) {
                return t.pos - i.pos
            }), this.startTime = (new Date).getTime();
            for (var i = 0; i < this.schedule.length && this.schedule[i].pos < t;)i++;
            this.seqLoc = i
        }, e.prototype.fastForward = function (t) {
            "undefined" == typeof t && (t = 1 / 0), this._execute(t)
        }, e.prototype.stop = function () {
            this.seqLoc = -1
        }, s.exports = e
    }), define("famous-audio/BufferLoader", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s) {
            this.context = t, this.urlList = i, this.onload = s, this.bufferList = [], this.loadCount = 0
        }

        e.prototype.loadBuffer = function (t, i) {
            var s = new XMLHttpRequest;
            s.open("GET", t, !0), s.responseType = "arraybuffer";
            var e = this;
            s.onload = function () {
                e.context.decodeAudioData(s.response, function (s) {
                    return s ? (e.bufferList[i] = s, ++e.loadCount == e.urlList.length && e.onload(e.bufferList), void 0) : (console.log("error decoding file data: " + t), void 0)
                })
            }, s.onerror = function () {
                console.log("BufferLoader: XHR error")
            }, s.send()
        }, e.prototype.load = function () {
            for (var t = 0; t < this.urlList.length; ++t)this.loadBuffer(this.urlList[t], t)
        }, s.exports = e
    }), define("famous-audio/SoundPlayer", ["require", "exports", "module", "./BufferLoader"], function (t, i, s) {
        function e(t, i) {
            this.context, this.node, this.buffersActive = [];
            try {
                window.AudioContext = window.AudioContext || window.webkitAudioContext, this.context = new AudioContext, this.bufferLoader = new o(this.context, t, this.setSounds.bind(this)), this.sounds, this.callback = i || void 0, this.bufferLoader.load()
            } catch (s) {
            }
        }

        var o = t("./BufferLoader");
        e.prototype.setSounds = function (t) {
            this.sounds = t, void 0 != this.callback && this.callback()
        }, e.prototype.isPlaying = function () {
            return this.buffersActive.length > 0 ? !0 : !1
        }, e.prototype.stopPlaying = function () {
            var t = this.buffersActive.length;
            if (t > 0)for (var i = 0; t > i; i++) {
                var s = this.buffersActive[i];
                s.stop(0)
            }
        }, e.prototype.getContext = function () {
            return this.context
        }, e.prototype.addNode = function (t) {
            this.node = t
        }, e.prototype.playSound = function (t, i, s) {
            if (this.context && this.sounds) {
                var e = this.context.createBufferSource(), o = this.context.createGainNode ? this.context.createGainNode() : this.context.createGain();
                o.gain.value = "undefined" == typeof i ? .5 : i, e.buffer = this.sounds[t], e.connect(o);
                var n = o;
                this.node && (n.connect(this.node), n = this.node), n.connect(this.context.destination), e.start(0), e.onended = function () {
                    var t = this.buffersActive.indexOf(e);
                    -1 !== t && this.buffersActive.splice(t, 1), s && s()
                }.bind(this, e), this.buffersActive.push(e)
            }
        }, s.exports = e
    }), define("famous-color/ColorPalette", ["require", "exports", "module", "./Color"], function (t, i, s) {
        function e(t) {
            this.colors = t
        }

        t("./Color"), e.prototype.getColor = function (t) {
            return this.colors[t % this.colors.length]
        }, e.prototype.getCSS = function (t) {
            return this.getColor(t).getCSSColor()
        }, e.prototype.getLighestColor = function () {
            for (var t, i = 0, s = 0; s < this.colors.length; s++) {
                var e = this.colors[s].getLightness();
                e > i && (t = this.colors[s], i = e)
            }
            return t
        }, e.prototype.getDarkestColor = function () {
            for (var t, i = 100, s = 0; s < this.colors.length; s++) {
                var e = this.colors[s].getLightness();
                i > e && (t = this.colors[s], i = e)
            }
            return t
        }, e.prototype.getCount = function () {
            return this.colors.length
        }, s.exports = e
    }), define("famous-color/ColorPalettes", ["require", "exports", "module", "./Color", "./ColorPalette"], function (t, i, s) {
        function e() {
        }

        function o(t) {
            return new r(t[0], t[1], t[2], t[3])
        }

        function n(t) {
            for (var i = [], s = 0, e = t.length; e > s; s++)i.push(o(t[s]));
            return new a(i)
        }

        var r = t("./Color"), a = t("./ColorPalette"), h = [
            [
                [53, 92, 125, 1],
                [108, 91, 123, 1],
                [192, 108, 132, 1],
                [246, 114, 128, 1],
                [248, 177, 149, 1]
            ],
            [
                [27, 21, 33, 1],
                [181, 172, 1, 1],
                [212, 30, 69, 1],
                [232, 110, 28, 1],
                [236, 186, 9, 1]
            ],
            [
                [63, 54, 42, 1],
                [231, 69, 13, 1],
                [250, 157, 4, 1],
                [251, 222, 3, 1],
                [254, 245, 150, 1]
            ],
            [
                [10, 103, 137, 1],
                [10, 153, 111, 1],
                [207, 6, 56, 1],
                [250, 102, 50, 1],
                [254, 205, 35, 1]
            ],
            [
                [157, 85, 105, 1],
                [192, 227, 217, 1],
                [202, 55, 99, 1],
                [227, 237, 195, 1],
                [235, 113, 84, 1]
            ],
            [
                [110, 110, 110, 1],
                [145, 217, 255, 1],
                [237, 255, 135, 1],
                [255, 133, 167, 1],
                [255, 255, 255, 1]
            ],
            [
                [0, 0, 0, 1],
                [25, 26, 36, 1],
                [51, 44, 44, 1],
                [250, 101, 87, 1],
                [255, 255, 255, 1]
            ],
            [
                [27, 103, 107, 1],
                [81, 149, 72, 1],
                [136, 196, 37, 1],
                [190, 242, 2, 1],
                [234, 253, 230, 1]
            ],
            [
                [31, 11, 12, 1],
                [48, 5, 17, 1],
                [179, 84, 79, 1],
                [214, 195, 150, 1],
                [231, 252, 207, 1]
            ],
            [
                [172, 248, 248, 1],
                [223, 235, 24, 1],
                [230, 95, 95, 1],
                [235, 54, 24, 1],
                [235, 207, 24, 1]
            ],
            [
                [196, 182, 109, 1],
                [213, 39, 5, 1],
                [240, 211, 119, 1],
                [243, 232, 228, 1],
                [247, 109, 60, 1]
            ],
            [
                [11, 72, 107, 1],
                [59, 134, 134, 1],
                [121, 189, 154, 1],
                [168, 219, 168, 1],
                [207, 240, 158, 1]
            ],
            [
                [0, 188, 209, 1],
                [118, 211, 222, 1],
                [174, 232, 251, 1],
                [176, 248, 255, 1],
                [254, 249, 240, 1]
            ],
            [
                [85, 73, 57, 1],
                [112, 108, 77, 1],
                [241, 230, 143, 1],
                [255, 100, 100, 1],
                [255, 151, 111, 1]
            ],
            [
                [36, 244, 161, 1],
                [178, 42, 58, 1],
                [199, 244, 36, 1],
                [244, 36, 182, 1],
                [249, 246, 49, 1]
            ],
            [
                [108, 144, 134, 1],
                [169, 204, 24, 1],
                [207, 73, 108, 1],
                [235, 234, 188, 1],
                [252, 84, 99, 1]
            ],
            [
                [78, 79, 75, 1],
                [130, 35, 57, 1],
                [247, 62, 62, 1],
                [255, 119, 61, 1],
                [255, 213, 115, 1]
            ],
            [
                [121, 28, 49, 1],
                [145, 213, 152, 1],
                [191, 178, 64, 1],
                [202, 51, 68, 1],
                [237, 126, 80, 1]
            ],
            [
                [104, 73, 83, 1],
                [127, 191, 151, 1],
                [182, 219, 145, 1],
                [250, 107, 41, 1],
                [253, 158, 41, 1]
            ],
            [
                [0, 203, 231, 1],
                [0, 218, 60, 1],
                [223, 21, 26, 1],
                [244, 243, 40, 1],
                [253, 134, 3, 1]
            ],
            [
                [56, 222, 231, 1],
                [232, 255, 0, 1],
                [254, 62, 71, 1],
                [255, 130, 0, 1]
            ],
            [
                [27, 32, 38, 1],
                [75, 89, 107, 1],
                [153, 228, 255, 1],
                [247, 79, 79, 1],
                [255, 59, 59, 1]
            ],
            [
                [0, 0, 0, 1],
                [0, 173, 239, 1],
                [236, 0, 140, 1],
                [255, 242, 0, 1]
            ],
            [
                [47, 43, 173, 1],
                [173, 43, 173, 1],
                [228, 38, 146, 1],
                [247, 21, 104, 1],
                [247, 219, 21, 1]
            ],
            [
                [101, 150, 158, 1],
                [171, 20, 44, 1],
                [189, 219, 222, 1],
                [205, 212, 108, 1],
                [219, 217, 210, 1]
            ],
            [
                [97, 24, 36, 1],
                [193, 47, 42, 1],
                [247, 255, 238, 1],
                [254, 222, 123, 1],
                [255, 101, 64, 1]
            ],
            [
                [118, 85, 66, 1],
                [124, 231, 163, 1],
                [220, 93, 110, 1],
                [255, 174, 60, 1],
                [255, 229, 156, 1]
            ],
            [
                [63, 184, 175, 1],
                [127, 199, 175, 1],
                [218, 216, 167, 1],
                [255, 61, 127, 1],
                [255, 158, 157, 1]
            ],
            [
                [217, 251, 223, 1],
                [219, 255, 210, 1],
                [231, 254, 235, 1],
                [234, 255, 210, 1],
                [243, 255, 210, 1]
            ],
            [
                [0, 23, 42, 1],
                [27, 139, 163, 1],
                [94, 202, 214, 1],
                [178, 222, 249, 1],
                [206, 254, 255, 1]
            ],
            [
                [225, 245, 196, 1],
                [237, 229, 116, 1],
                [249, 212, 35, 1],
                [252, 145, 58, 1],
                [255, 78, 80, 1]
            ],
            [
                [7, 9, 61, 1],
                [11, 16, 140, 1],
                [12, 15, 102, 1],
                [14, 78, 173, 1],
                [16, 127, 201, 1]
            ],
            [
                [5, 177, 240, 1],
                [5, 232, 240, 1],
                [94, 87, 230, 1],
                [230, 87, 149, 1],
                [255, 5, 113, 1]
            ],
            [
                [48, 0, 24, 1],
                [90, 61, 49, 1],
                [131, 123, 71, 1],
                [173, 184, 95, 1],
                [229, 237, 184, 1]
            ],
            [
                [111, 191, 162, 1],
                [191, 184, 174, 1],
                [242, 199, 119, 1],
                [242, 230, 194, 1],
                [255, 255, 255, 1]
            ],
            [
                [22, 147, 165, 1],
                [69, 181, 196, 1],
                [126, 206, 202, 1],
                [160, 222, 214, 1],
                [199, 237, 232, 1]
            ],
            [
                [8, 26, 48, 1],
                [50, 64, 90, 1],
                [59, 100, 128, 1],
                [155, 153, 130, 1],
                [255, 134, 17, 1]
            ],
            [
                [74, 186, 176, 1],
                [152, 33, 0, 1],
                [255, 211, 0, 1],
                [255, 245, 158, 1]
            ],
            [
                [42, 135, 50, 1],
                [49, 48, 66, 1],
                [107, 85, 48, 1],
                [255, 109, 36, 1],
                [255, 235, 107, 1]
            ],
            [
                [0, 0, 0, 1],
                [25, 134, 219, 1],
                [105, 172, 224, 1],
                [149, 199, 24, 1],
                [184, 212, 40, 1]
            ],
            [
                [64, 0, 20, 1],
                [127, 0, 40, 1],
                [191, 0, 59, 1],
                [229, 0, 71, 1],
                [255, 0, 79, 1]
            ],
            [
                [56, 69, 59, 1],
                [78, 133, 136, 1],
                [255, 70, 84, 1],
                [255, 213, 106, 1],
                [255, 254, 211, 1]
            ],
            [
                [29, 44, 143, 1],
                [57, 179, 162, 1],
                [209, 146, 191, 1],
                [222, 75, 107, 1],
                [252, 180, 121, 1]
            ],
            [
                [14, 36, 48, 1],
                [232, 213, 183, 1],
                [232, 213, 185, 1],
                [245, 179, 73, 1],
                [252, 58, 81, 1]
            ],
            [
                [0, 210, 255, 1],
                [222, 255, 0, 1],
                [255, 0, 168, 1],
                [255, 66, 0, 1]
            ],
            [
                [21, 99, 105, 1],
                [51, 53, 84, 1],
                [169, 186, 181, 1],
                [216, 69, 148, 1],
                [236, 196, 89, 1]
            ],
            [
                [105, 210, 231, 1],
                [167, 219, 216, 1],
                [224, 228, 204, 1],
                [243, 134, 48, 1],
                [250, 105, 0, 1]
            ],
            [
                [122, 106, 83, 1],
                [148, 140, 117, 1],
                [153, 178, 183, 1],
                [213, 222, 217, 1],
                [217, 206, 178, 1]
            ],
            [
                [34, 104, 136, 1],
                [57, 142, 182, 1],
                [255, 162, 0, 1],
                [255, 214, 0, 1],
                [255, 245, 0, 1]
            ],
            [
                [2, 100, 117, 1],
                [194, 163, 79, 1],
                [251, 184, 41, 1],
                [254, 251, 175, 1],
                [255, 229, 69, 1]
            ],
            [
                [214, 37, 77, 1],
                [246, 215, 107, 1],
                [253, 235, 169, 1],
                [255, 84, 117, 1],
                [255, 144, 54, 1]
            ],
            [
                [0, 0, 0, 1],
                [124, 180, 144, 1],
                [211, 25, 0, 1],
                [255, 102, 0, 1],
                [255, 242, 175, 1]
            ],
            [
                [35, 116, 222, 1],
                [38, 38, 38, 1],
                [87, 54, 255, 1],
                [231, 255, 54, 1],
                [255, 54, 111, 1]
            ],
            [
                [64, 18, 44, 1],
                [89, 186, 169, 1],
                [101, 98, 115, 1],
                [216, 241, 113, 1],
                [252, 255, 217, 1]
            ],
            [
                [126, 148, 158, 1],
                [174, 194, 171, 1],
                [235, 206, 160, 1],
                [252, 119, 101, 1],
                [255, 51, 95, 1]
            ],
            [
                [75, 73, 11, 1],
                [117, 116, 73, 1],
                [226, 223, 154, 1],
                [235, 229, 77, 1],
                [255, 0, 81, 1]
            ],
            [
                [159, 112, 69, 1],
                [183, 98, 5, 1],
                [208, 167, 124, 1],
                [253, 169, 43, 1],
                [254, 238, 171, 1]
            ],
            [
                [38, 37, 28, 1],
                [160, 232, 183, 1],
                [235, 10, 68, 1],
                [242, 100, 61, 1],
                [242, 167, 61, 1]
            ],
            [
                [0, 0, 0, 1],
                [67, 110, 217, 1],
                [120, 0, 0, 1],
                [216, 216, 216, 1],
                [240, 24, 0, 1]
            ],
            [
                [51, 51, 51, 1],
                [131, 163, 0, 1],
                [158, 12, 57, 1],
                [226, 27, 90, 1],
                [251, 255, 227, 1]
            ],
            [
                [79, 156, 52, 1],
                [108, 186, 85, 1],
                [125, 210, 89, 1],
                [158, 228, 70, 1],
                [187, 255, 133, 1]
            ],
            [
                [0, 44, 43, 1],
                [7, 100, 97, 1],
                [10, 131, 127, 1],
                [255, 61, 0, 1],
                [255, 188, 17, 1]
            ],
            [
                [149, 207, 183, 1],
                [240, 65, 85, 1],
                [242, 242, 111, 1],
                [255, 130, 58, 1],
                [255, 247, 189, 1]
            ],
            [
                [89, 168, 15, 1],
                [158, 213, 76, 1],
                [196, 237, 104, 1],
                [226, 255, 158, 1],
                [240, 242, 221, 1]
            ],
            [
                [54, 42, 44, 1],
                [189, 223, 38, 1],
                [237, 38, 105, 1],
                [238, 189, 97, 1],
                [252, 84, 99, 1]
            ],
            [
                [11, 246, 147, 1],
                [38, 137, 233, 1],
                [233, 26, 157, 1],
                [246, 182, 11, 1],
                [246, 242, 11, 1]
            ],
            [
                [8, 0, 9, 1],
                [65, 242, 221, 1],
                [207, 242, 65, 1],
                [249, 44, 130, 1],
                [252, 241, 30, 1]
            ],
            [
                [198, 164, 154, 1],
                [198, 229, 217, 1],
                [214, 129, 137, 1],
                [233, 78, 119, 1],
                [244, 234, 213, 1]
            ],
            [
                [6, 71, 128, 1],
                [8, 84, 199, 1],
                [160, 194, 222, 1],
                [205, 239, 255, 1],
                [237, 237, 244, 1]
            ],
            [
                [93, 66, 63, 1],
                [124, 87, 83, 1],
                [238, 128, 117, 1],
                [255, 177, 169, 1],
                [255, 233, 231, 1]
            ],
            [
                [59, 129, 131, 1],
                [237, 48, 60, 1],
                [245, 99, 74, 1],
                [250, 208, 137, 1],
                [255, 156, 91, 1]
            ],
            [
                [56, 166, 155, 1],
                [104, 191, 101, 1],
                [204, 217, 106, 1],
                [242, 88, 53, 1],
                [242, 218, 94, 1]
            ],
            [
                [60, 197, 234, 1],
                [70, 70, 70, 1],
                [233, 234, 60, 1],
                [246, 246, 246, 1]
            ],
            [
                [97, 99, 130, 1],
                [102, 36, 91, 1],
                [105, 165, 164, 1],
                [168, 196, 162, 1],
                [229, 234, 164, 1]
            ],
            [
                [10, 191, 188, 1],
                [19, 116, 125, 1],
                [41, 34, 31, 1],
                [252, 53, 76, 1],
                [252, 247, 197, 1]
            ],
            [
                [7, 0, 4, 1],
                [236, 67, 8, 1],
                [252, 129, 10, 1],
                [255, 172, 35, 1],
                [255, 251, 214, 1]
            ],
            [
                [0, 5, 1, 1],
                [8, 138, 19, 1],
                [237, 20, 9, 1],
                [240, 249, 241, 1],
                [247, 249, 21, 1]
            ],
            [
                [64, 197, 132, 1],
                [131, 218, 232, 1],
                [170, 46, 154, 1],
                [251, 35, 137, 1],
                [251, 132, 137, 1]
            ],
            [
                [64, 47, 58, 1],
                [217, 119, 119, 1],
                [255, 198, 158, 1],
                [255, 219, 196, 1]
            ],
            [
                [243, 96, 49, 1],
                [249, 236, 95, 1],
                [255, 102, 0, 1],
                [255, 153, 0, 1],
                [255, 204, 0, 1]
            ],
            [
                [33, 90, 109, 1],
                [45, 45, 41, 1],
                [60, 162, 162, 1],
                [146, 199, 163, 1],
                [223, 236, 230, 1]
            ],
            [
                [10, 42, 63, 1],
                [101, 147, 160, 1],
                [185, 204, 184, 1],
                [219, 21, 34, 1],
                [255, 239, 167, 1]
            ],
            [
                [0, 160, 176, 1],
                [106, 74, 60, 1],
                [204, 51, 63, 1],
                [235, 104, 65, 1],
                [237, 201, 81, 1]
            ],
            [
                [14, 141, 148, 1],
                [67, 77, 83, 1],
                [114, 173, 117, 1],
                [233, 213, 88, 1],
                [255, 171, 7, 1]
            ],
            [
                [94, 159, 163, 1],
                [176, 85, 116, 1],
                [220, 209, 180, 1],
                [248, 126, 123, 1],
                [250, 184, 127, 1]
            ],
            [
                [31, 31, 31, 1],
                [122, 91, 62, 1],
                [205, 189, 174, 1],
                [250, 75, 0, 1],
                [250, 250, 250, 1]
            ],
            [
                [176, 230, 41, 1],
                [180, 35, 16, 1],
                [247, 207, 10, 1],
                [250, 124, 7, 1],
                [252, 231, 13, 1]
            ],
            [
                [94, 65, 47, 1],
                [120, 192, 168, 1],
                [240, 120, 24, 1],
                [240, 168, 48, 1],
                [252, 235, 182, 1]
            ],
            [
                [31, 26, 28, 1],
                [98, 128, 125, 1],
                [134, 158, 138, 1],
                [201, 107, 30, 1],
                [209, 205, 178, 1]
            ],
            [
                [40, 60, 0, 1],
                [100, 153, 125, 1],
                [237, 143, 69, 1],
                [241, 169, 48, 1],
                [254, 204, 109, 1]
            ],
            [
                [37, 2, 15, 1],
                [143, 143, 143, 1],
                [158, 30, 76, 1],
                [236, 236, 236, 1],
                [255, 17, 104, 1]
            ],
            [
                [207, 108, 116, 1],
                [244, 93, 120, 1],
                [255, 112, 136, 1],
                [255, 130, 153, 1],
                [255, 187, 193, 1]
            ],
            [
                [0, 0, 0, 1],
                [12, 13, 5, 1],
                [168, 171, 132, 1],
                [198, 201, 157, 1],
                [231, 235, 176, 1]
            ],
            [
                [0, 170, 255, 1],
                [170, 0, 255, 1],
                [170, 255, 0, 1],
                [255, 0, 170, 1],
                [255, 170, 0, 1]
            ],
            [
                [78, 150, 137, 1],
                [126, 208, 214, 1],
                [135, 214, 155, 1],
                [195, 255, 104, 1],
                [244, 252, 232, 1]
            ],
            [
                [10, 10, 10, 1],
                [227, 246, 255, 1],
                [255, 20, 87, 1],
                [255, 216, 125, 1]
            ],
            [
                [51, 51, 153, 1],
                [102, 153, 204, 1],
                [153, 204, 255, 1],
                [255, 0, 51, 1],
                [255, 204, 0, 1]
            ],
            [
                [23, 22, 92, 1],
                [190, 191, 158, 1],
                [216, 210, 153, 1],
                [229, 228, 218, 1],
                [245, 224, 56, 1]
            ],
            [
                [49, 99, 64, 1],
                [96, 158, 77, 1],
                [159, 252, 88, 1],
                [195, 252, 88, 1],
                [242, 252, 88, 1]
            ],
            [
                [92, 88, 99, 1],
                [168, 81, 99, 1],
                [180, 222, 193, 1],
                [207, 255, 221, 1],
                [255, 31, 76, 1]
            ],
            [
                [61, 67, 7, 1],
                [161, 253, 17, 1],
                [225, 244, 56, 1],
                [244, 251, 196, 1],
                [255, 208, 79, 1]
            ],
            [
                [0, 205, 172, 1],
                [2, 170, 176, 1],
                [22, 147, 165, 1],
                [127, 255, 36, 1],
                [195, 255, 104, 1]
            ],
            [
                [0, 203, 231, 1],
                [0, 218, 60, 1],
                [223, 21, 26, 1],
                [244, 243, 40, 1],
                [253, 134, 3, 1]
            ],
            [
                [34, 104, 136, 1],
                [57, 142, 182, 1],
                [255, 162, 0, 1],
                [255, 214, 0, 1],
                [255, 245, 0, 1]
            ],
            [
                [3, 13, 79, 1],
                [206, 236, 239, 1],
                [231, 237, 234, 1],
                [251, 12, 6, 1],
                [255, 197, 44, 1]
            ],
            [
                [253, 255, 0, 1],
                [255, 0, 0, 1],
                [255, 90, 0, 1],
                [255, 114, 0, 1],
                [255, 167, 0, 1]
            ],
            [
                [108, 66, 18, 1],
                [179, 0, 176, 1],
                [183, 255, 55, 1],
                [255, 124, 69, 1],
                [255, 234, 155, 1]
            ],
            [
                [0, 4, 49, 1],
                [59, 69, 58, 1],
                [90, 224, 151, 1],
                [204, 46, 9, 1],
                [255, 253, 202, 1]
            ],
            [
                [59, 45, 56, 1],
                [188, 189, 172, 1],
                [207, 190, 39, 1],
                [240, 36, 117, 1],
                [242, 116, 53, 1]
            ],
            [
                [101, 145, 155, 1],
                [120, 185, 168, 1],
                [168, 212, 148, 1],
                [242, 177, 73, 1],
                [244, 229, 97, 1]
            ],
            [
                [0, 193, 118, 1],
                [136, 193, 0, 1],
                [250, 190, 40, 1],
                [255, 0, 60, 1],
                [255, 138, 0, 1]
            ],
            [
                [110, 37, 63, 1],
                [165, 199, 185, 1],
                [199, 94, 106, 1],
                [241, 245, 244, 1],
                [251, 236, 236, 1]
            ],
            [
                [39, 112, 140, 1],
                [111, 191, 162, 1],
                [190, 191, 149, 1],
                [227, 208, 116, 1],
                [255, 180, 115, 1]
            ],
            [
                [62, 72, 76, 1],
                [82, 91, 96, 1],
                [105, 158, 81, 1],
                [131, 178, 107, 1],
                [242, 232, 97, 1]
            ],
            [
                [248, 135, 46, 1],
                [252, 88, 12, 1],
                [252, 107, 10, 1],
                [253, 202, 73, 1],
                [255, 169, 39, 1]
            ],
            [
                [83, 119, 122, 1],
                [84, 36, 55, 1],
                [192, 41, 66, 1],
                [217, 91, 67, 1],
                [236, 208, 120, 1]
            ],
            [
                [41, 136, 140, 1],
                [54, 19, 0, 1],
                [162, 121, 15, 1],
                [188, 53, 33, 1],
                [255, 208, 130, 1]
            ],
            [
                [10, 186, 181, 1],
                [58, 203, 199, 1],
                [106, 219, 216, 1],
                [153, 236, 234, 1],
                [201, 252, 251, 1]
            ],
            [
                [8, 158, 42, 1],
                [9, 42, 100, 1],
                [90, 204, 191, 1],
                [229, 4, 4, 1],
                [251, 235, 175, 1]
            ],
            [
                [187, 187, 136, 1],
                [204, 198, 141, 1],
                [238, 170, 136, 1],
                [238, 194, 144, 1],
                [238, 221, 153, 1]
            ],
            [
                [121, 219, 204, 1],
                [134, 78, 65, 1],
                [234, 169, 167, 1],
                [242, 199, 196, 1],
                [248, 245, 226, 1]
            ],
            [
                [96, 136, 213, 1],
                [114, 170, 222, 1],
                [157, 200, 233, 1],
                [192, 222, 245, 1],
                [217, 239, 244, 1]
            ],
            [
                [30, 30, 30, 1],
                [177, 255, 0, 1],
                [209, 210, 212, 1],
                [242, 240, 240, 1]
            ],
            [
                [255, 102, 0, 1],
                [255, 153, 0, 1],
                [255, 204, 0, 1],
                [255, 255, 204, 1],
                [255, 255, 255, 1]
            ],
            [
                [35, 15, 43, 1],
                [130, 179, 174, 1],
                [188, 227, 197, 1],
                [235, 235, 188, 1],
                [242, 29, 65, 1]
            ],
            [
                [212, 238, 94, 1],
                [225, 237, 185, 1],
                [240, 242, 235, 1],
                [244, 250, 210, 1],
                [255, 66, 66, 1]
            ],
            [
                [20, 32, 71, 1],
                [168, 95, 59, 1],
                [247, 92, 92, 1],
                [255, 255, 255, 1]
            ],
            [
                [63, 184, 240, 1],
                [80, 208, 240, 1],
                [196, 251, 93, 1],
                [224, 240, 240, 1],
                [236, 255, 224, 1]
            ],
            [
                [185, 222, 81, 1],
                [209, 227, 137, 1],
                [224, 72, 145, 1],
                [225, 183, 237, 1],
                [245, 225, 226, 1]
            ],
            [
                [185, 222, 81, 1],
                [209, 227, 137, 1],
                [224, 72, 145, 1],
                [225, 183, 237, 1],
                [245, 225, 226, 1]
            ],
            [
                [17, 68, 34, 1],
                [51, 170, 170, 1],
                [51, 221, 51, 1],
                [221, 238, 68, 1],
                [221, 238, 187, 1]
            ],
            [
                [46, 13, 35, 1],
                [245, 72, 40, 1],
                [247, 128, 60, 1],
                [248, 228, 193, 1],
                [255, 237, 191, 1]
            ],
            [
                [204, 243, 144, 1],
                [224, 224, 90, 1],
                [247, 196, 31, 1],
                [252, 147, 10, 1],
                [255, 0, 61, 1]
            ],
            [
                [18, 18, 18, 1],
                [255, 89, 56, 1],
                [255, 255, 255, 1]
            ],
            [
                [53, 38, 48, 1],
                [85, 72, 101, 1],
                [205, 91, 81, 1],
                [233, 223, 204, 1],
                [243, 163, 107, 1]
            ],
            [
                [236, 250, 1, 1],
                [236, 250, 2, 1],
                [247, 220, 2, 1],
                [248, 227, 113, 1],
                [250, 173, 9, 1]
            ],
            [
                [77, 129, 121, 1],
                [161, 129, 121, 1],
                [236, 85, 101, 1],
                [249, 220, 159, 1],
                [254, 157, 93, 1]
            ],
            [
                [4, 0, 4, 1],
                [65, 61, 61, 1],
                [75, 0, 15, 1],
                [200, 255, 0, 1],
                [250, 2, 60, 1]
            ],
            [
                [66, 50, 56, 1],
                [179, 112, 45, 1],
                [200, 209, 151, 1],
                [235, 33, 56, 1],
                [245, 222, 140, 1]
            ],
            [
                [143, 153, 36, 1],
                [172, 201, 95, 1],
                [241, 57, 109, 1],
                [243, 255, 235, 1],
                [253, 96, 129, 1]
            ],
            [
                [18, 18, 18, 1],
                [23, 122, 135, 1],
                [250, 245, 240, 1],
                [255, 180, 143, 1]
            ],
            [
                [67, 197, 210, 1],
                [182, 108, 97, 1],
                [241, 155, 140, 1],
                [254, 247, 237, 1],
                [255, 234, 215, 1]
            ],
            [
                [78, 205, 196, 1],
                [85, 98, 112, 1],
                [196, 77, 88, 1],
                [199, 244, 100, 1],
                [255, 107, 107, 1]
            ],
            [
                [0, 0, 0, 1],
                [137, 161, 160, 1],
                [154, 227, 226, 1],
                [255, 71, 103, 1],
                [255, 118, 5, 1]
            ],
            [
                [248, 200, 221, 1],
                [253, 231, 120, 1],
                [255, 61, 61, 1],
                [255, 92, 143, 1],
                [255, 103, 65, 1]
            ],
            [
                [23, 138, 132, 1],
                [145, 145, 145, 1],
                [229, 255, 125, 1],
                [235, 143, 172, 1],
                [255, 255, 255, 1]
            ],
            [
                [73, 112, 138, 1],
                [136, 171, 194, 1],
                [202, 255, 66, 1],
                [208, 224, 235, 1],
                [235, 247, 248, 1]
            ],
            [
                [51, 222, 245, 1],
                [122, 245, 51, 1],
                [245, 51, 145, 1],
                [245, 161, 52, 1],
                [248, 248, 101, 1]
            ],
            [
                [57, 13, 45, 1],
                [172, 222, 178, 1],
                [225, 234, 181, 1],
                [237, 173, 158, 1],
                [254, 75, 116, 1]
            ],
            [
                [192, 107, 129, 1],
                [233, 22, 67, 1],
                [245, 175, 145, 1],
                [247, 201, 182, 1],
                [249, 210, 182, 1]
            ],
            [
                [131, 196, 192, 1],
                [156, 100, 53, 1],
                [190, 215, 62, 1],
                [237, 66, 98, 1],
                [240, 233, 226, 1]
            ],
            [
                [136, 145, 136, 1],
                [191, 218, 223, 1],
                [207, 246, 247, 1],
                [233, 26, 82, 1],
                [237, 242, 210, 1]
            ],
            [
                [64, 44, 56, 1],
                [209, 212, 169, 1],
                [227, 164, 129, 1],
                [245, 215, 165, 1],
                [255, 111, 121, 1]
            ],
            [
                [93, 65, 87, 1],
                [131, 134, 137, 1],
                [168, 202, 186, 1],
                [202, 215, 178, 1],
                [235, 227, 170, 1]
            ],
            [
                [0, 168, 198, 1],
                [64, 192, 203, 1],
                [143, 190, 0, 1],
                [174, 226, 57, 1],
                [249, 242, 231, 1]
            ],
            [
                [0, 204, 190, 1],
                [9, 166, 163, 1],
                [157, 191, 175, 1],
                [237, 235, 201, 1],
                [252, 249, 216, 1]
            ],
            [
                [0, 205, 172, 1],
                [2, 170, 176, 1],
                [22, 147, 165, 1],
                [127, 255, 36, 1],
                [195, 255, 104, 1]
            ],
            [
                [51, 39, 23, 1],
                [107, 172, 191, 1],
                [157, 188, 188, 1],
                [240, 240, 175, 1],
                [255, 55, 15, 1]
            ],
            [
                [51, 51, 53, 1],
                [101, 99, 106, 1],
                [139, 135, 149, 1],
                [193, 190, 200, 1],
                [233, 232, 238, 1]
            ],
            [
                [17, 118, 109, 1],
                [65, 9, 54, 1],
                [164, 11, 84, 1],
                [228, 111, 10, 1],
                [240, 179, 0, 1]
            ],
            [
                [73, 10, 61, 1],
                [138, 155, 15, 1],
                [189, 21, 80, 1],
                [233, 127, 2, 1],
                [248, 202, 0, 1]
            ],
            [
                [71, 162, 145, 1],
                [144, 79, 135, 1],
                [213, 28, 122, 1],
                [219, 213, 139, 1],
                [244, 127, 143, 1]
            ],
            [
                [55, 191, 230, 1],
                [169, 232, 250, 1],
                [186, 255, 21, 1],
                [211, 255, 106, 1],
                [247, 239, 236, 1]
            ],
            [
                [69, 173, 168, 1],
                [84, 121, 128, 1],
                [89, 79, 79, 1],
                [157, 224, 173, 1],
                [229, 252, 194, 1]
            ],
            [
                [248, 241, 224, 1],
                [249, 246, 241, 1],
                [250, 244, 227, 1],
                [251, 106, 79, 1],
                [255, 193, 150, 1]
            ],
            [
                [0, 98, 125, 1],
                [1, 64, 87, 1],
                [51, 50, 49, 1],
                [66, 153, 15, 1],
                [255, 255, 255, 1]
            ],
            [
                [52, 17, 57, 1],
                [53, 150, 104, 1],
                [60, 50, 81, 1],
                [168, 212, 111, 1],
                [255, 237, 144, 1]
            ],
            [
                [0, 153, 137, 1],
                [163, 169, 72, 1],
                [206, 24, 54, 1],
                [237, 185, 46, 1],
                [248, 89, 49, 1]
            ],
            [
                [26, 31, 30, 1],
                [108, 189, 181, 1],
                [147, 204, 198, 1],
                [200, 214, 191, 1],
                [227, 223, 186, 1]
            ],
            [
                [165, 222, 190, 1],
                [183, 234, 201, 1],
                [251, 178, 163, 1],
                [252, 37, 55, 1],
                [255, 215, 183, 1]
            ],
            [
                [26, 20, 14, 1],
                [90, 142, 161, 1],
                [204, 65, 65, 1],
                [255, 255, 255, 1]
            ],
            [
                [51, 51, 51, 1],
                [111, 111, 111, 1],
                [204, 204, 204, 1],
                [255, 100, 0, 1],
                [255, 255, 255, 1]
            ],
            [
                [51, 145, 148, 1],
                [167, 2, 103, 1],
                [241, 12, 73, 1],
                [246, 216, 107, 1],
                [251, 107, 65, 1]
            ],
            [
                [31, 3, 51, 1],
                [31, 57, 77, 1],
                [39, 130, 92, 1],
                [112, 179, 112, 1],
                [171, 204, 120, 1]
            ],
            [
                [209, 242, 165, 1],
                [239, 250, 180, 1],
                [245, 105, 145, 1],
                [255, 159, 128, 1],
                [255, 196, 140, 1]
            ],
            [
                [60, 54, 79, 1],
                [109, 124, 157, 1],
                [124, 144, 179, 1],
                [149, 181, 194, 1],
                [185, 224, 220, 1]
            ],
            [
                [35, 179, 218, 1],
                [153, 214, 241, 1],
                [168, 153, 241, 1],
                [208, 89, 218, 1],
                [248, 78, 150, 1]
            ],
            [
                [85, 66, 54, 1],
                [96, 185, 154, 1],
                [211, 206, 61, 1],
                [241, 239, 165, 1],
                [247, 120, 37, 1]
            ],
            [
                [20, 20, 20, 1],
                [177, 198, 204, 1],
                [255, 239, 94, 1],
                [255, 255, 255, 1]
            ],
            [
                [136, 238, 208, 1],
                [202, 224, 129, 1],
                [239, 67, 53, 1],
                [242, 205, 79, 1],
                [246, 139, 54, 1]
            ],
            [
                [53, 38, 29, 1],
                [95, 79, 69, 1],
                [151, 123, 105, 1],
                [206, 173, 142, 1],
                [253, 115, 26, 1]
            ],
            [
                [68, 66, 89, 1],
                [159, 189, 166, 1],
                [219, 101, 68, 1],
                [240, 145, 67, 1],
                [252, 177, 71, 1]
            ],
            [
                [191, 208, 0, 1],
                [196, 60, 39, 1],
                [233, 60, 31, 1],
                [242, 83, 58, 1],
                [242, 240, 235, 1]
            ],
            [
                [43, 43, 43, 1],
                [53, 54, 52, 1],
                [230, 50, 75, 1],
                [242, 227, 198, 1],
                [255, 198, 165, 1]
            ],
            [
                [23, 20, 38, 1],
                [26, 15, 12, 1],
                [207, 207, 207, 1],
                [240, 240, 240, 1],
                [255, 77, 148, 1]
            ],
            [
                [28, 1, 19, 1],
                [107, 1, 3, 1],
                [163, 0, 6, 1],
                [194, 26, 1, 1],
                [240, 60, 2, 1]
            ],
            [
                [10, 10, 10, 1],
                [140, 97, 70, 1],
                [214, 179, 156, 1],
                [242, 76, 61, 1],
                [255, 255, 255, 1]
            ],
            [
                [46, 13, 35, 1],
                [245, 72, 40, 1],
                [247, 128, 60, 1],
                [248, 228, 193, 1],
                [255, 237, 191, 1]
            ],
            [
                [0, 62, 95, 1],
                [0, 67, 132, 1],
                [22, 147, 165, 1],
                [150, 207, 234, 1],
                [247, 249, 114, 1]
            ],
            [
                [66, 29, 56, 1],
                [87, 0, 69, 1],
                [190, 226, 232, 1],
                [205, 255, 24, 1],
                [255, 8, 90, 1]
            ],
            [
                [47, 59, 97, 1],
                [121, 128, 146, 1],
                [187, 235, 185, 1],
                [233, 236, 229, 1],
                [255, 103, 89, 1]
            ],
            [
                [58, 17, 28, 1],
                [87, 73, 81, 1],
                [131, 152, 142, 1],
                [188, 222, 165, 1],
                [230, 249, 188, 1]
            ],
            [
                [147, 193, 196, 1],
                [198, 182, 204, 1],
                [242, 202, 174, 1],
                [250, 12, 195, 1],
                [255, 123, 15, 1]
            ],
            [
                [255, 3, 149, 1],
                [255, 9, 3, 1],
                [255, 139, 3, 1],
                [255, 216, 3, 1],
                [255, 251, 3, 1]
            ],
            [
                [4, 0, 4, 1],
                [254, 26, 138, 1],
                [254, 53, 26, 1],
                [254, 143, 26, 1],
                [254, 240, 26, 1]
            ],
            [
                [125, 173, 154, 1],
                [196, 199, 169, 1],
                [249, 213, 177, 1],
                [254, 126, 142, 1],
                [255, 62, 97, 1]
            ],
            [
                [69, 38, 50, 1],
                [145, 32, 77, 1],
                [226, 247, 206, 1],
                [228, 132, 74, 1],
                [232, 191, 86, 1]
            ],
            [
                [0, 0, 0, 1],
                [38, 173, 228, 1],
                [77, 188, 233, 1],
                [209, 231, 81, 1],
                [255, 255, 255, 1]
            ],
            [
                [44, 87, 133, 1],
                [209, 19, 47, 1],
                [235, 241, 247, 1],
                [237, 214, 130, 1]
            ],
            [
                [92, 172, 196, 1],
                [140, 209, 157, 1],
                [206, 232, 121, 1],
                [252, 182, 83, 1],
                [255, 82, 84, 1]
            ],
            [
                [58, 68, 8, 1],
                [74, 88, 7, 1],
                [125, 146, 22, 1],
                [157, 222, 13, 1],
                [199, 237, 14, 1]
            ],
            [
                [22, 147, 167, 1],
                [200, 207, 2, 1],
                [204, 12, 57, 1],
                [230, 120, 30, 1],
                [248, 252, 193, 1]
            ],
            [
                [59, 12, 44, 1],
                [210, 255, 31, 1],
                [250, 244, 224, 1],
                [255, 106, 0, 1],
                [255, 195, 0, 1]
            ],
            [
                [44, 13, 26, 1],
                [52, 158, 151, 1],
                [200, 206, 19, 1],
                [222, 26, 114, 1],
                [248, 245, 193, 1]
            ],
            [
                [28, 20, 13, 1],
                [203, 232, 107, 1],
                [242, 233, 225, 1],
                [255, 255, 255, 1]
            ],
            [
                [75, 88, 191, 1],
                [161, 206, 247, 1],
                [247, 255, 133, 1],
                [255, 54, 134, 1]
            ],
            [
                [74, 95, 103, 1],
                [92, 55, 75, 1],
                [204, 55, 71, 1],
                [209, 92, 87, 1],
                [217, 212, 168, 1]
            ]
        ];
        e.prototype.getPalette = function (t) {
            return n(h[Math.floor(t)])
        }, e.prototype.getCount = function () {
            return h.length
        }, e.prototype.getRandomPalette = function () {
            var t = Math.floor(h.length * Math.random());
            return this.getPalette(t)
        };
        var u = new e;
        s.exports = u
    }), define("famous-css/StyleManager", ["require", "exports", "module"], function (t, s) {
        function e() {
            for (x in document.styleSheets) {
                var t = document.styleSheets[x], s = t.cssRules ? t.cssRules : t.rules;
                if (s)for (i = 0; i < s.length; i++) {
                    var e = s[i].selectorText;
                    if (e in n)for (key in n[e])"height" == key ? s[i].style.height = n[e][key] : "width" == key ? s[i].style.width = n[e][key] : "line-height" == key ? s[i].style.lineHeight = n[e][key] : "margin-top" == key ? s[i].style.marginTop = n[e][key] : "margin-bottom" == key ? s[i].style.marginBottom = n[e][key] : "margin-right" == key ? s[i].style.marginRight = n[e][key] : "min-height" == key ? s[i].style.minHeight = n[e][key] : "left" == key ? s[i].style.left = n[e][key] : "right" == key ? s[i].style.right = n[e][key] : "padding" == key ? s[i].style.padding = n[e][key] : "top" == key ? s[i].style.top = n[e][key] : "bottom" == key ? s[i].style.bottom = n[e][key] : "text-shadow" == key ? s[i].style.textShadow = n[e][key] : "font-family" == key ? s[i].style.fontFamily = n[e][key] : "font-size" == key ? s[i].style.fontSize = n[e][key] : "background-size" == key ? s[i].style.backgroundSize = n[e][key] : "margin" == key ? s[i].style.margin = n[e][key] : "padding-left" == key ? s[i].style.paddingLeft = n[e][key] : "padding-right" == key ? s[i].style.paddingRight = n[e][key] : "padding-top" == key ? s[i].style.paddingTop = n[e][key] : "padding-bottom" == key ? s[i].style.paddingBottom = n[e][key] : "letter-spacing" == key ? s[i].style.letterSpacing = n[e][key] : "margin-left" == key ? s[i].style.marginLeft = n[e][key] : "min-width" == key ? s[i].style.minWidth = n[e][key] : "max-height" == key ? s[i].style.maxHeight = n[e][key] : "border-top" == key ? s[i].style.borderTop = n[e][key] : "border" == key ? s[i].style.border = n[e][key] : "-webkit-perspective" == key ? s[i].style["-webkit-perspective"] = n[e][key] : "perspective" == key ? s[i].style.perspective = n[e][key] : "background" == key ? (s[i].style["background-color"] = n[e][key], s[i].style.background = n[e][key]) : "box-shadow" == key ? (s[i].style["-webkit-box-shadow"] = n[e][key], s[i].style["-moz-box-shadow"] = n[e][key], s[i].style["box-shadow"] = n[e][key]) : "border-top-right-radius" == key ? (s[i].style["border-top-right-radius"] = n[e][key], s[i].style["-webkit-border-top-right-radius"] = n[e][key], s[i].style["-moz-border-radius-topright"] = n[e][key]) : "border-radius" == key ? (s[i].style["-moz-border-radius"] = n[e][key], s[i].style["-webkit-border-radius"] = n[e][key], s[i].style.borderRadius = n[e][key]) : console.log("Cant set CSS variable. No function associated with: " + key)
                }
            }
            n = {}, s = null, t = null
        }

        function o(t, i, s) {
            t in n || (n[t] = {}), s = s.toString().toLowerCase(), s.indexOf("rgb") < 0 && s.indexOf("px") < 0 && s.indexOf("%") < 0 && s.indexOf(!1) && (s += "px"), n[t][i] = s
        }

        var n = {};
        s.setStyles = e, s.setRule = o
    }), define("famous-css/StyleSheet", ["require", "exports", "module", "./StyleManager"], function (t, i) {
        function s() {
            e.setRule("body", "font-size", .02 * window.innerWidth), e.setRule("body", "background", "#000000"), e.setStyles()
        }

        var e = t("./StyleManager");
        i.buildStyleSheet = s
    }), define("famous-generative/Box", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous/RenderNode"], function (t, i, s) {
        function e(t, i, s) {
            this.nodes = [], this.result = [], this.top = new o({size: [t, s]}), this.bottom = new o({size: [t, s]}), this.left = new o({size: [s, i]}), this.right = new o({size: [s, i]}), this.front = new o({size: [t, i]}), this.back = new o({size: [t, i]}), this.top.addClass("box-top"), this.bottom.addClass("box-bottom"), this.left.addClass("box-left"), this.right.addClass("box-right"), this.front.addClass("box-front"), this.back.addClass("box-back"), this.top.setProperties(r.backfaceVisible(!0)), this.bottom.setProperties(r.backfaceVisible(!0)), this.right.setProperties(r.backfaceVisible(!0)), this.left.setProperties(r.backfaceVisible(!0)), this.front.setProperties(r.backfaceVisible(!0)), this.back.setProperties(r.backfaceVisible(!0)), this.sides = [this.top, this.bottom, this.left, this.right, this.front, this.back], this.result.push({transform: n.multiply(n.translate(0, 0, .5 * i), n.rotateX(.5 * Math.PI)), opacity: 1, target: this.top.render()}), this.result.push({transform: n.multiply(n.translate(0, 0, .5 * i), n.rotateX(.5 * -Math.PI)), opacity: 1, target: this.bottom.render()}), this.result.push({transform: n.multiply(n.translate(0, 0, .5 * t), n.rotateY(.5 * -Math.PI)), opacity: 1, target: this.left.render()}), this.result.push({transform: n.multiply(n.translate(0, 0, .5 * t), n.rotateY(.5 * Math.PI)), opacity: 1, target: this.right.render()}), this.result.push({transform: n.translate(0, 0, .5 * s), opacity: 1, target: this.front.render()}), this.result.push({transform: n.translate(0, 0, .5 * -s), opacity: 1, target: this.back.render()})
        }

        var o = t("famous/Surface"), n = t("famous/Matrix"), r = t("famous-utils/Utils");
        t("famous/RenderNode"), e.prototype.setColor = function (t, i, s, e) {
            for (var o = 0; o < this.sides.length; o++)this.sides[o].setProperties({backgroundColor: r.color(t, i, s, e)})
        }, e.prototype.setFrontColor = function (t, i, s, e) {
            this.front.setProperties(r.backgroundColor(t, i, s, e))
        }, e.prototype.setBackColor = function (t, i, s, e) {
            this.back.setProperties(r.backgroundColor(t, i, s, e))
        }, e.prototype.setRightColor = function (t, i, s, e) {
            this.right.setProperties(r.backgroundColor(t, i, s, e))
        }, e.prototype.setLeftColor = function (t, i, s, e) {
            this.left.setProperties(r.backgroundColor(t, i, s, e))
        }, e.prototype.setTopColor = function (t, i, s, e) {
            this.top.setProperties(r.backgroundColor(t, i, s, e))
        }, e.prototype.setBottomColor = function (t, i, s, e) {
            this.bottom.setProperties(r.backgroundColor(t, i, s, e))
        }, e.prototype.render = function () {
            return this.result
        }, s.exports = e
    }), define("famous-generative/Axis", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "./Box"], function (t, i, s) {
        function e() {
            this.radius = 256, this.box = new r(this.radius, this.radius, this.radius), this.xyPlane = new o({size: [this.radius, this.radius]}), this.xyPlane.addClass("plane-xy"), this.xyTransform = n.rotateX(Math.PI / 2), this.zxPlane = new o({size: [this.radius, this.radius]}), this.zxPlane.addClass("plane-zx"), this.zxTransform = n.rotateY(Math.PI / 2), this.yzPlane = new o({size: [this.radius, this.radius]}), this.yzPlane.addClass("plane-yz"), this.yzTransform = n.rotateZ(Math.PI / 2), this.transform = n.identity, this.opacity = 1, this.results = [], this.results.push({transform: this.transform, opacity: this.opacity, target: this.box.render()}), this.results.push({transform: this.xyTransform, opacity: this.opacity, target: this.xyPlane.render()}), this.results.push({transform: this.zxTransform, opacity: this.opacity, target: this.zxPlane.render()}), this.results.push({transform: this.yzTransform, opacity: this.opacity, target: this.yzPlane.render()})
        }

        var o = t("famous/Surface"), n = t("famous/Matrix"), r = t("./Box");
        e.prototype.render = function () {
            return this.results
        }, s.exports = e
    }), define("famous-generative/Line", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous/RenderNode", "famous-math/Quaternion", "famous-math/Vector"], function (t, i, s) {
        function e(t) {
            t || (t = {}), this.result = [], this.width = t.width || 2, this.opacity = t.opacity || 1, this.calculateTransform("undefined" == typeof t.x1 ? 0 : t.x1, "undefined" == typeof t.y1 ? 0 : t.y1, "undefined" == typeof t.z1 ? 0 : t.z1, "undefined" == typeof t.x2 ? 0 : t.x2, "undefined" == typeof t.y2 ? 0 : t.y2, "undefined" == typeof t.z2 ? 0 : t.z2), this.halfPi = .5 * Math.PI, this.surface = new o({size: [500, 500]}), this.surface.addClass("line"), this.surface.setProperties({"background-color": "rgba(255, 255, 255, 1.0)"})
        }

        var o = t("famous/Surface"), n = t("famous/Matrix"), r = t("famous-utils/Utils");
        t("famous/RenderNode"), t("famous-math/Quaternion"), t("famous-math/Vector"), e.prototype.setProperties = function (t) {
            this.surface.setProperties(t)
        }, e.prototype.setLineWidth = function (t) {
            return this.width = t, this
        }, e.prototype.getLineWidth = function () {
            return this.width
        }, e.prototype.setColor = function (t, i, s, e) {
            return this.surface.setProperties(r.backgroundColor(t, i, s, 1)), this.opacity = e, this
        }, e.prototype.setOpacity = function (t) {
            return this.opacity = t, this
        }, e.prototype.render = function () {
            var t = {transform: this.transform, opacity: this.opacity, origin: [.5, .5], target: this.surface.render()};
            return t
        }, e.prototype.setP1 = function (t, i, s) {
            this.calculateTransform(t, i, s, this.x2, this.y2, this.z2)
        }, e.prototype.setP2 = function (t, i, s) {
            this.calculateTransform(this.x1, this.y1, this.z1, t, i, s)
        }, e.prototype.set = function (t, i, s, e, o, n) {
            this.calculateTransform(t, i, s, e, o, n)
        }, e.prototype.setX1 = function (t) {
            this.calculateTransform(t, this.y1, this.z1, this.x2, this.y2, this.z2)
        }, e.prototype.setY1 = function (t) {
            this.calculateTransform(this.x1, t, this.z1, this.x2, this.y2, this.z2)
        }, e.prototype.setZ1 = function (t) {
            this.calculateTransform(this.x1, this.y1, t, this.x2, this.y2, this.z2)
        }, e.prototype.setX2 = function (t) {
            this.calculateTransform(this.x1, this.y1, this.z1, t, this.y2, this.z2)
        }, e.prototype.setY2 = function (t) {
            this.calculateTransform(this.x1, this.y1, this.z1, this.x2, t, this.z2)
        }, e.prototype.setZ2 = function (t) {
            this.calculateTransform(this.x1, this.y1, this.z1, this.x2, this.y2, t)
        }, e.prototype.setX = function (t, i) {
            this.calculateTransform(t, this.y1, this.z1, i, this.y2, this.z2)
        }, e.prototype.setY = function (t, i) {
            this.calculateTransform(this.x1, t, this.z1, this.x2, i, this.z2)
        }, e.prototype.setZ = function (t, i) {
            this.calculateTransform(this.x1, this.y1, t, this.x2, this.y2, i)
        }, e.prototype.getX1 = function () {
            return this.x1
        }, e.prototype.getX2 = function () {
            return this.x2
        }, e.prototype.getY1 = function () {
            return this.y1
        }, e.prototype.getY2 = function () {
            return this.y2
        }, e.prototype.getZ1 = function () {
            return this.z1
        }, e.prototype.getZ2 = function () {
            return this.z2
        }, e.prototype.getX = function () {
            return[this.x1, this.x2]
        }, e.prototype.getY = function () {
            return[this.y1, this.y2]
        }, e.prototype.getZ = function () {
            return[this.z1, this.z2]
        }, e.prototype.getP1 = function () {
            return[this.x1, this.y1, this.z1]
        }, e.prototype.getP2 = function () {
            return[this.x2, this.y2, this.z2]
        }, e.prototype.getLength = function () {
            return this.length
        }, e.prototype.calculateTransform = function (t, i, s, e, o, a) {
            this.x1 = t, this.y1 = i, this.z1 = s, this.x2 = e, this.y2 = o, this.z2 = a, this.length = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2), this.lengthX = this.x2 - this.x1, this.lengthY = this.y2 - this.y1, this.lengthZ = this.z2 - this.z1, this.centerX = .5 * this.lengthX + this.x1, this.centerY = .5 * this.lengthY + this.y1, this.centerZ = .5 * this.lengthZ + this.z1, this.angleZ = Math.atan2(this.lengthY, this.lengthX), this.angleY = Math.asin(this.lengthZ / this.length), isNaN(this.angleZ) && (this.angleZ = .5 * Math.PI), isNaN(this.angleY) && (this.angleY = .5 * Math.PI), this.transform = n.multiply(n.identity, n.rotateY(-this.angleY)), this.transform = n.multiply(this.transform, n.rotateZ(this.angleZ)), this.transform = n.multiply(this.transform, n.translate(this.centerX, this.centerY, this.centerZ)), this.transform = n.multiply(n.scale(this.length / 500, this.width / 500, 1), this.transform)
        }, s.exports = e
    }), define("famous-generative/DebugTriangle", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous/RenderNode", "famous-math/Quaternion", "famous-math/Vector", "./Line"], function (t, i, s) {
        function e(t) {
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.opacity = t.opacity || 1, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o({size: [this.size, this.size]}), this.surface.addClass("DebugTriangle"), this.surface.setProperties({"background-color": "rgba(0, 0, 0, 0.0)", "border-radius": "0px", "border-top": "0px solid", "border-right": .5 * this.size + "px solid red", "border-left": .5 * this.size + "px solid blue", "border-bottom": this.size + "px solid rgba(255, 255, 255, .75)"}), this.line0 = new h({x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2, width: 2, opacity: .5}), this.line1 = new h({x1: this.x2, y1: this.y2, x2: this.x3, y2: this.y3, width: 2, opacity: .5}), this.line2 = new h({x1: this.x3, y1: this.y3, x2: this.x1, y2: this.y1, width: 2, opacity: .5}), this.line0.setLineWidth(4);
            var i = "font-size: 24px; ";
            i += "line-height: 30px; ", i += "margin: 0px; ";
            var s = .75, e = 30;
            this.p1Surf = new o({size: [e, e]}), this.p1Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p1Surf.setProperties(r.borderRadius(e)), this.p1Surf.setContent('<p class="triangleIndex" style="' + i + '">' + 1 + "</p>"), this.p1Surf.mtx = n.identity, this.p1Surf.opacity = s, this.p2Surf = new o({size: [e, e]}), this.p2Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p2Surf.setProperties(r.borderRadius(e)), this.p2Surf.setContent('<p class="triangleIndex" style="' + i + '">' + 2 + "</p>"), this.p2Surf.mtx = n.identity, this.p2Surf.opacity = s, this.p3Surf = new o({size: [e, e]}), this.p3Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p3Surf.setProperties(r.borderRadius(e)), this.p3Surf.setContent('<p class="triangleIndex" style="' + i + '">' + 3 + "</p>"), this.p3Surf.mtx = n.identity, this.p3Surf.opacity = s, this.calculateTransform()
        }

        var o = t("famous/Surface"), n = t("famous/Matrix"), r = t("famous-utils/Utils");
        t("famous/RenderNode"), t("famous-math/Quaternion");
        var a = t("famous-math/Vector"), h = t("./Line");
        e.prototype.setProperties = function (t) {
            this.surface.setProperties(t)
        }, e.prototype.setColor = function (t, i, s, e) {
            return this.surface.setProperties(r.backgroundColor(t, i, s, 1)), this.opacity = e, this
        }, e.prototype.setOpacity = function (t) {
            return this.opacity = t, this
        }, e.prototype.render = function () {
            var t = [
                {transform: this.mtx, opacity: this.opacity, origin: [.5, .5], target: this.surface.render()}
            ];
            return t.push(this.line0.render()), t.push(this.line1.render()), t.push(this.line2.render()), t.push({transform: this.p1Surf.mtx, opacity: this.p1Surf.opacity, origin: [.5, .5], target: this.p1Surf.render()}), t.push({transform: this.p2Surf.mtx, opacity: this.p2Surf.opacity, origin: [.5, .5], target: this.p2Surf.render()}), t.push({transform: this.p3Surf.mtx, opacity: this.p3Surf.opacity, origin: [.5, .5], target: this.p3Surf.render()}), t
        }, e.prototype.setP1 = function (t, i, s) {
            this.set(t, i, s, this.x2, this.y2, this.z2, this.x3, this.y3, this.z3)
        }, e.prototype.setP2 = function (t, i, s) {
            this.set(this.x1, this.y1, this.z1, t, i, s, this.x3, this.y3, this.z3)
        }, e.prototype.setP3 = function (t, i, s) {
            this.set(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2, t, i, s)
        }, e.prototype.set = function (t, i, s, e, o, n, r, a, h) {
            this.x1 = t, this.y1 = i, this.z1 = s, this.x2 = e, this.y2 = o, this.z2 = n, this.x3 = r, this.y3 = a, this.z3 = h, this.calculateTransform()
        }, e.prototype.getP1 = function () {
            return[this.x1, this.y1, this.z1]
        }, e.prototype.getP2 = function () {
            return[this.x2, this.y2, this.z2]
        }, e.prototype.getP3 = function () {
            return[this.x3, this.y3, this.z3]
        }, e.prototype.getLength = function () {
            return this.length
        }, e.prototype.calculateTransform = function () {
            var t = 0, i = 0, s = 0, e = 0, o = 0, h = 0, u = 0, p = 0, c = 0, l = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2), f = r.distance3D(this.x1, this.y1, this.z1, this.x3, this.y3, this.z3), d = r.distance3D(this.x2, this.y2, this.z2, this.x3, this.y3, this.z3), m = 0;
            if (l > f ? l > d ? (this.y1 < this.y2 ? (t = this.x1, i = this.y1, s = this.z1, e = this.x2, o = this.y2, h = this.z2) : (t = this.x2, i = this.y2, s = this.z2, e = this.x1, o = this.y1, h = this.z1), u = this.x3, p = this.y3, c = this.z3, m = l) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, s = this.z2, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, m = d) : f > d ? (this.y1 < this.y3 ? (t = this.x1, i = this.y1, s = this.z1, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x1, o = this.y1, h = this.z1), u = this.x2, p = this.y2, c = this.z2, m = f) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, s = this.z2, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, m = d), e >= t) {
                var v = t, y = i, g = s;
                t = e, i = o, s = h, e = v, o = y, h = g
            }
            this.p1Surf.mtx = n.move(n.identity, [t, i, s]), this.p2Surf.mtx = n.move(n.identity, [e, o, h]), this.p3Surf.mtx = n.move(n.identity, [u, p, c]), this.line0.set(t, i, s, e, o, h), this.line0.setColor(255, 255, 0, 1), this.line1.set(t, i, s, u, p, c), this.line1.setColor(255, 0, 255, 1), this.line2.set(e, o, h, u, p, c), this.line2.setColor(0, 255, 255, 1);
            var x = 1, S = 1, b = 0, w = 0, M = Math.atan((o - i) / (e - t));
            isNaN(M) && (M = this.halfPi);
            var T = .5 * (l + f + d), z = Math.sqrt(T * (T - l) * (T - f) * (T - d)), C = 2 * z / m, P = Math.asin(C / r.distance3D(t, i, s, u, p, c)), _ = Math.asin(C / r.distance3D(e, o, h, u, p, c)), O = C / Math.tan(_) / m, E = C / Math.tan(P) / m, I = new a(e - t, o - i, h - s), k = new a(e - u, o - p, h - c), R = new a;
            if (I.cross(k, R), R.z > 0 && (x = -1), t == e) {
                x *= -1;
                var F = E;
                E = O, O = F
            }
            var A = this.invSize * C, D = this.invSize * m;
            rot = n.multiply(n.identity, n.rotate(b, w, M)), this.surface.setProperties({"border-radius": "0px", "border-right": this.size * E + "px solid rgba(255, 0, 0, .50)", "border-left": this.size * O + "px solid rgba(0, 0, 255, .50)", "border-bottom": this.size + "px solid rgba(0, 255, 0, .50)"});
            var N = .5 * (t + e) - .5 * x * C * Math.sin(-M), L = .5 * (i + o) - .5 * x * C * Math.cos(Math.abs(M)), B = n.move(n.identity, [N, L, 0]);
            this.mtx = n.multiply(n.identity, n.scale(D * S, A * x, 1), rot, B)
        }, s.exports = e
    }), define("famous-generative/EasyCamera", ["require", "exports", "module", "famous/Engine", "famous-utils/Utils", "famous/Matrix", "famous-math/Vector", "famous-math/Quaternion"], function (t, i, s) {
        function e() {
            this.renderMatrix = r.identity, this.doubleClickToReset = !0, this.touchTime = (new Date).getTime(), this.clickTime = (new Date).getTime(), this.deltaTime = 200, this.viewWidth = n.getWidth(), this.viewHeight = n.getHeight(), this.radius = .5 * Math.max(this.viewWidth, this.viewHeight), this.center = new a(.5 * this.viewWidth, .5 * this.viewHeight, 0), this.axis = new a(0, 1, 0), this.theta = 0, this.flipX = 1, this.flipY = 1, this.flipZ = 1, this.t1 = new a, this.t2 = new a, this.pt1 = new a, this.pt2 = new a, this.damping = .95, this.zAcc = 0, this.zVel = 0, this.dt = 0, this.pdt = 0, this.distance = -100, this.position = new a(0, 0, this.distance), this.rotation = new a(0, 0, 0), this.e_mtx = r.identity, this.q_rot = new h, this.q_mtx = r.identity, this.quat = new h, this.d_mtx = r.identity, this.sensitivityRotation = 3, this.sensitivityZoom = 3, this.touchDown = !1, this.mouseDown = !1, o.on("prerender", this._update.bind(this)), o.on("touchstart", this.touchstart.bind(this)), o.on("touchmove", this.touchmove.bind(this)), o.on("touchend", this.touchend.bind(this)), o.on("resize", this.resize.bind(this)), o.on("mousedown", this.mousedown.bind(this)), o.on("mousemove", this.mousemove.bind(this)), o.on("mouseup", this.mouseup.bind(this)), window.addEventListener("mousewheel", this.mousewheel.bind(this)), this.updateMatrix()
        }

        var o = t("famous/Engine"), n = t("famous-utils/Utils"), r = t("famous/Matrix"), a = t("famous-math/Vector"), h = t("famous-math/Quaternion");
        e.prototype._update = function () {
            this.update(), !this.mouseDown && !this.touchDown && this.theta > 1e-4 && (this.quat.makeFromAngleAndAxis(this.theta * this.sensitivityRotation, this.axis), this.q_rot = this.q_rot.multiply(this.quat), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix(), this.theta *= this.damping)
        }, e.prototype.update = function () {
        }, e.prototype.setFlipX = function (t) {
            this.flipX = t ? -1 : 1
        }, e.prototype.setFlipY = function (t) {
            this.flipY = t ? -1 : 1
        }, e.prototype.setFlipZ = function (t) {
            this.flipZ = t ? -1 : 1
        }, e.prototype.setSensitivityZoom = function (t) {
            this.sensitivityZoom = t
        }, e.prototype.setSensitivityRotation = function (t) {
            this.sensitivityRotation = t
        }, e.prototype.setDistance = function (t) {
            this.distance = t, this.position.z = this.distance, this.setPosition(this.position)
        }, e.prototype.setPosition = function (t) {
            this.position.set(t), this.updateMatrix()
        }, e.prototype.applyQuaternionRotation = function (t) {
            this.q_rot = this.q_rot.multiply(t), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix()
        }, e.prototype.applyEulerRotation = function (t, i, s) {
            this.rotation.setXYZ(t, i, s), this.e_mtx = r.rotate(t, i, s), this.updateMatrix()
        }, e.prototype.updateMatrix = function () {
            this.renderMatrix = r.move(r.multiply(this.q_mtx, this.e_mtx), this.position.toArray())
        }, e.prototype.getRotationMatrix = function () {
            return this.q_mtx
        }, e.prototype.getMatrix = function () {
            return this.renderMatrix
        }, e.prototype.reset = function () {
            this.theta = 0, this.q_rot.clear(), this.q_mtx = this.d_mtx, this.position.clear(), this.position.setXYZ(0, 0, this.distance), this.updateMatrix()
        }, e.prototype.setDefaultMatrix = function (t) {
            this.d_mtx = t
        }, e.prototype.clickCheckForCameraRestart = function () {
            var t = (new Date).getTime();
            t - this.clickTime < this.deltaTime && this.doubleClickToReset && this.reset(), this.clickTime = t
        }, e.prototype.touchCheckForCameraRestart = function () {
            var t = (new Date).getTime();
            t - this.touchTime < this.deltaTime && this.doubleClickToReset && this.reset(), this.touchTime = t
        }, e.prototype.touchstart = function (t) {
            1 == t.touches.length ? (this.touchDown = !0, this.touchCheckForCameraRestart(), this.theta = 0, this.t1.clear(), this.pt1.clear(), this.quat.clear(), this.setArcBallVector(t.touches[0].clientX, t.touches[0].clientY)) : 2 == t.touches.length && (this.t1.setXYZ(t.touches[0].clientX, t.touches[0].clientY, 0), this.t2.setXYZ(t.touches[1].clientX, t.touches[1].clientY, 0), this.pt1.set(this.t1), this.pt2.set(this.t2), this.dt = n.distance(this.t1.x, this.t1.y, this.t2.x, this.t2.y), this.pdt = this.dt)
        }, e.prototype.touchmove = function (t) {
            1 == t.touches.length ? (this.setArcBallVector(t.touches[0].clientX, t.touches[0].clientY), this.updateArcBallRotation()) : 2 == t.touches.length && (this.t1.setXYZ(t.touches[0].clientX, t.touches[0].clientY, 0), this.t2.setXYZ(t.touches[1].clientX, t.touches[1].clientY, 0), this.dt = n.distance(this.t1.x, this.t1.y, this.t2.x, this.t2.y), this.position.z += this.flipZ * (this.dt - this.pdt) / this.sensitivityZoom, this.updateMatrix(), this.pt1.set(this.t1), this.pt2.set(this.t2), this.pdt = this.dt)
        }, e.prototype.touchend = function (t) {
            1 == t.touches.length ? (this.t1.clear(), this.pt1.clear(), this.quat.clear()) : 2 == t.touches.length && (this.t1.clear(), this.pt1.clear(), this.t2.clear(), this.pt2.clear(), this.dt = 0, this.pdt = 0)
        }, e.prototype.setArcBallVector = function (t, i) {
            this.pt1.set(this.t1), this.t1.clear(), this.t1.x = -1 * this.flipX * (t - this.center.x) / this.radius, this.t1.y = -1 * this.flipY * (i - this.center.y) / this.radius;
            var s = this.t1.norm();
            s > 1 ? this.t1.normalize(1, this.t1) : this.t1.z = Math.sqrt(1 - s)
        }, e.prototype.updateArcBallRotation = function () {
            this.theta = Math.acos(this.t1.dot(this.pt1)), this.axis = this.pt1.cross(this.t1, this.axis), this.quat.makeFromAngleAndAxis(this.theta * this.sensitivityRotation, this.axis), this.q_rot = this.q_rot.multiply(this.quat), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix()
        }, e.prototype.emit = function (t, i) {
            "prerender" == t ? this.update(i) : "touchstart" == t ? this.touchstart(i) : "touchmove" == t ? this.touchmove(i) : "touchend" == t ? this.touchend(i) : "resize" == t && this.resize(i)
        }, e.prototype.mousemove = function (t) {
            this.mouseDown && (this.setArcBallVector(t.clientX, t.clientY), this.updateArcBallRotation())
        }, e.prototype.mousedown = function (t) {
            this.mouseDown = !0, this.clickCheckForCameraRestart(), this.theta = 0, this.t1.clear(), this.pt1.clear(), this.quat.clear(), this.setArcBallVector(t.clientX, t.clientY)
        }, e.prototype.mouseup = function () {
            this.mouseDown = !1
        }, e.prototype.mousewheel = function (t) {
            this.position.z += .01 * this.flipZ * n.limit(t.wheelDelta, -500, 500) * this.sensitivityZoom, this.updateMatrix()
        }, e.prototype.resize = function () {
            this.viewWidth = n.getWidth(), this.viewHeight = n.getHeight(), this.center = new a(.5 * this.viewWidth, .5 * this.viewHeight, 0), this.radius = .5 * Math.min(this.viewWidth, this.viewHeight)
        }, e.prototype.setDamping = function (t) {
            this.damping = t
        }, e.prototype.render = function (t) {
            return{transform: this.renderMatrix, origin: [.5, .5], target: t}
        }, s.exports = e
    }), define("famous-generative/Integrator", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s, e, o) {
            this.targeting = !0, this.target = i || 0, this.pos = t || 0, this.delta = this.target - this.pos, this.vel = 0, this.acc = 0, this.damping = s || .125, this.extForce = 0, this.extForceInQue = !1, this.velLimit = e || .125, this.accLimit = o || .0125
        }

        e.prototype.setPhysics = function (t, i, s) {
            this.damping = t, this.velLimit = i, this.accLimit = s
        }, e.prototype.update = function () {
            return this.targeting && (this.acc = 0, this.acc += this.goToTarget(), this.extForceInQue && (this.acc += this.extForce, this.extForceInQue = !1, this.extForce = 0), this.accLimitCheck(), this.acc -= this.vel * this.damping, this.vel += this.acc, this.velLimitCheck(), this.pos += this.vel), this.pos
        }, e.prototype.setTarget = function (t) {
            this.target = t
        }, e.prototype.setTargetAndHome = function (t) {
            this.target = t, this.pos = t
        }, e.prototype.getValue = function () {
            return this.pos
        }, e.prototype.goToTarget = function () {
            return this.delta = this.target - this.pos, this.delta
        }, e.prototype.addForce = function (t) {
            this.extForceInQue = !0, this.extForce += t
        }, e.prototype.accLimitCheck = function () {
            Math.abs(this.acc) > this.accLimit && (this.acc = this.acc > 0 ? this.accLimit : -this.accLimit)
        }, e.prototype.velLimitCheck = function () {
            Math.abs(this.vel) > this.velLimit && (this.vel = this.vel > 0 ? this.velLimit : -this.velLimit)
        }, s.exports = e
    }), define("famous-generative/Particle", ["require", "exports", "module", "famous-math/Vector"], function (t, i, s) {
        function e() {
            this.theta = 0, this.speed = .01, this.home = new o(0, 0, 0), this.ppos = new o(0, 0, 0), this.pos = new o(0, 0, 0), this.vel = new o(0, 0, 0), this.acc = new o(0, 0, 0), this.velLimit = 10, this.accLimit = .25, this.radius = .5
        }

        var o = t("famous-math/Vector");
        e.prototype.update = function () {
            this.ppos.set(this.pos), this.ppos.sub(this.pos, this.vel), this.vel.add(this.acc.cap(this.accLimit), this.vel), this.pos.add(this.vel.cap(this.velLimit), this.pos)
        }, s.exports = e
    }), define("famous-generative/SimplexNoise", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s, e) {
            this.x = t || 0, this.y = i || 0, this.z = s || 0, this.w = e || 0
        }

        function o(t, i, s) {
            return t.x * i + t.y * s
        }

        function n(t, i, s, e) {
            return t.x * i + t.y * s + t.z * e
        }

        function r(t, i, s, e, o) {
            return t.x * i + t.y * s + t.z * e + t.w * o
        }

        function a() {
            this.F2 = .5 * (Math.sqrt(3) - 1), this.G2 = (3 - Math.sqrt(3)) / 6, this.F3 = 1 / 3, this.G3 = 1 / 6, this.F4 = (Math.sqrt(5) - 1) / 4, this.G4 = (5 - Math.sqrt(5)) / 20, this.grad3 = [new e(1, 1, 0), new e(-1, 1, 0), new e(1, -1, 0), new e(-1, -1, 0), new e(1, 0, 1), new e(-1, 0, 1), new e(1, 0, -1), new e(-1, 0, -1), new e(0, 1, 1), new e(0, -1, 1), new e(0, 1, -1), new e(0, -1, -1)], this.grad4 = [new e(0, 1, 1, 1), new e(0, 1, 1, -1), new e(0, 1, -1, 1), new e(0, 1, -1, -1), new e(0, -1, 1, 1), new e(0, -1, 1, -1), new e(0, -1, -1, 1), new e(0, -1, -1, -1), new e(1, 0, 1, 1), new e(1, 0, 1, -1), new e(1, 0, -1, 1), new e(1, 0, -1, -1), new e(-1, 0, 1, 1), new e(-1, 0, 1, -1), new e(-1, 0, -1, 1), new e(-1, 0, -1, -1), new e(1, 1, 0, 1), new e(1, 1, 0, -1), new e(1, -1, 0, 1), new e(1, -1, 0, -1), new e(-1, 1, 0, 1), new e(-1, 1, 0, -1), new e(-1, -1, 0, 1), new e(-1, -1, 0, -1), new e(1, 1, 1, 0), new e(1, 1, -1, 0), new e(1, -1, 1, 0), new e(1, -1, -1, 0), new e(-1, 1, 1, 0), new e(-1, 1, -1, 0), new e(-1, -1, 1, 0), new e(-1, -1, -1, 0)], this.p = [];
            for (var t = 0; 255 >= t; t++)this.p[t] = Math.floor(255 * Math.random());
            this.perm = [], this.permMod12 = [];
            for (var t = 0; 512 > t; t++)this.perm[t] = this.p[255 & t], this.permMod12[t] = this.perm[t] % 12
        }

        a.prototype.noise2D = function (t, i) {
            var s, e, n = 0, r = 0, a = 0, h = (t + i) * this.F2, u = Math.floor(t + h), p = Math.floor(i + h), c = (u + p) * this.G2, l = u - c, f = p - c, d = t - l, m = i - f;
            d > m ? (s = 1, e = 0) : (s = 0, e = 1);
            var v = d - s + this.G2, y = m - e + this.G2, g = d - 1 + 2 * this.G2, x = m - 1 + 2 * this.G2, S = 255 & u, b = 255 & p, w = .5 - d * d - m * m;
            if (w >= 0) {
                var M = this.permMod12[S + this.perm[b]];
                w *= w, n = w * w * o(this.grad3[M], d, m)
            }
            var T = .5 - v * v - y * y;
            if (T >= 0) {
                var z = this.permMod12[S + s + this.perm[b + e]];
                T *= T, r = T * T * o(this.grad3[z], v, y)
            }
            var C = .5 - g * g - x * x;
            if (C >= 0) {
                var P = this.permMod12[S + 1 + this.perm[b + 1]];
                C *= C, a = C * C * o(this.grad3[P], g, x)
            }
            return 70 * (n + r + a)
        }, a.prototype.noise3D = function (t, i, s) {
            var e, o, r, a, h, u, p = 0, c = 0, l = 0, f = 0, d = (t + i + s) * this.F3, m = Math.floor(t + d), v = Math.floor(i + d), y = Math.floor(s + d), g = (m + v + y) * this.G3, x = m - g, S = v - g, b = y - g, w = t - x, M = i - S, T = s - b;
            w >= M ? M >= T ? (e = 1, o = 0, r = 0, a = 1, h = 1, u = 0) : w >= T ? (e = 1, o = 0, r = 0, a = 1, h = 0, u = 1) : (e = 0, o = 0, r = 1, a = 1, h = 0, u = 1) : T > M ? (e = 0, o = 0, r = 1, a = 0, h = 1, u = 1) : T > w ? (e = 0, o = 1, r = 0, a = 0, h = 1, u = 1) : (e = 0, o = 1, r = 0, a = 1, h = 1, u = 0);
            var z = w - e + this.G3, C = M - o + this.G3, P = T - r + this.G3, _ = w - a + 2 * this.G3, O = M - h + 2 * this.G3, E = T - u + 2 * this.G3, I = w - 1 + 3 * this.G3, k = M - 1 + 3 * this.G3, R = T - 1 + 3 * this.G3, F = 255 & m, A = 255 & v, D = 255 & y, N = .6 - w * w - M * M - T * T;
            if (N >= 0) {
                var L = this.permMod12[F + this.perm[A + this.perm[D]]];
                N *= N, p = N * N * n(this.grad3[L], w, M, T)
            }
            var B = .6 - z * z - C * C - P * P;
            if (B >= 0) {
                var U = this.permMod12[F + e + this.perm[A + o + this.perm[D + r]]];
                B *= B, c = B * B * n(this.grad3[U], z, C, P)
            }
            var q = .6 - _ * _ - O * O - E * E;
            if (q >= 0) {
                var H = this.permMod12[F + a + this.perm[A + h + this.perm[D + u]]];
                q *= q, l = q * q * n(this.grad3[H], _, O, E)
            }
            var V = .6 - I * I - k * k - R * R;
            if (V >= 0) {
                var G = this.permMod12[F + 1 + this.perm[A + 1 + this.perm[D + 1]]];
                V *= V, f = V * V * n(this.grad3[G], I, k, R)
            }
            return 32 * (p + c + l + f)
        }, a.prototype.noise4D = function (t, i, s, e) {
            var o = 0, n = 0, a = 0, h = 0, u = 0, p = (t + i + s + e) * this.F4, c = Math.floor(t + p), l = Math.floor(i + p), f = Math.floor(s + p), d = Math.floor(e + p), m = (c + l + f + d) * this.G4, v = c - m, y = l - m, g = f - m, x = d - m, S = t - v, b = i - y, w = s - g, M = e - x, T = 0, z = 0, C = 0, P = 0;
            S > b ? T++ : z++, S > w ? T++ : C++, S > M ? T++ : P++, b > w ? z++ : C++, b > M ? z++ : P++, w > M ? C++ : P++;
            var _, O, E, I, k, R, F, A, D, N, L, B;
            _ = T >= 3 ? 1 : 0, O = z >= 3 ? 1 : 0, E = C >= 3 ? 1 : 0, I = P >= 3 ? 1 : 0, k = T >= 2 ? 1 : 0, R = z >= 2 ? 1 : 0, F = C >= 2 ? 1 : 0, A = P >= 2 ? 1 : 0, D = T >= 1 ? 1 : 0, N = z >= 1 ? 1 : 0, L = C >= 1 ? 1 : 0, B = P >= 1 ? 1 : 0;
            var U = S - _ + this.G4, q = b - O + this.G4, H = w - E + this.G4, V = M - I + this.G4, G = S - k + 2 * this.G4, X = b - R + 2 * this.G4, j = w - F + 2 * this.G4, Y = M - A + 2 * this.G4, Z = S - D + 3 * this.G4, W = b - N + 3 * this.G4, Q = w - L + 3 * this.G4, K = M - B + 3 * this.G4, J = S - 1 + 4 * this.G4, $ = b - 1 + 4 * this.G4, ti = w - 1 + 4 * this.G4, ii = M - 1 + 4 * this.G4, si = 255 & c, ei = 255 & l, oi = 255 & f, ni = 255 & d, ri = .6 - S * S - b * b - w * w - M * M;
            if (ri >= 0) {
                var ai = this.perm[si + this.perm[ei + this.perm[oi + this.perm[ni]]]] % 32;
                ri *= ri, o = ri * ri * r(this.grad4[ai], S, b, w, M)
            }
            var hi = .6 - U * U - q * q - H * H - V * V;
            if (hi >= 0) {
                var ui = this.perm[si + _ + this.perm[ei + O + this.perm[oi + E + this.perm[ni + I]]]] % 32;
                hi *= hi, n = hi * hi * r(this.grad4[ui], U, q, H, V)
            }
            var pi = .6 - G * G - X * X - j * j - Y * Y;
            if (pi >= 0) {
                var ci = this.perm[si + k + this.perm[ei + R + this.perm[oi + F + this.perm[ni + A]]]] % 32;
                pi *= pi, a = pi * pi * r(this.grad4[ci], G, X, j, Y)
            }
            var li = .6 - Z * Z - W * W - Q * Q - K * K;
            if (li >= 0) {
                var fi = this.perm[si + D + this.perm[ei + N + this.perm[oi + L + this.perm[ni + B]]]] % 32;
                li *= li, h = li * li * r(this.grad4[fi], Z, W, Q, K)
            }
            var di = .6 - J * J - $ * $ - ti * ti - ii * ii;
            if (0 > di) {
                var mi = this.perm[si + 1 + this.perm[ei + 1 + this.perm[oi + 1 + this.perm[ni + 1]]]] % 32;
                di *= di, u = di * di * r(this.grad4[mi], J, $, ti, ii)
            }
            return 27 * (o + n + a + h + u)
        }, s.exports = a
    }), define("famous-generative/Touch", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-math/Vector", "./Integrator", "famous-utils/Utils"], function (t, i, s) {
        function e() {
            this.identifier = -1, this.modAmp = .05, this.modSpeed = .2, this.angle = 0, this.alive = !1, this.radius = 64, this.surface = new o({size: [2 * this.radius, 2 * this.radius]}), this.surface.addClass("touch"), this.pos = new r, this.mtx = n.identity, this.opacity = 0, this.damping = .3, this.velLimit = .25, this.accLimit = .1, this.integrator = new a(0, 0, this.damping, this.velLimit, this.accLimit), this.modulator = new a(0, 0), this.scale = 0, this.surfaceBack = new o({size: [2 * this.radius, 2 * this.radius]}), this.surfaceBack.addClass("touch-back"), this.mtxBack = n.identity, this.opacityBack = 0, this.backAlpha = 4, this.backIntegrator = new a(0, 0, .75, .25, .025)
        }

        var o = t("famous/Surface"), n = t("famous/Matrix"), r = t("famous-math/Vector"), a = t("./Integrator"), h = t("famous-utils/Utils");
        e.prototype.setIdentifier = function (t) {
            this.identifier = t
        }, e.prototype.setRadius = function (t) {
            this.radius = t, this.surface.setSize([2 * this.radius, 2 * this.radius]), this.surfaceBack.setSize([2 * this.radius, 2 * this.radius])
        }, e.prototype.isAlive = function () {
            return this.alive || this.integrator.getValue() > 1e-7 ? !0 : !1
        }, e.prototype.update = function () {
            this.alive && (this.angle += this.modSpeed * this.modulator.update(), this.integrator.addForce(this.modAmp * Math.sin(this.angle))), this.opacity = this.integrator.update(), this.scale = this.integrator.getValue(), this.mtx = n.multiply(n.scale(this.scale, this.scale, 1), n.move(n.identity, this.pos.toArray()));
            var t = h.clamp(this.backIntegrator.update(), 0, 1);
            this.opacityBack = -this.backAlpha * t * t + this.backAlpha * t, this.mtxBack = n.multiply(n.scale(.5 * this.angle, .5 * this.angle, 1), n.move(n.identity, this.pos.toArray()))
        }, e.prototype.render = function () {
            return{transform: this.mtx, origin: [.5, .5], opacity: this.opacity, target: this.surface.render()}
        }, e.prototype.renderBack = function () {
            return{transform: this.mtxBack, origin: [.5, .5], opacity: this.opacityBack, target: this.surfaceBack.render()}
        }, e.prototype.touchstart = function (t, i) {
            this.angle = 0, this.freed = !1, this.alive = !0, this.integrator.setTarget(1), this.integrator.setPhysics(this.damping, this.velLimit, this.accLimit), this.backIntegrator.setTarget(1), this.modulator.setTarget(1), t = t - .5 * h.getWidth() + this.radius, i = i - .5 * h.getHeight() + this.radius, this.pos.setXYZ(t - this.radius, i - this.radius, 0)
        }, e.prototype.touchmove = function (t, i) {
            t = t - .5 * h.getWidth() + this.radius, i = i - .5 * h.getHeight() + this.radius, this.pos.setXYZ(t - this.radius, i - this.radius, 0)
        }, e.prototype.touchend = function () {
            this.alive = !1, this.integrator.setTarget(0), this.integrator.setPhysics(.1, .25, .0125), this.modulator.setTargetAndHome(0), this.backIntegrator.setTargetAndHome(0)
        }, s.exports = e
    }), define("famous-generative/TouchVisualizer", ["require", "exports", "module", "./Touch"], function (t, i, s) {
        function e() {
            this.touches = [], this.cachedTouches = [], this.unActiveTouches = [], this.activeIdentifies = [];
            for (var t = 0; 20 > t; t++)this.cachedTouches[t] = new o(this), this.unActiveTouches[t] = this.cachedTouches[t]
        }

        var o = t("./Touch");
        e.prototype.update = function () {
            for (var t = 0; t < this.activeIdentifies.length; t++) {
                var i = this.activeIdentifies[t];
                void 0 != this.touches[i] && this.touches[i].update()
            }
        }, e.prototype.render = function () {
            for (var t = [], i = 0; i < this.activeIdentifies.length; i++) {
                var s = this.activeIdentifies[i];
                void 0 != this.touches[s] && this.touches[s].isAlive() ? (t.push(this.touches[s].render()), t.push(this.touches[s].renderBack())) : this.touchFreed(this.touches[s])
            }
            return t
        }, e.prototype.emit = function (t, i) {
            "touchstart" == t ? this.touchstart(i) : "touchmove" == t ? this.touchmove(i) : "touchend" == t ? this.touchend(i) : "prerender" == t && this.update(i)
        }, e.prototype.getCachedTouch = function () {
            return this.unActiveTouches.pop()
        }, e.prototype.touchstart = function (t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var s = t.changedTouches[i].identifier;
                void 0 == this.touches[s] && this.cachedTouches.length > 0 && (-1 == this.activeIdentifies.indexOf(s) && this.activeIdentifies.push(s), this.touches[s] = this.getCachedTouch(), this.touches[s].setIdentifier(s)), this.touches[s].touchstart(t.changedTouches[i].clientX, t.changedTouches[i].clientY)
            }
        }, e.prototype.touchmove = function (t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var s = t.changedTouches[i].identifier;
                void 0 != this.touches[s] && this.touches[s].touchmove(t.changedTouches[i].clientX, t.changedTouches[i].clientY)
            }
        }, e.prototype.touchend = function (t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var s = t.changedTouches[i].identifier;
                void 0 != this.touches[s] && this.touches[s].touchend()
            }
        }, e.prototype.touchFreed = function (t) {
            if (void 0 != t) {
                var i = t.identifier, s = this.activeIdentifies.indexOf(i);
                this.activeIdentifies.splice(s, 1), this.unActiveTouches.push(t), this.touches[i] = void 0
            }
        }, s.exports = e
    }), define("famous-generative/Triangle", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous/RenderNode", "famous-math/Quaternion", "famous-math/Vector", "./Line"], function (t, i, s) {
        function e(t) {
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.red = "undefined" == typeof t.red ? 255 : t.red, this.green = "undefined" == typeof t.green ? 255 : t.green, this.blue = "undefined" == typeof t.blue ? 255 : t.blue, this.opacity = "undefined" == typeof t.opacity ? 1 : t.opacity, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o({size: [this.size, this.size]}), this.surface.addClass("Triangle"), this.surface.setProperties({"background-color": "rgba(0, 0, 0, 0.0)", "border-radius": "0px", "border-top": "0px solid", "border-right": .5 * this.size + "px solid transparent", "border-left": .5 * this.size + "px solid transparent", "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"}), this.calculateTransform()
        }

        var o = t("famous/Surface"), n = t("famous/Matrix"), r = t("famous-utils/Utils");
        t("famous/RenderNode"), t("famous-math/Quaternion");
        var a = t("famous-math/Vector");
        t("./Line"), e.prototype.setProperties = function (t) {
            this.surface.setProperties(t)
        }, e.prototype.setColor = function (t, i, s, e) {
            return this.red = Math.abs(Math.floor(t)), this.green = Math.abs(Math.floor(i)), this.blue = Math.abs(Math.floor(s)), this.opacity = e, this.surface.setProperties({"border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"}), this
        }, e.prototype.setOpacity = function (t) {
            return this.opacity = t, this
        }, e.prototype.render = function () {
            var t = {transform: this.mtx, opacity: this.opacity, origin: [.5, .5], target: this.surface.render()};
            return t
        }, e.prototype.setP1 = function (t, i, s) {
            this.set(t, i, s, this.x2, this.y2, this.z2, this.x3, this.y3, this.z3)
        }, e.prototype.setP2 = function (t, i, s) {
            this.set(this.x1, this.y1, this.z1, t, i, s, this.x3, this.y3, this.z3)
        }, e.prototype.setP3 = function (t, i, s) {
            this.set(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2, t, i, s)
        }, e.prototype.set = function (t, i, s, e, o, n, r, a, h) {
            this.x1 = t, this.y1 = i, this.z1 = s, this.x2 = e, this.y2 = o, this.z2 = n, this.x3 = r, this.y3 = a, this.z3 = h, this.calculateTransform()
        }, e.prototype.getP1 = function () {
            return[this.x1, this.y1, this.z1]
        }, e.prototype.getP2 = function () {
            return[this.x2, this.y2, this.z2]
        }, e.prototype.getP3 = function () {
            return[this.x3, this.y3, this.z3]
        }, e.prototype.getLength = function () {
            return this.length
        }, e.prototype.calculateTransform = function () {
            var t = 0, i = 0, s = 0, e = 0, o = 0, h = 0, u = 0, p = 0, c = 0, l = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2), f = r.distance3D(this.x1, this.y1, this.z1, this.x3, this.y3, this.z3), d = r.distance3D(this.x2, this.y2, this.z2, this.x3, this.y3, this.z3), m = 0;
            if (l > f ? l > d ? (this.y1 < this.y2 ? (t = this.x1, i = this.y1, s = this.z1, e = this.x2, o = this.y2, h = this.z2) : (t = this.x2, i = this.y2, s = this.z2, e = this.x1, o = this.y1, h = this.z1), u = this.x3, p = this.y3, c = this.z3, m = l) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, s = this.z2, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, m = d) : f > d ? (this.y1 < this.y3 ? (t = this.x1, i = this.y1, s = this.z1, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x1, o = this.y1, h = this.z1), u = this.x2, p = this.y2, c = this.z2, m = f) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, s = this.z2, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, m = d), e >= t) {
                var v = t, y = i, g = s;
                t = e, i = o, s = h, e = v, o = y, h = g
            }
            var x = 1, S = 1, b = Math.atan((o - i) / (e - t)), w = .5 * (l + f + d), M = Math.sqrt(w * (w - l) * (w - f) * (w - d)), T = 2 * M / m, z = Math.asin(T / r.distance3D(t, i, s, u, p, c)), C = Math.asin(T / r.distance3D(e, o, h, u, p, c)), P = T / Math.tan(C) / m, _ = T / Math.tan(z) / m, O = new a(e - t, o - i, h - s), E = new a(e - u, o - p, h - c), I = new a;
            if (O.cross(E, I), I.z > 0 && (x = -1), t == e) {
                x *= -1;
                var k = _;
                _ = P, P = k
            }
            var R = this.invSize * T, F = this.invSize * m;
            rot = n.multiply(n.identity, n.rotateZ(b)), this.surface.setProperties({"border-radius": "0px", "border-right": this.size * _ + "px solid transparent", "border-left": this.size * P + "px solid transparent", "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"});
            var A = .5 * (t + e) - .5 * x * T * Math.sin(-b), D = .5 * (i + o) - .5 * x * T * Math.cos(Math.abs(b));
            this.mtx = n.multiply(n.identity, n.scale(F * S, R * x, 1), rot, n.move(n.identity, [A, D, 0]))
        }, s.exports = e
    }), define("famous-generative/Triangle3D", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous/RenderNode", "famous-math/Quaternion", "famous-math/Vector", "famous-generative/Line"], function (t, i, s) {
        function e(t) {
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.xAxis = new a(1, 0, 0), this.yAxis = new a(0, 1, 0), this.zAxis = new a(0, 0, 1), this.red = "undefined" == typeof t.red ? 255 : t.red, this.green = "undefined" == typeof t.green ? 255 : t.green, this.blue = "undefined" == typeof t.blue ? 255 : t.blue, this.opacity = "undefined" == typeof t.opacity ? 1 : t.opacity, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o({size: [this.size, this.size]}), this.surface.addClass("Triangle3D"), this.surface.setProperties({"background-color": "rgba(0, 0, 0, 0.0)", "border-radius": "0px", "border-top": "0px solid", "border-right": .5 * this.size + "px solid red", "border-left": .5 * this.size + "px solid blue", "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"}), this.normal = new h({width: 4, opacity: 1}), this.line1 = new h({width: 4, opacity: 1}), this.line2 = new h({width: 4, opacity: 1}), this.line3 = new h({width: 4, opacity: 1}), this.line4 = new h({width: 4, opacity: 1}), this.line5 = new h({width: 4, opacity: 1}), this.line6 = new h({width: 4, opacity: 1}), this.normal.setColor(255, 0, 0, 1), this.line1.setColor(255, 255, 0, 1), this.line2.setColor(255, 0, 255, 1), this.line3.setColor(0, 255, 255, 1), this.line4.setColor(255, 0, 0, 1), this.line5.setColor(0, 0, 0, 1), this.line5.setColor(0, 0, 0, 1);
            var i = "font-size: 24px; ";
            i += "line-height: 30px; ", i += "margin: 0px; ";
            var s = .75, e = 30;
            this.p1Surf = new o({size: [e, e]}), this.p1Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p1Surf.setProperties(r.borderRadius(e)), this.p1Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "1" + "</p>"), this.p1Surf.mtx = n.identity, this.p1Surf.opacity = s, this.p2Surf = new o({size: [e, e]}), this.p2Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p2Surf.setProperties(r.borderRadius(e)), this.p2Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "2" + "</p>"), this.p2Surf.mtx = n.identity, this.p2Surf.opacity = s, this.p3Surf = new o({size: [e, e]}), this.p3Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p3Surf.setProperties(r.borderRadius(e)), this.p3Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "3" + "</p>"), this.p3Surf.mtx = n.identity, this.p3Surf.opacity = s, this.p4Surf = new o({size: [e, e]}), this.p4Surf.setProperties(r.backgroundColor(255, 0, 0, 1)), this.p4Surf.setProperties(r.borderRadius(e)), this.p4Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "C" + "</p>"), this.p4Surf.mtx = n.identity, this.p4Surf.opacity = s, this.p5Surf = new o({size: [e, e]}), this.p5Surf.setProperties(r.backgroundColor(0, 255, 0, 1)), this.p5Surf.setProperties(r.borderRadius(e)), this.p5Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "M" + "</p>"), this.p5Surf.mtx = n.identity, this.p5Surf.opacity = s, this.p6Surf = new o({size: [e, e]}), this.p6Surf.setProperties(r.backgroundColor(0, 0, 255, 1)), this.p6Surf.setProperties(r.borderRadius(e)), this.p6Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "V" + "</p>"), this.p6Surf.mtx = n.identity, this.p6Surf.opacity = s, this.calculateTransform()
        }

        var o = t("famous/Surface"), n = t("famous/Matrix"), r = t("famous-utils/Utils");
        t("famous/RenderNode"), t("famous-math/Quaternion");
        var a = t("famous-math/Vector"), h = t("famous-generative/Line");
        e.prototype.setProperties = function (t) {
            this.surface.setProperties(t)
        }, e.prototype.setColor = function (t, i, s, e) {
            return this.red = Math.abs(Math.floor(t)), this.green = Math.abs(Math.floor(i)), this.blue = Math.abs(Math.floor(s)), this.opacity = e, this.surface.setProperties({"border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"}), this
        }, e.prototype.setOpacity = function (t) {
            return this.opacity = t, this
        }, e.prototype.render = function () {
            var t = [
                {transform: this.mtx, opacity: this.opacity, target: this.surface.render()}
            ];
            return t.push(this.normal.render()), t.push(this.line1.render()), t.push(this.line2.render()), t.push(this.line3.render()), t.push(this.line4.render()), t.push(this.line5.render()), t.push(this.line6.render()), t.push({transform: this.p1Surf.mtx, opacity: this.p1Surf.opacity, target: this.p1Surf.render()}), t.push({transform: this.p2Surf.mtx, opacity: this.p2Surf.opacity, target: this.p2Surf.render()}), t.push({transform: this.p3Surf.mtx, opacity: this.p3Surf.opacity, target: this.p3Surf.render()}), t.push({transform: this.p4Surf.mtx, opacity: this.p4Surf.opacity, target: this.p4Surf.render()}), t.push({transform: this.p5Surf.mtx, opacity: this.p5Surf.opacity, target: this.p5Surf.render()}), t.push({transform: this.p6Surf.mtx, opacity: this.p6Surf.opacity, target: this.p6Surf.render()}), t
        }, e.prototype.setP1 = function (t, i, s) {
            this.set(t, i, s, this.x2, this.y2, this.z2, this.x3, this.y3, this.z3)
        }, e.prototype.setP2 = function (t, i, s) {
            this.set(this.x1, this.y1, this.z1, t, i, s, this.x3, this.y3, this.z3)
        }, e.prototype.setP3 = function (t, i, s) {
            this.set(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2, t, i, s)
        }, e.prototype.set = function (t, i, s, e, o, n, r, a, h) {
            this.x1 = t, this.y1 = i, this.z1 = s, this.x2 = e, this.y2 = o, this.z2 = n, this.x3 = r, this.y3 = a, this.z3 = h, this.calculateTransform()
        }, e.prototype.getP1 = function () {
            return[this.x1, this.y1, this.z1]
        }, e.prototype.getP2 = function () {
            return[this.x2, this.y2, this.z2]
        }, e.prototype.getP3 = function () {
            return[this.x3, this.y3, this.z3]
        }, e.prototype.getLength = function () {
            return this.length
        }, e.prototype.calculateTransform = function () {
            var t = 0, i = 0, s = 0, e = 0, o = 0, h = 0, u = 0, p = 0, c = 0, l = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2), f = r.distance3D(this.x1, this.y1, this.z1, this.x3, this.y3, this.z3), d = r.distance3D(this.x2, this.y2, this.z2, this.x3, this.y3, this.z3), m = 0, v = 0, y = 0, g = 0, x = 0;
            l > f ? l > d ? (this.y1 < this.y2 ? (t = this.x1, i = this.y1, s = this.z1, e = this.x2, o = this.y2, h = this.z2) : (t = this.x2, i = this.y2, s = this.z2, e = this.x1, o = this.y1, h = this.z1), u = this.x3, p = this.y3, c = this.z3, v = l) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, s = this.z2, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, v = d) : f > d ? (this.y1 < this.y3 ? (t = this.x1, i = this.y1, s = this.z1, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x1, o = this.y1, h = this.z1), u = this.x2, p = this.y2, c = this.z2, v = f) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, s = this.z2, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, v = d);
            var S = new a(t, i, s), b = new a(e, o, h), w = new a(u, p, c), M = new a(t + e, i + o, s + h);
            M.mult(.5, M), this.p5Surf.mtx = n.translate(M.x, M.y, M.z), this.p1Surf.mtx = n.move(n.identity, S.toArray()), this.p2Surf.mtx = n.move(n.identity, b.toArray()), this.p3Surf.mtx = n.move(n.identity, w.toArray());
            var T = new a(t + e + u, i + o + p, s + h + c);
            T.mult(1 / 3, T);
            var z = new a;
            z.add(b).sub(S, z);
            var C = new a;
            C.add(w).sub(b, C);
            var P = new a;
            P.add(w).sub(S, P);
            var _ = new a;
            z.cross(C, _);
            var O = this.xAxis.dot(_), E = this.yAxis.dot(_), I = this.zAxis.dot(_);
            console.log(O, E, I), 0 > I && (S = new a(e, o, h), b = new a(t, i, s), z = new a, z.add(b).sub(S, z), C = new a, C.add(w).sub(b, C), P = new a, P.add(w).sub(S, P), _ = new a, z.cross(C, _)), O = this.xAxis.dot(_), E = this.yAxis.dot(_), I = this.zAxis.dot(_), this.p1Surf.mtx = n.move(n.identity, S.toArray()), this.p2Surf.mtx = n.move(n.identity, b.toArray()), this.p3Surf.mtx = n.move(n.identity, w.toArray()), console.log(O, E, I);
            var k = new a;
            k.add(S).sub(M, k), this.line5.set(M.x, M.y, M.z, M.x + k.x, M.y + k.y, M.z + k.z), m = .5 * _.norm(), y = 2 * m / v;
            var R = new a;
            R = k.cross(_, R), R.normalize(y / 2, R), this.line6.set(M.x, M.y, M.z, M.x + R.x, M.y + R.y, M.z + R.z);
            var F = new a(M.x + R.x, M.y + R.y, M.z + R.z);
            this.p6Surf.mtx = n.translate(F.x, F.y, F.z);
            var A = Math.asin(y / P.getLength()), D = Math.asin(y / C.getLength()), g = y / Math.tan(D) / v, x = y / Math.tan(A) / v;
            _.normalize(150, _), this.line4.set(T.x, T.y, T.z, T.x + _.x, T.y + _.y, T.z + _.z), this.p4Surf.mtx = n.translate(T.x, T.y, T.z), Math.acos(z.dot(C) / (z.norm() * C.norm()));
            var N = Math.atan2(_.x, Math.sqrt(_.z * _.z + _.y * _.y)), L = Math.atan2(-_.y, _.z);
            this.surface.setProperties({"border-radius": "0px", "border-right": this.size * x + "px solid transparent", "border-left": this.size * g + "px solid transparent", "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"});
            var B = T.x - (T.x - F.x), U = T.y - (T.y - F.y), q = T.z - (T.z - F.z);
            this.line1.setLineWidth(10), this.line1.set(0, 0, 0, T.x, T.y, T.z), this.mtx = n.scale(this.invSize * v, this.invSize * y, 1), this.mtx = n.multiply(this.mtx, n.rotateZ(0), n.rotate(L, N, 0)), this.mtx = n.move(this.mtx, [B, U, q])
        }, s.exports = e
    }), define("famous-generative/Triangle3DOLD", ["require", "exports", "module", "famous/Surface", "famous/Matrix", "famous-utils/Utils", "famous/RenderNode", "famous-math/Quaternion", "famous-math/Vector", "famous-generative/Line"], function (t, i, s) {
        function e(t) {
            t || (t = {}), this.x1 = t.x1 || 0, this.y1 = t.y1 || 0, this.z1 = t.z1 || 0, this.x2 = t.x2 || 0, this.y2 = t.y2 || 0, this.z2 = t.z2 || 0, this.x3 = t.x3 || 0, this.y3 = t.y3 || 0, this.z3 = t.z3 || 0, this.mtx = n.identity, this.result = [], this.red = "undefined" == typeof t.red ? 255 : t.red, this.green = "undefined" == typeof t.green ? 255 : t.green, this.blue = "undefined" == typeof t.blue ? 255 : t.blue, this.opacity = "undefined" == typeof t.opacity ? 1 : t.opacity, this.size = 1e3, this.halfSize = .5 * this.size, this.invSize = 1 / this.size, this.halfPi = .5 * Math.PI, this.surface = new o([this.size, this.size]), this.surface.addClass("Triangle3D"), this.surface.setProperties({"background-color": "rgba(0, 0, 0, 0.0)", "border-radius": "0px", "border-top": "0px solid", "border-right": .5 * this.size + "px solid red", "border-left": .5 * this.size + "px solid blue", "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"}), this.normal = new h({width: 4, opacity: 1}), this.line1 = new h({width: 4, opacity: 1}), this.line2 = new h({width: 4, opacity: 1}), this.line3 = new h({width: 4, opacity: 1}), this.line4 = new h({width: 4, opacity: 1}), this.line5 = new h({width: 4, opacity: 1}), this.line6 = new h({width: 4, opacity: 1}), this.normal.setColor(255, 0, 0, 1), this.line1.setColor(255, 255, 0, 1), this.line2.setColor(255, 0, 255, 1), this.line3.setColor(0, 255, 255, 1), this.line4.setColor(255, 0, 0, 1), this.line5.setColor(0, 0, 0, 1), this.line5.setColor(0, 0, 0, 1);
            var i = "font-size: 24px; ";
            i += "line-height: 30px; ", i += "margin: 0px; ";
            var s = .75, e = 30;
            this.p1Surf = new o([e, e]), this.p1Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p1Surf.setProperties(r.borderRadius(e)), this.p1Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "1" + "</p>"), this.p1Surf.mtx = n.identity, this.p1Surf.opacity = s, this.p2Surf = new o([e, e]), this.p2Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p2Surf.setProperties(r.borderRadius(e)), this.p2Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "2" + "</p>"), this.p2Surf.mtx = n.identity, this.p2Surf.opacity = s, this.p3Surf = new o([e, e]), this.p3Surf.setProperties(r.backgroundColor(255, 255, 255, 1)), this.p3Surf.setProperties(r.borderRadius(e)), this.p3Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "3" + "</p>"), this.p3Surf.mtx = n.identity, this.p3Surf.opacity = s, this.p4Surf = new o([e, e]), this.p4Surf.setProperties(r.backgroundColor(255, 0, 0, 1)), this.p4Surf.setProperties(r.borderRadius(e)), this.p4Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "C" + "</p>"), this.p4Surf.mtx = n.identity, this.p4Surf.opacity = s, this.p5Surf = new o([e, e]), this.p5Surf.setProperties(r.backgroundColor(0, 255, 0, 1)), this.p5Surf.setProperties(r.borderRadius(e)), this.p5Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "M" + "</p>"), this.p5Surf.mtx = n.identity, this.p5Surf.opacity = s, this.p6Surf = new o([e, e]), this.p6Surf.setProperties(r.backgroundColor(0, 0, 255, 1)), this.p6Surf.setProperties(r.borderRadius(e)), this.p6Surf.setContent('<p class="triangleIndex" style="' + i + '">' + "V" + "</p>"), this.p6Surf.mtx = n.identity, this.p6Surf.opacity = s, this.calculateTransform()
        }

        var o = t("famous/Surface"), n = t("famous/Matrix"), r = t("famous-utils/Utils");
        t("famous/RenderNode"), t("famous-math/Quaternion");
        var a = t("famous-math/Vector"), h = t("famous-generative/Line");
        e.prototype.setProperties = function (t) {
            this.surface.setProperties(t)
        }, e.prototype.setColor = function (t, i, s, e) {
            return this.red = Math.abs(Math.floor(t)), this.green = Math.abs(Math.floor(i)), this.blue = Math.abs(Math.floor(s)), this.opacity = e, this.surface.setProperties({"border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"}), this
        }, e.prototype.setOpacity = function (t) {
            return this.opacity = t, this
        }, e.prototype.render = function () {
            var t = [
                {transform: this.mtx, opacity: this.opacity, target: this.surface.render()}
            ];
            return t.push(this.normal.render()), t.push(this.line1.render()), t.push(this.line2.render()), t.push(this.line3.render()), t.push(this.line4.render()), t.push(this.line5.render()), t.push(this.line6.render()), t.push({transform: this.p1Surf.mtx, opacity: this.p1Surf.opacity, target: this.p1Surf.render()}), t.push({transform: this.p2Surf.mtx, opacity: this.p2Surf.opacity, target: this.p2Surf.render()}), t.push({transform: this.p3Surf.mtx, opacity: this.p3Surf.opacity, target: this.p3Surf.render()}), t.push({transform: this.p4Surf.mtx, opacity: this.p4Surf.opacity, target: this.p4Surf.render()}), t.push({transform: this.p5Surf.mtx, opacity: this.p5Surf.opacity, target: this.p5Surf.render()}), t.push({transform: this.p6Surf.mtx, opacity: this.p6Surf.opacity, target: this.p6Surf.render()}), t
        }, e.prototype.setP1 = function (t, i, s) {
            this.set(t, i, s, this.x2, this.y2, this.z2, this.x3, this.y3, this.z3)
        }, e.prototype.setP2 = function (t, i, s) {
            this.set(this.x1, this.y1, this.z1, t, i, s, this.x3, this.y3, this.z3)
        }, e.prototype.setP3 = function (t, i, s) {
            this.set(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2, t, i, s)
        }, e.prototype.set = function (t, i, s, e, o, n, r, a, h) {
            this.x1 = t, this.y1 = i, this.z1 = s, this.x2 = e, this.y2 = o, this.z2 = n, this.x3 = r, this.y3 = a, this.z3 = h, this.calculateTransform()
        }, e.prototype.getP1 = function () {
            return[this.x1, this.y1, this.z1]
        }, e.prototype.getP2 = function () {
            return[this.x2, this.y2, this.z2]
        }, e.prototype.getP3 = function () {
            return[this.x3, this.y3, this.z3]
        }, e.prototype.getLength = function () {
            return this.length
        }, e.prototype.calculateTransform = function () {
            var t = 0, i = 0, s = 0, e = 0, o = 0, h = 0, u = 0, p = 0, c = 0, l = r.distance3D(this.x1, this.y1, this.z1, this.x2, this.y2, this.z2), f = r.distance3D(this.x1, this.y1, this.z1, this.x3, this.y3, this.z3), d = r.distance3D(this.x2, this.y2, this.z2, this.x3, this.y3, this.z3), m = 0, v = 0, y = 0, g = 0, x = 0;
            if (l > f ? l > d ? (this.y1 < this.y2 ? (t = this.x1, i = this.y1, s = this.z1, e = this.x2, o = this.y2, h = this.z2) : (t = this.x2, i = this.y2, s = this.z2, e = this.x1, o = this.y1, h = this.z1), u = this.x3, p = this.y3, c = this.z3, v = l) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, s = this.z2, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, v = d) : f > d ? (this.y1 < this.y3 ? (t = this.x1, i = this.y1, s = this.z1, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x1, o = this.y1, h = this.z1), u = this.x2, p = this.y2, c = this.z2, v = f) : (this.y2 < this.y3 ? (t = this.x2, i = this.y2, s = this.z2, e = this.x3, o = this.y3, h = this.z3) : (t = this.x3, i = this.y3, s = this.z3, e = this.x2, o = this.y2, h = this.z2), u = this.x1, p = this.y1, c = this.z1, v = d), e >= t) {
                var S = t, b = i, w = s;
                t = e, i = o, s = h, e = S, o = b, h = w
            }
            var M = new a(t, i, s), T = new a(e, o, h), z = new a(u, p, c), C = new a(t + e, i + o, s + h);
            C.mult(.5, C);
            var P = new a;
            P.add(M).sub(C, P), this.line5.set(C.x, C.y, C.z, C.x + P.x, C.y + P.y, C.z + P.z), this.p5Surf.mtx = n.translate(C.x, C.y, C.z), this.p1Surf.mtx = n.move(n.identity, [t, i, s]), this.p2Surf.mtx = n.move(n.identity, [e, o, h]), this.p3Surf.mtx = n.move(n.identity, [u, p, c]);
            var _ = new a(t + e + u, i + o + p, s + h + c);
            _.mult(1 / 3, _);
            var O = new a;
            O.add(T).sub(M, O);
            var E = new a;
            E.add(z).sub(T, E);
            var I = new a;
            I.add(z).sub(M, I);
            var k = new a;
            O.cross(E, k), m = .5 * k.norm(), y = 2 * m / v;
            var R = new a;
            R = P.cross(k, R), R.normalize(y / 2, R), this.line6.set(C.x, C.y, C.z, C.x + R.x, C.y + R.y, C.z + R.z);
            var F = new a(C.x + R.x, C.y + R.y, C.z + R.z);
            this.p6Surf.mtx = n.translate(F.x, F.y, F.z);
            var A = Math.asin(y / I.getLength()), D = Math.asin(y / E.getLength()), g = y / Math.tan(D) / v, x = y / Math.tan(A) / v;
            k.normalize(150, k), this.line4.set(_.x, _.y, _.z, _.x + k.x, _.y + k.y, _.z + k.z), this.p4Surf.mtx = n.translate(_.x, _.y, _.z);
            var N = Math.acos(O.dot(E) / (O.norm() * E.norm())), L = Math.atan2(k.x, Math.sqrt(k.z * k.z + k.y * k.y)), B = Math.atan2(-k.y, k.z);
            this.surface.setProperties({"border-radius": "0px", "border-right": this.size * x + "px solid red", "border-left": this.size * g + "px solid green", "border-bottom": this.size + "px solid rgba(" + this.red + ", " + this.green + ", " + this.blue + ", 1.0)"});
            var U = _.x - (_.x - F.x), q = _.y - (_.y - F.y), H = _.z - (_.z - F.z);
            this.line1.setLineWidth(10), this.line1.set(0, 0, 0, _.x, _.y, _.z), this.mtx = n.scale(this.invSize * v, this.invSize * y, 1), this.mtx = n.multiply(this.mtx, n.rotateZ(-N + .5 * Math.PI), n.rotate(B, L, 0)), this.mtx = n.move(this.mtx, [U, q, H])
        }, s.exports = e
    }), define("famous-gl/Effect", ["require", "exports", "module"], function (t, i, s) {
        function e(t) {
            this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: void 0, fragmentChunk: void 0}, this.setOptions(t)
        }

        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i])
        }, e.prototype.getUniform = function (t) {
            var i = this.options.vertexUniforms, s = this.options.fragmentUniforms;
            return void 0 !== i && void 0 !== i[t] ? i[t] : void 0 !== s && void 0 !== s[t] ? s[t] : void 0
        }, e.prototype.setUniform = function (t, i) {
            var s = this.getUniform(t);
            s && (s.value = i)
        }, e.prototype.getVertexUniform = function () {
            return this.options.vertexUniforms
        }, e.prototype.getFragmentUniform = function () {
            return this.options.fragmentUniforms
        }, e.prototype.getVertexDefines = function () {
            return this.options.vertexDefines
        }, e.prototype.getVertexUniforms = function () {
            return this.options.vertexUniforms
        }, e.prototype.getVertexChunk = function () {
            return this.options.vertexChunk
        }, e.prototype.getFragmentDefines = function () {
            return this.options.fragmentDefines
        }, e.prototype.getFragmentUniforms = function () {
            return this.options.fragmentUniforms
        }, e.prototype.getFragmentChunk = function () {
            return this.options.fragmentChunk
        }, s.exports = e
    }), define("famous-gl/Effects/BlackAndWhiteEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: ["const vec3 lumcoeff = vec3(0.299,0.587,0.114);"], fragmentUniforms: {exposure: {value: 2}, brightness: {value: 2}, lumacomponents: {value: [1, 0, 0]}}, fragmentChunk: ["color.rgb *= (exp2(color.rgb)*vec3(exposure));", "vec3 lumacomponents = vec3(lumcoeff * lumacomponents);", "float luminance = dot(color.rgb,lumacomponents);", "color.rgb = vec3(luminance)*brightness;"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setExposure = function (t) {
            this.options.exposure.value = t
        }, e.prototype.setBrightness = function (t) {
            this.options.brightness.value = t
        }, e.prototype.setLumaComponents = function (t) {
            this.options.lumacomponents.value = t
        }, s.exports = e
    }), define("famous-gl/Effects/CartesianToPolarEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: void 0, fragmentChunk: ["vec2 normalizedCoords = vec2(2.0)*vec2(v_texcoord.x*v_aspect, v_texcoord.y)-vec2(1.0*v_aspect, 1.0);", "float theta = (PI + atan(normalizedCoords.x,normalizedCoords.y))/TWO_PI;", "float r = length(normalizedCoords);", "vec2 polar = vec2(theta, r);", "color.rgb = texture2D(u_texture, polar).rgb;"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/DuoToneEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: {highcolor: {value: [1, 0, 1]}, lowcolor: {value: [1, 1, 0]}, thresh: {value: .8}}, fragmentChunk: ["vec3 duoToneResult = vec3(color.r + color.g + color.b / 3.0);", "duoToneResult = (duoToneResult.r < thresh ) ? lowcolor : highcolor;", "color.rgb = duoToneResult;"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/ExposureEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: ["const float sqrtoftwo = 1.41421356237;"], fragmentUniforms: {exposure: {value: 1}}, fragmentChunk: ["color.rgb *= log2(vec3(pow(exposure + sqrtoftwo, 2.0)));"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/InvertColorEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: void 0, fragmentChunk: ["color.rgb = clamp(vec3(1.0) - color.rgb, 0.0, 1.0);"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/LightTunnelEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: {radius: {value: 1}, origin: {value: [-.5, -.5]}}, fragmentChunk: ["vec2 two = vec2(2.0, 2.0);", "vec2 torigin = vec2(origin.x*v_aspect, origin.y);", "vec2 center = vec2(0.5*v_aspect, 0.5);", "vec2 point = vec2(v_texcoord.x*v_aspect, v_texcoord.y);", "vec2 normCoord = (two * point) - center;", "normCoord += torigin;", "float r = length(normCoord);", "float phi = atan(normCoord.y, normCoord.x);", "if (r > radius*v_aspect) r = radius*v_aspect;", "normCoord.x = r* cos(phi);", "normCoord.y = r* sin(phi);", "normCoord -= torigin;", "vec2 texCoord = ((normCoord + center) / vec2(2.0*v_aspect, 2.0));", "color.rgb = texture2D(u_texture, texCoord).rgb;"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/LomoEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: ["const vec4 one = vec4(1.0);", "const vec4 two = vec4(2.0);", "const vec4 lomolumcoeff = vec4(0.299,0.587,0.114, 0.);", "", "vec4 vignetteFunction(vec2 normalizedTexcoord) {", "	normalizedTexcoord = 2.0 * normalizedTexcoord - 1.0;", "	float r = length(normalizedTexcoord);", "	return 1.0 - vec4(smoothstep(0.5,1.0,r)) + 0.5;", "}", "", "vec4 hardlight(vec4 a, vec4 b, float amount)", "{", "vec4 result;", "vec4 branch1;", "vec4 branch2;", "float luminance = dot(b,lomolumcoeff);", "float mixamount;", "", "mixamount = clamp((luminance - 0.45) * 10., 0., 1.);", "branch1 = two * a * b;", "branch2 = one - (two * (one - a) * (one - b));", "", "result =  mix(branch1,branch2, vec4(mixamount));", "", "return mix(a,result, amount);", "}"], fragmentUniforms: {sharpness: {value: .00125}, amount: {value: .5}}, fragmentChunk: ["vec2 tc1 = v_texcoord + vec2(-sharpness, -sharpness);", "vec2 tc2 = v_texcoord + vec2(+sharpness, -sharpness);", "vec2 tc3 = v_texcoord + vec2(+sharpness, +sharpness);", "vec2 tc4 = v_texcoord + vec2(-sharpness, +sharpness);", "vec2 normcoord = v_texcoord;", "vec4 input0 = texture2D(u_texture, v_texcoord);", "vec4 input1 = texture2D(u_texture, tc1);", "vec4 input2 = texture2D(u_texture, tc2);", "vec4 input3 = texture2D(u_texture, tc3);", "vec4 input4 = texture2D(u_texture, tc4);", "vec4 sharpened = 5.0 * input0 - (input1 + input2 + input3 + input4);", "vec4 hardlighted = hardlight(sharpened, input0, 0.5);", "vec4 saturated = mix(vec4(dot(hardlighted,lomolumcoeff)), hardlighted, 0.75);", "vec4 result;", "result.r = saturated.r;", "result.g = saturated.g;", "result.b = saturated.b;", "result.a = saturated.a;", "color.rgb = mix(input0, result, amount).rgb;"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/PixelateEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: {pixelScale: {value: 1}}, fragmentChunk: ["vec2 texCoordsStep = 1.0/v_resolution.xy*pixelScale;", "vec2 pixelBin = floor(v_texcoord/texCoordsStep);", "vec2 inPixelStep = texCoordsStep/3.0;", "vec2 inPixelHalfStep = inPixelStep/2.0;", "vec2 offset = pixelBin * texCoordsStep;", "vec2 offset0 = vec2(inPixelHalfStep.x, inPixelStep.y*2.0 + inPixelHalfStep.y) + offset;", "vec2 offset1 = vec2(inPixelStep.x + inPixelHalfStep.x, inPixelStep.y*2.0 + inPixelHalfStep.y) + offset;", "vec2 offset2 = vec2(inPixelStep.x*2.0 + inPixelHalfStep.x, inPixelStep.y*2.0 + inPixelHalfStep.y) + offset;", "vec2 offset3 = vec2(inPixelHalfStep.x, inPixelStep.y + inPixelHalfStep.y) + offset;", "vec2 offset4 = vec2(inPixelStep.x + inPixelHalfStep.x, inPixelStep.y + inPixelHalfStep.y) + offset;", "vec2 offset5 = vec2(inPixelStep.x*2.0 + inPixelHalfStep.x, inPixelStep.y + inPixelHalfStep.y) + offset;", "vec2 offset6 = vec2(inPixelHalfStep.x, inPixelHalfStep.y) + offset;", "vec2 offset7 = vec2(inPixelStep.x + inPixelHalfStep.x, inPixelHalfStep.y) + offset;", "vec2 offset8 = vec2(inPixelStep.x*2.0 + inPixelHalfStep.x, inPixelHalfStep.y) + offset;", "vec4 input0 = texture2D(u_texture,offset0);", "vec4 input1 = texture2D(u_texture,offset1);", "vec4 input2 = texture2D(u_texture,offset2);", "vec4 input3 = texture2D(u_texture,offset3);", "vec4 input4 = texture2D(u_texture,offset4);", "vec4 input5 = texture2D(u_texture,offset5);", "vec4 input6 = texture2D(u_texture,offset6);", "vec4 input7 = texture2D(u_texture,offset7);", "vec4 input8 = texture2D(u_texture,offset8);", "vec4 avgColor = input0 + input1 + input2 + input3 + input4 + input5 + input6 + input7 + input8;", "avgColor /= 9.0;", "color.rgb = avgColor.rgb;"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/PolarToCartesianEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: void 0, fragmentChunk: ["vec2 polToCart = 2.0*v_texcoord - 1.0;", "float theta = PI + polToCart.x*PI;", "float r = (1.0 + polToCart.y)*0.5;", "vec2 cartesian = r*vec2(sin(theta)/v_aspect, cos(theta));", "cartesian = vec2(0.5, 0.5) - cartesian/2.0;", "color.rgb = texture2D(u_texture, cartesian).rgb;"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/ScanlineEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: {scanTime: {value: 1}, scanOffset: {value: 5}}, fragmentChunk: ["vec4 col = vec4(1.0);", "float colorOffset = scanOffset/1000.0;", "float xScanOffset = cos(scanTime*0.01)*colorOffset;", "col.r = texture2D(u_texture,vec2(v_texcoord.x+xScanOffset,v_texcoord.y+colorOffset)).x;", "col.g = texture2D(u_texture,vec2(v_texcoord.x+xScanOffset, v_texcoord.y-xScanOffset)).y;", "col.b = texture2D(u_texture,vec2(v_texcoord.x-xScanOffset,v_texcoord.y-colorOffset)).z;", "col.rgb *= 1.0+1.0*sin(scanTime+v_texcoord.y*v_resolution.y);", "color.rgb *= col.rgb;"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/Technicolor1Effect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: ["const vec4 redfilter        = vec4(1.0, 0.0, 0.0, 0.0);", "const vec4 bluegreenfilter  = vec4(0.0, 1.0, 0.7, 0.0);"], fragmentUniforms: {amount: {value: 1}}, fragmentChunk: ["vec4 redrecord = color * redfilter;", "vec4 bluegreenrecord = color * bluegreenfilter;", "vec4 rednegative = vec4(redrecord.r);", "vec4 bluegreennegative = vec4((bluegreenrecord.g + bluegreenrecord.b)/2.0);", "vec4 redoutput = rednegative * redfilter;", "vec4 bluegreenoutput = bluegreennegative * bluegreenfilter;", "vec4 result = redoutput + bluegreenoutput;", "color = mix(color, result, amount);"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/Technicolor2Effect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: ["const vec4 redfilter        = vec4(1.0, 0.0, 0.0, 0.0);", "const vec4 bluegreenfilter  = vec4(0.0, 1.0, 1.0, 0.0);", "const vec4 cyanfilter       = vec4(0.0, 1.0, 0.5, 0.0);", "const vec4 magentafilter    = vec4(1.0, 0.0, 0.25, 0.0);"], fragmentUniforms: {amount: {value: 1}}, fragmentChunk: ["vec4 redrecord = color * redfilter;", "vec4 bluegreenrecord = color * bluegreenfilter;", "vec4 rednegative = vec4(redrecord.r);", "vec4 bluegreennegative = vec4((bluegreenrecord.g + bluegreenrecord.b)/2.0);", "vec4 redoutput = rednegative + cyanfilter;", "vec4 bluegreenoutput = bluegreennegative + magentafilter;", "vec4 result = redoutput * bluegreenoutput;", "color = mix(color, result, amount);"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/Technicolor3Effect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: {amount: {value: 1}}, fragmentChunk: ["vec3 redmatte = vec3(color.r - ((color.g + color.b)/2.0));", "vec3 greenmatte = vec3(color.g - ((color.r + color.b)/2.0));", "vec3 bluematte = vec3(color.b - ((color.r + color.g)/2.0));", "redmatte = 1.0 - redmatte;", "greenmatte = 1.0 - greenmatte;", "bluematte = 1.0 - bluematte;", "vec3 red = greenmatte * bluematte * color.r;", "vec3 green = redmatte * bluematte * color.g;", "vec3 blue = redmatte * greenmatte * color.b;", "color.rgb = mix(color.rgb, vec3(red.r, green.g, blue.b), amount);"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/TwirlEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: {twirl: {value: 3}, size: {value: 1}, origin: {value: [-.5, -.5]}}, fragmentChunk: ["vec2 two = vec2(2.0, 2.0);", "vec2 torigin = vec2(origin.x*v_aspect, origin.y);", "vec2 center = vec2(0.5*v_aspect, 0.5);", "vec2 point = vec2(v_texcoord.x*v_aspect, v_texcoord.y);", "vec2 normCoord = (two * point) - center;", "normCoord += torigin;", "float r = length(normCoord);", "float phi = atan(normCoord.y, normCoord.x);", "phi = phi + (1.0 - smoothstep(-size, size,r)) * twirl;", "normCoord.x = r*cos(phi);", "normCoord.y = r*sin(phi);", "normCoord -= torigin;", "vec2 texCoord = ((normCoord + center) / vec2(2.0*v_aspect, 2.0));", "color.rgb = texture2D(u_texture, texCoord).rgb;"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Effects/VignetteEffect", ["require", "exports", "module", "../Effect"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options = {vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentDefines: void 0, fragmentUniforms: {vignette: {value: 3}}, fragmentChunk: ["float dist = 1.0 - distance(vec2(v_texcoord.x, v_texcoord.y/v_aspect), vec2(0.5, 0.5/v_aspect));", "dist = clamp(pow(dist, vignette), 0.0, 1.0);", "color.rgb *= dist;"]}, this.setOptions(t)
        }

        var o = t("../Effect");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, s.exports = e
    }), define("famous-gl/Primitive", ["require", "exports", "module", "famous-utils/Utils", "famous/Matrix", "famous-math/Vector"], function (t, i, s) {
        function e(t) {
            this.options = {obj: void 0, scale: 1, drawMode: -1, transform: void 0, positions: void 0, normals: void 0, texcoords: void 0, colors: void 0}, this.setOptions(t)
        }

        function o(t, i) {
            for (var s = [], e = 0; e < t.length; e++)for (var o = i[t[e]], n = 0; n < o.length; n++)s.push(o[n]);
            return s
        }

        var n = t("famous-utils/Utils"), r = t("famous/Matrix"), a = t("famous-math/Vector");
        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i]);
            this.drawMode = this.options.drawMode, this.positions = this.options.positions || [], this.normals = this.options.normals || [], this.texcoords = this.options.texcoords || [], this.colors = this.options.colors || [], this.geometryCache = void 0, this.options.obj && this.loadFromObj(this.options.obj, this.options.scale)
        }, e.prototype.loadFromObj = function (t, i) {
            this.setDrawMode(e.TRIANGLES);
            var s = [], a = [], h = [], u = [], p = [], c = [], l = t.split("\n");
            this.options.scale = i ? i : 1;
            for (var f = this.options.scale, d = 0; d < l.length; d++) {
                var m = l[d];
                if (-1 !== m.indexOf("v ")) {
                    var v = m.split(" "), y = parseFloat(v[1]) * f, g = parseFloat(v[2]) * f, x = parseFloat(v[3]) * f;
                    s.push([y, g, x])
                } else if (-1 !== m.indexOf("vt ")) {
                    var S = m.split(" "), b = parseFloat(S[1]), w = parseFloat(S[2]);
                    c.push([b, w])
                } else if (-1 !== m.indexOf("vn ")) {
                    var M = m.split(" "), T = parseFloat(M[1]), z = parseFloat(M[2]), C = parseFloat(M[3]);
                    a.push([T, z, C])
                } else if (-1 !== m.indexOf("f ")) {
                    var P = m.split(" ");
                    if (-1 !== P[1].indexOf("//")) {
                        var _ = P[1].split("//"), O = P[2].split("//"), E = P[3].split("//");
                        h.push(parseFloat(_[0]) - 1, parseFloat(O[0]) - 1, parseFloat(E[0]) - 1), p.push(parseFloat(_[1]) - 1, parseFloat(O[1]) - 1, parseFloat(E[1]) - 1)
                    } else if (-1 !== P[1].indexOf("/")) {
                        var _ = P[1].split("/"), O = P[2].split("/"), E = P[3].split("/");
                        h.push(parseFloat(_[0]) - 1, parseFloat(O[0]) - 1, parseFloat(E[0]) - 1), u.push(parseFloat(_[1]) - 1, parseFloat(O[1]) - 1, parseFloat(E[1]) - 1), p.push(parseFloat(_[2]) - 1, parseFloat(O[2]) - 1, parseFloat(E[2]) - 1)
                    } else h.push(parseFloat(P[1]) - 1, parseFloat(P[2]) - 1, parseFloat(P[3]) - 1)
                }
            }
            var I = this.options.transform;
            if (void 0 !== I) {
                for (var k = s.length, d = 0; k > d; d++) {
                    var R = s[d], F = r.translate(R[0], R[1], R[2]);
                    F = r.multiply4x4(F, I), s[d][0] = F[12], s[d][1] = F[13], s[d][2] = F[14]
                }
                for (var A = n.normalFromFM(r.identity.slice(0), I), D = a.length, d = 0; D > d; d++) {
                    var N = a[d];
                    a[d][0] = A[0] * N[0] + A[1] * N[1] + A[2] * N[2], a[d][1] = A[3] * N[0] + A[4] * N[1] + A[5] * N[2], a[d][2] = A[6] * N[0] + A[7] * N[1] + A[8] * N[2]
                }
            }
            s = o(h, s), a = o(p, a), c = o(u, c), this.setPositions(s), this.setNormals(a), this.setTextureCoords(c)
        }, e.prototype.setDrawMode = function (t) {
            this.drawMode = t
        }, e.prototype.getDrawMode = function () {
            return this.drawMode
        }, e.prototype.setPositions = function (t) {
            this.positions = t, this.geometryCache && this.geometryCache.updatePositions(this.positions)
        }, e.prototype.setNormals = function (t) {
            this.normals = t, this.geometryCache && this.geometryCache.updateNormals(this.normals)
        }, e.prototype.setColors = function (t) {
            this.colors = t, this.geometryCache && this.geometryCache.updateColors(this.colors)
        }, e.prototype.setTextureCoords = function (t) {
            this.texcoords = t, this.geometryCache && this.geometryCache.updateTextureCoords(this.texcoords)
        }, e.prototype.getPositions = function () {
            return this.positions
        }, e.prototype.getTextureCoords = function () {
            return this.texcoords
        }, e.prototype.getNormals = function () {
            return this.normals
        }, e.prototype.getColors = function () {
            return this.colors
        }, e.prototype.getGeometryCache = function () {
            return this.geometryCache
        }, e.prototype.setGeometryCache = function (t) {
            this.geometryCache = t
        }, e.prototype.hasCache = function () {
            return this.geometryCache ? !0 : !1
        }, e.prototype.calculateNormal = function (t, i, s, e, o, n, r, h, u) {
            var p = new a(e - t, o - i, n - s), c = new a(r - t, h - i, u - s), l = new a;
            return p.cross(c, l), l.normalize(1, l), l.toArray()
        }, e.UNKNOWN = -1, e.POINTS = 0, e.LINES = 1, e.LINE_LOOP = 2, e.LINE_STRIP = 3, e.TRIANGLES = 4, e.TRIANGLE_STRIP = 5, e.TRIANGLE_FAN = 6, s.exports = e
    }), define("famous-gl/Primitives/ArcPrimitive", ["require", "exports", "module", "../Primitive", "famous-utils/Utils"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options.innerRadius = 100, this.options.outerRadius = 150, this.options.resolution = 60, this.options.radialResolution = void 0, this.options.angleResolution = void 0, this.options.angle = Math.PI, this.options.drawMode = o.TRIANGLE_STRIP, this.setOptions(t), this.setup()
        }

        var o = t("../Primitive"), n = t("famous-utils/Utils");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            this.drawMode === o.TRIANGLES || this.drawMode === o.TRIANGLE_STRIP || this.drawMode === o.TRIANGLE_FAN ? (this.drawMode = o.TRIANGLES, this.makeFilledArcTriangles()) : this.drawMode === o.LINES ? this.makeLinedArc() : this.drawMode === o.LINE_LOOP || this.drawMode === o.LINE_STRIP ? (this.drawMode = o.LINES, this.makeOutlinedArc()) : (this.drawMode = o.POINTS, this.makePointArc())
        }, e.prototype.makeFilledArcTriangles = function () {
            var t = [], i = [], s = [], e = this.options.innerRadius, o = this.options.outerRadius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.angle, u = 0; a > u; u++)for (var p = n.map(u, 0, a, e, o), c = 0; r > c; c++) {
                var l = n.map(c, 0, r, 0, h), f = n.map(c + 1, 0, r, 0, h), d = n.map(u + 1, 0, a, e, o), m = p * Math.cos(l), v = p * Math.sin(l), y = p * Math.cos(f), g = p * Math.sin(f), x = d * Math.cos(f), S = d * Math.sin(f), b = d * Math.cos(l), w = d * Math.sin(l), M = c / r, T = (c + 1) / r, z = u / a, C = (u + 1) / a;
                t.push(m, v, 0), i.push(0, 0, 1), s.push(M, z), t.push(x, S, 0), i.push(0, 0, 1), s.push(T, C), t.push(y, g, 0), i.push(0, 0, 1), s.push(T, z), t.push(m, v, 0), i.push(0, 0, 1), s.push(M, z), t.push(b, w, 0), i.push(0, 0, 1), s.push(M, C), t.push(x, S, 0), i.push(0, 0, 1), s.push(T, C)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.makeLinedArc = function () {
            var t = [], i = [], s = [], e = this.options.innerRadius, o = this.options.outerRadius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.angle, u = 0; a > u; u++)for (var p = n.map(u, 0, a, e, o), c = 0; r > c; c++) {
                var l = n.map(c, 0, r, 0, h), f = n.map(c + 1, 0, r, 0, h), d = n.map(u + 1, 0, a, e, o), m = p * Math.cos(l), v = p * Math.sin(l), y = p * Math.cos(f), g = p * Math.sin(f), x = d * Math.cos(f), S = d * Math.sin(f), b = d * Math.cos(l), w = d * Math.sin(l);
                t.push(m, v, 0), t.push(y, g, 0), t.push(y, g, 0), t.push(x, S, 0), t.push(x, S, 0), t.push(b, w, 0), t.push(b, w, 0), t.push(m, v, 0), i.push(0, 0, 1), i.push(0, 0, 1), i.push(0, 0, 1), i.push(0, 0, 1), i.push(0, 0, 1), i.push(0, 0, 1), i.push(0, 0, 1), i.push(0, 0, 1);
                var M = c / r, T = (c + 1) / r, z = u / a, C = (u + 1) / a;
                s.push(M, z), s.push(T, z), s.push(T, z), s.push(T, C), s.push(T, C), s.push(M, C), s.push(M, C), s.push(M, z)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.makeOutlinedArc = function () {
            var t = [], i = [], s = [], e = this.options.innerRadius, o = this.options.outerRadius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.angle, u = 0; a >= u; u++)for (var p = n.map(u, 0, a, e, o), c = 0; r > c; c++) {
                var l = n.map(c, 0, r, 0, h), f = n.map(c + 1, 0, r, 0, h), d = Math.cos(l), m = Math.sin(l), v = Math.cos(f), y = Math.sin(f), g = c / r, x = (c + 1) / r;
                t.push(d * p, m * p, 0), i.push(0, 0, 1), s.push(g, u / a), t.push(v * p, y * p, 0), i.push(0, 0, 1), s.push(x, u / a)
            }
            if (h !== 2 * Math.PI)for (var c = 0; r >= c; c += r)for (var l = n.map(c, 0, r, 0, h), u = 0; a > u; u++) {
                var p = n.map(u, 0, a, e, o), S = n.map(u + 1, 0, a, e, o), d = Math.cos(l), m = Math.sin(l), g = c / r;
                t.push(d * p, m * p, 0), i.push(0, 0, 1), s.push(g, u / a), t.push(d * S, m * S, 0), i.push(0, 0, 1), s.push(g, (u + 1) / a)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.makePointArc = function () {
            var t = [], i = [], s = [], e = this.options.innerRadius, o = this.options.outerRadius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.angle, u = 0; a >= u; u++)for (var p = n.map(u, 0, a, e, o), c = 0; r >= c; c++) {
                var l = n.map(c, 0, r, 0, h), f = Math.cos(l), d = Math.sin(l);
                t.push(f * p, d * p, 0), i.push(0, 0, 1), s.push(c / r, u / a)
            }
            if (1 === a && h !== 2 * Math.PI)for (var m = o - e, v = .5 * Math.PI * Math.max(o, e), y = v / r, g = Math.max(Math.floor(m / y), 1), c = 1; g > c; c++) {
                var f = Math.cos(0), d = Math.sin(0), x = Math.cos(h), S = Math.sin(h), p = n.map(c, 0, g, e, o);
                t.push(f * p, d * p, 0), i.push(0, 0, 1), s.push(0, c / g), t.push(x * p, S * p, 0), i.push(0, 0, 1), s.push(1, c / g)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, s.exports = e
    }), define("famous-gl/Primitives/BoxPrimitive", ["require", "exports", "module", "../Primitive", "famous-utils/Utils"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options.width = 100, this.options.height = 100, this.options.depth = 100, this.options.resolution = 1, this.options.resolutionX = void 0, this.options.resolutionY = void 0, this.options.resolutionZ = void 0, this.options.vertical = !1, this.options.drawMode = o.TRIANGLES, this.setOptions(t), this.setup()
        }

        var o = t("../Primitive"), n = t("famous-utils/Utils");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            this.drawMode === o.LINES ? (this.drawMode = o.LINES, this.setupOutlineBox()) : this.drawMode === o.LINE_LOOP || this.drawMode === o.LINE_STRIP ? (this.drawMode = o.LINES, this.setupLoopBox()) : this.drawMode === o.TRIANGLES || this.drawMode === o.TRIANGLE_STRIP || this.drawMode === o.TRIANGLE_FAN ? (this.drawMode = o.TRIANGLES, this.setupFilledBox()) : this.drawMode === o.POINTS && this.setupPointBox()
        }, e.prototype.setupFilledBox = function () {
            for (var t = [], i = [], s = [], e = this.options.width, o = this.options.height, r = this.options.depth, a = this.options.resolutionX ? this.options.resolutionX : this.options.resolution, h = this.options.resolutionY ? this.options.resolutionY : this.options.resolution, u = this.options.resolutionZ ? this.options.resolutionZ : this.options.resolution, p = e / a, c = o / h, l = r / u, f = .5 * -e, d = .5 * o, m = .5 * -r, v = 0; a > v; v++)for (var y = 0; h > y; y++) {
                var g = f + v * p, x = d - y * c, S = -m, b = f + (v + 1) * p, w = d - y * c, M = -m, T = f + (v + 1) * p, z = d - (y + 1) * c, C = -m, P = f + v * p, _ = d - (y + 1) * c, O = -m;
                t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, f, -f, 0, 1), n.map(x, d, -d, 0, 1)), t.push(P, _, O), i.push(0, 0, 1), s.push(n.map(P, f, -f, 0, 1), n.map(_, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, f, -f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, f, -f, 0, 1), n.map(x, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, f, -f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(b, w, M), i.push(0, 0, 1), s.push(n.map(b, f, -f, 0, 1), n.map(w, d, -d, 0, 1))
            }
            for (var v = 0; a > v; v++)for (var y = 0; h > y; y++) {
                var g = f + v * p, x = d - y * c, S = m, b = f + (v + 1) * p, w = d - y * c, M = m, T = f + (v + 1) * p, z = d - (y + 1) * c, C = m, P = f + v * p, _ = d - (y + 1) * c, O = m;
                t.push(g, x, S), i.push(0, 0, -1), s.push(n.map(g, -f, f, 0, 1), n.map(x, d, -d, 0, 1)), t.push(P, _, O), i.push(0, 0, -1), s.push(n.map(P, -f, f, 0, 1), n.map(_, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, -1), s.push(n.map(T, -f, f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(g, x, S), i.push(0, 0, -1), s.push(n.map(g, -f, f, 0, 1), n.map(x, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, -1), s.push(n.map(T, -f, f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(b, w, M), i.push(0, 0, -1), s.push(n.map(b, -f, f, 0, 1), n.map(w, d, -d, 0, 1))
            }
            for (var v = 0; a > v; v++)for (var E = 0; u > E; E++) {
                var g = f + v * p, x = d, S = m + E * l, b = f + (v + 1) * p, w = d, M = m + E * l, T = f + (v + 1) * p, z = d, C = m + (E + 1) * l, P = f + v * p, _ = d, O = m + (E + 1) * l;
                t.push(g, x, S), i.push(0, 1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, m, -m, 0, 1)), t.push(P, _, O), i.push(0, 1, 0), s.push(n.map(P, f, -f, 0, 1), n.map(O, m, -m, 0, 1)), t.push(T, z, C), i.push(0, 1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, m, -m, 0, 1)), t.push(g, x, S), i.push(0, 1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, m, -m, 0, 1)), t.push(T, z, C), i.push(0, 1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, m, -m, 0, 1)), t.push(b, w, M), i.push(0, 1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, m, -m, 0, 1))
            }
            for (var v = 0; a > v; v++)for (var E = 0; u > E; E++) {
                var g = f + v * p, x = -d, S = m + E * l, b = f + (v + 1) * p, w = -d, M = m + E * l, T = f + (v + 1) * p, z = -d, C = m + (E + 1) * l, P = f + v * p, _ = -d, O = m + (E + 1) * l;
                t.push(g, x, S), i.push(0, -1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, -m, m, 0, 1)), t.push(P, _, O), i.push(0, -1, 0), s.push(n.map(P, f, -f, 0, 1), n.map(O, -m, m, 0, 1)), t.push(T, z, C), i.push(0, -1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, -m, m, 0, 1)), t.push(g, x, S), i.push(0, -1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, -m, m, 0, 1)), t.push(T, z, C), i.push(0, -1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, -m, m, 0, 1)), t.push(b, w, M), i.push(0, -1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, -m, m, 0, 1))
            }
            for (var E = 0; u > E; E++)for (var y = 0; h > y; y++) {
                var g = -f, x = d - y * c, S = -m - E * l, b = -f, w = d - y * c, M = -m - (E + 1) * l, T = -f, z = d - (y + 1) * c, C = -m - (E + 1) * l, P = -f, _ = d - (y + 1) * c, O = -m - E * l;
                t.push(g, x, S), i.push(1, 0, 0), s.push(n.map(S, -m, m, 0, 1), n.map(x, d, -d, 0, 1)), t.push(P, _, O), i.push(1, 0, 0), s.push(n.map(O, -m, m, 0, 1), n.map(_, d, -d, 0, 1)), t.push(T, z, C), i.push(1, 0, 0), s.push(n.map(C, -m, m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(g, x, S), i.push(1, 0, 0), s.push(n.map(S, -m, m, 0, 1), n.map(x, d, -d, 0, 1)), t.push(T, z, C), i.push(1, 0, 0), s.push(n.map(C, -m, m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(b, w, M), i.push(1, 0, 0), s.push(n.map(M, -m, m, 0, 1), n.map(w, d, -d, 0, 1))
            }
            for (var E = 0; u > E; E++)for (var y = 0; h > y; y++) {
                var g = f, x = d - y * c, S = -m - E * l, b = f, w = d - y * c, M = -m - (E + 1) * l, T = f, z = d - (y + 1) * c, C = -m - (E + 1) * l, P = f, _ = d - (y + 1) * c, O = -m - E * l;
                t.push(g, x, S), i.push(-1, 0, 0), s.push(n.map(S, m, -m, 0, 1), n.map(x, d, -d, 0, 1)), t.push(P, _, O), i.push(-1, 0, 0), s.push(n.map(O, m, -m, 0, 1), n.map(_, d, -d, 0, 1)), t.push(T, z, C), i.push(-1, 0, 0), s.push(n.map(C, m, -m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(g, x, S), i.push(-1, 0, 0), s.push(n.map(S, m, -m, 0, 1), n.map(x, d, -d, 0, 1)), t.push(T, z, C), i.push(-1, 0, 0), s.push(n.map(C, m, -m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(b, w, M), i.push(-1, 0, 0), s.push(n.map(M, m, -m, 0, 1), n.map(w, d, -d, 0, 1))
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupOutlineBox = function () {
            for (var t = [], i = [], s = [], e = this.options.width, o = this.options.height, r = this.options.depth, a = this.options.resolutionX ? this.options.resolutionX : this.options.resolution, h = this.options.resolutionY ? this.options.resolutionY : this.options.resolution, u = this.options.resolutionZ ? this.options.resolutionZ : this.options.resolution, p = e / res, c = o / res, l = r / res, f = .5 * -e, d = .5 * o, m = .5 * -r, v = 0; a > v; v++)for (var y = 0; h > y; y++) {
                var g = f + v * p, x = d - y * c, S = -m, b = f + (v + 1) * p, w = d - y * c, M = -m, T = f + (v + 1) * p, z = d - (y + 1) * c, C = -m, P = f + v * p, _ = d - (y + 1) * c, O = -m;
                t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, f, -f, 0, 1), n.map(x, d, -d, 0, 1)), t.push(b, w, M), i.push(0, 0, 1), s.push(n.map(b, f, -f, 0, 1), n.map(w, d, -d, 0, 1)), t.push(b, w, M), i.push(0, 0, 1), s.push(n.map(b, f, -f, 0, 1), n.map(w, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, f, -f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, f, -f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(P, _, O), i.push(0, 0, 1), s.push(n.map(P, f, -f, 0, 1), n.map(_, d, -d, 0, 1)), t.push(P, _, O), i.push(0, 0, 1), s.push(n.map(P, f, -f, 0, 1), n.map(_, d, -d, 0, 1)), t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, f, -f, 0, 1), n.map(x, d, -d, 0, 1))
            }
            for (var v = 0; a > v; v++)for (var y = 0; h > y; y++) {
                var g = f + v * p, x = d - y * c, S = m, b = f + (v + 1) * p, w = d - y * c, M = m, T = f + (v + 1) * p, z = d - (y + 1) * c, C = m, P = f + v * p, _ = d - (y + 1) * c, O = m;
                t.push(g, x, S), i.push(0, 0, -1), s.push(n.map(g, -f, f, 0, 1), n.map(x, d, -d, 0, 1)), t.push(b, w, M), i.push(0, 0, -1), s.push(n.map(b, -f, f, 0, 1), n.map(w, d, -d, 0, 1)), t.push(b, w, M), i.push(0, 0, -1), s.push(n.map(b, -f, f, 0, 1), n.map(w, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, -1), s.push(n.map(T, -f, f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, -1), s.push(n.map(T, -f, f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(P, _, O), i.push(0, 0, -1), s.push(n.map(P, -f, f, 0, 1), n.map(_, d, -d, 0, 1)), t.push(P, _, O), i.push(0, 0, -1), s.push(n.map(P, -f, f, 0, 1), n.map(_, d, -d, 0, 1)), t.push(g, x, S), i.push(0, 0, -1), s.push(n.map(g, -f, f, 0, 1), n.map(x, d, -d, 0, 1))
            }
            for (var v = 0; a > v; v++)for (var E = 0; u > E; E++) {
                var g = f + v * p, x = d, S = m + E * l, b = f + (v + 1) * p, w = d, M = m + E * l, T = f + (v + 1) * p, z = d, C = m + (E + 1) * l, P = f + v * p, _ = d, O = m + (E + 1) * l;
                t.push(g, x, S), i.push(0, 1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, m, -m, 0, 1)), t.push(b, w, M), i.push(0, 1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, m, -m, 0, 1)), t.push(b, w, M), i.push(0, 1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, m, -m, 0, 1)), t.push(T, z, C), i.push(0, 1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, m, -m, 0, 1)), t.push(T, z, C), i.push(0, 1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, m, -m, 0, 1)), t.push(P, _, O), i.push(0, 1, 0), s.push(n.map(P, f, -f, 0, 1), n.map(O, m, -m, 0, 1)), t.push(P, _, O), i.push(0, 1, 0), s.push(n.map(P, f, -f, 0, 1), n.map(O, m, -m, 0, 1)), t.push(g, x, S), i.push(0, 1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, m, -m, 0, 1))
            }
            for (var v = 0; a > v; v++)for (var E = 0; u > E; E++) {
                var g = f + v * p, x = -d, S = m + E * l, b = f + (v + 1) * p, w = -d, M = m + E * l, T = f + (v + 1) * p, z = -d, C = m + (E + 1) * l, P = f + v * p, _ = -d, O = m + (E + 1) * l;
                t.push(g, x, S), i.push(0, -1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, -m, m, 0, 1)), t.push(b, w, M), i.push(0, -1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, -m, m, 0, 1)), t.push(b, w, M), i.push(0, -1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, -m, m, 0, 1)), t.push(T, z, C), i.push(0, -1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, -m, m, 0, 1)), t.push(T, z, C), i.push(0, -1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, -m, m, 0, 1)), t.push(P, _, O), i.push(0, -1, 0), s.push(n.map(P, f, -f, 0, 1), n.map(O, -m, m, 0, 1)), t.push(P, _, O), i.push(0, -1, 0), s.push(n.map(P, f, -f, 0, 1), n.map(O, -m, m, 0, 1)), t.push(g, x, S), i.push(0, -1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, -m, m, 0, 1))
            }
            for (var E = 0; u > E; E++)for (var y = 0; h > y; y++) {
                var g = -f, x = d - y * c, S = -m - E * l, b = -f, w = d - y * c, M = -m - (E + 1) * l, T = -f, z = d - (y + 1) * c, C = -m - (E + 1) * l, P = -f, _ = d - (y + 1) * c, O = -m - E * l;
                t.push(g, x, S), i.push(1, 0, 0), s.push(n.map(S, -m, m, 0, 1), n.map(x, d, -d, 0, 1)), t.push(b, w, M), i.push(1, 0, 0), s.push(n.map(M, -m, m, 0, 1), n.map(w, d, -d, 0, 1)), t.push(b, w, M), i.push(1, 0, 0), s.push(n.map(M, -m, m, 0, 1), n.map(w, d, -d, 0, 1)), t.push(T, z, C), i.push(1, 0, 0), s.push(n.map(C, -m, m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(T, z, C), i.push(1, 0, 0), s.push(n.map(C, -m, m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(P, _, O), i.push(1, 0, 0), s.push(n.map(O, -m, m, 0, 1), n.map(_, d, -d, 0, 1)), t.push(P, _, O), i.push(1, 0, 0), s.push(n.map(O, -m, m, 0, 1), n.map(_, d, -d, 0, 1)), t.push(g, x, S), i.push(1, 0, 0), s.push(n.map(S, -m, m, 0, 1), n.map(x, d, -d, 0, 1))
            }
            for (var E = 0; u > E; E++)for (var y = 0; h > y; y++) {
                var g = f, x = d - y * c, S = -m - E * l, b = f, w = d - y * c, M = -m - (E + 1) * l, T = f, z = d - (y + 1) * c, C = -m - (E + 1) * l, P = f, _ = d - (y + 1) * c, O = -m - E * l;
                t.push(g, x, S), i.push(-1, 0, 0), s.push(n.map(S, m, -m, 0, 1), n.map(x, d, -d, 0, 1)), t.push(b, w, M), i.push(-1, 0, 0), s.push(n.map(M, m, -m, 0, 1), n.map(w, d, -d, 0, 1)), t.push(b, w, M), i.push(-1, 0, 0), s.push(n.map(M, m, -m, 0, 1), n.map(w, d, -d, 0, 1)), t.push(T, z, C), i.push(-1, 0, 0), s.push(n.map(C, m, -m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(T, z, C), i.push(-1, 0, 0), s.push(n.map(C, m, -m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(P, _, O), i.push(-1, 0, 0), s.push(n.map(O, m, -m, 0, 1), n.map(_, d, -d, 0, 1)), t.push(P, _, O), i.push(-1, 0, 0), s.push(n.map(O, m, -m, 0, 1), n.map(_, d, -d, 0, 1)), t.push(g, x, S), i.push(-1, 0, 0), s.push(n.map(S, m, -m, 0, 1), n.map(x, d, -d, 0, 1))
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupLoopBox = function () {
            var t = [], i = [], s = [], e = this.options.width, o = this.options.height, r = this.options.depth, a = this.options.resolutionX ? this.options.resolutionX : this.options.resolution, h = this.options.resolutionY ? this.options.resolutionY : this.options.resolution, u = this.options.resolutionZ ? this.options.resolutionZ : this.options.resolution, p = e / a, c = o / h, l = r / u, f = .5 * -e, d = .5 * o, m = .5 * -r;
            this.options.vertical ? a++ : h++;
            for (var v = 0; a > v; v++)for (var y = 0; h > y; y++) {
                var g = f + v * p, x = d - y * c, S = -m;
                if (t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, f, -f, 0, 1), n.map(x, d, -d, 0, 1)), this.options.vertical) {
                    var b = f + v * p, w = d - (y + 1) * c, M = -m;
                    t.push(b, w, M), i.push(0, 0, 1), s.push(n.map(b, f, -f, 0, 1), n.map(w, d, -d, 0, 1))
                } else {
                    var T = f + (v + 1) * p, z = d - y * c, C = -m;
                    t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, f, -f, 0, 1), n.map(z, d, -d, 0, 1))
                }
            }
            for (var v = 0; a > v; v++)for (var y = 0; h > y; y++) {
                var g = f + v * p, x = d - y * c, S = m;
                if (t.push(g, x, S), i.push(0, 0, -1), s.push(n.map(g, -f, f, 0, 1), n.map(x, d, -d, 0, 1)), this.options.vertical) {
                    var b = f + v * p, w = d - (y + 1) * c, M = m;
                    t.push(b, w, M), i.push(0, 0, -1), s.push(n.map(b, -f, f, 0, 1), n.map(w, d, -d, 0, 1))
                } else {
                    var T = f + (v + 1) * p, z = d - y * c, C = m;
                    t.push(T, z, C), i.push(0, 0, -1), s.push(n.map(T, -f, f, 0, 1), n.map(z, d, -d, 0, 1))
                }
            }
            if (this.options.vertical) {
                for (var v = 0; a > v; v++)for (var P = 0; u > P; P++) {
                    var g = f + v * p, x = d, S = m + P * l;
                    if (t.push(g, x, S), i.push(0, 1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, m, -m, 0, 1)), this.options.vertical) {
                        var b = f + v * p, w = d, M = m + (P + 1) * l;
                        t.push(b, w, M), i.push(0, 1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, m, -m, 0, 1))
                    } else {
                        var T = f + (v + 1) * p, z = d, C = m + P * l;
                        t.push(T, z, C), i.push(0, 1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, m, -m, 0, 1))
                    }
                }
                for (var v = 0; a > v; v++)for (var P = 0; u > P; P++) {
                    var g = f + v * p, x = -d, S = m + P * l;
                    if (t.push(g, x, S), i.push(0, -1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, -m, m, 0, 1)), this.options.vertical) {
                        var b = f + v * p, w = -d, M = m + (P + 1) * l;
                        t.push(b, w, M), i.push(0, -1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, -m, m, 0, 1))
                    } else {
                        var T = f + (v + 1) * p, z = -d, C = m + P * l;
                        t.push(T, z, C), i.push(0, -1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, -m, m, 0, 1))
                    }
                }
            } else {
                for (var P = 0; u > P; P++)for (var y = 0; h > y; y++) {
                    var g = -f, x = d - y * c, S = -m - P * l;
                    if (t.push(g, x, S), i.push(1, 0, 0), s.push(n.map(S, -m, m, 0, 1), n.map(x, d, -d, 0, 1)), this.options.vertical) {
                        var b = -f, w = d - (y + 1) * c, M = -m - P * l;
                        t.push(b, w, M), i.push(1, 0, 0), s.push(n.map(M, -m, m, 0, 1), n.map(w, d, -d, 0, 1))
                    } else {
                        var T = -f, z = d - y * c, C = -m - (P + 1) * l;
                        t.push(T, z, C), i.push(1, 0, 0), s.push(n.map(C, -m, m, 0, 1), n.map(z, d, -d, 0, 1))
                    }
                }
                for (var P = 0; u > P; P++)for (var y = 0; h > y; y++) {
                    var g = f, x = d - y * c, S = -m - P * l;
                    if (t.push(g, x, S), i.push(-1, 0, 0), s.push(n.map(S, m, -m, 0, 1), n.map(x, d, -d, 0, 1)), this.options.vertical) {
                        var b = f, w = d - (y + 1) * c, M = -m - P * l;
                        t.push(b, w, M), i.push(-1, 0, 0), s.push(n.map(M, m, -m, 0, 1), n.map(w, d, -d, 0, 1))
                    } else {
                        var T = f, z = d - y * c, C = -m - (P + 1) * l;
                        t.push(T, z, C), i.push(-1, 0, 0), s.push(n.map(C, m, -m, 0, 1), n.map(z, d, -d, 0, 1))
                    }
                }
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupPointBox = function () {
            for (var t = [], i = [], s = [], e = this.options.width, o = this.options.height, r = this.options.depth, a = this.options.resolutionX ? this.options.resolutionX : this.options.resolution, h = this.options.resolutionY ? this.options.resolutionY : this.options.resolution, u = this.options.resolutionZ ? this.options.resolutionZ : this.options.resolution, p = e / a, c = o / h, l = r / u, f = .5 * -e, d = .5 * o, m = .5 * -r, v = 0; a >= v; v++)for (var y = 0; h >= y; y++) {
                var g = f + v * p, x = d - y * c, S = -m;
                t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, f, -f, 0, 1), n.map(x, d, -d, 0, 1))
            }
            for (var v = 0; a >= v; v++)for (var y = 0; h >= y; y++) {
                var g = f + v * p, x = d - y * c, S = m;
                t.push(g, x, S), i.push(0, 0, -1), s.push(n.map(g, -f, f, 0, 1), n.map(x, d, -d, 0, 1))
            }
            for (var v = 0; a >= v; v++)for (var b = 0; u >= b; b++) {
                var g = f + v * p, x = d, S = m + b * l;
                t.push(g, x, S), i.push(0, 1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, m, -m, 0, 1))
            }
            for (var v = 0; a >= v; v++)for (var b = 0; u >= b; b++) {
                var g = f + v * p, x = -d, S = m + b * l;
                t.push(g, x, S), i.push(0, -1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, -m, m, 0, 1))
            }
            for (var b = 0; u >= b; b++)for (var y = 0; h >= y; y++) {
                var g = -f, x = d - y * c, S = -m - b * l;
                t.push(g, x, S), i.push(1, 0, 0), s.push(n.map(S, -m, m, 0, 1), n.map(x, d, -d, 0, 1))
            }
            for (var b = 0; u >= b; b++)for (var y = 0; h >= y; y++) {
                var g = f, x = d - y * c, S = -m - b * l;
                t.push(g, x, S), i.push(-1, 0, 0), s.push(n.map(S, m, -m, 0, 1), n.map(x, d, -d, 0, 1))
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupOutlineBox = function () {
            for (var t = [], i = [], s = [], e = this.options.width, o = this.options.height, r = this.options.depth, a = this.options.resolutionX ? this.options.resolutionX : this.options.resolution, h = this.options.resolutionY ? this.options.resolutionY : this.options.resolution, u = this.options.resolutionZ ? this.options.resolutionZ : this.options.resolution, p = e / a, c = o / h, l = r / u, f = .5 * -e, d = .5 * o, m = .5 * -r, v = 0; a > v; v++)for (var y = 0; h > y; y++) {
                var g = f + v * p, x = d - y * c, S = -m, b = f + (v + 1) * p, w = d - y * c, M = -m, T = f + (v + 1) * p, z = d - (y + 1) * c, C = -m, P = f + v * p, _ = d - (y + 1) * c, O = -m;
                t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, f, -f, 0, 1), n.map(x, d, -d, 0, 1)), t.push(b, w, M), i.push(0, 0, 1), s.push(n.map(b, f, -f, 0, 1), n.map(w, d, -d, 0, 1)), t.push(b, w, M), i.push(0, 0, 1), s.push(n.map(b, f, -f, 0, 1), n.map(w, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, f, -f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, f, -f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(P, _, O), i.push(0, 0, 1), s.push(n.map(P, f, -f, 0, 1), n.map(_, d, -d, 0, 1)), t.push(P, _, O), i.push(0, 0, 1), s.push(n.map(P, f, -f, 0, 1), n.map(_, d, -d, 0, 1)), t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, f, -f, 0, 1), n.map(x, d, -d, 0, 1))
            }
            for (var v = 0; a > v; v++)for (var y = 0; h > y; y++) {
                var g = f + v * p, x = d - y * c, S = m, b = f + (v + 1) * p, w = d - y * c, M = m, T = f + (v + 1) * p, z = d - (y + 1) * c, C = m, P = f + v * p, _ = d - (y + 1) * c, O = m;
                t.push(g, x, S), i.push(0, 0, -1), s.push(n.map(g, -f, f, 0, 1), n.map(x, d, -d, 0, 1)), t.push(b, w, M), i.push(0, 0, -1), s.push(n.map(b, -f, f, 0, 1), n.map(w, d, -d, 0, 1)), t.push(b, w, M), i.push(0, 0, -1), s.push(n.map(b, -f, f, 0, 1), n.map(w, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, -1), s.push(n.map(T, -f, f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(T, z, C), i.push(0, 0, -1), s.push(n.map(T, -f, f, 0, 1), n.map(z, d, -d, 0, 1)), t.push(P, _, O), i.push(0, 0, -1), s.push(n.map(P, -f, f, 0, 1), n.map(_, d, -d, 0, 1)), t.push(P, _, O), i.push(0, 0, -1), s.push(n.map(P, -f, f, 0, 1), n.map(_, d, -d, 0, 1)), t.push(g, x, S), i.push(0, 0, -1), s.push(n.map(g, -f, f, 0, 1), n.map(x, d, -d, 0, 1))
            }
            for (var v = 0; a > v; v++)for (var E = 0; u > E; E++) {
                var g = f + v * p, x = d, S = m + E * l, b = f + (v + 1) * p, w = d, M = m + E * l, T = f + (v + 1) * p, z = d, C = m + (E + 1) * l, P = f + v * p, _ = d, O = m + (E + 1) * l;
                t.push(g, x, S), i.push(0, 1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, m, -m, 0, 1)), t.push(b, w, M), i.push(0, 1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, m, -m, 0, 1)), t.push(b, w, M), i.push(0, 1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, m, -m, 0, 1)), t.push(T, z, C), i.push(0, 1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, m, -m, 0, 1)), t.push(T, z, C), i.push(0, 1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, m, -m, 0, 1)), t.push(P, _, O), i.push(0, 1, 0), s.push(n.map(P, f, -f, 0, 1), n.map(O, m, -m, 0, 1)), t.push(P, _, O), i.push(0, 1, 0), s.push(n.map(P, f, -f, 0, 1), n.map(O, m, -m, 0, 1)), t.push(g, x, S), i.push(0, 1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, m, -m, 0, 1))
            }
            for (var v = 0; a > v; v++)for (var E = 0; u > E; E++) {
                var g = f + v * p, x = -d, S = m + E * l, b = f + (v + 1) * p, w = -d, M = m + E * l, T = f + (v + 1) * p, z = -d, C = m + (E + 1) * l, P = f + v * p, _ = -d, O = m + (E + 1) * l;
                t.push(g, x, S), i.push(0, -1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, -m, m, 0, 1)), t.push(b, w, M), i.push(0, -1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, -m, m, 0, 1)), t.push(b, w, M), i.push(0, -1, 0), s.push(n.map(b, f, -f, 0, 1), n.map(M, -m, m, 0, 1)), t.push(T, z, C), i.push(0, -1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, -m, m, 0, 1)), t.push(T, z, C), i.push(0, -1, 0), s.push(n.map(T, f, -f, 0, 1), n.map(C, -m, m, 0, 1)), t.push(P, _, O), i.push(0, -1, 0), s.push(n.map(P, f, -f, 0, 1), n.map(O, -m, m, 0, 1)), t.push(P, _, O), i.push(0, -1, 0), s.push(n.map(P, f, -f, 0, 1), n.map(O, -m, m, 0, 1)), t.push(g, x, S), i.push(0, -1, 0), s.push(n.map(g, f, -f, 0, 1), n.map(S, -m, m, 0, 1))
            }
            for (var E = 0; u > E; E++)for (var y = 0; h > y; y++) {
                var g = -f, x = d - y * c, S = -m - E * l, b = -f, w = d - y * c, M = -m - (E + 1) * l, T = -f, z = d - (y + 1) * c, C = -m - (E + 1) * l, P = -f, _ = d - (y + 1) * c, O = -m - E * l;
                t.push(g, x, S), i.push(1, 0, 0), s.push(n.map(S, -m, m, 0, 1), n.map(x, d, -d, 0, 1)), t.push(b, w, M), i.push(1, 0, 0), s.push(n.map(M, -m, m, 0, 1), n.map(w, d, -d, 0, 1)), t.push(b, w, M), i.push(1, 0, 0), s.push(n.map(M, -m, m, 0, 1), n.map(w, d, -d, 0, 1)), t.push(T, z, C), i.push(1, 0, 0), s.push(n.map(C, -m, m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(T, z, C), i.push(1, 0, 0), s.push(n.map(C, -m, m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(P, _, O), i.push(1, 0, 0), s.push(n.map(O, -m, m, 0, 1), n.map(_, d, -d, 0, 1)), t.push(P, _, O), i.push(1, 0, 0), s.push(n.map(O, -m, m, 0, 1), n.map(_, d, -d, 0, 1)), t.push(g, x, S), i.push(1, 0, 0), s.push(n.map(S, -m, m, 0, 1), n.map(x, d, -d, 0, 1))
            }
            for (var E = 0; u > E; E++)for (var y = 0; h > y; y++) {
                var g = f, x = d - y * c, S = -m - E * l, b = f, w = d - y * c, M = -m - (E + 1) * l, T = f, z = d - (y + 1) * c, C = -m - (E + 1) * l, P = f, _ = d - (y + 1) * c, O = -m - E * l;
                t.push(g, x, S), i.push(-1, 0, 0), s.push(n.map(S, m, -m, 0, 1), n.map(x, d, -d, 0, 1)), t.push(b, w, M), i.push(-1, 0, 0), s.push(n.map(M, m, -m, 0, 1), n.map(w, d, -d, 0, 1)), t.push(b, w, M), i.push(-1, 0, 0), s.push(n.map(M, m, -m, 0, 1), n.map(w, d, -d, 0, 1)), t.push(T, z, C), i.push(-1, 0, 0), s.push(n.map(C, m, -m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(T, z, C), i.push(-1, 0, 0), s.push(n.map(C, m, -m, 0, 1), n.map(z, d, -d, 0, 1)), t.push(P, _, O), i.push(-1, 0, 0), s.push(n.map(O, m, -m, 0, 1), n.map(_, d, -d, 0, 1)), t.push(P, _, O), i.push(-1, 0, 0), s.push(n.map(O, m, -m, 0, 1), n.map(_, d, -d, 0, 1)), t.push(g, x, S), i.push(-1, 0, 0), s.push(n.map(S, m, -m, 0, 1), n.map(x, d, -d, 0, 1))
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, s.exports = e
    }), define("famous-gl/Primitives/ConePrimitive", ["require", "exports", "module", "../Primitive", "famous-utils/Utils"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options.radius = 100, this.options.height = 100, this.options.resolution = 60, this.options.angleResolution = void 0, this.options.radialResolution = void 0, this.options.axisResolution = void 0, this.options.drawMode = o.TRIANGLES, this.setOptions(t), this.setup()
        }

        var o = t("../Primitive"), n = t("famous-utils/Utils");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            this.drawMode === o.TRIANGLES || this.drawMode === o.TRIANGLE_STRIP || this.drawMode === o.TRIANGLE_FAN ? (this.drawMode = o.TRIANGLES, this.setupFilledCone()) : this.drawMode === o.LINES ? (this.drawMode = o.LINES, this.setupOutlinedCone()) : this.drawMode === o.LINE_LOOP || this.drawMode === o.LINE_STRIP ? (this.drawMode = o.LINES, this.setupLoopCone()) : this.drawMode === o.POINTS && this.setupPointCone()
        }, e.prototype.setupPointCone = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.height;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.axisResolution ? this.options.axisResolution : 1, u = 2 * Math.PI, p = .5 * o, c = 0; a >= c; c++) {
                var l = n.map(c, 0, a, 0, e);
                if (0 === c)t.push(0, -p, 0), i.push(0, -1, 0), s.push(0, 0); else for (var f = 0; r >= f; f++) {
                    var d = n.map(f, 0, r, 0, u), m = l * Math.cos(d), v = l * Math.sin(d), y = f / r, g = c / a;
                    t.push(m, -p, v), i.push(0, -1, 0), s.push(y, g)
                }
            }
            for (var c = 0; h >= c; c++) {
                var x = -p + n.map(c, 0, h, 0, o), S = -p + n.map(c + 1, 0, h, 0, o), l = n.map(c, 0, h, e, 0), b = n.map(c + 1, 0, h, e, 0);
                if (c === h)t.push(0, p, 0), i.push(0, 1, 0), s.push(1, 1); else for (var f = 0; r > f; f++) {
                    var d = n.map(f, 0, r, 0, u), w = n.map(f + 1, 0, r, 0, u), m = l * Math.cos(d), v = l * Math.sin(d), M = x, T = l * Math.cos(w), z = l * Math.sin(w), C = x, P = b * Math.cos(w), _ = b * Math.sin(w), O = S, E = f / r, I = c / h, k = this.calculateNormal(m, v, M, T, z, C, P, _, O);
                    t.push(m, M, v), i.push(k[0], k[1], k[2]), s.push(E, I)
                }
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupOutlinedCone = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.height;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.axisResolution ? this.options.axisResolution : 1, u = 2 * Math.PI, p = .5 * o, c = 0; a > c; c++) {
                var l = n.map(c, 0, a, 0, e), f = n.map(c + 1, 0, a, 0, e);
                if (0 === c)for (var d = 0; r > d; d++) {
                    var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), y = f * Math.cos(m), g = f * Math.sin(m), x = d / r, S = c / a, b = f * Math.cos(v), w = f * Math.sin(v), M = (d + 1) / r, T = (c + 1) / a;
                    t.push(0, -p, 0), i.push(0, -1, 0), s.push(0, 0), t.push(y, -p, g), i.push(0, -1, 0), s.push(x, T), t.push(y, -p, g), i.push(0, -1, 0), s.push(x, T), t.push(b, -p, w), i.push(0, -1, 0), s.push(M, T), t.push(b, -p, w), i.push(0, -1, 0), s.push(M, T), t.push(0, -p, 0), i.push(0, -1, 0), s.push(0, 0)
                } else for (var d = 0; r >= d; d++) {
                    var x = d / r, S = c / a, M = (d + 1) / r, T = (c + 1) / a, m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), y = l * Math.cos(m), g = l * Math.sin(m), b = f * Math.cos(m), w = f * Math.sin(m), z = f * Math.cos(v), C = f * Math.sin(v), P = l * Math.cos(v), _ = l * Math.sin(v);
                    t.push(y, -p, g), i.push(0, -1, 0), s.push(x, S), t.push(b, -p, w), i.push(0, -1, 0), s.push(x, T), t.push(b, -p, w), i.push(0, -1, 0), s.push(x, T), t.push(z, -p, C), i.push(0, -1, 0), s.push(M, T), t.push(z, -p, C), i.push(0, -1, 0), s.push(M, T), t.push(P, -p, _), i.push(0, -1, 0), s.push(M, S), t.push(P, -p, _), i.push(0, -1, 0), s.push(M, S), t.push(y, -p, g), i.push(0, -1, 0), s.push(x, S)
                }
            }
            for (var c = 0; h > c; c++) {
                var O = -p + n.map(c, 0, h, 0, o), E = -p + n.map(c + 1, 0, h, 0, o), l = n.map(c, 0, h, e, 0), f = n.map(c + 1, 0, h, e, 0);
                if (c === h - 1)for (var d = 0; r > d; d++) {
                    var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), y = l * Math.cos(m), I = O, g = l * Math.sin(m), b = l * Math.cos(v), k = O, w = l * Math.sin(v), z = f * Math.cos(v), R = E, C = f * Math.sin(v), x = d / r, S = c / h, M = (d + 1) / r, T = (c + 1) / h, F = this.calculateNormal(y, I, g, b, k, w, z, R, C);
                    t.push(0, p, 0), i.push(0, 1, 0), s.push(1, 1), t.push(y, I, g), i.push(F[0], F[1], F[2]), s.push(x, T), t.push(y, I, g), i.push(F[0], F[1], F[2]), s.push(x, T), t.push(b, I, w), i.push(F[0], F[1], F[2]), s.push(M, T), t.push(b, I, w), i.push(F[0], F[1], F[2]), s.push(M, T), t.push(0, p, 0), i.push(0, 1, 0), s.push(1, 1)
                } else for (var d = 0; r > d; d++) {
                    var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), y = l * Math.cos(m), I = O, g = l * Math.sin(m), b = l * Math.cos(v), k = O, w = l * Math.sin(v), z = f * Math.cos(v), R = E, C = f * Math.sin(v), P = f * Math.cos(m), A = E, _ = f * Math.sin(m), x = d / r, S = c / h, M = (d + 1) / r, T = (c + 1) / h, F = this.calculateNormal(y, I, g, b, k, w, z, R, C);
                    t.push(y, I, g), i.push(F[0], F[1], F[2]), s.push(x, S), t.push(b, k, w), i.push(F[0], F[1], F[2]), s.push(M, S), t.push(b, k, w), i.push(F[0], F[1], F[2]), s.push(M, S), t.push(z, R, C), i.push(F[0], F[1], F[2]), s.push(M, T), t.push(z, R, C), i.push(F[0], F[1], F[2]), s.push(M, T), t.push(P, A, _), i.push(F[0], F[1], F[2]), s.push(x, T), t.push(P, A, _), i.push(F[0], F[1], F[2]), s.push(x, T), t.push(y, I, g), i.push(F[0], F[1], F[2]), s.push(x, S)
                }
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupLoopCone = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.height;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.axisResolution ? this.options.axisResolution : 1, u = 2 * Math.PI, p = .5 * o, c = 0; a >= c; c++) {
                var l = n.map(c, 0, a, 0, e), f = n.map(c + 1, 0, a, 0, e);
                if (0 === c)for (var d = 0; r > d; d++) {
                    var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), y = f * Math.cos(m), g = f * Math.sin(m), x = d / r, S = c / a, b = f * Math.cos(v), w = f * Math.sin(v), M = (d + 1) / r, T = (c + 1) / a;
                    t.push(y, -p, g), i.push(0, -1, 0), s.push(x, T), t.push(b, -p, w), i.push(0, -1, 0), s.push(M, T)
                } else for (var d = 0; r >= d; d++) {
                    var x = d / r, S = c / a, M = (d + 1) / r, T = (c + 1) / a, m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), y = l * Math.cos(m), g = l * Math.sin(m), z = l * Math.cos(v), C = l * Math.sin(v);
                    t.push(y, -p, g), i.push(0, -1, 0), s.push(x, S), t.push(z, -p, C), i.push(0, -1, 0), s.push(M, S)
                }
            }
            for (var c = 0; h >= c; c++) {
                var P = -p + n.map(c, 0, h, 0, o), _ = -p + n.map(c + 1, 0, h, 0, o), l = n.map(c, 0, h, e, 0), f = n.map(c + 1, 0, h, e, 0);
                c === h && (l = 1);
                for (var d = 0; r > d; d++) {
                    var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), y = l * Math.cos(m), O = P, g = l * Math.sin(m), b = l * Math.cos(v), E = P, w = l * Math.sin(v), I = f * Math.cos(v), k = _, R = f * Math.sin(v), x = d / r, S = c / h, M = (d + 1) / r, T = (c + 1) / h, F = this.calculateNormal(y, O, g, b, E, w, I, k, R);
                    t.push(y, O, g), i.push(F[0], F[1], F[2]), s.push(x, S), t.push(b, E, w), i.push(F[0], F[1], F[2]), s.push(M, S)
                }
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupFilledCone = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.height;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.axisResolution ? this.options.axisResolution : 1, u = 2 * Math.PI, p = .5 * o, c = 0; a > c; c++)for (var l = n.map(c, 0, a, 0, e), f = n.map(c + 1, 0, a, 0, e), d = 0; r > d; d++) {
                var m = d / r, v = c / a, y = (d + 1) / r, g = (c + 1) / a, x = n.map(d, 0, r, 0, u), S = n.map(d + 1, 0, r, 0, u), b = l * Math.cos(x), w = l * Math.sin(x), M = f * Math.cos(x), T = f * Math.sin(x), z = f * Math.cos(S), C = f * Math.sin(S), P = l * Math.cos(S), _ = l * Math.sin(S);
                t.push(b, -p, w), i.push(0, -1, 0), s.push(m, v), t.push(z, -p, C), i.push(0, -1, 0), s.push(y, g), t.push(M, -p, T), i.push(0, -1, 0), s.push(m, g), t.push(b, -p, w), i.push(0, -1, 0), s.push(m, v), t.push(P, -p, _), i.push(0, -1, 0), s.push(y, v), t.push(z, -p, C), i.push(0, -1, 0), s.push(y, g)
            }
            for (var c = 0; h > c; c++)for (var O = -p + n.map(c, 0, h, 0, o), E = -p + n.map(c + 1, 0, h, 0, o), l = n.map(c, 0, h, e, 0), f = n.map(c + 1, 0, h, e, 0), d = 0; r > d; d++) {
                var x = n.map(d, 0, r, 0, u), S = n.map(d + 1, 0, r, 0, u), b = l * Math.cos(x), I = O, w = l * Math.sin(x), M = l * Math.cos(S), k = O, T = l * Math.sin(S), z = f * Math.cos(S), R = E, C = f * Math.sin(S), P = f * Math.cos(x), F = E, _ = f * Math.sin(x), m = d / r, v = c / h, y = (d + 1) / r, g = (c + 1) / h, A = this.calculateNormal(b, I, w, M, k, T, z, R, C);
                t.push(b, I, w), i.push(A[0], A[1], A[2]), s.push(m, v), t.push(z, R, C), i.push(A[0], A[1], A[2]), s.push(y, g), t.push(M, k, T), i.push(A[0], A[1], A[2]), s.push(y, v), t.push(b, I, w), i.push(A[0], A[1], A[2]), s.push(m, v), t.push(P, F, _), i.push(A[0], A[1], A[2]), s.push(m, g), t.push(z, R, C), i.push(A[0], A[1], A[2]), s.push(y, g)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, s.exports = e
    }), define("famous-gl/Primitives/CylinderPrimitive", ["require", "exports", "module", "../Primitive", "famous-utils/Utils"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options.radius = 100, this.options.depth = 100, this.options.resolution = 60, this.options.angleResolution = void 0, this.options.radialResolution = void 0, this.options.axisResolution = void 0, this.options.drawMode = o.TRIANGLES, this.setOptions(t), this.setup()
        }

        var o = t("../Primitive"), n = t("famous-utils/Utils");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            this.drawMode === o.TRIANGLES || this.drawMode === o.TRIANGLE_STRIP || this.drawMode === o.TRIANGLE_FAN ? (this.drawMode = o.TRIANGLES, this.setupFilledCylinder()) : this.drawMode === o.LINES ? (this.drawMode = o.LINES, this.setupOutlinedCylinder()) : this.drawMode === o.LINE_LOOP || this.drawMode === o.LINE_STRIP ? (this.drawMode = o.LINES, this.setupLoopCylinder()) : this.drawMode === o.POINTS && this.setupPointCylinder()
        }, e.prototype.setupPointCylinder = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.depth;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.axisResolution ? this.options.axisResolution : 1, u = 2 * Math.PI, p = .5 * -o, c = 0; a >= c; c++) {
                var l = n.map(c, 0, a, 0, e);
                if (0 === c)t.push(0, 0, -p), i.push(0, 0, 1), s.push(0, 0), t.push(0, 0, p), i.push(0, 0, -1), s.push(0, 0); else for (var f = 0; r >= f; f++) {
                    var d = n.map(f, 0, r, 0, u), m = l * Math.cos(d), v = l * Math.sin(d), y = f / r, g = c / a;
                    t.push(m, v, -p), i.push(0, 0, 1), s.push(y, g), t.push(m, v, p), i.push(0, 0, -1), s.push(y, g)
                }
            }
            for (var c = 0; h > c; c++)for (var x = -p - n.map(c, 0, h, 0, o), f = 0; r > f; f++) {
                var d = n.map(f, 0, r, 0, u), m = Math.cos(d), v = Math.sin(d), S = x, b = f / r, w = c / h;
                t.push(m * e, v * e, S), i.push(m, v, 0), s.push(b, w)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupOutlinedCylinder = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.depth;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.axisResolution ? this.options.axisResolution : 1, u = 2 * Math.PI, p = .5 * -o, c = 0; a > c; c++) {
                var l = n.map(c, 0, a, 0, e), f = n.map(c + 1, 0, a, 0, e);
                if (0 === c)for (var d = 0; r > d; d++) {
                    var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), y = 0, g = 0, x = -p, S = f * Math.cos(m), b = f * Math.sin(m), w = -p, M = f * Math.cos(v), T = f * Math.sin(v), z = -p, C = d / r, P = (d + 1) / r, _ = c / a, O = (c + 1) / a;
                    t.push(y, g, x), i.push(0, 0, 1), s.push(C, _), t.push(S, b, w), i.push(0, 0, 1), s.push(C, O), t.push(S, b, w), i.push(0, 0, 1), s.push(C, O), t.push(M, T, z), i.push(0, 0, 1), s.push(P, O), t.push(M, T, z), i.push(0, 0, 1), s.push(P, O), t.push(y, g, x), i.push(0, 0, 1), s.push(C, _), t.push(y, g, -x), i.push(0, 0, -1), s.push(C, _), t.push(S, b, -w), i.push(0, 0, -1), s.push(C, O), t.push(S, b, -w), i.push(0, 0, -1), s.push(C, O), t.push(M, T, -z), i.push(0, 0, -1), s.push(P, O), t.push(M, T, -z), i.push(0, 0, -1), s.push(P, O), t.push(y, g, -x), i.push(0, 0, -1), s.push(C, _)
                } else for (var d = 0; r > d; d++) {
                    var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), S = l * Math.cos(m), b = l * Math.sin(m), w = -p, M = l * Math.cos(v), T = l * Math.sin(v), z = -p, E = f * Math.cos(v), I = f * Math.sin(v), k = -p, R = f * Math.cos(m), F = f * Math.sin(m), A = -p, C = d / r, P = (d + 1) / r, _ = c / a, O = (c + 1) / a;
                    t.push(S, b, w), i.push(0, 0, 1), s.push(C, _), t.push(M, T, z), i.push(0, 0, 1), s.push(P, _), t.push(M, T, z), i.push(0, 0, 1), s.push(P, _), t.push(E, I, k), i.push(0, 0, 1), s.push(P, O), t.push(E, I, k), i.push(0, 0, 1), s.push(P, O), t.push(R, F, A), i.push(0, 0, 1), s.push(C, O), t.push(R, F, A), i.push(0, 0, 1), s.push(C, O), t.push(S, b, w), i.push(0, 0, 1), s.push(C, _), t.push(S, b, -w), i.push(0, 0, -1), s.push(C, _), t.push(M, T, -z), i.push(0, 0, -1), s.push(P, _), t.push(M, T, -z), i.push(0, 0, -1), s.push(P, _), t.push(E, I, -k), i.push(0, 0, -1), s.push(P, O), t.push(E, I, -k), i.push(0, 0, -1), s.push(P, O), t.push(R, F, -A), i.push(0, 0, -1), s.push(C, O), t.push(R, F, -A), i.push(0, 0, -1), s.push(C, O), t.push(S, b, -w), i.push(0, 0, -1), s.push(C, _)
                }
            }
            for (var c = 0; h > c; c++)for (var D = -p - n.map(c, 0, h, 0, o), N = -p - n.map(c + 1, 0, h, 0, o), d = 0; r > d; d++) {
                var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), S = Math.cos(m), b = Math.sin(m), w = D, M = Math.cos(v), T = Math.sin(v), z = D, E = Math.cos(v), I = Math.sin(v), k = N, R = Math.cos(m), F = Math.sin(m), A = N, C = d / r, P = (d + 1) / r, _ = c / h, O = (c + 1) / h;
                t.push(S * e, b * e, w), i.push(S, b, 0), s.push(C, _), t.push(M * e, T * e, z), i.push(M, T, 0), s.push(P, _), t.push(M * e, T * e, z), i.push(M, T, 0), s.push(P, _), t.push(E * e, I * e, k), i.push(E, I, 0), s.push(P, O), t.push(E * e, I * e, k), i.push(E, I, 0), s.push(P, O), t.push(R * e, F * e, A), i.push(R, F, 0), s.push(C, O), t.push(R * e, F * e, A), i.push(R, F, 0), s.push(C, O), t.push(S * e, b * e, w), i.push(S, b, 0), s.push(C, _)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupLoopCylinder = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.depth;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.axisResolution ? this.options.axisResolution : 1, u = 2 * Math.PI, p = .5 * -o, c = 1; a >= c; c++) {
                var l = n.map(c, 0, a, 0, e);
                n.map(c + 1, 0, a, 0, e);
                for (var f = 0; r > f; f++) {
                    var d = n.map(f, 0, r, 0, u), m = n.map(f + 1, 0, r, 0, u), v = l * Math.cos(d), y = l * Math.sin(d), g = -p, x = l * Math.cos(m), S = l * Math.sin(m), b = -p, w = f / r, M = (f + 1) / r, T = c / a;
                    t.push(v, y, g), i.push(0, 0, 1), s.push(w, T), t.push(x, S, b), i.push(0, 0, 1), s.push(M, T), t.push(v, y, -g), i.push(0, 0, -1), s.push(w, T), t.push(x, S, -b), i.push(0, 0, -1), s.push(M, T)
                }
            }
            for (var c = 0; h >= c; c++) {
                var z = -p - n.map(c, 0, h, 0, o);
                -p - n.map(c + 1, 0, h, 0, o);
                for (var f = 0; r > f; f++) {
                    var d = n.map(f, 0, r, 0, u), m = n.map(f + 1, 0, r, 0, u), v = Math.cos(d), y = Math.sin(d), g = z, x = Math.cos(m), S = Math.sin(m), b = z, w = f / r, M = (f + 1) / r, T = c / h;
                    t.push(v * e, y * e, g), i.push(v, y, 0), s.push(w, T), t.push(x * e, S * e, b), i.push(x, S, 0), s.push(M, T)
                }
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupFilledCylinder = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.depth;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            for (var r = this.options.angleResolution ? this.options.angleResolution : this.options.resolution, a = this.options.radialResolution ? this.options.radialResolution : 1, h = this.options.axisResolution ? this.options.axisResolution : 1, u = 2 * Math.PI, p = .5 * -o, c = 0; a > c; c++) {
                var l = n.map(c, 0, a, 0, e), f = n.map(c + 1, 0, a, 0, e);
                if (0 === c)for (var d = 0; r > d; d++) {
                    var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), y = 0, g = 0, x = -p, S = f * Math.cos(m), b = f * Math.sin(m), w = -p, M = f * Math.cos(v), T = f * Math.sin(v), z = -p, C = d / r, P = (d + 1) / r, _ = c / a, O = (c + 1) / a;
                    t.push(y, g, x), i.push(0, 0, 1), s.push(C, _), t.push(S, b, w), i.push(0, 0, 1), s.push(C, O), t.push(M, T, z), i.push(0, 0, 1), s.push(P, O), t.push(y, g, -x), i.push(0, 0, -1), s.push(C, _), t.push(S, b, -w), i.push(0, 0, -1), s.push(C, O), t.push(M, T, -z), i.push(0, 0, -1), s.push(P, O)
                } else for (var d = 0; r > d; d++) {
                    var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), S = l * Math.cos(m), b = l * Math.sin(m), w = -p, M = l * Math.cos(v), T = l * Math.sin(v), z = -p, E = f * Math.cos(v), I = f * Math.sin(v), k = -p, R = f * Math.cos(m), F = f * Math.sin(m), A = -p, C = d / r, P = (d + 1) / r, _ = c / a, O = (c + 1) / a;
                    t.push(S, b, w), i.push(0, 0, 1), s.push(C, _), t.push(E, I, k), i.push(0, 0, 1), s.push(P, O), t.push(M, T, z), i.push(0, 0, 1), s.push(P, _), t.push(S, b, w), i.push(0, 0, 1), s.push(C, _), t.push(R, F, A), i.push(0, 0, 1), s.push(C, O), t.push(E, I, k), i.push(0, 0, 1), s.push(P, O), t.push(S, b, -w), i.push(0, 0, -1), s.push(C, _), t.push(E, I, -k), i.push(0, 0, -1), s.push(P, O), t.push(M, T, -z), i.push(0, 0, -1), s.push(P, _), t.push(S, b, -w), i.push(0, 0, -1), s.push(C, _), t.push(R, F, -A), i.push(0, 0, -1), s.push(C, O), t.push(E, I, -k), i.push(0, 0, -1), s.push(P, O)
                }
            }
            for (var c = 0; h > c; c++)for (var D = -p - n.map(c, 0, h, 0, o), N = -p - n.map(c + 1, 0, h, 0, o), d = 0; r > d; d++) {
                var m = n.map(d, 0, r, 0, u), v = n.map(d + 1, 0, r, 0, u), S = Math.cos(m), b = Math.sin(m), w = D, M = Math.cos(v), T = Math.sin(v), z = D, E = Math.cos(v), I = Math.sin(v), k = N, R = Math.cos(m), F = Math.sin(m), A = N, C = d / r, P = (d + 1) / r, _ = c / h, O = (c + 1) / h;
                t.push(S * e, b * e, w), i.push(S, b, 0), s.push(C, _), t.push(E * e, I * e, k), i.push(E, I, 0), s.push(P, O), t.push(M * e, T * e, z), i.push(M, T, 0), s.push(P, _), t.push(S * e, b * e, w), i.push(S, b, 0), s.push(C, _), t.push(R * e, F * e, A), i.push(R, F, 0), s.push(C, O), t.push(E * e, I * e, k), i.push(E, I, 0), s.push(P, O)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, s.exports = e
    }), define("famous-gl/Primitives/EllipsePrimitive", ["require", "exports", "module", "../Primitive", "famous-utils/Utils"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options.width = 100, this.options.height = 100, this.options.resolution = 60, this.options.radialResolution = void 0, this.options.angleResolution = void 0, this.options.drawCenter = !1, this.options.vertical = !1, this.options.drawMode = o.TRIANGLES, this.setOptions(t), this.setup()
        }

        var o = t("../Primitive"), n = t("famous-utils/Utils");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            var t = [], i = [], s = [];
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3, this.options.radialResolution = this.options.radialResolution >= 1 ? this.options.radialResolution : 1, this.options.angleResolution = this.options.angleResolution >= 3 ? this.options.angleResolution : this.options.resolution;
            var e = this.options.angleResolution, r = this.options.radialResolution, a = 2 * Math.PI, h = Math.max(c, l), u = this.options.drawCenter;
            if (this.drawMode === o.POINTS)for (var p = 0; r >= p; p++) {
                var c = n.map(p, 0, r, 0, .5 * this.options.width), l = n.map(p, 0, r, 0, .5 * this.options.height), f = Math.max(c, l);
                if (0 === p)u && (t.push(0, 0, 0), i.push(0, 0, 1), s.push(0, 0)); else for (var d = 0; e >= d; d++) {
                    var m = n.map(d, 0, e, 0, a), v = c * Math.cos(m), y = l * Math.sin(m);
                    t.push(v, y, 0), i.push(0, 0, 1);
                    var g = d / e;
                    s.push(g, f / h)
                }
            } else if (this.drawMode === o.LINE_STRIP || this.drawMode === o.LINE_LOOP) {
                this.drawMode = o.LINES;
                var x = r;
                this.options.vertical || x++;
                for (var p = 0; x > p; p++) {
                    var c = n.map(p, 0, r, 0, .5 * this.options.width), l = n.map(p, 0, r, 0, .5 * this.options.height), S = n.map(p + 1, 0, r, 0, .5 * this.options.width), b = n.map(p + 1, 0, r, 0, .5 * this.options.height), f = Math.max(c, l), w = Math.max(S, b);
                    if (0 === p) {
                        if (u)for (var d = 0; e > d; d++) {
                            var m = n.map(d, 0, e, 0, a), M = n.map(d + 1, 0, e, 0, a), v = c * Math.cos(m), y = l * Math.sin(m), T = d / e, z = (d + 1) / e;
                            if (t.push(v, y, 0), i.push(0, 0, 1), s.push(T, f / h), this.options.vertical) {
                                var C = S * Math.cos(m), P = b * Math.sin(m);
                                t.push(C, P, 0), i.push(0, 0, 1), s.push(T, w / h)
                            } else {
                                var _ = c * Math.cos(M), O = l * Math.sin(M);
                                t.push(_, O, 0), i.push(0, 0, 1), s.push(z, f / h)
                            }
                        }
                    } else for (var d = 0; e > d; d++) {
                        var m = n.map(d, 0, e, 0, a), M = n.map(d + 1, 0, e, 0, a), v = c * Math.cos(m), y = l * Math.sin(m), T = d / e, z = (d + 1) / e;
                        if (t.push(v, y, 0), i.push(0, 0, 1), s.push(T, f / h), this.options.vertical) {
                            var C = S * Math.cos(m), P = b * Math.sin(m);
                            t.push(C, P, 0), i.push(0, 0, 1), s.push(T, w / h)
                        } else {
                            var _ = c * Math.cos(M), O = l * Math.sin(M);
                            t.push(_, O, 0), i.push(0, 0, 1), s.push(z, f / h)
                        }
                    }
                }
            } else if (this.drawMode === o.LINES)for (var p = 0; r > p; p++) {
                var c = n.map(p, 0, r, 0, .5 * this.options.width), l = n.map(p, 0, r, 0, .5 * this.options.height), S = n.map(p + 1, 0, r, 0, .5 * this.options.width), b = n.map(p + 1, 0, r, 0, .5 * this.options.height), f = Math.max(c, l), w = Math.max(S, b);
                if (0 === p)for (var d = 0; e > d; d++) {
                    var m = n.map(d, 0, e, 0, a), M = n.map(d + 1, 0, e, 0, a), v = S * Math.cos(m), y = b * Math.sin(m), C = S * Math.cos(M), P = b * Math.sin(M), T = d / e, z = (d + 1) / e;
                    t.push(0, 0, 0), i.push(0, 0, 1), s.push(T, f / h), t.push(v, y, 0), i.push(0, 0, 1), s.push(T, w / h), t.push(v, y, 0), i.push(0, 0, 1), s.push(T, w / h), t.push(C, P, 0), i.push(0, 0, 1), s.push(z, w / h), t.push(C, P, 0), i.push(0, 0, 1), s.push(z, w / h), t.push(0, 0, 0), i.push(0, 0, 1), s.push(0, 0)
                } else for (var d = 0; e > d; d++) {
                    var m = n.map(d, 0, e, 0, a), M = n.map(d + 1, 0, e, 0, a), v = c * Math.cos(m), y = l * Math.sin(m), C = S * Math.cos(m), P = b * Math.sin(m), E = S * Math.cos(M), I = b * Math.sin(M), _ = c * Math.cos(M), O = l * Math.sin(M), T = d / e, z = (d + 1) / e;
                    t.push(v, y, 0), i.push(0, 0, 1), s.push(T, f / h), t.push(C, P, 0), i.push(0, 0, 1), s.push(T, w / h), t.push(C, P, 0), i.push(0, 0, 1), s.push(T, w / h), t.push(E, I, 0), i.push(0, 0, 1), s.push(z, w / h), t.push(E, I, 0), i.push(0, 0, 1), s.push(z, w / h), t.push(_, O, 0), i.push(0, 0, 1), s.push(z, f / h), t.push(_, O, 0), i.push(0, 0, 1), s.push(z, f / h), t.push(v, y, 0), i.push(0, 0, 1), s.push(T, f / h)
                }
            } else if (this.drawMode === o.TRIANGLE_FAN || this.drawMode === o.TRIANGLES || o.TRIANGLE_STRIP) {
                this.drawMode = o.TRIANGLES;
                for (var p = 0; r > p; p++) {
                    var c = n.map(p, 0, r, 0, .5 * this.options.width), l = n.map(p, 0, r, 0, .5 * this.options.height), S = n.map(p + 1, 0, r, 0, .5 * this.options.width), b = n.map(p + 1, 0, r, 0, .5 * this.options.height), f = Math.max(c, l), w = Math.max(S, b);
                    if (0 === p)for (var d = 0; e > d; d++) {
                        var m = n.map(d, 0, e, 0, a), M = n.map(d + 1, 0, e, 0, a), v = S * Math.cos(m), y = b * Math.sin(m), C = S * Math.cos(M), P = b * Math.sin(M), T = d / e, z = (d + 1) / e;
                        t.push(0, 0, 0), i.push(0, 0, 1), s.push(T, f / h), t.push(v, y, 0), i.push(0, 0, 1), s.push(T, w / h), t.push(C, P, 0), i.push(0, 0, 1), s.push(z, w / h)
                    } else for (var d = 0; e > d; d++) {
                        var m = n.map(d, 0, e, 0, a), M = n.map(d + 1, 0, e, 0, a), v = c * Math.cos(m), y = l * Math.sin(m), C = S * Math.cos(m), P = b * Math.sin(m), E = S * Math.cos(M), I = b * Math.sin(M), _ = c * Math.cos(M), O = l * Math.sin(M), T = d / e, z = (d + 1) / e;
                        t.push(v, y, 0), i.push(0, 0, 1), s.push(T, f / h), t.push(E, I, 0), i.push(0, 0, 1), s.push(z, w / h), t.push(C, P, 0), i.push(0, 0, 1), s.push(T, w / h), t.push(v, y, 0), i.push(0, 0, 1), s.push(T, f / h), t.push(_, O, 0), i.push(0, 0, 1), s.push(z, f / h), t.push(E, I, 0), i.push(0, 0, 1), s.push(z, w / h)
                    }
                }
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, s.exports = e
    }), define("famous-gl/Primitives/IcoSpherePrimitive", ["require", "exports", "module", "../Primitive", "famous-utils/Utils", "famous-math/Vector"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options.radius = 100, this.options.resolution = 1, this.options.drawMode = o.TRIANGLES, this.setOptions(t), this.setup()
        }

        var o = t("../Primitive"), n = t("famous-utils/Utils"), r = t("famous-math/Vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            this.createIcoSphere()
        }, e.prototype.createIcoSphere = function () {
            var t = [], i = [], s = [], e = this.options.radius;
            this.options.resolution;
            var a = Math.cos(Math.PI / 3), h = Math.sin(Math.PI / 3);
            t.push([-e * a, e * h, 0]), t.push([e * a, e * h, 0]), t.push([-e * a, -e * h, 0]), t.push([e * a, -e * h, 0]), t.push([0, -e * a, e * h]), t.push([0, e * a, e * h]), t.push([0, -e * a, -e * h]), t.push([0, e * a, -e * h]), t.push([e * h, 0, -e * a]), t.push([e * h, 0, e * a]), t.push([-e * h, 0, -e * a]), t.push([-e * h, 0, e * a]);
            var u = [];
            u.push([0, 11, 5]), u.push([0, 5, 1]), u.push([0, 1, 7]), u.push([0, 7, 10]), u.push([0, 10, 11]), u.push([1, 5, 9]), u.push([5, 11, 4]), u.push([11, 10, 2]), u.push([10, 7, 6]), u.push([7, 1, 8]), u.push([3, 9, 4]), u.push([3, 4, 2]), u.push([3, 2, 6]), u.push([3, 6, 8]), u.push([3, 8, 9]), u.push([4, 9, 5]), u.push([2, 4, 11]), u.push([6, 2, 10]), u.push([8, 6, 7]), u.push([9, 8, 1]);
            for (var p = [], c = 0; c < this.options.resolution; c++) {
                for (var l = 0; l < u.length; l++) {
                    var f = u[l], d = t[f[0]], m = t[f[1]], v = t[f[2]], y = this.createMidPoint(d[0], d[1], d[2], m[0], m[1], m[2]), g = this.createMidPoint(m[0], m[1], m[2], v[0], v[1], v[2]), x = this.createMidPoint(d[0], d[1], d[2], v[0], v[1], v[2]), S = t.length;
                    t.push(y);
                    var b = t.length;
                    t.push(g);
                    var w = t.length;
                    t.push(x), p.push([f[0], S, w]), p.push([S, f[1], b]), p.push([w, S, b]), p.push([w, b, f[2]])
                }
                u = p, p = []
            }
            var M = [], T = new r;
            if (this.drawMode === o.LINES || this.drawMode === o.LINE_LOOP || this.drawMode === o.LINE_STRIP) {
                this.drawMode = o.LINES;
                for (var l = 0; l < u.length; l++) {
                    var f = u[l], d = t[f[0]], m = t[f[1]], v = t[f[2]];
                    M.push(d[0], d[1], d[2]), M.push(m[0], m[1], m[2]), M.push(m[0], m[1], m[2]), M.push(v[0], v[1], v[2]), M.push(v[0], v[1], v[2]), M.push(d[0], d[1], d[2])
                }
            } else if (this.drawMode === o.TRIANGLES || this.drawMode === o.TRIANGLE_STRIP || this.drawMode === o.TRIANGLE_FAN) {
                this.drawMode = o.TRIANGLES;
                for (var l = 0; l < u.length; l++) {
                    var f = u[l], d = t[f[0]], m = t[f[1]], v = t[f[2]];
                    M.push(d[0], d[1], d[2]), M.push(m[0], m[1], m[2]), M.push(v[0], v[1], v[2])
                }
            } else if (this.drawMode === o.POINTS)for (var l = 0; l < t.length; l++) {
                var z = t[l];
                M.push(z[0], z[1], z[2])
            }
            for (var C = Math.PI, P = Math.PI, l = 0; l < M.length; l += 3) {
                var _ = M[l], O = M[l + 1], E = M[l + 2];
                T.setXYZ(_, O, E), T.normalize(1, T), i.push(T.x, T.y, T.z);
                var I = Math.atan2(T.z, T.x), k = Math.acos(T.y);
                s.push(n.map(I, -C, C, 0, 1), n.map(k, 0, P, 0, 1))
            }
            this.setPositions(M), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.createMidPoint = function (t, i, s, e, o, n) {
            var a = new r(t + e, i + o, s + n);
            return a.mult(.5, a), a.normalize(this.options.radius, a), a.toArray()
        }, s.exports = e
    }), define("famous-gl/Primitives/ParametricPrimitive", ["require", "exports", "module", "../Primitive", "famous-utils/Utils"], function (t, s, e) {
        function o(t) {
            n.apply(this, t), this.options.variables = {varyings: {theta: {resolution: 30, range: [-Math.PI, Math.PI]}, phi: {resolution: 30, range: [0, Math.PI]}}, params: {radius: 50}}, this.options.generator = function (t, i, s) {
                var e = s.radius * Math.cos(t) * Math.sin(i), o = s.radius * Math.sin(t) * Math.sin(i), n = s.radius * Math.cos(i);
                return[e, n, o]
            }, this.options.vertical = !1, this.options.drawMode = n.TRIANGLES, this.setOptions(t), this.setup()
        }

        var n = t("../Primitive"), r = t("famous-utils/Utils");
        o.prototype = Object.create(n.prototype), o.prototype.constructor = o, o.prototype.setup = function () {
            this.drawMode === n.LINES ? (this.drawMode = n.LINES, this.makeOutlineShape()) : this.drawMode === n.LINE_LOOP || this.drawMode === n.LINE_STRIP ? (this.drawMode = n.LINES, this.makeLoopShape()) : this.drawMode === n.TRIANGLES || this.drawMode === n.TRIANGLE_STRIP || this.drawMode === n.TRIANGLE_FAN ? (this.drawMode = n.TRIANGLES, this.makeFilledShape()) : this.makePointShape()
        }, o.prototype.makeFilledShape = function () {
            var t = [], s = [], e = [], o = this.options.generator, n = this.options.variables, a = n.varyings, h = Object.keys(a), u = n.params, p = a[h[0]], c = a[h[1]], l = p.resolution, f = c.resolution;
            for (j = 0; l > j; j++) {
                var d = r.map(j, 0, p.resolution, p.range[0], p.range[1]), m = r.map(j + 1, 0, p.resolution, p.range[0], p.range[1]);
                for (i = 0; f > i; i++) {
                    var v = r.map(i, 0, c.resolution, c.range[0], c.range[1]), y = r.map(i + 1, 0, c.resolution, c.range[0], c.range[1]), g = o(d, v, u), x = o(d, y, u), S = o(m, y, u), b = o(m, v, u), w = this.calculateNormal(g[0], g[1], g[2], x[0], x[1], x[2], S[0], S[1], S[2]), M = j / l, T = (j + 1) / l, z = i / l, C = (i + 1) / l;
                    t.push(g[0], g[1], g[2]), s.push(w[0], w[1], w[2]), e.push(M, z), t.push(S[0], S[1], S[2]), s.push(w[0], w[1], w[2]), e.push(T, C), t.push(x[0], x[1], x[2]), s.push(w[0], w[1], w[2]), e.push(M, C), t.push(g[0], g[1], g[2]), s.push(w[0], w[1], w[2]), e.push(M, z), t.push(b[0], b[1], b[2]), s.push(w[0], w[1], w[2]), e.push(T, z), t.push(S[0], S[1], S[2]), s.push(w[0], w[1], w[2]), e.push(T, C)
                }
            }
            this.setPositions(t), this.setNormals(s), this.setTextureCoords(e)
        }, o.prototype.makeLoopShape = function () {
            var t = [], s = [], e = [], o = this.options.generator, n = this.options.variables, a = n.varyings, h = Object.keys(a), u = n.params, p = a[h[0]], c = a[h[1]], l = p.resolution, f = c.resolution;
            for (j = 0; l > j; j++) {
                var d = r.map(j, 0, p.resolution, p.range[0], p.range[1]), m = r.map(j + 1, 0, p.resolution, p.range[0], p.range[1]);
                for (i = 0; f > i; i++) {
                    var v = r.map(i, 0, c.resolution, c.range[0], c.range[1]), y = r.map(i + 1, 0, c.resolution, c.range[0], c.range[1]), g = o(d, v, u), x = o(d, y, u), S = o(m, y, u), b = o(m, v, u), w = this.calculateNormal(g[0], g[1], g[2], x[0], x[1], x[2], S[0], S[1], S[2]), M = j / l, T = (j + 1) / l, z = i / l, C = (i + 1) / l;
                    t.push(g[0], g[1], g[2]), s.push(w[0], w[1], w[2]), e.push(M, z), this.options.vertical ? (t.push(x[0], x[1], x[2]), s.push(w[0], w[1], w[2]), e.push(M, C)) : (t.push(b[0], b[1], b[2]), s.push(w[0], w[1], w[2]), e.push(T, z))
                }
            }
            this.setPositions(t), this.setNormals(s), this.setTextureCoords(e)
        }, o.prototype.makeOutlineShape = function () {
            var t = [], s = [], e = [], o = this.options.generator, n = this.options.variables, a = n.varyings, h = Object.keys(a), u = n.params, p = a[h[0]], c = a[h[1]], l = p.resolution, f = c.resolution;
            for (j = 0; l > j; j++) {
                var d = r.map(j, 0, p.resolution, p.range[0], p.range[1]), m = r.map(j + 1, 0, p.resolution, p.range[0], p.range[1]);
                for (i = 0; f > i; i++) {
                    var v = r.map(i, 0, c.resolution, c.range[0], c.range[1]), y = r.map(i + 1, 0, c.resolution, c.range[0], c.range[1]), g = o(d, v, u), x = o(d, y, u), S = o(m, y, u), b = o(m, v, u), w = this.calculateNormal(g[0], g[1], g[2], x[0], x[1], x[2], S[0], S[1], S[2]), M = j / l, T = (j + 1) / l, z = i / l, C = (i + 1) / l;
                    t.push(g[0], g[1], g[2]), s.push(w[0], w[1], w[2]), e.push(M, z), t.push(x[0], x[1], x[2]), s.push(w[0], w[1], w[2]), e.push(M, C), t.push(x[0], x[1], x[2]), s.push(w[0], w[1], w[2]), e.push(M, C), t.push(S[0], S[1], S[2]), s.push(w[0], w[1], w[2]), e.push(T, C), t.push(S[0], S[1], S[2]), s.push(w[0], w[1], w[2]), e.push(T, C), t.push(b[0], b[1], b[2]), s.push(w[0], w[1], w[2]), e.push(T, z), t.push(b[0], b[1], b[2]), s.push(w[0], w[1], w[2]), e.push(T, z), t.push(g[0], g[1], g[2]), s.push(w[0], w[1], w[2]), e.push(M, z)
                }
            }
            this.setPositions(t), this.setNormals(s), this.setTextureCoords(e)
        }, o.prototype.makePointShape = function () {
            var t = [], s = [], e = [], o = this.options.generator, n = this.options.variables, a = n.varyings, h = Object.keys(a), u = n.params, p = a[h[0]], c = a[h[1]], l = p.resolution, f = c.resolution;
            for (j = 0; l >= j; j++) {
                var d = r.map(j, 0, p.resolution, p.range[0], p.range[1]), m = r.map(j + 1, 0, p.resolution, p.range[0], p.range[1]);
                for (i = 0; f >= i; i++) {
                    var v = r.map(i, 0, c.resolution, c.range[0], c.range[1]), y = r.map(i + 1, 0, c.resolution, c.range[0], c.range[1]), g = o(d, v, u), x = o(d, y, u), S = o(m, y, u), b = this.calculateNormal(g[0], g[1], g[2], x[0], x[1], x[2], S[0], S[1], S[2]);
                    t.push(g[0], g[1], g[2]), s.push(b[0], b[1], b[2]), e.push(j / l, i / f)
                }
            }
            this.setPositions(t), this.setNormals(s), this.setTextureCoords(e)
        }, e.exports = o
    }), define("famous-gl/Primitives/PlanePrimitive", ["require", "exports", "module", "../Primitive", "famous-utils/Utils"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options.width = 100, this.options.height = 100, this.options.resolution = 1, this.options.resolutionX = void 0, this.options.resolutionY = void 0, this.options.vertical = !1, this.options.flipX = !1, this.options.flipY = !1, this.options.uMin = 0, this.options.uMax = 1, this.options.vMin = 0, this.options.vMax = 1, this.options.drawMode = o.TRIANGLES, this.setOptions(t), this.setup()
        }

        var o = t("../Primitive"), n = t("famous-utils/Utils");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            if (this.options.flipX === !0) {
                var t = this.options.uMin;
                this.options.uMin = this.options.uMax, this.options.uMax = t
            }
            if (this.options.flipY === !0) {
                var t = this.options.vMin;
                this.options.vMin = this.options.vMax, this.options.vMax = t
            }
            this.drawMode === o.LINES ? (this.drawMode = o.LINES, this.setupOutlinePlane()) : this.drawMode === o.LINE_LOOP || this.drawMode === o.LINE_STRIP ? (this.drawMode = o.LINES, this.setupLinePlane()) : this.drawMode === o.TRIANGLES || this.drawMode === o.TRIANGLE_STRIP || this.drawMode === o.TRIANGLE_FAN ? (this.drawMode = o.TRIANGLES, this.setupFilledPlane()) : this.drawMode === o.POINTS && this.setupPointPlane()
        }, e.prototype.setupFilledPlane = function () {
            for (var t = [], i = [], s = [], e = this.options.width, o = this.options.height, r = this.options.resolutionX ? this.options.resolutionX : this.options.resolution, a = this.options.resolutionY ? this.options.resolutionY : this.options.resolution, h = e / r, u = o / a, p = .5 * -e, c = .5 * o, l = this.options.uMin, f = this.options.uMax, d = this.options.vMin, m = this.options.vMax, v = 0; r > v; v++)for (var y = 0; a > y; y++) {
                var g = p + v * h, x = c - y * u, S = 0, b = p + (v + 1) * h, w = c - y * u, M = 0, T = p + (v + 1) * h, z = c - (y + 1) * u, C = 0, P = p + v * h, _ = c - (y + 1) * u, O = 0;
                t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, p, -p, l, f), n.map(x, c, -c, d, m)), t.push(P, _, O), i.push(0, 0, 1), s.push(n.map(P, p, -p, l, f), n.map(_, c, -c, d, m)), t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, p, -p, l, f), n.map(z, c, -c, d, m)), t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, p, -p, l, f), n.map(x, c, -c, d, m)), t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, p, -p, l, f), n.map(z, c, -c, d, m)), t.push(b, w, M), i.push(0, 0, 1), s.push(n.map(b, p, -p, l, f), n.map(w, c, -c, d, m))
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupOutlinePlane = function () {
            for (var t = [], i = [], s = [], e = this.options.width, o = this.options.height, r = this.options.resolutionX ? this.options.resolutionX : this.options.resolution, a = this.options.resolutionY ? this.options.resolutionY : this.options.resolution, h = e / r, u = o / a, p = .5 * -e, c = .5 * o, l = this.options.uMin, f = this.options.uMax, d = this.options.vMin, m = this.options.vMax, v = 0; r > v; v++)for (var y = 0; a > y; y++) {
                var g = p + v * h, x = c - y * u, S = 0, b = p + (v + 1) * h, w = c - y * u, M = 0, T = p + (v + 1) * h, z = c - (y + 1) * u, C = 0, P = p + v * h, _ = c - (y + 1) * u, O = 0;
                t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, p, -p, l, f), n.map(x, c, -c, d, m)), t.push(b, w, M), i.push(0, 0, 1), s.push(n.map(b, p, -p, l, f), n.map(w, c, -c, d, m)), t.push(b, w, M), i.push(0, 0, 1), s.push(n.map(b, p, -p, l, f), n.map(w, c, -c, d, m)), t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, p, -p, l, f), n.map(z, c, -c, d, m)), t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, p, -p, l, f), n.map(z, c, -c, d, m)), t.push(P, _, O), i.push(0, 0, 1), s.push(n.map(P, p, -p, l, f), n.map(_, c, -c, d, m)), t.push(P, _, O), i.push(0, 0, 1), s.push(n.map(P, p, -p, l, f), n.map(_, c, -c, d, m)), t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, p, -p, l, f), n.map(x, c, -c, d, m))
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupLinePlane = function () {
            var t = [], i = [], s = [], e = this.options.width, o = this.options.height, r = this.options.resolutionX ? this.options.resolutionX : this.options.resolution, a = this.options.resolutionY ? this.options.resolutionY : this.options.resolution, h = e / r, u = o / a, p = .5 * -e, c = .5 * o, l = this.options.uMin, f = this.options.uMax, d = this.options.vMin, m = this.options.vMax;
            this.options.vertical ? r++ : a++;
            for (var v = 0; r > v; v++)for (var y = 0; a > y; y++) {
                var g = p + v * h, x = c - y * u, S = 0;
                if (t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, p, -p, l, f), n.map(x, c, -c, d, m)), this.options.vertical) {
                    var b = p + v * h, w = c - (y + 1) * u, M = 0;
                    t.push(b, w, M), i.push(0, 0, 1), s.push(n.map(b, p, -p, l, f), n.map(w, c, -c, d, m))
                } else {
                    var T = p + (v + 1) * h, z = c - y * u, C = 0;
                    t.push(T, z, C), i.push(0, 0, 1), s.push(n.map(T, p, -p, l, f), n.map(z, c, -c, d, m))
                }
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setupPointPlane = function () {
            for (var t = [], i = [], s = [], e = this.options.width, o = this.options.height, r = this.options.resolutionX ? this.options.resolutionX : this.options.resolution, a = this.options.resolutionY ? this.options.resolutionY : this.options.resolution, h = e / r, u = o / a, p = .5 * -e, c = .5 * o, l = this.options.uMin, f = this.options.uMax, d = this.options.vMin, m = this.options.vMax, v = 0; r >= v; v++)for (var y = 0; a >= y; y++) {
                var g = p + v * h, x = c - y * u, S = 0;
                t.push(g, x, S), i.push(0, 0, 1), s.push(n.map(g, p, -p, l, f), n.map(x, c, -c, d, m))
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.setSize = function (t) {
            this.options.width = t[0], this.options.height = t[1], this.setup()
        }, s.exports = e
    }), define("famous-gl/Primitives/SpherePrimitive", ["require", "exports", "module", "../Primitive", "famous-utils/Utils"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options.radius = 100, this.options.resolution = 30, this.options.resolutionTheta = void 0, this.options.resolutionPhi = void 0, this.options.vertical = !1, this.options.drawMode = o.TRIANGLES, this.setOptions(t), this.setup()
        }

        var o = t("../Primitive"), n = t("famous-utils/Utils");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            this.drawMode === o.LINES ? (this.drawMode = o.LINES, this.makeOutlineSphere()) : this.drawMode === o.LINE_LOOP || this.drawMode === o.LINE_STRIP ? (this.drawMode = o.LINES, this.makeLoopSphere()) : this.drawMode === o.TRIANGLES || this.drawMode === o.TRIANGLE_STRIP || this.drawMode === o.TRIANGLE_FAN ? (this.drawMode = o.TRIANGLES, this.makeFilledSphere()) : this.makePointSphere()
        }, e.prototype.makeFilledSphere = function () {
            var t = [], i = [], s = [], e = this.options.radius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            var o = this.options.resolutionTheta ? this.options.resolutionTheta : this.options.resolution, r = this.options.resolutionPhi ? this.options.resolutionPhi : this.options.resolution;
            o = o >= 3 ? o : 3, r = r >= 3 ? r : 3;
            for (var a = Math.PI, h = Math.PI, u = 0; o > u; u++)for (var p = n.map(u, 0, o, -a, a), c = n.map(u + 1, 0, o, -a, a), l = 0; r > l; l++) {
                var f = n.map(l, 0, r, 0, h), d = n.map(l + 1, 0, r, 0, h), m = Math.cos(p) * Math.sin(f), v = Math.cos(f), y = Math.sin(p) * Math.sin(f), g = Math.cos(c) * Math.sin(f), x = Math.cos(f), S = Math.sin(c) * Math.sin(f), b = Math.cos(c) * Math.sin(d), w = Math.cos(d), M = Math.sin(c) * Math.sin(d), T = Math.cos(p) * Math.sin(d), z = Math.cos(d), C = Math.sin(p) * Math.sin(d);
                t.push(e * m, e * v, e * y), i.push(m, v, y), s.push(u / o, l / r), t.push(e * T, e * z, e * C), i.push(T, z, C), s.push(u / o, (l + 1) / r), t.push(e * b, e * w, e * M), i.push(b, w, M), s.push((u + 1) / o, (l + 1) / r), t.push(e * m, e * v, e * y), i.push(m, v, y), s.push(u / o, l / r), t.push(e * b, e * w, e * M), i.push(b, w, M), s.push((u + 1) / o, (l + 1) / r), t.push(e * g, e * x, e * S), i.push(g, x, S), s.push((u + 1) / o, l / r)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.makeLoopSphere = function () {
            var t = [], i = [], s = [], e = this.options.radius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            var o = this.options.resolutionTheta ? this.options.resolutionTheta : this.options.resolution, r = this.options.resolutionPhi ? this.options.resolutionPhi : this.options.resolution;
            o = o >= 3 ? o : 3, r = r >= 3 ? r : 3;
            for (var a = Math.PI, h = Math.PI, u = 0; o > u; u++)for (var p = n.map(u, 0, o, -a, a), c = n.map(u + 1, 0, o, -a, a), l = 0; r > l; l++) {
                var f = n.map(l, 0, r, 0, h), d = n.map(l + 1, 0, r, 0, h), m = Math.cos(p) * Math.sin(f), v = Math.cos(f), y = Math.sin(p) * Math.sin(f);
                if (t.push(e * m, e * v, e * y), i.push(m, v, y), s.push(u / o, l / r), this.options.vertical) {
                    var g = Math.cos(p) * Math.sin(d), x = Math.cos(d), S = Math.sin(p) * Math.sin(d);
                    t.push(e * g, e * x, e * S), i.push(g, x, S), s.push(u / o, (l + 1) / r)
                } else {
                    var b = Math.cos(c) * Math.sin(f), w = Math.cos(f), M = Math.sin(c) * Math.sin(f);
                    t.push(e * b, e * w, e * M), i.push(b, w, M), s.push((u + 1) / o, l / r)
                }
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.makeOutlineSphere = function () {
            var t = [], i = [], s = [], e = this.options.radius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            var o = this.options.resolutionTheta ? this.options.resolutionTheta : this.options.resolution, r = this.options.resolutionPhi ? this.options.resolutionPhi : this.options.resolution;
            o = o >= 3 ? o : 3, r = r >= 3 ? r : 3;
            for (var a = Math.PI, h = Math.PI, u = 0; o > u; u++)for (var p = n.map(u, 0, o, -a, a), c = n.map(u + 1, 0, o, -a, a), l = 0; r > l; l++) {
                var f = n.map(l, 0, r, 0, h), d = n.map(l + 1, 0, r, 0, h), m = Math.cos(p) * Math.sin(f), v = Math.cos(f), y = Math.sin(p) * Math.sin(f), g = Math.cos(c) * Math.sin(f), x = Math.cos(f), S = Math.sin(c) * Math.sin(f), b = Math.cos(c) * Math.sin(d), w = Math.cos(d), M = Math.sin(c) * Math.sin(d), T = Math.cos(p) * Math.sin(d), z = Math.cos(d), C = Math.sin(p) * Math.sin(d);
                t.push(e * m, e * v, e * y), i.push(m, v, y), s.push(u / o, l / r), t.push(e * g, e * x, e * S), i.push(g, x, S), s.push((u + 1) / o, l / r), t.push(e * g, e * x, e * S), i.push(g, x, S), s.push((u + 1) / o, l / r), t.push(e * b, e * w, e * M), i.push(b, w, M), s.push((u + 1) / o, (l + 1) / r), t.push(e * b, e * w, e * M), i.push(b, w, M), s.push((u + 1) / o, (l + 1) / r), t.push(e * T, e * z, e * C), i.push(T, z, C), s.push(u / o, (l + 1) / r), t.push(e * T, e * z, e * C), i.push(T, z, C), s.push(u / o, (l + 1) / r), t.push(e * m, e * v, e * y), i.push(m, v, y), s.push(u / o, l / r)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.makePointSphere = function () {
            var t = [], i = [], s = [], e = this.options.radius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            var o = this.options.resolutionTheta ? this.options.resolutionTheta : this.options.resolution, r = this.options.resolutionPhi ? this.options.resolutionPhi : this.options.resolution;
            o = o >= 3 ? o : 3, r = r >= 3 ? r : 3;
            for (var a = Math.PI, h = Math.PI, u = 0; o > u; u++)for (var p = n.map(u, 0, o, -a, a), c = 0; r > c; c++) {
                var l = n.map(c, 0, r, 0, h), f = Math.cos(p) * Math.sin(l), d = Math.cos(l), m = Math.sin(p) * Math.sin(l);
                t.push(e * f, e * d, e * m), i.push(f, d, m), s.push(u / o, c / r)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, s.exports = e
    }), define("famous-gl/Primitives/TorusPrimitive", ["require", "exports", "module", "../Primitive"], function (t, i, s) {
        function e(t) {
            o.apply(this, t), this.options.tubeRadius = 200, this.options.radius = 50, this.options.resolution = 30, this.options.resolutionTheta = void 0, this.options.resolutionPhi = void 0, this.options.vertical = !0, this.options.drawMode = o.TRIANGLES, this.setOptions(t), this.setup()
        }

        var o = t("../Primitive");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            this.drawMode === o.LINES ? (this.drawMode = o.LINES, this.makeOutlineTorus()) : this.drawMode === o.LINE_LOOP || this.drawMode === o.LINE_STRIP ? (this.drawMode = o.LINES, this.makeLoopTorus()) : this.drawMode === o.TRIANGLES || this.drawMode === o.TRIANGLE_STRIP || this.drawMode === o.TRIANGLE_FAN ? (this.drawMode = o.TRIANGLES, this.makeFilledTorus()) : this.makePointTorus()
        }, e.prototype.makeFilledTorus = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.tubeRadius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            var n = this.options.resolutionTheta ? this.options.resolutionTheta : this.options.resolution, r = this.options.resolutionPhi ? this.options.resolutionPhi : this.options.resolution;
            n = n >= 3 ? n : 3, r = r >= 3 ? r : 3;
            for (var a = 2 * Math.PI, h = a / n, u = 2 * Math.PI, p = u / r, c = 0; a > c; c += h)for (var l = 0; u >= l; l += p) {
                var f = l + p, d = c + h, m = Math.cos(l), v = Math.sin(l), y = Math.cos(c), g = Math.sin(c), x = Math.cos(f), S = Math.sin(f), b = Math.cos(d), w = Math.sin(d), M = (o + e * m) * y, T = (o + e * m) * g, z = e * v, C = (o + e * m) * b, P = (o + e * m) * w, _ = e * v, O = (o + e * x) * b, E = (o + e * x) * w, I = e * S, k = (o + e * x) * y, R = (o + e * x) * g, F = e * S;
                t.push(M, T, z), i.push(m * y, m * g, v), s.push(c / a, l / u), t.push(O, E, I), i.push(x * b, x * w, S), s.push(d / a, f / u), t.push(C, P, _), i.push(m * b, m * w, v), s.push(d / a, l / u), t.push(M, T, z), i.push(m * y, m * g, v), s.push(c / a, l / u), t.push(k, R, F), i.push(x * y, x * g, S), s.push(c / a, f / u), t.push(O, E, I), i.push(x * b, x * w, S), s.push(d / a, f / u)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.makeLoopTorus = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.tubeRadius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            var n = this.options.resolutionTheta ? this.options.resolutionTheta : this.options.resolution, r = this.options.resolutionPhi ? this.options.resolutionPhi : this.options.resolution;
            n = n >= 3 ? n : 3, r = r >= 3 ? r : 3;
            for (var a = 2 * Math.PI, h = a / n, u = 2 * Math.PI, p = u / r, c = 0; a > c; c += h)for (var l = 0; u >= l; l += p) {
                var f = l + p, d = c + h, m = Math.cos(l), v = Math.sin(l), y = Math.cos(c), g = Math.sin(c), x = Math.cos(f), S = Math.sin(f), b = Math.cos(d), w = Math.sin(d), M = (o + e * m) * y, T = (o + e * m) * g, z = e * v, C = (o + e * m) * b, P = (o + e * m) * w, _ = e * v, O = (o + e * x) * y, E = (o + e * x) * g, I = e * S;
                t.push(M, T, z), i.push(m * y, m * g, v), s.push(c / a, l / u), this.options.vertical ? (t.push(C, P, _), i.push(m * b, m * w, v), s.push(d / a, l / u)) : (t.push(O, E, I), i.push(x * y, x * g, S), s.push(c / a, f / u))
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.makeOutlineTorus = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.tubeRadius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            var n = this.options.resolutionTheta ? this.options.resolutionTheta : this.options.resolution, r = this.options.resolutionPhi ? this.options.resolutionPhi : this.options.resolution;
            n = n >= 3 ? n : 3, r = r >= 3 ? r : 3;
            for (var a = 2 * Math.PI, h = a / n, u = 2 * Math.PI, p = u / r, c = 0; a > c; c += h)for (var l = 0; u >= l; l += p) {
                var f = l + p, d = c + h, m = Math.cos(l), v = Math.sin(l), y = Math.cos(c), g = Math.sin(c), x = Math.cos(f), S = Math.sin(f), b = Math.cos(d), w = Math.sin(d), M = (o + e * m) * y, T = (o + e * m) * g, z = e * v, C = (o + e * m) * b, P = (o + e * m) * w, _ = e * v, O = (o + e * x) * b, E = (o + e * x) * w, I = e * S, k = (o + e * x) * y, R = (o + e * x) * g, F = e * S;
                t.push(M, T, z), i.push(m * y, m * g, v), s.push(c / a, l / u), t.push(C, P, _), i.push(m * b, m * w, v), s.push(d / a, l / u), t.push(C, P, _), i.push(m * b, m * w, v), s.push(d / a, l / u), t.push(O, E, I), i.push(x * b, x * w, S), s.push(d / a, f / u), t.push(O, E, I), i.push(x * b, x * w, S), s.push(d / a, f / u), t.push(k, R, F), i.push(x * y, x * g, S), s.push(c / a, f / u), t.push(k, R, F), i.push(x * y, x * g, S), s.push(c / a, f / u), t.push(M, T, z), i.push(m * y, m * g, v), s.push(c / a, l / u)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, e.prototype.makePointTorus = function () {
            var t = [], i = [], s = [], e = this.options.radius, o = this.options.tubeRadius;
            this.options.resolution = this.options.resolution >= 3 ? this.options.resolution : 3;
            var n = this.options.resolutionTheta ? this.options.resolutionTheta : this.options.resolution, r = this.options.resolutionPhi ? this.options.resolutionPhi : this.options.resolution;
            n = n >= 3 ? n : 3, r = r >= 3 ? r : 3;
            for (var a = 2 * Math.PI, h = a / n, u = 2 * Math.PI, p = u / r, c = 0; a > c; c += h)for (var l = 0; u >= l; l += p) {
                var f = Math.cos(l), d = Math.sin(l), m = Math.cos(c), v = Math.sin(c), y = (o + e * f) * m, g = (o + e * f) * v, x = e * d;
                t.push(y, g, x), i.push(f * m, f * v, d), s.push(c / a, l / u)
            }
            this.setPositions(t), this.setNormals(i), this.setTextureCoords(s)
        }, s.exports = e
    }), define("famous-gl/ShaderFunctions/Map", ["require", "exports", "module"], function (t, i, s) {
        s.exports = ["float map(float value, float inputMin, float inputMax, float outputMin, float outputMax) {", "	return ( (value - inputMin) / (inputMax - inputMin) ) * (outputMax - outputMin) + outputMin;", "}"].join("\n")
    }), define("famous-gl/ShaderFunctions/Noise2D", ["require", "exports", "module"], function (t, i, s) {
        s.exports = ["vec3 mod289(vec3 x) {", "	return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec2 mod289(vec2 x) {", "	return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec3 permute(vec3 x) {", "	return mod289(((x*34.0)+1.0)*x);", "}", "", "float snoise(vec2 v) {", "	const vec4 C = vec4(0.211324865405187,  0.366025403784439, -0.577350269189626, 0.024390243902439);", "", "	vec2 i  = floor(v + dot(v, C.yy));", "	vec2 x0 = v -   i + dot(i, C.xx);", "", "	vec2 i1;", "	i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);", "	vec4 x12 = x0.xyxy + C.xxzz;", "	x12.xy -= i1;", "", "	i = mod289(i);", "	vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));", "", "	vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);", "	m = m*m;", "	m = m*m;", "", "	vec3 x = 2.0 * fract(p * C.www) - 1.0;", "	vec3 h = abs(x) - 0.5;", "	vec3 ox = floor(x + 0.5);", "	vec3 a0 = x - ox;", "", "	m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );", "", "	vec3 g;", "	g.x  = a0.x  * x0.x  + h.x  * x0.y;", "	g.yz = a0.yz * x12.xz + h.yz * x12.yw;", "	return 130.0 * dot(m, g);", "}"].join("\n")
    }), define("famous-gl/ShaderFunctions/Noise3D", ["require", "exports", "module"], function (t, i, s) {
        s.exports = ["vec3 mod289(vec3 x) {", "	return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec4 mod289(vec4 x) {", "	return x - floor(x * (1.0 / 289.0)) * 289.0;", "}", "", "vec4 permute(vec4 x) {", "	return mod289(((x*34.0)+1.0)*x);", "}", "", "vec4 taylorInvSqrt(vec4 r)", "{", "	return 1.79284291400159 - 0.85373472095314 * r;", "}", "", "float snoise(vec3 v)", "{", "	const vec2  C = vec2(1.0/6.0, 1.0/3.0);", "	const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);", "", "	vec3 i = floor(v + dot(v, C.yyy));", "	vec3 x0 = v - i + dot(i, C.xxx);", "", "	vec3 g = step(x0.yzx, x0.xyz);", "	vec3 l = 1.0 - g;", "	vec3 i1 = min( g.xyz, l.zxy );", "	vec3 i2 = max( g.xyz, l.zxy );", "", "	vec3 x1 = x0 - i1 + C.xxx;", "	vec3 x2 = x0 - i2 + C.yyy;", "	vec3 x3 = x0 - D.yyy;", "", "	i = mod289(i);", "	vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));", "", "	float n_ = 0.142857142857;", "	vec3  ns = n_ * D.wyz - D.xzx;", "", "	vec4 j = p - 49.0 * floor(p * ns.z * ns.z);", "", "	vec4 x_ = floor(j * ns.z);", "	vec4 y_ = floor(j - 7.0 * x_ );", "", "	vec4 x = x_ *ns.x + ns.yyyy;", "	vec4 y = y_ *ns.x + ns.yyyy;", "	vec4 h = 1.0 - abs(x) - abs(y);", "", "	vec4 b0 = vec4( x.xy, y.xy );", "	vec4 b1 = vec4( x.zw, y.zw );", "", "	vec4 s0 = floor(b0)*2.0 + 1.0;", "	vec4 s1 = floor(b1)*2.0 + 1.0;", "	vec4 sh = -step(h, vec4(0.0));", "", "	vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;", "	vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;", "", "	vec3 p0 = vec3(a0.xy,h.x);", "	vec3 p1 = vec3(a0.zw,h.y);", "	vec3 p2 = vec3(a1.xy,h.z);", "	vec3 p3 = vec3(a1.zw,h.w);", "", "	vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));", "	p0 *= norm.x;", "	p1 *= norm.y;", "	p2 *= norm.z;", "	p3 *= norm.w;", "", "	vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);", "	m = m * m;", "	return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));", "}"].join("\n")
    }), define("famous-gl/ShaderFunctions/Noise4D", ["require", "exports", "module"], function (t, i, s) {
        s.exports = ["vec4 mod289(vec4 x) {", "	return x - floor(x * (1.0 / 289.0)) * 289.0; }", "", "float mod289(float x) {", "	return x - floor(x * (1.0 / 289.0)) * 289.0; }", "", "vec4 permute(vec4 x) {", "	return mod289(((x*34.0)+1.0)*x);", "}", "", "float permute(float x) {", "	return mod289(((x*34.0)+1.0)*x);", "}", "", "vec4 taylorInvSqrt(vec4 r) {", "	return 1.79284291400159 - 0.85373472095314 * r;", "}", "", "float taylorInvSqrt(float r) {", "	return 1.79284291400159 - 0.85373472095314 * r;", "}", "", "vec4 grad4(float j, vec4 ip) {", "	const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);", "	vec4 p,s;", "", "	p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;", "	p.w = 1.5 - dot(abs(p.xyz), ones.xyz);", "	s = vec4(lessThan(p, vec4(0.0)));", "	p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;", "", "	return p;", "}", "", "#define F4 0.309016994374947451", "", "float snoise(vec4 v) {", "	const vec4  C = vec4( 0.138196601125011, 0.276393202250021, 0.414589803375032, -0.447213595499958);", "", "	vec4 i  = floor(v + dot(v, vec4(F4)) );", "		vec4 x0 = v -   i + dot(i, C.xxxx);", "", "	vec4 i0;", "	vec3 isX = step( x0.yzw, x0.xxx );", "	vec3 isYZ = step( x0.zww, x0.yyz );", "", "	i0.x = isX.x + isX.y + isX.z;", "	i0.yzw = 1.0 - isX;", "	i0.y += isYZ.x + isYZ.y;", "	i0.zw += 1.0 - isYZ.xy;", "	i0.z += isYZ.z;", "	i0.w += 1.0 - isYZ.z;", "", "	vec4 i3 = clamp( i0, 0.0, 1.0 );", "	vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );", "	vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );", "", "	vec4 x1 = x0 - i1 + C.xxxx;", "	vec4 x2 = x0 - i2 + C.yyyy;", "	vec4 x3 = x0 - i3 + C.zzzz;", "	vec4 x4 = x0 + C.wwww;", "", "	i = mod289(i);", "	float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);", "	vec4 j1 = permute( permute( permute( permute (i.w + vec4(i1.w, i2.w, i3.w, 1.0 )) + i.z + vec4(i1.z, i2.z, i3.z, 1.0 )) + i.y + vec4(i1.y, i2.y, i3.y, 1.0 )) + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));", "", "	vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0);", "", "	vec4 p0 = grad4(j0,   ip);", "	vec4 p1 = grad4(j1.x, ip);", "	vec4 p2 = grad4(j1.y, ip);", "	vec4 p3 = grad4(j1.z, ip);", "	vec4 p4 = grad4(j1.w, ip);", "", "	vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));", "	p0 *= norm.x;", "	p1 *= norm.y;", "	p2 *= norm.z;", "	p3 *= norm.w;", "	p4 *= taylorInvSqrt(dot(p4,p4));", "", "	vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);", "	vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);", "	m0 = m0 * m0;", "	m1 = m1 * m1;", "	return 49.0 * (dot(m0*m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2))) + dot(m1*m1, vec2(dot(p3, x3), dot(p4, x4))));", "}"].join("\n")
    }), define("famous-gl/Camera", ["require", "exports", "module", "famous/Engine", "famous-utils/Utils", "famous/Matrix", "famous-math/Vector", "famous-math/Quaternion"], function (t, i, s) {
        function e() {
            this.renderMatrix = r.identity, this.doubleClickToReset = !0, this.touchTime = (new Date).getTime(), this.clickTime = (new Date).getTime(), this.deltaTime = 200, this.viewWidth = n.getWidth(), this.viewHeight = n.getHeight(), this.radius = Math.max(this.viewWidth, this.viewHeight), this.center = new a(.5 * this.viewWidth, .5 * this.viewHeight, 0), this.axis = new a(0, 1, 0), this.theta = 0, this.flipX = 1, this.flipY = 1, this.flipZ = 1, this.t1 = new a, this.t2 = new a, this.pt1 = new a, this.pt2 = new a, this.damping = .98, this.zAcc = 0, this.zVel = 0, this.dt = 0, this.pdt = 0, this.distance = -100, this.position = new a(0, 0, this.distance), this.rotation = new a(0, 0, 0), this.e_mtx = r.identity, this.q_rot = new h, this.q_mtx = r.identity, this.quat = new h, this.d_mtx = r.identity, this.sensitivityRotation = 4, this.sensitivityZoom = 3, this.touchDown = !1, this.mouseDown = !1, o.on("prerender", this._update.bind(this)), o.on("touchstart", this.touchstart.bind(this)), o.on("touchmove", this.touchmove.bind(this)), o.on("touchend", this.touchend.bind(this)), o.on("resize", this.resize.bind(this)), o.on("mousedown", this.mousedown.bind(this)), o.on("mousemove", this.mousemove.bind(this)), o.on("mouseup", this.mouseup.bind(this)), o.on("mousewheel", this.mousewheel.bind(this)), o.on("wheel", this.mousewheel.bind(this)), this.updateMatrix()
        }

        var o = t("famous/Engine"), n = t("famous-utils/Utils"), r = t("famous/Matrix"), a = t("famous-math/Vector"), h = t("famous-math/Quaternion");
        e.prototype._update = function () {
            this.update(), !this.mouseDown && !this.touchDown && this.theta > .001 && (this.quat.makeFromAngleAndAxis(this.theta * this.sensitivityRotation, this.axis), this.q_rot = this.q_rot.multiply(this.quat), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix(), this.theta *= this.damping)
        }, e.prototype.update = function () {
        }, e.prototype.setFlipX = function (t) {
            this.flipX = t ? -1 : 1
        }, e.prototype.setFlipY = function (t) {
            this.flipY = t ? -1 : 1
        }, e.prototype.setFlipZ = function (t) {
            this.flipZ = t ? -1 : 1
        }, e.prototype.setSensitivityZoom = function (t) {
            this.sensitivityZoom = t
        }, e.prototype.setSensitivityRotation = function (t) {
            this.sensitivityRotation = t
        }, e.prototype.setDistance = function (t) {
            this.distance = t, this.position.z = this.distance, this.setPosition(this.position)
        }, e.prototype.setPosition = function (t) {
            this.position.set(t), this.updateMatrix()
        }, e.prototype.applyQuaternionRotation = function (t) {
            this.q_rot = this.q_rot.multiply(t), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix()
        }, e.prototype.applyEulerRotation = function (t, i, s) {
            this.rotation.setXYZ(t, i, s), this.e_mtx = r.rotate(t, i, s), this.updateMatrix()
        }, e.prototype.updateMatrix = function () {
            this.renderMatrix = r.move(r.multiply(this.q_mtx, this.e_mtx), this.position.toArray())
        }, e.prototype.getRotationMatrix = function () {
            return this.q_mtx
        }, e.prototype.getMatrix = function () {
            return this.renderMatrix
        }, e.prototype.reset = function () {
            this.theta = 0, this.q_rot.clear(), this.q_mtx = this.d_mtx, this.position.clear(), this.position.setXYZ(0, 0, this.distance), this.updateMatrix()
        }, e.prototype.setDefaultMatrix = function (t) {
            this.d_mtx = t
        }, e.prototype.clickCheckForCameraRestart = function () {
            var t = (new Date).getTime();
            t - this.clickTime < this.deltaTime && this.doubleClickToReset && this.reset(), this.clickTime = t
        }, e.prototype.touchCheckForCameraRestart = function () {
            var t = (new Date).getTime();
            t - this.touchTime < this.deltaTime && this.doubleClickToReset && this.reset(), this.touchTime = t
        }, e.prototype.touchstart = function (t) {
            1 == t.touches.length ? (this.touchDown = !0, this.touchCheckForCameraRestart(), this.theta = 0, this.t1.clear(), this.pt1.clear(), this.quat.clear(), this.setArcBallVector(t.touches[0].clientX, t.touches[0].clientY)) : 2 == t.touches.length && (this.touchDown = !0, this.t1.setXYZ(t.touches[0].clientX, t.touches[0].clientY, 0), this.t2.setXYZ(t.touches[1].clientX, t.touches[1].clientY, 0), this.pt1.set(this.t1), this.pt2.set(this.t2), this.dt = n.distance(this.t1.x, this.t1.y, this.t2.x, this.t2.y), this.pdt = this.dt)
        }, e.prototype.touchmove = function (t) {
            1 == t.touches.length && this.touchDown ? (this.setArcBallVector(t.touches[0].clientX, t.touches[0].clientY), this.updateArcBallRotation()) : 2 == t.touches.length && (this.t1.setXYZ(t.touches[0].clientX, t.touches[0].clientY, 0), this.t2.setXYZ(t.touches[1].clientX, t.touches[1].clientY, 0), this.dt = n.distance(this.t1.x, this.t1.y, this.t2.x, this.t2.y), this.position.z += this.flipZ * (this.dt - this.pdt) * this.sensitivityZoom, this.updateMatrix(), this.pt1.set(this.t1), this.pt2.set(this.t2), this.pdt = this.dt)
        }, e.prototype.touchend = function (t) {
            0 === t.touches.length ? (this.touchDown = !1, this.t1.clear(), this.pt1.clear(), this.quat.clear()) : 1 == t.touches.length && (this.t1.clear(), this.pt1.clear(), this.t2.clear(), this.pt2.clear(), this.dt = 0, this.pdt = 0)
        }, e.prototype.setArcBallVector = function (t, i) {
            this.pt1.set(this.t1), this.t1.clear(), this.t1.x = -1 * this.flipX * (t - this.center.x) / this.radius, this.t1.y = -1 * this.flipY * (i - this.center.y) / this.radius;
            var s = this.t1.norm();
            s > 1 ? this.t1.normalize(1, this.t1) : this.t1.z = Math.sqrt(1 - s)
        }, e.prototype.updateArcBallRotation = function () {
            this.theta = Math.acos(this.t1.dot(this.pt1)), this.axis = this.pt1.cross(this.t1, this.axis), this.quat.makeFromAngleAndAxis(this.theta * this.sensitivityRotation, this.axis), this.q_rot = this.q_rot.multiply(this.quat), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix()
        }, e.prototype.emit = function (t, i) {
            "prerender" == t ? this.update(i) : "touchstart" == t ? this.touchstart(i) : "touchmove" == t ? this.touchmove(i) : "touchend" == t ? this.touchend(i) : "resize" == t && this.resize(i)
        }, e.prototype.mousemove = function (t) {
            this.mouseDown && (this.setArcBallVector(t.clientX, t.clientY), this.updateArcBallRotation())
        }, e.prototype.mousedown = function (t) {
            this.mouseDown = !0, this.clickCheckForCameraRestart(), this.theta = 0, this.t1.clear(), this.pt1.clear(), this.quat.clear(), this.setArcBallVector(t.clientX, t.clientY)
        }, e.prototype.mouseup = function () {
            this.mouseDown = !1
        }, e.prototype.mousewheel = function (t) {
            this.position.z += .05 * this.flipZ * n.limit(t.wheelDelta, -100, 100) * this.sensitivityZoom, this.updateMatrix()
        }, e.prototype.resize = function () {
            this.viewWidth = n.getWidth(), this.viewHeight = n.getHeight(), this.center = new a(.5 * this.viewWidth, .5 * this.viewHeight, 0), this.radius = Math.max(this.viewWidth, this.viewHeight)
        }, e.prototype.setDamping = function (t) {
            this.damping = t
        }, e.prototype.render = function (t) {
            return{transform: this.renderMatrix, origin: [.5, .5], target: t}
        }, s.exports = e
    }), define("famous-gl/Texture", ["require", "exports", "module"], function (t, i, s) {
        function e(t) {
            this.options = {context: void 0, src: void 0, flip: !1, size: void 0, width: void 0, height: void 0, mipmap: !1, type: void 0, format: void 0, data: void 0, magFilter: void 0, minFilter: void 0, wrapS: void 0, wrapT: void 0}, this.setOptions(t), this.gl = void 0, this.id = 0, this.initialized = !1
        }

        function o(t) {
            return Math.log(t) / Math.LN2
        }

        function n(t) {
            var i = o(t);
            return 0 === i ? !1 : Math.abs(i - Math.floor(i)) > 0 ? !1 : !0
        }

        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i])
        }, e.prototype.setContext = function (t) {
            this.gl = t, this.isInitialized() || (this.init(), this.setTextureID(), e.HASFLOATTEXTURES = this.gl.getExtension("OES_texture_float"))
        }, e.prototype.init = function () {
            var t = this.gl;
            this.texture = t.createTexture(), this.options.src ? this.image ? this.makeTextureFromImage() : this.initFromImage() : this.initFromNull()
        }, e.prototype.initFromNull = function () {
            var t = this.gl, i = this.options.format ? this.options.format : t.RGBA, s = this.options.type ? this.options.type : t.UNSIGNED_BYTE, e = this.options.data ? this.options.data : null;
            this.options.size = this.options.size ? this.options.size : [this.options.width ? this.options.width : 0, this.options.height ? this.options.height : 0], this.bind(), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, this.options.flip), t.texImage2D(t.TEXTURE_2D, 0, i, this.options.size[0], this.options.size[1], 0, i, s, e), this.setTextureParameters(), this.unbind(), this.initialized = !0
        }, e.prototype.initFromImage = function () {
            this.gl, this.image = new Image, this.image.crossOrigin = "anonymous", this.image.src = this.options.src, this.image.onload = function () {
                this.makeTextureFromImage()
            }.bind(this), this.initialized = !0
        }, e.prototype.makeTextureFromImage = function () {
            var t = this.gl;
            this.options.size = [this.image.width, this.image.height], this.bind(), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, this.options.flip), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.image), this.setTextureParameters(), this.unbind(), this.initialized = !0
        }, e.prototype.setTextureParameters = function () {
            var t = this.gl;
            this.options.magFilter = this.options.magFilter ? this.options.magFilter : t.NEAREST, this.options.minFilter = this.options.minFilter ? this.options.minFilter : t.NEAREST, this.options.wrapS = this.options.wrapS ? this.options.wrapS : t.CLAMP_TO_EDGE, this.options.wrapT = this.options.wrapT ? this.options.wrapT : t.CLAMP_TO_EDGE, n(this.options.size[0]) && n(this.options.size[1]) && this.options.size[0] === this.options.size[1] ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, this.options.magFilter), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, this.options.minFilter), this.options.mipmap && t.generateMipmap(t.TEXTURE_2D)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, this.options.magFilter), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, this.options.minFilter), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, this.options.wrapS), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, this.options.wrapT))
        }, e.prototype.setTextureID = function () {
            this.id = e.COUNT, e.COUNT++
        }, e.prototype.bind = function () {
            var t = this.gl;
            t && (t.activeTexture(t.TEXTURE0 + this.getID()), t.bindTexture(t.TEXTURE_2D, this.texture))
        }, e.prototype.unbind = function () {
            var t = this.gl;
            t && t.bindTexture(t.TEXTURE_2D, null)
        }, e.prototype.get = function () {
            return this.texture
        }, e.prototype.setData = function (t) {
            var i = this.gl;
            if (i) {
                var s = this.options.format ? this.options.format : i.RGBA, e = this.options.type ? this.options.type : i.UNSIGNED_BYTE;
                this.bind(), i.texImage2D(i.TEXTURE_2D, 0, s, this.options.size[0], this.options.size[1], 0, s, e, t), this.unbind()
            }
        }, e.prototype.getID = function () {
            return this.id
        }, e.prototype.isInitialized = function () {
            return this.initialized
        }, e.prototype.setSize = function (t) {
            var i = this.gl;
            i && (this.options.size = t, i.deleteTexture(this.texture), this.initialized = !1, this.init())
        }, e.COUNT = 0, e.HASFLOATTEXTURES = !1, s.exports = e
    }), define("famous-gl/Fbo", ["require", "exports", "module", "./Texture"], function (t, i, s) {
        function e(t) {
            this.options = {size: void 0, width: void 0, height: void 0, textureOptions: void 0}, this.setOptions(t), this.options.size = this.options.size ? this.options.size : [this.options.width ? this.options.width : 0, this.options.height ? this.options.height : 0], this.gl = void 0, this.frameTexture = void 0, this.frameBuffer = void 0, this.renderBuffer = void 0, this.textureOptions = {size: this.options.size, flip: !1, mipmap: !1}, this.setTextureOptions(this.options.textureOptions), this.frameTexture = new o(this.textureOptions), this.initialized = !1
        }

        var o = t("./Texture");
        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i])
        }, e.prototype.setTextureOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.textureOptions[i] = t[i])
        }, e.prototype.setContext = function (t) {
            this.gl = t, this.isInitialized() || this.init()
        }, e.prototype.init = function () {
            var t = this.gl, i = this.options.size;
            this.frameTexture.setContext(t);
            var s = this.frameTexture.get(), e = t.createFramebuffer();
            t.bindFramebuffer(t.FRAMEBUFFER, e);
            var o = t.createRenderbuffer();
            t.bindRenderbuffer(t.RENDERBUFFER, o), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, i[0], i[1]), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, s, 0), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, o), t.bindTexture(t.TEXTURE_2D, null), t.bindRenderbuffer(t.RENDERBUFFER, null), t.bindFramebuffer(t.FRAMEBUFFER, null), this.frameBuffer = e, this.renderbuffer = o, this.initialized = !0
        }, e.prototype.bind = function () {
            var t = this.gl;
            t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer)
        }, e.prototype.unbind = function () {
            var t = this.gl;
            t.bindFramebuffer(t.FRAMEBUFFER, null)
        }, e.prototype.getTexture = function () {
            return this.frameTexture
        }, e.prototype.getSize = function () {
            return this.options.size
        }, e.prototype.setSize = function (t) {
            if (this.isInitialized()) {
                var i = this.gl;
                this.options.size = t, this.initialized = !1, i.deleteFramebuffer(this.frameBuffer), i.deleteRenderbuffer(this.renderbuffer), this.frameTexture.setSize(t), this.init()
            }
        }, e.prototype.getWidth = function () {
            return this.options.size[0]
        }, e.prototype.getHeight = function () {
            return this.options.size[1]
        }, e.prototype.isInitialized = function () {
            return this.initialized
        }, s.exports = e
    }), define("famous-gl/Geometry", ["require", "exports", "module", "./Primitive"], function (t, i, s) {
        function e(t) {
            this.options = {primitive: void 0, drawMode: void 0, dynamicPositions: !1, dynamicColors: !1, dynamicTextureCoords: !1, dynamicNormals: !1}, this.setOptions(t), this.drawMode, this.primitive = this.options.primitive, this.gl = void 0, this.positionBuffer = void 0, this.normalBuffer = void 0, this.textureCoordBuffer = void 0, this.colorBuffer = void 0, this.hasNormals = !1, this.hasPositions = !1, this.hasTexcoords = !1, this.hasColors = !1, this.initialized = !1
        }

        var o = t("./Primitive");
        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i])
        }, e.prototype.parseDrawMode = function (t) {
            var i = null;
            switch (t) {
                case o.UNKNOWN:
                    i = this.gl.POINTS;
                    break;
                case o.POINTS:
                    i = this.gl.POINTS;
                    break;
                case o.LINES:
                    i = this.gl.LINES;
                    break;
                case o.LINE_LOOP:
                    i = this.gl.LINE_LOOP;
                    break;
                case o.LINE_STRIP:
                    i = this.gl.LINE_STRIP;
                    break;
                case o.TRIANGLES:
                    i = this.gl.TRIANGLES;
                    break;
                case o.TRIANGLE_STRIP:
                    i = this.gl.TRIANGLE_STRIP;
                    break;
                case o.TRIANGLE_FAN:
                    i = this.gl.TRIANGLE_FAN
            }
            return i
        }, e.prototype.getDrawMode = function () {
            return this.drawMode
        }, e.prototype.setDrawMode = function (t) {
            this.drawMode = t
        }, e.prototype.setPositions = function (t) {
            if (null !== t && t.length > 0) {
                var i = this.gl;
                this.positionBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.positionBuffer);
                var s = i.STATIC_DRAW;
                this.options.dynamicPositions && (s = i.DYNAMIC_DRAW), i.bufferData(i.ARRAY_BUFFER, new Float32Array(t), s), this.positionBuffer.itemSize = 3, this.positionBuffer.numItems = t.length / 3, this.hasPositions = !0
            }
        }, e.prototype.setTextureCoords = function (t) {
            if (null !== t && t.length > 0) {
                var i = this.gl;
                this.textureCoordBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.textureCoordBuffer);
                var s = i.STATIC_DRAW;
                this.options.dynamicTextureCoords && (s = i.DYNAMIC_DRAW), i.bufferData(i.ARRAY_BUFFER, new Float32Array(t), s), this.textureCoordBuffer.itemSize = 2, this.textureCoordBuffer.numItems = t.length / 2, this.hasTexcoords = !0
            }
        }, e.prototype.setNormals = function (t) {
            if (null !== t && t.length > 0) {
                var i = this.gl;
                this.normalBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.normalBuffer);
                var s = i.STATIC_DRAW;
                this.options.dynamicNormals && (s = i.DYNAMIC_DRAW), i.bufferData(i.ARRAY_BUFFER, new Float32Array(t), s), this.normalBuffer.itemSize = 3, this.normalBuffer.numItems = t.length / 3, this.hasNormals = !0
            }
        }, e.prototype.setColors = function (t) {
            if (null !== t && t.length > 0) {
                var i = this.gl;
                this.colorBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.colorBuffer);
                var s = i.STATIC_DRAW;
                this.options.dynamicColors && (s = i.DYNAMIC_DRAW), i.bufferData(i.ARRAY_BUFFER, new Float32Array(t), s), this.colorBuffer.itemSize = 4, this.colorBuffer.numItems = t.length / 4, this.hasColors = !0
            }
        }, e.prototype.updatePositions = function (t) {
            if (this.positionBuffer && null !== t && t.length > 0) {
                var i = this.gl;
                i.bindBuffer(i.ARRAY_BUFFER, this.positionBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, new Float32Array(t)), this.positionBuffer.itemSize = 3, this.positionBuffer.numItems = t.length / 3
            }
        }, e.prototype.updateTextureCoords = function (t) {
            if (this.textureCoordBuffer && null !== t && t.length > 0) {
                var i = this.gl;
                i.bindBuffer(i.ARRAY_BUFFER, this.textureCoordBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, new Float32Array(t)), this.textureCoordBuffer.itemSize = 2, this.textureCoordBuffer.numItems = t.length / 2
            }
        }, e.prototype.updateNormals = function (t) {
            if (this.normalBuffer && null !== t && t.length > 0) {
                var i = this.gl;
                i.bindBuffer(i.ARRAY_BUFFER, this.normalBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, new Float32Array(t)), this.normalBuffer.itemSize = 3, this.normalBuffer.numItems = t.length / 3
            }
        }, e.prototype.updateColors = function (t) {
            if (this.colorBuffer && null !== t && t.length > 0) {
                var i = this.gl;
                i.bindBuffer(i.ARRAY_BUFFER, this.colorBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, new Float32Array(t)), this.colorBuffer.itemSize = 4, this.colorBuffer.numItems = t.length / 4
            }
        }, e.prototype.getPositionBuffer = function () {
            return this.positionBuffer
        }, e.prototype.getTextureCoordBuffer = function () {
            return this.textureCoordBuffer
        }, e.prototype.getNormalBuffer = function () {
            return this.normalBuffer
        }, e.prototype.getColorBuffer = function () {
            return this.colorBuffer
        }, e.prototype.setDynamicPositions = function (t) {
            this.options.dynamicPositions = t
        }, e.prototype.setDynamicTextureCoords = function (t) {
            this.options.dynamicTextureCoords = t
        }, e.prototype.setDynamicColors = function (t) {
            this.options.dynamicColors = t
        }, e.prototype.setDynamicNormals = function (t) {
            this.options.dynamicNormals = t
        }, e.prototype.getPrimitive = function () {
            return this.primitive
        }, e.prototype.isInitialized = function () {
            return this.initialized
        }, e.prototype.setContext = function (t) {
            this.gl = t, this.isInitialized() || this.init()
        }, e.prototype.init = function () {
            var t = this.primitive.getGeometryCache();
            void 0 !== t ? (this.positionBuffer = t.getPositionBuffer(), this.normalBuffer = t.getNormalBuffer(), this.textureCoordBuffer = t.getTextureCoordBuffer(), this.colorBuffer = t.getColorBuffer()) : (this.setPositions(this.primitive.getPositions()), this.setTextureCoords(this.primitive.getTextureCoords()), this.setNormals(this.primitive.getNormals()), this.setColors(this.primitive.getColors()), this.primitive.setGeometryCache(this)), this.drawMode = "undefined" != typeof this.options.drawMode ? this.options.drawMode : this.parseDrawMode(this.primitive.getDrawMode()), this.initialized = !0
        }, s.exports = e
    }), define("famous-gl/Light", ["require", "exports", "module", "famous-math/Vector", "famous-color/Color"], function (t, i, s) {
        function e(t) {
            this.options = {position: void 0, ambientColor: void 0, color: void 0}, this.setOptions(t), this.position = this.options.position || new o(0, 0, 0), this.color = this.options.color || new n(255, 255, 255, 1), this.ambientColor = this.options.ambientColor || new n(255, 255, 255, 1)
        }

        var o = t("famous-math/Vector"), n = t("famous-color/Color");
        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i])
        }, e.prototype.getPosition = function () {
            return this.position
        }, e.prototype.getAmbientColor = function () {
            return this.ambientColor
        }, e.prototype.getColor = function () {
            return this.color
        }, s.exports = e
    }), define("famous-gl/ShaderMaker", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i) {
            var s = t.createShader(t.FRAGMENT_SHADER);
            return t.shaderSource(s, i), t.compileShader(s), t.getShaderParameter(s, t.COMPILE_STATUS) ? s : (alert(t.getShaderInfoLog(s)), void 0)
        }

        function o(t, i) {
            var s = t.createShader(t.VERTEX_SHADER);
            return t.shaderSource(s, i), t.compileShader(s), t.getShaderParameter(s, t.COMPILE_STATUS) ? s : (alert(t.getShaderInfoLog(s)), void 0)
        }

        function n(t, i, s) {
            var n = o(t, i), r = e(t, s), a = t.createProgram();
            return t.attachShader(a, n), t.attachShader(a, r), t.linkProgram(a), t.getProgramParameter(a, t.LINK_STATUS) || alert("Could not initialise shaders"), a
        }

        s.exports = {createShader: n, initVertShader: o, initFragShader: e}
    }), define("famous-gl/Material", ["require", "exports", "module", "./ShaderMaker", "famous-color/Color", "famous-gl/Texture", "famous-gl/Fbo"], function (t, i, s) {
        function e(t) {
            this.options = {color: void 0, texture: void 0, reference: void 0, vertexShader: void 0, vertexDefines: void 0, vertexUniforms: void 0, vertexChunk: void 0, fragmentShader: void 0, fragmentDefines: void 0, fragmentUniforms: void 0, fragmentChunk: void 0, effects: void 0, precision: "mediump", debug: !1}, this.setOptions(t), this.texture = this.options.texture, this.options.color = this.options.color || new a(255, 255, 255, 1), this.gl = void 0, this.shader = void 0, this.uniforms = {}, this.attributes = {}, this.uniformKeys = [], this.initialized = !1, this.id = -1, this.sid = -1, this.parseEffects()
        }

        function o(t) {
            return t instanceof Array ? t.length <= 1 ? "float" : "vec" + t.length : "number" == typeof t ? "float" : "boolean" == typeof t ? "bool" : t instanceof h ? "sampler2D" : t instanceof u ? "sampler2D" : void 0
        }

        function n(t, i) {
            return"mat4" == i ? "uniformMatrix4fv" : "mat3" == i ? "uniformMatrix3fv" : "mat2" == i ? "uniformMatrix2fv" : "vec4" == i ? "uniform4fv" : "vec3" == i ? "uniform3fv" : "vec2" == i ? "uniform2fv" : "float" == i ? "uniform1f" : "bool" == i ? "uniform1i" : "sampler2D" == i ? "uniform1i" : void 0
        }

        var r = t("./ShaderMaker"), a = t("famous-color/Color"), h = t("famous-gl/Texture"), u = t("famous-gl/Fbo");
        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i])
        }, e.prototype.parseEffects = function () {
            var t = this.options.effects;
            if (void 0 !== t)for (var i = 0; i < t.length; i++) {
                var s = t[i], e = s.getVertexDefines(), o = s.getVertexUniforms(), n = s.getVertexChunk(), r = s.getFragmentDefines(), a = s.getFragmentUniforms(), h = s.getFragmentChunk();
                if (void 0 !== e) {
                    var u = this.options.vertexDefines;
                    void 0 === u && (u = []);
                    for (var p = 0; p < e.length; p++)u.push(e[p]);
                    this.options.vertexDefines = u
                }
                if (void 0 !== o) {
                    var c = this.options.vertexUniforms;
                    void 0 === c && (c = {});
                    for (var l = Object.keys(o), p = 0; p < l.length; p++)c[l[p]] = o[l[p]];
                    this.options.vertexUniforms = c
                }
                if (void 0 !== n) {
                    var f = this.options.vertexChunk;
                    void 0 === f && (f = []);
                    for (var p = 0; p < n.length; p++)f.push(n[p]);
                    this.options.vertexChunk = f
                }
                if (void 0 !== r) {
                    var d = this.options.fragmentDefines;
                    void 0 === d && (d = []);
                    for (var p = 0; p < r.length; p++)d.push(r[p]);
                    this.options.fragmentDefines = d
                }
                if (void 0 !== a) {
                    var m = this.options.fragmentUniforms;
                    void 0 === m && (m = {});
                    for (var l = Object.keys(a), p = 0; p < l.length; p++)m[l[p]] = a[l[p]];
                    this.options.fragmentUniforms = m
                }
                if (void 0 !== h) {
                    var v = this.options.fragmentChunk;
                    void 0 === v && (v = []);
                    for (var p = 0; p < h.length; p++)v.push(h[p]);
                    this.options.fragmentChunk = v
                }
            }
        }, e.prototype.setContext = function (t, i, s) {
            this.gl = t, this.isInitialized() || this.init(i, s)
        }, e.prototype.init = function (t, i) {
            this.initialized = !0;
            var s = this.options.reference;
            if (this.id = e.COUNT, e.COUNT++, s && s.isInitialized())this.shader = s.getShader(), this.options.vertexShader = s.getVertexShader(), this.options.fragmentShader = s.getFragmentShader(), this.parseShader(), this.sid = s.getShaderID(); else {
                this.sid = e.SHADERCOUNT, e.SHADERCOUNT++;
                var n = i.length ? !0 : !1, r = [];
                r.push("#define HALF_PI 1.5707963268"), r.push("#define PI 3.14159265359"), r.push("#define TWO_PI 6.28318530718"), r.push(""), t.hasPositions && r.push("attribute vec3 a_position;"), t.hasNormals && r.push("attribute vec3 a_normal;"), t.hasTexcoords && r.push("attribute vec2 a_texcoord;"), t.hasColors && r.push("attribute vec4 a_color;"), r.push(""), r.push("uniform mat4 u_mMatrix;"), r.push("uniform mat4 u_vMatrix;"), r.push("uniform mat4 u_pMatrix;"), t.hasNormals && r.push("uniform mat3 u_nMatrix;"), r.push(""), r.push("uniform vec3 u_translate;"), r.push("uniform vec3 u_resolution;"), r.push("uniform float u_aspect;"), r.push("uniform float u_pointSize;");
                var a = this.options.vertexUniforms;
                if (a) {
                    var h = Object.keys(a);
                    r.push("");
                    for (var u = 0; u < h.length; u++) {
                        var p = a[h[u]], c = o(p.value);
                        r.push("uniform " + c + " " + h[u] + ";"), "sampler2D" !== c && "bool" !== c && "int" !== c && r.push("varying " + c + " v_" + h[u] + ";")
                    }
                }
                r.push(""), t.hasTexcoords && r.push("varying vec2 v_texcoord;"), t.hasNormals && r.push("varying vec3 v_normal;"), n && r.push("varying vec4 v_position;"), r.push("varying vec3 v_resolution;"), r.push("varying float v_aspect;"), r.push("varying vec4 v_pos;"), t.hasColors && r.push("varying vec4 v_color;"), r.push("");
                var l = this.options.vertexDefines;
                if (l) {
                    for (var u = 0; u < l.length; u++)r.push(l[u]);
                    r.push("")
                }
                r.push("void main() {"), r.push("	vec4 pos = vec4(a_position, 1.0);"), r.push("	vec4 tran = vec4(u_translate/u_resolution, 1.0);"), r.push("	tran.x *= u_aspect;"), r.push("	mat4 model = u_mMatrix;"), r.push("	model[3] = model[3]/vec4(u_resolution, 1.0) + tran;"), r.push("	mat4 view = u_vMatrix;"), r.push("	vec4 vscale = vec4(u_resolution, 1.0);"), r.push("	view[3] /= vscale;"), r.push("	mat4 project = u_pMatrix;"), r.push("	float pointSize = u_pointSize;"), t.hasNormals && (n ? r.push("	v_normal = u_nMatrix * a_normal;") : r.push("	v_normal = a_normal;")), t.hasTexcoords && r.push("	v_texcoord = a_texcoord;"), t.hasColors && r.push("	v_color = a_color;");
                var f = this.options.vertexChunk;
                if (f && f.length > 0) {
                    r.push("");
                    for (var u = 0; u < f.length; u++)r.push("	" + f[u]);
                    r.push("")
                }
                if (r.push("	v_resolution = u_resolution;"), r.push("	v_aspect = u_aspect;"), r.push("	v_pos = pos;"), r.push("	pos = vec4(pos.xyz/u_resolution, 1.0);"), r.push("	pos.x *= u_aspect;"), r.push("	gl_Position =  project * ( view * model ) * pos;"), n && r.push("	v_position = ( view * model ) * pos;"), r.push("	gl_PointSize = pointSize;"), a) {
                    var h = Object.keys(a);
                    r.push("");
                    for (var u = 0; u < h.length; u++) {
                        var p = a[h[u]], c = o(p.value);
                        "sampler2D" !== c && "bool" !== c && "int" !== c && r.push("	v_" + h[u] + " = " + h[u] + ";")
                    }
                }
                r.push("}");
                var d = [];
                if (d.push("precision " + this.options.precision + " float;"), d.push(""), d.push("#define HALF_PI 1.5707963268"), d.push("#define PI 3.14159265359"), d.push("#define TWO_PI 6.28318530718"), d.push(""), d.push("uniform vec4 u_color;"), d.push("uniform float u_opacity;"), d.push(""), n) {
                    for (var u = 0; u < i.length; u++)d.push("uniform vec3 u_pointLightingLocation" + u + ";"), d.push("uniform vec4 u_ambientLightColor" + u + ";"), d.push("uniform vec4 u_pointLightingColor" + u + ";");
                    d.push("")
                }
                var m = this.options.fragmentUniforms;
                if (m) {
                    for (var h = Object.keys(m), u = 0; u < h.length; u++) {
                        var p = m[h[u]], c = o(p.value);
                        d.push("uniform " + c + " " + h[u] + ";")
                    }
                    d.push("")
                }
                if (t.hasTexcoords && d.push("varying vec2 v_texcoord;"), n && d.push("varying vec4 v_position;"), t.hasNormals && d.push("varying vec3 v_normal;"), t.hasColors && d.push("varying vec4 v_color;"), d.push("varying vec3 v_resolution;"), d.push("varying float v_aspect;"), d.push("varying vec4 v_pos;"), a) {
                    var h = Object.keys(a);
                    d.push("");
                    for (var u = 0; u < h.length; u++) {
                        var p = a[h[u]], c = o(p.value);
                        "sampler2D" !== c && "bool" !== c && "int" !== c && d.push("varying " + c + " v_" + h[u] + ";")
                    }
                }
                this.texture && (this.texture.setContext(this.gl), d.push(""), d.push("uniform sampler2D u_texture;"), d.push(""));
                var v = this.options.fragmentDefines;
                if (v) {
                    for (var u = 0; u < v.length; u++)d.push(v[u]);
                    d.push("")
                }
                if (d.push("void main() {"), t.hasColors ? d.push("	vec4 color = vec4(v_color.rgb, v_color.a*u_opacity);") : d.push("	vec4 color = vec4(u_color.rgb, u_color.a*u_opacity);"), t.hasTexcoords && this.texture && (d.push("	vec4 texColor = texture2D(u_texture, v_texcoord);"), d.push("	color.rgba *= texColor.rgba;")), n && t.hasNormals) {
                    d.push("	vec4 lightWeighting = vec4(0.0);"), d.push("	float directionalLightWeighting = 0.0;"), d.push("	vec3 lightDirection = vec3(0.0);"), d.push("");
                    for (var u = 0; u < i.length; u++)d.push("	lightDirection = u_pointLightingLocation" + u + "/v_resolution - v_position.xyz;"), d.push("	directionalLightWeighting = max(dot(v_normal, lightDirection), 0.0);"), d.push("	lightWeighting += u_ambientLightColor" + u + " + u_pointLightingColor" + u + " * directionalLightWeighting;"), d.push("");
                    var y = this.options.fragmentChunk;
                    if (y) {
                        d.push("");
                        for (var u = 0; u < y.length; u++)d.push("	" + y[u]);
                        d.push("")
                    }
                    d.push("	color.rgb *= lightWeighting.rgb;")
                } else {
                    var y = this.options.fragmentChunk;
                    if (y) {
                        d.push("");
                        for (var u = 0; u < y.length; u++)d.push("	" + y[u]);
                        d.push("")
                    }
                }
                d.push("	gl_FragColor = color;"), d.push("}"), this.options.vertexShader = r.join("\n"), this.options.fragmentShader = d.join("\n"), this.initShader(), this.parseShader(), this.options.debug && (console.log(this.options.vertexShader), console.log(this.options.fragmentShader))
            }
        }, e.prototype.isInitialized = function () {
            return this.initialized
        }, e.prototype.initShader = function () {
            (null !== this.options.vertexShader || null !== this.options.fragmentShader) && (this.shader = r.createShader(this.gl, this.options.vertexShader, this.options.fragmentShader))
        }, e.prototype.parseShader = function () {
            this.parseUniforms(this.options.vertexShader, this.options.vertexUniforms), this.parseUniforms(this.options.fragmentShader, this.options.fragmentUniforms), this.options.vertexUniforms && (this.uniformKeys = this.uniformKeys.concat(Object.keys(this.options.vertexUniforms))), this.options.fragmentUniforms && (this.uniformKeys = this.uniformKeys.concat(Object.keys(this.options.fragmentUniforms)))
        }, e.prototype.parseUniforms = function (t, i) {
            var s = this.gl;
            this.apply();
            for (var e = t.split("\n"), o = 0; o < e.length; o++) {
                var r = e[o];
                if (-1 !== r.indexOf("attribute ")) {
                    var a = r.split(" ");
                    if (void 0 !== a[2]) {
                        var h = a[2].replace(";", "");
                        this.attributes[h] = {location: s.getAttribLocation(this.shader, h), type: a[1], value: void 0}
                    }
                } else if (-1 !== r.indexOf("uniform ")) {
                    var p = r.split(" ");
                    if (void 0 !== p[2]) {
                        var c, l = p[2].replace(";", ""), f = -1 == p[1].indexOf("mat") ? !1 : !0, d = -1 == p[1].indexOf("sampler") ? !1 : !0, m = !1;
                        i && i[l] && (c = i[l], c.value instanceof u && (d = !1, m = !0)), this.uniforms[l] = {location: s.getUniformLocation(this.shader, l), type: p[1], reference: c, fn: n(this.gl, p[1]), isMatrix: f, isTexture: d, isFbo: m}
                    }
                }
            }
        }, e.prototype.getColor = function () {
            return this.options.color
        }, e.prototype.setColor = function (t) {
            this.options.color = t
        }, e.prototype.getShader = function () {
            return this.shader
        }, e.prototype.apply = function () {
            this.gl.useProgram(this.shader)
        }, e.prototype.hasTexture = function () {
            return void 0 === this.texture ? !1 : !0
        }, e.prototype.setTexture = function (t) {
            this.texture ? this.texture = t : (this.texture = t, this.initialized = !1)
        }, e.prototype.getTexture = function () {
            return this.texture
        }, e.prototype.getUniforms = function () {
            return this.uniforms
        }, e.prototype.getAttributes = function () {
            return this.attributes
        }, e.prototype.getAttribPointer = function (t) {
            return this.attributes[t].location
        }, e.prototype.getUniform = function (t) {
            return this.uniforms[t]
        }, e.prototype.getUniformLocation = function (t) {
            return this.uniforms[t].location
        }, e.prototype.getVertexShader = function () {
            return this.options.vertexShader
        }, e.prototype.getFragmentShader = function () {
            return this.options.fragmentShader
        }, e.prototype.applyCustomUniforms = function () {
            for (var t = this.gl, i = this.uniforms, s = this.uniformKeys, e = 0, o = s.length; o > e; e++) {
                var n = i[s[e]];
                if (n.isMatrix)t[n.fn](n.location, !1, n.reference.value); else if (n.isTexture) {
                    var r = n.reference.value;
                    r && (r.setContext(t), r.bind(), t.uniform1i(n.location, r.getID()))
                } else if (n.isFbo) {
                    var r = n.reference.value.getTexture();
                    r && (r.setContext(t), r.bind(), t.uniform1i(n.location, r.getID()))
                } else t[n.fn](n.location, n.reference.value)
            }
        }, e.prototype.setUniformValue = function (t, i) {
            this.uniforms[t].reference.value = i
        }, e.prototype.getID = function () {
            return this.id
        }, e.prototype.getShaderID = function () {
            return this.sid
        }, e.COUNT = 0, e.SHADERCOUNT = 0, s.exports = e
    }), define("famous-gl/Mesh", ["require", "exports", "module", "famous-math/Vector", "famous/Modifier", "famous/Matrix", "./Material"], function (t, i, s) {
        function e(t) {
            this.options = {geometry: void 0, material: void 0, position: void 0, modifier: void 0}, this.setOptions(t), this.geometry = this.options.geometry, this.material = this.options.material ? this.options.material : new r, this.modifier = this.options.modifier || new n, this.position = this.options.position || new o(0, 0, 0)
        }

        var o = t("famous-math/Vector"), n = t("famous/Modifier");
        t("famous/Matrix");
        var r = t("./Material");
        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i])
        }, e.prototype.getMaterial = function () {
            return this.material
        }, e.prototype.getGeometry = function () {
            return this.geometry
        }, e.prototype.setTransform = function (t, i, s) {
            this.modifier.setTransform(t, i, s)
        }, e.prototype.getTransform = function () {
            return this.modifier.getTransform()
        }, e.prototype.getFinalTransform = function () {
            return this.transform.getFinalTransform()
        }, e.prototype.setOpacity = function (t, i, s) {
            this.modifier.setOpacity(t, i, s)
        }, e.prototype.getOpacity = function () {
            return this.modifier.getOpacity()
        }, e.prototype.getPosition = function () {
            return this.position
        }, s.exports = e
    }), define("famous-gl/Renderer", ["require", "exports", "module", "famous/Engine", "famous/Matrix", "famous-gl/ShaderMaker", "famous-utils/Utils"], function (t, i, s) {
        function e(t) {
            this.options = {context: void 0}, this.setOptions(t), this.gl = this.options.context, this.callbacks = {}, this.pMatrix = n.identity, this.mMatrix = n.identity, this.vMatrix = n.identity, this.nMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1], this.lineWidth = 1, this.pointSize = 1, this.nearPlane = .0125, this.farPlane = 1e3, this.fov = 60, this.ortho = !1, this.clear = !0, this.bgColor = [0, 0, 0, 1], this.currentMaterial = void 0, this.depthTesting = !0, this.width = this.gl.viewportWidth, this.height = this.gl.viewportHeight, this.aspect = this.width / this.height, this.viewport = [0, 0, this.width, this.height], this.blendMode = e.ALPHA, this.setViewPort(0, 0, this.width, this.height), this.setPerspective(this.fov, this.nearPlane, this.farPlane), this.setSize([this.gl.viewportWidth, this.gl.viewportHeight]), this.setBlendMode(e.ALPHA), this.setLineWidth(this.lineWidth), this.setPointSize(this.pointSize), this.setDepthTesting(this.depthTesting), this.bindEvents()
        }

        var o = t("famous/Engine"), n = t("famous/Matrix");
        t("famous-gl/ShaderMaker");
        var r = t("famous-utils/Utils");
        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i])
        }, e.prototype.bindEvents = function () {
            this.callbacks.resize = this._resize.bind(this);
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++)o.on(t[i], this.callbacks[t[i]])
        }, e.prototype.unbindEvents = function () {
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++)o.unbind(t[i], this.callbacks[t[i]])
        }, e.prototype._resize = function () {
            this.setSize([this.gl.viewportWidth, this.gl.viewportHeight]), this.ortho ? this.setOrthographic() : this.setPerspective(this.fov)
        }, e.prototype.render = function (t) {
            var i = this.gl, s = t.scene.getMeshes(), e = t.scene.getLights(), o = t.framebuffer, n = o ? !0 : !1, r = t.viewport, a = t.projection, h = t.camera, u = t.view, p = t.depthTesting, c = t.blendMode, l = t.backgroundColor, f = t.clear;
            void 0 !== c && this.setBlendMode(c), void 0 !== p && this.setDepthTesting(p), this.currentMaterial = void 0, n && (o.setContext(i), o.bind()), r ? this.setViewPort(r[0], r[1], r[2], r[3]) : this.applyViewPort(), a && this.setProjectionMatrix(a), void 0 !== f && this.setClearBackground(f), l ? this.setBackgroundColor(l) : this.clear && this.clearBackground(), h ? this.setViewMatrix(h.getMatrix()) : u && this.setViewMatrix(u), this.depthTesting ? i.enable(i.DEPTH_TEST) : i.disable(i.DEPTH_TEST);
            for (var d = 0; d < s.length; d++)this._render(s[d], e);
            n && o.unbind()
        }, e.prototype._render = function (t, i) {
            var s = this.gl, e = t.getMaterial(), o = t.getGeometry();
            o.setContext(s), e.setContext(s, o, i), void 0 === this.currentMaterial ? (this.currentMaterial = e, this.currentMaterial.apply()) : this.currentMaterial.getShader() !== e.getShader() && (this.currentMaterial = e, this.currentMaterial.apply()), o.hasPositions && (s.enableVertexAttribArray(e.getAttribPointer("a_position")), s.bindBuffer(s.ARRAY_BUFFER, o.getPositionBuffer()), s.vertexAttribPointer(e.getAttribPointer("a_position"), o.getPositionBuffer().itemSize, s.FLOAT, !1, 0, 0)), o.hasNormals && (s.enableVertexAttribArray(e.getAttribPointer("a_normal")), s.bindBuffer(s.ARRAY_BUFFER, o.getNormalBuffer()), s.vertexAttribPointer(e.getAttribPointer("a_normal"), o.getNormalBuffer().itemSize, s.FLOAT, !1, 0, 0)), o.hasTexcoords && (s.enableVertexAttribArray(e.getAttribPointer("a_texcoord")), s.bindBuffer(s.ARRAY_BUFFER, o.getTextureCoordBuffer()), s.vertexAttribPointer(e.getAttribPointer("a_texcoord"), o.getTextureCoordBuffer().itemSize, s.FLOAT, !1, 0, 0)), o.hasColors && (s.enableVertexAttribArray(e.getAttribPointer("a_color")), s.bindBuffer(s.ARRAY_BUFFER, o.getColorBuffer()), s.vertexAttribPointer(e.getAttribPointer("a_color"), o.getColorBuffer().itemSize, s.FLOAT, !1, 0, 0));
            var n = t.getTransform();
            s.uniformMatrix4fv(e.getUniformLocation("u_pMatrix"), !1, this.pMatrix), s.uniformMatrix4fv(e.getUniformLocation("u_mMatrix"), !1, n), s.uniformMatrix4fv(e.getUniformLocation("u_vMatrix"), !1, this.vMatrix), s.uniform3fv(e.getUniformLocation("u_translate"), t.getPosition().toArray()), s.uniform3f(e.getUniformLocation("u_resolution"), this.width, this.height, this.height), s.uniform1f(e.getUniformLocation("u_aspect"), this.aspect), s.uniform1f(e.getUniformLocation("u_pointSize"), this.pointSize);
            var a = e.getTexture();
            if (a && (a.setContext(s), a.bind(), s.uniform1i(e.getUniformLocation("u_texture"), a.getID())), i.length) {
                r.normalFromFM(this.nMatrix, n), s.uniformMatrix3fv(e.getUniformLocation("u_nMatrix"), !1, this.nMatrix);
                for (var h = 0; h < i.length; h++) {
                    var u = i[h], p = u.getPosition(), c = u.getColor().toNormalizeColorArray(), l = u.getAmbientColor().toNormalizeColorArray();
                    s.uniform3fv(e.getUniformLocation("u_pointLightingLocation" + h), p.toArray()), s.uniform4fv(e.getUniformLocation("u_ambientLightColor" + h), l), s.uniform4fv(e.getUniformLocation("u_pointLightingColor" + h), c)
                }
            }
            var f = e.getColor().toNormalizeColorArray();
            s.uniform4fv(e.getUniformLocation("u_color"), f), s.uniform1f(e.getUniformLocation("u_opacity"), t.getOpacity()), e.applyCustomUniforms(), s.drawArrays(o.getDrawMode(), 0, o.getPositionBuffer().numItems), a && a.unbind()
        }, e.prototype.setLineWidth = function (t) {
            this.lineWidth = t, this.gl.lineWidth(this.lineWidth)
        }, e.prototype.setPointSize = function (t) {
            this.pointSize = t
        }, e.prototype.setViewMatrix = function (t) {
            this.vMatrix = t
        }, e.prototype.setProjectionMatrix = function (t) {
            this.pMatrix = t
        }, e.prototype.setViewPort = function (t, i, s, e) {
            this.viewport[0] = t, this.viewport[1] = i, this.viewport[2] = s, this.viewport[3] = e, this.applyViewPort()
        }, e.prototype.applyViewPort = function () {
            var t = this.viewport;
            this.gl.viewport(t[0], t[1], t[2], t[3])
        }, e.prototype.getBackgroundColor = function () {
            return this.bgColor
        }, e.prototype.setBackgroundColor = function (t, i, s, e) {
            t instanceof Array ? t.length > 2 ? this.bgColor = t : (this.bgColor[0] = t[0], this.bgColor[1] = t[0], this.bgColor[2] = t[0], this.bgColor[3] = t[1]) : void 0 === s ? (this.bgColor[0] = t, this.bgColor[1] = t, this.bgColor[2] = t, this.bgColor[3] = i) : void 0 === e ? (this.bgColor[0] = t, this.bgColor[1] = i, this.bgColor[2] = s, this.bgColor[3] = 1) : (this.bgColor[0] = t, this.bgColor[1] = i, this.bgColor[2] = s, this.bgColor[3] = e), this.clearBackground()
        }, e.prototype.setClearBackground = function (t) {
            this.clear = t
        }, e.prototype.clearBackground = function () {
            var t = this.gl, i = this.bgColor;
            t.clearColor(i[0], i[1], i[2], i[3]), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT)
        }, e.prototype.setSize = function (t) {
            this.width = t[0], this.height = t[1], this.aspect = this.width / this.height, this.setViewPort(0, 0, this.width, this.height)
        }, e.prototype.disableBlending = function () {
            this.blendMode = e.DISABLE;
            var t = this.gl;
            t.disable(t.BLEND)
        }, e.prototype.enableAlphaBlending = function () {
            this.blendMode = e.ALPHA;
            var t = this.gl;
            t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA)
        }, e.prototype.enableAdditiveBlending = function () {
            this.blendMode = e.ADDITIVE;
            var t = this.gl;
            t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE)
        }, e.prototype.enableSubtractBlending = function () {
            this.blendMode = e.SUBTRACT;
            var t = this.gl;
            t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE)
        }, e.prototype.enableMultiplyBlending = function () {
            this.blendMode = e.MULTIPLY;
            var t = this.gl;
            t.enable(t.BLEND), t.blendFunc(t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA)
        }, e.prototype.enableScreenBlending = function () {
            this.blendMode = e.SCREEN;
            var t = this.gl;
            t.enable(t.BLEND), t.blendFunc(t.ONE_MINUS_DST_COLOR, t.ONE)
        }, e.prototype.setBlendMode = function (t) {
            switch (t) {
                case e.DISABLE:
                    this.disableBlending();
                    break;
                case e.ALPHA:
                    this.enableAlphaBlending();
                    break;
                case e.ADDITIVE:
                    this.enableAdditiveBlending();
                    break;
                case e.SUBTRACT:
                    this.enableSubtractBlending();
                    break;
                case e.MULTIPLY:
                    this.enableMultiplyBlending();
                    break;
                case e.SCREEN:
                    this.enableScreenBlending()
            }
        }, e.prototype.setDepthTesting = function (t) {
            this.depthTesting = t
        }, e.prototype.setSmoothing = function (t) {
            var i = this.gl;
            t === !0 ? (i.enable(i.POINT_SMOOTH), i.hint(i.POINT_SMOOTH_HINT, i.NICEST), i.hint(i.LINE_SMOOTH_HINT, i.NICEST)) : (i.disable(i.POINT_SMOOTH), i.hint(i.POINT_SMOOTH_HINT, i.FASTEST), i.hint(i.LINE_SMOOTH_HINT, i.FASTEST))
        }, e.prototype.setPerspective = function (t, i, s) {
            var e = this.gl;
            this.fov = t ? t : this.fov, this.nearPlane = i ? i : this.nearPlane, this.farPlane = s ? s : this.farPlane, this.setProjectionMatrix(r.perspective(r.deg2rad(this.fov), e.viewportWidth / e.viewportHeight, this.nearPlane, this.farPlane)), this.ortho = !1
        }, e.prototype.setOrthographic = function (t, i, s, e, o, n) {
            var a = "undefined" != typeof t ? t : -.25 * this.aspect, h = "undefined" != typeof i ? i : .25 * this.aspect, u = "undefined" != typeof s ? s : -.25, p = "undefined" != typeof e ? e : .25, c = "undefined" != typeof o ? o : -1, l = "undefined" != typeof n ? n : 1;
            this.setProjectionMatrix(r.ortho(a, h, u, p, c, l)), this.ortho = !0
        }, e.DISABLE = 0, e.ALPHA = 1, e.ADDITIVE = 2, e.SUBTRACT = 3, e.MULTIPLY = 4, e.SCREEN = 5, s.exports = e
    }), define("famous-gl/Scene", ["require", "exports", "module", "./Light", "./Mesh"], function (t, i, s) {
        function e(t) {
            this.options = {}, this.setOptions(t), this.meshes = [], this.lights = []
        }

        var o = t("./Light"), n = t("./Mesh");
        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i])
        }, e.prototype.add = function (t) {
            t instanceof o && -1 === this.lights.indexOf(t) && this.lights.push(t), t instanceof n && -1 === this.meshes.indexOf(t) && this.meshes.push(t)
        }, e.prototype.getMeshes = function () {
            return this.meshes
        }, e.prototype.getLights = function () {
            return this.lights
        }, s.exports = e
    }), define("famous-gl/Shader", ["require", "exports", "module"], function (t, i, s) {
        function e(t) {
            this.options = {context: void 0}, this.setOptions(t), this.gl = this.options.context
        }

        e.prototype.setOptions = function (t) {
            for (var i in t)t.hasOwnProperty(i) && (this.options[i] = t[i])
        }, s.exports = e
    }), define("famous-physics/constraints/Collision", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/vector"], function (t, i, s) {
        function e(t) {
            this.opts = {restitution: .5}, t && this.setOpts(t), this.n = new n, this.vRel = new n, this.I = new n, this.disp = new n
        }

        var o = t("famous-physics/constraints/Constraint"), n = t("../math/vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.applyConstraint = function (t, i) {
            for (var s = i.p, e = i.r, o = i.v, n = this.n, r = this.I, a = this.vRel, h = this.disp, u = this.opts.restitution, p = 0; p < t.length; p++) {
                var c = t[p];
                if (i != c) {
                    var l = c.p, f = c.r, d = i.mInv;
                    h.set(s.sub(l));
                    var m = h.norm(), v = e + f - m;
                    if (v > 0) {
                        var y = c.v, g = c.mInv;
                        n.set(h.normalize()), a.set(o.sub(y)), r.set(n.mult((1 + u) * a.dot(n) / (d + g))), o.sub(r.mult(d), o), s.add(n.mult(v / 2), s), y.add(r.mult(g), y), l.add(n.mult(-v / 2), l)
                    }
                }
            }
        }, s.exports = e
    }), define("famous-physics/constraints/CollisionJacobian", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/vector"], function (t, i, s) {
        function e(t) {
            this.opts = {k: .5, restitution: .5}, t && this.setOpts(t), this.n = new n, this.pDiff = new n, this.vDiff = new n, this.impulse1 = new n, this.impulse2 = new n, this.slop = 0
        }

        var o = t("famous-physics/constraints/Constraint"), n = t("famous-physics/math/vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.applyConstraint = function (t, i, s) {
            for (var e = this.opts.k, o = this.n, n = this.pDiff, r = this.vDiff, a = this.impulse1, h = this.impulse2, u = i.v, p = i.p, c = i.mInv, l = i.r, f = i.restitution, d = 0; d < t.length; d++) {
                var m = t[d];
                if (m != i) {
                    var v = m.v, y = m.p, g = m.mInv, x = m.r, S = m.restitution, b = void 0 !== this.opts.restitution ? this.opts.restitution : Math.sqrt(f * S);
                    n.set(y.sub(p)), r.set(v.sub(u)), n.normalize(1, o);
                    var w = n.norm(), M = w - (l + x), T = 1 / (c + g), z = 0;
                    if (0 > M) {
                        var C = M <= this.slop ? ((1 + b) * o.dot(r) + e / s * (M - this.slop)) / (z + s / T) : (1 + b) * o.dot(r) / (z + s / T);
                        o.mult(s * C).put(a), a.mult(-1).put(h), i.applyImpulse(a), m.applyImpulse(h), p.add(o.mult(M / 2), p), y.add(o.mult(-M / 2), y)
                    }
                }
            }
        }, s.exports = e
    }), define("famous-physics/constraints/Curve", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function (t, i, s) {
        function e(t) {
            this.opts = {f: function (t, i) {
                return 100 * Math.sin(t / 100) - i
            }, df: void 0, g: function (t, i, s) {
                return s
            }, dg: void 0, dampingRatio: 0, period: 0}, t && this.setOpts(t), this.J = new n, this.impulse = new n
        }

        var o = t("famous-physics/constraints/Constraint"), n = t("../math/Vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.applyConstraint = function (t, i, s) {
            for (var e = this.impulse, o = this.J, n = this.opts.f, r = this.opts.f, a = this.opts.df, h = this.opts.dg, u = 0, p = 0; p < t.length; p++) {
                var c = t[p], l = c.v, f = c.p, d = c.m;
                if (0 == this.opts.period)var m = 0, v = 1; else var y = 4 * d * Math.PI * this.opts.dampingRatio / this.opts.period, g = 4 * d * Math.PI * Math.PI / (this.opts.period * this.opts.period), m = 1 / (y + s * g), v = s * g / (y + s * g);
                if (void 0 === a) {
                    var x = 1e-7, S = n(f.x, f.y, f.z), b = (n(f.x + x, f.y, f.z) - S) / x, w = (n(f.x, f.y + x, f.z) - S) / x, M = (n(f.x, f.y, f.z + x) - S) / x, T = r(f.x, f.y, f.z), z = (r(f.x + x, f.y, f.z) - T) / x, C = (r(f.x, f.y + x, f.z) - T) / x, P = (r(f.x, f.y, f.z + x) - T) / x;
                    o.setXYZ(b + z, w + C, M + P)
                } else {
                    var _ = a(f.x, f.y, f.z), O = h(f.x, f.y, f.z);
                    o.setXYZ(_[0] + O[0], _[1] + O[1], _[2] + O[2])
                }
                var E = v / s * (n(f.x, f.y, f.z) + r(f.x, f.y, f.z)), I = -(o.dot(l) + E) / (m + s * o.normSquared() / d);
                e.set(o.mult(s * I)), c.applyImpulse(e), u += Math.abs(I)
            }
            return u
        }, e.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({value: this.opts[i]}), t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, s.exports = e
    }), define("famous-physics/constraints/Distance", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function (t, i, s) {
        function e(t) {
            this.opts = {length: 0, anchor: void 0, dampingRatio: 0, period: 0}, t && this.setOpts(t), this.impulse = new n, this.n = new n, this.diffP = new n, this.diffV = new n
        }

        var o = t("famous-physics/constraints/Constraint"), n = t("../math/Vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof n && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period)
        }, e.prototype.applyConstraint = function (t, i, s) {
            var e = this.n, o = this.diffP, n = this.diffV, r = this.impulse;
            if (i)var a = i.p, h = i.mInv, u = i.v; else var a = this.opts.anchor, h = 0;
            for (var p = this.opts.length, c = 0, l = 0; l < t.length; l++) {
                var f = t[l], d = f.v, m = f.p, v = f.mInv;
                o.set(m.sub(a)), e.set(o.normalize());
                var y = o.norm() - p;
                i ? n.set(d.sub(u)) : n.set(d);
                var g = 1 / (v + h);
                if (0 == this.opts.period)var x = 0, S = 1; else var b = 4 * g * Math.PI * this.opts.dampingRatio / this.opts.period, w = 4 * g * Math.PI * Math.PI / (this.opts.period * this.opts.period), x = 1 / (b + s * w), S = s * w / (b + s * w);
                var M = S / s * y, T = -(e.dot(n) + M) / (x + s / g);
                r.set(e.mult(s * T)), f.applyImpulse(r), i && i.applyImpulse(r.mult(-1)), c += Math.abs(T)
            }
            return c
        }, e.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({value: this.opts[i]}), t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, s.exports = e
    }), define("famous-physics/constraints/Distance1D", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function (t, i, s) {
        function e(t) {
            this.opts = {length: 0, anchor: void 0, dampingRatio: 0, period: 0}, t && this.setOpts(t), this.impulse = new n
        }

        var o = t("famous-physics/constraints/Constraint"), n = t("../math/Vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.applyConstraint = function (t, i, s) {
            var e, o, n = this.impulse;
            if (i)var r = i.p.x, a = i.mInv, h = i.v.x; else var r = this.opts.anchor, a = 0;
            for (var u = this.opts.length, p = this.opts.period, c = this.opts.dampingRatio, l = 0, f = 0; f < t.length; f++) {
                var d = t[f], m = d.v.x, v = d.p.x, y = d.mInv;
                e = v - r;
                var g = e - u;
                o = i ? m - h : m;
                var x = 1 / (y + a);
                if (0 == p)var S = 0, b = 1; else var w = 4 * x * Math.PI * c / p, M = 4 * x * Math.PI * Math.PI / (p * p), S = 1 / (w + s * M), b = s * M / (w + s * M);
                var T = b / s * g, z = -(o + T) / (S + s / x);
                n.setXYZ(s * z, 0, 0), d.applyImpulse(n), i && i.applyImpulse(n.mult(-1)), l += Math.abs(z)
            }
            return l
        }, e.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({value: this.opts[i]}), t.init instanceof Function && t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, s.exports = e
    }), define("famous-physics/constraints/Rod", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/vector"], function (t, i, s) {
        function e(t) {
            this.opts = {length: 0, anchor: void 0, stiffness: 1}, t && this.setOpts(t), this.disp = new n, this.push = new n
        }

        var o = t("famous-physics/constraints/Constraint"), n = t("../math/vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor)), delete t.anchor);
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.applyConstraint = function (t, i, s) {
            var e = this.opts, o = this.disp, n = this.push, r = e.length, a = e.stiffness, h = e.anchor || i.p, u = t[0], p = u.p;
            o.set(p.sub(h));
            var c = o.norm(), l = (r - c) / c;
            Math.abs(l) > 0 && (o.mult(.5 * l * a, n), u.immunity || (p.add(n, p), u.v.add(n.div(s), u.v)), i && !i.immunity && (i.p.sub(n, i.p), i.v.sub(n.div(s), i.v)))
        }, s.exports = e
    }), define("famous-physics/constraints/Rope", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/Vector"], function (t, i, s) {
        function e(t) {
            this.opts = {length: 0, anchor: void 0, dampingRatio: 0, period: 0}, t && this.setOpts(t), this.impulse = new n, this.n = new n, this.diffP = new n, this.diffV = new n
        }

        var o = t("famous-physics/constraints/Constraint"), n = t("famous-physics/math/Vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor instanceof n && (this.opts.anchor = t.anchor), t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period)
        }, e.prototype.applyConstraint = function (t, i, s) {
            var e = this.n, o = this.diffP, n = this.diffV, r = this.impulse;
            if (i)var a = i.p, h = i.mInv, u = i.v; else var a = this.opts.anchor, h = 0;
            for (var p = this.opts.length, c = 0, l = 0; l < t.length; l++) {
                var f = t[l], d = f.v, m = f.p, v = f.mInv;
                o.set(m.sub(a));
                var y = o.norm() - p;
                if (0 > y)return;
                e.set(o.normalize()), i ? n.set(d.sub(u)) : n.set(d);
                var g = 1 / (v + h);
                if (0 == this.opts.period)var x = 0, S = 1; else var b = 4 * g * Math.PI * this.opts.dampingRatio / this.opts.period, w = 4 * g * Math.PI * Math.PI / (this.opts.period * this.opts.period), x = 1 / (b + s * w), S = s * w / (b + s * w);
                var M = S / s * y, T = -(e.dot(n) + M) / (x + s / g);
                r.set(e.mult(s * T)), f.applyImpulse(r), i && i.applyImpulse(r.mult(-1)), c += Math.abs(T)
            }
            return c
        }, e.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({value: this.opts[i]}), t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, s.exports = e
    }), define("famous-physics/constraints/Surface", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function (t, i, s) {
        function e(t) {
            this.opts = {f: void 0, df: void 0, dampingRatio: 0, period: 0}, t && this.setOpts(t), this.J = new n, this.impulse = new n, this.eps = 1e-7
        }

        var o = t("famous-physics/constraints/Constraint"), n = t("../math/Vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.applyConstraint = function (t, i, s) {
            for (var e = this.impulse, o = this.J, n = this.opts.f, r = this.opts.df, a = 0, h = 0; h < t.length; h++) {
                var u = t[h], p = u.v, c = u.p, l = u.m;
                if (0 == this.opts.period)var f = 0, d = 1; else var m = 4 * l * Math.PI * this.opts.dampingRatio / this.opts.period, v = 4 * l * Math.PI * Math.PI / (this.opts.period * this.opts.period), f = 1 / (m + s * v), d = s * v / (m + s * v);
                if (void 0 === r) {
                    var y = this.eps, g = n(c.x, c.y, c.z), x = (n(c.x + y, c.y, c.z) - g) / y, S = (n(c.x, c.y + y, c.z) - g) / y, b = (n(c.x, c.y, c.z + y) - g) / y;
                    o.setXYZ(x, S, b)
                } else o.setXYZ.apply(o, r(c.x, c.y, c.z));
                var w = d / s * n(c.x, c.y, c.z), M = -(o.dot(p) + w) / (f + s * o.normSquared() / l);
                e.set(o.mult(s * M)), u.applyImpulse(e), a += Math.abs(M)
            }
            return a
        }, e.prototype.setupSlider = function (t, i) {
            i = i || t.opts.name, t.setOpts({value: this.opts[i]}), t.init(), t.on("change", function (t) {
                this.opts[i] = t.value
            }.bind(this))
        }, s.exports = e
    }), define("famous-physics/constraints/Walls", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/Vector", "famous-physics/constraints/Wall"], function (t, i, s) {
        function e(t) {
            this.opts = {sides: [e.SIDES.LEFT, e.SIDES.RIGHT, e.SIDES.TOP, e.SIDES.BOTTOM], size: [window.innerWidth, window.innerHeight, 0], origin: [.5, .5, .5], k: 0, restitution: .5, onContact: e.ON_CONTACT.REFLECT}, this.setSize(this.opts.size, this.opts.origin), this.setOptsForEach({restitution: this.opts.restitution, k: this.opts.k}), t && this.setOpts(t)
        }

        var o = t("famous-physics/constraints/Constraint"), n = t("famous-physics/math/Vector"), r = t("famous-physics/constraints/Wall");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.SIDES = {LEFT: new r({n: new n(1, 0, 0)}), RIGHT: new r({n: new n(-1, 0, 0)}), TOP: new r({n: new n(0, 1, 0)}), BOTTOM: new r({n: new n(0, -1, 0)}), FRONT: new r({n: new n(0, 0, 1)}), BACK: new r({n: new n(0, 0, -1)})}, e.ON_CONTACT = r.ON_CONTACT, e.prototype.setOpts = function (t) {
            var i = !1;
            void 0 !== t.restitution && this.setOptsForEach({restitution: t.restitution}), void 0 !== t.k && this.setOptsForEach({k: t.k}), void 0 !== t.size && (this.opts.size = t.size, i = !0), void 0 !== t.sides && (this.opts.sides = t.sides), void 0 !== t.onContact && (this.opts.onContact = t.onContact, this.setOnContact(t.onContact)), void 0 !== t.origin && (this.opts.origin = t.origin, i = !0), i && this.setSize(this.opts.size, this.opts.origin)
        }, e.prototype.setSize = function (t, i) {
            i = i || this.opts.origin, i.length < 3 && (i[2] = .5), e.SIDES.LEFT.setOpts({d: t[0] * i[0]}), e.SIDES.TOP.setOpts({d: t[1] * i[1]}), e.SIDES.FRONT.setOpts({d: t[2] * i[2]}), e.SIDES.RIGHT.setOpts({d: t[0] * (1 - i[0])}), e.SIDES.BOTTOM.setOpts({d: t[1] * (1 - i[1])}), e.SIDES.BACK.setOpts({d: t[2] * (1 - i[2])}), this.opts.size = t, this.opts.origin = i
        }, e.prototype.setOptsForEach = function (t) {
            this.forEachWall(function (i) {
                i.setOpts(t)
            });
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.setOnContact = function (t) {
            switch (this.forEachWall(function (i) {
                i.setOpts({onContact: t})
            }), t) {
                case e.ON_CONTACT.REFLECT:
                    break;
                case e.ON_CONTACT.WRAP:
                    this.forEachWall(function (i) {
                        i.setOpts({onContact: t}), i.on("wrap", function (t) {
                            var s = t.particle, o = i.opts.n, n = i.opts.d;
                            switch (i) {
                                case e.SIDES.RIGHT:
                                    var r = e.SIDES.LEFT.opts.d;
                                    break;
                                case e.SIDES.LEFT:
                                    var r = e.SIDES.TOP.opts.d;
                                    break;
                                case e.SIDES.TOP:
                                    var r = e.SIDES.BOTTOM.opts.d;
                                    break;
                                case e.SIDES.BOTTOM:
                                    var r = e.SIDES.TOP.opts.d
                            }
                            s.p.add(o.mult(n + r), s.p)
                        })
                    });
                    break;
                case e.ON_CONTACT.ABSORB:
            }
        }, e.prototype.applyConstraint = function (t, i, s) {
            this.forEachWall(function (e) {
                e.applyConstraint(t, i, s)
            })
        }, e.prototype.forEachWall = function (t) {
            for (var i = 0; i < this.opts.sides.length; i++)t(this.opts.sides[i])
        }, e.prototype.rotateZ = function (t) {
            this.forEachWall(function (i) {
                var s = i.opts.n;
                s.rotateZ(t, s)
            })
        }, s.exports = e
    }), define("famous-physics/math/matrix", ["require", "exports", "module"], function (require, exports, module) {
        function Matrix(t, i, s, e) {
            this.nRows = t, this.nCols = i, this.values = s || [
                []
            ], e && this.loop(e)
        }

        Matrix.prototype = {loop: function (t) {
            for (var i = this.values, s = 0; s < this.nRows; s++) {
                i[s] = [];
                for (var e = 0; e < this.nCols; e++)i[s][e] = t(s, e)
            }
            return this
        }, set: function (t) {
            return this.values = t, this
        }, create: function (t) {
            return this.loop(t)
        }, identity: function () {
            return this.loop(function (t, i) {
                return t == i ? 1 : 0
            })
        }, print: function () {
            for (var row = 0; row < this.nRows; row++) {
                for (var str = "console.log(", col = 0; col < this.nCols; col++)str += "this.values[" + row + "][" + col + "].toFixed(1)", col < this.nCols - 1 && (str += ",");
                str += ")", eval(str)
            }
        }, rightMult: function (t, i) {
            t.nRows != this.nCols && console.warn("cant multiply");
            for (var s = this.values, e = t.values, o = this.nRows, n = t.nCols, r = [], a = 0; o > a; a++) {
                r[a] = [];
                for (var h = 0; n > h; h++) {
                    for (var u = 0, p = 0; p < this.nCols; p++)u += s[a][p] * e[p][h];
                    r[a][h] = u
                }
            }
            return i ? i.set(r) : new Matrix(o, n).set(r)
        }, vMult: function (t) {
            for (var i = t.length, s = [], e = 0; e < this.nRows; e++) {
                for (var o = 0, n = 0; i > n; n++)o += this.values[e][n] * t[n];
                s[e] = o
            }
            return s
        }, diag: function (t) {
            var i = function (i, s) {
                return i == s ? t[i] : 0
            };
            return this.loop(i)
        }, transpose: function (t) {
            var i = function (t, i) {
                return this.values[i][t]
            }.bind(this);
            return t ? t.loop(i) : new Matrix(this.nCols, this.nRows, [
                []
            ], i)
        }}, module.exports = Matrix
    }), define("famous-physics/math/GaussSeidel", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i) {
            this.numIterations = t || 10, this.tolerance = i || 1e-7, this.prevX = [], this.x = []
        }

        function o() {
            for (var t = 0, i = this.x.length, s = 0; i > s; s++)t += Math.pow(this.prevX[s] - this.x[s], 2) / (this.x[s] * this.x[s]);
            return Math.sqrt(t)
        }

        e.prototype.solve = function (t, i) {
            for (var s, e = this.numIterations, n = i.length, r = this.x, a = this.prevX, h = 0; n > h; h++)this.x[h] = 0;
            for (var u = 0, p = 1 / 0; e > u && p > this.tolerance;) {
                for (var h = 0; n > h; h++) {
                    a[h] = r[h], s = 0;
                    for (var c = 0; n > c; c++)c != h && (s += t[h][c] * r[c]);
                    r[h] = (i[h] - s) / t[h][h]
                }
                p = o(), u++
            }
            return r
        }, s.exports = e
    }), define("famous-physics/constraints/joint", ["require", "exports", "module", "../math/matrix", "../math/GaussSeidel", "../math/vector"], function (t, i, s) {
        function e(t) {
            this.opts = {length: 0}, t && this.setOpts(t);
            var i = 10, s = 1e-5;
            this.solver = new n(i, s)
        }

        var o = t("../math/matrix"), n = t("../math/GaussSeidel"), r = t("../math/vector");
        e.prototype.getPosition = function (t, i, s) {
            var e = 2, n = 1, a = [], h = [], u = [], p = [], c = [], l = t;
            a[0] = l.getVel(), h[0] = l.p, u[0] = l.mInv, p[0] = l.f, c[0] = l.m, a[1] = i.v, h[1] = i.p, u[1] = i.mInv, p[1] = i.f, c[1] = i.m;
            for (var f = [], d = 0; n > d; d++) {
                f[d] = [];
                for (var m = 0; e > m; m++) {
                    var v;
                    m == d ? v = h[d].sub(h[d + 1]) : m == d + 1 && (v = h[d + 1].sub(h[d])), f[d][3 * m + 0] = v.x, f[d][3 * m + 1] = v.y, f[d][3 * m + 2] = v.z
                }
            }
            var y = new o(n, 3 * e);
            y.set(f);
            for (var g = [], d = 0; n > d; d++) {
                g[d] = [];
                for (var m = 0; e > m; m++) {
                    var v;
                    m == d ? v = a[d].sub(a[d + 1]) : m == d + 1 && (v = a[d + 1].sub(a[d])), g[d][3 * m + 0] = v.x, g[d][3 * m + 1] = v.y, g[d][3 * m + 2] = v.z
                }
            }
            for (var x = [], S = [], b = 0; e > b; b++)x[3 * b + 0] = u[b], x[3 * b + 1] = u[b], x[3 * b + 2] = u[b], S[3 * b + 0] = a[b].x, S[3 * b + 1] = a[b].y, S[3 * b + 2] = a[b].z;
            var w = new o(3 * e, 3 * e).diag(x), M = new o(n, n);
            y.rightMult(w).rightMult(y.transpose(), M);
            for (var T = y.vMult(S), z = 1, C = [], b = 0; n > b; b++) {
                var P = this.length, _ = h[b + 1].sub(h[b]).normSquared();
                C[b] = .5 * (_ - P * P)
            }
            for (var O = [], E = 0; n > E; E++)O[E] = -T[E] - z / s * C[E];
            for (var I = this.solver.solve(M.values, O), k = y.transpose().vMult(I), R = [], b = 0; e > b; b++)R[b] = new r(k[3 * b + 0], k[3 * b + 1], k[3 * b + 2]);
            for (var b = 0; e > b; b++) {
                var S = a[b], F = c[b], A = R[b];
                (0 != b || 0 != l.id) && (1 == b && 0 == l.id ? S.add(A.sub(R[0]).div(F), S) : S.add(A.div(F), S))
            }
        }, e.prototype.getError = function () {
        }, s.exports = e
    }), define("famous-physics/forces/Repulsion", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function (t, i, s) {
        function e(t) {
            this.opts = {strength: 1, anchor: void 0, radii: {min: 0, max: 1 / 0}, cutoff: 0, cap: 1 / 0, decayFunction: e.DECAY_FUNCTIONS.GRAVITY}, t && this.setOpts(t), this.setOpts(t), this.disp = new n, o.call(this)
        }

        var o = t("famous-physics/forces/Force"), n = t("famous-physics/math/Vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.DECAY_FUNCTIONS = {LINEAR: function (t, i) {
            return Math.max(1 - 1 / i * t, 0)
        }, MORSE: function (t, i) {
            var s = 0 == i ? 100 : i, e = t + s * (1 - Math.log(2));
            return Math.max(1 - Math.pow(1 - Math.exp(e / s - 1), 2), 0)
        }, INVERSE: function (t, i) {
            return 1 / (1 - i + t)
        }, GRAVITY: function (t, i) {
            return 1 / (1 - i + t * t)
        }}, e.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor)), delete t.anchor);
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.applyForce = function (t, i) {
            var s = this.opts, e = this.force, o = this.disp, n = s.strength, r = s.anchor || i.p, a = s.cap, h = s.cutoff, u = s.radii.max, p = s.radii.min, c = s.decayFunction;
            if (0 != n)for (var l in t) {
                var f = t[l];
                if (f != i) {
                    var d = f.m, m = f.p;
                    o.set(m.sub(r));
                    var v = o.norm();
                    u > v && v > p && (o.normalize(n * d * c(v, h)).cap(a).put(e), f.applyForce(e))
                }
            }
        }, s.exports = e
    }), define("famous-physics/forces/TorqueSpring", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function (t, i, s) {
        function e(t) {
            this.opts = {period: 0, dampingRatio: 0, length: 0, lMin: 0, lMax: 1 / 0, anchor: void 0, forceFunction: e.FORCE_FUNCTIONS.HOOK, callback: void 0, callbackTolerance: 1e-7}, t && this.setOpts(t), this.torque = new h, this.init(), this._canFireCallback = void 0, a.call(this)
        }

        function o(t) {
            this.forceFunction = t
        }

        function n(t) {
            t.stiffness = Math.pow(2 * Math.PI / t.period, 2)
        }

        function r(t) {
            t.damping = 4 * Math.PI * t.dampingRatio / t.period
        }

        var a = t("famous-physics/forces/Force"), h = t("famous-physics/math/Vector");
        e.prototype = Object.create(a.prototype), e.prototype.constructor = a, e.FORCE_FUNCTIONS = {FENE: function (t, i) {
            var s = .99 * i, e = Math.max(Math.min(t, s), -s);
            return e / (1 - e * e / (i * i))
        }, HOOK: function (t) {
            return t
        }}, e.prototype.init = function () {
            var t = this.opts;
            o.call(this, t.forceFunction), n.call(this, t), r.call(this, t)
        }, e.prototype.applyForce = function (t) {
            for (var i = this.torque, s = this.opts, e = s.stiffness, o = s.damping, n = s.length, r = s.anchor, a = 0; a < t.length; a++) {
                var h = t[a], u = r.sub(h.q), p = u.norm() - n;
                if (0 == p)return;
                var c = h.m;
                e *= c, o *= c, i.set(u.normalize(e * this.forceFunction(p, this.opts.lMax))), o && i.add(h.w.mult(-o), i), h.applyTorque(i)
            }
        }, e.prototype.setOpts = function (t) {
            void 0 !== t.anchor && (t.anchor.p instanceof h && (this.opts.anchor = t.anchor.p), t.anchor instanceof h && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new h(t.anchor))), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.lMin && (this.opts.lMin = t.lMin), void 0 !== t.lMax && (this.opts.lMax = t.lMax), void 0 !== t.forceFunction && (this.opts.forceFunction = t.forceFunction), void 0 !== t.callback && (this.opts.callback = t.callback), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance), this.init()
        }, s.exports = e
    }), define("famous-physics/forces/VectorField", ["require", "exports", "module", "famous-physics/forces/Force", "../math/vector"], function (t, i, s) {
        function e(t) {
            this.opts = {strength: 1, field: e.FIELDS.CONSTANT}, t && this.setOpts(t), this.setFieldOptions(this.opts.field), this.timeDependent = 3 == this.opts.field.length, this.tOrig = void 0, this.register = new n(0, 0, 0), o.call(this)
        }

        var o = t("famous-physics/forces/Force"), n = t("../math/vector");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = o, e.FIELDS = {CONSTANT: function (t, i) {
            return t.set(i.direction)
        }, LINEAR: function (t, i) {
            return t.mult(i.k, t)
        }, RADIAL_GRAVITY: function (t) {
            return t.mult(-1, t)
        }, SPHERE_ATTRACTOR: function (t, i) {
            return t.mult((i.radius - t.norm()) / t.norm(), t)
        }, POINT_ATTRACTOR: function (t, i) {
            return t.set(i.p.sub(t))
        }}, e.prototype.setOpts = function (t) {
            for (var i in t)this.opts[i] = t[i]
        }, e.prototype.evaluate = function (t, i) {
            return this.register.set(t), this.opts.field(this.register, this.opts, i)
        }, e.prototype.applyForce = function (t) {
            var i, s = this.force;
            this.timeDependent ? (this.tOrig && (this.tOrig = Date.now()), i = .001 * (Date.now() - this.tOrig)) : i = void 0;
            for (var e = 0; e < t.length; e++) {
                var o = t[e];
                s.set(this.evaluate(o.p, i).mult(o.m * this.opts.strength)), o.applyForce(s)
            }
        }, e.prototype.setFieldOptions = function (t) {
            var i = e.FIELDS;
            switch (t) {
                case i.CONSTANT:
                    this.opts.direction || (this.opts.direction = new n(0, 1, 0));
                    break;
                case i.POINT_ATTRACTOR:
                    this.opts.p || (this.opts.p = new n(0, 0, 0));
                    break;
                case i.SPHERE_ATTRACTOR:
                    this.opts.radius || (this.opts.radius = 1);
                    break;
                case i.LINEAR:
                    this.opts.k || (this.opts.k = 1)
            }
        }, s.exports = e
    }), define("famous-physics/integrator/verlet", ["require", "exports", "module", "../math/vector"], function (t, i, s) {
        function e(t) {
            t = t || {}, this.vCap = t.vCap || 1 / 0, this.aCap = t.aCap || 1 / 0, this.drag = t.drag || 1, this.diff = new o, this.pOldCopy = new o, this.dragVector = new o
        }

        var o = t("../math/vector");
        e.prototype.integrate = function (t, i, s) {
            var e = t.pOld, o = t.p, n = t.a;
            if (this.diff.set(o.sub(e)), s) {
                var r = t.v;
                t.hasImmunity("velocity") || r.add(n.mult(.5 * i), r), t.hasImmunity("position") || (e.set(o), o.add(r.mult(i), o))
            } else this.pOldCopy.set(e), t.hasImmunity("position") || (this.dragVector.set(this.diff.mult(this.drag)), e.set(o), o.add(n.mult(i * i), o), o.add(this.dragVector, o))
        }, e.prototype.integrateVelocity = function (t, i, s) {
            var e = t.p, o = t.a;
            if (s) {
                var n = t.v;
                n.add(o.mult(.5 * i), n), e.add(n.mult(i), e)
            } else e.add(o.mult(i * i), e)
        }, e.prototype.integratePosition = function (t) {
            var i = t.p, s = t.pOld, e = this.pOldCopy;
            e.set(s), s.set(i), i.add(i.sub(e).mult(this.drag), i)
        }, s.exports = e
    }), define("famous-physics/math/Random", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i) {
            return t + Math.random() * (i - t)
        }

        function o(t, i) {
            return Math.floor(t + Math.random() * (i - t + 1))
        }

        s.exports = {integer: function (t, i, s) {
            if (t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 1, void 0 !== s) {
                for (var e = [], n = 0; s > n; n++)e.push(o(t, i));
                return e
            }
            return o(t, i)
        }, range: function (t, i, s) {
            if (t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 1, void 0 !== s) {
                for (var o = [], n = 0; s > n; n++)o.push(e(t, i));
                return o
            }
            return e(t, i)
        }, sign: function (t) {
            return t = void 0 !== t ? t : .5, Math.random() < t ? 1 : -1
        }, bool: function (t) {
            return t = void 0 !== t ? t : .5, Math.random() < t
        }}
    }), define("famous-physics/math/vectorArray", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s) {
            return this.v = t instanceof Array ? t.splice(0) : t instanceof e ? t.v : [t || 0, i || 0, s || 0], this
        }

        e.prototype.add = function (t, i) {
            i = i || this.register;
            var s = this.v, e = t.v;
            return i.setXYZ(s[0] + e[0], s[1] + e[1], s[2] + e[2])
        }, e.prototype.sub = function (t, i) {
            i = i || this.register;
            var s = this.v, e = t.v;
            return i.setXYZ(s[0] - e[0], s[1] - e[1], s[2] - e[2])
        }, e.prototype.mult = function (t, i) {
            i = i || this.register;
            var s = this.v;
            return i.setXYZ(t * s[0], t * s[1], t * s[2])
        }, e.prototype.div = function (t, i) {
            return this.mult(1 / t, i)
        }, e.prototype.cross = function (t, i) {
            var s = this.v, e = t.v;
            return i = i || this.register, i.setXYZ(s[1] * e[2] - s[2] * e[1], s[2] * e[0] - s[0] * e[2], s[0] * e[1] - s[1] * e[0])
        }, e.prototype.rotate = function (t, i, s, e) {
            return this.rotateX(t, e).rotateY(i, e).rotateZ(s, e)
        }, e.prototype.rotateX = function (t, i) {
            i = i || this.register;
            var s = this.v, e = s[0], o = s[1], n = s[2], r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(e, -n * a + o * r, n * r - o * a)
        }, e.prototype.rotateY = function (t, i) {
            i = i || this.register;
            var s = this.v, e = s[0], o = s[1], n = s[2], r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(-n * a + e * r, o, n * r + e * a)
        }, e.prototype.rotateZ = function (t, i) {
            i = i || this.register;
            var s = this.v, e = s[0], o = s[1], n = s[2], r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(-o * a + e * r, o * r + e * a, n)
        }, e.prototype.dot = function (t) {
            var i = this.v, s = t.v;
            return i[0] * s[0] + i[1] * s[1] + i[2] * s[2]
        }, e.prototype.normSquared = function () {
            return this.dot(this)
        }, e.prototype.norm = function () {
            return Math.sqrt(this.normSquared())
        }, e.prototype.normalize = function (t, i) {
            t = t || 1, i = i || this.register;
            var s = 1e-7, e = this.norm();
            return Math.abs(e) > s ? this.mult(t / e, i) : i.setXYZ(t, 0, 0)
        }, e.prototype.clone = function () {
            return new e(this.v)
        }, e.prototype.isZero = function () {
            var t = this.v;
            return!t[0] && !t[1] && !t[2]
        }, e.prototype.get = function () {
            return this.v
        }, e.prototype.set = function (t) {
            var i = t.v, s = this.v;
            return s[0] = i[0], s[1] = i[1], s[2] = i[2], this != this.register && this.register.clear(), this
        }, e.prototype.setXYZ = function (t, i, s) {
            return this.register.clear(), this.v = [t, i, s], this
        }, e.prototype.clear = function () {
            this.v = [0, 0, 0]
        }, e.prototype.cap = function (t) {
            if (1 / 0 == t)return this;
            var i = this.norm();
            return i > t && this.normalize().mult(t, this), this
        }, e.prototype.project = function (t, i) {
            return i = i || this.register, t.mult(this.dot(t), i)
        }, e.prototype.reflect = function (t, i) {
            return i = i || this.register, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, e.prototype.register = new e(0, 0, 0), s.exports = e
    }), define("famous-physics/utils/PhysicsTransition2", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/forces/VectorField", "famous-physics/constraints/Wall", "famous-physics/math/Vector", "famous/EventHandler"], function (t, i, s) {
        function e(t) {
            t = t || 0, this.endState = t, this.prevState = void 0, this.direction = void 0, this.defaultDefinition = {transition: {curve: {v: 1, thrust: 0}, duration: 500}, bounce: {period: 0, dampingRatio: 0}, walls: !1}, this._anchor = new z(t, 0, 0), this.stageOneActive = !1, this.attachedSpring = void 0, this.attachedWall = void 0, this.attachedThrust = void 0, this.eventHandler = new C, this.eventHandler.on("initStageTwo", v.bind(this)), this.PE = new b, this.particle = this.PE.createBody({p: [t, 0, 0], v: [0, 0, 0]}), this.spring = new w({anchor: this._anchor}), this.thrust = new M({strength: 0, field: M.FIELDS.CONSTANT, direction: [1, 0, 0]}), this.wall = new T({restitution: .5, k: 0, n: new z(-1, 0, 0)})
        }

        function o() {
            return this.particle.p.x <= this.endState ? 1 : -1
        }

        function n(t) {
            this.direction = t
        }

        function r() {
            1 == this.stageOneActive && this.direction != o.call(this) && this.eventHandler.emit("initStageTwo")
        }

        function a(t) {
            var i, s, o = t.transition.duration, n = t.transition.curve;
            "string" == typeof n && (n = e.TRANSITIONS[n]), s = this.direction * n.v, i = this.direction * n.thrust;
            var r = this.endState - this.particle.p.x;
            if (0 == o)this.v = s || 0, this.a = 0; else {
                var a;
                0 == i ? a = r / (s * o) : (0 > s * s + 2 * i * r && console.warn("unphysical choices for (v,a), target cannot be reached"), a = r > 0 ? (-s + Math.sqrt(s * s + 2 * i * r)) / (i * o) : (-s - Math.sqrt(s * s + 2 * i * r)) / (i * o)), this.v = a * s, this.a = a * a * i
            }
            var h = t.bounce;
            "string" == typeof h && (h = e.BOUNCE[h]), this.spring.setOpts({period: h.period, dampingRatio: h.dampingRatio}), this.wallsActive = t.walls
        }

        function h(t) {
            this.prevState = this.endState, this.endState = t, n.call(this, o.call(this))
        }

        function u(t) {
            void 0 === this.attachedSpring && (this._anchor.x = t, this.attachedSpring = this.PE.attach(this.spring, this.particle))
        }

        function p() {
            void 0 !== this.attachedSpring && (this.PE.detach(this.attachedSpring, this.particle), this.attachedSpring = void 0)
        }

        function c(t, i) {
            this.wallsActive && (this.wall.setOpts({d: Math.abs(t), n: [-i, 0, 0]}), this.attachedWall = this.PE.attach(this.wall, this.particle))
        }

        function l() {
            void 0 !== this.attachedWall && (this.PE.detach(this.attachedWall, this.particle), this.attachedWall = void 0)
        }

        function f(t) {
            this.thrust.setOpts({strength: t}), this.attachedThrust = this.PE.attach(this.thrust, this.particle)
        }

        function d() {
            void 0 !== this.attachedThrust && (this.PE.detach(this.attachedThrust), this.attachedThrust = void 0)
        }

        function m() {
            this.stageOneActive = !0, p.call(this), d.call(this), l.call(this), f.call(this, this.a), y.call(this, this.v), P = Date.now()
        }

        function v() {
            console.log("Duration : ", Date.now() - P), this.stageOneActive = !1, d.call(this), g.call(this, this.endState), u.call(this, this.endState), c.call(this, this.endState, this.direction)
        }

        function y(t) {
            this.particle.v.x = t
        }

        function g(t) {
            this.particle.p.x = t
        }

        function x(t) {
            this.spring.setOpts({callback: t})
        }

        function S() {
            this.PE.step(), r.call(this)
        }

        var b = t("famous-physics/PhysicsEngine"), w = t("famous-physics/constraints/StiffSpring"), M = t("famous-physics/forces/VectorField"), T = t("famous-physics/constraints/Wall"), z = t("famous-physics/math/Vector"), C = t("famous/EventHandler");
        e.TRANSITIONS = {linear: {v: 1, thrust: 0}, easeIn: {v: 0, thrust: 2}, backIn: {v: -1, thrust: 2}}, e.BOUNCE = {none: {dampingRatio: 0, period: 0}, low: {dampingRatio: .5, period: 300}, medium: {dampingRatio: .3, period: 600}, high: {dampingRatio: .1, period: 800}};
        var P;
        e.forceFunctions = w.forceFunctions, e.prototype.reset = function (t, i) {
            i = i || 0, t = t || 0, this.PE.detachAll(), g.call(this, t), y.call(this, i), x.call(this, void 0)
        }, e.prototype.set = function (t, i, s) {
            return i ? (h.call(this, t), a.call(this, i), x.call(this, s), m.call(this), void 0) : (this.reset(t), s && s(), void 0)
        }, e.prototype.get = function () {
            return S.call(this), this.particle.p.x
        }, e.prototype.getVelocity = function () {
            return S.call(this), this.particle.v.x
        }, e.prototype.getTarget = function () {
            return this.endState
        }, s.exports = e
    }), define("famous-physics/utils/SpringTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/forces/Spring", "famous-physics/math/Vector"], function (t, i, s) {
        function e(t) {
            t = t || 0, this._anchor = new m(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest = !0, this.spring = new d({anchor: this._anchor}), this.PE = new f, this.particle = this.PE.createParticle({p: [t, 0, 0]}), this.PE.attach(this.spring, this.particle)
        }

        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                v > t && (this.atRest = !0, h.call(this, this.endState), this.callback && this.callback())
            }
        }

        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }

        function r(t) {
            var i = e.DEFAULT_OPTIONS;
            void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), t.period < 150 && console.warn("period may be unstable, increase the period or use a stiff transition"), this.spring.setOpts({period: t.period, dampingRatio: t.dampingRatio}), u.call(this, t.velocity)
        }

        function a(t) {
            this.prevState = this.endState, this.endState = t;
            var i;
            i = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, this._anchor.x = t, u.call(this, i * c.call(this))
        }

        function h(t) {
            this.particle.p.x = t
        }

        function u(t) {
            this.particle.v.x = t
        }

        function p() {
            return this.particle.p.x
        }

        function c() {
            return this.particle.v.x
        }

        function l(t) {
            this.callback = t
        }

        var f = t("famous-physics/PhysicsEngine"), d = t("famous-physics/forces/Spring"), m = t("famous-physics/math/Vector");
        e.DEFAULT_OPTIONS = {period: 300, dampingRatio: .5, velocity: 0}, e.forceFunctions = d.forceFunctions;
        var v = 1e-5;
        e.prototype.reset = function (t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
        }, e.prototype.getVelocity = function () {
            return o.call(this), c.call(this)
        }, e.prototype.halt = function () {
            this.set(this.get())
        }, e.prototype.get = function () {
            return o.call(this), p.call(this)
        }, e.prototype.set = function (t, i, s) {
            return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), l.call(this, s), void 0) : (this.reset(t), s && s(), void 0)
        }, s.exports = e
    }), define("famous-physics/utils/StiffSpringTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/math/Vector"], function (t, i, s) {
        function e(t) {
            t = t || 0, this._anchor = new m(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest = !0, this.spring = new d({anchor: this._anchor}), this.PE = new f, this.particle = this.PE.createParticle({p: [t, 0, 0]}), this.PE.attach(this.spring, this.particle)
        }

        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                v > t && (this.atRest = !0, h.call(this, this.endState), this.callback && this.callback())
            }
        }

        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }

        function r(t) {
            var i = e.DEFAULT_OPTIONS;
            void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), this.spring.setOpts({period: t.period, dampingRatio: t.dampingRatio}), u.call(this, t.velocity)
        }

        function a(t) {
            this.prevState = this.endState, this.endState = t;
            var i;
            i = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, this._anchor.x = t, u.call(this, i * c.call(this))
        }

        function h(t) {
            this.particle.p.x = t
        }

        function u(t) {
            this.particle.v.x = t
        }

        function p() {
            return this.particle.p.x
        }

        function c() {
            return this.particle.v.x
        }

        function l(t) {
            this.callback = t
        }

        var f = t("famous-physics/PhysicsEngine"), d = t("famous-physics/constraints/StiffSpring"), m = t("famous-physics/math/Vector");
        e.DEFAULT_OPTIONS = {period: 300, dampingRatio: .5, velocity: 0}, e.forceFunctions = d.forceFunctions;
        var v = 1e-5;
        e.prototype.reset = function (t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
        }, e.prototype.getVelocity = function () {
            return o.call(this), c.call(this)
        }, e.prototype.halt = function () {
            this.set(this.get())
        }, e.prototype.get = function () {
            return o.call(this), p.call(this)
        }, e.prototype.set = function (t, i, s) {
            return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), l.call(this, s), void 0) : (this.reset(t), s && s(), void 0)
        }, s.exports = e
    }), define("famous-physics/utils/WallTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/forces/Spring", "famous-physics/constraints/Wall", "famous-physics/math/Vector"], function (t, i, s) {
        function e(t) {
            t = t || 0, this._anchor = new v(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest = !0, this.spring = new d({anchor: this._anchor}), this.wall = new m, this.PE = new f, this.particle = this.PE.createParticle({p: [t, 0, 0]}), this.PE.attach(this.spring, this.particle), this.PE.attach(this.wall, this.particle)
        }

        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                y > t && (this.atRest = !0, h.call(this, this.endState), this.callback && this.callback())
            }
        }

        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }

        function r(t) {
            var i = e.DEFAULT_OPTIONS;
            void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), void 0 === t.restitution && (t.restitution = i.restitution), this.spring.setOpts({period: t.period, dampingRatio: t.dampingRatio}), this.wall.setOpts({restitution: t.restitution}), u.call(this, t.velocity)
        }

        function a(t) {
            this.prevState = this.endState, this.endState = t;
            var i;
            i = this.endState - this.prevState > 0 ? 1 : this.endState < 0 ? -1 : 0, this._anchor.x = t, this.wall.setOpts({d: Math.abs(t), n: [-i, 0, 0]}), u.call(this, i * c.call(this))
        }

        function h(t) {
            this.particle.p.x = t
        }

        function u(t) {
            this.particle.v.x = t
        }

        function p() {
            return this.particle.p.x
        }

        function c() {
            return this.particle.v.x
        }

        function l(t) {
            this.callback = t
        }

        var f = t("famous-physics/PhysicsEngine"), d = t("famous-physics/forces/Spring"), m = t("famous-physics/constraints/Wall"), v = t("famous-physics/math/Vector");
        e.DEFAULT_OPTIONS = {period: 300, dampingRatio: 0, restitution: .4, velocity: 0}, e.forceFunctions = d.forceFunctions;
        var y = 1e-5;
        e.prototype.reset = function (t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
        }, e.prototype.getVelocity = function () {
            return o.call(this), c.call(this)
        }, e.prototype.halt = function () {
            this.set(this.get())
        }, e.prototype.get = function () {
            return o.call(this), p.call(this)
        }, e.prototype.set = function (t, i, s) {
            return i ? (this.atRest = !1, r.call(this, i), a.call(this, t), l.call(this, s), void 0) : (this.reset(t), s && s(), void 0)
        }, s.exports = e
    }), define("famous-scene/GLScene", ["require", "exports", "module", "famous-utils/Utils", "famous/Engine", "famous/View", "famous/WebGLSurface"], function (t, i, s) {
        function e() {
            r.apply(this, arguments), this.width = o.getWidth(), this.height = o.getHeight(), this.mouseDown = !1, this.callbacks = {}, this.gl = null, this.glReady = !1, this.contextInitAttempts = 0, this.glSurface = new a({size: [this.width, this.height], glOptions: {antialias: !0}}), this.node.add(this.glSurface), this.bindEvents()
        }

        var o = t("famous-utils/Utils"), n = t("famous/Engine"), r = t("famous/View"), a = t("famous/WebGLSurface");
        e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e.prototype.bindEvents = function () {
            this.callbacks.prerender = this.__update.bind(this), this.callbacks.touchstart = this.touchstart.bind(this), this.callbacks.touchmove = this.touchmove.bind(this), this.callbacks.touchend = this.touchend.bind(this), this.callbacks.keypress = this.keypress.bind(this), this.callbacks.resize = this._resize.bind(this), this.callbacks.mousedown = this._mousedown.bind(this), this.callbacks.mousemove = this._mousemove.bind(this), this.callbacks.mouseover = this._mouseover.bind(this), this.callbacks.mouseup = this._mouseup.bind(this), this.callbacks.mouseout = this._mouseout.bind(this), this.callbacks.keydown = this.keydown.bind(this), this.callbacks.keyup = this.keyup.bind(this);
            for (var t = Object.keys(this.callbacks), i = 0; i < t.length; i++)n.on(t[i], this.callbacks[t[i]])
        }, e.prototype.setup = function () {
        }, e.prototype.__update = function () {
            this.initGL() && (n.unbind("prerender", this.callbacks.prerender), this.callbacks.prerender = this._update.bind(this), n.on("prerender", this.callbacks.prerender))
        }, e.prototype._update = function () {
            this.update(this.gl), this.draw(this.gl)
        }, e.prototype.update = function () {
        }, e.prototype.draw = function () {
        }, e.prototype._resize = function (t) {
            var i = o.getDevicePixelRatio();
            this.width = o.getWidth(), this.height = o.getHeight(), this.glSurface.setSize([this.width, this.height]), this.gl ? (this.gl.viewportWidth = this.width * i, this.gl.viewportHeight = this.height * i) : (this.errorSurfaceSize = [this.width, this.height], this.errorSurface.setSize(this.errorSurfaceSize), this.errorSurface.setProperties({"line-height": this.errorSurfaceSize[1] + "px", "font-size": .05 * this.errorSurfaceSize[0] + "px", width: this.errorSurfaceSize[0] + "px"})), this.resize(t)
        }, e.prototype.initGL = function () {
            var t = this.glSurface.getContext({antialias: !0});
            if (this.contextInitAttempts++, null != t && o.supportsWebGL()) {
                this.gl = t;
                var i = o.getDevicePixelRatio();
                this.gl.viewportWidth = this.width * i, this.gl.viewportHeight = this.height * i, this.glReady = !0, this.setup(this.gl)
            } else this.contextInitAttempts > 3 && (n.unbind("prerender", this.callbacks.prerender), this.errorSurfaceSize = [this.width, this.height], this.errorSurface = new FamousSurface({size: this.errorSurfaceSize, content: "A WebGL enabled browser is required", properties: {"background-color": "rgba(100, 100, 100, 0.75)", color: "white", "text-align": "center", "vertical-align": "center", "line-height": this.errorSurfaceSize[1] + "px", "font-size": .05 * this.errorSurfaceSize[0] + "px", "border-radius": "0px 0px 0px 0px", "font-family": "Avenir Next W10 Thin", width: this.errorSurfaceSize[0] + "px"}}), this.modifier = new Modifier({opacity: 1}), this.node.add(this.modifier).link(this.errorSurface));
            return this.glReady
        }, e.prototype.activate = function (t) {
            t && t()
        }, e.prototype.update = function () {
        }, e.prototype.render = function () {
            return this.node.render()
        }, e.prototype.deactivate = function (t) {
            t && t()
        }, e.prototype.touchstart = function () {
        }, e.prototype.touchmove = function () {
        }, e.prototype.touchend = function () {
        }, e.prototype._mousedown = function (t) {
            this.mouseDown = !0, this.mousedown(t)
        }, e.prototype._mousemove = function (t) {
            this.mouseDown === !0 ? this.mousedrag(t) : this.mousemove(t)
        }, e.prototype._mouseover = function (t) {
            this.mouseover(t)
        }, e.prototype._mouseup = function (t) {
            this.mouseDown = !1, this.mouseup(t)
        }, e.prototype._mouseout = function (t) {
            this.mouseout(t)
        }, e.prototype.mousedown = function () {
        }, e.prototype.mouseup = function () {
        }, e.prototype.mousemove = function () {
        }, e.prototype.mouseover = function () {
        }, e.prototype.mouseout = function () {
        }, e.prototype.mousedrag = function () {
        }, e.prototype.keypress = function () {
        }, e.prototype.keydown = function () {
        }, e.prototype.keyup = function () {
        }, e.prototype.keypress = function () {
        }, e.prototype.resize = function () {
        }, e.prototype.setController = function (t) {
            this.controller = t
        }, s.exports = e
    }), define("famous-sync/FastClick", ["require", "exports", "module"], function () {
        if (window.CustomEvent) {
            var t = 300, i = {};
            document.addEventListener("touchstart", function (t) {
                for (var s = Date.now(), e = 0; e < t.changedTouches.length; e++) {
                    var o = t.changedTouches[e];
                    i[o.identifier] = s
                }
            }), window.addEventListener("touchmove", function (t) {
                for (var s = 0; s < t.changedTouches.length; s++) {
                    var e = t.changedTouches[s];
                    delete i[e.identifier]
                }
            }), document.addEventListener("touchend", function (s) {
                for (var e = Date.now(), o = 0; o < s.changedTouches.length; o++) {
                    var n = s.changedTouches[o], r = i[n.identifier];
                    if (r && t > e - r) {
                        s.preventDefault();
                        var a = new CustomEvent("click", {bubbles: !0, details: n});
                        s.target.dispatchEvent(a)
                    }
                    delete i[n.identifier]
                }
            })
        }
    }), define("famous-sync/MouseSync", ["require", "exports", "module", "famous/EventHandler"], function (t, i, s) {
        function e(t, i) {
            this.targetGet = t, this.options = {direction: void 0, rails: !1, scale: 1, stallTime: 50, propogate: !0}, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new h, this.output = new h, h.setInputHandler(this, this.input), h.setOutputHandler(this, this.output), this._prevCoord = void 0, this._prevTime = void 0, this._prevVel = void 0, this.input.on("mousedown", o.bind(this)), this.input.on("mousemove", n.bind(this)), this.input.on("mouseup", r.bind(this)), this.options.propogate ? this.input.on("mouseleave", a.bind(this)) : this.input.on("mouseleave", r.bind(this))
        }

        function o(t) {
            t.preventDefault(), this._prevCoord = [t.clientX, t.clientY], this._prevTime = Date.now(), this._prevVel = void 0 !== this.options.direction ? 0 : [0, 0], this.output.emit("start")
        }

        function n(t) {
            if (this._prevCoord) {
                var i = this._prevCoord, s = this._prevTime, o = [t.clientX, t.clientY], n = Date.now(), r = o[0] - i[0], a = o[1] - i[1];
                this.options.rails && (Math.abs(r) > Math.abs(a) ? a = 0 : r = 0);
                var h, u, p = Math.max(n - s, 8), c = r / p, l = a / p, f = this.targetGet(), d = this.options.scale;
                this.options.direction == e.DIRECTION_X ? (h = f + d * r, u = d * c) : this.options.direction == e.DIRECTION_Y ? (h = f + d * a, u = d * l) : (h = [f[0] + d * r, f[1] + d * a], u = [d * c, d * l]), this.output.emit("update", {p: h, v: u}), this._prevCoord = o, this._prevTime = n, this._prevVel = u
            }
        }

        function r() {
            if (this._prevCoord) {
                var t = this._prevTime, i = Date.now();
                i - t > this.options.stallTime && (this._prevVel = void 0 == this.options.direction ? [0, 0] : 0);
                var s = this.targetGet();
                this.output.emit("end", {p: s, v: this._prevVel}), this._prevCoord = void 0, this._prevTime = void 0, this._prevVel = void 0
            }
        }

        function a() {
            if (this._prevCoord) {
                var t = function (t) {
                    n.call(this, t)
                }.bind(this), i = function (s) {
                    r.call(this, s), document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", i)
                }.bind(this);
                document.addEventListener("mousemove", t), document.addEventListener("mouseup", i)
            }
        }

        var h = t("famous/EventHandler");
        e.DIRECTION_X = 0, e.DIRECTION_Y = 1, e.prototype.getOptions = function () {
            return this.options
        }, e.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime), void 0 !== t.propogate && (this.options.propogate = t.propogate)
        }, s.exports = e
    }), define("famous-sync/TwoFingerSync", ["require", "exports", "module", "famous/EventHandler"], function (t, i, s) {
        function e(t, i) {
            this.targetGet = t, this.options = {scale: 1}, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new o, this.output = new o, o.setInputHandler(this, this.input), o.setOutputHandler(this, this.output), this.touchAId = void 0, this.posA = void 0, this.timestampA = void 0, this.touchBId = void 0, this.posB = void 0, this.timestampB = void 0, this.input.on("touchstart", this.handleStart.bind(this)), this.input.on("touchmove", this.handleMove.bind(this)), this.input.on("touchend", this.handleEnd.bind(this)), this.input.on("touchcancel", this.handleEnd.bind(this))
        }

        var o = t("famous/EventHandler");
        e.prototype.getOptions = function () {
            return this.options
        }, e.prototype.setOptions = function (t) {
            void 0 !== t.scale && (this.options.scale = t.scale)
        }, e.prototype.handleStart = function (t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var s = t.changedTouches[i];
                this.touchAId ? this.touchBId || (this.touchBId = s.identifier, this.posB = [s.pageX, s.pageY], this.timestampB = Date.now(), this._startUpdate()) : (this.touchAId = s.identifier, this.posA = [s.pageX, s.pageY], this.timestampA = Date.now())
            }
        }, e.prototype.handleMove = function (t) {
            if (this.touchAId && this.touchBId) {
                for (var i, s = this.timestampA, e = this.timestampB, o = 0; o < t.changedTouches.length; o++) {
                    var n = t.changedTouches[o];
                    n.identifier == this.touchAId ? (this.posA = [n.pageX, n.pageY], this.timestampA = Date.now(), i = this.timestampA - s) : n.identifier == this.touchBId && (this.posB = [n.pageX, n.pageY], this.timestampB = Date.now(), i = this.timestampB - e)
                }
                i && this._moveUpdate(i)
            }
        }, e.prototype.handleEnd = function (t) {
            for (var i = this.targetGet(), s = this.options.scale, e = 0; e < t.changedTouches.length; e++) {
                var o = t.changedTouches[e];
                (o.identifier == this.touchAId || o.identifier == this.touchBId) && (this.touchAId && this.touchBId && this.output.emit("end", {p: i, v: s * this._vel, touches: [this.touchAId, this.touchBId], angle: this._angle}), this.touchAId = void 0, this.touchBId = void 0)
            }
        }, s.exports = e
    }), define("famous-sync/PinchSync", ["require", "exports", "module", "./TwoFingerSync"], function (t, i, s) {
        function e(t, i) {
            n.call(this, t, i), this._dist = void 0
        }

        function o(t, i) {
            var s = i[0] - t[0], e = i[1] - t[1];
            return Math.sqrt(s * s + e * e)
        }

        var n = t("./TwoFingerSync");
        e.prototype = Object.create(n.prototype), e.prototype._startUpdate = function () {
            this._dist = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {count: event.touches.length, touches: [this.touchAId, this.touchBId], distance: this._dist})
        }, e.prototype._moveUpdate = function (t) {
            var i = o(this.posA, this.posB), s = i - this._dist, e = s / t, n = this.targetGet(), r = this.options.scale;
            this.output.emit("update", {p: n + r * s, v: r * e, touches: [this.touchAId, this.touchBId], distance: i}), this._dist = i, this._vel = e
        }, s.exports = e
    }), define("famous-sync/RotateSync", ["require", "exports", "module", "./TwoFingerSync"], function (t, i, s) {
        function e(t, i) {
            n.call(this, t, i), this._angle = void 0
        }

        function o(t, i) {
            var s = i[0] - t[0], e = i[1] - t[1];
            return Math.atan2(e, s)
        }

        var n = t("./TwoFingerSync");
        e.prototype = Object.create(n.prototype), e.prototype._startUpdate = function () {
            this._angle = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {count: event.touches.length, touches: [this.touchAId, this.touchBId], angle: this._angle})
        }, e.prototype._moveUpdate = function (t) {
            var i = o(this.posA, this.posB), s = i - this._angle, e = s / t, n = this.targetGet(), r = this.options.scale;
            this.output.emit("update", {p: n + r * s, v: r * e, touches: [this.touchAId, this.touchBId], angle: i}), this._angle = i, this._vel = e
        }, s.exports = e
    }), define("famous-sync/ScaleSync", ["require", "exports", "module", "./TwoFingerSync"], function (t, i, s) {
        function e(t, i) {
            r.call(this, t, i), this._startDist = void 0, this._prevScale = void 0, this.input.on("pipe", n.bind(this))
        }

        function o(t, i) {
            var s = i[0] - t[0], e = i[1] - t[1];
            return Math.sqrt(s * s + e * e)
        }

        function n() {
            this.touchAId = void 0, this.touchBId = void 0
        }

        var r = t("./TwoFingerSync");
        e.prototype = Object.create(r.prototype), e.prototype._startUpdate = function () {
            this._prevScale = 1, this._startDist = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {count: event.touches.length, touches: [this.touchAId, this.touchBId], distance: this._startDist})
        }, e.prototype._moveUpdate = function (t) {
            var i = o(this.posA, this.posB), s = i / this._startDist, e = s - this._prevScale, n = e / t, r = this.targetGet(), a = this.options.scale;
            this.output.emit("update", {p: r + a * e, v: a * n, touches: [this.touchAId, this.touchBId], distance: i}), this._prevScale = s, this._vel = n
        }, s.exports = e
    }), define("famous-ui/Buttons/SpringButton", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous/View", "famous-physics/forces/Spring", "famous/Surface", "famous-physics/math/vector", "famous-utils/Utils"], function (t, i, s) {
        function e() {
            a.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.PE = new r, this.available = !0, this.anchor = this.PE.createParticle({p: this.options.pos, v: this.options.vel, immunity: !0}), this.particle = this.PE.createParticle({p: this.options.pos, v: this.options.vel}), this.spring = new h({period: this.options.springPeriod, dampingRatio: this.options.springDampingRatio, length: this.options.springLength, anchor: this.options.pos, callback: n.bind(this)}), this.PE.attach(this.spring, this.particle), this.surface = new u({size: this.options.size, content: this.options.content, classes: this.options.surfaceClasses, properties: this.options.surfaceProperties}), this.surface.pipe(this), this.on("click", o.bind(this))
        }

        function o() {
            this._addForce(this.options.clickForce)
        }

        function n() {
            this.options.limitTouches && (this.available = !0)
        }

        var r = t("famous-physics/PhysicsEngine"), a = t("famous/View"), h = t("famous-physics/forces/Spring"), u = t("famous/Surface");
        t("famous-physics/math/vector");
        var p = t("famous-utils/Utils");
        e.prototype = Object.create(a.prototype), e.prototype.constructor = e, e.DEFAULT_OPTIONS = {size: [200, 200], pos: [0, 0, 0], vel: [0, 0, 0], springPeriod: 200, springDampingRatio: .8, springLength: 0, content: "", surfaceProperties: {}, surfaceClasses: [], limitTouches: !1, forceMult: [10, 10, 10], padding: 0, callbackTolerance: 1e-4, clickForce: [0, 0, -.005]}, e.prototype.setPeriod = function (t) {
            this.spring.setPeriod(t)
        }, e.prototype.setDamping = function (t) {
            this.spring.setDampingRatio(t)
        }, e.prototype.setCallbackTolerance = function (t) {
            this.spring.opts.callbackTolerance = t
        }, e.prototype.addForce = function (t) {
            var i = {x: 0, y: 0, z: 0};
            p.isArray(t) ? (i.x = t[0] * this.options.forceMult[0], i.y = t[1] * this.options.forceMult[1], i.z = t[2] * this.options.forceMult[2]) : (i.x = t.x * this.options.forceMult[0], i.y = t.y * this.options.forceMult[1], i.z = t.z * this.options.forceMult[2]), this.options.limitTouches ? this.available && (this.particle.applyForce(i), this.available = !1, this.emit("selection")) : (this.particle.applyForce(i), this.emit("selection"))
        }, e.prototype.render = function () {
            return this.PE.step(), {opacity: 1, transform: this.PE.getTransform(this.particle), target: this.surface.render()}
        }, s.exports = e
    }), define("famous-ui/Buttons/SpringButton.ui", ["require", "exports", "module", "./SpringButton"], function (t, i, s) {
        function e() {
            o.apply(this, arguments), this.autoUI = [
                {type: "label", uiOptions: {content: "PHYSICS", properties: {"border-bottom": "1px solid #f2786f", color: "#f2786f", "font-size": "16px"}}},
                {option: "springPeriod", type: "slider", uiOptions: {range: [100, 2e3], name: "SPRING DURATION"}},
                {option: "springPeriod", callback: this.setDamping, type: "slider", uiOptions: {range: [.002, .8], name: "SPRING DAMPING"}},
                {type: "label", uiOptions: {content: "APPEARANCE", properties: {"border-bottom": "1px solid white", color: "rgba( 255, 255, 255, 1 )", "font-size": "16px"}}},
                {callback: this.setBackgroundColor, type: "colorPicker", uiOptions: {name: "Background Color"}},
                {callback: this.setBorderColor, type: "colorPicker", uiOptions: {name: "Stroke Color"}},
                {callback: this.setBorderRadius, type: "slider", uiOptions: {range: [0, 100], name: "BORDER RADIUS"}}
            ]
        }

        var o = t("./SpringButton");
        e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.prototype.setPeriod = function (t) {
            this.setOptions({period: t})
        }, e.prototype.setDamping = function (t) {
            this.setOptions({dampingRatio: t})
        }, e.prototype.setBackgroundColor = function (t) {
            this.surface.setProperties({"background-color": t.getCSSColor()})
        }, e.prototype.setBorderColor = function (t) {
            this.surface.setProperties({border: "1px solid " + t.getCSSColor()})
        }, e.prototype.setBorderRadius = function (t) {
            this.surface.setProperties({"border-radius": t + "px"})
        }, s.exports = e
    }), define("famous-utils/FormatTime", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i) {
            var s = t.toString().match(/(\d+)/g), e = new Date(s[0], s[1] - 1, s[2], s[3], s[4], s[5], 0), r = new Date, a = .001 * (r.getTime() - e.getTime()), h = parseInt(a / 60, 10), u = parseInt(h / 60, 10), p = parseInt(u / 24, 10), c = o(e), l = 10, f = "";
            return 720 > h ? 60 > h ? 2 > h ? (f = "just now", l = 1, [f, l]) : 30 > h ? (f = h + " minutes ago", l = 2, [f, l]) : 40 > h ? (f = "about a half hour ago", l = 2, [f, l]) : 50 > h ? (f = "about 45 minutes ago", l = 3, [f, l]) : (f = "about an hour ago", l = 4, [f, l]) : (f = 1 == i ? c[6] + ":" + c[7] + c[8] : "earlier today at " + c[6] + ":" + c[7] + c[8], l = 5, [f, l]) : 1440 > h ? (f = "yesterday at " + c[6] + ":" + c[7] + c[8], l = 6, [f, l]) : p >= 1 && 2 >= p ? (f = "yesterday at " + c[6] + ":" + c[7] + c[8], l = 7, [f, l]) : 6 > p ? (f = c[0] + " at " + c[6] + ":" + c[7] + c[8], l = 8, [f, l]) : 30 > p ? (f = 1 == i ? c[3] + "/" + c[1] + " at " + c[6] + ":" + c[7] + c[8] : c[4] + " " + c[1] + c[2] + " around " + c[6] + c[8], l = 9, [f, l]) : (f = n(c, r), l = 10, [f, l])
        }

        function o(t) {
            var i = t.getDate(), s = t.getDay(), e = t.getMonth() + 1, o = t.getFullYear(), n = t.getHours(), r = t.getMinutes().toString(), a = 12 > n ? "am" : "pm";
            r.length < 2 && (r = "0" + r);
            var h = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], u = {1: "st", 2: "nd", 3: "rd", 4: "th", 5: "th", 6: "th", 7: "th", 8: "th", 9: "th", 10: "th", 11: "th", 12: "th", 13: "th", 14: "th", 15: "th", 16: "th", 17: "th", 18: "th", 19: "th", 20: "th", 21: "st", 22: "nd", 23: "rd", 24: "th", 25: "th", 26: "th", 27: "th", 28: "th", 29: "th", 30: "th", 31: "st"}, p = {1: "Jan", 2: "Feb", 3: "Mar", 4: "April", 5: "May", 6: "June", 7: "July", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"};
            return 0 === n && (n = 12), n > 12 && (n -= 12), [h[s], i, u[i], e, p[e], o, n, r, a]
        }

        function n(t, i) {
            i ? i : new Date;
            var s = i.getFullYear() === t[5] ? t[4] + " " + t[1] + t[2] : t[4] + " " + t[1] + t[2] + " " + t[5];
            return s
        }

        s.exports = e
    }), define("famous-utils/NoiseImage", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s) {
            t || (t = [128, 128]), i || (i = 8), o.width = t[0], o.height = t[1];
            var e = i >> 1, r = o.width / i, a = i * i >> 1, h = 1 / e;
            u(s), n.fillRect(0, 0, t[0], t[1]), u(s);
            for (var p, c, l = 0; a > l; l++)Math.random() + .5 >> 0 && (c = l * h >> 0, p = l - e * c, n.fillRect(p * r, c * r, r, r), n.fillRect((i - (p + 1)) * r, c * r, r, r));
            var f = o.toDataURL("image/png");
            return f
        }

        var o = document.createElement("canvas"), n = o.getContext("2d"), r = function (t) {
            var i = 361 * Math.random() >> 0, s = t ? 360 * .125 * t - (46 * Math.random() >> 0) : i;
            return s
        }, a = function () {
            return 30 + 71 * Math.random() >> 0
        }, h = function () {
            return 30 + 71 * Math.random() >> 0
        }, u = function (t) {
            n.fillStyle = "hsl(" + r(t) + "," + a() + "%," + h() + "%)"
        };
        s.exports = {generate: e}
    }), define("famous-utils/TimeAgo", ["require", "exports", "module"], function (t, i, s) {
        function e(t) {
            var i = Date.now(), s = i - t, e = 6e4, o = 60 * e, n = 24 * o;
            if (e > s)return"Just Now";
            if (o > s) {
                var r = ~~(s / e);
                return r + "m"
            }
            if (n > s) {
                var a = ~~(s / o);
                return a + "h"
            }
            var h = ~~(s / n);
            return h + "d"
        }

        s.exports = {parse: e}
    }), define("famous-views/Accordion", ["require", "exports", "module", "famous/Matrix", "famous/Transitionable", "famous/Modifier", "famous-animation/Easing"], function (t, i, s) {
        function e(t) {
            this.state = new n(0);
            var t = t || {};
            t.curve || (t.curve = r.inOutQuadNorm), t.duration || (t.duration = 500);
            var i = {curve: t.curve, duration: t.duration};
            this.options = {transition: i}, this.target = void 0, this._isOpen = !1
        }

        var o = t("famous/Matrix"), n = t("famous/Transitionable");
        t("famous/Modifier");
        var r = t("famous-animation/Easing");
        e.prototype.render = function () {
            return this.state.get() ? {transform: o.translate(0, (this.state.get() - 1) * this.target.getSize()[1], 100 * (this.state.get() - 1)), target: this.target.render()} : void 0
        }, e.prototype.getSize = function () {
            var t = this.target.getSize();
            return[t[0], this.state.get() * t[1]]
        }, e.prototype.show = function (t) {
            this.target = t, this.open()
        }, e.prototype.setState = function (t, i, s) {
            this.state.halt(), this.state.set(t, i, s)
        }, e.prototype.open = function (t) {
            this._isOpen = !0, this.setState(1, this.options.transition, t)
        }, e.prototype.close = function (t) {
            this._isOpen = !1, this.setState(0, this.options.transition, t)
        }, e.prototype.toggle = function (t) {
            this._isOpen ? this.close(t) : this.open(t)
        }, s.exports = e
    }), define("famous-views/ControlSet", ["require", "exports", "module", "famous/EventHandler", "famous/Matrix"], function (t, i, s) {
        function e() {
            this.eventOutput = new o, o.setOutputHandler(this, this.eventOutput), this.controls = []
        }

        var o = t("famous/EventHandler"), n = t("famous/Matrix");
        e.prototype.include = function (t, i) {
            i.on("change", function (i) {
                this.eventOutput.emit(t, {value: i.value})
            }.bind(this)), this.controls.push(i)
        }, e.prototype.render = function () {
            for (var t = [], i = 0, s = 0, e = 0; e < this.controls.length; e++) {
                var o = this.controls[e], r = o.getSize();
                t.push({transform: n.translate(0, i), target: o.render()}), i += r[1], s = Math.max(s, r[0])
            }
            return{size: [s, i], target: t}
        }, s.exports = e
    }), define("famous-views/EnergyHelper", ["require", "exports", "module"], function (t, i, s) {
        function e(t, i, s) {
            this.x = 0, this.v = 0, this.agents = [], this.featureSize = s ? s : .5, this.jitter = Math.min(1e-4, .1 * this.featureSize), this.minStepTime = 1, this.lastUpdateTime = Date.now(), this.atRest = !1, this.set(t, i)
        }

        e.drag = function (t) {
            return function (i, s, e) {
                return-t * s * s * e
            }
        }, e.friction = function (t) {
            return function (i, s, e) {
                return-t * Math.abs(s) * e
            }
        }, e.spring = function (t, i, s) {
            i || (i = 0), s || (s = 0);
            var e = 2 * s * Math.sqrt(i);
            return function (s, o, n) {
                var r = s - t, a = r + o * n, h = .5 * i * r * r, u = .5 * i * a * a, p = 0 > r / a ? h : u - h, c = e * o * o * n;
                return-p - c
            }
        }, e.springFENE = function (t, i, s, o) {
            i || (i = 0), s || (s = 0), o || (o = 0);
            var n = 2 * s * Math.sqrt(i), r = e.spring(t, i, s), a = !1;
            return function (s, e, h) {
                var u = s - t, p = u + e * h;
                if (Math.abs(e) < 1e-4 && Math.abs(p) < o && (a = !1), a || Math.abs(u) >= o || Math.abs(p) >= o)return a = !0, r(s, e, h);
                var c = -.5 * i * o * o * Math.log(o * o - u * u), l = -.5 * i * o * o * Math.log(o * o - p * p), f = 0 > u / p ? -c : l - c, d = n * e * e * h;
                return-f - d
            }
        }, e.magnet = function (t, i) {
            var s = .5;
            return i || (i = 0), function (e, o, n) {
                var r = e - t, a = r + o * n;
                if (Math.abs(r) < s && Math.abs(a) < s)return-.5 * o * o * n;
                var h = -i / Math.max(Math.abs(r), s), u = -i / Math.max(Math.abs(a), s), p = u - h;
                return-p
            }
        }, e.prototype = {_updateReset: function () {
            this.lastUpdateTime = Date.now(), this.atRest = !1
        }, set: function (t, i) {
            "number" == typeof t && this.setPos(t), "number" == typeof i && this.setVelo(i)
        }, setPos: function (t) {
            this.x = t, this._updateReset()
        }, setVelo: function (t) {
            this.v = t, this._updateReset()
        }, addAgent: function (t) {
            t instanceof Function || console.error("Invalid agent"), this.agents.indexOf(t) < 0 && (this.agents.push(t), this.atRest = !1)
        }, removeAgent: function (t) {
            var i = this.agents.indexOf(t);
            i >= 0 && (this.agents.splice(i, 1), this.atRest = !1)
        }, setAgents: function (t) {
            this.agents = t.slice(0), this.atRest = !1
        }, getPos: function () {
            return this.update(), this.x
        }, getVelo: function () {
            return this.update(), this.v
        }, update: function (t) {
            for (t || (t = Date.now()); this.lastUpdateTime < t;) {
                var i = t - this.lastUpdateTime;
                this.v && (i = Math.min(i, this.featureSize / Math.abs(this.v))), i = Math.max(i, this.minStepTime), this._step(i)
            }
        }, _step: function (t) {
            function i(t, i, e) {
                for (var o = s.agents, n = 0, r = 0; r < o.length; r++)n += o[r](t, i, e);
                return n
            }

            if (this.lastUpdateTime += t, !this.atRest) {
                var s = this, e = 0, o = 0;
                if (Math.abs(this.v) > this.jitter)e = i(this.x, this.v, t), o = this.v > 0 ? 1 : -1; else {
                    var n = i(this.x, this.jitter, t), r = i(this.x, -this.jitter, t);
                    e = Math.max(n, r), o = n > r ? 1 : -1, 0 >= n && 0 >= r && (this.atRest = !0)
                }
                var a = this.v, h = .5 * a * a, u = h + e;
                if (0 > u)this.x += this.v * t * (u / e), this.v = 0; else {
                    var p = o * Math.sqrt(2 * Math.abs(u));
                    this.x += this.v * t, this.v = p
                }
                this.atRest && (this.x = Math.round(this.x / this.featureSize) * this.featureSize, this.v = 0)
            }
        }}, s.exports = e
    }), define("famous-views/Flip", ["require", "exports", "module", "famous/Matrix", "famous/Transitionable", "famous/RenderNode"], function (t, i, s) {
        function e(t) {
            this.options = {transition: !0, cull: !0}, t && this.setOptions(t), this._side = 0, this.state = new n(0), this.frontNode = new r, this.backNode = new r
        }

        var o = t("famous/Matrix"), n = t("famous/Transitionable"), r = t("famous/RenderNode");
        e.prototype.setDefaultTransition = function (t) {
            this.transition = t
        }, e.prototype.flip = function (t, i) {
            void 0 === t && (t = 1 === this._side ? 0 : 1), this._side = t, this.state.set(t, this.options.transition, i)
        }, e.prototype.getOptions = function () {
            return this.options
        }, e.prototype.setOptions = function (t) {
            void 0 !== t.transition && (this.options.transition = t.transition), void 0 !== t.cull && (this.options.cull = t.cull)
        }, e.prototype.linkFront = function (t) {
            return this.frontNode.link(t)
        }, e.prototype.linkBack = function (t) {
            return this.backNode.link(t)
        }, e.prototype.render = function (t) {
            var i = this.state.get();
            return void 0 !== t ? {transform: o.rotateY(Math.PI * i), target: t} : this.options.cull && !this.state.isActive() ? i ? this.backNode.render() : this.frontNode.render() : [
                {transform: o.rotateY(Math.PI * i), target: this.frontNode.render()},
                {transform: o.rotateY(Math.PI * (i + 1)), target: this.backNode.render()}
            ]
        }, s.exports = e
    }), define("famous-views/LightBox", ["require", "exports", "module", "famous/Matrix", "famous/Modifier", "famous/RenderNode", "famous/Utility"], function (t, i, s) {
        function e(t) {
            this.options = {inTransform: o.scale(.001, .001, .001), inOpacity: 0, inOrigin: [.5, .5], outTransform: o.scale(.001, .001, .001), outOpacity: 0, outOrigin: [.5, .5], showTransform: o.identity, showOpacity: 1, showOrigin: [.5, .5], inTransition: !0, outTransition: !0, overlap: !1}, t && this.setOptions(t), this._showing = !1, this.nodes = [], this.transforms = []
        }

        var o = t("famous/Matrix"), n = t("famous/Modifier"), r = t("famous/RenderNode"), a = t("famous/Utility");
        e.prototype.getOptions = function () {
            return this.options
        }, e.prototype.setOptions = function (t) {
            void 0 !== t.inTransform && (this.options.inTransform = t.inTransform), void 0 !== t.inOpacity && (this.options.inOpacity = t.inOpacity), void 0 !== t.inOrigin && (this.options.inOrigin = t.inOrigin), void 0 !== t.outTransform && (this.options.outTransform = t.outTransform), void 0 !== t.outOpacity && (this.options.outOpacity = t.outOpacity), void 0 !== t.outOrigin && (this.options.outOrigin = t.outOrigin), void 0 !== t.showTransform && (this.options.showTransform = t.showTransform), void 0 !== t.showOpacity && (this.options.showOpacity = t.showOpacity), void 0 !== t.showOrigin && (this.options.showOrigin = t.showOrigin), void 0 !== t.inTransition && (this.options.inTransition = t.inTransition), void 0 !== t.outTransition && (this.options.outTransition = t.outTransition), void 0 !== t.overlap && (this.options.overlap = t.overlap)
        }, e.prototype.show = function (t, i, s) {
            if (!t)return this.hide(s);
            if (i instanceof Function && (s = i, i = void 0), this._showing) {
                if (!this.options.overlap)return this.hide(this.show.bind(this, t, s)), void 0;
                this.hide()
            }
            this._showing = !0;
            var e = new n({transform: this.options.inTransform, opacity: this.options.inOpacity, origin: this.options.inOrigin}), o = new r;
            o.link(e).link(t), this.nodes.push(o), this.transforms.push(e);
            var h = s ? a.after(3, s) : void 0;
            i || (i = this.options.inTransition), e.setTransform(this.options.showTransform, i, h), e.setOpacity(this.options.showOpacity, i, h), e.setOrigin(this.options.showOrigin, i, h)
        }, e.prototype.hide = function (t, i) {
            if (this._showing) {
                this._showing = !1, t instanceof Function && (i = t, t = void 0);
                var s = this.nodes[this.nodes.length - 1], e = this.transforms[this.transforms.length - 1], o = a.after(3, function () {
                    this.nodes.splice(this.nodes.indexOf(s), 1), this.transforms.splice(this.transforms.indexOf(e), 1), i && i.call(this)
                }.bind(this));
                t || (t = this.options.outTransition), e.setTransform(this.options.outTransform, t, o), e.setOpacity(this.options.outOpacity, t, o), e.setOrigin(this.options.outOrigin, t, o)
            }
        }, e.prototype.render = function () {
            for (var t = [], i = 0; i < this.nodes.length; i++)t.push(this.nodes[i].render());
            return t
        }, s.exports = e
    }), define("famous-views/ScrollContainer", ["require", "exports", "module", "famous/ContainerSurface", "famous/EventHandler", "./Scrollview", "famous/Utility"], function (t, i, s) {
        function e(t) {
            this.options = Object.create(e.DEFAULT_OPTIONS), this.surface = new o(this.options.look), this.scrollview = new r(this.options.feel), t && this.setOptions(t), this.surface.link(this.scrollview), n.setInputHandler(this, this.surface), n.setOutputHandler(this, this.surface), this.pipe(this.scrollview)
        }

        var o = t("famous/ContainerSurface"), n = t("famous/EventHandler"), r = t("./Scrollview"), a = t("famous/Utility");
        e.DEFAULT_OPTIONS = {look: void 0, feel: {direction: a.Direction.X}}, e.prototype.setOptions = function (t) {
            void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look)), void 0 !== t.feel && (this.options.feel = t.feel, this.scrollview.setOptions(this.options.feel))
        }, e.prototype.sequenceFrom = function () {
            return this.scrollview.sequenceFrom.apply(this.scrollview, arguments)
        }, e.prototype.render = function () {
            return this.surface.render.apply(this.surface, arguments)
        }, s.exports = e
    }), define("famous-views/SequentialLayout", ["require", "exports", "module", "famous/Matrix", "famous/Transitionable", "famous/Modifier", "famous/RenderNode", "famous/ViewSequence", "famous/Utility"], function (t, i, s) {
        function e(t) {
            this.items = void 0, this._size = void 0, this.options = Object.create(e.DEFAULT_OPTIONS), t && this.setOptions(t)
        }

        var o = t("famous/Matrix");
        t("famous/Transitionable"), t("famous/Modifier"), t("famous/RenderNode");
        var n = t("famous/ViewSequence"), r = t("famous/Utility");
        e.DEFAULT_OPTIONS = {direction: r.Direction.X, defaultItemSize: [50, 50], itemSpacing: 0}, e.prototype.getSize = function () {
            return this._size || this.render(), this._size
        }, e.prototype.sequenceFrom = function (t) {
            t instanceof Array && (t = new n(t)), this.items = t
        }, e.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.defaultItemSize && (this.options.defaultItemSize = t.defaultItemSize), void 0 !== t.itemSpacing && (this.options.itemSpacing = t.itemSpacing), void 0 !== t.transition && (this.options.transition = t.transition)
        }, e.prototype.render = function () {
            for (var t = 0, i = 0, s = this.options.direction == r.Direction.X ? 0 : 1, e = this.options.direction == r.Direction.X ? 1 : 0, n = this.items, a = []; n;) {
                var h = n.get();
                t && (t += this.options.itemSpacing);
                var u;
                h && h.getSize && (u = h.getSize()), u || (u = this.options.defaultItemSize), i && u[e] !== !0 && (i = Math.max(i, u[e]));
                var p = this.options.direction == r.Direction.X ? o.translate(t, 0) : o.translate(0, t);
                a.push({transform: p, target: h.render()}), u[s] && u[s] !== !0 && (t += u[s]), n = n.getNext()
            }
            return i || (i = void 0), this._size || (this._size = [0, 0]), this._size[s] = t, this._size[e] = i, {group: !0, target: a}
        }, s.exports = e
    }), define("famous-views/Shaper", ["require", "exports", "module", "famous/RenderNode", "famous/Matrix", "famous/Modifier", "famous/Utility"], function (t, i, s) {
        function e(t) {
            this.nodes = [], this.transforms = [], this.defaultTransition = {duration: 1e3, curve: "easeInOut"};
            for (var i in t)this.side(i).from(t[i])
        }

        var o = t("famous/RenderNode"), n = t("famous/Matrix"), r = t("famous/Modifier"), a = t("famous/Utility");
        e.prototype.side = function (t) {
            return this.nodes[t] || (this.transforms[t] = new r, this.transforms[t].setDefaultTransition(this.defaultTransition), this.nodes[t] = new o(this.transforms[t])), this.nodes[t]
        }, e.prototype.halt = function (t) {
            this.transforms[t].halt()
        }, e.prototype.haltSet = function (t) {
            for (var i = 0; i < t.length; i++)this.halt(i)
        }, e.prototype.haltAll = function () {
            this.haltSet(this.all())
        }, e.prototype.set = function (t, i, s, e) {
            return this.transforms[t] ? (this.transforms[t].setTransform(i, s, e), void 0) : (e && e(), void 0)
        }, e.prototype.setShape = function (t, i, s, e) {
            for (var o = "function" == typeof i ? i : function (t) {
                return i[t]
            }, n = e ? a.after(t.length, e) : void 0, r = 0; r < t.length; r++)this.set(t[r], o(r), s, n)
        }, e.prototype.setShapeAll = function (t, i, s) {
            this.setShape(this.all(), t, i, s)
        }, e.prototype.modify = function (t, i, s, e) {
            var o = n.multiply(this.transforms[t].getFinalTransform(), i);
            this.set(t, o, s, e)
        }, e.prototype.modifySet = function (t, i, s, e) {
            for (var o = e ? a.after(t.length, e) : void 0, n = 0; n < t.length; n++)this.modify(t[n], i, s, o)
        }, e.prototype.modifyAll = function (t, i, s) {
            this.modify(this.all(), t, i, s)
        }, e.prototype.setOpacity = function (t, i, s, e) {
            this.transforms[t].setOpacity(i, s, e)
        }, e.prototype.setOpacitySet = function (t, i, s, e) {
            for (var o = e ? a.after(t.length, e) : void 0, n = 0; n < t.length; n++)this.setOpacity(t[n], i, s, o)
        }, e.prototype.setOpacityAll = function (t, i, s) {
            this.setOpacitySet(this.all(), t, i, s)
        }, e.prototype.all = function () {
            var t = [];
            for (var i in this.nodes)t.push(i);
            return t
        }, e.prototype.getTransform = function (t) {
            return this.transforms[t].getTransform()
        }, e.prototype.getOpacity = function (t) {
            return this.transforms[t].getOpacity()
        }, e.prototype.isMoving = function (t) {
            return this.transforms[t].isMoving()
        }, e.prototype.render = function () {
            for (var t = [], i = 0; i < this.nodes.length; i++)t[i] = this.nodes[i].execute();
            return t
        }, s.exports = e
    }), define("main", ["require", "exports", "module", "app/ID", "app/SceneController", "app/SceneTransitions", "core/ExpandingSurface", "core/GA", "core/Interface", "core/NextButton", "core/Signup", "core/SignupContent", "core/SignupData", "core/SignupError", "core/Submit", "core/UI", "famous/CanvasSurface", "famous/ContainerSurface", "famous/Context", "famous/ElementAllocator", "famous/Engine", "famous/Entity", "famous/EventArbiter", "famous/EventHandler", "famous/Group", "famous/ImageSurface", "famous/Matrix", "famous/Modifier", "famous/MultipleTransition", "famous/OptionsManager", "famous/RenderNode", "famous/Scene", "famous/SceneCompiler", "famous/SpecParser", "famous/Surface", "famous/Timer", "famous/Transitionable", "famous/TweenTransition", "famous/Utility", "famous/VideoSurface", "famous/View", "famous/ViewSequence", "famous/WebGLSurface", "famous-animation/Animation", "famous-animation/AnimationEngine", "famous-animation/CubicBezier", "famous-animation/Easing", "famous-animation/GenericAnimation", "famous-animation/Idle", "famous-animation/PiecewiseCubicBezier", "famous-animation/RegisterEasing", "famous-animation/Sequence", "famous-animation/Timer", "famous-audio/BufferLoader", "famous-audio/SoundPlayer", "famous-color/Color", "famous-color/ColorPalette", "famous-color/ColorPalettes", "famous-css/StyleManager", "famous-css/StyleSheet", "famous-generative/Axis", "famous-generative/Box", "famous-generative/DebugTriangle", "famous-generative/EasyCamera", "famous-generative/Integrator", "famous-generative/Line", "famous-generative/Particle", "famous-generative/SimplexNoise", "famous-generative/Touch", "famous-generative/TouchVisualizer", "famous-generative/Triangle", "famous-generative/Triangle3D", "famous-generative/Triangle3DOLD", "famous-gl/Effects/BlackAndWhiteEffect", "famous-gl/Effects/CartesianToPolarEffect", "famous-gl/Effects/DuoToneEffect", "famous-gl/Effects/ExposureEffect", "famous-gl/Effects/InvertColorEffect", "famous-gl/Effects/LightTunnelEffect", "famous-gl/Effects/LomoEffect", "famous-gl/Effects/PixelateEffect", "famous-gl/Effects/PolarToCartesianEffect", "famous-gl/Effects/ScanlineEffect", "famous-gl/Effects/Technicolor1Effect", "famous-gl/Effects/Technicolor2Effect", "famous-gl/Effects/Technicolor3Effect", "famous-gl/Effects/TwirlEffect", "famous-gl/Effects/VignetteEffect", "famous-gl/Primitives/ArcPrimitive", "famous-gl/Primitives/BoxPrimitive", "famous-gl/Primitives/ConePrimitive", "famous-gl/Primitives/CylinderPrimitive", "famous-gl/Primitives/EllipsePrimitive", "famous-gl/Primitives/IcoSpherePrimitive", "famous-gl/Primitives/ParametricPrimitive", "famous-gl/Primitives/PlanePrimitive", "famous-gl/Primitives/SpherePrimitive", "famous-gl/Primitives/TorusPrimitive", "famous-gl/ShaderFunctions/Map", "famous-gl/ShaderFunctions/Noise2D", "famous-gl/ShaderFunctions/Noise3D", "famous-gl/ShaderFunctions/Noise4D", "famous-gl/Camera", "famous-gl/Effect", "famous-gl/Fbo", "famous-gl/Geometry", "famous-gl/Light", "famous-gl/Material", "famous-gl/Mesh", "famous-gl/Primitive", "famous-gl/Renderer", "famous-gl/Scene", "famous-gl/Shader", "famous-gl/ShaderMaker", "famous-gl/Texture", "famous-math/Quaternion", "famous-math/Vector", "famous-physics/bodies/Body", "famous-physics/bodies/Circle", "famous-physics/bodies/Particle", "famous-physics/bodies/Rectangle", "famous-physics/constraints/Collision", "famous-physics/constraints/CollisionJacobian", "famous-physics/constraints/Constraint", "famous-physics/constraints/Curve", "famous-physics/constraints/Distance", "famous-physics/constraints/Distance1D", "famous-physics/constraints/Rod", "famous-physics/constraints/Rope", "famous-physics/constraints/StiffSpring", "famous-physics/constraints/Surface", "famous-physics/constraints/Wall", "famous-physics/constraints/Walls", "famous-physics/constraints/joint", "famous-physics/forces/Drag", "famous-physics/forces/Force", "famous-physics/forces/Repulsion", "famous-physics/forces/Spring", "famous-physics/forces/TorqueSpring", "famous-physics/forces/VectorField", "famous-physics/integrator/SymplecticEuler", "famous-physics/integrator/verlet", "famous-physics/math/GaussSeidel", "famous-physics/math/Quaternion", "famous-physics/math/Random", "famous-physics/math/Vector", "famous-physics/math/matrix", "famous-physics/math/vectorArray", "famous-physics/utils/PhysicsTransition", "famous-physics/utils/PhysicsTransition2", "famous-physics/utils/SpringTransition", "famous-physics/utils/StiffSpringTransition", "famous-physics/utils/WallTransition", "famous-physics/PhysicsEngine", "famous-scene/GLScene", "famous-scene/Scene", "famous-scene/SceneController", "famous-scene/SceneTransitions", "famous-scene/Transitions", "famous-sync/FastClick", "famous-sync/GenericSync", "famous-sync/MouseSync", "famous-sync/PinchSync", "famous-sync/RotateSync", "famous-sync/ScaleSync", "famous-sync/ScrollSync", "famous-sync/TouchSync", "famous-sync/TouchTracker", "famous-sync/TwoFingerSync", "famous-ui/Buttons/ButtonBase", "famous-ui/Buttons/RotateButton", "famous-ui/Buttons/SpringButton", "famous-ui/Buttons/SpringButton.ui", "famous-ui/ColorPicker/AlphaPicker", "famous-ui/ColorPicker/CanvasPicker", "famous-ui/ColorPicker/ColorButton", "famous-ui/ColorPicker/ColorPicker", "famous-ui/ColorPicker/GradientPicker", "famous-ui/ColorPicker/HuePicker", "famous-ui/Dropdown/Dropdown", "famous-ui/Dropdown/DropdownItem", "famous-ui/Easing/CanvasDrawer", "famous-ui/Easing/EasingBool", "famous-ui/Easing/EasingVisualizer", "famous-ui/Easing/MultiEasingToggle", "famous-ui/Text/Label", "famous-ui/Toggles/BoolToggle", "famous-ui/Toggles/MultiBoolToggle", "famous-ui/AutoUI", "famous-ui/PanelScrollview", "famous-ui/Slider", "famous-utils/FormatTime", "famous-utils/KeyCodes", "famous-utils/NoiseImage", "famous-utils/Time", "famous-utils/TimeAgo", "famous-utils/Utils", "famous-views/Accordion", "famous-views/ControlSet", "famous-views/EnergyHelper", "famous-views/Flip", "famous-views/LightBox", "famous-views/ScrollContainer", "famous-views/Scrollview", "famous-views/SequentialLayout", "famous-views/Shaper"], function (t, i, s) {
        var e = function (i) {
            i.call(this, t)
        };
        e.App = {}, e.App.ID = t("app/ID"), e.App.SceneController = t("app/SceneController"), e.App.SceneTransitions = t("app/SceneTransitions"), e.Core = {}, e.Core.ExpandingSurface = t("core/ExpandingSurface"), e.Core.GA = t("core/GA"), e.Core.Interface = t("core/Interface"), e.Core.NextButton = t("core/NextButton"), e.Core.Signup = t("core/Signup"), e.Core.SignupContent = t("core/SignupContent"), e.Core.SignupData = t("core/SignupData"), e.Core.SignupError = t("core/SignupError"), e.Core.Submit = t("core/Submit"), e.Core.UI = t("core/UI"), e.Famous = {}, e.Famous.CanvasSurface = t("famous/CanvasSurface"), e.Famous.ContainerSurface = t("famous/ContainerSurface"), e.Famous.Context = t("famous/Context"), e.Famous.ElementAllocator = t("famous/ElementAllocator"), e.Famous.Engine = t("famous/Engine"), e.Famous.Entity = t("famous/Entity"), e.Famous.EventArbiter = t("famous/EventArbiter"), e.Famous.EventHandler = t("famous/EventHandler"), e.Famous.Group = t("famous/Group"), e.Famous.ImageSurface = t("famous/ImageSurface"), e.Famous.Matrix = t("famous/Matrix"), e.Famous.Modifier = t("famous/Modifier"), e.Famous.MultipleTransition = t("famous/MultipleTransition"), e.Famous.OptionsManager = t("famous/OptionsManager"), e.Famous.RenderNode = t("famous/RenderNode"), e.Famous.Scene = t("famous/Scene"), e.Famous.SceneCompiler = t("famous/SceneCompiler"), e.Famous.SpecParser = t("famous/SpecParser"), e.Famous.Surface = t("famous/Surface"), e.Famous.Timer = t("famous/Timer"), e.Famous.Transitionable = t("famous/Transitionable"), e.Famous.TweenTransition = t("famous/TweenTransition"), e.Famous.Utility = t("famous/Utility"), e.Famous.VideoSurface = t("famous/VideoSurface"), e.Famous.View = t("famous/View"), e.Famous.ViewSequence = t("famous/ViewSequence"), e.Famous.WebGLSurface = t("famous/WebGLSurface"), e.FamousAnimation = {}, e.FamousAnimation.Animation = t("famous-animation/Animation"), e.FamousAnimation.AnimationEngine = t("famous-animation/AnimationEngine"), e.FamousAnimation.CubicBezier = t("famous-animation/CubicBezier"), e.FamousAnimation.Easing = t("famous-animation/Easing"), e.FamousAnimation.GenericAnimation = t("famous-animation/GenericAnimation"), e.FamousAnimation.Idle = t("famous-animation/Idle"), e.FamousAnimation.PiecewiseCubicBezier = t("famous-animation/PiecewiseCubicBezier"), e.FamousAnimation.RegisterEasing = t("famous-animation/RegisterEasing"), e.FamousAnimation.Sequence = t("famous-animation/Sequence"), e.FamousAnimation.Timer = t("famous-animation/Timer"), e.FamousAudio = {}, e.FamousAudio.BufferLoader = t("famous-audio/BufferLoader"), e.FamousAudio.SoundPlayer = t("famous-audio/SoundPlayer"), e.FamousColor = {}, e.FamousColor.Color = t("famous-color/Color"), e.FamousColor.ColorPalette = t("famous-color/ColorPalette"), e.FamousColor.ColorPalettes = t("famous-color/ColorPalettes"), e.FamousCss = {}, e.FamousCss.StyleManager = t("famous-css/StyleManager"), e.FamousCss.StyleSheet = t("famous-css/StyleSheet"), e.FamousGenerative = {}, e.FamousGenerative.Axis = t("famous-generative/Axis"), e.FamousGenerative.Box = t("famous-generative/Box"), e.FamousGenerative.DebugTriangle = t("famous-generative/DebugTriangle"), e.FamousGenerative.EasyCamera = t("famous-generative/EasyCamera"), e.FamousGenerative.Integrator = t("famous-generative/Integrator"), e.FamousGenerative.Line = t("famous-generative/Line"), e.FamousGenerative.Particle = t("famous-generative/Particle"), e.FamousGenerative.SimplexNoise = t("famous-generative/SimplexNoise"), e.FamousGenerative.Touch = t("famous-generative/Touch"), e.FamousGenerative.TouchVisualizer = t("famous-generative/TouchVisualizer"), e.FamousGenerative.Triangle = t("famous-generative/Triangle"), e.FamousGenerative.Triangle3D = t("famous-generative/Triangle3D"), e.FamousGenerative.Triangle3DOLD = t("famous-generative/Triangle3DOLD"), e.FamousGl = {}, e.FamousGl.Effects_BlackAndWhiteEffect = t("famous-gl/Effects/BlackAndWhiteEffect"), e.FamousGl.Effects_CartesianToPolarEffect = t("famous-gl/Effects/CartesianToPolarEffect"), e.FamousGl.Effects_DuoToneEffect = t("famous-gl/Effects/DuoToneEffect"), e.FamousGl.Effects_ExposureEffect = t("famous-gl/Effects/ExposureEffect"), e.FamousGl.Effects_InvertColorEffect = t("famous-gl/Effects/InvertColorEffect"), e.FamousGl.Effects_LightTunnelEffect = t("famous-gl/Effects/LightTunnelEffect"), e.FamousGl.Effects_LomoEffect = t("famous-gl/Effects/LomoEffect"), e.FamousGl.Effects_PixelateEffect = t("famous-gl/Effects/PixelateEffect"), e.FamousGl.Effects_PolarToCartesianEffect = t("famous-gl/Effects/PolarToCartesianEffect"), e.FamousGl.Effects_ScanlineEffect = t("famous-gl/Effects/ScanlineEffect"), e.FamousGl.Effects_Technicolor1Effect = t("famous-gl/Effects/Technicolor1Effect"), e.FamousGl.Effects_Technicolor2Effect = t("famous-gl/Effects/Technicolor2Effect"), e.FamousGl.Effects_Technicolor3Effect = t("famous-gl/Effects/Technicolor3Effect"), e.FamousGl.Effects_TwirlEffect = t("famous-gl/Effects/TwirlEffect"), e.FamousGl.Effects_VignetteEffect = t("famous-gl/Effects/VignetteEffect"), e.FamousGl.Primitives_ArcPrimitive = t("famous-gl/Primitives/ArcPrimitive"), e.FamousGl.Primitives_BoxPrimitive = t("famous-gl/Primitives/BoxPrimitive"), e.FamousGl.Primitives_ConePrimitive = t("famous-gl/Primitives/ConePrimitive"), e.FamousGl.Primitives_CylinderPrimitive = t("famous-gl/Primitives/CylinderPrimitive"), e.FamousGl.Primitives_EllipsePrimitive = t("famous-gl/Primitives/EllipsePrimitive"), e.FamousGl.Primitives_IcoSpherePrimitive = t("famous-gl/Primitives/IcoSpherePrimitive"), e.FamousGl.Primitives_ParametricPrimitive = t("famous-gl/Primitives/ParametricPrimitive"), e.FamousGl.Primitives_PlanePrimitive = t("famous-gl/Primitives/PlanePrimitive"), e.FamousGl.Primitives_SpherePrimitive = t("famous-gl/Primitives/SpherePrimitive"), e.FamousGl.Primitives_TorusPrimitive = t("famous-gl/Primitives/TorusPrimitive"), e.FamousGl.ShaderFunctions_Map = t("famous-gl/ShaderFunctions/Map"), e.FamousGl.ShaderFunctions_Noise2D = t("famous-gl/ShaderFunctions/Noise2D"), e.FamousGl.ShaderFunctions_Noise3D = t("famous-gl/ShaderFunctions/Noise3D"), e.FamousGl.ShaderFunctions_Noise4D = t("famous-gl/ShaderFunctions/Noise4D"), e.FamousGl.Camera = t("famous-gl/Camera"), e.FamousGl.Effect = t("famous-gl/Effect"), e.FamousGl.Fbo = t("famous-gl/Fbo"), e.FamousGl.Geometry = t("famous-gl/Geometry"), e.FamousGl.Light = t("famous-gl/Light"), e.FamousGl.Material = t("famous-gl/Material"), e.FamousGl.Mesh = t("famous-gl/Mesh"), e.FamousGl.Primitive = t("famous-gl/Primitive"), e.FamousGl.Renderer = t("famous-gl/Renderer"), e.FamousGl.Scene = t("famous-gl/Scene"), e.FamousGl.Shader = t("famous-gl/Shader"), e.FamousGl.ShaderMaker = t("famous-gl/ShaderMaker"), e.FamousGl.Texture = t("famous-gl/Texture"), e.FamousMath = {}, e.FamousMath.Quaternion = t("famous-math/Quaternion"), e.FamousMath.Vector = t("famous-math/Vector"), e.FamousPhysics = {}, e.FamousPhysics.Bodies_Body = t("famous-physics/bodies/Body"), e.FamousPhysics.Bodies_Circle = t("famous-physics/bodies/Circle"), e.FamousPhysics.Bodies_Particle = t("famous-physics/bodies/Particle"), e.FamousPhysics.Bodies_Rectangle = t("famous-physics/bodies/Rectangle"), e.FamousPhysics.Constraints_Collision = t("famous-physics/constraints/Collision"), e.FamousPhysics.Constraints_CollisionJacobian = t("famous-physics/constraints/CollisionJacobian"), e.FamousPhysics.Constraints_Constraint = t("famous-physics/constraints/Constraint"), e.FamousPhysics.Constraints_Curve = t("famous-physics/constraints/Curve"), e.FamousPhysics.Constraints_Distance = t("famous-physics/constraints/Distance"), e.FamousPhysics.Constraints_Distance1D = t("famous-physics/constraints/Distance1D"), e.FamousPhysics.Constraints_Rod = t("famous-physics/constraints/Rod"), e.FamousPhysics.Constraints_Rope = t("famous-physics/constraints/Rope"), e.FamousPhysics.Constraints_StiffSpring = t("famous-physics/constraints/StiffSpring"), e.FamousPhysics.Constraints_Surface = t("famous-physics/constraints/Surface"), e.FamousPhysics.Constraints_Wall = t("famous-physics/constraints/Wall"), e.FamousPhysics.Constraints_Walls = t("famous-physics/constraints/Walls"), e.FamousPhysics.Constraints_joint = t("famous-physics/constraints/joint"), e.FamousPhysics.Forces_Drag = t("famous-physics/forces/Drag"), e.FamousPhysics.Forces_Force = t("famous-physics/forces/Force"), e.FamousPhysics.Forces_Repulsion = t("famous-physics/forces/Repulsion"), e.FamousPhysics.Forces_Spring = t("famous-physics/forces/Spring"), e.FamousPhysics.Forces_TorqueSpring = t("famous-physics/forces/TorqueSpring"), e.FamousPhysics.Forces_VectorField = t("famous-physics/forces/VectorField"), e.FamousPhysics.Integrator_SymplecticEuler = t("famous-physics/integrator/SymplecticEuler"), e.FamousPhysics.Integrator_verlet = t("famous-physics/integrator/verlet"), e.FamousPhysics.Math_GaussSeidel = t("famous-physics/math/GaussSeidel"), e.FamousPhysics.Math_Quaternion = t("famous-physics/math/Quaternion"), e.FamousPhysics.Math_Random = t("famous-physics/math/Random"), e.FamousPhysics.Math_Vector = t("famous-physics/math/Vector"), e.FamousPhysics.Math_matrix = t("famous-physics/math/matrix"), e.FamousPhysics.Math_vectorArray = t("famous-physics/math/vectorArray"), e.FamousPhysics.Utils_PhysicsTransition = t("famous-physics/utils/PhysicsTransition"), e.FamousPhysics.Utils_PhysicsTransition2 = t("famous-physics/utils/PhysicsTransition2"), e.FamousPhysics.Utils_SpringTransition = t("famous-physics/utils/SpringTransition"), e.FamousPhysics.Utils_StiffSpringTransition = t("famous-physics/utils/StiffSpringTransition"), e.FamousPhysics.Utils_WallTransition = t("famous-physics/utils/WallTransition"), e.FamousPhysics.PhysicsEngine = t("famous-physics/PhysicsEngine"), e.FamousScene = {}, e.FamousScene.GLScene = t("famous-scene/GLScene"), e.FamousScene.Scene = t("famous-scene/Scene"), e.FamousScene.SceneController = t("famous-scene/SceneController"), e.FamousScene.SceneTransitions = t("famous-scene/SceneTransitions"), e.FamousScene.Transitions = t("famous-scene/Transitions"), e.FamousSync = {}, e.FamousSync.FastClick = t("famous-sync/FastClick"), e.FamousSync.GenericSync = t("famous-sync/GenericSync"), e.FamousSync.MouseSync = t("famous-sync/MouseSync"), e.FamousSync.PinchSync = t("famous-sync/PinchSync"), e.FamousSync.RotateSync = t("famous-sync/RotateSync"), e.FamousSync.ScaleSync = t("famous-sync/ScaleSync"), e.FamousSync.ScrollSync = t("famous-sync/ScrollSync"), e.FamousSync.TouchSync = t("famous-sync/TouchSync"), e.FamousSync.TouchTracker = t("famous-sync/TouchTracker"), e.FamousSync.TwoFingerSync = t("famous-sync/TwoFingerSync"), e.FamousUi = {}, e.FamousUi.Buttons_ButtonBase = t("famous-ui/Buttons/ButtonBase"), e.FamousUi.Buttons_RotateButton = t("famous-ui/Buttons/RotateButton"), e.FamousUi.Buttons_SpringButton = t("famous-ui/Buttons/SpringButton"), e.FamousUi.Buttons_SpringButton.ui = t("famous-ui/Buttons/SpringButton.ui"), e.FamousUi.ColorPicker_AlphaPicker = t("famous-ui/ColorPicker/AlphaPicker"), e.FamousUi.ColorPicker_CanvasPicker = t("famous-ui/ColorPicker/CanvasPicker"), e.FamousUi.ColorPicker_ColorButton = t("famous-ui/ColorPicker/ColorButton"), e.FamousUi.ColorPicker_ColorPicker = t("famous-ui/ColorPicker/ColorPicker"), e.FamousUi.ColorPicker_GradientPicker = t("famous-ui/ColorPicker/GradientPicker"), e.FamousUi.ColorPicker_HuePicker = t("famous-ui/ColorPicker/HuePicker"), e.FamousUi.Dropdown_Dropdown = t("famous-ui/Dropdown/Dropdown"), e.FamousUi.Dropdown_DropdownItem = t("famous-ui/Dropdown/DropdownItem"), e.FamousUi.Easing_CanvasDrawer = t("famous-ui/Easing/CanvasDrawer"), e.FamousUi.Easing_EasingBool = t("famous-ui/Easing/EasingBool"), e.FamousUi.Easing_EasingVisualizer = t("famous-ui/Easing/EasingVisualizer"), e.FamousUi.Easing_MultiEasingToggle = t("famous-ui/Easing/MultiEasingToggle"), e.FamousUi.Text_Label = t("famous-ui/Text/Label"), e.FamousUi.Toggles_BoolToggle = t("famous-ui/Toggles/BoolToggle"), e.FamousUi.Toggles_MultiBoolToggle = t("famous-ui/Toggles/MultiBoolToggle"), e.FamousUi.AutoUI = t("famous-ui/AutoUI"), e.FamousUi.PanelScrollview = t("famous-ui/PanelScrollview"), e.FamousUi.Slider = t("famous-ui/Slider"), e.FamousUtils = {}, e.FamousUtils.FormatTime = t("famous-utils/FormatTime"), e.FamousUtils.KeyCodes = t("famous-utils/KeyCodes"), e.FamousUtils.NoiseImage = t("famous-utils/NoiseImage"), e.FamousUtils.Time = t("famous-utils/Time"), e.FamousUtils.TimeAgo = t("famous-utils/TimeAgo"), e.FamousUtils.Utils = t("famous-utils/Utils"), e.FamousViews = {}, e.FamousViews.Accordion = t("famous-views/Accordion"), e.FamousViews.ControlSet = t("famous-views/ControlSet"), e.FamousViews.EnergyHelper = t("famous-views/EnergyHelper"), e.FamousViews.Flip = t("famous-views/Flip"), e.FamousViews.LightBox = t("famous-views/LightBox"), e.FamousViews.ScrollContainer = t("famous-views/ScrollContainer"), e.FamousViews.Scrollview = t("famous-views/Scrollview"), e.FamousViews.SequentialLayout = t("famous-views/SequentialLayout"), e.FamousViews.Shaper = t("famous-views/Shaper"), s.exports = e
    }), require(["lib/classList", "lib/functionPrototypeBind", "lib/requestAnimationFrame", "lib/text", "main"]), require("main")
});