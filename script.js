document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Animate Buttons on Hover
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.classList.add("pulse");
        });

        button.addEventListener("mouseleave", () => {
            button.classList.remove("pulse");
        });
    });

    // Lazy Loading for Images
    document.querySelectorAll("img").forEach(img => {
        img.loading = "lazy";
    });
});
