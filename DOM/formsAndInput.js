const form = document.querySelector("form");
const taskInput = document.getElementById("task");
taskInput.value = "";
const heading = document.querySelector("h5");
const select = document.querySelector("select");

form.addEventListener("submit", runEvent);

taskInput.addEventListener("keydown", runEvent);

taskInput.addEventListener("keyup", runEvent);

taskInput.addEventListener("keypress", runEvent);

taskInput.addEventListener("focus", runEvent);

taskInput.addEventListener("blur", runEvent);

taskInput.addEventListener("cut", runEvent);

taskInput.addEventListener("paste", runEvent);

taskInput.addEventListener("input", runEvent);

select.addEventListener("change", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log(`Event type: ${e.type}`);

  // Get input value
  console.log(taskInput.value);

  console.log(e.target.value);
  heading.innerText = e.target.value;
}
