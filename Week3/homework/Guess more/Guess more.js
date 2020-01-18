// Snippet
const x = 9;
function f1(val) {
	val = val + 1; //used a Declaration function with argument.
	return val;
}
f1(x); //output is x + 1 = 10
console.log(x); // output is 9 // from global scope
// if we want to consloe the fuction we have to write  console.log(f1(x)) and will be 10

const y = { x: 9 };
function f2(val) {
	val.x = val.x + 1;
	return val;
}
f2(y);
console.log(y); //output is : {x:10}
