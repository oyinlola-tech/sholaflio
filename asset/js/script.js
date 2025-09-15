// Animate skill bars when in view
document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector(".skills");
  const progressBars = document.querySelectorAll(".progress-fill");

  const options = { threshold: 0.4 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const target = bar.getAttribute("data-progress");
          bar.style.width = target + "%";
        });
        observer.unobserve(skillSection);
      }
    });
  }, options);

  observer.observe(skillSection);
});