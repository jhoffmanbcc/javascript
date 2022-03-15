

/* check out the W3Schools guide for the definition of Variables. 
It discusses:  Let, Const, and Var 

https://www.w3schools.com/js/js_variables.asp

Var is the most flexible variable.... 
you can declare and redeclare as you wish.

*/



/* Block Scope is an important term.  
Scope provides specific focus of your code so that you can 
essentially create compartments or objects within the code. 

Scope is similar to div tags from html.  Scope creates containers where pieces 
of code will communicate only within those brackets {}.  

And some variables only like to work within that. 

Var cannot be constrained by scope.. they will always be accessible. */


/*  For instance .. Let variables can not be redeclared.. meaning

let x = 3;
let x = 0; 

This will not work.  Let can only be declared once. 

Although you can declare let multiple times.. where let will have different
values based on where it is in the code, for example:  */

let x = 3;

{
    let x = 10;
}


/* in the instance above let x equals 
3 outside of the brackets and 
10 inside of the brackets */

/* On the other hand with Var .. the value will change if you update
the value inside the brackets.  */


var y = 33;

{
    var y = 100;
}

/* in the instance above var x equals 
33 outside of the brackets and 
100 inside of the brackets and outside the brackets */



/* a variable defined with const will never be able to be 
redefined or reassigned with or without brackets.. 
it is set it and forget it ;)  */






