// MOBILE NAV TOGGLE
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Close nav when clicking a link (on mobile)
navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

// SMOOTH SCROLL (extra smoothness on older browsers)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.length > 1) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// TYPED TEXT EFFECT
const typedTextElement = document.getElementById("typed-text");
const roles = [
    "Web Developer",
    "AI/ML Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, 1200); // pause on full word
            return;
        }
    } else {
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    const typingSpeed = isDeleting ? 70 : 110;
    setTimeout(type, typingSpeed);
}

if (typedTextElement) {
    type();
}

// REVEAL ON SCROLL
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((el) => observer.observe(el));
