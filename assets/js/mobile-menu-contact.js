/* ========================================
   Add Contact Info to Mobile Menu
   ======================================== */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Function to add contact info to mobile menu
    function addContactToMobileMenu() {
        var mobileNav = document.querySelector('.slicknav_nav');
        
        if (mobileNav && window.innerWidth <= 991) {
            // Check if contact info already exists
            if (!document.querySelector('.mobile-contact-info')) {
                
                // Create contact info section
                var contactInfo = document.createElement('div');
                contactInfo.className = 'mobile-contact-info';
                contactInfo.innerHTML = `
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <a href="tel:+919384820759">+91 93848 20759</a>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <a href="tel:+919384820760">+91 93848 20760</a>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:vijaysreebuilders.com">vijaysribuilders.com</a>
                    </div>
                `;
         
                // Create social media section
                var socialInfo = document.createElement('div');
                socialInfo.className = 'mobile-social';
                socialInfo.innerHTML = `
                    <span class="social-title">Follow Us</span>
                    <a href="https://www.instagram.com/vijayasree_builders?igsh=eGx6cWx1YWg1ZjBz&utm_source=qr" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/share/1Bx9TS4qri/?mibextid=wwXIfr" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                `;
                
                // Insert at the beginning of mobile nav
                mobileNav.insertBefore(contactInfo, mobileNav.firstChild);
                
                // Insert social at the end
                mobileNav.appendChild(socialInfo);
            }
        }
    }
    
    // Run on page load
    addContactToMobileMenu();
    
    // Re-run when window is resized
    var resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            addContactToMobileMenu();
        }, 250);
    });
    
    // Also run when slicknav menu is initialized
    // (in case the script runs before slicknav initializes)
    setTimeout(addContactToMobileMenu, 500);
    setTimeout(addContactToMobileMenu, 1000);
});
