console.log("\nquanti-anni-ha.js");

let data = new Date();
let anno = data.getFullYear();

let annoDiNascita = 1987;

let eta = anno - annoDiNascita;

console.log(anno+ ' - '+annoDiNascita+' = '+eta+' anni.');
console.log('Per arrivare ai 100 anni ci vorranno ancora '+(100-eta)+' anni.');