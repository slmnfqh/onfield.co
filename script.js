/** @format */

document.addEventListener("DOMContentLoaded", function () {
  var welcomeOverlay = document.getElementById("ct1");
  var welcomeMessage = document.getElementById("ct2");

  // Menampilkan animasi selamat datang saat halaman dimuat
  welcomeOverlay.style.opacity = "1";
  welcomeOverlay.style.pointerEvents = "auto";

  // Menghilangkan animasi selamat datang setelah beberapa detik
  setTimeout(function () {
    welcomeOverlay.style.opacity = "0";
    welcomeOverlay.style.pointerEvents = "none";
  }, 6600);
});

//----------------------------------------------------------------------------------
// Memeriksa apakah pengguna sudah melakukan scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");

  // Jika posisi scroll lebih tinggi dari 20 piksel, tombol akan muncul
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ----------------------------------------------------------

//  toggle class active
const navbarNav = document.querySelector(".nav-list");

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar agar menghilangkan sidebar atau nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
