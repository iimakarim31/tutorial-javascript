/* ​‌‍‌⁡⁢⁣⁢𝗠𝗮𝘁𝗵 𝗢𝗯𝗷𝗲𝗰𝘁⁡​ */

// ⁡⁣⁣⁢Apa itu Math Object,⁡ ⁡⁣⁢⁢Math Object di JavaScript adalah objek bawaan yang berisi berbagai properti dan metode untuk melakukan operasi matematika.

// ⁡⁣⁣⁢Properti Math⁡

// * Math.PI: Mengembalikan nilai π (3.14159...).
// * Math.E: Mengembalikan nilai konstanta Euler (2.718...).

console.log(Math.PI);
console.log(Math.E);

// ⁡⁣⁣⁢Metode Math⁡
console.log(Math.abs(-7)); // menjadi absolut
console.log(Math.pow(2, 5)); // mempangkatkan jadi 32
console.log(Math.sqrt(16)); // akar sehingga jadi 4
console.log(Math.cbrt(8)); // digunakan untuk menghitung akar pangkat tiga dari suatu angka shingga hasilnya 2
console.log(Math.max(1, 13, 89, 2, 75)); // mencari nilai max sehingga hasilnya 89
console.log(Math.min(1, 13, 89, 2, 75)); // mencari nilai min sehingga hasilnya 1

// ⁡⁣⁣⁢Pembulatan Angka⁡
console.log(Math.round(3.6)); // metode yang digunakan untuk membulatkan angka ke bilangan bulat terdekat sehingga menjadi 4
console.log(Math.ceil(4.0000001)); // membulatkan angka ke atas menjadi bilangan bulat terdekat. sehingga menjadi 5
console.log(Math.floor(3.9)); // mengembalikan bilangan bulat terbesar yang kurang dari atau sama dengan nilai input. sehingga menjadi 3
console.log(Math.trunc(4.99999)); // memotong angka menjadi bilangan bulat dengan menghapus bagian desimalnya. sehingga menjadi 4

// ⁡⁣⁣⁢Random Number⁡
console.log(Math.round(Math.random() * 100)); // metode untuk menghasilkan nilai random lalu dibulatkan
