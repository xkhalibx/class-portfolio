const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.textContent = isDark ? "Switch to light mode" : "Switch to dark mode";
}

setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
});

if (window.ScrollReveal && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.ScrollReveal().reveal("main > section, footer", {
    distance: "16px",
    duration: 650,
    interval: 100,
    origin: "bottom",
    reset: false
  });
}