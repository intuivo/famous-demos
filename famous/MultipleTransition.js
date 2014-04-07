define(
    "famous/MultipleTransition", 
    [
        "require", 
        "exports", 
        "module", 
        "./Utility"
    ], function (t, i, e) 
    {
        function MultipleTransition(t)
        {
            this.method = t;
            this._instances = [];
            this.state = [];
        }

        var Utility = t("./Utility");

        MultipleTransition.SUPPORTS_MULTIPLE = true;

        MultipleTransition.prototype.get = function ()
        {
            for (var t = 0; t < this._instances.length; t++) {
                this.state[t] = this._instances[t].get();
            }
            return this.state;
        };
        MultipleTransition.prototype.set = function (t, i, e)
        {
            for (var s = Utility.after(t.length, e), n = 0; n < t.length; n++)
            {
                this._instances[n] || (this._instances[n] = new this.method);
                this._instances[n].set(t[n], i, s);
            }
        };

        MultipleTransition.prototype.reset = function (t)
        {
            for (var i = 0; i < t.length; i++)
            {
                this._instances[i] || (this._instances[i] = new this.method);
                this._instances[i].reset(t[i]);
            }
        };

        e.exports = MultipleTransition;
    }
);