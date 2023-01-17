const sortDrinkByPrice = (drinks) => {
    return drinks.sort((a,b)=> a.price - b.price);
};

let drinks = [
    { name: 'peach', price: 91 },
    { name: 'lemonade', price: 450 },
    { name: 'lime', price: 432 },
];

sortDrinkByPrice(drinks);
console.log(drinks)