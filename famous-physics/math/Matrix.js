define(
    "famous-physics/math/matrix", 
    [
        "require", 
        "exports", 
        "module"
    ], 
    function (require, exports, module) 
    {
        function Matrix(t, i, e, s) {
            this.nRows = t, this.nCols = i, this.values = e || [
                []
            ], s && this.loop(s)
        }

        Matrix.prototype = {
            loop: function (t) {
                for (var i = this.values, e = 0; e < this.nRows; e++) {
                    i[e] = [];
                    for (var s = 0; s < this.nCols; s++) i[e][s] = t(e, s)
                }
                return this
            },
            set: function (t) {
                return this.values = t, this
            },
            create: function (t) {
                return this.loop(t)
            },
            identity: function () {
                return this.loop(function (t, i) {
                    return t == i ? 1 : 0
                })
            },
            print: function () {
                for (var row = 0; row < this.nRows; row++) {
                    for (var str = "console.log(", col = 0; col < this.nCols; col++) str += "this.values[" + row + "][" + col + "].toFixed(1)", col < this.nCols - 1 && (str += ",");
                    str += ")", eval(str)
                }
            },
            rightMult: function (t, i) {
                t.nRows != this.nCols && console.warn("cant multiply");
                for (var e = this.values, s = t.values, o = this.nRows, n = t.nCols, r = [], a = 0; o > a; a++) {
                    r[a] = [];
                    for (var h = 0; n > h; h++) {
                        for (var u = 0, p = 0; p < this.nCols; p++) u += e[a][p] * s[p][h];
                        r[a][h] = u
                    }
                }
                return i ? i.set(r) : new Matrix(o, n).set(r)
            },
            vMult: function (t) {
                for (var i = t.length, e = [], s = 0; s < this.nRows; s++) {
                    for (var o = 0, n = 0; i > n; n++) o += this.values[s][n] * t[n];
                    e[s] = o
                }
                return e
            },
            diag: function (t) {
                var i = function (i, e) {
                    return i == e ? t[i] : 0
                };
                return this.loop(i)
            },
            transpose: function (t) {
                var i = function (t, i) {
                    return this.values[i][t]
                }.bind(this);
                return t ? t.loop(i) : new Matrix(this.nCols, this.nRows, [
                    []
                ], i)
            }
        }, module.exports = Matrix
    }
); 