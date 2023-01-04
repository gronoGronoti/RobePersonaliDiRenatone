/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

const faiSomma = (arr1, arr2) => {
  let temp=[];

  for(let i = 0; i<arr1.length; i++) {
      temp.push(arr1[i] + arr2[i]);
  }

  return temp;
};
const faiDifferenza = (arr1, arr2) => {
  let temp=[];

  for(let i = 0; i<arr1.length; i++) {
      if(arr1[i] > arr2[i]) {
          temp.push(arr1[i] - arr2[i]);
      }
      else temp.push(arr2[i] - arr1[i]);
  }


  return temp;
};
const faiProdotto = (arr1, arr2) => {
  let temp=[];
    
  for(let i = 0; i<arr1.length; i++) {
      temp.push(arr1[i] * arr2[i]);
  }

  return temp;
};
const faiDivisione = (arr1, arr2) => {
  let temp=[];

  for(let i = 0; i<arr1.length; i++) {
      if(arr1[i] > arr2[i]) {
          temp.push(arr1[i] / arr2[i]);
      }
      else temp.push(arr2[i] / arr1[i]);
  }

  return temp;
};

const stampaTutto = (arr1, arr2, arr3, c) => {
  console.log("arr1:", arr1, "\n");
  console.log("arr2:", arr2, "\n");
  console.log("arr3 ("+c+"):", arr3, "\n");
}

let arr1 = [], arr2 = [], arr3 = [];

for(let i = 0; i < 10; i++) {
  arr1.push(Math.floor(Math.random()*15)); 
  arr2.push(Math.floor(Math.random()*15)); 
}

let scelta = prompt("Che operazione devo fare?").toLowerCase(); // solo su chrome

switch(scelta) {
  case 'addizione', 'somma':
    arr3 = faiSomma(arr1, arr2);
    break;
  
  case 'sottrazione', 'differenza':
    arr3 = faiDifferenza(arr1, arr2);
    break;
  
  case 'moltiplicazione', 'prodotto':
    arr3 = faiProdotto(arr1, arr2);
    break;

  case 'divisione', 'frazione':
  arr3 = faiDivisione(arr1, arr2);
    break;
}

stampaTutto(arr1, arr2, arr3, scelta);
