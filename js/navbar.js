const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

console.log(btnNavEl);
console.log(headerEl);
btnNavEl.addEventListener("click", function () {
  console.log("hello");
  headerEl.classList.toggle("nav-open");
});
