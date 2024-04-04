document.getElementById('download_form_button').addEventListener('click', function() {
    var form = document.getElementById('download_form');
    var formData = new FormData(form);
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Form submitted successfully');
            setTimeout(function() {
                window.location.href = 'thanks.html'; // Redirect to thanks.html after 1 second
            }, 1000); // 1000 milliseconds = 1 second
        } else {
            console.error('Form submission failed');
        }
    };
    xhr.send(formData);
});
