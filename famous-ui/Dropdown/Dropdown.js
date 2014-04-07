define(
	"famous-ui/Dropdown/Dropdown", 
	[
        "require",
        "exports",
        "module",
        "famous/View",
        "famous/Matrix",
        "famous/Modifier",
        "famous/Transitionable",
        "famous/Surface",
        "famous-animation/Easing",
        "famous-utils/Utils",
        "famous-views/Scrollview",
        "./DropdownItem",
        "famous/ContainerSurface"
    ], function (t, i, e) {
        function s() {
            f.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.options.scrollviewOpts.clipSize = this.options.height, this.label = void 0, this.defaultMtx = void 0, this.closedMtx = void 0, this.arrowClosedPos = void 0, this.arrowOpenPos = void 0, this.labelTemplate = void 0, this.itemTemplate = void 0, this.itemOpts = void 0, this.sizeState = new y([0, 0]), this.items = [], this._isOpen = !1, this.initialized = !1
        }

        function o() {
            this.label = new g(
                {
                    content: this._getLabelContent(this.options.defaultSelected),
                    size: this.options.itemSize
                }
            ), 
            this.label.setProperties(this.options.labelProperties), 
            this.labelTransform = new m, 
            this.node.add(this.labelTransform).link(this.label), 
            this.label.on("click", this.toggleMenu.bind(this))
        }

        function n() {
            this.arrow = new g({
                size: this.options.arrowSize,
                content: this.options.arrowContent
            }), this.arrowTransform = new m({
                transform: this.arrowClosedPos
            }), this.node.add(this.arrowTransform).link(this.arrow)
        }

        function r() {
            this.scrollviewContainer = new x({
                size: [this.options.itemSize[0], this.options.height],
                properties: {
                    overflow: "hidden"
                }
            }), this.scrollview = new S(this.options.scrollviewOpts), this.scrollview.sequenceFrom(this.items), this.scrollviewTransform = new m({
                transform: this.closedMtx,
                opacity: 0,
                size: [this.options.itemSize[0], this.options.itemSize[1]]
            }), this.node.add(this.scrollviewTransform).link(this.scrollviewContainer), this.scrollviewContainer.add(this.scrollview)
        }

        function a() {
            for (var t = 0; t < this.options.items.length; t++) {
                var i = this.options.items[t];
                this.addItem(i.name, i.value, i.content)
            }
            this.value = this.items[this.options.defaultSelected].value
        }

        function h(t) {
            var i = t ? this.arrowOpenPos : this.arrowClosedPos;
            this.arrowTransform.setTransform(i, this.options.defaultCurve)
        }

        function u(t) {
            var i = t ? 1 : 1e-6,
                e = t ? [this.options.itemSize[0], this.options.height] : [this.options.itemSize[0], this.options.itemSize[1]],
                s = t ? this.defaultMtx : this.closedMtx;
            this.scrollviewTransform.setOpacity(i, this.options.defaultCurve), this.scrollviewTransform.setTransform(s, this.options.defaultCurve), this.sizeState.set(e, this.options.defaultCurve)
        }

        function p(t) {
            var i = this.items.indexOf(t.origin),
                e = this.items[i];
            e && this.set(e.value, i)
        }

        function c(t) {
            for (var i = 0; i < this.items.length; i++) t == i ? this.items[i].setSelected(!0) : this.items[i].setSelected(!1)
        }

        function l(t) {
            for (var i = 0; i < this.items.length; i++)
                if (this.items[i].value == t) return i;
            return -1
        }

        var f = t("famous/View"),
            d = t("famous/Matrix"),
            m = t("famous/Modifier"),
            y = t("famous/Transitionable"),
            g = t("famous/Surface"),
            v = t("famous-animation/Easing");
        t("famous-utils/Utils");
        var S = t("famous-views/Scrollview"),
            b = t("./DropdownItem"),
            x = t("famous/ContainerSurface");
        s.prototype = Object.create(f.prototype),
        s.prototype.constructor = s,
        s.DEFAULT_OPTIONS = {
            items: [{
                name: "Apples",
                value: "apples"
            }, {
                name: "Oranges",
                value: "oranges"
            }],
            defaultSelected: 0,
            itemSize: void 0,
            labelProperties: {
                color: "#ffffff",
                "background-color": "#333",
                border: "1px solid #ccc"
            },
            itemClasses: [],
            itemProperties: {
                color: "#ccc",
                "background-color": "#fff",
                border: "1px solid #ccc"
            },
            itemSelectedProperties: {
                border: "3px solid #33ccff"
            },
            scrollviewOpts: {
                direction: 1,
                clipSize: void 0
            },
            height: 125,
            defaultCurve: {
                curve: v.inOutBackNorm,
                duration: 500
            },
            labelFadeCurve: {
                curve: v.inOutSineNorm,
                duration: 200
            },
            arrowSize: [20, 20],
            arrowPadding: [5, 10, 1],
            arrowContent: '<img src="js/famous-ui/img/arrowRight.svg"></img>',
            itemTemplate: function (t) {
                return '<h4 style="line-height:' + this.options.itemSize[1] + 'px; padding-left: 10px;">' + t + "</h4>"
            },
            labelTemplate: function (t) {
                return '<h3 style="line-height:' + this.options.itemSize[1] + 'px; padding-left: 10px;">' + t + "</h3>"
            },
            autoClose: !1
        }, s.prototype.init = function () {
            this.defaultMtx = d.translate(0, this.options.itemSize[1], 0), this.closedMtx = d.move(d.scale(1, .01), [0, this.options.itemSize[1], 0]), this.arrowClosedPos = d.translate(this.options.itemSize[0] - this.options.arrowSize[0] - this.options.arrowPadding[0], this.options.arrowPadding[1], this.options.arrowPadding[2]), this.arrowOpenPos = d.move(d.rotateZ(.5 * Math.PI), [this.options.itemSize[0] - .25 * this.options.arrowSize[0] - this.options.arrowPadding[0], this.options.arrowPadding[1], this.options.arrowPadding[2]]), this.options.itemTemplate = this.options.itemTemplate.bind(this), this.options.labelTemplate = this.options.labelTemplate.bind(this), this.itemOpts = {
                itemSize: this.options.itemSize,
                itemProperties: this.options.itemProperties,
                selectedProperties: this.options.itemSelectedProperties,
                template: this.options.itemTemplate,
                classes: this.options.itemClasses
            }, n.call(this), r.call(this), a.call(this), o.call(this), this.sizeState.set(this.options.itemSize), this.initialized = !0
        }, s.prototype.addItem = function (t, i, e) {
            var s = this.itemOpts;
            s.name = t, e && (s.itemContent = e);
            var o = new b(s, i, !1);
            o.setTemplate(this.itemTemplate), o.transform.setOpacity(0), o.transform.setOpacity(1, this.options.defaultCurve), this.items.push(o), o.pipe(this.scrollview), o.on("selection", p.bind(this)), this.options.autoClose && o.on("selectionEnd", this.closeMenu.bind(this))
        }, s.prototype.openMenu = function () {
            this._isOpen = !0, h.call(this, this._isOpen), u.call(this, this._isOpen)
        }, s.prototype.closeMenu = function () {
            this._isOpen = !1, h.call(this, this._isOpen), u.call(this, this._isOpen)
        }, s.prototype.toggleMenu = function () {
            this._isOpen ? this.closeMenu() : this.openMenu()
        }, s.prototype.get = function () {
            return this.value
        }, s.prototype._getLabelContent = function (t) {
            var i = this.items[t],
                e = i.options.itemContent,
                s = this.options.labelTemplate.apply(this, e);
            return s
        }, s.prototype.set = function (t) {
            var i = l.call(this, t),
                e = this.items[i];
            this.value = e.value, c.call(this, i);
            var s = this._getLabelContent(i);
            this.updateLabel(s), this.emit("change", {
                value: this.value
            })
        }, s.prototype.setHeight = function (t) {
            this.options.height = t, this.options.scrollviewOpts.clipSize = t, this.scrollview.options.clipSize = t, this.scrollviewContainer.setSize(this.options.itemSize[0], t)
        }, s.prototype.removeItem = function (t) {
            var i;
            "string" == typeof t ? i = l.call(this, t) : "number" == typeof t && (i = t), -1 !== i && this.items[i].transform.setOpacity(0, this.options.defaultCurve, function (t) {
                this.items.splice(t, 1)
            }.bind(this, i))
        }, s.prototype.updateLabel = function (t) {
            var i = function (t) {
                this.label.setContent(t), this.labelTransform.setOpacity(1, this.options.labelFadeCurve)
            };
            this.labelTransform.setOpacity(0, this.options.labelFadeCurve, i.bind(this, t))
        }, s.prototype.setSize = function (t) {
            this.options.itemSize = [t[0], 2 * t[1]]
        }, s.prototype.getSize = function () {
            return this.initialized ? this.sizeState.get() : void 0
        }, e.exports = s
    }
); 