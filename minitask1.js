const nilai = [70, 85, 80, 90, 75];
const nilai2 = [75, 80, 65, 90, 85];

let nilaiGabungan = [...nilai, ...nilai2];
console.log(nilaiGabungan);
console.log(`Nilai max: ${nilaiGabungan[3]}`);
console.log(`Nilai min: ${nilaiGabungan[7]}`);

let sum = 0;

for (let i = 0; i < nilaiGabungan.length; i++) {
  sum += nilaiGabungan[i];
}

let avg = sum / nilaiGabungan.length;
console.log(`Nilai rata-rata: ${avg}`);
