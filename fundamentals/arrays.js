// Create some arrays
const numbers = [12, 23, 26, 54];
const numbers2 = new Array(22, 49, 44, 33);
const fruits = ["Apple", "Banana", "Orange", "Pear"];
const mixedArr = [22, "Hello", null, undefined, true, { 1: "one" }];

let val;

// Array Length
val = numbers.length;

// check if is array
val = Array.isArray("numbers");

// get single value
val = numbers[3];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(23);

/*
    Mutating arrays
*/

// add to end of array
numbers.push(250);

// add to front of array
numbers.unshift(120);

// take off from end
numbers.pop();

// take off from front
numbers.shift();

// splice values
numbers.splice(1, 1);

// Reverse
numbers.reverse();

// concatenate array
numbers.concat(numbers2);

// sort array
val = fruit.sort();
val = numbers.sort((a, b) => {
  a - b;
});

// reverse sort
val = numbers.sort((a, b) => {
  b - a;
});

// Find 
function under20(num) {
  return num < 20;
}

val = numbers.find(under20);

console.log(numbers);
console.log(val);
