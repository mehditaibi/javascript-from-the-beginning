const firstName = "William";
const lastName = "Johnson";
const str = "Hello my name is Mehdi";
let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Mehdi";
val += " Taibi";

val = "Hello, my name is" + " " + firstName + " " + lastName;

// Escaping
val = "That\'s awesome";

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change Casing
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt();
val = firstName.charAt("2");
val = firstName[2];

// Get Last Character
val = firstName.charAt(firstName.length - 1);

// Substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(-3);

// split()
val = str.split(" ");

// replace()
val = str.replace("Mehdi", "George");

// includes()
val = str.includes("Hello");

console.log(val);
