const stampaOrario = () => {
    let data = new Date();
    var giorni = [
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato",
        "Domenica"
    ]
    var timeCheck = data.getHours() >= 13? "PM" : "AM";

    document.getElementsByClassName("write-date-here")[0].innerHTML = 
        "Oggi è "+ giorni[data.getDay()-1]+ " " + data.getUTCDate() +", "+
        data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()+ " " +timeCheck;
}

const printPagina = () => {
    window.print();
}

const triggerPublicityModal = (modal, background) => {
    document.querySelectorAll(modal)[0].remove();
    document.querySelectorAll(background)[0].remove();
}