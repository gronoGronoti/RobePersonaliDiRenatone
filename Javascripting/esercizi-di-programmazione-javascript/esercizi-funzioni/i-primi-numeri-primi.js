/*
  I primi numeri…primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.

  Esempio:
    Input: n = 5
    Output:
          TRUE

            2
            3
            5
            7
            11


  Consigli:
  Per non ripetere il codice, nella seconda funzione puoi richiamare la prima funzione ;)

  http://www.imparareaprogrammare.it
*/
console.log("\ni-primi-numeri-primi.js");

const fun = (n) => {
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let index = 2; index <= i / 2; index++) {
          if(!(i % index)) {
            isPrime = false;
            continue;
          }
    }
    if(isPrime){
      console.log(i);
    }
  }
}

fun(13);