/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

console.log("\nmaggiore-e-minore.js");

const trovaMaggioreMinore = (n1,n2,n3,n4) => {
  let res1 = (n1 > n2)? n1: n2;
  let res2 = (n3 > n4)? n3: n4;

  if(res1 > res2)
    return [res1, res2];
  else return [res2, res1];
}

let risposta = trovaMaggioreMinore(5, 7, 12, 3);
console.log("Numero maggiore:", risposta[0], "; Numero minore:", risposta[1]);


