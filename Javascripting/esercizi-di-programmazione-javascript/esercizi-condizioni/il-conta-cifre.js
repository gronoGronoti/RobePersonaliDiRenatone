/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

console.log("\nil-conta-cifre.js");

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const contaCifre = (n) => {
  let temp = (String)(n).split("");
  return temp.length;
};

let numeristico;

rl.question("Numero da inserire: ", function(res) {
  numeristico = res;
  console.log("Nel numero", numeristico, "ci trovi", contaCifre(numeristico),"cifre.");

  rl.close();
});

