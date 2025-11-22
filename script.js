const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelectorAll(".menu-links a");
const sections = document.querySelectorAll("section, footer");

// Hamburger toggle
icon.addEventListener("click", () => {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
});

// Menu links click
menuLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Hide all sections first
      sections.forEach(sec => sec.style.display = "none");

      // Always show profile + clicked section
      document.getElementById("profile").style.display = "block";
      targetSection.style.display = "block";

      // Scroll smoothly
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Close menu
      menu.classList.remove("open");
      icon.classList.remove("open");
    }
  });
});

// On resize: reset display for fullscreen
window.addEventListener("resize", () => {
  if (window.innerWidth > 1200) {
    sections.forEach(sec => sec.style.display = "block");
  } else {
    sections.forEach(sec => {
      if (sec.id !== "profile") sec.style.display = "none";
    });
    document.getElementById("profile").style.display = "block";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200); // stagger effect
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  skillCards.forEach((card) => {
    observer.observe(card);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");
  const eduCards = document.querySelectorAll(".edu-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200); // stagger animation
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe skills
  skillCards.forEach((card) => observer.observe(card));

  // Observe education
  eduCards.forEach((card) => observer.observe(card));
});

