'use strict';
const fruitBasket = [ 'Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon' ];

//const newFruitBasket = fruitBasket.filter((fruit) => !fruit.includes('Lemon'));
function newFruitBasket() {
	let newFruit = fruitBasket.filter((fruit) => !fruit.includes('Lemon'));
	return newFruit;
}

console.log(`My mom bought me a fruit basket, containing ${newFruitBasket()} !`);
