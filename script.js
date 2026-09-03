<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kopi Mantan</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome untuk Ikon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Navbar -->
    <nav>
        <h1><i class="fas fa-coffee"></i> Kopi Mantan</h1>
        <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Tentang Kami</a></li>
        </ul>
    </nav>

    <!-- Tombol Keranjang Melayang -->
    <button class="floating-cart" onclick="toggleCart()">
        <i class="fas fa-shopping-cart"></i>
        <span id="cart-count">0</span>
    </button>

    <!-- Home Section -->
    <section id="home">
        <div class="home-content">
            <h2>Kopi Mantan</h2>
            <p class="slogan">"Pahitnya pas, manisnya tinggal kenangan."</p>
            <p>Obati rindumu atau lupakan dia dengan seduhan kopi terbaik dari kami. Cocok untuk menemani harimu yang baru.</p>
            <a href="#menu" class="btn">Pesan Sekarang <i class="fas fa-arrow-right"></i></a>
        </div>
    </section>

    <!-- Menu Section -->
    <section id="menu">
        <h2 class="section-title">Menu Pelipur Lara</h2>
        
        <div class="filter-container">
            <button class="filter-btn active" onclick="filterMenu('all')">Semua Kenangan</button>
            <button class="filter-btn" onclick="filterMenu('coffee')">Edisi Kopi</button>
            <button class="filter-btn" onclick="filterMenu('non-coffee')">Non-Kopi</button>
        </div>

        <div class="menu-grid">
            <!-- COFFEE -->
            <div class="menu-item coffee">
                <img src="https://images.unsplash.com/photo-1593443320739-77f74939d0da?w=500&q=80" alt="Kopi Susu Kenangan">
                <div class="menu-info">
                    <h3>Kopi Susu Kenangan</h3>
                    <p>Manisnya sesaat, ngangeninnya selamanya.</p>
                    <div class="action-row">
                        <span class="price">Rp 20.000</span>
                        <button class="btn-add" onclick="addToCart('Kopi Susu Kenangan', 20000)">+ Pesan</button>
                    </div>
                </div>
            </div>

            <div class="menu-item coffee">
                <img src="https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&q=80" alt="Americano Move On">
                <div class="menu-info">
                    <h3>Americano Move On</h3>
                    <p>Pahit, gelap, tapi bikin kamu sadar dan bangkit.</p>
                    <div class="action-row">
                        <span class="price">Rp 18.000</span>
                        <button class="btn-add" onclick="addToCart('Americano Move On', 18000)">+ Pesan</button>
                    </div>
                </div>
            </div>

            <div class="menu-item coffee">
                <img src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&q=80" alt="Macchiato Balikan">
                <div class="menu-info">
                    <h3>Macchiato Balikan</h3>
                    <p>Karamel manis untuk kamu yang berharap dia kembali.</p>
                    <div class="action-row">
                        <span class="price">Rp 25.000</span>
                        <button class="btn-add" onclick="addToCart('Macchiato Balikan', 25000)">+ Pesan</button>
                    </div>
                </div>
            </div>

            <div class="menu-item coffee">
                <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80" alt="Cappuccino Masa Lalu">
                <div class="menu-info">
                    <h3>Cappuccino Masa Lalu</h3>
                    <p>Foam lembut yang mengingatkan pada elusan tangannya.</p>
                    <div class="action-row">
                        <span class="price">Rp 22.000</span>
                        <button class="btn-add" onclick="addToCart('Cappuccino Masa Lalu', 22000)">+ Pesan</button>
                    </div>
                </div>
            </div>

            <!-- NON-COFFEE -->
            <div class="menu-item non-coffee">
                <img src="https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500&q=80" alt="Matcha Harapan">
                <div class="menu-info">
                    <h3>Matcha Harapan Baru</h3>
                    <p>Hijau segar, tanda lembaran baru siap dimulai.</p>
                    <div class="action-row">
                        <span class="price">Rp 26.000</span>
                        <button class="btn-add" onclick="addToCart('Matcha Harapan Baru', 26000)">+ Pesan</button>
                    </div>
                </div>
            </div>

            <div class="menu-item non-coffee">
                <img src="https://images.unsplash.com/photo-1629221297587-995b0ff73456?w=500&q=80" alt="Taro Pelarian">
                <div class="menu-info">
                    <h3>Taro Pelarian</h3>
                    <p>Pelarian manis saat hatimu sedang hancur.</p>
                    <div class="action-row">
                        <span class="price">Rp 24.000</span>
                        <button class="btn-add" onclick="addToCart('Taro Pelarian', 24000)">+ Pesan</button>
                    </div>
                </div>
            </div>

            <div class="menu-item non-coffee">
                <img src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80" alt="Lychee Tea Air Mata">
                <div class="menu-info">
                    <h3>Lychee Tea Air Mata</h3>
                    <p>Segar, dingin, seperti sikapnya sebelum pergi.</p>
                    <div class="action-row">
                        <span class="price">Rp 20.000</span>
                        <button class="btn-add" onclick="addToCart('Lychee Tea Air Mata', 20000)">+ Pesan</button>
                    </div>
                </div>
            </div>

            <div class="menu-item non-coffee">
                <img src="https://images.unsplash.com/photo-1620189507195-68309c04c4d0?w=500&q=80" alt="Red Velvet Cinta Buta">
                <div class="menu-info">
                    <h3>Red Velvet Cinta Buta</h3>
                    <p>Merah merona, mengingatkanmu betapa butanya dulu.</p>
                    <div class="action-row">
                        <span class="price">Rp 25.000</span>
                        <button class="btn-add" onclick="addToCart('Red Velvet Cinta Buta', 25000)">+ Pesan</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal Keranjang & Checkout -->
    <div id="cart-modal" class="modal-overlay hide">
        <div class="modal-content">
            <span class="close-btn" onclick="toggleCart()">&times;</span>
            <h2><i class="fas fa-shopping-bag"></i> Pesanan Kamu</h2>
            
            <div id="cart-items" class="cart-items-container">
                <p class="empty-cart">Keranjangmu masih kosong, sekosong hatimu.</p>
            </div>
            
            <div class="cart-summary">
                <h3>Total: <span id="cart-total">Rp 0</span></h3>
            </div>

            <form id="checkout-form" onsubmit="processPayment(event)" class="hide">
                <input type="text" id="customer-name" placeholder="Nama Kamu" required>
                <select id="payment-method" required>
                    <option value="" disabled selected>Pilih Metode Pembayaran</option>
                    <option value="qris">QRIS (GoPay/OVO/Dana)</option>
                    <option value="cash">Bayar di Kasir (Cash)</option>
                </select>
                <button type="submit" class="btn-checkout">Bayar Sekarang</button>
            </form>
            
            <button id="btn-lanjut-bayar" class="btn-checkout" onclick="showCheckoutForm()">Lanjut Pembayaran</button>
        </div>
    </div>

    <!-- About Section -->
    <section id="about">
        <div class="about-card">
            <h2 class="section-title">Tentang Kopi Mantan</h2>
            <p>
                <strong>Kopi Mantan</strong> bukan sekadar kedai kopi biasa. Ini adalah tempat persinggahan bagi jiwa-jiwa yang sedang berusaha <i>move on</i>, atau mereka yang sekadar butuh tempat nyaman untuk merenung dan mengerjakan tugas. Kami hadir menyajikan rasa yang mengingatkanmu pada kenangan manis, namun dengan kopi yang cukup kuat untuk membangunkanmu ke realita.
            </p>
        </div>
    </section>

    <!-- Footer Copyright -->
    <footer>
        <p class="footer-slogan">"Pahitnya pas, manisnya tinggal kenangan."</p>
        <p class="copyright">&copy; 2026 Kopi Mantan.</p>
        <p class="credit">Designed with <i class="fas fa-heart"></i> by <strong>Pandya Raditya Manggala</strong></p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
    
