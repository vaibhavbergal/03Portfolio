const menu = document.querySelector(".menu");
const check = document.getElementById("check");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const mediaQuerry = window.matchMedia("(min-width: 583px)");

check.addEventListener("click", () => {
  if (check.checked) {
    menu.style.top = "3.6rem";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
  } else {
    menu.style.top = "-220px";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  }
});

mediaQuerry.addEventListener("change", () => {
  if (mediaQuerry.matches) {
    openMenu.style.display = "none";
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

var checkbox = document.getElementById("checkbox");

var savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  checkbox.checked = savedTheme === "light";
}

function toggle() {
  if (checkbox.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}
