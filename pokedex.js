
function Pokemon(name, number, type1, type2){
        this.name = name;
        this.number = number;
        this.type1 = type1;
        this.type2 = type2;
}

const bulbasaur = new Pokemon("Bulbasaur", 1, "Grass", "Poison");
const ivysaur = new Pokemon("Ivysaur", 2, "Grass", "Poison");
const venusaur = new Pokemon("Venusaur", 3, "Grass", "Poison");
const charmander = new Pokemon("Charmander", 4, "Fire");
const charmeleon = new Pokemon("Charmeleon", 5, "Fire");
const charizard = new Pokemon("Charizard", 6, "Fire", "Flying");
const squirtle = new Pokemon("Squirtle", 7, "Water");
const wartortle = new Pokemon("Wartortle", 8, "Water");
const blastoise = new Pokemon("Blastoise", 9, "Water");

const pokemonArray = [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise];

const pokemonImageDiv = document.getElementById("pokemonImage");
const pokemonResult = document.getElementById("pokemonResult");
const pokedexNumber = document.getElementById("pokedexNumber");
const type1 = document.getElementById("type1");
const type2 = document.getElementById("type2");

function catchPokemon(){ 
        arrayValue = Math.floor(Math.random() * pokemonArray.length);
        console.log(pokemonArray[arrayValue]);
        pokemonCaught = pokemonArray[arrayValue];
        console.log(pokemonCaught.number);
        pokemonImage.src = `pokemon/${pokemonCaught.number}.png`;

        // clear previous content in the div
        pokemonImageDiv.innerHTML = "";

        // create new image element
        const imgElement = document.createElement("img");
        imgElement.src = `pokemon/${pokemonCaught.number}.png`;

        // append new image to the div
        pokemonImageDiv.appendChild(imgElement);

        pokemonResult.textContent = `Congratulations! You caught a ${pokemonCaught.name}!`;
        pokedexNumber.textContent = `Pokedex Number: ${pokemonCaught.number}`;
        type1.textContent = `Primary Type: ${pokemonCaught.type1}`;
        if (pokemonCaught.type2) {
            type2.textContent = `Secondary Type: ${pokemonCaught.type2}`;
        } else {
            type2.textContent = ""; // Clear if not defined or falsy
        }
}

