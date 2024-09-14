const hamburgerMenu = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", toggleMenuDisplay);

function toggleMenuDisplay() {
  hamburgerMenu.classList.toggle("active");
  hamburgerMenu.classList.toggle("d-none");
  navLinks.classList.toggle("active");
}

const navLinkCollection = document.querySelectorAll(".nav-link");

navLinkCollection.forEach((link) => link.addEventListener("click", closeMenu));

function closeMenu() {
  hamburgerMenu.classList.remove("active");
  hamburgerMenu.classList.add("d-none");
  navLinks.classList.remove("active");
}

console.log("tucker");
