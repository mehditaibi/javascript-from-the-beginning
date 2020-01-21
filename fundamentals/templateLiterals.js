const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Vancouver";
let html;

// Without template string (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

// With template strings / template literals (es6)
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>
`;

document.body.innerHTML = html;
