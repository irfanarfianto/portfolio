// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Fungsi untuk menampilkan semua proyek tanpa pemilihan kategori
function showAllProjects() {
  // Ambil semua elemen proyek dan tampilkan
  var projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(function (item) {
    item.style.display = 'block';
  });
}

// Fungsi untuk memfilter proyek berdasarkan kategori
// Fungsi untuk menampilkan semua proyek tanpa pemilihan kategori
function showAllProjects() {
  // Ambil semua elemen proyek dan tampilkan
  var projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(function (item) {
    item.style.display = 'block';
  });
}

function filterProjects(category) {
  // Ambil semua elemen proyek
  var projectItems = document.querySelectorAll('.project-item');

  // Loop melalui setiap elemen proyek
  projectItems.forEach(function (item) {
    // Ambil kategori dari data-category attribute
    var itemCategory = item.getAttribute('data-category');

    // Periksa apakah kategori proyek sesuai dengan yang dipilih atau tidak
    if (category === 'all' || itemCategory === category) {
      // Tampilkan proyek jika sesuai dengan kategori atau kategori adalah "Semua"
      item.style.display = 'block';
    } else {
      // Sembunyikan proyek jika tidak sesuai dengan kategori
      item.style.display = 'none';
    }
  });
}