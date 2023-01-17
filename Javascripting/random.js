const stampaPattern = () => {
    return Math.round(Math.random() * (37-23) + 23);
}
const stampaVariazione = () => {
    return Math.round(Math.random() * 8);
}

for(i=1; i<=5; i++) {
    switch(i) {
        case i:
            if (i != 5) console.log( (i%2 == 0)? stampaVariazione() : stampaPattern() );

            else console.log( "Pattern:", Math.ceil(Math.random() * 7) );

            break;
    }
}