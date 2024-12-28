document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Aquí puedes agregar la lógica para validar con un backend, por ahora solo mostramos un mensaje
    alert("Iniciando sesión...");

    // Limpiar los campos después de enviar el formulario
    document.getElementById("loginForm").reset();
});