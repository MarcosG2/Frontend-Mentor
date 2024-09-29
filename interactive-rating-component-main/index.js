const ratingsCards = document.querySelectorAll(".ratings span");
const submit_btn = document.querySelector(".SubmitBtn");
const rate_point = document.getElementById("rate");
const thankSection = document.querySelector(".thank");
const ratingSection = document.querySelector(".rating-start");

let rate = null;

ratingsCards.forEach((ratingCard) => {
  ratingCard.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    rate = card.innerText;
  });
});

submit_btn.addEventListener("click", () => {
  console.log("in button");

  if (rate) {
    rate_point.innerText = rate;
    ratingSection.classList.add("hidden");
    thankSection.classList.remove("hidden");
  }
});
