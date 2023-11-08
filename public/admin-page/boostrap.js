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

// Fungsi untuk menghapus data dari Firestore berdasarkan ID dokumen
function hapusData(id) {
    db.collection('foto').doc(id).delete()
        .then(() => {
            console.log('Data berhasil dihapus dari Firestore');
            tampilkanData(); // Menampilkan ulang data setelah menghapus
        })
        .catch(error => {
            console.error('Error removing document: ', error);
        });
}

// Fungsi untuk membuat tombol hapus pada setiap baris tabel
function createDeleteButton(id) {
    const button = document.createElement('button');
    button.textContent = 'Hapus';
    button.onclick = function() {
        hapusData(id);
    };
    return button;
}

// Fungsi untuk menampilkan data dari Firestore
function tampilkanData() {
    db.collection('foto').get()
        .then(snapshot => {
            galleryTableBody.innerHTML = '';
            let nomor = 1;
            snapshot.forEach(doc => {
                const data = doc.data();
                const row = `<tr>
                                <td>${nomor}</td>
                                <td>${data.namaGambar}</td>
                                <td>${data.url}</td>
                                <td></td>
                            </tr>`;
                const deleteButton = createDeleteButton(doc.id);
                row.cells[3].appendChild(deleteButton); // Menambahkan tombol hapus ke kolom Action
                galleryTableBody.innerHTML += row;
                nomor++;
            });
            galleryTableBody.innerHTML+=`
                        <tr>
                            <td>No</td>
                            <td><input type="text" id="namaGambar"></td>
                            <td><input type="text" id="urlGambar"></td>
                            <td><button onclick="tambahData()">Tambah</button></td>
                        </tr>
            `;
        })
        .catch(error => {
            console.error('Error getting documents: ', error);
        });
}

// Fungsi untuk menambahkan data ke Firestore
function tambahData() {
    const namaGambar = namaGambarInput.value;
    const urlGambar = urlGambarInput.value;

    if (namaGambar && urlGambar) {
        db.collection('foto').add({
            namaGambar: namaGambar,
            url: urlGambar
        })
        .then(() => {
            console.log('Data berhasil ditambahkan ke Firestore');
            tampilkanData(); // Menampilkan ulang data setelah menambahkan
        })
        .catch(error => {
            console.error('Error adding document: ', error);
        });
    } else {
        console.error('Nama Gambar dan URL tidak boleh kosong');
    }
}

// Memanggil fungsi tampilkanData saat halaman dimuat
tampilkanData();
