
let fullName = " xtoon ";
let age = 10 ;
let student = true;

document.getElementById("myname").textContent = `My username in scratch is ${fullName}`;
 
document.getElementById("myage").textContent = `My age is ${age}`;


// video 4 input 
   
/*    Easy way, BORRRING!

let username;

username = window.prompt("What do you want your name to be?");

console.log(`their username is ${username}`);

*/

let username;

document.getElementById("MySubmit").onclick = function() {
    username = document.getElementById("MyUsername").value;
   console.log(username)

document.getElementById("TheUsernameShower").textContent = `${username}'s account`
}





/* notes:
 % means remainder
 Document.getElementById("") is for getting ids and stuff
 textcontent is what the text is
var (+ / * %) = (number);
PEMDMOS IS IMPORTANT 
console.log() to write notes in consle

 WINDOW.PROMPT
var= datatype(var);


" " blank string in variable is false for booleans
*/