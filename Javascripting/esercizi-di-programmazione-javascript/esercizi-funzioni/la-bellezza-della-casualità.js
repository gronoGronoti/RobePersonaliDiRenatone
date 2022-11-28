/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  (Math.random() * (max-min) + min)

  http://www.imparareaprogrammare.it
*/
console.log("\nla-bellezza-della-casualità.js");

const dammiRandom = (n) => {
  return n = Math.random()*(n-0)+0;
}
console.log(dammiRandom(105));
