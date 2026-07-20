document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lenis (Smooth Scrolling)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Initialize AOS (Animate on Scroll - Simple reveals)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
    });

    // 3. GSAP Advanced Animations (Wait for load to ensure fonts/images are ready)
    window.addEventListener("load", () => {
        gsap.registerPlugin(ScrollTrigger);

        // Vanilla Tilt initialization for Cards
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
        });

        // Counter Animations
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.parentElement.getAttribute('data-target');
            
            ScrollTrigger.create({
                trigger: counter,
                start: "top 80%",
                once: true,
                onEnter: () => {
                    gsap.to(counter, {
                        innerHTML: target,
                        duration: 2,
                        snap: { innerHTML: 1 },
                        ease: "power2.out"
                    });
                }
            });
        });
    });
});
