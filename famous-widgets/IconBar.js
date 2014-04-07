define(
	"famous-widgets/IconBar", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Utility", 
		"famous/Surface"
	], 
	function (t, i, e) 
	{
        var s = t("famous/Utility"),
            o = t("famous/Surface"),
            n = s.customizeComponent(o, {
                classes: ["iconBar"],
                icons: []
            });
        n.prototype.setOptions = function (t) {
            o.prototype.setOptions.call(this, t), t.icons && (this.options.icons = t.icons)
        }, n.prototype.setContent = function (t) {
            return "string" == typeof t && (t += '<span class="icon">' + this.options.icons.join("") + "</span>"), o.prototype.setContent.call(this, t)
        }, e.exports = n
    }
); 