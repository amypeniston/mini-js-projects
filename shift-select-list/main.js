let lastChecked;
const selectButton = document.getElementById("select");
const deselectButton = document.getElementById("deselect");
var inputs = Array.from(document.getElementsByTagName("input"));

deselectButton.addEventListener("click", (e) => clearAllCheckboxes(e));
selectButton.addEventListener("click", (e) => checkAllCheckboxes(e));

function clearAllCheckboxes(e) {
  e.preventDefault();
  inputs.forEach((input) => {
    input.checked = false;
  });
}

function checkAllCheckboxes(e) {
  e.preventDefault();
  inputs.forEach((input) => {
    input.checked = true;
  });
}

inputs.forEach((input) => {
  input.addEventListener("click", handleCheck);
});

function handleCheck(e) {
  let inRange = false;
  if (e.shiftKey && this.checked) {
    inputs.forEach((input) => {
      if (input === this || input === lastChecked) {
        inRange = !inRange;
      }
      if (inRange) {
        input.checked = true;
      }
    });
  }
  lastChecked = this;
}
