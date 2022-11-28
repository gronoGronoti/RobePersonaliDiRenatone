/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  http://www.imparareaprogrammare.it
*/
console.log("\nfai-il-sensitivo.js");

const trovaDistanza = (a, b, n) => {
  /*    
  - 0  Se A e B sono equidistanti da N .   a-n = b-n
  - 1  Se B è più vicino a N rispetto ad A b-n > a-n
  - -1 Se A è più vicino a N rispetto a B  a-n > b-n
  */
  if ((a-n) > (b-n)) console.log("B è più vicino a N rispetto ad A");
  else if ((a-n) < (b-n)) console.log("A è più vicino a N rispetto a B");
  else console.log("A e B sono equidistanti da N");
}
let a = 10, b = 13, n = 7;

trovaDistanza(a,b,n);