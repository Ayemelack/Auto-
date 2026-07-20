# Excellence Driving School Website

This is a premium, static, production-ready website developed for **Excellence Driving School** in Molyko, Buea, Cameroon.

## Technology Stack
- **HTML5**: Semantic and accessible structure.
- **CSS3**: Custom design system using variables, Flexbox, and CSS Grid (No Tailwind/Bootstrap).
- **JavaScript (ES6+)**: Custom logic, smooth scrolling, and scroll reveals.
- **Libraries**:
  - [GSAP](https://greensock.com/gsap/): Advanced scroll triggers and number counters.
  - [Lenis](https://studiofreight.github.io/lenis/): Luxurious smooth scrolling.
  - [SwiperJS](https://swiperjs.com/): Touch-enabled sliders for testimonials.
  - [AOS](https://michalsnik.github.io/aos/): Simple scroll reveals.
  - [Vanilla Tilt](https://micku7zu.github.io/vanilla-tilt.js/): 3D hover effects on cards.
  - [FontAwesome](https://fontawesome.com/): Vector icons.

## File Structure
```
/
├── index.html            # Main Single-Page Application HTML
├── sitemap.xml           # SEO Sitemap
├── robots.txt            # SEO Crawler instructions
├── manifest.json         # PWA Manifest
├── README.md             # This documentation
└── assets/
    ├── css/              # Modular CSS files
    ├── js/               # JavaScript logic and animations
    ├── images/           # Image assets (Add your actual photos here)
    └── icons/            # SVG Logos and Favicons
```

## Deployment on Hostinger (Shared Hosting)
Because this project does not rely on Node.js, Webpack, or a backend framework, deploying it to Hostinger is incredibly straightforward:

1. **Log in to Hostinger hPanel.**
2. **Navigate to the File Manager** for your domain (`excellencedrivingschool.cm`).
3. **Open the `public_html` directory.** (Clear out any default Hostinger parking pages like `default.php`).
4. **Upload all files**: Drag and drop the contents of this folder (`index.html`, `assets/`, `sitemap.xml`, etc.) directly into `public_html`.
5. **Verify**: Visit your domain in a web browser. The site should load immediately.

## Customization Guide
- **Colors & Typography**: Edit `assets/css/variables.css` to tweak the primary blue, gold, and font families.
- **Images**: Replace the placeholder gradients in the HTML (especially in the Gallery and Hero sections) with actual `.jpg` or `.webp` files.
- **WhatsApp Number**: Search for `237677850385` in `index.html` and update it if the contact number changes.
- **Contact Form**: Currently, the contact form does not have a backend processor. You can connect the `action="#"` attribute in the form to a service like [Formspree](https://formspree.io/) or write a simple `send_email.php` script to handle submissions on Hostinger.

## SEO & Accessibility
- The site is fully responsive and scores high on Lighthouse for Best Practices, SEO, and Accessibility.
- Schema.org `LocalBusiness` structured data is injected into the `<head>` of `index.html`. Make sure to keep the address and phone number updated.
