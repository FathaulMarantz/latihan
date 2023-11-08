// Fungsi untuk menampilkan elemen dengan id yang diberikan dan menyembunyikan yang lainnya
function showContent(id) {

    const divs = document.querySelectorAll('.container');
    divs.forEach(div => {
        div.style.display = "none";
    });
    const selectedDiv = document.getElementById(id);
    selectedDiv.style.display = "inline-block";
}

// Tambahkan event listener ke setiap tombol navigasi
const navLinks = document.querySelectorAll('.navigasi');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        console.log("Clicked!");
        event.preventDefault(); // Mencegah halaman berpindah ke URL
        const id = link.id.replace('-button', ''); // Mengambil id div yang sesuai
        showContent(id);
    });
});