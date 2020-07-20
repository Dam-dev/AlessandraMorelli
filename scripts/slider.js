const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let auto = true;
let slideInterval;
let viewPort = window.matchMedia("max-width(768px)");
const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, 5000);
}
