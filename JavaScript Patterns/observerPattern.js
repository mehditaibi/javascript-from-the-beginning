function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function() {
      item.call();
    });
  }
};

const click = new EventObserver();

// ES6 Class syntax
if (false) {
  class EventObserver {
    constructor() {
      this.observers = [];
    }

    subscribe(fn) {
      this.observers.push(fn);
      console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
      this.observers = this.observers.filter(function(item) {
        if (item !== fn) {
          return item;
        }
      });
      console.log(`You are now unsubscribed from ${fn.name}`);
    }

    fire() {
      this.observers.forEach(function() {
        item.call();
      });
    }
  }

  const click = new EventObserver();
}
