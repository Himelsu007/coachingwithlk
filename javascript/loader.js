
    document.addEventListener('DOMContentLoaded', function () {
        // Check if the loader should be shown
        var showLoader = localStorage.getItem('showLoader');

        if (showLoader === 'true') {
            showFullScreenLoader();
            localStorage.removeItem('showLoader'); // Reset the value
        }

        // Function to show the full-screen loader with a 2-second delay
        function showFullScreenLoader() {
            var loaderOverlay = document.querySelector('.loader_overlay');

            // Display the overlay with fade-in effect
            loaderOverlay.style.display = 'flex';
            loaderOverlay.style.opacity = '1';

            // Hide the loader after 2 seconds with fade-out effect
            setTimeout(function () {
                loaderOverlay.style.opacity = '0';
                // Use a callback to set display to none after the fade-out effect completes
                setTimeout(function () {
                    loaderOverlay.style.display = 'none';
                }, 500); // Adjust the time to match the transition duration
            }, 2000);
        }

        // Add an event listener to all links and buttons on the page
        document.querySelectorAll('a, button').forEach(element => {
            element.addEventListener('click', function () {
                // Set the flag to show the loader on the next page
                localStorage.setItem('showLoader', 'true');
            });
        });
    });

