/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

    
  http://www.imparareaprogrammare.it
*/
console.log("\nconta-il-numero.js");

const contaCifre = (n) => {
  let nombre = (String)(n).split("");
  return (nombre.length);
}

let num = console.log(contaCifre(1000));