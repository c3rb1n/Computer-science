"use strict";

const linearSearch = (list, item) => {
	for (let i = 0; i < list.length; i++) {
		if (list[i] === item) {
			return i;
		}
	}

	return "Element not found.";
};

let myList = ["a","b","c","d","e","f","g","h","i","j"];

console.log(linearSearch(myList, "d")); // 3
console.log(linearSearch(myList, "z")); // Element not found.