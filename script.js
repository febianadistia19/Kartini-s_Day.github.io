// Tambahkan ini di bagian paling atas script atau di dalam <head>
// <script src="https://unpkg.com/feather-icons"></script>

// Inisialisasi ikon
feather.replace();

const navbarNav = document.querySelector(".navbar-nav");
const hm = document.querySelector("#hamburger-menu");

// Ketika hamburger menu diklik
hm.onclick = (e) => {
  e.preventDefault(); // Mencegah lompat ke atas karena href="#"
  navbarNav.classList.toggle("active");
};

// Klik di luar elemen untuk menutup menu
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Logika Login yang sudah kamu buat tetap dipertahankan di bawahnya
