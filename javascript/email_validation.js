document.getElementById("download_form").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name) || !emailRegex.test(email)) {
        document.getElementById("section_01_container_F").style.backgroundColor = "red";
        event.preventDefault();
    }
});