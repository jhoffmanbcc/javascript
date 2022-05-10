

// Here is a reference for adapting strings in an advanced way

let fuzzy = 'wuzzy wuzzy';

// 3.  there is property called .length 
// that will tell you how many characters are in your string.


let seriousQuestion = "Fuzzy Wuzzy wasn't fuzzy, was he? Or wasn't he?";
console.log(seriousQuestion.length);
console.log(fuzzy.length);


/* 4.  You can also search for things within a String
 Note: search is key here.. you will find that one of the biggest
 pieces of magic in regards to programming is search or read through
 a list of results. 

 Therefore while no intiuitive as a needed a tool for us at this 
 point in the learning process.. this is going to be one of the 
 skills we will need to grow and acquire. 

 For our first example.. the built in property will do it for us. 
We will search to see how many times there is a z in fuzzy.  

 */

 
 console.log(fuzzy.indexOf('z'));


 // 5.  Now we do something called slicing which is trimming your words
 // in this case we will slice fuzzy .. and during the slice it is 
 // just going to look at the positions of the characters and send those back. 


 console.log(fuzzy.slice(1,4));


 /* Next we can do a find an replace .. where you find something in your
  string then replace it with something else... we will replace the 
  'y' of wuzzy with 'ier' - making a new word fuzzier */

 //let fuzzy = 'wuzzy';

  console.log(fuzzy.replace('w', 'ier'));


  /* There is also a property to make everything uppercase or lowercase */

  console.log(fuzzy.toUpperCase());
  console.log(fuzzy.toLowerCase());


  //  You can also get the character by its position within the string
  // will give me the Z letter

  console.log(fuzzy.charAt(4));

  // another way to do the same thing is to get the character by 
  // treating the string like it is an array

  console.log(fuzzy[4]);


  /* Another thing you can do is take a sentence or string of words 
  and split them with a comma

  https://www.w3schools.com/jsref/jsref_split.asp

  */


  let bear = 'Fuzzy Wuzzy was a bear';
  console.log(bear.split(' '));
  console.log(bear.split(''));

  // Notice the difference if you don't place a space ;)



