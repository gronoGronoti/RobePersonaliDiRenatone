/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/
console.log("\npa-pa-pa-lindromo.js");

const dividiStr = (str, i) => {
  return res = [(str.length%2 === 0)? str.slice(0,i): str.slice(0,i+1), str.slice(i)];
  /*se str.length%2!=0, aggiungere un carattere in più a str1*/
};
const invertiStr = (str) => {
  let temp = str.split("");   // split("") divide str in un array di caratteri tra doppi apici
  let temp2 = temp.reverse(); // reverse inverte i caratteri splittati
  return temp2.join("");       // join("") unisce in una stringa i caratteri divisi tra doppi apici
};

let stringa = "i topi non avevano nipoti";

//tolgo gli spazi dalla stringa
stringa = stringa.replace(/\W/g, "");
console.log( stringa );

//divido stringa in due
let [str1, str2] = dividiStr(stringa, (stringa.length/2));
console.log( str1, str2 );

//inverto i caratteri in str2
str2 = invertiStr( str2 );
console.log( str2, "<== (questa stringa è str2 invertita)" );

let verifica = (str1 == str2)? true: false;
console.log( verifica );