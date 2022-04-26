let canvas;
let ctx;
let startingPoint = 0;
let speed = 5;

window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 10);
};

function draw() {
  // ctx.fillStyle = "black";
  // ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  if (startingPoint < 800) {
    ctx.clearRect(startingPoint, 10, 10, 100);
    ctx.fillStyle = "red";
    startingPoint = startingPoint + speed;
    console.log(startingPoint + "positive");
  } else if (startingPoint > 800) {
    ctx.fillStyle = "blue";
    ctx.clearRect(startingPoint, 10, 10, 100);
    startingPoint = startingPoint - 5;
    console.log(startingPoint + "negative");
  }
}
