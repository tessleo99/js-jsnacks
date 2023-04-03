let numberUserSum = prompt("Inserisci un numero :");
numberUserSum = parseInt(numberUserSum);
for (let i = 0; i<9; i++) {
    let numberUserChoice = prompt("Inserisci un numero :");
    numberUserChoice = parseInt(numberUserChoice);
    let numberUserSum = numberUserSum + numberUserChoice;
    numberUserSum = parseInt(numberUserSum);
    console.log(numberUserSum);
}
