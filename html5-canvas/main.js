const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

canvas.addEventListener("mousemove", draw);
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    clearCanvas();
  }
});

var pos = { x: 0, y: 0 };

function clearCanvas() {
  c.clearRect(0, 0, canvas.width, canvas.height);
}

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return;

  c.lineWidth = 5;
  c.lineCap = "round";
  c.strokeStyle = "#000";
  c.beginPath();
  setPosition(e);
  c.moveTo(pos.x, pos.y);
  c.lineTo(pos.x, pos.y);
  c.stroke();
}
