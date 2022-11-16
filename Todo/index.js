const inputDiv = document.querySelector(".input_div");
const inputEl = document.querySelector(".input");
const addBtn = document.querySelector(".addButton");
const tasklist = document.querySelector(".container");

console.log(inputDiv);

addBtn.addEventListener("click", function () {
  const task = inputEl.value;

  if (!task) {
    alert("please fill out a task");
    return;
  }

  const taskEl = document.createElement("div");
  taskEl.classList.add("todo");

  const taskContent = document.createElement("div");
  taskContent.classList.add("content");
  // taskContent.innerText = task;

  taskEl.appendChild(taskContent);

  const taskInput = document.createElement("input");
  taskInput.classList.add("text");
  taskInput.type = "text";
  taskInput.value = task;
  taskInput.setAttribute("readonly", "readonly");

  taskContent.appendChild(taskInput);

  const taskAction = document.createElement("div");
  taskAction.classList.add("actions");

  const taskEdit = document.createElement("button");
  taskEdit.classList.add("edit");
  taskEdit.innerHTML = "Edit";

  const taskDelete = document.createElement("button");
  taskDelete.classList.add("delete");
  taskDelete.innerHTML = "Delete";

  taskAction.appendChild(taskEdit);
  taskAction.appendChild(taskDelete);

  taskEl.appendChild(taskAction);

  tasklist.appendChild(taskEl);

  inputEl.value = "";

  taskEdit.addEventListener("click", () => {
    if (taskEdit.innerText.toLowerCase() === "edit") {
      taskInput.removeAttribute("readonly");
      taskInput.focus();
      taskEdit.innerText = "Save";
    } else {
      taskInput.setAttribute("readonly", "readonly");
      taskEdit.innerText = "Edit";
    }
  });

  taskDelete.addEventListener("click", () => {
    tasklist.removeChild(taskEl);
  });
});

// function addTask() {
//   const input = inputEl.value;

//   Creating Element through JavaScript
//   let task = document.createElement("input");
//   input.type = "text";
//   input.className = "task";
//   task.value = input;
//   task.style.backgroundColor = "transparent";
//   task.style.border = "none";
//   task.style.color = "white";
//   task.style.fontSize = "2rem";
//   taskbox.appendChild(task);
// }
