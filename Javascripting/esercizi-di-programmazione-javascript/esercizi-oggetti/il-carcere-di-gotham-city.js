/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  V I dati anagrafici delle guardie
  V I dati anagrafici dei detenuti
  V I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.

  Prevedi la possibilià di:
    V Assumere nuove guardie
    V Schedare nuovi carcerati
    V Aggiungere nuovi fascicoli
    V Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    V Effettuare ricerche nei fascicoli per nome del detenuto (ho fatto per id)

  Nel carcere di Gotham City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.

  http://www.imparareaprogrammare.it
*/
console.log("\nil-carcere-di-gotham-city.js");

//metto la data di oggi come data di incarcerazione
let today = new Date().toLocaleDateString();

let guardia = {
  id: "0123",
  nome: "pinco pallino",
  incarico: "secondino martoriato"
};

let detenuto = {
  id: "012345",
  nome: "pinco criminale",
  anni: 30,
  status: "in galera"
};

let fascicoloCriminale = {
  id: "012345",
  dataArresto: today,
  dataScarcerazione: "31/12/2032",
  crimineCommesso: "furto con cacco"
};

//lista delle guardie, lista dei detenuti, lista dei fascicoli
let guardsList    = [guardia], 
    criminalsList = [detenuto], 
    recordsList   = [fascicoloCriminale];

const showGuards = (temp) => {
  if(temp != -1) return guardsList[temp];
  return guardsList;
}

const showPrisoners = () => {
  let contaGalere = 0, contaMorti = 0, contaEvasi = 0;
  criminalsList.forEach(ch => {
    if(ch.status == "in galera")
      contaGalere ++;
    else if(ch.status == "evaso")
      contaEvasi ++;
    else contaMorti ++;
  });

  console.log(criminalsList);
  console.log( 
    "Attualmente in galera: "+contaGalere+"; " +
    "Evasi: "                +contaEvasi+ "; " +
    "Deceduti: "             +contaMorti);
}
const showPrisonerRecord = (temp) => {
  if(temp != -1) return recordsList[temp];
  return recordsList;
  //restituisce undefined a caso
}

const showPrisonData = () => {
  console.log("\n -- GUARDIE ------ \n");
  console.log(showGuards(-1));
  console.log("\n -- PRIGIONIERI -- \n");
  console.log(showPrisoners());
  console.log("\n -- FASCICOLI ---- \n");
  console.log(showPrisonerRecord(-1));
  //restituisce undefined a caso
}

//assumi guardie
const hireGuard = (temp) => {
  try {
    guardsList.push(temp);
  } catch(error) {
    console.log("// ERRORE //\n", error);
  }
}
//scheda criminale
const arrestCriminal = (temp) => {
  try {
    criminalsList.push(temp);
  } catch(error) {
    console.log("// ERRORE //\n", error);
  }
}
//fascicola fascicoli
const saveCriminalRecord = (temp) => {
  try {
    recordsList.push(temp);
  } catch(error) {
    console.log("// ERRORE //\n", error);
  }
}

/*****************************************************************/

console.log("\nAssumo una nuova guardia: ");
let guardiaNuova = {
  id: "0456",
  nome: "pinco pallone",
  incarico: "mancato di rispetto"
};
hireGuard(guardiaNuova);  console.log(showGuards(1));

console.log("\nArresto un nuovo criminale: ");
let detenutoNuovo = {
  id: "067891",
  nome: "criminal pallino",
  anni: 69,
  status: "deceduto"
};
let fascicoloNuovo = {
  id: "067891",
  dataArresto: today,
  dataScarcerazione: "31/12/2032",
  crimineCommesso: "omicaccolo"
};
arrestCriminal(detenutoNuovo);
if (fascicoloNuovo.id == detenutoNuovo.id) saveCriminalRecord(fascicoloNuovo);

console.log(showPrisonerRecord(1));

console.log("\nMostra i dati dell'intera prigione: ")
console.log(showPrisonData());