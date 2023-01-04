/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/

const esercizioNumeri = (arr) => {
  let somma = 0, nMinori = [], min = arr[(arr.length)-1];

  arr.forEach(val => {
    somma += val; // calcola somma

    if(val < min) 
      nMinori.push(val);
  });
  let media = somma / arr.length; // calcola media
  console.log("Media =", media, "\nvalori minori =", nMinori);
};

let array = [3, 5, 10, 2, 8];

esercizioNumeri(array);
console.log(array);