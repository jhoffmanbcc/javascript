

    /*  To start we will create a new function called newContact()
    then we will create a variable called new Attendee.. with a prompt result


    Lets learn a little bit about DOM or Document Object Model

    What is the DOM?  
    
    To say it quickly without complications.. 

    HTML tags can be replaced with Javascript. Javascript can dynamically update HTML tags
    The still look like HTML but they now have the interactivity and programming functionality of javascript.

    For example and h1 HTML tag and be changed and updated with javascript.
    Still looks like an h1 tag but has super powers.

    We most commonly update HTML with the dom for:

    query selectors        -- return elments - like getElementID
    event listeners        -- listen for clicks / user input
    and style properties   -- change style

    https://www.w3schools.com/jsref/dom_obj_document.asp
    
    */



function newContact() {
    var newAttendee = prompt('What is your name?');


    /*  In the code below we will create an h1 element that will, create an element node, 
    and later replace a div tag with the create element method . 
    https://www.w3schools.com/jsref/met_document_createelement.asp
    */

    var h1 = document.createElement('h1');

    /* now we will receive the answer to our prompt (new Attendee) and 
    create a TextNode that will be appeneded (added) as a child and replace the h1 at the end
    https://www.w3schools.com/jsref/met_document_createtextnode.asp
    */

    var textAnswer = document.createTextNode(newAttendee);

    /* here we get fancy and an attribute id and varible to the h1 
    https://www.w3schools.com/jsref/met_element_setattribute.asp
    */

    h1.setAttribute('id', 'newAttendee');


    /* then we will append the child of the recent variable textAnswer 
    https://www.w3schools.com/jsref/met_node_appendchild.asp
    */


    h1.appendChild(textAnswer);

    /* lastly we will get the document elementbyId that will show it on our webpage
    ... appending the h1 to the end of it. 
    */

    document.getElementById('attendeeResult').appendChild(h1);
   

}