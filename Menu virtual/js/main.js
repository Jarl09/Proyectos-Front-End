document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".menu-category");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => observer.observe(section));
});
