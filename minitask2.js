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
  harga: 250000,
  jumlah: 3,
  namaBarang: "Dumbell set 40kg",
  metodePembayaran: "Transfer BCA",
};

let statusPembayaran = true;

// Combine Object dengan spread
const fakturPembayaran = { ...dataPembeli, ...dataPesanan, statusPembayaran };

// Destructuring
const { nama, email, harga, metodePembayaran, namaBarang, jumlah } =
  fakturPembayaran;

function struk() {
  let totalHarga = harga * jumlah;
  if (statusPembayaran) {
    return `${nama}\n${email}\n==============================\nCheckout:\n${namaBarang} | Rp.${harga.toLocaleString("id-ID")} x ${jumlah}\nTotal: Rp.${totalHarga.toLocaleString("id-ID")}\nTelah dibayar melalui ${metodePembayaran}`;
  } else {
    return "Silahkan bayar tagihan anda.";
  }
}

console.log(struk());
