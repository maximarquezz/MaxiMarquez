document.addEventListener('DOMContentLoaded', function () {
    const burgerCheckbox = document.getElementById("burger");
    const navUl = document.querySelector(".nav__ul");

    if (burgerCheckbox && navUl) {
        burgerCheckbox.addEventListener("change", function () {
            navUl.classList.toggle("visible", burgerCheckbox.checked);
        });
        const navLiElements = document.querySelectorAll('.nav__li');
        navLiElements.forEach(function (li) {
            li.addEventListener('click', function () {
                navUl.classList.remove("visible");
                burgerCheckbox.checked = false;
            });
        });
    } else {
        console.error('No se encontró el elemento con el id "burger" o "nav__ul".');
    }

    const tabs = document.querySelectorAll(".proyectos__tab");
    const contents = document.querySelectorAll(".proyectos__content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            const targetTab = this.getAttribute("data-tab");

            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((c) => c.classList.remove("active"));

            this.classList.add("active");

            const targetContent = document.querySelector(
                `[data-content="${targetTab}"]`
            );
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });

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

