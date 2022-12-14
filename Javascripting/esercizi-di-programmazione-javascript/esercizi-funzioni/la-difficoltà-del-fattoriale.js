/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/

console.log("\nla-difficoltà-del-fattoriale.js");

const calcFattoriale = (n) => {
  return n ? n*calcFattoriale(n-1) : 1;
}

let nombre = 5;
console.log(nombre+"! = "+calcFattoriale(nombre));