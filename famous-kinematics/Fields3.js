define(
	"famous-kinematics/Fields3", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        var s = Math.PI,
            o = {
                vortexUp3: {
                    p: function () {
                        return 0
                    },
                    q: function (t, i, e) {
                        return -e
                    },
                    r: function (t, i) {
                        return i
                    }
                },
                vortexRight3: {
                    p: function (t, i, e) {
                        return e
                    },
                    q: function () {
                        return 0
                    },
                    r: function (t) {
                        return -t
                    }
                },
                vortexFront3: {
                    p: function (t, i) {
                        return i
                    },
                    q: function (t) {
                        return -t
                    },
                    r: function () {
                        return 0
                    }
                },
                gravityFront3: {
                    p: function () {
                        return 0
                    },
                    q: function () {
                        return 0
                    },
                    r: function () {
                        return -1
                    }
                },
                gravityBack3: {
                    p: function () {
                        return 0
                    },
                    q: function () {
                        return 0
                    },
                    r: function () {
                        return 1
                    }
                },
                gravityRight3: {
                    p: function () {
                        return 1
                    },
                    q: function () {
                        return 0
                    },
                    r: function () {
                        return 0
                    }
                },
                gravityLeft3: {
                    p: function () {
                        return -1
                    },
                    q: function () {
                        return 0
                    },
                    r: function () {
                        return 0
                    }
                },
                radialGravity3: {
                    p: function (t, i, e) {
                        return -t / Math.pow(t * t + i * i + e * e, 1.5)
                    },
                    q: function (t, i, e) {
                        return -i / Math.pow(t * t + i * i + e * e, 1.5)
                    },
                    r: function (t, i, e) {
                        return -e / Math.pow(t * t + i * i + e * e, 1.5)
                    }
                },
                vortices3: {
                    p: function (t, i) {
                        return Math.cos(2 * s * i)
                    },
                    q: function (t) {
                        return Math.cos(2 * s * t)
                    },
                    r: function () {
                        return 0
                    }
                },
                pointAttractor3: {
                    p: function (t) {
                        return -(t - 0)
                    },
                    q: function (t, i) {
                        return -(i - 0)
                    },
                    r: function (t, i, e) {
                        return -(e - 0)
                    }
                },
                diamondAttractor3: {
                    p: function (t) {
                        return Math.sin(1.5 * s * t)
                    },
                    q: function (t, i) {
                        return Math.sin(1.5 * s * i)
                    },
                    r: function () {
                        return 0
                    }
                },
                sphereAttractor3: {
                    p: function (t, i, e) {
                        return (.75 - Math.sqrt(t * t + i * i + e * e)) * t / Math.sqrt(t * t + i * i + e * e)
                    },
                    q: function (t, i, e) {
                        return (.75 - Math.sqrt(t * t + i * i + e * e)) * i / Math.sqrt(t * t + i * i + e * e)
                    },
                    r: function (t, i, e) {
                        return (.75 - Math.sqrt(t * t + i * i + e * e)) * e / Math.sqrt(t * t + i * i + e * e)
                    }
                },
                cubeAttractor3: {
                    p: function (t, i, e) {
                        return Math.abs(t) > Math.abs(i) && Math.abs(t) > Math.abs(e) ? (.75 - Math.abs(t)) * t / Math.abs(t) : 0
                    },
                    q: function (t, i, e) {
                        return Math.abs(i) > Math.abs(t) && Math.abs(i) > Math.abs(e) ? (.75 - Math.abs(i)) * i / Math.abs(i) : 0
                    },
                    r: function (t, i, e) {
                        return Math.abs(e) > Math.abs(i) && Math.abs(e) > Math.abs(t) ? (.75 - Math.abs(e)) * e / Math.abs(e) : 0
                    }
                },
                gravity3: {
                    p: function () {
                        return 0
                    },
                    q: function () {
                        return -1
                    },
                    r: function () {
                        return 0
                    }
                },
                none3: {
                    p: function () {
                        return 0
                    },
                    q: function () {
                        return 0
                    },
                    r: function () {
                        return 0
                    }
                }
            };
        e.exports = o
    }
); 