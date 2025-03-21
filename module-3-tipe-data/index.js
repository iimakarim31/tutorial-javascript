/* tipe Data Primitive */
// String
const nama = "Alkarim";
const domisili = `${nama} Bandung`;

// Number
const umur = 24.5;

// Boolean
const isMarried = false;

// Undefined
let x;
var y;

// Null
const person = null;

// Symbol
const symbol1 = Symbol("descrip 1");

// BigInt
const bigInt1 = 274243593759735n;

/* tipe Data Reference */
// Object
const people = {
  nama: "Alkariim",
  umur: 24,
  domisili: "Bandung",
  negara: "Indonesia",
};

// Array
const hobby = ["Basket", "Music", "Travelling"];

// Function
function sayHello() {
  return "Hello World!";
}

const output = sayHello();
console.log(output, typeof output);

/* Perbedaan tipe data primitive dan reference */
// Tipe data primitive
let a = 10;
let b = a; // karena 'b' menyimpan nilai salinan dari a
a = 20;
console.log(b);

// Tipe data reference
let obj1 = { nama: "Alkariim" };
let obj2 = obj1; // obj2 akan menyimpan referensi yang sama dengan object 1
obj1.nama = "Wilastra";
console.log(obj2);
