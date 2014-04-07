define(
	"famous/ElementAllocator", 
	[
		"require", 
		"exports", 
		"module"
	], 
	function (t, i, e) 
	{
        function s(t) {
            t || (t = document.createDocumentFragment()), this.container = t, this.detachedNodes = {}, this.nodeCount = 0
        }

        s.prototype.migrate = function (t) {
            var i = this.container;
            if (t !== i) {
                if (i instanceof DocumentFragment) t.appendChild(i);
                else
                    for (; i.hasChildNodes();) t.appendChild(i.removeChild(i.firstChild));
                this.container = t
            }
        }, s.prototype.allocate = function (t) {
            t = t.toLowerCase(), t in this.detachedNodes || (this.detachedNodes[t] = []);
            var i, e = this.detachedNodes[t];
            return e.length > 0 ? i = e.pop() : (i = document.createElement(t), this.container.appendChild(i)), this.nodeCount++, i
        }, s.prototype.deallocate = function (t) {
            var i = t.nodeName.toLowerCase(),
                e = this.detachedNodes[i];
            e.push(t), this.nodeCount--
        }, s.prototype.getNodeCount = function () {
            return this.nodeCount
        }, e.exports = s
    }
);