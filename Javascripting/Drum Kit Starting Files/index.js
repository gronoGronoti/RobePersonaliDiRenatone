const playDrum = (key) => {
    let audio;

    switch(key) {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case 'j':
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case 'k':
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log("Errore.");
            break;
    }
}

const animateBtn = (key) => {
    let elem = document.querySelector("."+key);

    if (elem.style.color != "white") {
        elem.style.color = "white";
        setTimeout(() => {elem.style.color = "#DA0463"; }, 1000); // aspetta 1 secondo e cambia colore
    }
}

let btns = document.querySelectorAll(".drum");

// per premuta col mouse
btns.forEach(elem => {
    elem.addEventListener("click", handleClick = () => {
        let btnInnerHTML = elem.innerHTML;

        playDrum(btnInnerHTML);

        animateBtn(btnInnerHTML);
    })
})

// per premuta coi tasti della tastiera
document.addEventListener("keydown", handlePress = (event) => {

    playDrum(event.key);

    animateBtn(event.key);
})
