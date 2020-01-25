const User = function(name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name} : ${message}`);
  }
};

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  };
};

const mehdi = new User("Mehdi");
const michael = new User("Michael");
const sara = new User("Sara");

const chatroom = new Chatroom();

chatroom.register(mehdi);
chatroom.register(michael);
chatroom.register(sara);

mehdi.send("Hey dude!", michael);
sara.send("Hello everyone!");
michael.send("What's up guys!");
