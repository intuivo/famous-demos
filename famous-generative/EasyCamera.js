define(
	"famous-generative/EasyCamera", 
	[
		"require", 
		"exports", 
		"module", 
		"famous/Engine", 
		"famous-utils/Utils", 
		"famous/Matrix", 
		"famous-math/Vector", 
		"famous-math/Quaternion"
	], 
	function (t, i, e) 
	{
        function s() {
            this.renderMatrix = r.identity, this.doubleClickToReset = !0, this.touchTime = (new Date).getTime(), this.clickTime = (new Date).getTime(), this.deltaTime = 200, this.viewWidth = n.getWidth(), this.viewHeight = n.getHeight(), this.radius = .5 * Math.max(this.viewWidth, this.viewHeight), this.center = new a(.5 * this.viewWidth, .5 * this.viewHeight, 0), this.axis = new a(0, 1, 0), this.theta = 0, this.flipX = 1, this.flipY = 1, this.flipZ = 1, this.t1 = new a, this.t2 = new a, this.pt1 = new a, this.pt2 = new a, this.damping = .95, this.zAcc = 0, this.zVel = 0, this.dt = 0, this.pdt = 0, this.distance = -100, this.position = new a(0, 0, this.distance), this.rotation = new a(0, 0, 0), this.e_mtx = r.identity, this.q_rot = new h, this.q_mtx = r.identity, this.quat = new h, this.d_mtx = r.identity, this.sensitivityRotation = 3, this.sensitivityZoom = 3, this.touchDown = !1, this.mouseDown = !1, o.on("prerender", this._update.bind(this)), o.on("touchstart", this.touchstart.bind(this)), o.on("touchmove", this.touchmove.bind(this)), o.on("touchend", this.touchend.bind(this)), o.on("resize", this.resize.bind(this)), o.on("mousedown", this.mousedown.bind(this)), o.on("mousemove", this.mousemove.bind(this)), o.on("mouseup", this.mouseup.bind(this)), window.addEventListener("mousewheel", this.mousewheel.bind(this)), this.updateMatrix()
        }

        var o = t("famous/Engine"),
            n = t("famous-utils/Utils"),
            r = t("famous/Matrix"),
            a = t("famous-math/Vector"),
            h = t("famous-math/Quaternion");
        s.prototype._update = function () {
            this.update(), !this.mouseDown && !this.touchDown && this.theta > 1e-4 && (this.quat.makeFromAngleAndAxis(this.theta * this.sensitivityRotation, this.axis), this.q_rot = this.q_rot.multiply(this.quat), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix(), this.theta *= this.damping)
        }, s.prototype.update = function () {}, s.prototype.setFlipX = function (t) {
            this.flipX = t ? -1 : 1
        }, s.prototype.setFlipY = function (t) {
            this.flipY = t ? -1 : 1
        }, s.prototype.setFlipZ = function (t) {
            this.flipZ = t ? -1 : 1
        }, s.prototype.setSensitivityZoom = function (t) {
            this.sensitivityZoom = t
        }, s.prototype.setSensitivityRotation = function (t) {
            this.sensitivityRotation = t
        }, s.prototype.setDistance = function (t) {
            this.distance = t, this.position.z = this.distance, this.setPosition(this.position)
        }, s.prototype.setPosition = function (t) {
            this.position.set(t), this.updateMatrix()
        }, s.prototype.applyQuaternionRotation = function (t) {
            this.q_rot = this.q_rot.multiply(t), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix()
        }, s.prototype.applyEulerRotation = function (t, i, e) {
            this.rotation.setXYZ(t, i, e), this.e_mtx = r.rotate(t, i, e), this.updateMatrix()
        }, s.prototype.updateMatrix = function () {
            this.renderMatrix = r.move(r.multiply(this.q_mtx, this.e_mtx), this.position.toArray())
        }, s.prototype.getRotationMatrix = function () {
            return this.q_mtx
        }, s.prototype.getMatrix = function () {
            return this.renderMatrix
        }, s.prototype.reset = function () {
            this.theta = 0, this.q_rot.clear(), this.q_mtx = this.d_mtx, this.position.clear(), this.position.setXYZ(0, 0, this.distance), this.updateMatrix()
        }, s.prototype.setDefaultMatrix = function (t) {
            this.d_mtx = t
        }, s.prototype.clickCheckForCameraRestart = function () {
            var t = (new Date).getTime();
            t - this.clickTime < this.deltaTime && this.doubleClickToReset && this.reset(), this.clickTime = t
        }, s.prototype.touchCheckForCameraRestart = function () {
            var t = (new Date).getTime();
            t - this.touchTime < this.deltaTime && this.doubleClickToReset && this.reset(), this.touchTime = t
        }, s.prototype.touchstart = function (t) {
            1 == t.touches.length ? (this.touchDown = !0, this.touchCheckForCameraRestart(), this.theta = 0, this.t1.clear(), this.pt1.clear(), this.quat.clear(), this.setArcBallVector(t.touches[0].clientX, t.touches[0].clientY)) : 2 == t.touches.length && (this.t1.setXYZ(t.touches[0].clientX, t.touches[0].clientY, 0), this.t2.setXYZ(t.touches[1].clientX, t.touches[1].clientY, 0), this.pt1.set(this.t1), this.pt2.set(this.t2), this.dt = n.distance(this.t1.x, this.t1.y, this.t2.x, this.t2.y), this.pdt = this.dt)
        }, s.prototype.touchmove = function (t) {
            1 == t.touches.length ? (this.setArcBallVector(t.touches[0].clientX, t.touches[0].clientY), this.updateArcBallRotation()) : 2 == t.touches.length && (this.t1.setXYZ(t.touches[0].clientX, t.touches[0].clientY, 0), this.t2.setXYZ(t.touches[1].clientX, t.touches[1].clientY, 0), this.dt = n.distance(this.t1.x, this.t1.y, this.t2.x, this.t2.y), this.position.z += this.flipZ * (this.dt - this.pdt) / this.sensitivityZoom, this.updateMatrix(), this.pt1.set(this.t1), this.pt2.set(this.t2), this.pdt = this.dt)
        }, s.prototype.touchend = function (t) {
            1 == t.touches.length ? (this.t1.clear(), this.pt1.clear(), this.quat.clear()) : 2 == t.touches.length && (this.t1.clear(), this.pt1.clear(), this.t2.clear(), this.pt2.clear(), this.dt = 0, this.pdt = 0)
        }, s.prototype.setArcBallVector = function (t, i) {
            this.pt1.set(this.t1), this.t1.clear(), this.t1.x = -1 * this.flipX * (t - this.center.x) / this.radius, this.t1.y = -1 * this.flipY * (i - this.center.y) / this.radius;
            var e = this.t1.norm();
            e > 1 ? this.t1.normalize(1, this.t1) : this.t1.z = Math.sqrt(1 - e)
        }, s.prototype.updateArcBallRotation = function () {
            this.theta = Math.acos(this.t1.dot(this.pt1)), this.axis = this.pt1.cross(this.t1, this.axis), this.quat.makeFromAngleAndAxis(this.theta * this.sensitivityRotation, this.axis), this.q_rot = this.q_rot.multiply(this.quat), this.q_mtx = this.q_rot.getMatrix(), this.updateMatrix()
        }, s.prototype.emit = function (t, i) {
            "prerender" == t ? this.update(i) : "touchstart" == t ? this.touchstart(i) : "touchmove" == t ? this.touchmove(i) : "touchend" == t ? this.touchend(i) : "resize" == t && this.resize(i)
        }, s.prototype.mousemove = function (t) {
            this.mouseDown && (this.setArcBallVector(t.clientX, t.clientY), this.updateArcBallRotation())
        }, s.prototype.mousedown = function (t) {
            this.mouseDown = !0, this.clickCheckForCameraRestart(), this.theta = 0, this.t1.clear(), this.pt1.clear(), this.quat.clear(), this.setArcBallVector(t.clientX, t.clientY)
        }, s.prototype.mouseup = function () {
            this.mouseDown = !1
        }, s.prototype.mousewheel = function (t) {
            this.position.z += .01 * this.flipZ * n.limit(t.wheelDelta, -500, 500) * this.sensitivityZoom, this.updateMatrix()
        }, s.prototype.resize = function () {
            this.viewWidth = n.getWidth(), this.viewHeight = n.getHeight(), this.center = new a(.5 * this.viewWidth, .5 * this.viewHeight, 0), this.radius = .5 * Math.min(this.viewWidth, this.viewHeight)
        }, s.prototype.setDamping = function (t) {
            this.damping = t
        }, s.prototype.render = function (t) {
            return {
                transform: this.renderMatrix,
                origin: [.5, .5],
                target: t
            }
        }, e.exports = s
    }
);