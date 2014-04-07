define(
	"famous/Entity", 
	[
		"require", 
		"exports", 
		"module"
	], function (require, exports, module) {

		function Entity(obj) {
		    var currentIndex = store.length;
            set(currentIndex, obj);
		    return currentIndex;
		}

		function get(id)
        {
		    return store[id]
		}

		function set(id, obj)
        {
		    store[id] = obj
		}

		var store = [];

		module.exports = {
		    register: Entity,
		    get: get,
		    set: set
		}
    }
);