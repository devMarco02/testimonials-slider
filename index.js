const prev = document.querySelector(".testimonial__btn--prev");
const next = document.querySelector(".testimonial__btn--next");
const slides = document.querySelector(".testimonial__slides");

const slideRight = () => {
  if (!slides.classList.contains("testimonial__slides--active")) {
    slides.classList.add("testimonial__slides--active");
  }
};

const slideLeft = () => {
  if (slides.classList.contains("testimonial__slides--active")) {
    slides.classList.remove("testimonial__slides--active");
  }
};

//============keyboard

const leftRight = (e) => {
  if (e.keyCode == 39) {
    if (!slides.classList.contains("testimonial__slides--active")) {
      slides.classList.add("testimonial__slides--active");
    }
  }

  if (e.keyCode == 37) {
    if (slides.classList.contains("testimonial__slides--active")) {
      slides.classList.remove("testimonial__slides--active");
    }
  }
};
