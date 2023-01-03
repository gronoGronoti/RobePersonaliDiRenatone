const trovaPers = (arr, prompt) => {
    
    if(people.includes(prompt))
        console.log("Trovato!");
    else {
        console.log("Non l'ho trovato!");
    }
}

let people = [
    'gronoti',
    'mamma',
    'papo',
    'super mario',
    'paperino',
    'fotosintesi caccona'
];
console.log(people, "lung:", people.length);

let nome = "paolo";
trovaPers(people, nome);