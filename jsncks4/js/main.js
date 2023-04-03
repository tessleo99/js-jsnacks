let invitedGasbyParty = ["Samira", "Gianluca", "Domenico", "Leonardo", "Chiara", "Agnese"];
let userName = prompt ("Inserisci il tuo nome:");
if (invitedGasbyParty.includes(userName)){
    console.log("Benvenuto al party!");
} else {
    console.log("Non sei tra gli invitati");
}