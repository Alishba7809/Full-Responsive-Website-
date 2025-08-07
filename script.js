document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
  const alinkIcon = document.getElementById("alink-icon");
  const alinkMenu = document.getElementById("alink-menu");

  alinkIcon.addEventListener("click", () => {
    alinkMenu.classList.toggle("active");
  });


});


