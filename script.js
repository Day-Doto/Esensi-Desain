/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelectorAll(".menu a");

  // Smooth scrolling untuk navigasi
  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth"
        });
      }
      // Tutup menu setelah klik di mobile
      menu.classList.remove("active");
    });
  });

  // Toggle menu saat tombol hamburger diklik
  hamburger.addEventListener("click", function (event) {
    menu.classList.toggle("active");
    event.stopPropagation(); // Mencegah event klik menyebar ke dokumen
  });

  // Tutup menu jika klik di luar menu
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.classList.remove("active");
    }
  });
});
