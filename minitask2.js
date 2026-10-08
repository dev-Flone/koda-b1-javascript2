// Mini Task: Proses Checkout E-Commerce

// Membuat program penyelesaian transaksi E-Commerce dengan proses:

// 1. Combine (Penggabungan Data): Menggabungkan object dataPembeli dan detailPesanan menjadi satu object baru bernama fakturPembayaran menggunakan Spread Operator, sekaligus menambahkan properti baru statusPembayaran: "Lunas".

// 2. Extract (Ekstraksi Data): Mengambil spesifik properti nama, email, dan totalHarga dari object fakturPembayaran menggunakan Destructuring.

// 3. Output (Tampilan): Menampilkan ringkasan pesanan ke console menggunakan variabel hasil destructuring tersebut (contoh output: "Struk dicetak untuk Budi (budi@email.com) dengan total tagihan Rp 150.000").

const dataPembeli = {
  nama: "Kairn",
  email: "kairn@gmail.com",
  tipeMember: "VIP",
};
const dataPesanan = {
  id: 1,
  totalHarga: 250000,
  namaBarang: "Dumbell set 40kg",
  metodePembayaran: "Transfer BCA",
};

let statusPembayaran = "Lunas";

// Combine Object dengan spread
const fakturPembayaran = { ...dataPembeli, ...dataPesanan, statusPembayaran };

// Destructuring
const { nama, email, totalHarga, metodePembayaran, namaBarang } =
  fakturPembayaran;
console.log(fakturPembayaran);

// Membuat output
console.log(
  `Pembayaran untuk ${namaBarang} dengan harga Rp.${totalHarga.toLocaleString("id-ID")} sudah dibayar oleh ${nama} (${email}) dengan metode ${metodePembayaran}\nStatus: ${statusPembayaran}`,
);
