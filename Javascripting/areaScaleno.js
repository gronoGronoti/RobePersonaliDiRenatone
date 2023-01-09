let a=5, b=6, c=7;

//semiperimetro triang. scaleno
let s = (a+b+c) / 2;

//area
let area = Math.sqrt(s * ((s-a)*(s-b)*(s-c)));
console.log(area,"// arrotondata:", Math.round(area));