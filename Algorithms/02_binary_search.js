"use strict";

const binarySearch = (list, item) => {
	let low = 0;
	let high = list.length - 1;

	while (low <= high) {
		const mid = Math.floor((high + low) / 2);
		const guess = list[mid];

		if (guess === item) {
			return mid;
		}

		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return "Element not found.";
};

let myList = ["a","b","c","d","e","f","g","h","i","j"];

console.log(binarySearch(myList, "d")); // 3
console.log(binarySearch(myList, "z")); // Element not found.