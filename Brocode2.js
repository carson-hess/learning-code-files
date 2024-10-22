// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "123456789";
    const symbolChars = "!@£$%^&*()-+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `password length must be at least 1`;
    }

    if(allowedChars.length === 0){
        return `At least one set of characters needs to be selected`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                    includeLowercase, 
                                    includeUppercase, 
                                    includeNumbers, 
                                    includeSymbols);

console.log(`Generated password: ${password}`);


//callback = a function that is passed as an argument to another function 
// used to handle asynchronous operations such as :
//  1. Reading a file
//  2. Network requests
//  3. Interacting with databases
// "Hey, when you're done, call this next."

hello(wait); //ensures the function passed in happens next

function hello(callback){ //callback is a variable argument in this case
    console.log("hello");
    callback();
}

function wait(){
    console.log("wait!");
}

function leave(){
    console.log("leave!");
}

function goodbye(){
    console.log("goodbye");
}

// Another example

/*

sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y; // local variable called "result"
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}
*/


/* forEach() - method used to iterate over the elements of an array and apply a 
a specified function (callback) to each element 
array.forEach(callback) --> ELEMENT, INDEX, ARRAY are provided*/
// forEach is expecting to receive these arguments in that specific order
// first argument passed will always be the element (current item in array)
// second argument will always be index
// third will always be array

/*let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube); //change which function you're calling
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[element] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}

*/

let numbers1 = [1, 2, 3, 4, 5];
function printNumber(pie){
    console.log(pie);
}

numbers1.forEach(printNumber);

// Iterates over all numbers in the array
// first iteration: printNumber(1) is called and 1 is printed
// second iteration: printNumber(2) is called and 2 is printed
// third iteration: printNumber(3) is called and 3 is printed
// fourth iteration: printNumber(4) is called and 4 is printed
// fifth iteration: printNumber(5) is called and 5 is printed

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(displayFruits);

console.log(fruits); // notice the fruits array is now changed because of forEach method.
 
function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function displayFruits(element){
    console.log(element);
}


// .map() accepts a callback and applies that function to each element of an array, then return a new array

const numbers2 = [1, 2, 3, 4, 5];

const squares = numbers2.map(square);
const cubes = numbers2.map(cube);

console.log(squares)

function square(element){
    return Math.pow(element, 2); // the return statment maps the value back to map function
} 

function cube(element){
    return Math.pow(element, 3); 
} 

// forEach changes the array. .Map() returns a new array

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const studentsUpper = students.map(uppercase);
const studentsLower = students.map(lowercase);

console.log(studentsLower);

function uppercase(element){
    return element.toUpperCase();
}

function lowercase(element){
    return element.toLowerCase();
}

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

// .filter() = creates a new array by filtering out elements
// .filter() takes a boolean argument 

let numbers3 = [1, 2, 3, 4, 5, 6, 7];

let evenNums = numbers3.filter(isEven);
console.log(evenNums);

let oddNums = numbers3.filter(isOdd);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0; //returns a boolean
}

function isOdd(element){
    return element % 2 !== 0;
}

// note that .forEach(), .map(), and .filter() are designed to take callbacks as arguments

const ages = [21, 20, 16, 17, 18, 19, 20, 22, 60];
const adults = ages.filter(isAdult); //filter method like map method does not change base array
const children = ages.filter(isChild);
console.log(adults);
console.log(children);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
console.log(shortWords);
console.log(longWords);

function getShortWords(element){
    return element.length <= 6; // strings have a length property
}

function getLongWords(element){
    return element.length > 6; 
}

// .reduce() = reduces the elements of an array into a single value. 
//implicit assumption that the elements are numbers.

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sumValues);

console.log(`$${total.toFixed(2)}`); //adds two decimal places

function sumValues(accumulator, element){
    return accumulator + element;
}

const grades = [75, 50, 90, 80, 65, 95];

const maxValue = grades.reduce(minGrade);

console.log(maxValue);

function maxGrade(accumulator, element){
    return Math.max(accumulator, element);
} 

function minGrade(accumulator, element){
    return Math.min(accumulator, element);
}

// function declarations = define a reusable block of code (what we've been doing up until this point)

//function expressions = a way to define functions as values or variables

/*
setTimeout(function(){
    console.log("Hello");
}, 3000);
*/

