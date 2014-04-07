define(
	"famous/ImageSurface", 
	[
		"require", 
		"exports", 
		"module", 
		"./Surface"
	], function (require, exports, module)
	{
        function ImageSurface()
        {
            this.imageUrl = void 0;
            Surface.apply(this, arguments);
        }

        var Surface = require("./Surface");

        ImageSurface.prototype = Object.create(Surface.prototype);

        ImageSurface.prototype.surfaceEvents = Surface.prototype.surfaceEvents.concat(
            [
                "load"
            ]
        );

        ImageSurface.prototype.elementType = "img";

        ImageSurface.prototype.elementClass = "surface";

        ImageSurface.prototype.setContent = function (imgUrl)
        {
            this.imageUrl = imgUrl;
            this._contentDirty = true;
        };

        ImageSurface.prototype.deploy = function (t)
        {
            t.src = this.imageUrl || ""
        };

        ImageSurface.prototype.recall = function (t)
        {
            t.src = ""
        };

        module.exports = ImageSurface;
    }
); 