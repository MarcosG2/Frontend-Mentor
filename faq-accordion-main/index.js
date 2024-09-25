const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const para = document.querySelectorAll(".para");

plus.forEach((plus, index) => {
  plus.addEventListener("click", () => {
    plus.classList.toggle("hidden");
    minus[index].classList.toggle("hidden");
    para[index].classList.toggle("show");
  });
});

minus.forEach((minus, index) => {
  minus.addEventListener("click", () => {
    minus.classList.toggle("hidden");
    plus[index].classList.toggle("hidden");
    para[index].classList.toggle("show");
  });
});
