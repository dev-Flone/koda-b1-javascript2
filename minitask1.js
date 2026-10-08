const nilai = [70, 85, 80, 90, 75];
const nilai2 = [75, 80, 65, 80, 85];

let nilaiGabungan = [...nilai, ...nilai2];

console.log("Nilai gabungan:", nilaiGabungan);

// Maksimum
let max = nilaiGabungan[0];

for (let i = 1; i < nilaiGabungan.length; i++) {
  if (nilaiGabungan[i] > max) {
    max = nilaiGabungan[i];
  }
}

console.log("Nilai terbesar:", max);

// Minimum
let min = nilaiGabungan[0];

for (let i = 1; i < nilaiGabungan.length; i++) {
  if (nilaiGabungan[i] < min) {
    min = nilaiGabungan[i];
  }
}

console.log("Nilai terkecil:", min);

// Rata-rata
let sum = 0;
for (let i = 0; i < nilaiGabungan.length; i++) {
  sum += nilaiGabungan[i];
}

let avg = sum / nilaiGabungan.length;

console.log("Total nilai:", sum);
console.log("Nilai rata-rata:", avg);
