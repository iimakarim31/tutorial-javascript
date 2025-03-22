/* ⁡⁣⁢⁢⁡⁢⁣⁢𝗗𝗮𝘁𝗲 𝗢𝗯𝗷𝗲𝗰𝘁 𝗱𝗶 𝗷𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁⁡⁡ */
// ⁡⁣⁣⁢Apa itu Date Object,⁡ ⁡⁣⁢⁢Date Object di JavaScript digunakan untuk bekerja
// dengan tanggal dan waktu. Objek ini memungkinkan kita untuk mendapatkan,
// mengatur, dan memanipulasi tanggal dan waktu.⁡

// ⁡⁣⁣⁢Membuat Date Object⁡

// Tanggal dan waktu saat ini
let now = new Date(); // Sun Mar 23 2025 06:03:31 GMT+0700 (Indochina Time)
console.log(now);

// Menggunakan string
let specificDate = new Date("August 31, 2000 18:00:00");
console.log(specificDate); // Thu Aug 31 2000 18:00:00 GMT+0700 (Indochina Time)

// Menggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
let customDate = new Date(2025, 2, 23, 6, 6);
console.log(customDate); //Sun Mar 23 2025 06:06:00 GMT+0700 (Indochina Time)
// Bulan ke-3 (Maaret, karena bulan dimulai dari 0)

// ⁡⁣⁣⁢Mengambil Informasi Tanggal dan Waktu⁡
let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.getTime());

// ⁡⁣⁣⁢Mengatur Tanggal dan Waktu⁡
let date = new Date();

// Mengatur tahun menjadi 2045
date.setFullYear(2045);

// Mengatur bulan menjadi Desember (11, karena bulan dimulai dari 0)
date.setMonth(11);

// Mengatur hari menjadi 29
date.setDate(29);
console.log(date);
// Fri Dec 29 2045 06:15:54 GMT+0700 (Indochina Time)
//
//
// ⁡⁣⁣⁢Perhitungan Waktu dengan Date Object⁡
let startDate = new Date(2025, 2, 23, 6, 13);
let endDate = new Date(2025, 3, 3, 6, 13);

let diff = endDate - startDate;
console.log(diff); //miliseconds

let diffIndays = diff / (1000 * 3600 * 24);
console.log(diffIndays);
