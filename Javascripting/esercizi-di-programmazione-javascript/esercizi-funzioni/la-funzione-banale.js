
/*La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE

    
  http://www.imparareaprogrammare.it*/

console.log("\nla-funzione-banale.js"); 

const verificNombre = (n, k) => {
  if(n === k) return true;
  else return false;
};

console.log(verificNombre(2, 3));
console.log(verificNombre(2, 2));
console.log(verificNombre(2, '2'));