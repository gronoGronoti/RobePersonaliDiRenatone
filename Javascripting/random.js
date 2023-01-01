// (Math.random() * (max-min) + min)
let n;

for(i=1; i<=4; i++) {
    switch(i) {
        case 1:
            n = Math.round(Math.random() * (37-23) + 23);
            break;
        case 2:
            n = Math.round(Math.random() * (8-1) + 1);
            break;
        case 3:
            n = Math.round(Math.random() * (37-23) + 23);
            break;
        case 4:
            n = Math.round(Math.random() * (8-1) + 1);
            break;
    }
    console.log(n)
}