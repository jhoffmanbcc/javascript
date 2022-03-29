






var rectWidth = 350;
var rectHeight = 300;
var startingLine = 100;

/* playing with number is as easy as assigning a variable. */


/* Then we will assign some math to the variables and use it in our program */

var x = 50 + 50;
var y = startingLine + 350;
var z = 400 * 2;
var finishLine = (rectHeight/ 2) + 1500; 



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
    ctx.fillStyle = 'rgb(0, 255, 0)'; 


/* now we will pass the variable */

   
    ctx.fillRect(startingLine, x, rectWidth, rectHeight);
    ctx.fillRect(startingLine, y, rectWidth, rectHeight);
    ctx.fillRect(startingLine, z, rectWidth, rectHeight);
    ctx.fillRect(finishLine, 0, 20, 1500);


    }
  }

/* go back to your variables and play around with the numbers
   you will see how variables can help with speeding up iteration
   and modification */










