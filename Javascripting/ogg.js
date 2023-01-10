function HouseKeeperConstructor(nome, anniDiEsperienza, anni, cosaPulisce, puttana) {
    this.nome = nome;
    this.anniDiEsperienza = anniDiEsperienza;
    this.anni = anni;
    this.cosaPulisce = cosaPulisce;
    this.puttana = puttana;
    this.pulisci = pulisci = () => {
        console.log("Sto pulendo...");
        console.log("Pulito tutto!");

        if(this.puttana === "sì")
            console.log("mo scopiamo");
    }
};

let houseKeeper1 = new HouseKeeperConstructor(
    'ermenegilda', 12, 37, ["er cesso", "il culo di nonna", "salotto"], 'sì');

console.log(houseKeeper1);
console.log( houseKeeper1.pulisci() );