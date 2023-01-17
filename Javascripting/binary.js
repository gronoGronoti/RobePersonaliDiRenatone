const binary = (n) => {
    return (n >>> 0).toString(2);
};

console.log( binary(1) );
console.log( binary(5) );
console.log( binary(10) );