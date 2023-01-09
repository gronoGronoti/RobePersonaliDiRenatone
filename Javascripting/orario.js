const stampaOrario = () => {
    let data = new Date();
    var giorni = [
        "lunedì",
        "martedì",
        "mercoledì",
        "giovedì",
        "venerdì",
        "sabato",
        "domenica"
    ]

    console.log( "Oggi è:", giorni[data.getDay()-1] );

    var timeCheck = data.getHours() >= 13? "PM" : "AM";
    console.log( "Ora sono le:", data.getHours()+timeCheck+": "+data.getMinutes()+": "+data.getSeconds() );
}

stampaOrario()