/* 
    var, bisa diakses diluar scope, nilainya bisa diubah
*/
// if (true) {
//   var nama = "Alkariim";
// } // scope
// nama = "Wilastra";
// console.log("var : ", nama);

/* 
    let, tidak bisa diakses diluar scope dan hanya didalam scopes, nilainya bisa diubah
*/
// if (true) {
//   let nama = "Alkariim";
//   nama = "Wilastra";
//   console.log("let : ", nama);
// } // scope

/* 
    const, tidak bisa diakses diluar scope dan hanya didalam scopes, nilainya tidak bisa diubah
*/
if (true) {
  const nama = "Alkariim";
  nama = "Wilastra";
  console.log("const : ", nama);
} // scope
