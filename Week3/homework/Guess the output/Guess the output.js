'use strict';
//Snippet
let a = 10;
const x = (function() {
	/*here used a  Expression function with self invoking, and reassigned the variabel 'a' from 10 to 12 ,
                       And of course we can do that inside the function if we did not use a keywords like 'var, let or const'
                       before the variable .  */
	a = 12;
	return function() {
		alert(a);
	};
})(); // output is undefind

x(); //output is 12 , x() = alert(a).
