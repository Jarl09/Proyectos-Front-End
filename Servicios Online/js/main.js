document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos todos los carruseles
  const carruseles = document.querySelectorAll('.carrusel-container');

  carruseles.forEach(container => {
    const carrusel = container.querySelector('.carrusel');
    const imgs = carrusel.querySelectorAll('img');
    const prevBtn = container.querySelector('.carrusel-btn.prev');
    const nextBtn = container.querySelector('.carrusel-btn.next');
    let idx = 0;

    function update() {
      const ancho = container.clientWidth;
      carrusel.style.width = `${imgs.length * ancho}px`;
      imgs.forEach(img => img.style.width = `${ancho}px`);
      carrusel.style.transform = `translateX(-${idx * ancho}px)`;
    }

    prevBtn.addEventListener('click', () => {
      idx = (idx - 1 + imgs.length) % imgs.length;
      update();
    });

    nextBtn.addEventListener('click', () => {
      idx = (idx + 1) % imgs.length;
      update();
    });

    window.addEventListener('resize', update);

    update();
  });
});
