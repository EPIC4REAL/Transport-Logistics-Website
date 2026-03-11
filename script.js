// Driver Logistics Website JavaScript

// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Auto advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('navLinks');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    
    if (navLinks && navLinks.classList.contains('active')) {
        if (!nav.contains(event.target) && !toggleButton.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    }
});

// Add scroll event for header shadow
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Trigger initial animation check
    observer.disconnect();
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});



    const labels = document.querySelectorAll('.form-control-wave label');

    labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => 
        `<span style="transition-delay:${idx * 40}ms">${letter}</span>`
        )
        .join('');
    });



   /* image rotating */
 
const imageContainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0;

prevBtn.addEventListener("click", () => {
  x = x + 45;
  rotate();
});

nextBtn.addEventListener("click", () => {
  x = x - 45;
  rotate();
});

function rotate() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}
