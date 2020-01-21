// For loop
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
    continue;
  }
  if (i === 5) {
    console.log("Stop the loop");
    break;
  }
  console.log(`number ${i}`);
}

// While loop
let i = 0;
do {
  console.log("Number" + i);
} while (i < 10);

// Loop through arrays

const cars = ["Ford", "Honda", "Toyota"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// forEach()
cars.forEach(function(car, index, array) {
  console.log(`${index} ${car}`);
});

// Map
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Bob" }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

// for in loop
const user = {
  firstName: "Mehdi",
  lastName: "Taibi",
  age: 28
};

for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}
