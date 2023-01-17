const addUp = (n) => {
    let sum = 0;

    for(i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log( addUp(4) );

console.log( addUp(13) );