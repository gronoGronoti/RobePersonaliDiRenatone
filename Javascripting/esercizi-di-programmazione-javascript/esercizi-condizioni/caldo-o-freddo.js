/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

console.log("\ncaldo-o-freddo.js");

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const stabiliamoTemp = (t1 /*mia*/, t2, t3, t4, t5, t6, t7) => {
  let temperature = [t1, t2, t3, t4, t5, t6, t7];
  let max = 0;
  
  console.log(temperature);

  return [Math.max(...temperature), Math.min(...temperature)];
}

rl.question("Inserisci la temperatura di oggi: ", function(res) {
  let tempLun = res;
  let tempMar = Math.floor(Math.random()*(30-(-5))+(-5));
  let tempMer = Math.floor(Math.random()*(30-(-5))+(-5));
  let tempGio = Math.floor(Math.random()*(30-(-5))+(-5));
  let tempVen = Math.floor(Math.random()*(30-(-5))+(-5));
  let tempSab = Math.floor(Math.random()*(30-(-5))+(-5));
  let tempDom = Math.floor(Math.random()*(30-(-5))+(-5));

  let ris = stabiliamoTemp(tempLun, tempMar, tempMer, tempGio, tempVen, tempSab, tempDom);
  console.log("Temperatura più calda:", ris[0],"; Temperatura più fredda:", ris[1]);

  rl.close();
});