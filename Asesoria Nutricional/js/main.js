// Archivo: js/main.js

// Detectar elementos con la clase 'animado' al hacer scroll
const elementosAnimados = document.querySelectorAll('.animado');

const mostrarAlScroll = () => {
  const trigger = window.innerHeight * 0.85;

  elementosAnimados.forEach(el => {
    const topElemento = el.getBoundingClientRect().top;

    if (topElemento < trigger) {
      el.classList.add('mostrar');
    }
  });
};

window.addEventListener('scroll', mostrarAlScroll);
window.addEventListener('load', mostrarAlScroll);
