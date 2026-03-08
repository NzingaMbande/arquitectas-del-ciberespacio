// FRANCO

//articulos por arnau
// para el leer mas
document.querySelectorAll(".leer-mas").forEach(function(enlace){
  enlace.addEventListener("click", function(e){
    e.preventDefault(); // evita que el <a> recargue la página
    this.closest(".post").classList.toggle("activo");
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