document.addEventListener('DOMContentLoaded', function () {
    // Check if the loader should be shown
    var showLoader = localStorage.getItem('showLoader');

    if (showLoader === 'true') {
        showFullScreenLoader();
        localStorage.removeItem('showLoader'); // Reset the value
    }

    // Function to show the full-screen loader with a dynamic delay
    function showFullScreenLoader() {
        var loaderOverlay = document.querySelector('.loader_overlay');
        var connectionSpeed = navigator.connection ? navigator.connection.effectiveType : '4g'; // Default to 4g if information is not available

        // Define delay based on connection speed
        var delayInSeconds = getDelayBasedOnSpeed(connectionSpeed);

        // Display the overlay with fade-in effect
        loaderOverlay.style.display = 'flex';
        loaderOverlay.style.opacity = '1';

        // Hide the loader after the dynamic delay with fade-out effect
        setTimeout(function () {
            loaderOverlay.style.opacity = '0';
            // Use a callback to set display to none after the fade-out effect completes
            setTimeout(function () {
                loaderOverlay.style.display = 'none';
            }, 500); // Adjust the time to match the transition duration
        }, delayInSeconds * 1000); // Convert delay to milliseconds
    }

    // Add an event listener to all links and buttons on the page
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function () {
            // Set the flag to show the loader on the next page
            localStorage.setItem('showLoader', 'true');
        });
    });

    // Function to get delay based on connection speed
    function getDelayBasedOnSpeed(speed) {
        switch (speed) {
            case 'slow-2g':
                return 4; // 10 seconds delay for slow-2g
            case '2g':
                return 8; // 8 seconds delay for 2g
            case '3g':
                return 2; // 5 seconds delay for 3g
            case '4g':
                return 1; // 2 seconds delay for 4g
            default:
                return 1; // Default to 2 seconds if effectiveType is not available or not recognized
        }
    }
});
