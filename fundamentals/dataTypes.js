// 6 primitive data types

// String
const name = "John Doe";

// Number
const age = 28;

// Boolean
const isMarried = false;

// Null
const car = null;
console.log(typeof car); // object, a javascript "bug"

// Undefined
let notAssigned;

// Symbol
const sym = Symbol();

/*
 Reference Types - Object
*/

// Array
const hobbies = ["movies", "music"];
console.log(typeof hobbies); // object

//Object literal
const address = {
  city: "vancouver"
};
console.log(typeof address); // object

// Dates
const today = new Date();
console.log(typeof today); // object
