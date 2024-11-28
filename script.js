// JavaScript for Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Example of Dynamic Content Update
document.addEventListener('DOMContentLoaded', () => {
    console.log('The Voting Rights Education Website is fully loaded!');
});

// Simple Validation for Contact Form (if applicable in your contact.html)
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Please fill out all fields before submitting!");
        return false;
    } else {
        alert("Form submitted successfully!");
        return true;
    }
}
