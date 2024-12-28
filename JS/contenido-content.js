document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const isOpen = content.classList.contains("open");

            // Cerrar otros acordeones principales
            document.querySelectorAll(".accordion-content").forEach(c => {
                if (c !== content) {
                    c.classList.remove("open");
                    c.style.maxHeight = "0";
                }
            });

            // Alternar el estado del actual
            if (!isOpen) {
                content.classList.add("open");
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.classList.remove("open");
                content.style.maxHeight = "0";
            }
        });
    });

    const nestedHeaders = document.querySelectorAll(".nested-accordion-header");
    nestedHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const isOpen = content.classList.contains("open");

            // Alternar el estado del acordeón anidado
            if (!isOpen) {
                content.classList.add("open");
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.classList.remove("open");
                content.style.maxHeight = "0";
            }

            // Ajustar la altura del contenedor padre
            const parentContent = header.closest(".accordion-content");
            if (parentContent) {
                setTimeout(() => {
                    parentContent.style.maxHeight = parentContent.scrollHeight + "px";
                }, 300); // Retraso para esperar la transición de apertura/cierre del contenido anidado
            }
        });
    });
});