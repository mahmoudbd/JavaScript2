'use strict';

function createBase(num1) {
	// Put here your logic...
	return function addSix(num2) {
		return num1 + num2;
	};
}
// Put here your function calls...

const addSix = createBase(6);
const addSeven = createBase(7);
const addEight = createBase(8);

console.log(addSix(5));
console.log(addSeven(5));
console.log(addEight(5));
