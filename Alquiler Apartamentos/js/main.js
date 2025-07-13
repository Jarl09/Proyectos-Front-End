// Animación al hacer scroll (fade-in)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('mostrar');
    } else {
      entry.target.classList.remove('mostrar'); // permite animación al bajar y subir
    }
  });
});

// Seleccionamos las secciones animables
document.querySelectorAll('.animado').forEach(el => observer.observe(el));
