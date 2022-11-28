/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      V Visualizzazione dell'intera lista contatti
      V Inserimento di un nuovo contatto
      V Modifica di uno contatto passando in input l'indice dell'array
      V Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.

  http://www.imparareaprogrammare.it
*/
console.log("\nla-mia-rubrica.js");

let contatto = {
  nome: "Antonio",
  telefono: "33243",
  indirizzo: "via giuseppe"
}

//dichiaro un array contactList con primo oggetto 'contatto'
let contactList = [contatto]

//aggiunta
const addContact = (el) => {
  return contactList.push(el)
}

//rimozione
const deleteContact = (n) => {
  if(n < contactList.length){
    return contactList.splice(n,1)
  }
  return "out of range"
}

//mostra contatto
const showContact = (n) => {
  if(n < contactList.length){
    return contactList[n]
  }
  return "out of range"
}

//mostra tutti i contatti
const showList = () => {
  return contactList
}

//modifica contatto
const editContact = (n, el) => {
  if(n < contactList.length){
    //si prende tutte le variabili nuove sovrascrivendo quelle vecchie
    return contactList[n] = {...contactList[n], ...el}
  }
  return "out of range"
}

console.log("Prima apertura lista contatti:");
console.log(showList());

console.log("\nAggiunta di un contatto: ");
let newCnt = {
  nome: 'michele',
  telefono: '1234567',
  indirizzo: 'le tue mura'
}
addContact(newCnt);
console.log(showList());

console.log("\nModifica di un contatto: ");
newCnt = {
  nome: 'michelazzo',
  indirizzo: 'il tuo culo'
}
editContact(1, newCnt);
console.log(showList());

console.log("\nRimozione di un contatto: ");
deleteContact(0);
console.log(showList());