/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

console.log("\nti-ricordi-le-tabelline.js");

const calcolaTab = (n) => {
  for(let i=0; i<=10; i++) {
    console.log((n*i)+"; ");
  }
}

calcolaTab(6);
