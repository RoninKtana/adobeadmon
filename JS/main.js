document.addEventListener("DOMContentLoaded", () => {
  // Inicializar todas las funcionalidades
  initHeader();
  initCarousel();
  initAccordion();
});

/**
 * Carga contenido HTML de forma dinámica en un elemento con un ID dado.
 * @param {string} id - ID del elemento donde se insertará el contenido.
 * @param {string} url - URL del archivo HTML a cargar.
 */
async function loadHTML(id, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error al cargar ${url}: ${response.status}`);
    const html = await response.text();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.innerHTML = html;
    } else {
      console.warn(`Elemento con ID ${id} no encontrado.`);
    }
  } catch (error) {
    console.error("Error cargando contenido HTML:", error);
  }
}

// Carga los elementos dinámicos
loadHTML("headers", "header.html");
loadHTML("footers", "footer.html");

/**
 * Inicializa la funcionalidad del header.
 */
function initHeader() {
  const abrirBtn = document.getElementById("abrir");
  const navegation = document.getElementById("navegation");

  if (abrirBtn && navegation) {
    abrirBtn.addEventListener("click", () => {
      navegation.classList.toggle("open");
    });

    document.querySelectorAll(".submenu-parent > a").forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        const submenu = item.nextElementSibling;
        const parent = item.parentElement;

        if (submenu) {
          const isVisible = submenu.style.display === "block";
          submenu.style.display = isVisible ? "none" : "block";
          parent.classList.toggle("open", !isVisible);
          parent.classList.toggle("activate", !isVisible);
        }
      });
    });
  } else {
    console.warn("Elementos del header no encontrados.");
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