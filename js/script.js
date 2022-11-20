//  mobile navigation 

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});