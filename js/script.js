const nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
    scrollposition = window.scrollY;

    if (scrollposition >= 60) {
        nav.classList.add('nav-dark');
    } else if (scrollposition <= 60) {
        nav.classList.remove('nav-dark')
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navbarLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        navbarLinks.forEach(function(navbarLink) {
          navbarLink.classList.remove('active'); // Hapus kelas aktif dari semua tautan navbar
        });
  
        link.classList.add('active'); // Tambahkan kelas aktif ke tautan yang diklik
      });
    });
  });

const text = "Teguh Afriansyahh"; // Teks yang ditampilkan

let index = 0;
function typeWriter() {
  document.getElementById('typing-text').textContent += text[index];
  index++;
  if(index < text.length) {
      setTimeout(typeWriter, 150); // Waktu jeda antara setiap karakter (dalam milidetik)
  } else {
      index = 0;
      document.getElementById('typing-text').textContent = '';
      setTimeout(typeWriter, 200); // Waktu jeda sebelum memulai dari awal (dalam milidetik)
  }
}

// Panggil fungsi typeWriter saat halaman dimuat
window.onload = function() {
    typeWriter();
};


