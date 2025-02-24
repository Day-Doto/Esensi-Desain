document.addEventListener("DOMContentLoaded", function () {
  // Menu Hamburger
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", function (event) {
      menu.classList.toggle("active");
      event.stopPropagation(); //mencegah event klik menyebar ke document
    });
    // Menutup menu jika klik diluar
    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove(active);
      }
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
