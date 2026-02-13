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

let services = new Swiper(".directionSwiper", {
  slidesPerView: 5,
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
   breakpoints: {
     0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      992: { slidesPerView: 4 }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open_menu");
  const closeBtn = document.getElementById("close_menu");
  const menu = document.querySelector(".mobile__menu");
  const overlay = document.getElementById("menu_overlay");
  const menuLinks = document.querySelectorAll(".mobile__menu a");

  function openMenu() {
    menu.classList.add("is-open");
    overlay.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    overlay.classList.remove("is-active");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});


const openBtns = document.querySelectorAll('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const overlay = document.querySelector('[data-modal-overlay]');
const closeBtn = document.querySelector('[data-modal-close]');

function openModal(e) {
  e.preventDefault();
  modal.classList.add('is-active');
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-active');
  overlay.classList.remove('is-active');
  document.body.style.overflow = '';
}

openBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});