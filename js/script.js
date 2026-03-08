// FRANCO

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
const titulo = document.getElementById("titulo");
const texto = titulo.textContent;

titulo.textContent = ""; // vaciar el h1

texto.split("").forEach((letra, i) => {
    const span = document.createElement("span");

    if (letra === " ") {
        // Si es un espacio, ponemos un &nbsp; sin animación
        span.innerHTML = "&nbsp;";
    } else {
        span.textContent = letra;
        span.classList.add("letra");
        span.style.animationDelay = (i * 0.03) + "s";
    }

    titulo.appendChild(span);
});