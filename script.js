const body = document.querySelector("body");
const toggle = document.querySelector(".nav__toggle");
const toggle_icon = document.querySelector(".nav__toggle-icon");

toggle.addEventListener("click", () => {
  console.log("clicked");
  if (body.classList.length) {
    toggle_icon.src = "./assets/dark.png";
    body.classList.remove("dark-mode");
  } else {
    toggle_icon.src = "./assets/light.png";
    body.classList.add("dark-mode");
  }
});
