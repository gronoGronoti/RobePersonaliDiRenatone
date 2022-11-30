/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
console.log("\nrombo-che-stampa.js");

const stampaRombo = (n) => {
  for(let i=1; i<=n; i++) {
    if(i % 2 != 0)
      console.log("\t", "X".repeat(i));
  }
  for(let i=n-1; i>=1; i--) {
    if(i % 2 != 0)
      console.log("\t", "X".repeat(i));
  }
}

stampaRombo(5);