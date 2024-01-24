const menu = document.querySelector(".menu");
const check = document.getElementById("check");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

check.addEventListener("click", () => {
  if (!check.checked) {
    menu.style.top = "3.6rem";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
  } else {
    menu.style.top = "-220px";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  }
});

const education = document.getElementById("education");
const experience = document.getElementById("experience");

function edu() {
  education.style.display = "block";
  experience.style.display = "none";
}

function exp() {
  education.style.display = "none";
  experience.style.display = "block";
}
