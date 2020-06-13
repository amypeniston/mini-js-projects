let panels = document.querySelectorAll('.panel');

function expandPanel() {
	this.classList.toggle('focus');
}

panels.forEach(panel => panel.addEventListener(
		'mouseenter',
		expandPanel
	)
);

panels.forEach(panel => panel.addEventListener(
		'mouseleave',
		expandPanel
	)
);