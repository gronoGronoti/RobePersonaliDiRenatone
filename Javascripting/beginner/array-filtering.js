let numbers = [1,2,3,4,5,6,7,8,9,10];
let filtered;

function evenNumbers(num) {
    return num%2 === 0;
}

//filtra i numeri pari
//sintassi: words.filter(word => word.length > 6);
filtered = numbers.filter(number => evenNumbers(number));

console.log(filtered);