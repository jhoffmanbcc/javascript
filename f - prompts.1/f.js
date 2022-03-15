







/* a prompt is a popup that will ask the user a question, the code is

 prompt("Please enter your name:", "Harry Potter");
 
Example @ https://www.w3schools.com/jsref/met_win_prompt.asp

 We will create a variable and the variable will = / be assigned the prompt result */

 var questionOne = prompt("What is your name?");

 /* Then we will use getElementById and name the ID "BlankOne"
 After naming it blankone we will assign the result of the prompt of questionOne
 Note: we have to also create an html tag to display the Id within the 'innerHTML'
 go over there and check that out now at the f.htmlpage
 */
 
 document.getElementById("blankOne").innerHTML = questionOne;
 
 /* Thats it!  We created a prompt that is assigned to a variable
 Then we received the result of the prompt and assigned it to a Html tag. */
 