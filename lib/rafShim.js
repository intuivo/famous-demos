window.requestAnimationFrame || 
	(window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
										window.mozRequestAnimationFrame || 
										window.oRequestAnimationFrame || 
										window.msRequestAnimationFrame || 
										function (t) {
										    return window.setTimeout(function () {
										        t(+new Date)
									    }, 1e3 / 60)
});