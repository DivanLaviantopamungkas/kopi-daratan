// ===== script.js =====
// Daratan Kopi 25 – Animasi Super Halus & Kaya Fitur
// Vanilla JS – Full animasi, counter, slider, particles, scroll, dll.

"use strict";

// ========== 1. PRELOADER ==========
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 800);
  }
});

// ========== 2. NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ========== 3. MOBILE MENU TOGGLE ==========
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    navMenu.classList.toggle("active");
    const icon = this.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      document.body.style.overflow = "hidden";
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      document.body.style.overflow = "";
    }
  });

  // Close menu when link clicked
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      const icon = hamburger.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        document.body.style.overflow = "";
      }
    });
  });
}

// ========== 4. SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ========== 5. INTERSECTION OBSERVER (REVEAL ANIMATIONS) ==========
const revealElements = document.querySelectorAll(
  ".reveal, .slide-right, .slide-left, .fade-up, .zoom-in",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        // Trigger counter when stats appear
        if (
          entry.target.classList.contains("stats-container") ||
          entry.target.closest(".stats-container")
        ) {
          startCounters();
        }
      }
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
);

revealElements.forEach((el) => observer.observe(el));

// ========== 6. COUNTER ANIMATION ==========
function startCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute("data-target"));
      const current = parseInt(counter.innerText);
      const increment = Math.ceil(target / 50);

      if (current < target) {
        counter.innerText = Math.min(current + increment, target);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    // Only start if not already started
    if (!counter.classList.contains("counted")) {
      counter.classList.add("counted");
      updateCount();
    }
  });
}

// ========== 7. TESTIMONIAL SLIDER ==========
const testimonialTrack = document.getElementById("testimonialTrack");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");
const dotsContainer = document.getElementById("testimonialDots");

if (testimonialTrack && prevBtn && nextBtn && dotsContainer) {
  const testimonials = testimonialTrack.children;
  const testimonialCount = testimonials.length;
  let currentIndex = 0;

  // Create dots
  for (let i = 0; i < testimonialCount; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.index = i;
    dot.addEventListener("click", function () {
      currentIndex = parseInt(this.dataset.index);
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");

  function updateSlider() {
    testimonialTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
    updateSlider();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % testimonialCount;
    updateSlider();
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonialCount;
    updateSlider();
  }, 5000);

  // Initialize
  updateSlider();
}

// ========== 8. BACK TO TOP BUTTON ==========
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========== 9. SET YEAR IN FOOTER ==========
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ========== 10. PARTICLES EFFECT (HERO) ==========
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  if (!particlesContainer) return;

  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = Math.random() * 6 + 2 + "px";
    particle.style.height = particle.style.width;
    particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
    particle.style.borderRadius = "50%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.pointerEvents = "none";
    particle.style.animation = `floatParticle ${Math.random() * 10 + 10}s linear infinite`;
    particle.style.animationDelay = Math.random() * 5 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Add keyframe animation for particles
const style = document.createElement("style");
style.textContent = `
  @keyframes floatParticle {
    0% { transform: translateY(0) translateX(0); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
  }
`;
document.head.appendChild(style);

createParticles();

// ========== 11. RESIZE HANDLER (CLOSE MOBILE MENU) ==========
window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && navMenu) {
    navMenu.classList.remove("active");
    const icon = hamburger?.querySelector("i");
    if (icon) {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      document.body.style.overflow = "";
    }
  }
});

// ========== 12. INIT COUNTERS IF VISIBLE ON LOAD ==========
setTimeout(() => {
  const statsSection = document.querySelector(".stats-container");
  if (statsSection && isElementInViewport(statsSection)) {
    startCounters();
  }
}, 1000);

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ========== 13. LOG CONSOLE ==========
console.log("☕ Daratan Kopi 25 - Animasi premium, menu asli Dengkek, Pati");
