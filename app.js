"use strict";

const popupBtn = document.querySelector(".popup-btn");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".pop-modal");
const overlay = document.querySelector(".overlay");

function closePop() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

popupBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", closePop);
overlay.addEventListener("click", closePop);
