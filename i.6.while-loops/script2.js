/* Now lets add a while loop to our animation */

let canvas;
let ctx;
let incrementor = 0;

window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};

function drawBoxxy() {
  while (incrementor < 1000) {
    incrementor++;
    console.log(incrementor);
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = "blue";
  ctx.fillRect(incrementor, 10, 100, 100);
}
