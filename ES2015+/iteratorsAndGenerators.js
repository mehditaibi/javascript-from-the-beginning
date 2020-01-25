/*
 * Iterator
 */
if (true) {
  function nameIterator(names) {
    let nextIndex = 0;
    return {
      next: function() {
        return nextIndex < names.length
          ? { value: names[nextIndex++], done: false }
          : { done: true };
      }
    };
  }

  // Create an array of name
  const namesArr = ["John", "Jack", "jill"];

  // Init iterator and pass in the names array
  const names = nameIterator(namesArr);

  console.log(names.next().value);
  console.log(names.next().value);
  console.log(names.next().value);
  console.log(names.next()); // undefined
}

/**
 * Generator Example
 */

if (true) {
  function* sayNames() {
    yield "John";
    yield "Jack";
    yield "Jill";
  }

  const name = sayNames();

  console.log(name.next().value);
  console.log(name.next().value);
  console.log(name.next().value);
  console.log(name.next().value); // Undefined
}

// ID Creator

function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
