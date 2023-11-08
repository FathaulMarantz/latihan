// Fungsi untuk menampilkan elemen dengan id yang diberikan dan menyembunyikan yang lainnya
function showContent(id) {

    const divs = document.querySelectorAll('container');
    divs.forEach(div => {
        div.style.display = "none";
    });
    console.log(id);
    const selectedDiv = document.getElementById("Home");
    selectedDiv.style.display = "block";
}

// Tambahkan event listener ke setiap tombol navigasi
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah halaman berpindah ke URL
        const id = link.id.replace('-button', ''); // Mengambil id div yang sesuai
        showContent(id);
    });
});

// Tampilkan halaman Home saat halaman pertama kali dimuat
showContent("Home");