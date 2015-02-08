_.mixin({ "eachSlice": function(obj, size, iterator, context) {
	for (var i=0, l=obj.length; i < l; i+=size) {
		iterator.call(context, obj.slice(i,i+size), i, obj);
	}
}});