

/* When creating a function .. understanding the difference between an argument and a 
parameter are important. 

Parameter are names created to build your function.  Alone they do not have a specific value,
the create the structure in which value is passed.  


At the end of the day - You - or the users entering input create the value.  When they 
create a value, that value is passed through a parameter.  The name we give that value
is an argument. 

The argument is the value passed through the parameter of the function.

Lets make some parameters in a function for the alien name and noise the alien yelled.

*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXAMPLE One
/////////////////////////////////////////////////////////////////////////////////////////////////////////


/* First lets just create an example.. to keep things clean.. then we will add our prompts.
Below:
1. created a function with two parameters - alienName and noise
2. Print to screen the sum of the variable alienResult
3. Pass through 2 arugments 'Baba' and "Ganoosh"

The result will print the answers of Baba Ganoosh on our screen.
 */




function paramtersOne(input1) {

// below we will create a piece of code for the answers to show up on the html page.

  document.getElementById("blankOne").innerHTML = input1;
}

// here we have a method that will run the function and we are entering the arguments to pass through.

paramtersOne( 'Baba');



/////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECOND EXAMPLE
// In the second example we will create two inputs, add them together and print to screen.
/////////////////////////////////////////////////////////////////////////////////////////////////////////


function paramtersTwo(input1, input2) {

// below we will create a piece of code for the answers to show up on the html page.


  var result = input1 + input2;
  document.getElementById("blankTwo").innerHTML = result;
}

// here we have a method that will run the function and we are entering the arguments to pass through.

paramtersTwo( 'Baba',  'Ganoosh!!');


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// THIRD EXAMPLE
// In the third example we will create three inputs, add them together and print to screen.
/////////////////////////////////////////////////////////////////////////////////////////////////////////



function paramtersThree(input1, input2, input3) {

   // below we will create a piece of code for the answers to show up on the html page.
   
   
     var result = input1 + input2 + input3;
     document.getElementById("blankThree").innerHTML = result;
   }
   
   // here we have a method that will run the function and we are entering the arguments to pass through.
   
   paramtersThree( 'Baba',  '    Ganoosh', ' !!!!!!!');


   
   