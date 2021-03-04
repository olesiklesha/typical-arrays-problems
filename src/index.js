
exports.min = function min(array) {
	if (array == undefined || array.length == 0) return 0;

	let compare = function (a, b) {
		if (a > b) return 1;
		if (a == 0) return 0;
		if (a < b) return -1;
	}

	array.sort(compare);

	return array[0];
}

exports.max = function max(array) {
	if (array == undefined || array.length == 0) return 0;

	let compare = function (a, b) {
		if (a < b) return 1;
		if (a == 0) return 0;
		if (a > b) return -1;
	}

	array.sort(compare);

	return array[0];
	return 0;
}

exports.avg = function avg(array) {
	if (array == undefined || array.length == 0) return 0;

	let result = (array.reduce((sum, current) => sum + current, 0)) / array.length;
	return result;
}
