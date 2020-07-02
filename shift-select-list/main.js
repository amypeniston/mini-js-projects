var isHoldingShift = false;
var lastChecked = null;
const selectButton = document.getElementById("select");
const deselectButton = document.getElementById("deselect");
var inputs = Array.from(document.getElementsByTagName("input"));

inputs.forEach((input) => {
  input.addEventListener("change", (e) => checkBoxes(e));
});

document.body.addEventListener("keydown", (e) => {
  if (e.code === "ShiftLeft" || e.code == "ShiftRight") {
    isHoldingShift = !isHoldingShift;
  }
});

document.body.addEventListener("keyup", (e) => {
  if (e.code === "ShiftLeft" || e.code == "ShiftRight") {
    isHoldingShift = !isHoldingShift;
  }
});

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

function findCheckbox(checkbox) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] === checkbox) {
      return i;
    }
  }
}

function checkBoxes(e) {
  let checkedValue = findCheckbox(e.target);
  if (e.target.checked && checkedValue === lastChecked) {
    lastChecked = null;
  }
  if (isHoldingShift) {
    inputs.forEach((input) => {
      let currentValue = findCheckbox(input);
      if (
        lastChecked &&
        currentValue > lastChecked &&
        currentValue < checkedValue
      ) {
        input.checked = true;
      }
    });
  }
  currentValue = null;
  lastChecked = checkedValue;
}
