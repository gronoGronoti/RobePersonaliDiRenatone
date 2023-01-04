const printLyrics = () => {
    let i=99;

    while(i>=0) {
        while(i>=2) {
            console.log(i, "bottles of beer on the wall,", i, "bottles of beer. Take one down and pass it around,", i-1, "bottles of beer on the wall.");
            i--;
        }

        switch(i) {
            case 1:
                console.log(i, "bottle of beer on the wall,", i, "bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
                break;
            case 0:
                console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
                break;
        }

        i--;
    }
}

printLyrics();