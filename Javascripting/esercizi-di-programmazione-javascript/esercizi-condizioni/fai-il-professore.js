/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-if. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

console.log("\nfai-il-professore.js");

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const dammiIlVoto = (voto) => {

  if (voto < 18)
    return "Insufficiente";

  else if (voto >= 18 && voto < 21)
    return "Sufficiente";
    
  else if (voto >= 21 && voto < 24)
    return "Buono";

  else if (voto >= 24 && voto < 27)
    return "Distinto";

  else if (voto >= 27 && voto < 29)
    return "Ottimo";
    
  else if (voto >= 29) 
    return "Eccellente!!1!!1!";
}

rl.question("Che voto hai preso? ", function(res) {
  let votazione = res;
  console.log(votazione+"?", dammiIlVoto(votazione));
  
  rl.close();
});