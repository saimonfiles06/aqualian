       // Filtros del portfolio
        const projectFilters = document.querySelectorAll(".projects-filter");
        const projectCards = document.querySelectorAll(".project-card");
        const projectsEmpty = document.getElementById("projects-empty");

        projectFilters.forEach(button => {
            button.addEventListener("click", () => {
                const selectedFilter = button.dataset.filter;
                let visibleProjects = 0;

                projectFilters.forEach(filterButton => {
                    const isActive = filterButton === button;

                    filterButton.classList.toggle("active", isActive);
                    filterButton.setAttribute("aria-pressed", String(isActive));
                });

                projectCards.forEach(card => {
                    const matches =
                        selectedFilter === "todos" ||
                        card.dataset.category === selectedFilter;

                    card.hidden = !matches;

                    if (matches) {
                        visibleProjects++;
                    }
                });

                projectsEmpty.hidden = visibleProjects > 0;
            });
        });

        // Año del pie de página
        document.getElementById("current-year").textContent =
            new Date().getFullYear();