document.addEventListener("DOMContentLoaded", () => {
    // 1. Loader Logic
    const loader = document.getElementById("loader");
    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 500); // Small delay to let animations initialize smoothly
        });
    }

    // 2. Sticky Header Logic
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            // Switch logo to dark if we had a transparent header (Assuming logo-dark for white bg)
            // But if logo-light looks good on white, leave it. We will assume we need a switch.
            const logoImg = header.querySelector(".logo-img");
            if(logoImg && logoImg.src.includes('logo-light.svg')){
                logoImg.src = "assets/icons/logo-dark.svg";
            }
        } else {
            header.classList.remove("scrolled");
            const logoImg = header.querySelector(".logo-img");
            if(logoImg && logoImg.src.includes('logo-dark.svg')){
                logoImg.src = "assets/icons/logo-light.svg";
            }
        }
    });

    // 3. Mobile Menu Toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
                icon.style.color = 'var(--clr-navy)'; // Ensure visible close button
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
                if(!header.classList.contains("scrolled")){
                    icon.style.color = 'var(--clr-white)';
                }
            }
        });

        // Close menu on link click
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            });
        });
    }

    // 4. Back to Top Button
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 5. Active Section Highlighting
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute("id");
            const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if(navLink) navLink.classList.add("active");
            } else {
                if(navLink) navLink.classList.remove("active");
            }
        });
    });

    // 6. Initialize Swiper for Testimonials (Will be populated later)
    if (document.querySelector('.testimonial-swiper')) {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    }

    // 7. FAQ Accordion
    const accordions = document.querySelectorAll(".accordion-header");
    accordions.forEach(acc => {
        acc.addEventListener("click", () => {
            const item = acc.parentElement;
            
            // Close others
            document.querySelectorAll(".accordion-item").forEach(other => {
                if(other !== item) {
                    other.classList.remove("active");
                }
            });
            
            // Toggle current
            item.classList.toggle("active");
        });
    });
});
