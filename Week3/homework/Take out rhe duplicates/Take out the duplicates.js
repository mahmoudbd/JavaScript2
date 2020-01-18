'use strict';

const letters = [ 'a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b' ];
// first way
function removeDuplicates(aar) {
	let uniqArr = [];
	for (let i of aar) {
		if (!uniqArr.includes(i)) uniqArr.push(i);
	}
	return uniqArr;
}

console.log(removeDuplicates(letters));
// second way
{
	let newAar = [ ...new Set(letters) ];
	console.log(newAar);
}
//third way
function removeDuplicates2(aar) {
	return aar.filter((index, letter) => aar.indexOf(index) === letter);
}
console.log(removeDuplicates2(letters));
