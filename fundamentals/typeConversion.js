let val;

/*
    Number to string
*/

// val = 5;

// Number to string
// val = String(5);

// Boolean to string
// val = String(true);

// Date to string
// val = String(new Date());

// Array to string
// val = String([1, 2, 3, 4]);

// To String() Method
// val = (5).toString();
// val = (true).toString(); 

/*
    String to Number 
*/

// val = Number('5');

// Boolean to Number
// val = Number(true) // 1 
// val = Number(false) // 0
// val = Number(null) // 0
// val = Number('hello') // NaN, not a number

val = parseInt('100.30') // 100 as a number
val = parseFloat('100.31') // 100.31 as a number

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2)) // shows decimal 

/*  
    type coercion
*/
const val1 = '5'; 
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);