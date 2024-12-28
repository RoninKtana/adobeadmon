// Función para ejecutar el script solo en pantallas pequeñas
function agregarContenedorParaImagenYTexto() {
    // Verifica si el tamaño de la pantalla es menor o igual a 768px (tablet y celular)
    if (window.innerWidth <= 1024) {
        // Seleccionar todos los elementos de tarjetas (a) dentro de .tarjeta
        const tarjetas = document.querySelectorAll('.tarjeta a');

        tarjetas.forEach(tarjeta => {
            // Si ya se ha agregado el contenedor, no hacer nada
            if (!tarjeta.querySelector('.img-texto-container')) {
                // Crear un nuevo contenedor para la imagen y el texto
                const contenedorImgTexto = document.createElement('div');
                contenedorImgTexto.classList.add('img-texto-container');

                // Obtener la imagen y el texto de la tarjeta
                const imagen = tarjeta.querySelector('img');
                const texto = tarjeta.querySelector('.texto-tarjeta');

                // Verificar si los elementos existen antes de agregarlos al contenedor
                if (imagen && texto) {
                    // Mover la imagen y el texto al nuevo contenedor
                    contenedorImgTexto.appendChild(imagen);
                    contenedorImgTexto.appendChild(texto);

                    // Agregar el contenedor a la tarjeta antes del botón
                    tarjeta.insertBefore(contenedorImgTexto, tarjeta.querySelector('button'));
                }
            }
        });
    }
}

// Llamar a la función cuando la página se cargue
window.addEventListener('load', agregarContenedorParaImagenYTexto);

// Llamar a la función cuando la ventana cambie de tamaño
window.addEventListener('resize', agregarContenedorParaImagenYTexto);
