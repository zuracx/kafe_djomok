const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.innerHTML = navLinks.classList.contains("open")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

document.querySelectorAll(".heart-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("saved");
    button.innerHTML = button.classList.contains("saved")
      ? '<i class="fa-solid fa-heart"></i>'
      : '<i class="fa-regular fa-heart"></i>';
  });
});

const reservationForm = document.getElementById("reservationForm");
const toast = document.getElementById("toast");
reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  toast.classList.add("show");
  reservationForm.reset();
  window.setTimeout(() => toast.classList.remove("show"), 5000);
});
