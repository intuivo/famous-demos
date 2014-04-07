define("lib/classList", 
        function () {}
    ), 
    Function.prototype.bind || (Function.prototype.bind = function (t) 
    {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

        var i = Array.prototype.slice.call(arguments, 1),
            e = this,
            s = function () {}; 
            o = function () {
                return e.apply(this instanceof s && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
            };
        return s.prototype = this.prototype, o.prototype = new s, o
    });