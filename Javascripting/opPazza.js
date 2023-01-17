//takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c.
//Then multiply by d and divide by e. Finally raise to the power of f and return the result.

const func = (a, b, c, d, e, f) => {
    return Math.pow(((((a+b)-c) * d) / e), f);
}

console.log(func(10,5,6,9,3,2));