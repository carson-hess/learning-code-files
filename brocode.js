// If statements

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 100){ //order of if statements matters - executes the first one that's true
        resultElement.textContent = "You are too old to enter this site";
    }
    else if(age === 0){
        resultElement.textContent = "You are literally zero";
    }
    else if(age < 0){ 
        resultElement.textContent = "Your age can't be below zero";
    }
    else if(age >= 18){
        resultElement.textContent = "You are old enough to enter this site";
    }
    else{
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmitBtn.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed";
    }
    else{
        subResult.textContent = "You are not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are using Visa";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "You are using PayPal";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = "You are using MasterCard";
    }
    else{
        paymentResult.textContent = "You must select a payment type";
    }
}

setTimeout(function(){
    resultElement.textContent = "";}
, 5000);
setTimeout(function(){
    subResult.textContent = "";}
, 5000);
setTimeout(function(){
    paymentResult.textContent = "";}
, 5000);

// .checked - property that determines the checked state of an HTML checkbox or radio button element

/* ternary operator = a shortcut to if{} and else{} statements. Helps to 
assign a variable based on a condition. 
condition ? codeIfTrue : codeIfFalse; */

let age1 = 21;
let message = age1 >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

let time = 16;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);

let isStudent = true; // with boolean variables, you just say the variable
let message1 = isStudent ? "You are a student" : "You are not a student";
console.log(message1);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

// SWITCH statements = can be an efficient replacement to many else if statements.

let day = 1;
switch(day){
    case 1: 
        console.log(`It is Monday`);
        break; //reason you need the break is to break out of the switch when a match is found.
    case 2:
        console.log(`It is Tuesday`);
        break;
    case 3:
        console.log(`It is Wednesday`);
        break;
    case 4: 
        console.log(`It is Thursday`);
        break;
    case 5:
        console.log(`It is Friday`);
        break;
    case 6: 
        console.log(`It is Saturday`);
        break;
    case 7:
        console.log(`It is Sunday`);
        break;
    default: 
        console.log(`${day} is not a day`); //template-literal for inserting variables
}

let testScore = 99;
let letterGrade;
switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}
console.log(`You got a ${letterGrade}`);

// string methods = allows you to manipulate and work with text (strings)

let userName = "Bro Code   ";
console.log(userName.charAt(0)); //first character is zero

console.log(userName.indexOf("o")); //returns index of first match
console.log(userName.lastIndexOf("o")); //returns last match in string
console.log(userName.length); //returns length of the string
userName = userName.trim(); //trims any white space before or after the text
console.log(userName);
//.toUpperCase() method to make all uppercase
//.toLowerCase() method to make all lowercase
//.startsWith() will check to see what string starts with. Returns true/false

let result = userName.includes(" ");
if(result){
    console.log(`Your username can't include a ' ' `);
}
else{
console.log(userName);
}

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);
phoneNumber1 = phoneNumber.padStart(20, "0"); //padStart or padEnd..makes string the number of characters in first number.
console.log(phoneNumber1);

// string slicing = creating a substring from a portion of another string. 
// string.slice(start,end)

const fullName = "Bro Code";
// let firstName = fullName.slice(0,3);
// console.log(firstName);
// let lastName = fullName.slice(4); // don't need an ending index if going to the end
// console.log(lastName);
// let firstChar = fullName.slice(0,1);
//let lastChar = fullName.slice(-1); //negative index --> begins at the end
//console.log(firstChar);
//console.log(lastChar);
/*to make a program like this more dynamic, can use slice method with 
index of method */

let firstName = fullName.slice(0,fullName.indexOf(" ")); // where's the first index of a space
console.log(firstName);

let lastName = fullName.slice(fullName.indexOf(" ") + 1);
//find me first index of space and add one to index so we don't start with the space.
console.log(lastName);

const email = "carsonh58@gmail.com";
let userName1 = email.slice(0,email.indexOf("@"));
console.log(userName1);
const domain = email.slice(email.indexOf("@") + 1);
console.log(domain);
const emailSystem = email.slice(email.indexOf("@") + 1,email.indexOf("."));
console.log(emailSystem);

// Method Chaining = calling one method after another in one continuous line of code. 
// NO METHOD CHAINING ------

// let userName2 = window.prompt("Enter your username: ");
/*
userName2 = userName2.replace(/\s+/g, '');  // Removes all white spaces (leading, trailing, and in-between). Regular expression
//check validation rules
if (userName2.includes("@") && userName2.includes(".com")){
    console.log("Valid email");
}
console.log("Invalid email. Please include an '@' and '.com.");
}
userName2 = userName2.trim(); // removes leading and trailing white space
let letter = userName2.charAt(0); // grabs first character
letter = letter.toUpperCase(); // makes first character uppercase
else{
let extraChars = userName2.slice(1); // creates new string variable starting from index 1
extraChars = extraChars.toLowerCase(); // makes this new string variable all lowercase
userName2 = letter + extraChars; // concatenates the strings
console.log(userName2);
*/

// ------ METHOD CHAINING ------
// userName2 = userName2.trim().charAt(0).toUpperCase() + userName2.trim().slice(1).toLowerCase();
// console.log(userName2);
// Method chaining + string concatenation

//logical operators = used to combine / manipulate boolean values (true or false)
// AND = &&
// OR = ||
// NOT = !

