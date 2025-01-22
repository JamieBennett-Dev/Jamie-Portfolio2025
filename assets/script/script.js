const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
});

let intro = document.querySelector(".intro");
let introText = document.querySelector(".intro-header");
let introSpan = document.querySelectorAll(".intro-text");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    introSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });
    setTimeout(() => {
      introSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);
    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2300)
  });
});
