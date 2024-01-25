    document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.overlay');

    burgerMenu.addEventListener('click', function () {
    overlay.classList.toggle('overlay--active');
});

    const closeOverlay = document.querySelector('.overlay .close');
    closeOverlay.addEventListener('click', function () {
    overlay.classList.remove('overlay--active');
    });
});

