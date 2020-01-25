/**
 * Symbols
 */

// create a symbol

const sym1 = Symbol();
const sym2 = Symbol("sym2");

console.log(typeof sym2); //symbole

console.log(Symbol("123") === Symbol("123")); // false
console.log(`Hello String ${sym1}`); // cannot use symbol as string
console.log(`Hello ${String(sym1)}`); // this will work

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol("Sym2");

const myObj = {};

myObj[key1] = "props1";
myObj[key2] = "props2";
myObj.key3 = "prop3";
myObj.key4 = "prop4";

// Symbols are not enumerable in for ...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: "prop" }));
console.log(JSON.stringify({ [Symbol("sym1")]: "prop" }));
