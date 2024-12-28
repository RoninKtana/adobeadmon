const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const response = await fetch("http://localhost:8000/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  responseMessage.textContent = result.message;

  // Limpia los campos después de enviar
  if (response.ok) {
    form.reset();
    responseMessage.style.color = "#003E7C";
  } else {
    responseMessage.style.color = "red";
  }
});
