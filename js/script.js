// FRANCO

// MENÚ HAMBURGUESA
const menu_icon = document.querySelector(".material-symbols-outlined");
menu_icon.addEventListener("click", () => {
  const menu_nav = document.querySelector("nav");
  menu_nav.classList.toggle("visible");
});

// MODO OSCURO
const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "oscuro") {
  document.body.classList.add("modo-oscuro");
}

const modo = document.querySelector("#btn-modo");

modo.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("modo-oscuro");
  if (document.body.classList.contains("modo-oscuro")) {
    localStorage.setItem("tema", "oscuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
});

//Consideraciones:
// el <body> de cada html tiene el id={nombre del archivo html}
// "leer mas..." Se recomienda sea un <button> o un <input type="button"> con class="voltear"
// La estructura HTML debve tener una seccion (div, article o cualquiera) con la clase "anverso" -inicial- y otra con "reverso" -cuando se gire el card-
// El CSS debe contener una clase "flip" que contempla los efectos de transición. Tal como el ejemplo:
// .card {
//             .
//             .
//             .
//             position: relative;
//             transition: transform .6s linear;
//         }

//         .reverso {
//             display: none;
//             transform: rotateY(180deg);
//         }

//         .card.flip {
//             transform: rotateY(180deg);
//         }

//         .voltear {
//             position: absolute;
//             bottom: 50px;
//             left: 50%;
//             transform: translateX(-50%);
//             background-color: rgba(230, 230, 230, .75);
//         }

// Flip card
const botonesFlip = document.querySelectorAll("#mujeres .voltear");
botonesFlip.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = document.querySelector(".card");
    const anverso = document.querySelector(".anverso");
    const reverso = document.querySelector(".reverso");

    tarjeta.classList.toggle("flip");

    if (tarjeta.classList.contains("flip")) {
      anverso.style.display = "none";
      reverso.style.display = "block";
    } else {
      anverso.style.display = "block";
      reverso.style.display = "none";
    }
  });
});
