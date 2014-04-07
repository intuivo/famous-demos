define(
	"famous-physics/bodies/Rectangle", 
	[
		"require", 
		"exports", 
		"module", 
		"./Body"
	], function (t, i, e) 
	{
        function s(t) {
            o.call(this, t), t = t || {}, this.size = t.size || [0, 0];
            var i = this.size[0],
                e = this.size[1];
            this.I = [
                [e * e / 12, 0, 0],
                [0, i * i / 12, 0],
                [0, 0, (i * i + e * e) / 12]
            ], this.Iinv = [
                [12 / (e * e), 0, 0],
                [0, 12 / (i * i), 0],
                [0, 0, 12 / (i * i + e * e)]
            ]
        }

        var o = t("./Body");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s
    }
);