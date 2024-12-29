/*------------------------------------------*/
/*------------------Header------------------*/
/*------------------------------------------*/
document.getElementById("abrir").addEventListener("click", function () {
  document.getElementById("navegation").classList.toggle("open");
});

// Mostrar u ocultar el submenú en móviles al hacer clic
document.querySelectorAll(".submenu-parent > a").forEach((item) => {
  item.addEventListener("click", function (event) {
    const submenu = this.nextElementSibling; // El submenú correspondiente
    const parent = this.parentElement; // El item del menú

    // Si el submenú ya está abierto, lo cerramos, si no, lo abrimos
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
      parent.classList.remove("open");
      parent.classList.remove("activate");
    } else {
      submenu.style.display = "block";
      parent.classList.add("open");
      parent.classList.add("activate");
    }

    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
  });
});
/*------------------------------------------*/
/*------------------Header------------------*/
/*------------------------------------------*/





/*------------------------------------------*/
/*----------------carousel------------------*/
/*------------------------------------------*/
const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const totalImages = images.length;
let currentIndex = 0;
let imageWidth = images[0].clientWidth; // Obtenemos el ancho de la primera imagen

// Función para mover el carrusel
function slideCarousel() {
  currentIndex++;

  if (currentIndex === totalImages) {
    // Cuando llegamos a la última imagen, reiniciamos el carrusel
    carouselSlide.style.transition = "none"; // Sin transición para reiniciar
    currentIndex = 0; // Volver al primer índice
    carouselSlide.style.transform = `translateX(0)`; // Regresamos al inicio
    setTimeout(() => {
      carouselSlide.style.transition = "transform 0.5s ease-in-out"; // Restauramos la transición
    }, 50); // Pequeño retraso para evitar el salto visible
  } else {
    // Desplazamos el carrusel a la siguiente imagen
    const offset = -currentIndex * imageWidth;
    carouselSlide.style.transform = `translateX(${offset}px)`;
  }
}

// Iniciar el carrusel
setInterval(slideCarousel, 5000); // Cambiar cada 5 segundos

// Actualizar el ancho de la imagen al cambiar el tamaño de la ventana
window.addEventListener("resize", () => {
  imageWidth = images[0].clientWidth; // Actualiza el ancho de la imagen
});
/*------------------------------------------*/
/*----------------carousel------------------*/
/*------------------------------------------*/






/*------------------------------------------*/
/*----------------acordeon------------------*/
/*------------------------------------------*/
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
/*------------------------------------------*/
/*----------------acordeon------------------*/
/*------------------------------------------*/
