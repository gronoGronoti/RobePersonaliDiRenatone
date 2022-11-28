/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

console.log("\nvinci-tu.js");

const buttaDado = (n) => {
  return Math.floor(Math.random()*(6-1)+1);
}
let nTiri = 3, puntTu = puntCpu = 0;

for(let i=1; i<=nTiri; i++) {
  puntTu += buttaDado(i);
  puntCpu += buttaDado(i);
}

if(puntTu > puntCpu) console.log("Hai vinto! Hai totalizzato "+puntTu+" punti.");
else console.log("Hai perso! Hai totalizzato "+puntTu+" punti.");