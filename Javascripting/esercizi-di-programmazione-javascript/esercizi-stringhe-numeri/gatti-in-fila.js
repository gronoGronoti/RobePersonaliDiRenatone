console.log("\ngatti-in-fila.js");

let totGatti = 44, gattiInFila = 6;

//ceil arrotonderà sempre un numero al suo intero superiore
let numFile = Math.ceil(totGatti/gattiInFila);
console.log("File di gatti: "+numFile);

letResto = (numFile * gattiInFila) - totGatti;
console.log("Gatti mancanti nell'ultima fila: "+letResto);