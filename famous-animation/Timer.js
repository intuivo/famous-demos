 define(
 	"famous-animation/Timer", 
 	[
	 	"require", 
	 	"exports", 
	 	"module"
 	], 
 	function (t, i, e) 
 	{
        function s() {
            window.performance ? window.performance.now ? this.getTime = function () {
                return window.performance.now()
            } : window.performance.webkitNow && (this.getTime = function () {
                return window.performance.webkitNow()
            }) : this.getTime = function () {
                return Date.now()
            }
        }

        e.exports = s
    }
);