// FRANCO

//articulos por arnau
//BOTON Leer mas
// document.querySelectorAll(".leer-mas").forEach(function (enlace) {
//   enlace.addEventListener("click", function (e) {
//     e.preventDefault(); // evita que el <a> recargue la página
//     this.closest(".post").classList.toggle("activo");
//   });
// });

// Version Rocio
document.querySelectorAll(".leer-mas").forEach((elemento) => {
  elemento.addEventListener("click", function (e) {
    e.preventDefault(); // evita que el <a> recargue la página
    this.closest(".post").classList.toggle("activo");
    elemento.textContent === "Leer más"
      ? (elemento.textContent = "Leer menos")
      : (elemento.textContent = "Leer más");
  });
});

//imagenes
// window.addEventListener("load", function(){

//   // seleccionamos todas las imágenes de los posts
//   const imgs = document.querySelectorAll(".post img");

//   // definimos el tamaño máximo deseado (ejemplo 200px de alto)
//   const maxHeight = 200;

//   imgs.forEach(img => {
//     // si la imagen es más alta que maxHeight
//     if(img.naturalHeight > maxHeight){
//       const ratio = maxHeight / img.naturalHeight;
//       img.style.height = maxHeight + "px";
//       img.style.width = (img.naturalWidth * ratio) + "px";
//     } else {
//       // si la imagen es más pequeña, la dejamos igual
//       img.style.height = img.naturalHeight + "px";
//       img.style.width = img.naturalWidth + "px";
//     }
//   });
// });

// MENÚ HAMBURGUESA
const menu_icon = document.querySelector(".material-symbols-outlined");
menu_icon.addEventListener("click", () => {
  const menu_nav = document.querySelector("nav");
  menu_nav.classList.toggle("visible");
});

// MODO OSCURO
// const temaGuardado = localStorage.getItem("tema");

//         if (temaGuardado === "oscuro") {
//             document.body.classList.add("modo-oscuro");
//         }

//         const modo = document.querySelector("#btn-modo");

//         modo.addEventListener("click", () => {
//             const body = document.querySelector("body");
//             body.classList.toggle("modo-oscuro");
//             if (document.body.classList.contains("modo-oscuro")) {
//                 localStorage.setItem("tema", "oscuro");
//             } else {
//                 localStorage.setItem("tema", "claro");
//             }
//         })

// DIANA
// const titulo = document.getElementById("titulo");
// const texto = titulo.textContent;

// titulo.textContent = ""; // vaciar el h1

// texto.split("").forEach((letra, i) => {
//   const span = document.createElement("span");

//   if (letra === " ") {
//     // Si es un espacio, ponemos un &nbsp; sin animación
//     span.innerHTML = "&nbsp;";
//   } else {
//     span.textContent = letra;
//     span.classList.add("letra");
//     span.style.animationDelay = i * 0.03 + "s";
//   }

//   titulo.appendChild(span);
// });

// Flip card mujeres.html
const botones = document.querySelectorAll(".card_mujeres .voltear");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.closest(".card_mujeres");
    const anverso = tarjeta.querySelector(".anverso");
    const reverso = tarjeta.querySelector(".reverso");

    tarjeta.classList.toggle("flip");

    if (tarjeta.classList.contains("flip")) {
      anverso.style.display = "none";
      reverso.style.display = "flex";
    } else {
      anverso.style.display = "flex";
      reverso.style.display = "none";
    }
  });
});
