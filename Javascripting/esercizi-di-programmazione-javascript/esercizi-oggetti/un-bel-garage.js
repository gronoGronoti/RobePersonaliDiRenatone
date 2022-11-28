/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/

console.log("\nun-bel-garage.js");
let marcaDaCercare = 'fiat';

let Auto = {
  marche: ['Fiat', 'Ford', 'Hyundai'],
  modelliFiat: ['600', 'Punto', 'Brava', 'Doblò'],
  modelliFord: ['Fiesta', 'Focus', 'Puma', 'Kuga', 'Ecosport'],
  modelliHyundai: ['i10', 'i20', 'ix20']
};

Auto.marche.forEach(marca => {
  if(marcaDaCercare != marca.toLowerCase()) console.log("\nMarca non trovata.");
  else {
    console.log("Ho trovato la marca che cercavi!");

    switch(marcaDaCercare) {
      case 'fiat':
        console.log("Ecco le macchine disponibili: ");
        console.log(Auto.modelliFiat);
        break;

      case 'ford':
        console.log("Ecco le macchine disponibili: ");
        console.log(Auto.modelliFord);
        break;
      
      case 'hyundai':
        console.log("Ecco le macchine disponibili: ");
        console.log(Auto.modelliHyundai);
        break;

      default:
        console.log("...Ma non abbiamo disponibilità al momento.");
        break;
    }
  }
});
  