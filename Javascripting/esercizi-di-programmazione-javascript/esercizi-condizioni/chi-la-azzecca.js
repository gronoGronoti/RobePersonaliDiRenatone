/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

console.log("\nchi-la-azzecca.js")

const nCasuale = Math.floor(Math.random()*(100-1)+1);
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const ilGiochicchio = (scelta1, scelta2, realN) => {
  let vinto=false;
  let dist1 = (realN > scelta1)? (realN-scelta1): (scelta1-realN);
  let dist2 = (realN > scelta2)? (realN-scelta2): (scelta2-realN);

  if(scelta1 == realN) {
    console.log("Hai vinto!!", scelta1, "era il numero giusto!!!"); 
    vinto = true; }
  else if(scelta2 == realN) { 
    console.log("Ha vinto il computer! Ha scelto", scelta2, "!!!");
    vinto = true; }

  if(!vinto) {
    if(dist1 < dist2)
      console.log("Nessuno dei due ha vinto, ma", scelta1, "(tu) c'è andato più vicino. (", realN, ")");
    else
      console.log("Nessuno dei due ha vinto, ma", scelta2, "(cpu) c'è andato più vicino. (", realN, ")");
  }
}

rl.question("Che numero scegli? ", function(res) {
  let scelta = res;
  let sceltaCpu = Math.floor(Math.random()*(100-1)+1);

  ilGiochicchio(scelta, sceltaCpu, nCasuale);

  rl.close();
})