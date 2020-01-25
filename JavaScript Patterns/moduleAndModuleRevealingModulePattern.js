// Basic Structure

(function() {
  // Declare private vars and functions
  return {
    // Declare public vars and functions
  };
})();

// Standard module pattern
const UICtrl = (function() {
  let text = "Hello World";

  const changeText = function() {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChangeText();

// Revealing module pattern
const ItemCtrl = (function() {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log("Item added..");
  }

  function get(id) {
    return _data.find(item => {
      return item.id === id;
    });
  }

  return {
    add,
    get
  };
})();

ItemCtrl.add({ id: 1, name: "Mehdi" });
ItemCtrl.get(1);
