define(
	"famous-generative/Box", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Surface", 
		"famous/Matrix", 
		"famous-utils/Utils", 
		"famous/RenderNode"
	], 
	function (t, i, e) 
	{
        function s(t, i, e) {
            this.nodes = [], this.result = [], this.top = new o({
                size: [t, e]
            }), this.bottom = new o({
                size: [t, e]
            }), this.left = new o({
                size: [e, i]
            }), this.right = new o({
                size: [e, i]
            }), this.front = new o({
                size: [t, i]
            }), this.back = new o({
                size: [t, i]
            }), this.top.addClass("box-top"), this.bottom.addClass("box-bottom"), this.left.addClass("box-left"), this.right.addClass("box-right"), this.front.addClass("box-front"), this.back.addClass("box-back"), this.sides = [this.top, this.bottom, this.left, this.right, this.front, this.back], this.result.push({
                transform: n.multiply(n.translate(0, 0, .5 * i), n.rotateX(.5 * Math.PI)),
                opacity: 1,
                target: this.add(this.top).execute()
            }), this.result.push({
                transform: n.multiply(n.translate(0, 0, .5 * i), n.rotateX(.5 * -Math.PI)),
                opacity: 1,
                target: this.add(this.bottom).execute()
            }), this.result.push({
                transform: n.multiply(n.translate(0, 0, .5 * t), n.rotateY(.5 * -Math.PI)),
                opacity: 1,
                target: this.add(this.left).execute()
            }), this.result.push({
                transform: n.multiply(n.translate(0, 0, .5 * t), n.rotateY(.5 * Math.PI)),
                opacity: 1,
                target: this.add(this.right).execute()
            }), this.result.push({
                transform: n.translate(0, 0, .5 * e),
                opacity: 1,
                target: this.add(this.front).execute()
            }), this.result.push({
                transform: n.translate(0, 0, .5 * -e),
                opacity: 1,
                target: this.add(this.back).execute()
            })
        }

        var o = t("famous/Surface"),
            n = t("famous/Matrix"),
            r = t("famous-utils/Utils"),
            a = t("famous/RenderNode");
        s.prototype.setColor = function (t, i, e, s) {
            for (var o = 0; o < this.sides.length; o++) this.sides[o].setProperties({
                backgroundColor: r.color(t, i, e, s)
            })
        }, s.prototype.setFrontColor = function (t, i, e, s) {
            this.front.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.setBackColor = function (t, i, e, s) {
            this.back.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.setRightColor = function (t, i, e, s) {
            this.right.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.setLeftColor = function (t, i, e, s) {
            this.left.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.setTopColor = function (t, i, e, s) {
            this.top.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.setBottomColor = function (t, i, e, s) {
            this.bottom.setProperties(r.backgroundColor(t, i, e, s))
        }, s.prototype.add = function (t) {
            var i = new a;
            return this.nodes.push(i), i.from(t), i
        }, s.prototype.render = function () {
            return this.result
        }, e.exports = s
    }
); 