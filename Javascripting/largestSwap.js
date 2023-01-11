const invertiStr = (str) => {
    let temp = str.split("");   // split("") divide str in un array di caratteri tra doppi apici
    let temp2 = temp.reverse(); // reverse inverte i caratteri splittati
    str = temp2.join("");       // join("") unisce in una stringa i caratteri divisi tra doppi apici
    
    return str;
};

const largestSwap = (n) => {
    let n2 = n.toString();
    n2 = parseInt( invertiStr(n2) );

    if( n >= n2 ) {
        return true;
    } else
        return false;
}

console.log( largestSwap(72) );