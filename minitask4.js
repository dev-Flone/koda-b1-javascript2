const phi = 3.14;

function luas(r) {
  return phi * r * r;
}
function keliling(r) {
  return 2 * phi * r;
}

function hitung(r, cbl, cbk) {
  const hasilLuas = cbl(r);
  const hasilKeliling = cbk(r);

  console.log(
    `Luas lingkaran: ${hasilLuas}, dan Keliling lingkaran: ${hasilKeliling}`,
  );
}

hitung(10, luas, keliling);
