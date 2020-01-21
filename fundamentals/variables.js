// var, let, const

// With var & let can reassign variable 
var name = "John Doe";
let name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

// Init var 
var greeting; 
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// A variable cannot start with number
// var 1varibale; // throws an error

// varible starting with an underscore, 
// by convention is a private variable

// multi words variables
var firstName = "John" // camel case, most commun convention

var first_name = "Sara" // underscore convention

var FirstName = "Tom" // pascal case

// Let, we can reassign a variable
let age;
age = 12;

// Const 
const city = "Vancouver"
city = "Burnbay" // throws an errors for variables that have a primitive value assigned
const country; // throws an error as we cannot reassign later 

// Note that We can declare an object or array with const and still mutate it 



