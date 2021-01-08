import { imageToActive, incrementActive, decrementActive } from "./logic";
import { displayActiveImage, createNavDots, showActiveDot } from "./render";

imageToActive(1);
displayActiveImage();
createNavDots();

const next = document.querySelector(".next");
next.addEventListener("click", () => {
  incrementActive();
  displayActiveImage();
  showActiveDot();
});

const prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
  decrementActive();
  displayActiveImage();
  showActiveDot();
});

const dots = Array.from(document.querySelectorAll(".dot"));
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    imageToActive(e.target.dataset.id);
    displayActiveImage();
    showActiveDot();
  });
});


setInterval(() => {
  incrementActive();
  displayActiveImage();
  showActiveDot();
}, 5000);