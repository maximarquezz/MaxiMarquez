document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.habilidades__img');
    var index = 0;

    function toggleImages() {
        images[index].style.opacity = '0';
        images[index].style.visibility = 'hidden';
        images[index].style.transition = '0.4s';

        index = (index + 1) % images.length;

        images[index].style.opacity = '1';
        images[index].style.visibility = 'visible';
        images[index].style.transition = '0.4s';

        setTimeout(toggleImages, 4000);
    }

    toggleImages();
});

document.addEventListener('DOMContentLoaded', function() {
  const burgerCheckbox = document.getElementById("burger");
  const navUl = document.querySelector(".nav__ul");

  if (burgerCheckbox && navUl) {
    burgerCheckbox.addEventListener("change", function() {
      navUl.classList.toggle("visible", burgerCheckbox.checked);
    });

    // Agregar evento de clic a los elementos li
    const navLiElements = document.querySelectorAll('.nav__li');
    navLiElements.forEach(function(li) {
      li.addEventListener('click', function() {
        // Cerrar el panel de navegación al hacer clic en un elemento li
        navUl.classList.remove("visible");
        burgerCheckbox.checked = false;
      });
    });
  } else {
    console.error('No se encontró el elemento con el id "burger" o "nav__ul".');
  }
});