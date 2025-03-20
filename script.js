document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image resizing to ensure proper layout
    document.querySelectorAll('.portfolio-item img, .pricing-item img').forEach(img => {
        img.style.objectFit = 'cover';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    });

    // Glow effect on hover for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.boxShadow = '0px 0px 20px #ff69b4';
        });
        button.addEventListener('mouseout', function() {
            this.style.boxShadow = '0px 0px 15px #ff69b4';
        });
    });

    // Booking form validation
    document.getElementById("booking-form")?.addEventListener("submit", function(event) {
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
