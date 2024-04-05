document.getElementById('download_form_button').addEventListener('click', function() {
    var form = document.getElementById('download_form');
    var inputs = form.querySelectorAll('input'); // Select all input elements in the form
    var isValid = true; // Flag to track form validity

    // Check each input for validity and apply red border if invalid
    inputs.forEach(function(input) {
        if (!input.checkValidity()) {
            input.style.border = '1px solid red';
            isValid = false; // Set flag to false if any input is invalid
        } else {
            input.style.border = ''; // Reset border if input is valid
        }
    });

    // Check if the form is valid
    if (isValid) {
        var formData = new FormData(form);
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', form.action, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Handle successful form submission
                console.log('Form submitted successfully');
                setTimeout(function() {
                    window.location.href = 'thanks.html'; // Redirect to thanks.html after 1 second
                }, 1000); // 1000 milliseconds = 1 second
            } else {
                // Handle form submission error
                console.error('Form submission failed');
            }
        };
        xhr.send(formData);
    } else {
        // Form is not valid, do something (e.g., display error message)
        console.log('Form is not valid');
    }
});
