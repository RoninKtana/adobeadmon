document.addEventListener("DOMContentLoaded", () => {
  // Carga dinámica de header y footer
  loadHTML("headers", "header.html", initHeader);
  loadHTML("footers", "footer.html");
  initCarousel();
  initAccordion();
});

/**
 * Carga contenido HTML de forma dinámica en un elemento con un ID dado.
 * @param {string} id - ID del elemento donde se insertará el contenido.
 * @param {string} url - URL del archivo HTML a cargar.
 * @param {Function} [callback] - Función a ejecutar después de cargar el contenido.
 */
async function loadHTML(id, url, callback) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error al cargar ${url}: ${response.status}`);
    const html = await response.text();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.innerHTML = html;
      if (callback) callback(); // Llama la función de inicialización si está definida
    } else {
      console.warn(`Elemento con ID ${id} no encontrado.`);
    }
  } catch (error) {
    console.error("Error cargando contenido HTML:", error);
  }
}

/**
 * Inicializa las funcionalidades del header.
 */
function initHeader() {
  const abrirBtn = document.getElementById("abrir");
  const navegation = document.getElementById("navegation");

  if (abrirBtn && navegation) {
    // Evento para el botón de abrir/cerrar menú
    abrirBtn.addEventListener("click", () => {
      navegation.classList.toggle("open");
      console.log("Menú principal abierto:", navegation.classList.contains("open"));
    });

    // Evento para desplegar submenús
    document.querySelectorAll(".submenu-parent > a").forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
        const parent = item.parentElement;
        const submenu = parent.querySelector(".submenu");
        if (submenu) {
          const isVisible = submenu.style.display === "block";
          submenu.style.display = isVisible ? "none" : "block";
          parent.classList.toggle("open", !isVisible);
          console.log(`Submenú ${isVisible ? "cerrado" : "abierto"} para:`, item.textContent);
        }
      });
    });
  } else {
    console.warn("Elementos no encontrados en el header.");
  }
}



/**
 * Inicializa el carrusel.
 */
function initCarousel() {
  const carouselSlide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");
  if (!carouselSlide || images.length === 0) {
    console.warn("Elementos del carrusel no encontrados.");
    return;
  }

  let currentIndex = 0;
  let imageWidth = images[0].clientWidth;

  function slideCarousel() {
    currentIndex++;
    if (currentIndex === images.length) {
      carouselSlide.style.transition = "none";
      currentIndex = 0;
      carouselSlide.style.transform = `translateX(0)`;
      setTimeout(() => {
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
      }, 50);
    } else {
      const offset = -currentIndex * imageWidth;
      carouselSlide.style.transform = `translateX(${offset}px)`;
    }
  }

  setInterval(slideCarousel, 5000);

  window.addEventListener("resize", () => {
    imageWidth = images[0].clientWidth;
  });
}

/**
 * Inicializa el acordeón.
 */
// Funcionalidad de acordeón principal
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        // Cerrar todos los demás
        accordions.forEach(acc => {
            if (acc !== accordion) {
                acc.nextElementSibling.style.display = 'none';
            }
        });
        // Alternar el seleccionado
        const panel = accordion.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});

// Funcionalidad de subacordeón
const nestedAccordions = document.querySelectorAll('.nested-accordion');
nestedAccordions.forEach(nestedAccordion => {
    nestedAccordion.addEventListener('click', () => {
        // Cerrar todos los demás
        nestedAccordions.forEach(nAcc => {
            if (nAcc !== nestedAccordion) {
                nAcc.nextElementSibling.style.display = 'none';
            }
        });
        // Alternar el seleccionado
        const panel = nestedAccordion.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});