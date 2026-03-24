// Elementos
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle menú
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// Cerrar menú al hacer click en enlace
const links = mobileMenu.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        hamburger.classList.remove("active");
    });
});