
//inizializza output da tastiera
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let merdacce = "";

//fa la domanda alla quale risponde con res, che poi viene inserito in merdacce
rl.question("Quante merdacce hai scagato?!!??! ", function(res) {
    merdacce = res;

    console.log("Addirittura", merdacce, "scagazze?!!");

    //chiude lo stream
    rl.close();
});