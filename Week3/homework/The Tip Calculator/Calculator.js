'use strict';

let billAmount = document.querySelector('#bill-amount');

let Service = document.querySelector('#Service');

let peopleNumber = document.querySelector('#people-number');

let calcBtn = document.querySelector('#calc-btn');

let infoPrice = document.querySelector('#infoPrice');

let Each = document.querySelector('#Each');

calcBtn.addEventListener('submit', calculate);

function calculate(prevent) {
	prevent.preventDefault();

	let amountValue = billAmount.value;

	let ServiceEvaluation = Service.value;

	let peopleValue = peopleNumber.value;

	let total = amountValue * ServiceEvaluation / 100;

	let tip = total / peopleValue;

	tip = Math.round(tip * 100) / 100;

	infoPrice.textContent = tip;

	if (amountValue <= '0' || ServiceEvaluation <= '0' || peopleValue <= '0') {
		alert('"You need to fill in all the fields!" ');
	}

	if (peopleValue > 1) {
		Each.innerText = 'Each';
	}
}
