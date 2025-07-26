function toggleAccordion(id) {
  const allAccordions = document.querySelectorAll(".accordion");
  allAccordions.forEach((acc) => {
    if (acc.id === id) {
      acc.style.display = acc.style.display === "block" ? "none" : "block";
    } else {
      acc.style.display = "none";
    }
  });
}
document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("toggle-theme");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
});
