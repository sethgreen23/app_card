const check = document.querySelector(".check");
const indicator = document.querySelector(".indicator");
const body = document.querySelector("body");
const app = document.querySelector(".app-box");
const main = document.querySelector(".main");

check.addEventListener("click", function () {
  // indicator.classList.toggle("light");
  body.classList.toggle("light");
  app.classList.toggle("light");
  main.classList.toggle("light");
  this.classList.toggle("light");
});
