let btns = document.querySelectorAll(".drum");

btns.forEach(elem => {
    elem.addEventListener("click", handleClick = () => {
        let audio;

        switch(elem.textContent) {
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

        // let audio = new Audio("sounds/"+sample+".mp3");
        // audio.play();

        if (elem.style.color != "white") {
            elem.style.color = "white";
            setTimeout(() => {elem.style.color = "#DA0463"; }, 1000); // aspetta 1 secondo e cambia colore
        }
    });
});
