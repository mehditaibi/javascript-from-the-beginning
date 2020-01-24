let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val.list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// get children element nodes
val = list.children;
val = list.children[0];

// Children of children
val = list.children[3].children

// First child
val = list.firstChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
val = listItem.previousElementSibling.previousElementSibling;

console.log(val);
