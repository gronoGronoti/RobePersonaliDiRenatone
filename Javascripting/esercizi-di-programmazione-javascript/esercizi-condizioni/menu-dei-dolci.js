/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

console.log("\nmenu-dei-dolci.js");
let dolci = ['Tiramisù', 'Torta della nonna', 'Cheesecake alla nutella', 'Macedonia'];

const sceltaDeiDolci = (n, arr) => {
  let tortaScelta = "";

  switch(n) {
    case 1:
      tortaScelta = arr[0];
      console.log("Hai scelto:", tortaScelta);
      break;
    
    case 2:
      tortaScelta = arr[1];
      console.log("Hai scelto:", tortaScelta);
      break;
    
    case 3:
      tortaScelta = arr[2];
      console.log("Hai scelto:", tortaScelta);
      break;
    
    case 4:
      tortaScelta = arr[3];
      console.log("Hai scelto:", tortaScelta);
      break;
    
    default:
      console.log("Quella torta non è nel menù...");
      break;
  }

  return tortaScelta;
}


console.log("MENU:\n1. Tiramisù\n2. Torta della nonna\n3. Cheesecake alla nutella\n4. Macedonia");

let risposta = sceltaDeiDolci(3, dolci);