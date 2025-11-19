// Main JavaScript for Cabinet Avocats Huissiers

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and interactive elements
    initAnimations();
    initStatisticsCounter();
});

function initAnimations() {
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

function initStatisticsCounter() {
    // Simple counter animation for statistics
    const counters = document.querySelectorAll('.text-4xl.font-bold');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('count-animation');
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Mobile menu toggle functionality (for use in navbar component)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}