const numbers4 = [1, 2, 3, 4, 5, 6];
const squares1 = numbers4.map(function(element){
    return Math.pow(element, 2);
});
// benefit of doing this is it does not pollute the global name space
console.log(squares1)

const getCubed = numbers4.map(function(element){
    return Math.pow(element, 3);
});
console.log(getCubed);

// Filter out even/odd numbers:
const evens = numbers4.filter(function(element){
    return element % 2 === 0;
})
console.log(evens);

const odds = numbers4.filter(function(element){
    return element % 2 !== 0;
})
console.log(odds);
const total8 = numbers4.reduce(function(accumulator, element
){
    return accumulator + element
});

console.log(total8);

// arrow functions = a concise way to write function expressions
// (parameters) => some code
/*
const hello2 = (name, age) => {console.log(`Hello ${name}`); 
                            console.log(`You are ${age} years old`)};
hello2("Bro", 25);
*/

/*
setTimeout(function(){
    console.log("Hello");
}, 3000);
*/
/*
//same as 
setTimeout( () => console.log("Hello"), 3000);
*/

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8];

const squares2 = numbers5.map((element) => Math.pow(element, 2));
const cubes1 = numbers5.map((element) => Math.pow(element, 3));
const evenNums1 = numbers5.filter((element) => element % 2 === 0);
const oddNums1 = numbers5.filter((element) => element % 2 !== 0);
const total9 = numbers5.reduce((accumulator, element) => accumulator + element);

console.log(total9);

/* Object = a collection of related properties and/or methods
Can represent real world objects (people, products, place)
object = {key: value, 
    function()}

Note that key: value pairs are separated by comma    */

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30, 
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: () => console.log("I am eating a Krabby Patty"),
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42, 
    isEmployed: false,
    sayHello: () => console.log("This is Patrick!"),
    eat: function(){console.log("I am eating roast beef, chicken and pizza")},
}

person1.eat();
person2.eat();

/* this = reference to the object where THIS is used
object depends on the immediate context
person.name = this.name
*/

const person3 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

const person4 = {
    name: "Patrick",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}
//cannot use arrow functions with 'this'.
person3.sayHello();
person3.eat();
person4.sayHello();
person4.eat();

//methods are built in functions. When you create a function, it's now a method

/* constructor = special method for defining the properties and methods 
of objects. Manually creating a lot of objects takes a lot of work. */

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}  
}

const car1 = new Car("Toyota", "Tacoma", 2009, "Grey");
const car2 = new Car("McLaren", "F1", 1995, "LM Orange");
const car3 = new Car("Ferrari", "Enzo", 2006, "Red");

car1.drive();
car2.drive();
car3.drive();

/* Class = ES6 feature that provides a more structured and cleaner way 
to work with objects compared to traditional constructor function
e.g. static keyword, encapsulation, inheritance */

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);
const total10 = product3.calculateTotal(salesTax);

product3.displayProduct();
console.log(`Total price (with tax): $${total10.toFixed(2)}`);

/* static = keyword that defines properties or methods that belong to a class
itself rather than the objects created from that class
(class owns anything static, not the objects)*/

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;     // need this. because you need to access within class
    }

    static getArea(radius){
        return radius * Math.pow(this.PI, 2).toFixed(2);
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(1));
console.log(MathUtil.getArea(1));

/*
class User{
    static userCount = 0;

    constructor(username){ // note the constructor gets called anytime we call a new object
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello1(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("carsonh58");
console.log(user1.username);
// console.log(userCount); doesn't work because static belongs to the class
console.log(User.userCount);
user1.sayHello1();

const user2 = new User("carsonhess.j");
console.log(user2.username);
console.log(User.userCount);
user2.sayHello1();
// static property is keeping track of the number of users we create

const onlineUsers = document.getElementById("myH2");
onlineUsers.textContent = `There are ${User.userCount} users online`;
*/


/* inheritance = allows a new class to inherit properties and methods from
an existing class (parent/child relationship)
Helps with code reusability*/

class Animal{
    alive = true;
    
    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }

}
// extends creates the parent/child relationship

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}
//class just declares the object.
const rabbit = new Rabbit(); //creates the object
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
fish.swim();
hawk.fly();

/*
super = keyword used in classes to call the constructor or 
access the properties and methods of a parent (superclass)
this = this object
super = the parent
*/

