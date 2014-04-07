define(
	"famous-physics/bodies/Circle", 
	[
		"require", 
		"exports", 
		"module", 
		"./Body"
	], function (t, i, e) 
	{
        function s(t) {
            o.call(this, t), t = t || {}, this.r = t.r || 0, this.size = [2 * this.r, 2 * this.r];
            var i = this.r,
                e = this.m;
            this.I = [
                [.25 * e * i * i, 0, 0],
                [0, .25 * e * i * i, 0],
                [0, 0, .5 * e * i * i]
            ], this.Iinv = [
                [4 / (e * i * i), 0, 0],
                [0, 4 / (e * i * i), 0],
                [0, 0, 2 / (e * i * i)]
            ]
        }

        var o = t("./Body");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s
    }
);