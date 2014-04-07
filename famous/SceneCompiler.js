define(
	"famous/SceneCompiler", 
	[
		"require", 
		"exports", 
		"module", 
		"./Matrix"
	], 
	function (t, i, e) 
	{
        function s(t) {
            var i = {
                varCounter: 0
            }, e = [],
                s = h.call(i, t, e);
            return e.push("return " + s + ";"), new Function(["FT", "RenderNode", "RN_link", "RN_include", "id", "transforms"], e.join("\n"))
        }

        function o(t, i) {
            return "var " + t + " = " + i + ";"
        }

        function n(t, i) {
            return "id." + t + " = " + i + ";"
        }

        function r(t) {
            return "transforms.push(" + t + ");"
        }

        function a() {
            return "_" + this.varCounter++
        }

        function h(t, i) {
            var e;
            if (t instanceof Array) e = u.call(this, t, i);
            else if (e = a.call(this), t.target) {
                var s = h.call(this, t.target, i),
                    c = p.call(this, t, i);
                i.push(o(e, "new RenderNode(" + c + ")")), i.push("RN_link.call(" + e + ", " + s + ");"), t.id && i.push(n(t.id, c)), i.push(r(c))
            } else t.id && (i.push(o(e, "new RenderNode()")), i.push(n(t.id, e)));
            return e
        }

        function u(t, i) {
            var e = a.call(this);
            i.push(o(e, "new RenderNode()"));
            for (var s = 0; s < t.length; s++) {
                var n = h.call(this, t[s], i);
                n && i.push("RN_include.call(" + e + ", " + n + ");")
            }
            return e
        }

        function p(t, i) {
            var e = t.transform,
                s = t.opacity,
                n = t.origin,
                r = t.size;
            t.target;
            var h = l.identity;
            if (e instanceof Array)
                if (16 == e.length && "number" == typeof e[0]) h = e;
                else
                    for (var u = 0; u < e.length; u++) h = l.multiply(h, c(e[u]));
                else e instanceof Object && (h = c(e));
            var p = a.call(this),
                f = "[" + h.join(",") + "]",
                d = n ? "[" + n.join(",") + "]" : void 0,
                m = r ? "[" + r.join(",") + "]" : void 0;
            return i.push(o(p, "new FT(" + f + "," + s + "," + d + "," + m + ")")), p
        }

        function c(t) {
            for (var i in f)
                if (i in t) {
                    var e = t[i];
                    return e instanceof Array || (e = [e]), f[i].apply(this, e)
                }
        }

        var l = t("./Matrix"),
            f = {
                translate: l.translate,
                rotate: l.rotate,
                rotateX: l.rotateX,
                rotateY: l.rotateY,
                rotateZ: l.rotateZ,
                rotateAxis: l.rotateAxis,
                scale: l.scale,
                skew: l.skew,
                matrix3d: function () {
                    return arguments
                }
            };
        e.exports = {
            compile: s
        }
    }
); 