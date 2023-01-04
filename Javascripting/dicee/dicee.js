const rollTheDice = (res) => {
    return "images/dice"+res+".png";
}
const checkWhoWon = (string) => {
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

let r1 = rollTheDice(Math.ceil(Math.random()*6));
let r2 = rollTheDice(Math.ceil(Math.random()*6));

let img1 = document.querySelectorAll(".dice.img1");
img1.setAttribute("src", r1);

let img2 = document.querySelectorAll(".dice.img2");
img2.setAttribute("src", r2);

//document.querySelector('.img1').setAttribute('src', rollTheDice())
//document.querySelector('.img2').setAttribute('src', rollTheDice())

//document.querySelector('.img1').style.cursor = 'pointer'
//document.querySelector('.img2').style.cursor = 'pointer'