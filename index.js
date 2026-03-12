
let fullName = " xtoon ";
let age = 100 ;
let student = true;

document.getElementById("myname").textContent = `My username in scratch is ${fullName}`;
 
document.getElementById("myage").textContent = `My age is ${age}`;


// video 4 input 
   
/*    Easy way, BORRRING!

let username;

username = window.prompt("What do you want your name to be?");

console.log(`their username is ${username}`);

*/
 // video 4 cool way
let username;

document.getElementById("MySubmit").onclick = function() {
    username = document.getElementById("MyUsername").value;
   console.log(username)

document.getElementById("TheUsernameShower").textContent = `${username}'s account`
}

//NUMBER COUNTER


const decreaseBtn = document.getElementById("decreasebtn");

const increaseBtn = document.getElementById("increasebtn");

const resetBtn = document.getElementById("resetbtn");

const countingLabel = document.getElementById("countinglabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countingLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countingLabel.textContent = count;
}
resetBtn.onclick = function(){
    count=0;
    countingLabel.textContent = count;
}

const randomLabel = document.getElementById("randomLabel");
const randomButtoner = document.getElementById("RandomButtoner");
const min = 1;
const max = 20;
let randomnum;

randomButtoner.onclick = function(){
    randomnum = Math.floor(Math.random() * max)+ min;
    randomLabel.textContent = randomnum;




    

}
//video 6
/*
const PI = 3.14159265;
let radius
let circumference;
radius = window.prompt('What is the radius of a circle?')
radius = Number(radius);

circumference= 2 * pi * radius;

console.log(circumference);
*/


/* notes:
 % means remainder
 Document.getElementById("") is for getting ids and stuff
 textcontent is what the text is
var (+ / * %) = (number);
PEMDMOS IS IMPORTANT 
console.log() to write notes in consle

 WINDOW.PROMPT
var= datatype(var);
MATH can show PI and E
floor to round down ceil to round up 
abs truns negetive to positive
max & min mean minimun and maximum

" " blank string in variable is false for booleans
*/