// Fade-in on scroll
const elements = document.querySelectorAll(".fade");

function checkFade() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);