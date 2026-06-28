// ============================================
// Dark/Light Mode Toggle
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // ============================================
    // Active Navigation Link Highlighting
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '1rem 0';
    }
    
    lastScroll = currentScroll;
});
    // ==========================================
    // 5. SCROLL TO TOP BUTTON
    // ==========================================
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    if (scrollBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
        // ==========================================
    // 6. PORTFOLIO FILTER FUNCTIONALITY
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
  // ==========================================
    // 4. CONTACT FORM VALIDATION
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            let isValid = true;
            
            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
            
            // Name validation - minimum 2 characters
            if (name) {
                if (name.value.trim().length < 2) {
                    showError(name, 'Please enter your full name (minimum 2 characters)');
                    isValid = false;
                } else {
                    clearError(name);
                }
            }
            
            // Email validation - must be valid email format
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    showError(email, 'Please enter a valid email address (e.g., name@domain.com)');
                    isValid = false;
                } else {
                    clearError(email);
                }
            }
            
            // Subject validation - minimum 3 characters
            if (subject) {
                if (subject.value.trim().length < 3) {
                    showError(subject, 'Please enter a subject (minimum 3 characters)');
                    isValid = false;
                } else {
                    clearError(subject);
                }
            }
            
            // Message validation - minimum 10 characters
            if (message) {
                if (message.value.trim().length < 10) {
                    showError(message, 'Please enter at least 10 characters for your message');
                    isValid = false;
                } else {
                    clearError(message);
                }
            }
            
            // If valid, show success message
            if (isValid) {
                // Create success message
                const successDiv = document.createElement('div');
                successDiv.className = 'alert alert-success mt-3';
                successDiv.innerHTML = `
                    <i class="bi bi-check-circle-fill me-2"></i>
                    ✅ Thank you for your message! I will get back to you soon.
                `;
                contactForm.prepend(successDiv);
                contactForm.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successDiv.style.transition = 'opacity 0.5s ease';
                    successDiv.style.opacity = '0';
                    setTimeout(() => {
                        successDiv.remove();
                    }, 500);
                }, 5000);
            }
        });
    }
    
    // Helper function to show error
    function showError(input, message) {
        const formGroup = input.closest('.mb-3');
        if (!formGroup) return;
        
        // Remove existing error for this input
        const existingError = formGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-danger mt-1';
        errorDiv.innerHTML = `<i class="bi bi-exclamation-circle me-1"></i> ${message}`;
        formGroup.appendChild(errorDiv);
        
        input.classList.add('is-invalid');
    }
    
    // Helper function to clear error
    function clearError(input) {
        const formGroup = input.closest('.mb-3');
        if (!formGroup) return;
        
        const error = formGroup.querySelector('.error-message');
        if (error) {
            error.remove();
        }
        input.classList.remove('is-invalid');
    }
    