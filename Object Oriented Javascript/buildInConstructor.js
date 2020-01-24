// String

const name1 = "Jeff";
const name2 = new String("Jeff");

name2.foo = "bar";
console.log(name1);

console.log(typeof name1);
console.log(typeof name2);

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1);
console.log(typeof bool2);

// Function

const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1 + 1");

// Object
const john1 = { name: john };
console.log(john1);

const john2 = new Object({name: "john"});
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4]
const arr2 =  new Array(1, 2, 3, 4)

console.log(arr1);
console.log(arr2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1)
console.log(re2)

