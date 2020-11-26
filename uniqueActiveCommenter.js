var target= document.querySelectorAll('.cwj9ozl2 g[mask] image');
var total = target.length;
var array = [];
target.forEach(function(el){
	array.push(el.getAttribute("xlink:href"));
});
var uniqueArray = array.filter(function (item, index) {
	return array.indexOf(item) === index;
});
var unique = uniqueArray.length;
console.log('Total commenter found: ' + total);
console.log('Unique commenter found: ' + unique);
