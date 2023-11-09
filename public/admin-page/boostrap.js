// Fungsi untuk menampilkan elemen dengan id yang diberikan dan menyembunyikan yang lainnya
function showContent(id) {

    var divs = document.querySelectorAll('.container');
    divs.forEach(div => {
        div.style.display = "none";
    });
    var selectedDiv = document.getElementById(id);
    selectedDiv.style.display = "inline-block";
}
var db = firebase.firestore();

// Tambahkan event listener ke setiap tombol navigasi
var navLinks = document.querySelectorAll('.navigasi');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        console.log("Clicked!");
        event.preventDefault(); // Mencegah halaman berpindah ke URL
        var id = link.id.replace('-button', ''); // Mengambil id div yang sesuai
        showContent(id);
    });
});
var galleryTableBody = document.getElementById('gallery-table-body');
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
    var button = document.createElement('button');
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
                var data = doc.data();
                var row = `<tr>
                                <td>${nomor}</td>
                                <td>${data.namaGambar}</td>
                                <td>${data.url}</td>
                                <td></td>
                            </tr>`;
                var deleteButton = createDeleteButton(doc.id);
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
    var namaGambarInput = document.getElementById('namaGambar');
    var urlGambarInput = document.getElementById('urlGambar');
    var namaGambar = namaGambarInput.value;
    var urlGambar = urlGambarInput.value;

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
