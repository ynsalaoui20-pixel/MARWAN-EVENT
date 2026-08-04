/*====================================
Eco Livreur Website
Developed by YOUNES ALAOUI ISMAILI
====================================*/


/*==========================
LOADER
==========================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});


/*==========================
AOS
==========================*/

AOS.init({

    duration: 1200,

    once: false,

    easing: "ease-in-out",

});


/*==========================
HEADER
==========================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});


/*==========================
CUSTOM CURSOR
==========================*/

const cursor = document.querySelector(".cursor");

const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX + "px";

    cursor2.style.top = e.clientY + "px";

});


/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*==========================
GSAP HERO
==========================*/

gsap.from(".hero-logo", {

    y: -80,

    opacity: 0,

    duration: 1

});

gsap.from(".hero-left h1", {

    x: -120,

    opacity: 0,

    duration: 1.2,

    delay: .4

});

gsap.from(".hero-left p", {

    x: -120,

    opacity: 0,

    duration: 1.2,

    delay: .7

});

gsap.from(".hero-buttons", {

    y: 80,

    opacity: 0,

    duration: 1,

    delay: 1

});

gsap.from(".hero-right img", {

    scale: .6,

    opacity: 0,

    duration: 1.3,

    delay: .8

});
/*====================================
COUNTER ANIMATION
====================================*/

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 120;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

const stats = document.querySelector(".statistics");

let started = false;

window.addEventListener("scroll", () => {

    if (!stats) return;

    const top = stats.offsetTop - 400;

    if (window.scrollY > top && !started) {

        startCounter();

        started = true;

    }

});


/*====================================
SWIPER PARTNERS
====================================*/

new Swiper(".partners-slider", {

    loop: true,

    spaceBetween: 30,

    grabCursor: true,

    autoplay: {

        delay: 2000,

        disableOnInteraction: false,

    },

    breakpoints: {

        0: {

            slidesPerView: 2,

        },

        768: {

            slidesPerView: 4,

        },

        1200: {

            slidesPerView: 6,

        }

    }

});


/*====================================
TESTIMONIAL SWIPER
====================================*/

new Swiper(".testimonialSwiper", {

    loop: true,

    spaceBetween: 30,

    grabCursor: true,

    autoplay: {

        delay: 3500,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    breakpoints: {

        0: {

            slidesPerView: 1,

        },

        992: {

            slidesPerView: 2,

        }

    }

});


/*====================================
MOBILE MENU
====================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/*====================================
BACK TO TOP
====================================*/

const topBtn = document.getElementById("top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/*====================================
TYPING EFFECT
====================================*/

const heroText = document.querySelector(".hero-left p");

const originalText = heroText ? heroText.textContent : "";

if (heroText) {

    heroText.textContent = "";

    let i = 0;

    function typeWriter() {

        if (i < originalText.length) {

            heroText.textContent += originalText.charAt(i);

            i++;

            setTimeout(typeWriter, 35);

        }

    }

    window.addEventListener("load", () => {

        setTimeout(typeWriter, 1200);

    });

}

/*====================================
PARALLAX
====================================*/

const heroImage = document.querySelector(".hero-right img");

document.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 45;

    const y = (window.innerHeight / 2 - e.clientY) / 45;

    heroImage.style.transform = 'translate(${x}px, ${y}px)';

});

/*====================================
BUTTON RIPPLE EFFECT
====================================*/

document.querySelectorAll(".btn, .btn2").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = (e.offsetX - diameter / 2) + "px";

        circle.style.top = (e.offsetY - diameter / 2) + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

/*====================================
ACTIVE LINK
====================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 180;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*====================================
IMAGE HOVER
====================================*/

document.querySelectorAll(".gallery-item img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = ".5s";

        img.style.transform = "scale(1.12) rotate(2deg)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1) rotate(0deg)";

    });

});

/*====================================
CONSOLE MESSAGE
====================================*/

console.log("%cEco Livreur",
"color:red;font-size:28px;font-weight:bold;");

console.log("%cDeveloped by YOUNES ALAOUI ISMAILI",
"color:white;font-size:15px;");