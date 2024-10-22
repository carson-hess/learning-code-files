const leftColumn = document.getElementById("leftColumn");
const rightColumn = document.getElementById("rightColumn");
const resetButton = document.getElementById("resetButton");


async function fetchDataLeft() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        // Create and append the name to the left column
        const name = document.createElement("p");
        name.textContent = pokemonName;
        leftColumn.appendChild(name);

        const ability1 = document.createElement("p");
        ability1.textContent = data.abilities[0].ability.name;
        leftColumn.appendChild(ability1);

        const ability2 = document.createElement("p");
        ability2.textContent = data.abilities[1].ability.name;
        leftColumn.appendChild(ability2);

        const baseExperience = document.createElement("p");
        baseExperience.textContent = `Base Experience: ${data.base_experience}`;
        leftColumn.appendChild(baseExperience);

        const battleButton = document.getElementById("battleButton");
        leftColumn.appendChild(battleButton);
        leftColumn.appendChild(resetButton);

        resetButton.addEventListener('click', resetLeftColumn);

    } catch (error) {
        console.error(error);
    }
}

async function fetchDataRight() {
    try {
        const pokemonName = document.getElementById("pokemonName1").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite1");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        // Create and append the name to the right column
        const name = document.createElement("p");
        name.textContent = pokemonName;
        rightColumn.appendChild(name);

        const ability1 = document.createElement("p");
        ability1.textContent = data.abilities[0].ability.name;
        rightColumn.appendChild(ability1);

        const ability2 = document.createElement("p");
        ability2.textContent = data.abilities[1].ability.name;
        rightColumn.appendChild(ability2);

        const baseExperience = document.createElement("p");
        baseExperience.textContent = `Base Experience: ${data.base_experience}`;
        rightColumn.appendChild(baseExperience);

        resetButton.addEventListener('click', resetRightColumn);

    } catch (error) {
        console.error(error);
    }
}

function resetLeftColumn(){
    
}

async function fetchMewtwo(){
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/mewtwo');
        const data = await response.json();
        const moves = await console.log(data.abilities);
        const baseExperience = await console.log(data.base_experience); // use base experience
    }

    catch(error){
        console.log("You fucked up")
    }
}


fetchMewtwo();

// Battle Pokemon
/* take base experience attributes from both
     when battlePokemon button is clicked:
        Create a health attribute for each; hp = base experience
        Populate two new buttons:
            Left move (on LHS) and Right move (on RHS)
            When each button is clicked, it takes corresponding pokemon's base experience and generates a random number
            That number is inflicted on other pokemon
            Other pokemon's Health is reduced by that amount
            If other health <= 0, say who won the battle
            otherwise, say "Other pokemon's turn" and display the new health
            Same thing for next move
            Once health <= 0, call a function that declares the winner
        
            Then click a reset button that returns everything to normal
*/