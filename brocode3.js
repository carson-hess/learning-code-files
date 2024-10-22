document.getElementById("rockButton").addEventListener("click", () => playGame("rock"));
document.getElementById("paperButton").addEventListener("click", () => playGame("paper"));
document.getElementById("scissorsButton").addEventListener("click", () => playGame("scissors"));

function playGame(playerChoice){
    const choices = ["rock", "paper", "scissors"];
    const playerDisplay = document.getElementById("playerDisplay");
    const computerDisplay = document.getElementById("computerDisplay");
    const resultDisplay = document.getElementById("resultDisplay");  
   
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    //Display player's choice and computer's choice
    playerDisplay.innerText = `Player: ${playerChoice}`;
    computerDisplay.innerText = `Computer: ${computerChoice}`;

    //Evaluate the result
    let result;
    if(playerChoice === computerChoice){
        result = "It's a tie!"
    }
    else if(
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock")  ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Player 1 wins!"
    }
    else{
        result = "Computer wins!"
    }

    resultDisplay.innerText = result;

}

/* Callback hell = situation in JS where callbacks are nested within other callbacks 
to the degree where the code is difficult to read. 
Old pattern to handle asynchronous functions. 
Use promises + async/await to avoid callback hell. */

function task1(callback){
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();         
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();         
    }, 1000);}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();         
    }, 3000);}

function task4(callback){
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();         
    }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log("All tasks complete"))
        })
    })
});

/* Promises = an object that manages asynch operations
Wrap a promise object around {asynch code}
"I promise to return a value"
PENDING -> RESOLVED or REJECTED
new Promise((resolve, reject) => {asynch code})

DO THESE CHORES IN ORDER:
1. WALK THE DOG
2. CLEAN THE KITCHEN
3. TAKE OUT THE TRASH */

function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            
            if(dogWalked){
                resolve("You walked the dog");
            
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You cleaned the kitchen");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);    
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false;
            if(trashTakenOut){
                resolve("You took out the trash");
            }
            else{
                resolve("You DIDN'T take out the trash");
            }
        }, 500);       
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
    .then(value => {console.log(value); return takeOutTrash()})
    .then(value => {console.log(value); console.log("You finished all the chores!")})
    .catch(error => console.error(error));

/* JSON = (JavaScript Object Notation) data interchange format
used for exchanging data between a server and a web application
JSON files {key: value} or [value 1, value2] or array of objects [{}, {}, {}]*/

// JSON.stringify() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object
// .JSON is a built-in object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]; // can also convert to string with a pair of backticks
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 46,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 25,
    "isEmployed": false
}]
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`; // can also convert to string with a pair of backticks

const jsonString = JSON.stringify(people);

console.log(people);
console.log(jsonString);

const parsedData = JSON.parse(jsonNames);
console.log(parsedData);

// fetch json files
fetch("person.json") // returns a promise
    .then(response => response.json()) // returns a promise
    .then(value => console.log(value)); // returns a promise

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed))) // iterates through and prints each value
    .catch(error => console.error()); 

// fetch data from an API

/* Fetch = function used for making HTTP requests to fetch resources. 
(JSON style data, images, files)
simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send
data asynchronously over the web. 
fetch(url, {options})  object of options such as GET, POST, PUT (replace data), DELETE, default is to GET but don't need to state that
*/

/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu") // promise based - will either resolve (.then()) or reject (.catch())
    .then(response => response.json())
    .then(data => console.log(data.weight))
    .catch(error => console.error(error)); */

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}


// weather app

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "6a443b8631e732e63e8ba6d12184cee4";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault(); // default behavior for a form is to refresh page
    const city = cityInput.value;
    
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    console.log(response);
    if (!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
};

function displayWeatherInfo(data){
    const {name: city, 
        main: {temp, humidity}, 
        weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("h1");
    const humidityDisplay = document.createElement("h1");
    const descrDisplay = document.createElement("h1");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15)*9/5 + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descrDisplay.textContent = description;

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descrDisplay.classList.add("descrDisplay");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descrDisplay);
};

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add(".errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
};

