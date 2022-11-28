/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringa che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/

console.log("\nla-calcolatrice.js");

const operazioniCalcolatrice = (n1,n2, choice) => {
  let calcolo;
  
  switch(choice) {
    case "somma":
      calcolo = n1+n2;
      break;
    case "differenza":
      calcolo = (n1 > n2)? (n1-n2): (n2-n1);
      break;
    case "divisione":
      calcolo = (n1 > n2)? (n1/n2): (n2/n1);
      break;
    case "modulo":
      calcolo = parseInt(n1) % parseInt(n2);
      break;
    case "potenza":
      calcolo = Math.pow(n1, n2); //base, esponente
      break;
    case "media":
      calcolo = (n1+n2)/2;
      break;
    default:
      console.log("Ma che mi hai chiesto fra");
      calcolo = 0;
      break;
  }
  return calcolo;
}

console.log("Calcolo di due numeri, operazioni disponibili:\n");
console.log("Somma, Differenza, Divisione, Modulo, Potenza e Media.");

let num1 = 5, num2 = 12, input="modulO";

let res = operazioniCalcolatrice(num1, num2, input.toLowerCase());
console.log(res);