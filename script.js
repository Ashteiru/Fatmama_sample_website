// Smooth scrolling for navigation links
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

// Active nav link highlighting
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;

    document.querySelectorAll('.nav-link').forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (section) {
            if (section.offsetTop <= scrollPos + 100 && section.offsetTop + section.offsetHeight > scrollPos + 100) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// Add to cart functionality (placeholder)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        alert(`${productName} has been added to cart!`);
    });
});

// CTA buttons
document.querySelectorAll('.cta-button, .cta-button-large').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to ordering page...');
    });
});

// Floating Chatbot Button
const floatingChatbot = document.getElementById('floating-chatbot');
if (floatingChatbot) {
    floatingChatbot.addEventListener('click', () => {
        alert('🤖 AI Chatbot is starting... Connect with us for instant support!');
        // This will be connected to actual chatbot service in future
    });

    // Hide/Show floating button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            floatingChatbot.style.opacity = '1';
            floatingChatbot.style.pointerEvents = 'auto';
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Mama & Co. Website Loaded');
});
