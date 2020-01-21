// Global Scope

var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`Function scope: `, 4, 5, 6);
// }
// test();

if (true) {
  // Block scope
  var a = 4;
  let b = 5;
  const c = 6;
}

console.log(`Global scope: `, a, b, c);
