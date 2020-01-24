const personPrototype = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

const mary = Object.create(personPrototype);

mary.firstName = "Mary";
mary.lastName = " Williams";
mary.age = 30;

mary.getsMarried("Thompson");
console.log(mary.greeting());

const mehdi = Object.create(personPrototype, {
  firstName: { value: "Mehdi" },
  lastName: { value: "Taibi" },
  age: { value: 36 }
});
