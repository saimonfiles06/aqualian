  const menuToggle = document.querySelector(".menu-toggle");
        const nav = document.querySelector(".nav");

        if (menuToggle && nav) {
            menuToggle.addEventListener("click", () => {
                const isOpen =
                    menuToggle.getAttribute("aria-expanded") === "true";

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

                menuToggle.setAttribute(
                    "aria-label",
                    isOpen ? "Abrir menú" : "Cerrar menú"
                );

                nav.classList.toggle("is-open", !isOpen);
            });

            nav.querySelectorAll("a").forEach((link) => {
                link.addEventListener("click", () => {
                    nav.classList.remove("is-open");
                    menuToggle.setAttribute("aria-expanded", "false");
                    menuToggle.setAttribute("aria-label", "Abrir menú");
                });
            });
        }