document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("booking-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let service = document.getElementById("service").value;
        let message = document.getElementById("message").value;
        
        if(name && email && service && message) {
            alert("Thank you, " + name + "! Your booking request has been submitted.");
            document.getElementById("booking-form").reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});
