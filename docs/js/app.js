'use strict';

// Navbar Toggle
document.querySelector('.navbar__toggle').onclick = function (e) {
  document.querySelector('.navbar__nav').classList.toggle('show');
};

// Navbar Fix Position
function fixNavbar() {
  var navBar = document.querySelector('.navbar').classList;
  window.pageYOffset > 70 ? navBar.add("sticky") : navBar.remove("sticky");
  window.pageYOffset > 200 ? navBar.add("in") : navBar.remove("in");
};

window.onscroll = function () {
  fixNavbar();
};
document.addEventListener("DOMContentLoaded", fixNavbar);