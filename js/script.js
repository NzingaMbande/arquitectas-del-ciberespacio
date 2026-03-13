// Botoón "Leer más" (Version Rocio)
// <a> "Leer mas" - (articulos.html y entrevistas.html)
// Para mostrar/ocultar el contenido -texto-. También cambia la propiedad textContent del <a>, según la acción disponible

document.querySelectorAll(".leer-mas").forEach((elemento) => {
  elemento.addEventListener("click", function (e) {
    e.preventDefault(); // evita que el <a> recargue la página
    this.closest(".post").classList.toggle("activo");
    elemento.textContent === "Leer más"
      ? (elemento.textContent = "Leer menos")
      : (elemento.textContent = "Leer más");
  });
});

// MENÚ HAMBURGUESA
// Para controlar dinámica del menu hamburguesa presente en todas las páginas
const menu_icon = document.querySelector(".material-symbols-outlined");
menu_icon.addEventListener("click", () => {
  const menu_nav = document.querySelector("nav");
  menu_nav.classList.toggle("visible");
});

// MODO OSCURO
// Controla el cambio dinámico del esquema de colores para alternar entre modo claro/oscuro
// Se usa localStorage.getItem("tema") para guardar una variable en el navegador y pueda ser leida cuando se cambie de pagina para respetar el modo elegido previamente

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

// Flip-card mujeres.html
// Lograr efecto flip-card cuando se detecta "click" en el <button> del card.
// Además controla que solo un card debe mantenerse visible (En caso el usuario no "gire" haciendo click en el <p>)

const botones = document.querySelectorAll(".card_mujeres .voltear");
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjetaActual = boton.closest(".card_mujeres");
    const anversoActual = tarjetaActual.querySelector(".anverso");
    const reversoActual = tarjetaActual.querySelector(".reverso");

    const estaAbierta = tarjetaActual.classList.contains("flip");

    // Cerrar todas
    document.querySelectorAll(".card_mujeres").forEach((tarjeta) => {
      const anverso = tarjeta.querySelector(".anverso");
      const reverso = tarjeta.querySelector(".reverso");

      tarjeta.classList.remove("flip");
      anverso.style.display = "flex";
      reverso.style.display = "none";
    });

    if (!estaAbierta) {
      tarjetaActual.classList.add("flip");
      anversoActual.style.display = "none";
      reversoActual.style.display = "flex";
    }
  });
});
