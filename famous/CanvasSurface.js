define(
	"famous/CanvasSurface", 
	[
		"require", 
		"exports", 
		"module", 
		"./Surface"
	], 
	function (require, exports, module)
	{
	    function CanvasSurface(t)
        {
	        t && t.canvasSize && (this.canvasSize = t.canvasSize);
            Surface.call(this, t);

            this.canvasSize || (this.canvasSize = this.getSize());

            this.backBuffer = document.createElement("canvas");

            if (this.canvasSize) {
                this.backBuffer.width = this.canvasSize[0];
                this.backBuffer.height = this.canvasSize[1];
            }

            this._contextId = void 0
	    }

	    var Surface = require("./Surface");

	    CanvasSurface.prototype = Object.create(Surface.prototype);

        CanvasSurface.prototype.elementType = "canvas";

        CanvasSurface.prototype.elementClass = "surface";

        CanvasSurface.prototype.setContent = function () {};

        CanvasSurface.prototype.deploy = function (t)
        {
            if (this.canvasSize) {
                t.width = this.canvasSize[0];
                t.height = this.canvasSize[1];
            }
            if ("2d" == this._contextId) {
                t.getContext(this._contextId).drawImage(this.backBuffer, 0, 0);
                this.backBuffer.width = 0;
                this.backBuffer.height = 0;
            }
	    };

        CanvasSurface.prototype.recall = function (t)
        {
	        this.getSize(), this.backBuffer.width = t.width, this.backBuffer.height = t.height, "2d" == this._contextId && (this.backBuffer.getContext(this._contextId).drawImage(t, 0, 0), t.width = 0, t.height = 0)
	    };

        CanvasSurface.prototype.getContext = function (t)
        {
	        return this._contextId = t, this._currTarget ? this._currTarget.getContext(t) : this.backBuffer.getContext(t)
	    };

        CanvasSurface.prototype.setSize = function (t, i)
        {
	        Surface.prototype.setSize.apply(this, arguments);
            i && (this.canvasSize = i.slice(0)), this._currTarget && (this._currTarget.width = this.canvasSize[0], this._currTarget.height = this.canvasSize[1])
	    };

        module.exports = CanvasSurface;
	}
);