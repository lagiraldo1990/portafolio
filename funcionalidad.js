// Seleccionar todos los enlaces del menú de navegación
const enlaces = document.querySelectorAll('nav a');

// Agregar un evento de clic a cada enlace
enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const seccion = document.querySelector(enlace.hash); // Seleccionar la sección correspondiente
    seccion.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave a la sección
  });
});
