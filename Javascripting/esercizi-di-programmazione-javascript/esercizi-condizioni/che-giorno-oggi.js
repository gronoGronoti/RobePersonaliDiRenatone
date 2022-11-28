/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/

console.log("\nche-giorno-oggi.js");

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const giorniSettimana = (gg) => {
  switch(gg) {
    case '1':
      return 'Oggi è Lunedì';

    case '2':
      return 'Oggi è Martedì';

    case '3':
      return 'Oggi è Mercoledì';

    case '4':
      return 'Oggi è Giovedì';

    case '5':
      return 'Oggi è Venerdì';

    case '6':
      return 'Oggi è Sabato';

    case '7':
      return 'Oggi è Domenica';
    
    default:
      return 'Questo giorno non esiste fra';
  }
}

rl.question("Che giorno è oggi? ", function(res) {
  console.log(giorniSettimana(res));
  rl.close();
})

