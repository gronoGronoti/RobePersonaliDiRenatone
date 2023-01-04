let people = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

const whosPaying = (names) => {
    let temp = Math.floor(Math.random()*names.length);
    return names[temp]+" is going to buy lunch today!";
}

console.log(whosPaying(people));