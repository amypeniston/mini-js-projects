const hourHand = document.getElementById('hour-hand');
const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');

function update() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const currentTime = hours + ":" + 
		((minutes < 10) ? "0" : "") + minutes + ":" + 
		((seconds < 10) ? "0" : "") + seconds;
	updateTime(currentTime);
	updateHands(hours, minutes, seconds);
}

function updateTime(currentTime) {
	time = document.querySelector('#time > span')
	time.innerHTML = currentTime;
}

function updateHands(hours, minutes, seconds) {
	hourHand.setAttribute("transform", `rotate(${(hours / 12) * 360 + 90}, 100, 100)`);
	minuteHand.setAttribute("transform", `rotate(${(minutes / 60) * 360 + 90}, 100, 100)`);
	secondHand.setAttribute("transform", `rotate(${(seconds / 60) * 360 + 90}, 100, 100)`);
}

update();
setInterval(update, 1000);