const person = {
  firstName: "Mehdi",
  lastName: "Taibi",
  age: 28,
  email: "mr.mehdi.taibi@gmail.com",
  hobbies: ["coding", "sports"],
  address: {
    city: "Vancouver",
    country: "Canada"
  },
  getBirthdayYear: function() {
    return new Date().getFullYear() - 28;
  }
};

let val;

val = person;

// get a specific value
val = person.firstName;
val = person["firstName"];
val = person.age;
val = person.hobbies[1];
val = person.address["city"];
val = person.getBirthdayYear();

console.log(val);

const people = [
  { name: "John", age: 29 },
  { name: "Bobby", age: 22 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
