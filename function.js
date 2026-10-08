// // Declaration Function

// // function buatProfile(nama, umur) {
// //   return {
// //     namaLengkap: nama,
// //     usia: umur,
// //     kategori: umur >= 18 ? "Dewasa" : "Anak-anak",
// //   };
// // }
// // console.log(buatProfile("Budi", 20));

// // Anonynous Function

// // const buatProfile = function (nama, umur) {
// //   return {
// //     namaLengkap: nama,
// //     usia: umur,
// //     kategori: umur >= 18 ? "Dewasa" : "Anak-anak",
// //   };
// // };
// // console.log(buatProfile("Budi", 20));

// // Arrow Function

// // const buatProfile = (nama, umur) => ({
// //   namaLengkap: nama,
// //   usia: umur,
// //   kategori: umur >= 18 ? "Dewasa" : "Anak-anak",
// // });

// // console.log(buatProfile("Budi", 20));

// // Method
// // const user = {
// //   firstName: "Budi",
// //   lastName: "Santoso",
// //   biasa() {
// //     return this.firstName;
// //   },
// //   fullName: (value) => `Halo, nama saya ${value}`,
// // };

// // user.lastName = "Doe";

// // console.log(user.fullName("Kairn"));

// // Method di dalam Function

// // Callback Sederhana
// // function fungsiUtama(pesan, test) {
// //   test(pesan);
// // }

// // function fungsiKedua(value) {
// //   console.log(value);
// // }
// // fungsiUtama("Halo", fungsiKedua);

// const tambah = (x, y) => x + y;
// const kurang = (a, b) => a - b;
// const kali = (c, d) => c * d;
// const bagi = (e, f) => e / f;

// function calculate(a, b, cb) {
//   return cb(a, b);
// }

// console.log(calculate(10, 20, tambah));
// // console.log(calculate(10, 20, tambah(15, 10))); Error
// console.log(calculate(10, 20, kurang));
// console.log(calculate(10, 20, kali));
// console.log(calculate(10, 20, bagi));

// console.log(
//   calculate(10, 5, function (x, y) {
//     return x * x - y;
//   }),
// );
// console.log(calculate(2, 5, (x, y) => x * x - y));

function tampilkanStatus(name) {
  console.log(`${name} siap bertarung!`);
}

function serangMonster(m) {
  console.log(`${m} menyerang Monster.`);
}

function expBonus(exp) {
  console.log(`${exp} mendapatkan exp 250`);
}

function processKarakter(name, status, serang, exp) {
  console.log(`Memproses karakter: ${name}`);
  status(name);
  serang(name);
  exp(name);
}

processKarakter("Kairn", tampilkanStatus, serangMonster, expBonus);

function createCharacter() {
  console.log("Karakter berhasil dibuat");
}
console.log("Membuat karakter");
setTimeout(createCharacter, 1000);
