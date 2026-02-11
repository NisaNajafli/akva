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



const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // close all
      items.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-answer").style.height = 0;
      });

      if (!isOpen) {
        item.classList.add("active");
        answer.style.height = answer.scrollHeight + "px";
      }
    });
  });

  const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();