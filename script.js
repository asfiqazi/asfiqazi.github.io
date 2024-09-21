function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Dynamic year for copyright
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
