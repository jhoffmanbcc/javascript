




/* now we will set a variable as a number to use multiple times in our function */


var rectWidth = 350;
var rectHeight = 300;
var startingLine = 10;

/* look in the function draw() for the updates */


var canvas = document.getElementById('creativeCoding');
var ctx = canvas.getContext('2d');
dpi = window.devicePixelRatio;


function fix_dpi() {
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


function draw() {
  var canvas = document.getElementById('creativeCoding');
  if (canvas.getContext) {
   
    fix_dpi(); 
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(255, 255, 0)';


/* now we will pass the variable */

    ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
    ctx.fillRect(startingLine, 100, rectWidth, rectHeight);
    ctx.fillRect(startingLine, 450, rectWidth, rectHeight);
    ctx.fillRect(startingLine, 800, rectWidth, rectHeight);

    }
  }

/* go back to your variables and play around with the numbers
   you will see how variables can help with speeding up iteration
   and modification */










