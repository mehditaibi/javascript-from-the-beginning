// Selecting a single element

// document.getElementById();

const taskTitle = console.log(document.getElementById("task-title"));

// Get things from the element
console.log(taskTitle.id);
console.log(taskTitle.className);

// Change styling
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// taskTitle.style.display = "none";

// Change content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My task";
taskTitle.innerHTML = "<span style='color: red'>Task List</span>";

// document.querySelector()

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "pink";

document.querySelector("li:last-child").style.color = "pink";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").innerText = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "green";

// Selecting multiple elements

const items = document.querySelectorAll("li");

items.forEach(function(item, index) {
  item.textContent = `${index} : Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd");
const liEven = document.querySelectorAll("li:nth-child(even");

liOdd.forEach(function(li, index) {
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items);
