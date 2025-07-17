// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = form.querySelector("input[name='nombre']").value.trim();
      const correo = form.querySelector("input[name='correo']").value.trim();
      const carrera = form.querySelector("input[name='carrera']").value.trim();
      const comentario = form.querySelector("textarea[name='comentario']").value.trim();

      if (!nombre || !correo || !carrera) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
      }

      // Aquí podrías enviar el formulario con fetch() si usas un backend o Google Forms
      alert("¡Gracias por registrarte! Pronto recibirás más información por correo.");
      form.reset();
    });
  }

  // Scroll suave para enlaces internos si decides poner un menú de navegación
  document.querySelectorAll("a[href^='#']").forEach((ancla) => {
    ancla.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