const temp = 200;
if(temp <= 0 || temp > 30){ // in order to trigger this condition, both conditions must be true
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

const isSunny = false;
if(!isSunny){ //"If it is not sunny"
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}

// = Assignment operator
// == comparison operator (compares if values are equal)
// === strict equality operator (compares if values & datatype are equal)
// != inequality operator
// !== strict inequality operator. basically just the opposite of strict equality operator.

const PI = 3.14;
if(PI === "3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
} // returns true when == because it's checking value. With ===, returns false

//While loops = repeats some code WHILE some condition is true

//let userName3 = window.prompt("Enter your username: ");

//let userName3 = "";
/*
while(userName3 === "" || userName3 === null){
    userName3 = window.prompt(`Enter your name`);
} //want some kind of way to exit the loop while you're in it otherwise it'll run forever
*/
//console.log(`Hello ${userName3}`);

//can also use a "Do While" loop
//let loggedIn = false;
//let username4;
//let password;
/*
do{
    username4 = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`);
    if(username4 === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}while(!loggedIn)
*/

//for loop = repeats some code a LIMITED number of times. Need three statements
// first statement - starting value
// second statement - end the loop when it's this value
// third statement - increments the starting value
for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue; //skips this iteration of the loop. 
        // could also break; 
    }
    else{
        console.log(i);
    }
}
/*
//NUMBER GUESSING GAME
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`).trim();
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAIN!");
    } else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN");
    } else {
      window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
      running = false;
    }
  }
}
*/

// function = a section of reusable code. Declare code once and use it whenever you want. 
// just call the function to execute that code.

function happyBirthday(username5, age){
    console.log(`Happy Birthday to you!`);
    console.log(`Happy Birthday to you!`);
    console.log(`Happy Birthday dear ${username5}!`);
    console.log(`Happy Birthday to you!`);
    console.log(`You are ${age} years old`);
}

happyBirthday("BroCode", 25); // parameters in the parenthesis. 
// when you call the function, your parameters are now "arguments"
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 30);
// order of the arguments matters. 

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){ // when we "invoke" the function, we'll have to return a number.
    /*if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }*/
   return number % 2 === 0 ? true : false;
}

function isValidEmail(email3){
    return email3.includes("@") ? true : false;
}

console.log(isValidEmail("Bro@fake.com"));
console.log(isValidEmail("elon.elon.com"));

//variable scope - where a variable is recognized and accessible (local vs global scope)
let x1 = 1; //each variable name needs to be unique in that scope. Can't then run "let x1 = 2"

function function1(){
    let x=1;
    console.log(x);
}

function function2(){
    let x=2; // this is legal as long as the variable has a local scope.  
    console.log(x); // inside of a function, a variable has a local scope.
}
//functions can't see into other functions. Functions are kind of like neighboring houses.
// a global variable is recognized and accessible everywhere
// best practice in a large program is to use local variables so you don't accidentally re-use the same variable.
/* when function is invoked and function declares local variable and there's a global version of that 
 same variable --> function result will return the local variabla. */

// Temperature converion program

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result1 = document.getElementById("result1");
let temp1;

function convert(){

    if(toFahrenheit.checked){
        temp1 = Number(textBox.value);
        temp1 = temp1 * 9/5 +32;
        result1.textContent = temp1 + "°F";
    }
    else if(toCelsius.checked){
        result1.textContent = "You selected to Celsius";
        temp1 = Number(textBox.value);
        temp1 = 5/9 * (temp1 - 32);
        result1.textContent = temp1 + "°C";
    }
    else{
        result1.textContent = "Select a unit";
    }
}

// Array = a variable-like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"]; //best practice is to make array variables plural

//fruits.push("coconut"); adds coconut to the end
//fruits.pop(); removes last element from array
// fruits.unshift("mango"); adds element to the beginning
// fruits.shift(); removes element from beginning

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple"); //returns -1 if the element wasn't found
console.log(index);

fruits.sort().reverse();
for(let fruit of fruits){
    console.log(fruit);
}

/*Spread operator = ... allows an iterable such as an array or string 
to be expanded into separate elements (unpacks elements)*/

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers); //unpacks elements. Without spread operator, returns "NaN"
let minimum = Math.min(...numbers);
console.log(minimum);

//can also do this with strings

let username6 = "Bro Code";
let letters = [...username6].join("-"); //created an array of characters
console.log(letters);

//can combine two arrays with the spread operator
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]; //combines elements of arrays + loose elements
console.log(foods);

// rest parameters = (...rest) allows a function to work with a variable number of arguments by bundling them into an array
// spread = expands an array into separate elements
// rest = bundles separate elements into an array

function openFridge(...foods1){ //designed to accept any number of arguments
    console.log(foods1); //could also separate elements again by using spread operator here ...foods1
}
function getFood(...foods1){
    return foods1;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5); 

const foods1 = getFood(food1, food2, food3, food4, food5);
console.log(foods1);

function sum(...numbers){
    let result2 = 0;
    for(let number of numbers){
        result2 += number;
    }
    return result2;
}

function getAverage(...numbers){
    let result2 = 0;
    for(let number of numbers){
        result2 += number;
    }
    return result2 / numbers.length
}

const total = getAverage(100, 75, 50);

console.log(`Your average is $${total}`);

// can use rest parameters to combine strings together

function combineStrings(...strings1){
    return strings1.join(" ");
}

const fullName1 = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName1);