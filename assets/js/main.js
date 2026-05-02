const slides = document.querySelectorAll(".slide");
const scrollTopBtn = document.getElementById("scrollTop");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

if (slides.length > 0) {
  setInterval(nextSlide, 4000);
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-2px)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
  });
});
