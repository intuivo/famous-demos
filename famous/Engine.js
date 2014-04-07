define(
	"famous/Engine", 
	[
		"require", 
		"exports", 
		"module", 
		"./Context", 
		"./EventHandler"
	], 
	function (require, exports, module)
	{
        function render() {
            var now = Date.now();

            // if we haven't waited long enough to render this frame, skip this frame and go to the next one
            if (minWait && minWait > now - lastTime) {
                requestAnimationFrame(render);
                return void 0;
            }

            timeSinceLastRender = now - lastTime;
            lastTime = now;
            engineEventHandler.emit("prerender");

            for (var i = 0; i < nextTickFuncs.length; i++) {
                nextTickFuncs[i].call(this);
            }

            nextTickFuncs = [];

            while (deferredFuncs.length && Date.now() - now < TEN) {
                deferredFuncs.shift().call(this);
            }

            // the actual rendering
            for (var i = 0; i < S.length; i++) {
                S[i].update();
            }

            engineEventHandler.emit("postrender");

            requestAnimationFrame(render);
        }

        function o(t) {
            if (document.activeElement && "INPUT" == document.activeElement.nodeName) return document.activeElement.addEventListener("blur", function e() {
                this.removeEventListener("blur", e), o(t)
            }), void 0;
            window.scrollTo(0, 0);
            for (var i = 0; i < S.length; i++) S[i].emit("resize");
            engineEventHandler.emit("resize")
        }

        function pipe(t) {
            return engineEventHandler.pipe(t)
        }

        function unpipe(t) {
            return engineEventHandler.unpipe(t)
        }

        function on(t, i) {
            engineEventHandler.on(t, i)
        }

        function emit(t, i) {
            engineEventHandler.emit(t, i)
        }

        function unbind(t, i) {
            engineEventHandler.unbind(t, i)
        }

        function getFPS() {
            return 1e3 / timeSinceLastRender
        }

        function setFPSCap(t) {
            minWait = Math.floor(1e3 / t)
        }

        function createContext(t) {
            void 0 === t ? (t = document.createElement("div"), t.classList.add("container"), document.body.appendChild(t)) : t instanceof Element || (t = document.createElement("div"), console.warn("Tried to create context on non-existent element"));
            var i = new Context(t);
            return S.push(i), i
        }

        function nextTick(t) {
            nextTickFuncs.push(t)
        }

        function getEntity(t) {
            return M[t]
        }

        function registerEntity(t) {
            var i = M.length;
            return M[i] = t, i
        }

        function defer(t) {
            deferredFuncs.push(t)
        }

        var Context = require("./Context"),
            EventHandler = require("./EventHandler"),
            S = [],
            nextTickFuncs = [],
            deferredFuncs = [],
            lastTime = Date.now(),
            timeSinceLastRender = void 0,
            minWait = void 0,
            engineEventHandler = new EventHandler,
            TEN = 10,
            M = [];
        requestAnimationFrame(render);
        window.addEventListener("resize", o, !1);
        o();
        window.addEventListener("touchmove", function (t)
        {
            t.preventDefault();
        }, !1);

        for (var C = ["touchstart", "touchmove", "touchend", "touchcancel", "click", "keydown", "keyup", "keypress", "mouseup", "mousedown", "mousemove", "mouseover", "mouseout", "mousewheel", "wheel", "resize"], P = 0; P < C.length; P++) {
            var k = C[P];
            document.body.addEventListener(k, function (t) {
                engineEventHandler.emit(t.type, t, !1)
            }, !1)
        }
        module.exports = {
            on: on,
            defer: defer,
            emit: emit,
            unbind: unbind,
            pipe: pipe,
            unpipe: unpipe,
            createContext: createContext,
            getFPS: getFPS,
            setFPSCap: setFPSCap,
            nextTick: nextTick,
            getEntity: getEntity,
            registerEntity: registerEntity
        };
    }
);