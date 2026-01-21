// AOS
// AOS.init();
AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 120,
});

// Swiper
// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   navigation: {
//     prevEl: ".swiper-button-prev",
//     nextEl: ".swiper-button-next",
//   },
//   breakpoints: {
//     576: { slidesPerView: 1 },
//     768: { slidesPerView: 2 },
//     992: { slidesPerView: 3 },
//   },
// });

// Swiper Services
const serviceSwiper = new Swiper(".servicesSwiper", {
  spaceBetween: 24,
  grabCursor: true,
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

// Swiper destinasi Favorit
const destinasiSwiper = new Swiper(".destinasiSwiper", {
  spaceBetween: 24,
  grabCursor: true,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

// Swiper Testimoni
const testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    prevEl: "#testimonials .swiper-button-prev",
    nextEl: "#testimonials .swiper-button-next",
  },
});

// Navbar ganti warna saat scroll
const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.replace("bg-transparent", "nav-color");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparent");
  }
});

// Scrollspy
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateNavLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update class "active" pada navbar
    navLinks.forEach((link) => {
      link.classList.remove("active-scroll");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active-scroll");
      }
    });
  }

  window.addEventListener("scroll", activateNavLink);
});

// Read More & Less
const containers = document.querySelectorAll(".read-more-container");

containers.forEach((container) => {
  container.addEventListener("click", (event) => {
    const current = event.target;

    if (!current.classList.contains("read-more-btn")) return;

    const currentText = container.querySelector(".read-more-text");
    currentText.classList.toggle("read-more-text--show");

    current.textContent =
      current.textContent === "Read more" ? "Read less" : "Read more";
  });
});

// const parentContainer = document.querySelectorAll(".read-more-container");
// parentContainer.addEventListener("click", (Event) => {
//   const current = Event.target;
//   const isReadMoreBtn = current.className.includes("read-more-btn");
//   if (!isReadMoreBtn) return;
//   const currentText = Event.target.parentNode.querySelector(".read-more-text");
//   currentText.classList.toggle("read-more-text--show");
//   current.textContent = current.textContent.includes("Read more")
//     ? "Read less"
//     : "Read more";
// });
