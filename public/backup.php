<!-- 
License Desa Cimarga 
Credit by Kelompok 15 KKN ITB 2023
-->

<?php
//src = IGQWROOHFkZA0JSRDQ1R3VWVFJiRm11Y2ZAvRjlwMkRxZAFZAzRjVxTXZAHSW8ydlVBdE1KX1llNjhDTENWT3pkLWpycjlMV2t5bjlyc3A3X3dESzJYQTgzalplMmdZAQkRfOEVkaDZApZAXFTMmRXbVNsaktjRkYxT2Y0Y0UZD

//Instagram API
$sumber = "https://v1.nocodeapi.com/desacimarga/instagram/TCLwepDfMGSrrzeP?limit=12";
$konten = file_get_contents($sumber);
$data = json_decode($konten, true)
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desa Cimarga | Kabupaten Sumedang</title>
    <meta name="description" content="Desa Cimarga Sumedang">
    <script src="https://unpkg.com/feather-icons"></script>
    <link rel="stylesheet" href="./assets/style.css">
</head>

<body>
    <!--Navbar Start-->
    <nav class="navbar" id="main-navbar">
        <div class="navbar-logo">            
            <img src="./img/logo.png" alt="logo-cimarga">
            <div class="row">
                <a href="#" class="navbar-logo-teks" style="font-weight: 700; font-style: italic;" >Desa <span>Cimarga</span></a>
                <p>
                    <a href="#" class="navbar-logo-teks">Kabupaten Sumedang</a>
                </p>
            </div>
        </div>
        <div class="navbar-nav">
            <a href="#home">Home</a>
            <a href="#about">Tentang Kami</a>
            <!-- <a href="#sejarah">Filosofi</a> -->
            <a href="#potensi">Desa</a>
            <a href="#galeri">Galeri</a>
            <a href="#contact">Kontak Kami</a>
        </div>
        <div class="navbar-extra">
            <a href="#" id="search"><i data-feather="search"></i></a>
            <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
        </div>
    </nav>
    <!--Navbar End-->

    <!--Hero Section Start-->
    <section class="hero" id="home">
        <main class="content">
            <p>Terimakasih telah berkunjung. Mari kenali kami lebih dekat lagi.</p>
            <!-- <a href="#" target="_blank" class="cta">Berita Terkini</a> -->
        </main>
    </section>
    <!--Hero Section End-->


    <!--About Section Start-->
    <section id="about" class="about">
        <h2><span>Tentang</span> Kami</h2>

        <div class="row">
            <!-- <div class="about-img">
                <img src="img/tentang_kami.jpg" alt="Tentang Kami">

            </div> -->
            <div class="content">
                <h3>
                    Siapa Kami?
                </h3>
                <p style="text-indent: 4rem;">Kisah kami dimulai dengan legenda Raja Tadjimalela, seorang penguasa Pasundan yang bijaksana dan berani. Kisahnya menjadi penguasa di tanah Pasundan terukir pada peninggalannya di Desa Cimarga yang menjadi petilasan Prabu Tadjimalela.
