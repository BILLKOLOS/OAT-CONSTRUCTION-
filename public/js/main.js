
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send this data to your server
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
        };
        
        console.log('Form submission:', formData);
        
        // Show success message
        alert('Message sent successfully! (This is a demo)');
        contactForm.reset();
      });
    }
  });