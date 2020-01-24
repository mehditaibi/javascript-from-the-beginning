// const sayHello = function() {
//   console.log("Hello");
// };

const sayHello = () => {
  console.log("Hello");
};

// one line function doesn't need braces
const sayHello = () => console.log(hello);

// one line returns
const sayHello = () => "Hello";

// return object
const sayHello = () => ({ msg: "hello" });

// single param does not need parenthesis
const sayHello = name => console.log(`Hello ${name}`);

// mulitple param need parenthesis
const sayHello = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);

sayHello("Mehdi", "Taibi");

const users = ["Nathan", "John", "William"];

const nameLenghts = users.map(function(name) {
  return name.length;
});

// shorter
const nameLenghts = users.map(name => {
  return name.length;
});

// shortest
const nameLenghts = users.map(name => name.length);

console.log(nameLenghts);
