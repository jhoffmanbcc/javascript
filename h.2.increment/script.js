/* Ok .. we are going to set an increment.. which is 
increase the position of rectangle .. everytime the page redraws 

first we will create some basic variables to display our window 
on load .. these incorporate the pre-built html canvas api */

let canvas;
let ctx;

/* then we will set some global variables that will be outside
the method, stored and brought back into the method every time
the page reloads */

let startingPoint = 0;
let speed = 5;

/* we will create a startingPoint.. for the starting x position
and a speed component.. that will be used to increment or update the position
evertime the method of drawASquare is loaded */

window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};

function drawBoxxy() {
  /* below we will create a simple addition incrmentor.. that will
add 5 (aka speed) to our startingPoint.. every time the page redraws */

  startingPoint = startingPoint + speed;
  ctx.fillStyle = "blue";

  /* Then when creating the rectangle.. we will use starting point 
as our starting X coordinate.. which will increase by 5 (aka speed)*/

  ctx.fillRect(startingPoint, 10, 10, 100);
}
