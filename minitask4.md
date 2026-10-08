# Passing Function, Callback, dan Return di js

## 1. Fungsi luas() menerima parameter r
Ketika dipanggil:
luas(10); maka r = 10
Kemudian js menghitung: 3.14 x 10 x 10, dan fungsi menerima nilai 314.
Jadi const hasil = luas(10) menghasilkan hasil = 314

## 2. Fungsi keliling() menerima parameter r
Ketika dipanggil:
keliling(10); maka r = 10
Kemudian js menghitung: 2 x 3.14 x 10, dan fungsi menerima nilai 62.8.
Jadi const hasil = keliling(10) menghasilkan hasil = 62.8

## 3. Passing Function
hitung(10, luas, keliling).
10 -> argumen
luas -> fungsi
keliling -> fungsi

Kedua fungsi tersebut tidak menggunakan (), karena kita tidak ingin memanggil fungsi pada saat itu. Melainkan mengirim fungsi tersebeut kedalam fungsi utama yaitu hitung()

## 4. Fungsi hitung()
Merupakan fungsi utama dalam program. Pada saat kita memanggil hitung(10, luas, keliling), maka parameter hitung() menerima r = 10, cbl = luas, cbk = keliling. Jadi, hitung (10, luas, keliling)

## 5. Callback
Merupakan fungsi yang akan dikirim ke dalam fungsi lain sebagai argumen. Dalam program ini:
luas dan keliling menjadi callback-nya, karena dikirim ke dalam fungsi hitung() melalui hitung(10, luas, keliling). Maka luas -> callback dan keliling -> callback, sedangkan cbl dan cbk merupakan parameter yang menerima argumen tersebut.

## 6. Pemanggilan Callback
Dalam fungsi hitung() ada const hasilLuas = cbl(r). Karena sebelumnya kita tahu bahwa cbl = luas dan r = 10
maka cbl(r) -> luas(10).
Fungsi luas() kemudian dijalankan:
function luas(r){
    return phi * r * r
}
menjadi:
function luas(10){
    return 3.14 * 10 * 10
}
Begitu pula untuk keliling()

## 7. Peran return
Digunakan untuk mengembalikan nilai dari sebuah fungsi
Contoh:
function luas(10){
    return 3.14 * 10 * 10
}, 
memberikan output 314, kemudian nilai tersebut ditangkap oleh variabel:
const hasilLuas = luas(10), yang ada di fungsi utama, menjadi hasilLuas = 314. Begitupula untuk keliling(10). Tanpa return, hasil perhitungan tidak akan dikembalikan kepada pemanggil fungsi, sehingga output akan menjadi undefined.

## 8. Alur Program
Mulai dari
hitung(10, luas, keliling)
### Step 1 -- Passing argumen
```
10 --> r
luas --> cbl
keliling --> cbk
```

### Step 2 -- Memanggil callback cbl
```
const hasilLuas = cbl(r) -> hasilLuas = luas(10)
dimana output dari luas(10) adalah 314
```

### Step 3 -- Memanggil callback cbk
```
const hasilKeliling = cbk(r) --> hasilKeliling = keliling(10)
dimana output dari keliling(10) adalah 62.8
```

### Step 4 -- Menampilkan Hasil
```
console.log(`Luas lingkaran: ${hasilLuas}, dan keliling lingkaran: ${hasilKeliling}`), menghasilkan
Luas lingkaran: 314, dan keliling lingkaran: 62.8
```
