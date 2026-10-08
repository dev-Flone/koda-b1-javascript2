const lingkaran = {
  r: 10,
  phi: 3.14,
  luas: () => `Luas lingkaran: ${lingkaran.phi * lingkaran.r * lingkaran.r}`,
  keliling: () => `Keliling lingkaran: ${2 * lingkaran.phi * lingkaran.r}`,
};
console.log(lingkaran.luas());
console.log(lingkaran.keliling());
