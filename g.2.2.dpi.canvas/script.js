



/* One issue that is apparent is that the shapes we are creating are a bit fuzzy.
While this is not an urgent area for understanding... Some design oriented individuals
may be bothered by the funky edges.. 

So we will show you really fast how to fix that. 

Here is a nice blog that goes indepth to the issue and how to solve it. 

https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da


DPI stands for Dots Per Inch. 

*/



var canvas = document.getElementById('creativeCoding');
var ctx = canvas.getContext('2d');
/* here we will assign dpi to the method of devicePixelRatio */
dpi = window.devicePixelRatio;



/* create a specific function to address dpi */
function fix_dpi() {
    //create a style object that returns width and height
    let style = {
      height() {
        return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
      },
      width() {
        return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
      }
    }

  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}


/* run the dpi method within the draw function */
function draw() {
  var canvas = document.getElementById('creativeCoding');
  if (canvas.getContext) {
    //call the dpi fix every time 
    //canvas is redrawn
    fix_dpi(); 

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(255, 255, 0)';
    ctx.fillRect(10, 10, 200, 500);
    ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
    ctx.fillRect(30, 30, 500, 500);
    ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
    ctx.fillRect(25, 25, 500, 500);
    ctx.beginPath();       // Start a new path
    ctx.moveTo(30, 50);     // Move the pen to ( 30, 50 )
    ctx.lineTo(300, 50);   // Draw a line to (150, 100)
    ctx.stroke();          // Render the path


    /* we have not animated anything yet.. but if you do .. make sure to add 
    the following method to re-request for each draw */
    requestAnimationFrame(draw); 
    }
  }

   /* one more time here */
   requestAnimationFrame(draw);










