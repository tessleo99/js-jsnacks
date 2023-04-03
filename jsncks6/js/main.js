let randomNumber = (Math.random() * 10);
console.log(randomNumber);
let numberUserChoice = prompt("Inserisci un numero");
numberUserChoice = parseInt(numberUserChoice);
if (randomNumber == numberUserChoice){
    console.log("Bravo, hai vinto!");
} else {
    console.log("Ritenta, sarai piu fortunato");
}