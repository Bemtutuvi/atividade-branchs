const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

document.querySelector(".next").addEventListener("click", () => {
  changeSlide(currentIndex + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  changeSlide(currentIndex - 1);
});

function changeSlide(newIndex) {
  slides[currentIndex].classList.remove("active");
  currentIndex = (newIndex + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
}

// Troca automática a cada 5s
setInterval(() => {
  changeSlide(currentIndex + 1);
}, 5000);
