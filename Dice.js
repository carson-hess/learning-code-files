function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = []; //array for values of the dice
    const images = []; //array for the images of the dice

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1; //generates random number between 1 - 6
        console.log(value);
        values.push(value); //updates values array with new assignment
        images.push(`<img src="Dice/${value}.png" alt="Dice ${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(''); //innerHTML allows you to modify content from the HTML file
}