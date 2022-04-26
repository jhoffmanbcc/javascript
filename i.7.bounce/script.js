
/* The following examples are based off of this
breakout game and tutorial 

http://breakout.enclavegames.com/  */


/* First we will setup our canvas.. the way we did before */

var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

/* Then we will initialize our variables */

var x = 0;
var incrementor = 2;

/* Here we create a function called square and we will run
the method of function within our drawBoxxy function below */

function Square() {
  ctx.fillStyle = "blue";
  ctx.fillRect(x, 10, 100, 100);
}

/* In the drawBoxxy function we have to use clearRect.. that 
constantly clears and refreshes a rectangle that is the size
of the entire screen - canvas.width and canvas.height */

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Then we run the method of Square
  Square();

  // Then we update the x variable by adding it to the incrementor variable

  x += incrementor;
}

/* Lastly we set the Interval of the refresh of drawBoxxy so that
 we can slow it down and see the referesh */

setInterval(drawBoxxy, 10);
