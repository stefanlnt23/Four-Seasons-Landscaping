// Four Seasons Landscaping - JavaScript Functionality

// Show Preview Modal on Page Load
window.addEventListener('load', function() {
    setTimeout(function() {
        showPreviewModal();
    }, 500); // Small delay for better UX
});

// Modal Functions
function showPreviewModal() {
    const modal = document.getElementById('previewModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closePreviewModal() {
    const modal = document.getElementById('previewModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

function showActionModal(actionText) {
    const modal = document.getElementById('actionModal');
    const description = document.getElementById('actionDescription');
    description.textContent = actionText;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeActionModal() {
    const modal = document.getElementById('actionModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modals when clicking overlay
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closePreviewModal();
        closeActionModal();
    }
});

// Smooth Scrolling for Navigation Links
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

// Button Click Handlers - Intercept all CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    // Get Quote buttons
    const quoteButtons = document.querySelectorAll('a[href="#quote"]:not(.no-intercept)');
    quoteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showActionModal('Open a quote request form and send your project details directly to Four Seasons Landscaping. You would receive a personalized response within 24 hours.');
        });
    });

    // Service buttons
    const serviceButtons = document.querySelectorAll('.btn-service');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showActionModal('Take you to a detailed quote form pre-filled with the selected service, making it easy to request specific information about this service.');
        });
    });

    // Gallery CTA button
    const galleryCTA = document.querySelector('.btn-gallery');
    if (galleryCTA) {
        galleryCTA.addEventListener('click', function(e) {
            e.preventDefault();
            showActionModal('Navigate to the quote form to start your landscaping project. In the live version, this would capture leads and send notifications to Four Seasons.');
        });
    }
});

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quoteForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };

            // Show modal instead of alert
            showActionModal('Send your quote request via email to Four Seasons Landscaping, automatically log it in their CRM system, and trigger an automated confirmation email to you. The team would respond within 24 hours with a detailed quote.');

            // Reset form
            this.reset();

            console.log('Form submitted:', formData);
        });
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    }

    lastScroll = currentScroll;
});

// Animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const googleReviewCards = document.querySelectorAll('.google-review-card');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const beforeAfterItems = document.querySelectorAll('.before-after-item');

    // Set initial state
    [...serviceCards, ...googleReviewCards, ...galleryItems, ...beforeAfterItems].forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// Video placeholder click handler
document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholder = document.querySelector('.video-placeholder');

    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            showActionModal('Play a professional showcase video featuring: time-lapse of recent projects, customer video testimonials, behind-the-scenes footage of the Four Seasons team at work, and demonstration of their spotless clean-up process. Videos are embedded from YouTube or Vimeo for fast loading.');
        });
    }
});

// Gallery item click handler
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            const location = this.querySelector('p').textContent;

            // In a live version, this would open a lightbox with more images
            console.log(`Gallery item clicked: ${title} - ${location}`);
        });
    });
});

// Add current year to footer if needed
document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = `© ${currentYear} Four Seasons Landscaping. All rights reserved.`;
    }
});

console.log('Four Seasons Landscaping website loaded successfully!');
console.log('Demo website created by web-force.info');