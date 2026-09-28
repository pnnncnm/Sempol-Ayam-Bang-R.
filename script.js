// ===== Kalkulator jumlah pesanan (section menu) =====
function calculateTotal() {
    const qtyInput = document.getElementById('calcQty');
    let qty = parseInt(qtyInput.value) || 1;
    if (qty < 1) qty = 1;
    qtyInput.value = qty;

    const total = qty * 1000;
    document.getElementById('calcTotal').innerText = 'Rp ' + total.toLocaleString('id-ID');
}

function updateCalcQty(change) {
    const qtyInput = document.getElementById('calcQty');
    let current = parseInt(qtyInput.value) || 10;
    current += change;
    if (current < 1) current = 1;
    qtyInput.value = current;
    calculateTotal();
}

function setCalcQty(value) {
    document.getElementById('calcQty').value = value;
    calculateTotal();
}

// ===== Modal pesanan =====
function openOrderModal() {
    document.getElementById('orderModal').classList.remove('hidden');
    updateModalTotal();
}

function openOrderModalWithQty() {
    const qtyFromCalc = parseInt(document.getElementById('calcQty').value) || 10;
    document.getElementById('modalQty').value = qtyFromCalc;
    openOrderModal();
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.add('hidden');
}

function adjustModalQty(change) {
    const input = document.getElementById('modalQty');
    let val = parseInt(input.value) || 10;
    val += change;
    if (val < 1) val = 1;
    input.value = val;
    updateModalTotal();
}

function setModalQty(val) {
    document.getElementById('modalQty').value = val;
    updateModalTotal();
}

function updateModalTotal() {
    const input = document.getElementById('modalQty');
    let val = parseInt(input.value) || 1;
    if (val < 1) val = 1;
    input.value = val;
    const total = val * 1000;
    document.getElementById('modalTotalText').innerText = 'Rp ' + total.toLocaleString('id-ID');
}

// ===== Kirim pesanan ke WhatsApp =====
function sendOrderToWhatsApp() {
    const name = document.getElementById('custName').value.trim() || 'Pelanggan Bang R.';
    const qty = document.getElementById('modalQty').value || '10';
    const total = (parseInt(qty) * 1000).toLocaleString('id-ID');
    const pickup = document.getElementById('pickupOption').value;
    const notes = document.getElementById('custNotes').value.trim();

    let message = `Halo Sempol Ayam Bang R., saya mau pesan sempol!\n\n`;
    message += `👤 *Nama Pemesan:* ${name}\n`;
    message += `🍢 *Pesanan:* Sempol Ayam Original (${qty} tusuk)\n`;
    message += `💰 *Total Pembayaran:* Rp ${total}\n`;
    message += `📍 *Opsi Pengambilan:* ${pickup}\n`;
    if (notes) {
        message += `📝 *Catatan Tambahan:* ${notes}\n`;
    }
    message += `\n*Lokasi Outlet:* JALAN BINA KRIDA, SETELAH GERBANG FKIP\n`;
    message += `Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waPhone = "6285286562298";
    window.open(`https://wa.me/${waPhone}?text=${encodedMessage}`, '_blank');
    closeOrderModal();
}

// ===== Menu mobile =====
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}
