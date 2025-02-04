document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var room = document.getElementById("select1").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;

    // Construct WhatsApp message
    var message = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Date & Time: " + date + "\n" +
        "Room: " + room + "\n" +
        "Number of Adults: " + adults + "\n" +
        "Number of Children: " + children
    );

    // WhatsApp link (replace with your number)
    var whatsappLink = "https://wa.me/+918392056130?text=" + message;

    // Open WhatsApp with pre-filled message
    window.open(whatsappLink, "_blank");
    // console.log(message)
});