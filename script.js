// JavaScript for the mobile hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// JavaScript for basic form validation on the contact page
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const emailField = document.getElementById('email');

            // Prevent form submission if email is empty
            if (emailField.value.trim() === '') {
                event.preventDefault(); // Stop the form from submitting
                alert('Please enter your email address.');
            }
        });
    }
});