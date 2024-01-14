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