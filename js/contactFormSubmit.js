document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Construct WhatsApp message
    var whatsappMessage = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Subject: " + subject + "\n" +
        "Message: " + message
    );

    // WhatsApp link (replace with your phone number)
    var whatsappLink = "https://wa.me/+917001369763?text=" + whatsappMessage;

    // Open WhatsApp with pre-filled message
    window.open(whatsappLink, "_blank");
});