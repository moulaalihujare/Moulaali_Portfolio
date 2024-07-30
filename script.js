function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Get the navbar
var navbar = document.getElementById("navbar");
var menu = document.getElementById("nav");

window.onscroll= function() {

  if (window.pageXOffset >= offsetTop){

    navbar.classList.add("sticky");
  }
  else{

    navbar.classList.remove(sticky);
  }
}
