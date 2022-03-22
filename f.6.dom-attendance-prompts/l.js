



function newContact() {
    var newAttendee = prompt('What is your name?');
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(newAttendee);
    h1.setAttribute('id', 'newAttendee');
    h1.appendChild(textAnswer);
    document.getElementById('attendeeResult').appendChild(h1); 
}



function reset() {

      document.getElementById('attendeeResult').remove(); 

}