
/*

2. We will select a library of pre-built functions that are stored in an API to
give us a suite of easy to use functions and methods for designing shapes,
animating them, etc. 

The two options for these APIs within javascript are:

Canvas API - which mainly focuses on 2D graphics ( see below for resources )
WebGL - where you can use both 2D and 3D elements. ( see below for resources )

https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL

*/

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

/* First we are going use some dom to connect our javascript to the 
html and css elments */

var canvas = document.getElementById('creativeCoding');

/* Then we are going to use the canvas API.. canvas has an 
element called getContext that starts the rendering or draw loop.

A draw loop will constant refresh the background so that if we
create animations.. we will see it move.  Usually on a webpage
the background only refreshes if we refresh the browser.  */

var ctx = canvas.getContext('2d');

/* note.. it is good practice to read documentation... that is usually
the most up to date and best resource for learning. Even better than
your professor ;) */

/* Second note.. older browsers don't always play nice with canvas. 
Therefore usually one will put a fallback piece of code it looks like this

var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');


The code above is a conditional... it looks for the getContext.. and if
it finds it .. it will process the variable getContext.

*/

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/* Here are some additional HTML5 canvas resources:





HTML5 Canvas tutorials 

https://www.html5canvastutorials.com/



Mozilla Developer Network 

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial


Canvas from Scratch

https://code.tutsplus.com/series/canvas-from-scratch--net-19650



Dive into Html5

http://diveintohtml5.info/canvas.html





*/



