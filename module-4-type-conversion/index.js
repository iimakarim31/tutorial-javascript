// Implicit conversion

let result1 = "5" + 10; // hasilnya 510, hanya operasi tambah yang menghaislkan penambahan angka bukan menjumlahkan jadi string
let result2 = "5" - 10; // hasilnya -5
let result3 = "5" * 10; // hasilnya 50

// falsy value 0, null, undefined, ""
let bool1 = !0; // true boolean
let bool = !1; // false boolean
let bool2 = !null; // true boolean
let bool3 = !undefined; // true boolean

// Eksplisit Conversion
// Mengubah int ke string
let num = 100;
//let string = String(num); // 100 String
let string = num.toString(); // 100 String

//mengubah string ke int
let string2 = "200";
let num2 = parseInt(string2); // 200 'number' bilangan bulat
//
let string3 = "200.88";
let num3 = parseFloat(string3); // 200.88 'number' bilangan desimal
//
let bool4 = Boolean(0); //false 'boolean' kalo parameter null dan undefined juga hasilnya false boolean
let bool5 = Boolean(1); //true 'boolean'
console.log(bool5, typeof bool5);
