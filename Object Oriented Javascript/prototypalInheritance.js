// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there`;
};

const person1 = new Person("John", "Doe");

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Smith", "222-222-2222", "Standard");

// Customer greeting
Customer.prototype.greeting = function() {
  return `Hello there, dear customer`;
};
