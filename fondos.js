const miCarrusel = document.getElementById('carouselExampleContent');

miCarrusel.addEventListener('slide.bs.carousel', function (event) {
  const proximoIndice = event.to; 
  let colorFondoWeb = '';

  if (proximoIndice === 0) {
    colorFondoWeb = '#e6f0fa';
  } else if (proximoIndice === 1) {
    colorFondoWeb = '#e6f7ed';
  } else if (proximoIndice === 2) {
    colorFondoWeb = '#fdf6e2';
  }

  document.body.style.backgroundColor = colorFondoWeb;
});
