document.addEventListener('DOMContentLoaded', function () {
    // DOMContentLoaded event ensures that the script runs after the HTML has been fully loaded

    // Example: Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Example: Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add form validation and submission logic here
        // For now, let's just log the form data to the console
        const formData = new FormData(contactForm);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // You might want to send the form data to a server or trigger other actions
    });

    // Add more functionality as needed
});
