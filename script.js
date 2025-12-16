document.addEventListener('DOMContentLoaded', () => {
    
    // Select all filter buttons
    const filterButtons = document.querySelectorAll('.filter-tabs button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Optional: Here you would filter the .product-card items
            console.log(`Filter changed to: ${button.innerText}`);
        });
    });

    // Simple sticky header effect (optional)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.position = 'sticky';
            header.style.top = '0';
            header.style.zIndex = '1000';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            header.style.position = 'relative';
            header.style.boxShadow = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements with the 'reveal-on-scroll' class
    const observerOptions = {
        root: null, // use the viewport
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class to start animation
                entry.target.classList.add('active');
                // Optional: Stop observing once animated (saves performance)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

});
document.addEventListener("DOMContentLoaded", function() {
    
    // Select the hero section
    const heroSection = document.querySelector('.hero-split');

    // Add a small delay to ensure the browser is ready, then add the class
    setTimeout(() => {
        if (heroSection) {
            heroSection.classList.add('animate');
        }
    }, 100); // 100 milliseconds delay

});
document.addEventListener('DOMContentLoaded', () => {

    // Options: Trigger animation when 15% of the section is visible
    const observerOptions = {
        root: null,
        threshold: 0.15 
    };

    // The Observer Function
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that CSS is waiting for
                entry.target.classList.add('visible');
                
                // Stop observing (so it doesn't animate again when scrolling up)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all sections with the class 'reveal-on-scroll'
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    // Start watching them
    revealElements.forEach(el => observer.observe(el));

});