const isYear = (yy) => {
    if(yy % 4 === 0) {
        if(yy % 100 != 0) {
            console.log(yy, ": Leap year.");
        } else if (yy % 400 === 0) {
            console.log(yy, ": Leap year.");
        }
    } else {
        console.log(yy, ": Not a leap year.");
    }
}

for(let year=2000; year <= 2023; year++) {
    isYear(year);
}
