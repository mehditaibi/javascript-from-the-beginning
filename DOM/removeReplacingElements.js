// Replace Element

// Create element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// replace 
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelectorAll('ul');

// Remove list item
lis[0].remove();

// Remove child element 
list.removeChild(lis[3]);

// Classes & Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes 
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.removeAttribute('href');
val = link
console.log(firstLi.children[0]);

