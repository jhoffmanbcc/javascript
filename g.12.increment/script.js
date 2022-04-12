let canvas;
let ctx;
/* since we will use the startingPoint value multiple times.. lets change
its name to fit many uses.  We will call it incrementor .. which signifies
that it will be a variable that is constantly having values added to it
otherwise known as incrmenting. */

let incrementor = 0;
let speed = 5;

window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};

function drawBoxxy() {
  incrementor = incrementor + speed;

  /* we will also draw a black background everytime the page reloads
so that we don't see the previous drawing and it looks like it is
moving like a ball or bullet */

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  /* we also used window.innerWidth and window.innerHeight as a value that receives 
the page side on load.. */

  ctx.fillStyle = "blue";
  ctx.fillRect(incrementor, 10, 100, 100);
  ctx.fillStyle = "green";
  ctx.fillRect(30, incrementor, 250, 250);

  /* In our final rectangle lets use the incrmentor to add to the width and height
of our recantangle. 

*/

  ctx.fillStyle = "red";
  ctx.fillRect(incrementor, incrementor, incrementor, incrementor);
}

/* All of this is created by us adding 5 or incrmenting the value of the 
variable.  Pretty Rad!!

*/
