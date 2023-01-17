
const nome = "renato",
  cognome = "siliciano";

let url1 =
  "https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2022/11/pasta-alla-lupara/_R5_1095.jpg";
let url2 =
  "https://wips.plug.it/cips/paginegialle.it/magazine/cms/2022/03/carne-pregiata.jpg?w=744&h=418&a=c";
let url3 =
  "https://www.todis.it/wp-content/uploads/2022/05/dolci-con-gelato.jpg";

let rootDiv = document.getElementById("root");

ReactDOM.createRoot(rootDiv).render(
  <section>
    <h1 className="titulo">ciao { `${nome} ${cognome}` }</h1>

    <div className="images">
      <div className="dish">
        <img src={url1} alt="pasta" />
        <p>{Math.round(Math.random() * 25)} €</p>
      </div>

      <div className="dish">
        <img src={url2} alt="meat" />
        <p>{Math.round(Math.random() * 25)} €</p>
      </div>

      <div className="dish">
        <img src={url3} alt="ice-cream" />
        <p>{Math.round(Math.random() * 25)} €</p>
      </div>
    </div>
  </section>
);

let luckyNumDiv = document.getElementsByClassName("lucky-num")[0];

ReactDOM.createRoot(luckyNumDiv).render(
  <section>
    <p>{`${nome}, il tuo numero fortunato oggi è: ${Math.round(Math.random() * 30)}`}</p>
  </section>
);

let foodDiv = document.getElementsByClassName("foods-list")[0];

ReactDOM.createRoot(foodDiv).render(
  <section>
    <h1 className = "titulo">My favourite foods</h1>
    <ul>
      <li>Pasta</li>
      <li>Meat</li>
      <li>Ice cream</li>
    </ul>
  </section>
);

let footerSec = document.getElementsByTagName("footer")[0];

let anno = new Date().getUTCFullYear();

ReactDOM.createRoot(footerSec).render(
  <section>
    <p>{ `${nome} ${cognome}` }</p>
    <p>(C) {`${anno}`}</p>
  </section>
);