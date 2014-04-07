/**
 * almond 0.2.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

define("lib/almond", function () {}), "undefined" == typeof document || "classList" in document.createElement("a") || function (t) {
        var i = "classList",
            e = "prototype",
            s = (t.HTMLElement || t.Element)[e],
            o = Object,
            n = String[e].trim || function () {
                return this.replace(/^\s+|\s+$/g, "")
            }, r = Array[e].indexOf || function (t) {
                for (var i = 0, e = this.length; e > i; i++)
                    if (i in this && this[i] === t) return i;
                return -1
            }, a = function (t, i) {
                this.name = t, this.code = DOMException[t], this.message = i
            }, h = function (t, i) {
                if ("" === i) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                if (/\s/.test(i)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                return r.call(t, i)
            }, u = function (t) {
                for (var i = n.call(t.className), e = i ? i.split(/\s+/) : [], s = 0, o = e.length; o > s; s++) this.push(e[s]);
                this._updateClassName = function () {
                    t.className = this.toString()
                }
            }, p = u[e] = [],
            c = function () {
                return new u(this)
            };
        if (a[e] = Error[e], p.item = function (t) {
            return this[t] || null
        }, p.contains = function (t) {
            return t += "", -1 !== h(this, t)
        }, p.add = function (t) {
            t += "", -1 === h(this, t) && (this.push(t), this._updateClassName())
        }, p.remove = function (t) {
            t += "";
            var i = h(this, t); - 1 !== i && (this.splice(i, 1), this._updateClassName())
        }, p.toggle = function (t) {
            t += "", -1 === h(this, t) ? this.add(t) : this.remove(t)
        }, p.toString = function () {
            return this.join(" ")
        }, o.defineProperty) {
            var l = {
                get: c,
                enumerable: !0,
                configurable: !0
            };
            try {
                o.defineProperty(s, i, l)
            } catch (f) {
                -2146823252 === f.number && (l.enumerable = !1, o.defineProperty(s, i, l))
            }
        } else o[e].__defineGetter__ && s.__defineGetter__(i, c)
    }(self);
