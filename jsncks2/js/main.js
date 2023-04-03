//FAR INSERIE ALL'UTENTE DUE PAROLE
let wordUserChoice1 = prompt("Inserisci una parola :");
let wordUserChoice2 = prompt("Inserisci una parola :");
//CONTROLLARE LA LUNGHEZZA DELLE PAROLE
let lengthwordUserChoice1 = wordUserChoice1.length;
let lengthwordUserChoice2 = wordUserChoice2.length;

if(lengthwordUserChoice1 > lengthwordUserChoice2){
    console.log(wordUserChoice1);
    console.log(wordUserChoice2);
} else if (lengthwordUserChoice1 < lengthwordUserChoice2){
    console.log(wordUserChoice2);
    console.log(wordUserChoice1);
}

