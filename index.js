document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  // Load theme from localStorage if available
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "Light Theme";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Update theme toggle button label
    const isDark = document.body.classList.contains("dark");
    toggleBtn.textContent = isDark ? "Light Theme" : "Dark Theme";

    // Save theme preference in localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
