const filtros = document.querySelectorAll('.filtro');
const productos = document.querySelectorAll('.producto');

filtros.forEach(filtro => {
  filtro.addEventListener('click', () => {
    filtros.forEach(f => f.classList.remove('activo'));
    filtro.classList.add('activo');

    const categoria = filtro.getAttribute('data-categoria');

    productos.forEach(producto => {
      if (categoria === 'todos' || producto.getAttribute('data-categoria') === categoria) {
        producto.style.display = 'block';
        producto.style.animation = 'fadeUp .5s ease forwards';
      } else {
        producto.style.display = 'none';
      }
    });
  });
});
