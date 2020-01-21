// function declaration
function greet(firstName = "John", lastName = "Doe") {
  // if(typeof firstName == "undefined"){firstName = "John"}
  // if(typeof lastName == "undefined"){lastName = "Doe"}
  // console.log('Hello');
  return `Hello ${firstName} ${lastName}`;
}

console.log(greet("Mehdi", "Taibi"));

// Function expression

const square = function(x) {
  return x * x;
};

console.log(square(3));

// Immediatly invokable function expressions - IIFEs

(function() {
  console.log("IIFE Ran..");
})();

(function(name) {
  console.log("Hello " + name);
})("Mehdi");

// Property methods

const todo = {
  add: function() {
    console.log("Add todo..");
  },
  edit: function() {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log("Delete todo..");
};

todo.add();
todo.edit(2);
todo.delete();