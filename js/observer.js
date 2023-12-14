document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    threshold: 0,
  };

  const elements = document.querySelectorAll(".scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.dataset.animationClass;
        if (animationClass) {
          entry.target.classList.add(animationClass);
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach((element) => {
    observer.observe(element);
  });
});
