// Menampilkan pesan ketika tombol Explore More diklik
const exploreButton = document.querySelector(".btn");

exploreButton.addEventListener("click", function () {
  console.log("Selamat datang di portofolio saya!");
});

// Efek aktif pada menu navigasi
const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log("Menu " + link.textContent + " dipilih");
  });
});
