<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    
    // Compose email message
    $to = $email;
    $subject = "Your Free Workbook";
    $message = "Dear $name,\n\nThank you for downloading the free workbook. Here is the download link: [Link to the workbook]\n\nBest regards,\n[Your Name]";
    $headers = "From: himelsu@icloud.com"; // Replace with your email address
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
}
?>