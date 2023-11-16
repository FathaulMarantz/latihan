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

// Upload firestore
const db = firebase.firestore();
const galleryTableBody = document.getElementById('gallery-table-body');
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
                                <td>${data.dusun}</td>
                                <td>${data.namaGambar}</td>
                                <td>${data.url}</td>
                                <td></td>
                            </tr>`;
                const deleteButton = createDeleteButton(doc.id);
                galleryTableBody.innerHTML += row;
                nomor++;
            });
            galleryTableBody.innerHTML += `
                        <tr>
                            <td>No</td>
                            <td>
                            <select id="dusun">
                                <option value="cipeundey">Cipeundey</option>
                                <option value="sempurmayung">Sempurmayung</option>
                                <option value="margawati">Margawati</option>
                            </select>
                            </td>
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
    const namaGambarInput = document.getElementById('namaGambar');
    const urlGambarInput = document.getElementById('urlGambar');
    const idGambarInput = document.getElementById('dusun');
    const namaGambar = namaGambarInput.value;
    const urlGambar = urlGambarInput.value;
    const idGambar = idGambarInput.value
    console.log(idGambar)

    if (namaGambar && urlGambar) {
        db.collection('foto').add({
                namaGambar: namaGambar,
                url: urlGambar,
                dusun: idGambar
            })
            .then(() => {
                alert('Data berhasil ditambahkan ke Firestore');
                tampilkanData(); // Menampilkan ulang data setelah menambahkan
            })
            .catch(error => {
                alert('Error adding document: ', error);
            });
    } else {
        alert('Nama Gambar dan URL tidak boleh kosong');
    }
}

// Memanggil fungsi tampilkanData saat halaman dimuat
tampilkanData();


// // ------------------------------------------- Viewer Count -----------------------------------------------------------
// var counterContainer = document.querySelector(".website-counter");
// var visitCount = localStorage.getItem("page_view");

// // Check if page_view entry is present
// if (visitCount) {
//     visitCount = Number(visitCount) + 1;
//     localStorage.setItem("page_view", visitCount);
// } else {
//     visitCount = 1;
//     localStorage.setItem("page_view", 1);
// }
// counterContainer.innerHTML = visitCount;

// ------------------------------------------- Statistic Data -----------------------------------------------------------
document.addEventListener('DOMContentLoaded', async function() {
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById('myChart').getContext('2d');
    // Get a reference to the Firestore database
    var db = firebase.firestore();

    var counterContainer = document.querySelector(".website-counter");
    var date = new Date();
    var tahun = date.getFullYear().toString();
    // Get the document reference from Firestore
    var docRef = db.collection("page_views").doc(tahun);
    var datas;
    // Get the current value from Firestore
    await docRef.get().then(function(doc) {
        if (!doc.exists) {
            // Document doesn't exist, create it with count 1
            var bulan = (date.getMonth()+1).toString();
            datas = {
                "1":0,
                "2":0,
                "3":0,
                "4":0,
                "5":0,
                "6":0,
                "7":0,
                "8":0,
                "9":0,
                "10":0,
                "11":0,
                "12":0
            };
            docRef.set(data);
        } else {
            datas = doc.data();
        }

        // Update the counter on the web page
        counterContainer.innerHTML = visitCount;
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    // Get the current month and year
    var now = new Date();
    // Create your chart data
    var data = {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [{
            label: `Viewer in ${tahun}`,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [datas["1"], datas["2"],  datas["3"],  datas["4"], datas["5"], datas["6"], datas["7"], datas["8"], datas["9"], datas["10"], datas["11"], datas["12"]]
        }]
    };

    // Create your chart options
    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});