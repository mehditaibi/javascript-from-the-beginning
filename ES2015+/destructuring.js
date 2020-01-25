// Destructuring Assignement

let a, b;
[a, b] = [100, 200];

console.log(a); // 100

// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest); // [300, 400, 500]

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400 });
console.log(rest); // {c: 300, d:400}

// Array Destructuring
const people = ["John", "Beth", "Mike"];
const [person1, person2, person3] = people;
console.log(person1, person2, person3); //"John", "Beth", "Mike"

// Parse array returned from function
function getPeople() {
  return ["John", "Beth", "Mike"];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();
console.log(person1, person2, person3); //"John", "Beth", "Mike"

// Object Destructuring
const person = {
  name: "Mehdi",
  age: 28,
  city: "Vancouver",
  gender: "male"
};

// Old ES5
const name = person.name,
  age = person.age,
  city = person.city;

// New ES6
const { name, age, city } = person;
