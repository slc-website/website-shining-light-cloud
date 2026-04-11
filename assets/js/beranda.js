const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function updateIcon(isDark) {
    themeToggle.textContent = isDark ? "☀️" : "🌙";
}

(function initTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        updateIcon(true);
    } else {
        updateIcon(false);
    }
})();

themeToggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode");

    updateIcon(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
});