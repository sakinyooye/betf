module.exports = function bubbleSort(array, sorted = false, runTimes = 0) {
	if (sorted) {return array}
	sorted = true; 
	for (let i = 0; i < array.length - runTimes - 1; i++) {
		if (array[i] > array[i + 1]) {
			var temp = array[i + 1]
			array[i + 1] = array[i]
			array[i] = temp; 
			sorted = false
		}
	}
	return bubbleSort(array, sorted, runTimes)
};