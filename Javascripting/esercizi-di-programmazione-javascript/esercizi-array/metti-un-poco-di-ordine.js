/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

//https://www.codingcreativo.it/bubble-sort-in-c/

const sistemaArray = (arr) => {
  let temp;

  for(let j = 0; j<(arr.length-1); j++) {
    for (let i = 0; i<(arr.length-1); i++) {
      if(arr[i] > arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
  console.log(arr, "// crescente");

  for(let j = 0; j<(arr.length-1); j++) {
    for (let i = 0; i<(arr.length-1); i++) {
      if(arr[i] < arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
  console.log(arr, "// decrescente");
}

const array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

sistemaArray(array);
