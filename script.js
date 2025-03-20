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

    // Ensure images are displayed correctly
    document.querySelectorAll('.portfolio-item img, .pricing-item img').forEach(img => {
        img.style.objectFit = 'cover';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    });
});
