/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

  http://www.imparareaprogrammare.it
*/
console.log("\nla-funzione-che-sembra-difficile.js");

const gimmeTheNumber = (n, k) => {
  let arr = (String)(n).split("");
  let lung = arr.length;
  let temp = 0;

  if(k>lung) return 0;
  else {
    for(let i = lung; i>0; i--) {
      if(i==k) temp = arr[i];
    }
  }
  return temp;
}

let num = 123456, kakk = 2;
let r = gimmeTheNumber(num, kakk);
console.log(r);