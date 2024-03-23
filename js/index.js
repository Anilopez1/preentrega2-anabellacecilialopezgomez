
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

/* Animaciones con ScrollMagic */
const controller = new ScrollMagic.Controller();

/* Inicio */
const inicioAnimation = new TimelineMax()
.from('.inicio__exposiciones', 1, { opacity: 0, y: 50 })
.from('.inicio__imagenes', 1, { opacity: 0, y: 50 }, '-=0.5');

new ScrollMagic.Scene({
  triggerElement: '.inicio',
  triggerHook: 0.8,
  reverse: false
})

.setTween(inicioAnimation)
.addTo(controller);
