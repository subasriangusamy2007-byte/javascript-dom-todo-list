 
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll("[data-filter]");

let tasks = [];
let currentFilter = "all";

function displayTasks() {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === "completed") {
      return task.completed;
    }
    if (currentFilter === "pending") {
      return !task.completed;
    }
    return true;
  });

  filteredTasks.forEach(task => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      displayTasks();
    });

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
      span.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter(item => item.id !== task.id);
      displayTasks();
    });

    li.append(checkbox, span, deleteBtn);
    taskList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push({
    id: Date.now(),
    text: text,
    completed: false
  });

  taskInput.value = "";
  displayTasks();
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    displayTasks();
  });
});

displayTasks();
	  
