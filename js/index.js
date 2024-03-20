
/* Función para activar el menú responsive */

function toggleMenu() {
  var menuToggle = document.querySelector('.menuToggle');
  var navbar = document.querySelector('nav');
  menuToggle.classList.toggle('active');
  navbar.classList.toggle('active');
}

/* Función para activar el dropdown en el menú responsive */

function dropdown() {
  var dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('active');
}