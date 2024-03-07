document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.articles_container');
    containers.forEach(container => {
        container.addEventListener('click', function (event) {
            const clickedContainer = event.target.closest('.articles_sub_container_AB');

            if (clickedContainer) {
                const link = clickedContainer.querySelector('a');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });
});
