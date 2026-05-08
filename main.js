// ===== Shared JS for all pages =====

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 40);
    });
}

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

if (mobileToggle && mobileMenu) {
    const bars = mobileToggle.querySelectorAll('.bar');
    mobileToggle.addEventListener('click', () => {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle('open', menuOpen);
        mobileToggle.setAttribute('aria-expanded', menuOpen);
        if (menuOpen) {
            bars[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
        } else {
            bars[0].style.transform = '';
            bars[1].style.opacity = '1';
            bars[2].style.transform = '';
        }
    });
}

// Intersection Observer for fade-in-up
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
