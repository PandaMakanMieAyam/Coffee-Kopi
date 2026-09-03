// Fungsi untuk filter menu interaktif
function filterMenu(category) {
    // Ambil semua tombol dan hilangkan class 'active'
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Tambahkan class 'active' ke tombol yang baru saja diklik
    event.target.classList.add('active');

    // Ambil semua item menu
    const items = document.querySelectorAll('.menu-item');
    
    // Logika penyaringan (filter)
    items.forEach(item => {
        if (category === 'all') {
            item.classList.remove('hide');
        } else {
            // Cek apakah item punya class sesuai kategori (coffee/non-coffee)
            if (item.classList.contains(category)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        }
    });
        }
