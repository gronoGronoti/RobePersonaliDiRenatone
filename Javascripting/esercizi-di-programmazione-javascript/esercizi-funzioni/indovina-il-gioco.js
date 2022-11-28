/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/
console.log("\nindovina-il-gioco.js");

const indovinaIlGiorno = (n) => {
  if(n<=7 && n>=1) return true;
  else return false;
}
const diciIlGiorno = (n) => {
  switch(n) {
    case 1:
      console.log("Oggi è lunedì.");
      break;
    case 2:
      console.log("Oggi è martedì.");
      break;
    case 3:
      console.log("Oggi è mercoledì.");
      break;
    case 4:
      console.log("Oggi è giovedì.");
      break;
    case 5:
      console.log("Oggi è venerdì.");
      break;
    case 6:
      console.log("Oggi è sabato.");
      break;
    case 7:
      console.log("Oggi è domenica.");
      break;
    default:
      console.log("...cosa");
      break;
  }
}

if(indovinaIlGiorno(4)) diciIlGiorno(4);
