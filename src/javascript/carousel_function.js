document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');

  function updateCarousel() {
    const firstItem = carousel.children[0];
    firstItem.classList.remove('active');
    carousel.appendChild(firstItem.cloneNode(true));
    carousel.removeChild(firstItem);
    carousel.children[2].classList.add('active');
  }
});
