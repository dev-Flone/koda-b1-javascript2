// Declaration Function

// function buatProfile(nama, umur) {
//   return {
//     namaLengkap: nama,
//     usia: umur,
//     kategori: umur >= 18 ? "Dewasa" : "Anak-anak",
//   };
// }
// console.log(buatProfile("Budi", 20));

// Anonynous Function

// const buatProfile = function (nama, umur) {
//   return {
//     namaLengkap: nama,
//     usia: umur,
//     kategori: umur >= 18 ? "Dewasa" : "Anak-anak",
//   };
// };
// console.log(buatProfile("Budi", 20));

// Arrow Function

const buatProfile = (nama, umur) => ({
  namaLengkap: nama,
  usia: umur,
  kategori: umur >= 18 ? "Dewasa" : "Anak-anak",
});

console.log(buatProfile("Budi", 20));
