

    /*  To start we will create a new function called newContact()
    then we will create a variable called new Attendee.. with a prompt result


    Lets learn a little bit about DOM or Document Object Model
    https://www.digitalocean.com/community/tutorials/introduction-to-the-dom  */



function newContact() {
    var newAttendee = prompt('What is your name?');
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(newAttendee);
    h1.setAttribute('id', 'newAttendee');
    h1.appendChild(textAnswer);
    document.getElementById('attendeeResult').appendChild(h1); 
}



function reset() {

    /*
        We will create a document get ElementById and then we will connect it to our button in html
        https://www.w3schools.com/jsref/met_element_remove.asp

    */

      document.getElementById('attendeeResult').remove(); 



}