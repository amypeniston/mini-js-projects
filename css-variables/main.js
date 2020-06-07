const root = document.documentElement;
const inputs = document.querySelectorAll('.controls input');

function updatePage() {
	const label = document.getElementById(this.id + '-label');
	const units = this.dataset.units || '';
	label.innerHTML = this.value;
	root.style.setProperty(`--${this.id}`, this.value + units);
}

inputs.forEach(input => input.addEventListener('input', updatePage));