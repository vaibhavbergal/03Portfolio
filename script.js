const menu = document.querySelector(".menu");
const check = document.getElementById("ckeck");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const mediaQuerry = window.matchMedia("(min-width: 583px)");

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

// mediaQuerry.addEventListener("change", function () {
//   if (mediaQuerry.matches) {
//     openMenu.style.display = "none";
//     closeMenu.style.display = "none";
//   }
// });
