//Hamburger

const hamburger = document.getElementById("menuBtn");
const menuHidden = document.getElementById("menuHidden");

console.log(hamburger);

hamburger.addEventListener("click", () => {
  menuHidden.classList.toggle("hidden");
});
