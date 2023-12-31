"use strict";

document
  .getElementsByClassName("active")[0]
  .addEventListener("click", function () {
    window.scrollTo(0, document.querySelector(".topnav").offsetTop);
  });

document
  .getElementsByClassName("html-proj-location")[0]
  .addEventListener("click", function () {
    window.scrollTo(0, document.querySelector(".html-projects").offsetTop);
  });

document
  .getElementsByClassName("js-proj-location")[0]
  .addEventListener("click", function () {
    window.scrollTo(0, document.querySelector(".js-games").offsetTop);
  });
