
function collect_same_elements(collection_a, object_b) {
	var i = 0;
	var j = 0;
	var arr = new Array();
	for (i = 0; i < collection_a.length;i++)
	{
		for(j = 0; j < object_b.value.length;j++)
		{
			if (collection_a[i].key == object_b.value[j])
			{
				arr.push(collection_a[i].key);
			}
		}
	}
	console.log(arr);
	return arr;
}

module.exports = collect_same_elements;
