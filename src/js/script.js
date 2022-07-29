const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
