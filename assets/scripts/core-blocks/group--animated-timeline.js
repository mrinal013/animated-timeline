document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".animated__item");

  const observerOptions = {
    rool: null,
    rootMargin: "0px",
    threshold: 0.33,
  };

  function observerCallback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loaded");
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  els.forEach((el) => observer.observe(el));
});
