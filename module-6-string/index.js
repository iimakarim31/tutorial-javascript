/* ​‌‍‌⁡⁢⁣⁢Strings di javascript⁡​ */

// ⁡⁣⁣⁢membuat strings⁡
// let singleQuote = "Hello";
// let doubleQuote = 'World';
// let backtics = `Hello World`;

// mengakses karakter di dalam string
let str = "JavaScript";
console.log(str[4]);

// property dan methods di dalam string
console.log(str.length); // mengetahui panjang string

console.log(str.toUpperCase()); // merubah string ke uppercase
console.log(str.toLowerCase()); // merubah string ke lowecase

//
let testTrim = "       javascript       trim     ";
console.log(testTrim.trim());

// Manipulasi String

// concat
let firstName = "Alkariim";
let lastName = "Wilastra";
let result = firstName + " " + lastName;
console.log(result);

// concat template literals
let resultBactics = `${firstName} ${lastName}`;
console.log(resultBactics);

// Mengambil bagian dari string
// bisa pake slice dan substring
let text = "JavaScript";
console.log(text.slice(0, 4)); // mengambil start to end dari idx 0 yaitu j sampai idx 4 yaitu S tapi yang diambil sampai a hasil Java
console.log(text.substring(4)); // mengambil index 4 sampai akhir hasil Script

// Mengganti bagian dari string
let replacement = "Hello, World";
let newReplacement = replacement.replace("World", "There");
console.log(newReplacement); // hasil Hello, There

//
const arr = ["test", "array", "di", "string"];
console.log(arr.join("-")); // hasil test-array-di-string

//
const testString = "test-array-di-string";
console.log(testString.split("-", 4)); // hasil (4) ['test', 'array', 'di', 'string']

//
// Pencarian di dalam string
//indexOf,
let sentence =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolorum veniam, laborum ut ipsa et accusamus consectetur corrupti necessitatibus omnis?";
let index = sentence.indexOf("dolor");
console.log(index); // hasil 13 berdasarkan index
let lastIndex = sentence.lastIndexOf("dolor");
console.log(lastIndex); // hasil 66
//
let exists = sentence.includes("dolorisme");
console.log(exists);
