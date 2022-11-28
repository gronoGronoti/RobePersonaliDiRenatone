/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/
console.log("\nprimo-e-ultimo.js");

const array = [5, 12, 8, 3, -3, 69, 420, 9];

const trovaMin = (temp) => {
  let i = 0, min = 0;
  while(i < temp.length) {
    if(temp[i] < min) min = temp[i];
    else i++;
  } return min;
}
const trovaMax = (temp) => {
  let i = 0, max = 0;
  while(i < temp.length) {
    if(temp[i] > max) max = temp[i];
    i++;
  } return max;
}

console.log("Minore: ", trovaMin(array), "\tMaggiore: ", trovaMax(array));
