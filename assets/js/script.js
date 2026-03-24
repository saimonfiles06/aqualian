// Elementos
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle del menú móvil al hacer click en la hamburguesa
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");  // anima la hamburguesa
    mobileMenu.classList.toggle("active"); // abre/cierra el menú
});