class Animal1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit1 extends Animal1{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish1 extends Animal1{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk1 extends Animal1{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit1 = new Rabbit1("rabbit", 1, 25);
const fish1 = new Fish1("fish", 2, 12);
const hawk1 = new Hawk1("hawk", 3, 50);

console.log(rabbit1.name);
console.log(rabbit1.age);
console.log(rabbit1.runSpeed);

hawk1.fly();

// getter = special method that makes a property readable
// setter = special method that makes a property writable

//validate and modify a value when reading/writing an object
// basically like validation rules so you don't have a width of "pizza"

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; //using underscore prefix means it's a private property that shouldn't be touched at all. different from the standard width property
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight; //using underscore prefix means it's a private property that shouldn't be touched at all. different from the standard width property
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm squared`;
    }
}
//with setters, properties are writable, but not readable
// that's where getters come in.
const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person{

    constructor(firstName1, lastName1, age1){
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
        this.age1 = age1;
    }

    set firstName1(newFirstName1){
        if(typeof newFirstName1 === "string" && newFirstName1.length > 0){
            this._firstName1 = newFirstName1;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName1(newLastName1){
        if(typeof newLastName1 === "string" && newLastName1.length > 0){
            this._lastName1 = newLastName1;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age1(newAge1){
        if(typeof newAge1 === "number" && newAge1 > 0){
            this._age1 = newAge1;
        }
        else{
            console.error("Age must be a number > 0");
        }
    }

    get firstName1(){
        return this._firstName1;
    }

    get lastName1(){
        return this._lastName1;
    }

    get age1(){
        return this._age1;
    }

    get fullName(){
        return this._firstName1 + " " + this._lastName1
    }
}

const person5 = new Person("carson", "hess", 29);

console.log(person5.firstName1);
console.log(person5.lastName1);
console.log(person5.age1);
console.log(person5.fullName);

/* destructuring = extract values from arrays and objects
then assign them to variables in a convenient way. 
[] = to perform array destructuring
{} to perform object destructuring
*/

//example 1 - swap the value of two variables

let a = 1; 
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// example 2 - swap elements in an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[colors.length - 1]] = [colors[colors.length - 1], colors[0]];

console.log(colors);

// example 3 assign array elements to variables

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); // new array via rest parameters

// example 4 - extract values from objects

const person6 ={
    firstName3: "Spongebob",
    lastName3: "SquarePants",
    age3: 30,
    job3: "Fry Cook",
}

const person7 ={
    firstName3: "Patrick",
    lastName3: "Star",
    age3: 34,
}

const {firstName3, lastName3, age3, job3 = "Unemployed"} = person7;
// added value because fourth value otherwise undefined
console.log(firstName3);
console.log(lastName3);
console.log(age3);
console.log(job3);

// destructure in function parameters

function displayPerson({firstName3, lastName3, age3, job3 = "Unemployed"}){
    console.log(`Name: ${firstName3} ${lastName3}`);
    console.log(`Age: ${age3}`);
    console.log(`Job: ${job3}`);
}

displayPerson(person6); /* notice behavior when we display person6 vs 7 
with person6, job is already defined, so "Fry Cook" is logged vs "Unemployed"
*/

/* nested objects = objects inside of other objects. Allow you to 
represent more complex data structures
Child Object is enclosed by a Parent Object

Person{Address{}, ContactInfo{}, ShoppingCart{Keyboard{}, Mouse{}}}
each child object has its own properties and methods. 
*/

const person8 = {
    fullName1: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "International Waters",
    }
}

console.log(person8.address.street);

for(const property in person8.address){
    console.log(person8.address[property]);
}

class Person9{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address); // calls constructor of the Address class
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person10 = new Person9("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "International waters");
const person11 = new Person9("Patrick", 37, "128 Conch St.", "Bikini Bottom", "International Waters");
const person12 = new Person9("Squidward", 45, "126 Conch St", "Bikini Bottom", "International Waters");

console.log(person10.address)

// Working with an array of objects

const fruits1 = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

// can push objects into array of objects

fruits1.push({name: "grapes", color: "purple", calories: 62});
console.log(fruits1);

fruits1.pop();
console.log(fruits1);

fruits1.splice(1, 2); //splice() removes elements at certain indices
console.log(fruits1);

// forEach() to loop through array
fruits1.forEach(fruit => console.log(fruit.calories));

// map method - run each element through a function and return new array
const fruitNames = fruits1.map(fruit => fruit.name);
const fruitColors = fruits1.map(fruit => fruit.color);
console.log(fruitNames);
console.log(fruitColors);

//filter - return a new array after using each element and checking condition
const yellowFruits = fruits1.filter(element => element.color === "yellow");
console.log(yellowFruits);

const lowCalories = fruits1.filter(element => element.calories < 100);
console.log(lowCalories);

// reduce() will return a single value
// max here keeps track of the current record holder
const maxFruit = fruits1.reduce((max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);
console.log(maxFruit);

const minFruit = fruits1.reduce((min, fruit) => 
                                fruit.calories < min.calories ? 
                                fruit : min);
console.log(minFruit);

//sort() = method used to sort elements of an array in place
// sort elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings
// sorting numbers happens lexicographically
// ex if you have numbers = 1, 10, 2, 9, 7, 8];
// returns [1, 10, 2, 7, 8, 9]; 
// sort method updates the array, so no need to declare new variable.

let fruits2 = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits2.sort();
console.log(fruits2);

let numbers6 = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers6.sort((a,b) => a - b); // reverse sort => b - a
console.log(numbers6);

const people1 = [{name: "Spongebob", age: 30, gpa: 3.0}, 
                {name: "Patrick", age: 37, gpa: 1.5}, 
                {name: "Squidward", age: 51, gpa: 2.5}, 
                {name: "Sandy", age: 27, gpa: 4.0}];
people1.sort((a,b) => a.age - b.age); 
console.log(people1);
// for reverse order, change a -> b and b -> a

people1.sort((a,b) => b.gpa - a.gpa);
console.log(people1);

people1.sort((a,b) => a.name.localeCompare(b.name));
console.log(people1);
//localeCompare() method - compares names lexicographically
/* need this unlike the fruits example above because we are sorting 
based on attributes within an object as opposed to elements in an array*/

// shuffle elements of an array using JavaScript
// Fisher-Yates algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);
console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i+1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}

/* Date objects = objects that contain values that represent dates and times*/
//Date(year, month, day, hour, minute, ms)

const date = new Date(); //built in Date() constructor
const date1 = new Date(2024, 0, 1, 2, 3, 4); //uses military time FYI
const date2 = new Date("2024-01-02T12:00:00Z");
const date3 = new Date(0) //Date(0) is when computer think time began

console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek); // Monday is 1

date.setFullYear(2025);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);
console.log(date);

const date4 = new Date("2023-12-31");
const date5 = new Date("2024-01-01");

if(date5 > date4){
    console.log("HAPPY NEW YEAR");
}

/* Closure = a function defined inside of another function
    Inner function has access to variables and scope of outer function
    Allows for private variables and state maintenance
    Frequently used in JS frameworks: React, Vue, Angular
*/

function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}

function createCounter(){

    let count = 0;

    function increment(){
        count++
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

counter.count = 0;
console.log(`The current count is ${counter.getCount()}`);

function createGame(){
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+ ${points}points`);
    }
    
