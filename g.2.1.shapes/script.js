


/* so once again.. this is often called the draw loop.. because it
constantly refreshes the page.. anything inside the draw loop
will repeat over and over.. if it is outside the draw loop
we usually consider that in the setup and will only repeat once. */
/*
  function draw() {
    var canvas = document.getElementById('creativeCoding');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

*/


/* ok ... this is where stuff gets really cool.. they already have
prebuilt methods of shapes, animations, etc. So lets create our first shape. */

  function draw() {
        var canvas = document.getElementById('creativeCoding');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

/* So frist we will create a rect with the rect method. Two things
to think about with this:

1.  How does the html grid work?
2.  How does the Rectangle method work?

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes



*/          
  

/* fillStyle - adds the color property with RGB - 255, 255, 255 */

          ctx.fillStyle = 'rgb(255, 255, 0)';

/* the rectangle parameters are:  x, y, width, and height 

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_rectangles
*/

          ctx.fillRect(10, 10, 20, 20);
  
          ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
          ctx.fillRect(30, 30, 50, 50);

/* similar to static html.. what is written last will lay on top by default. */

          ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
          ctx.fillRect(25, 25, 100, 100);

/* Lineto will create a line:

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo */


          ctx.beginPath();       // Start a new path
          ctx.moveTo(30, 50);     // Move the pen to ( 30, 50 )
          ctx.lineTo(300, 50);   // Draw a line to (150, 100)
          ctx.stroke();          // Render the path
          


        }
        

      }










