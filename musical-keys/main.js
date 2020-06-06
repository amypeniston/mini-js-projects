function playSound(e) {
	const key = document.querySelector(`div[data-value="${e.keyCode}"]`);
	const audio = document.querySelector(`audio[data-value="${e.keyCode}"]`);
	if (!audio || !key) return;
	audio.currentTime = 0; // to allow same sound to be played in quick succession
	audio.play();
	key.classList.add("playing");
}

function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);