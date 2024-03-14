'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


// scrol ke movie
document.getElementById("movieLink").addEventListener("click", function(event) {
  event.preventDefault(); 

  document.getElementById("topRatedMovie").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("movieButton").addEventListener("click", function() {

  document.getElementById("topRatedMovie").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("movieLink2").addEventListener("click", function(event) {
  event.preventDefault(); 

  document.getElementById("topRatedMovie").scrollIntoView({ behavior: "smooth" });
});

// scrol ke series
document.getElementById("seriesLink").addEventListener("click", function(event) {
  event.preventDefault(); 

  document.getElementById("series").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("seriesButton").addEventListener("click", function() {

  document.getElementById("series").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("seriesLink3").addEventListener("click", function(event) {
  event.preventDefault(); 

  document.getElementById("series").scrollIntoView({ behavior: "smooth" });
});
 
document.getElementById("seriesLink2").addEventListener("click", function() {

  document.getElementById("series").scrollIntoView({ behavior: "smooth" });
});

