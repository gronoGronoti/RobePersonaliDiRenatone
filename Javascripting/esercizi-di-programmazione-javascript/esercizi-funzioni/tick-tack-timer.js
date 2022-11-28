/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/
console.log("\ntick-tack-timer.js");

const contoAllaRovescia = (temp) => {
  while(temp != -1) {
    console.log(temp);
    temp--;
  }
}; contoAllaRovescia(7);
