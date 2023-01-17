
const checkWhoWon = () => {
    let string;
    if(document.querySelector(".img1").getAttribute("src") === document.querySelector(".img2").getAttribute("src")) {
        string = 'draw'
    } else if (document.querySelector(".img1").getAttribute("src") > document.querySelector(".img2").getAttribute("src")) {
        string = 'won'
    } else
        string = 'lost'

    switch(string.toLowerCase()) {
        case 'won':
            document.querySelector(".container h1").innerHTML = "You Won! 🤪";
            break;
        
        case 'lost':
            document.querySelector(".container h1").innerHTML = "You Lost... 👺";
            break;
        
        case 'draw':
            document.querySelector(".container h1").innerHTML = "It's a Draw!? 🥸";
            break;
    }
}

const rollTheDice = () => {
    let res = Math.ceil(Math.random()*6);
    return "images/dice"+res+".png";
}
const setAttributes = (string) => {
    let cl = "." + string;
    let str = rollTheDice();
    console.log(cl, str);

    document.querySelector(cl).setAttribute("src", str);
}
