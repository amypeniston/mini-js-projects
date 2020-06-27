const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");
c.lineWidth = 25;
c.lineCap = "round";
c.lineJoin = "round";

let hue = 0;
let isDrawing = false;
let lastPos = { x: 0, y: 0 };

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  setPosition(e);
});

canvas.addEventListener("mouseout", () => (isDrawing = false));

canvas.addEventListener("mouseup", () => (isDrawing = false));

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    clearCanvas();
  }
  if (e.keyCode === 219) {
    c.lineWidth === 0 ? (c.lineWidth = 0) : (c.lineWidth = c.lineWidth - 2);
  }
  if (e.keyCode === 221) {
    c.lineWidth === 100 ? (c.lineWidth = 100) : (c.lineWidth = c.lineWidth + 2);
  }
});

function clearCanvas() {
  c.clearRect(0, 0, canvas.width, canvas.height);
}

function setPosition(e) {
  lastPos.x = e.clientX;
  lastPos.y = e.clientY;
}

function draw(e) {
  if (!isDrawing) return;
  c.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  c.beginPath();
  c.moveTo(lastPos.x, lastPos.y);
  c.lineTo(e.offsetX, e.offsetY);
  c.stroke();
  setPosition(e);
  hue++;
  if (hue >= 360) hue = 0;
}
