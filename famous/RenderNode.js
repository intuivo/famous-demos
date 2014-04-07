define(
	"famous/RenderNode", 
    [
        "require", 
        "exports", 
        "module", 
        "./Entity", 
        "./SpecParser", 
        "./Matrix"
    ], 
    function (require, exports, module)
    {
        function RenderNode(t) {
            this.modifiers = [];
            this.object = void 0;
            t && this.set(t);
            this._hasCached = !1;
            this._resultCache = {};
            this._prevResults = {};
        }

        function render(options, context, resultsCache)
        {
            var spec = SpecParser.parse(options);
            for (var a in spec) {
                var h = Entity.get(a),
                    u = spec[a];
                u.unshift(context);
                var p = h.commit.apply(h, u);
                p ? render(p, context, resultsCache) : resultsCache[a] = u
            }
        }

        var Entity = require("./Entity");
        var SpecParser = require("./SpecParser");

        require("./Matrix");

        RenderNode.prototype.get = function ()
        {
            return this.object;
        };

        RenderNode.prototype.set = function (t)
        {
            this.object = t;
        };

        RenderNode.prototype.link = function (t)
        {
            if (t instanceof Array)
            {
                this.set(t);
            }
            else {
                var i = this.get();
                if (i) {
                    if (i instanceof Array) {
                        this.modifiers.unshift(t);
                    } else {
                        this.modifiers.unshift(i);
                        this.set(t);
                    }
                } else
                {
                    this.set(t);
                }
            }
            return this;
        };

        RenderNode.prototype.add = function (modifier)
        {
            // check for default node array
            if (!(this.get() instanceof Array))
            {
                this.set([]);
            }

            var newNode = new RenderNode(modifier);

            this.get().push(newNode);

            return newNode;
        };

        RenderNode.prototype.mod = function (t)
        {
            this.modifiers.push(t);
            return this;
        };

        RenderNode.prototype.commit = function (context, transform, opacity, origin, contextSize)
        {
            var target = this.render(void 0, this._hasCached);

            if (target !== true) {
                for (var prevResult in this._prevResults)
                {
                    if (!(prevResult in this._resultCache))
                    {
                        var u = Entity.get(prevResult);
                        u.cleanup && u.cleanup(context.getAllocator())
                    }
                }

                this._prevResults = this._resultCache;
                this._resultCache = {};

                render(
                    {
                        transform: transform,
                        size: contextSize,
                        origin: origin,
                        opacity: opacity,
                        target: target
                    },
                    context,
                    this._resultCache);
                this._hasCached = !0;
            }
        };

        RenderNode.prototype.render = function (t)
        {
            var i = t;
            var nodeArray = this.get();

            if (nodeArray) {
                if (nodeArray.render)
                {
                    i = nodeArray.render(t);
                }
                else {
                    var count = nodeArray.length - 1;
                    for (i = new Array(count); count >= 0;)
                    {
                        i[count] = nodeArray[count].render();
                        count--;
                    }
                }
            }

            for (var modLength = this.modifiers.length, s = 0; modLength > s; s++)
            {
                i = this.modifiers[s].render(i);
            }

            return i;
        };

        module.exports = RenderNode;
});