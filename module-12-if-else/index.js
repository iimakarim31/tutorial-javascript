/**
 * ​‌‍‌⁡⁢⁣⁢If-Else Statement di JavaScript⁡​
 *
 * @format
 */

/* 
⁡⁣⁢⁢if-else statement⁡ ⁡⁣⁣⁢adalah salah satu struktur kontrol yang paling dasar di 
JavaScript. Ini digunakan untuk membuat keputusan berdasarkan kondisi 
tertentu. Jika kondisi tersebut benar (true), blok kode tertentu akan 
dijalankan. Jika salah (false), kode lain dapat dijalankan.⁡
*/

// ⁡⁣⁢⁣Sintaks Dasar⁡
// if (kondisi) {
// 	// ⁡⁣⁣⁡⁣⁣⁢Kode yang dijalankan jika kondisi benar (true)⁡
// } else {
// 	// ⁡⁣⁣⁢Kode yang dijalankan jika kondisi salah (false)⁡
// }
// contoh:
let age = 15;

if (age >= 18) {
  console.log("You are eligible vote");
} else {
  console.log("You are not eligible to vote"); //false dan mereturn else
}

// ⁡⁣⁢⁢if-else if⁡ ⁡⁣⁣⁢digunakan untuk memeriksa beberapa kondisi secara berurutan. Blok kode pertama yang kondisinya benar (true) akan dijalankan, dan eksekusi akan berhenti setelah itu.⁡

// if (kondisi1) {
//     // Kode jika kondisi1 benar (true)
//   } else if (kondisi2) {
//     // Kode jika kondisi2 benar (true)
//   } else {
//     // Kode jika semua kondisi salah (false)
//   }
// contoh:
let score = 89;
if (score >= 90) {
  console.log("Grade : A");
} else if (score >= 80) {
  console.log("Grade : B");
} else if (score >= 70) {
  console.log("Grade : C");
} else if (score >= 60) {
  console.log("Grade : D");
} else {
  console.log("Grade : F");
} // output grade B karena score 89 masuk kategori tsb

//
// ⁡⁣⁢⁢Nested If-Else (If-Else Bertingkat)⁡, ⁡⁣⁣⁢Kita juga bisa menempatkan if-else di dalam blok if-else lainnya. Ini disebut sebagai nested if-else.⁡
// if (kondisi1) {
//     if (kondisi2) {
//       // Kode jika kondisi1 dan kondisi2 benar
//     } else {
//       // Kode jika kondisi1 benar tapi kondisi2 salah
//     }
//   } else {
//     // Kode jika kondisi1 salah
//   }
let num = 8;

if (num > 0) {
  if (num % 2 == 0) {
    console.log("Number ini positive dan dia bilangan genap"); // apabila input bernilai + namun berjumlah di modulus sama dengan 0 maka akan mereturn statement ini
  } else {
    console.log("Number ini positive dan bilangan ganjil"); // apabila input bernilai + namun berjumlah di modulus tidak sama dengan 0 maka akan mereturn statement ini
  }
} else {
  console.log("Number ini bilangan negative"); // apabila input bernilai - maka akan mereturn statement ini
}
