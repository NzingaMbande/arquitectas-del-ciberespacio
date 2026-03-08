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
// "leer mas..." Se recomienda sea un <button> o un <input type="button"> con class="btn-leer"
// Se debe incluir un div "modal" (antes del cierre del body) -ver ejemplo de la estructura en card-leer-mas.html perfil "franco"-

// menu flip card
const botones = document.querySelectorAll("#mujeres .card-image");
const modal = document.querySelector("#mujeres #modal");
const modalTitulo = document.querySelector("#mujeres #modal-titulo");
const modalImg = document.querySelector("#mujeres #modal-img");
const modalTexto = document.querySelector("#mujeres #modal-texto");
const cerrar = document.querySelector("#mujeres .modal-content.cerrar");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const card = boton.closest(".card");

    const titulo = card.querySelector("h3").textContent;
    const img = card.querySelector("img").src;
    const texto = card.querySelector("p").textContent;

    modalTitulo.textContent = titulo;
    modalImg.src = img;
    modalImg.style.width = "50%";
    modalTexto.textContent = texto;

    modal.style.display = "flex";
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
