define(
    "famous/Utility", 
    [
        "require", 
        "exports", 
        "module"
    ], function (t, i, e) 
    {
        var Utility = {};

        Utility.Curve = {
            linear: function (t) {
                return t
            },
            easeIn: function (t) {
                return t * t
            },
            easeOut: function (t) {
                return t * (2 - t)
            },
            easeInOut: function (t) {
                return .5 >= t ? 2 * t * t : -2 * t * t + 4 * t - 1
            },
            easeOutBounce: function (t) {
                return t * (3 - 2 * t)
            },
            spring: function (t) {
                return (1 - t) * Math.sin(6 * Math.PI * t) + t
            }
        };

        Utility.Direction = {
            X: 0,
            Y: 1,
            Z: 2
        };

        Utility.Origin = {
            tl: [0, 0],
            t: [.5, 0],
            tr: [1, 0],
            l: [0, .5],
            c: [.5, .5],
            r: [1, .5],
            bl: [0, 1],
            b: [.5, 1],
            br: [1, 1]
        };

        // Invokes the passed func after the returned function gets called 'n' times
        Utility.after = function (n, func)
        {
            var funcCounter = n;
            return function () {
                funcCounter--;
                if (0 === funcCounter) {
                     func.apply(this, arguments);
                }
            }
        };

        Utility.loadURL = function (t, i)
        {
            var e = new XMLHttpRequest;

            e.onreadystatechange = function ()
            {
                4 == this.readyState && i && i(this.responseText)
            };

            e.open("GET", t);

            e.send();
        };

        Utility.transformInFrontMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1];

        Utility.transformInFront = {
            render: function (t) {
                return {
                    transform: Utility.transformInFrontMatrix,
                    target: t
                }
            }
        };

        Utility.transformBehindMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1, 1];

        Utility.transformBehind = {
            render: function (t) {
                return {
                    transform: Utility.transformBehindMatrix,
                    target: t
                }
            }
        };

        Utility.customizeComponent = function (t, i, e)
        {
            var s = function (s) {
                t.call(this, i), s && this.setOptions(s), e && e.call(this)
            };
            s.prototype = Object.create(t.prototype);
            return s;
        };

        e.exports = Utility;
    }
);
