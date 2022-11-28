console.log("\nconta-il-tempo.js");

let input = 12560; //secondi

let ore = input/3600; //input diviso un'ora in secondi = 3.488888888888889

// Math.trunc(n) - MozDev dice che restituisce l'intero di un numero rimuovendo il decimale
let minuti = (ore - Math.trunc(ore)) * 60; // il decimale di ore * 60 = 29.33333333333334
let secondi = (minuti - Math.trunc(minuti)) * 60; // il decimale di minuti * 60 = 20.000000000000398

console.log("Input ("+input+") convertito in ore: "
    +Math.round(ore)+" ore, "
    +Math.round(minuti)+" minuti, "
    +Math.round(secondi)+" secondi");