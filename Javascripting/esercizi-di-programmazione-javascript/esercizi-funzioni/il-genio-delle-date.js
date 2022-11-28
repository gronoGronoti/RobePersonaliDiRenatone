/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).

  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.
          
  http://www.imparareaprogrammare.it
*/
console.log("\nil-genio-delle-date.js");

const giornoDellAnno = (gg, mm, giorni) => {
  let sumGG = 0;

  for(let i=0; i<mm; i++) {
    sumGG = sumGG + giorni[i];
  }
  let giorniRimanenti = sumGG - (giorni[mm-1]-gg);
  return giorniRimanenti;
}

const giorniDeiMesi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let giorno = 5, mese = 2;

console.log(giornoDellAnno(giorno,mese,giorniDeiMesi));

