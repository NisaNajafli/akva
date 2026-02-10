const track = document.querySelector('.hero-track');
const slides = document.querySelectorAll('.hero-slide');
let index = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.hero-next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

document.querySelector('.hero-prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});
