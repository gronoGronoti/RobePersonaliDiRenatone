const calculateTheLove = (n) => {
    return Math.round(Math.random()*100);
};

let n = calculateTheLove();

if (n <= 20) {
    alert(n, "% -> Non è cosa");
}
if (n > 20 && n <= 60) {
    alert(n, "% -> Ti ci devi mettere");
}
if (n > 60 && n <= 85) {
    alert(n, "% -> È cosa");
}
if (n > 85 && n <= 100) {
    alert(n, "% -> Trombotastico");
}