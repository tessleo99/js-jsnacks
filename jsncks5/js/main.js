//CREO UN ARRAY VUOTO DOVE VERRANNO INSERITI I NUMERI DISPARI SCELTI DALL'UTENTE
let oddNumber = [];

for (i = 0; i < 6; i++){
    let numberUserChoice = prompt("inserisci un numero:"); 
    numberUserChoice = parseInt(numberUserChoice);
    //CONTROLLO CHE IL NUMERO SIA DISPARI
    if (numberUserChoice % 2 == 1){ 
        //AGGIUNGO IL NUMERO ALL'ARRAY
        oddNumber.push(numberUserChoice);
    }
}
//STAMPO L'ARRAY
console.log(oddNumber); 