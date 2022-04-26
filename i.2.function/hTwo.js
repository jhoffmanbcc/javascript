

/* If we return to our alien prompt game.. we will now create a function
to retrieve the name of the individual 

For a function there are two steps:

1. Create the function 
2. Call the function otherwise known as creating a method

*/



// 1. Creating the function

function alien() {


   /* now we we will create a basic variable of a string*/ 

   var name = prompt('What is your name?');

   /* now we will create an object variable that is a little more complex.
   By adding strings to the object.. it is given the name string concatenation.
   
   Concatenation is just a fancy word for the action of linking things together.
   In this case we are linking Strings together.  */

   var result = "Yesterday  " + name + "  entered the spaceship";


   /*  Note we will add some spaces within the quotes to show spaces on the
   screen.  In computer programming.. spaces are treated as characters just
   like the alphabet letters or numbers.. they take up space in a computer
   program.. but ofcourse they are not visible. */

   /* we will then getElementByID to print out on our html page. */

   document.getElementById("blankOne").innerHTML = result;

}

// 2. Don't forget to Call the Method
alien();




 