/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/
console.log("\nverifica-la-data.js")

let Data = {
    giorno: 24,
    mese: 11,
    anno: 2022
};

if(Data.mese > 12 || Data.giorno > 31)
  console.log("La data non è valida!");
else
  console.log("Data: "+Data.giorno+"/"+Data.mese+"/"+Data.anno);