console.log("Hello");
console.log("I like pizza");

document.getElementById("myH1").textContent = "Hello"; //changes the value of the content with Id="myH1"
document.getElementById("myP").textContent = "I like pizza";
// window.alert(`This is an alert!`); //creates a pop up window
/* This is a next
line
comment*/

//document.getElementById("p1").textContent = `Your name is ${fullName}`;
//document.getElementById("p2").textContent = `You are ${age} years old`;
//document.getElementById("p3").textContent = `Enrolled: ${student}`;

//Arithmetic operators and operands

let students = 30;
//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//Exponents are represented by double asterisks
//students = students ** 2;
//students = students % 3; divides by the number and returns the remainder "Modulus" operator

students +=2; //has same output as students = students + 1
students /=2;
students %=2; //returns 0 because 30/2 has no remainder

students++; //increment operator
students--; //decremend operator

console.log(students);

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result); //returns 23 - computer follows PEMDAS where modulus operator is treated like division/multiplication step

//How to accept user input
// 1. Easy way = window prompt
// 2. Professional way = HTML textbox

//let username;
//username = window.prompt("What's your username?");
//console.log(username);

//professional way --> go to HTML file
let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
} //logs username input into the console

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
} // changes header element

//Type conversion - change the datatype of a value to another (strings, numbers, booleans)
//let age = window.prompt("How old are you?"); //Window prompts are strings
//age+=1; //because this prompt is a number and above is a string, it does a concatenation
//console.log(age);

//let age1 = window.prompt("How old are you?");
//age1 = Number(age1);
//age1 += 1;
//console.log(age1, typeof age1);

//Type conversions - with String(), Number(), Boolean() functions, can convert variables/inputs to a different type
let z;
z = Boolean(z);
console.log(z, typeof z);

// const = a variable that can't be changed. Best practice is to make constant declarations all uppercase (unless it's a string)
const PI = 3.14159; 
let radius;
let circumference;

document.getElementById("mySubmit1").onclick = function(){
    document.getElementById("myText1").value; //get the value from the text box
    radius = Number(radius);
    console.log(typeof radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
    console.log(circumference);
}

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

let x = 3.6;
let y = 2;
let f;
f = Math.round(x); //rounds normally
console.log(f);
g = Math.floor(x); //rounds down
h = Math.ceil(x); // rounds up
i = Math.trunc(x); //removes any decimal portion
j = Math.pow(x, y); //x to the power of y
console.log(j);
// Also sin, cos, tan functions in Math. eg. Math.cos(0); returns 1 when logged.

//const min = 50;
//const max = 100;

//let randomNum = Math.floor(Math.random() * (max - min)) + min; //random() method generates number between 0 - 1.
//console.log(randomNum);

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}