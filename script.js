document.addEventListener("DOMContentLoaded", function () {
  // Menu Hamburger
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }

  // Lazy Loading Gambar
  let images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.addEventListener("load", function () {
      img.classList.add("loaded");
    });
  });

  // Debugging Google Tag Manager (Opsional)
  if (window.dataLayer) {
    console.log("Google Tag Manager dataLayer:", window.dataLayer);
  } else {
    console.warn("dataLayer tidak ditemukan.");
  }
});
