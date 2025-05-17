// Footer Year + Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
    menuButton.textContent = "☰";
  } else {
    nav.style.display = "flex";
    menuButton.textContent = "✖";
  }
});
