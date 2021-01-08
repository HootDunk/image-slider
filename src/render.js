import { images } from "./logic";

const imageContainer = document.getElementById("image-container");
const dotsContainer = document.querySelector(".dots-container");

const displayActiveImage = () => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].active === true) {
      imageContainer.innerHTML = `<img class=\"animated fadeIn\" src='${images[i].path}' alt=''>`;
      return;
    }
  }
};

const createNavDots = () => {
  dotsContainer.innerHTML = "";
  let html = "";
  images.forEach((image) => {
    image.active == true
      ? (html += `<span data-id="${image.id}" class="dot active"></span>`)
      : (html += `<span data-id="${image.id}" class="dot"></span>`);
  });
  dotsContainer.innerHTML = html;
};

const showActiveDot = () => {
  const dots = document.querySelectorAll(".dot");
  for (let i = 0; i < images.length; i++) {
    if (images[i].active == true) {
      dots[i].classList.toggle("active");
    } else dots[i].className = "dot";
  }
};

export { displayActiveImage, createNavDots, showActiveDot };
