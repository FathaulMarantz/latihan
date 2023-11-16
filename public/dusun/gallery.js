const galeriSection = document.getElementById('galeri');
var db = firebase.firestore();
// Fungsi untuk menampilkan data dari Firestore
function tampilkanGaleri() {
    db.collection('foto').get() // Ganti 'Foto' dengan nama koleksi Firestore Anda
        .then(snapshot => {
            snapshot.forEach(doc => {
                const data = doc.data();
                const namaGambar = data.namaGambar;
                const url = data.url;
                const idGambar = data.dusun;
                if (galeriSection.classList.contains(idGambar)) {
                    // Membuat elemen kolom
                    const column = document.createElement('div');
                    column.classList.add('coloum');

                    // Membuat elemen menu-card
                    const menuCard = document.createElement('div');
                    menuCard.classList.add('menu-card');

                    // Membuat elemen gambar
                    const image = document.createElement('img');
                    image.src = url;
                    image.alt = namaGambar;
                    image.classList.add('menu-card-image');

                    // Menggabungkan elemen-elemen
                    menuCard.appendChild(image);
                    column.appendChild(menuCard);
                    galeriSection.querySelector('.row').appendChild(column);
                }

            });
        })
        .catch(error => {
            console.error('Error getting documents: ', error);
        });
}

// Memanggil fungsi tampilkanGaleri saat halaman dimuat
tampilkanGaleri();