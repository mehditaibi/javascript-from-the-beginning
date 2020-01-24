const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
clearBtn.addEventListener("click", runEvent);

// DoubleClick
clearBtn.addEventListener("dblclick", runEvent);

// Mouse down
clearBtn.addEventListener("mousedown", runEvent);

// Mouse Up
clearBtn.addEventListener("mouseup", runEvent);

// Mouse enter
clearBtn.addEventListener("mouseenter", runEvent);

// Mouse leave
clearBtn.addEventListener("mouseleave", runEvent);

// Mouse over
clearBtn.addEventListener("mouseover", runEvent);

// Mouse out
clearBtn.addEventListener("mouseout", runEvent);

// Mouse move
clearBtn.addEventListener("mousemove", runEvent);

// Event handler
function runEvent(e) {
  console.log(`Event type: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}
