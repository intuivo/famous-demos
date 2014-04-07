define(
	"famous-views/ControlSet", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/EventHandler", 
		"famous/Matrix"
	], 
	function (t, i, e) 
	{
        function s() {
            this.eventOutput = new o, o.setOutputHandler(this, this.eventOutput), this.controls = []
        }

        var o = t("famous/EventHandler"),
            n = t("famous/Matrix");
        s.prototype.include = function (t, i) {
            i.on("change", function (i) {
                this.eventOutput.emit(t, {
                    value: i.value
                })
            }.bind(this)), this.controls.push(i)
        }, s.prototype.render = function () {
            for (var t = [], i = 0, e = 0, s = 0; s < this.controls.length; s++) {
                var o = this.controls[s],
                    r = o.getSize();
                t.push({
                    transform: n.translate(0, i),
                    target: o.render()
                }), i += r[1], e = Math.max(e, r[0])
            }
            return {
                size: [e, i],
                target: t
            }
        }, e.exports = s
    }
); 