Desa Cimarga memiliki potensi dengan kondisi demografis yang berisi usia produktif untuk bekerja sehingga dapat menggeliatkan berbagai potensi ekonomi yang ada di desa. Kegiatan seperti bertani, berkebun, dan beternak adalah kehidupan sehari-hari yang umumnya masyarakat lakukan, sementara tradisi berjualan dan pengumpulan madu hutan tetap berlanjut untuk menjadi pekerjaan sampingan warga.
Cimarga tak hanya menawarkan kehidupan pedesaan yang damai, tetapi juga kekayaan hasil bumi seperti kopi, cengkeh, dan pisang. Meskipun perkembangan teknologi masih minim, namun potensi wisata seperti Curug Cihonje dan Wisata Ziarah Prabu Tadjimalela dan produk olahan seperti opak, keripik pisang, dan kopi tradisional tetap memikat hati pengunjung yang berkunjung ke Cimarga.</p>
            </div>
    </section>
    <!--About Section End-->


    <!--History Section Start-->
    <!-- <section id="sejarah" class="sejarah">
        <h2>Sejarah <span>Kami</span></h2>

        <div class="frame-video">
            <iframe src="https://drive.google.com/file/d/1tpZaemLZaSG8AXog5FDN-JJw2Rb4zkfU/preview" allow="autoplay" class="frame-video-vid"></iframe>
        </div>
    </section> -->
    <!--History Section End-->

    <!--Potensi Section Start-->
    <section id="potensi" class="potensi">
        <h2><span>Objek</span> Wisata</h2>
        <div class="row">
            <div class="menu-card">
                <a href="./dusun/cipeundey.html">
                    <img src="./img/potensi.jpg" alt="Cipeundey" class="menu-card-image">
                    <h3 class="menu-card-title">Dusun Cipeundey</h3>
                </a>
            </div>
            <div class="menu-card">
                <a href="./dusun/sempurmayung.html">
                    <img src="./img/potensi.jpg" alt="Sempurmayung" class="menu-card-image">
                    <h3 class="menu-card-title">Dusun Sempurmayung</h3>
                </a>
            </div>
            <div class="menu-card">
                <a href="./dusun/margawati.html">
                    <img src="./img/potensi.jpg" alt="Margawati" class="menu-card-image">
                    <h3 class="menu-card-title">Dusun Margawati</h3>
                </a>
            </div>
        </div>
    </section>
    <!--Potensi Section End-->

    <!--Galeri Section Start-->
    <section id="galeri" class="galeri">
        <h2><span>Galeri</h2>
        <p>Cek instagram kami</p>
        <div class="row">
            <?php foreach ($data['data'] as $row) {?>
            <div class="coloum">
                <div class="menu-card">
                    <a href="<?php echo $row["permalink"]?>" target="_blank"><img src="<?php echo $row["media_url"]?>" alt="Feed-Instagram" class="menu-card-image">
                    </a>
                </div>
            </div>
            <?php }?>
        </div>
    </section>
    <!--Galeri Section End-->


    <!-- Footer Start-->
    <footer>
        <div class="row">
            <div class="coloum-left">
                <h3>
                   Web Ini Dibuat Melalui Kerjasama 
                </h3>
                <ul class="foot">
                    <img src="./img/kerjasama.png" alt="Kerjasama">
                    <li>
                        <a href="#">Institut Teknologi Bandung<br>KIM Desa Cimarga Sumedang</a>
                    </li>
                </ul>
            </div>
            <div class="coloum-left">   
                <h3>Kelompok 15 Program KKN Institut Teknologi Bandung 2023</h3>
                <ul class="foot">
                    <li><a href="#">Dr. Epin Saepudin, M.Pd.<br>Satya Amara<br>Camilla<br>Hakim<br>Fathaul Marantz Ahmad<br>Tiara<br>Restu Khoirunnisa<br>Dian<br>Ahmad Fauzan<br>Zahra Salsabilla<br>Maleakhi Gulo<br>Ziham<br>Ryan Juanda Aritonang<br>Raihan Adri Fulvian<br>Devi Chintania Sitanggang<br>Rahmi<br></a></li>
                </ul>
            </div>
            
            <div class="coloum-right">   
                <h3>Temukan Kami</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31685.91888510695!2d108.013259!3d-6.92167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68cd65380dda37%3A0xe659576d1483da3d!2sCimarga%2C%20Kec.%20Cisitu%2C%20Kabupaten%20Sumedang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1690699707843!5m2!1sid!2sid"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map">
                </iframe>
            </div>
        </div> 
        <div class="line">
        </div>
        <div class="credit">
            <p>&copy; Copyright <a href="">Desa Cimarga</a> 2023</p>
        </div>
    </footer>   
    <!-- Footer End-->

    <script>
        feather.replace()
    </script>

    <script src="./assets/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>