    function decreaseScore(points){
        score -= points;
        console.log(`- ${points}points`);
    }
    
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame(); // returns an object

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()} points`);

/* setTimeout() = function in Javascript that allows you to schedule
the execution of a function after an amount of time (milliseconds)
    Note that times are approximate (varies on workload)
*/

/*
function sayHello(){
    window.alert("Hello");
}
*/
/*
setTimeout(() => window.alert("Hello"), 3000);
*/

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}

// Digital Clock program
/*
function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().
    padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000); // calls function repeatedly after x milliseconds
*/
// stopwatch program 

const display1 = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;    
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;
    display1.textContent = "00:00:00:00";
    
}


function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    display1.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

/* ES6 Module = external file that contains reusable code
that can be re-used / re imported into other JS files. 
can contain variables, classes, functions..and more
*/

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);

/* synchronous vs asynchronous mode
Synchronous = code that executes line by line consecuitively in a sequential manner
code waits for an operation to complete

Asynchronous = allows multiple operations to be performed concurrently without waiting
doesn't block the execution flow and allows the program to continue
(Input/Output operations, network requests, fetching data)
handled with: Callbacks, promises, async/await
*/

/* Error Object = an object that is created to represent a problem that occurs
Errors occur often with user input or establishing a connection

Can try to fix errors as they occur
try{} = encloses code that might potentially cause an error
catch{} = catch and handle any thrown Errors from try{}
finally{} = (optional) Always executes. Usted mostly for cleanup. 
    ex: close files, close connections, release resources

*/

try{
console.log(x);
    // network errors
    // promise rejection
    // security errors
}

catch(error){
    console.log(error); // catches the error instead of throwing it;Does not interrupt the program
}

finally{
    //closing files, closing connections, releasing resources
    console.log("This always executes");
}

console.log("You have reached the end!");

try{
    // const dividend = Number(window.prompt("Enter a dividend: "));
    // const divisor = Number(window.prompt("Enter a divisor: "));
    
    if(divisor == 0){
        throw new Error("You can't divide by zero"); // calls error constructor to create new error object
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }
    const result = dividend / divisor;
    console.log(result);
}

catch(error){
    console.error(error);
}

console.log("You have reached the end!");

/* Document Object Model
Object{} that represents the page you see in the web browser
and provides you with an API to interact with it. Web browser 
constructs the DOM when it loads an HTML document, and structures
all the elements in a tree-like representation. 
JavaScript can access the DOM to dynamically change the content, 
structure, and style of a web page. 
*/
// Document is one giant object
// console.dir(document); logs the whole document
// document.title = "My website"; changes title of the website
// document.body.style.backgroundColor = "black"
// above changes the document background to be black

/* element selectors = Methods used to target and manipulate HTML
elements. They allow you to select one or multiple HTML elements from 
the DOM (Document Object Model)*/ 

// 1. document.getElementById() //element or NULL
// 2. document.getElementsClassName() // HTML Collection
// 3. document.getElementsByTagName() // HTML Collection
// 4. document.querySelector() // Element or null
// 5. document.querySelectorAll() // Nodelist

const myHeading = document.getElementById("my-heading"); // accesses the DOM
myHeading.style.backgroundColor = "yellow";

const fruits3 = document.getElementsByClassName("fruits");

console.log(fruits3);

fruits3[0].style.backgroundColor = "yellow";

// HTML collections are iterable, but do not have a forEach() method. 
// though they do not have forEach() method, we can typecast them as arrays.
/*
for(let fruit of fruits3){
    fruit.style.backgroundColor = "yellow";
} */

Array.from(fruits3).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
}); // returns new array of fruits

const h4Elements = document.getElementsByTagName("h4"); // grabs all elements with that type 
console.log(h4Elements);

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "none";
})

/*
const liElements = document.getElementsByTagName("li");
Array.from(liElements).forEach(liElement => {
    liElement.textContent = "new li text";
}) 
*/

/*
let liElements1 = Array.from(liElements);
for(let i = 0; i < liElements1.length; i++){
    liElements1[i].style.backgroundColor = "yellow";
}
*/

// document.querySelector(); //returns first matching element or NULL
const element2 = document.querySelector(".fruits"); // selects class name of fruits
// ONLY RETURNS A SINGLE ELEMENT. 
// Even though we entered in the class name, it will only return the first matching element. 

/* document.querySelectorAll(); returns a nodelist, which is similar to an HTML collection, but has built
-in methods just like arrays. 
Nodelists are static (unlike HTML collections) do not update automatically in the DOM. 
*/

const liElements2 = document.querySelectorAll("li");
// has built-in for-each method, so don't have to type-cast as an array

liElements2.forEach(liElement => {
    liElement.style.backgroundColor = "none";
})

/* DOM Navigation = the process of navigating through an HTML document using JavaScript
*/

// .firstElementChild;
const element3 = document.getElementById("fruits1");
const firstChild = element3.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// use querySelectorAll() with .firstElementChild to select first sub parent items
const liElement3 = document.querySelectorAll("ul");
liElement3.forEach(liElement => {
    const firstLiElement = liElement.firstElementChild;
    firstLiElement.style.backgroundColor = "white";
})

// last element child
/*
const ulElement = document.querySelectorAll("ul");
ulElement.forEach(ulElement => {
    const lastUlElement = ulElement.lastElementChild;
    lastUlElement.style.backgroundColor = "yellow";
}) */

const ulElement1 = document.getElementById("root");
const lastRoot = ulElement1.lastElementChild;
lastRoot.style.backgroundColor = "yellow";

// .nextElementSibling; siblings are next to eachother

const element4 = document.getElementById("apple");
const sibling = element4.nextElementSibling;
sibling.style.backgroundColor = "red";

// .previousElementSibling - does the opposite of .nextElementSibling

const element5 = document.getElementById("pie");
const previousElement = element5.previousElementSibling;
previousElement.style.backgroundColor = "green";

//.parentElement property

const element6 = document.getElementById("mac");
const parent1 = element6.parentElement;
parent1.style.backgroundColor = "yellow";

//.children property. Can be used to access child elements. 

/* add and change HTML elements using JavaScript
create element --> add attributes/properties --> append element to DOM; can remove HTML element (using removeChild() method)
*/
//create attribute
const newH1 = document.createElement("h1");
//add properties
newH1.textContent = "Sample new H1 header";
// append to DOM
//document.body.append(newH1);

newH1.id = "myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";
//append to box1
document.getElementById("box2").append(newH1);

const newListItem = document.createElement("li");
newListItem.textContent = "Prime Rib";
newListItem.id = "primeRib";
document.getElementById("barbecue").append(newListItem);

/* Mouse Events
eventListener - listens for specific events to create interactive web pages
    events: click, mouseover, mouseout, 
    .addEventListener(event, callback);
event = mouse event
callback can be an anonymous function such as event => {
    }
*/

const myBox = document.getElementById("myBox");

function changeColor(event){
    //event is a built in object
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "ouch";
    event.target.textAlign = "center";
}
myBox.addEventListener("click", changeColor);

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "You're mousing over";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen"; 
    event.target.textContent = "You moused out!";
})

const myButton = document.getElementById("myButton");
myButton.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "You're mousing over";
});

myButton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen"; 
    event.target.textContent = "You moused out!";
})

myButton.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch!!!";
})

/* key events
event listeners - listen for specific events
events: keydown (press down a key), keyup (release a key)
document.addEventListener(event,callback); */

/*
document.addEventListener("keydown", event => {
    console.log(event);
});

document.addEventListener("keyup", event => {
    console.log(`keyup event is ${event.key}`);
});

document.addEventListener("keydown", event =>{
    myBox1.textContent = "shocked face";
    myBox1.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox1.textContent = "smiley face";
    myBox1.style.backgroundColor = "lightblue";
})
*/ 

const myBox1 = document.getElementById("myBox1");
const moveAmount = 10;
let x10 = 0;
let y10 = 0;

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y10 += moveAmount;
                break;
            case "ArrowDown":
                y10 -= moveAmount;
                break;
            case "ArrowRight":
                x10 += 10;
                break;
            case "ArrowLeft":
                x10 -= 10;
                break;
        }
        myBox1.style.top = `${y10}px`;
        myBox1.style.left = `${x10}px`;
    }
});

/* Nodelists in JavaScript
Static collection of HTML elements by id, class, element   
can be created using querySelectorAll()
Similar to an array but no map, filter, reduce, but do have forEach()
NodeList won't update to automatically reflect changes
*/

let buttons = document.querySelectorAll(".buttons");
console.log(buttons);

// add HTML/CSS properties

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "doodle bob";
})

// click event listener
buttons.forEach(button => {
    button.addEventListener("click", event => {
        button.style.backgroundColor = "tomato";
        button.textContent = "ANGRY BOB";
    })
})

// add an element to a nodelist

const newButton = document.createElement("button"); //step 1 - create element
// step 2 - add any necessary attributes/css properties
/*newButton.textContent = "button 5";
newButton.classList = "buttons";
document.body.appendChild(newButton);
*/

buttons = document.querySelectorAll(".buttons");
console.log(buttons);

// remove an element from the nodelist. 

/*
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove(); //removes buttons from dom but doesn't remove them from the console
        buttons = document.querySelectorAll(".buttons"); //removes it from the node list by re-accessing the DOM
    })
}) */

/* Classlists = element property used to interact with an elements list of classes (CSS classes)
Allows you to make reusable classes for many elements
across your webpage. */

const myButton1 = document.getElementById("button1");
myButton1.classList.add("enabled");
myButton1.classList.remove("enabled");

myButton1.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
})

myButton1.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
})

// cities for zoning tool - represented as objects

// ROCK PAPER SCISSORS


