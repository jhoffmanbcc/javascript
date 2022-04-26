var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;

// Here I am going to set the speed
var incrementor = 2;

function Square() {
  ctx.fillStyle = "blue";
  ctx.fillRect(x, 10, 100, 100);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Square();

  /* Here I am creating a simple while statement. 
   The statement says that x is added to incrmentor (speed)
   if the incrementor is greater than canvas width or 
   incrementor is less than 0 then make whatever the current
   number for incrementor negative */

  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  console.log(incrementor + "  incrementor value");
}

setInterval(drawBoxxy, 10);
