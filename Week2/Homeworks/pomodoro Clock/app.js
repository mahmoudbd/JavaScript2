let sessionLength = document.querySelector('.session-length');
let paly = document.querySelector('#play');
let counter = document.querySelector('.counter');
let puse = document.querySelector('#puse');
let arrowUp = document.querySelector('.arrow-up');
let arrowDown = document.querySelector('.arrow-down');
let startTime = parseInt(sessionLength.innerText) * 60;
let check = false;
let interv;

function interval(check) {
	if (check === true) {
		interv = setInterval(() => {
			startTime--;
			counter.innerText = displayCurrentTimeLeftInSession();
			counterZero();
		}, 1000);
	} else {
		clearInterval(interv);
	}
}

function actions() {
	paly.addEventListener('click', () => {
		interval(true);
	});

	puse.addEventListener('click', () => {
		interval(false);
	});

	arrowUp.addEventListener('click', () => {
		startTime += 300;
		counter.innerText = displayCurrentTimeLeftInSession();
		sessionLength.textContent = displayCurrentTimeLeftInSession();
	});

	arrowDown.addEventListener('click', () => {
		startTime -= 300;
		counter.textContent = displayCurrentTimeLeftInSession();
		sessionLength.innerText = displayCurrentTimeLeftInSession();
	});
}
actions();

function counterZero() {
	if (counter.textContent == '00:00') {
		clearInterval(interv);
	}
}

let displayCurrentTimeLeftInSession = () => {
	let secondsLeft = startTime;
	let result = '';
	let seconds = secondsLeft % 60;
	let minutes = parseInt(secondsLeft / 60) % 60;

	function addZeroes(time) {
		return time < 10 ? `0${time}` : time;
	}

	result += `${addZeroes(minutes)}:${addZeroes(seconds)}`;
	return result.toString();
};
