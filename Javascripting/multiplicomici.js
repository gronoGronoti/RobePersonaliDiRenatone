let fizzbuzz = [], i=1;

while (i<=100) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzbuzz.push(i, "fizzBuzz!");
    }
    
    else if(i % 3 === 0) {
        fizzbuzz.push(i, "fizz");
    } else if (i % 5 === 0) {
        fizzbuzz.push(i, "buzz");
    }

    i++;
}

console.log(fizzbuzz)