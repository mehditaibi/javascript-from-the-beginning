const id = 100;

// Equal to
if (id == 100) {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

// Not equal to
if (id !== 100) {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

// Equal to value & type
if (id === 100) {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

// Not equal to value & type
if (id !== 100) {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

// Check if ID is defined
if (typeof id !== "undefined") {
  console.log(`The ID is ${id}`);
} else {
  console.log("No ID");
}

// Greater than or less than
if (id >= 200) {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

// If else

const color = "yellow";

if (color === "red") {
  console.log("color is red!");
} else if (color == "yellow") {
  console.log("color is yellow!");
} else {
  console.log("color is not red or yellow");
}

// Logical operators

const name = "Mehdi";
const age = 28;

// And &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// Or ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in a race`);
} else {
  console.log(`${name} can run in a race`);
}

// Ternary operator
console.log(id === 100 ? "correct" : "incorrect");

// Without braces

if (id === 300) console.log("correct");
else console.log("incorrect");
