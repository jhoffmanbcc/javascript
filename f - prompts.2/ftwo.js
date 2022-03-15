

/* In this example we will use the same setup as before.. but just use it over and over. 
Try for yourself .. create a new prompt assigned to a variable 
and display it on the html page with agetElementbyID   */


 var questionOne = prompt("What is your name?");
 document.getElementById("blankOne").innerHTML = questionOne;

 var questionOne = prompt("Please enter the secret phrase. I know... I know.. you have no idea... That's ok, just guess!");
 document.getElementById("blankTwo").innerHTML = questionOne;


 /* for the final version we will add a string to the varable for the printout */

 var questionOne = prompt("Another popup... I know I hate these too!!  Although, your secret phrase was not nice enough.. please enter your favorite thing ");
 document.getElementById("blankThree").innerHTML = questionOne + '!!' ;


 var questionOne = prompt("Seriously .. too much I know this is not fun anymore.  Sorry.. but if you could please just guess and enter the correct amount of explamation points.. we will end this madness. ");
 document.getElementById("blankFour").innerHTML = questionOne ;


 