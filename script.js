
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filters button");

let tasks = [];
let currentFilter = "all";

// Load tasks from localStorage
function loadTasks() {
    try {
        const savedTasks = localStorage.getItem("tasks");
        const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];

        tasks = Array.isArray(parsedTasks) ? parsedTasks : [];
    } catch (error) {
        console.error("Error loading tasks:", error);
        tasks = [];
    }
}

// Save tasks to localStorage
function saveTasks() {
    try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving tasks:", error);
    }
}

// Display tasks
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
            saveTasks();
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
            saveTasks();
            displayTasks();
        });

        li.append(checkbox, span, deleteBtn);
        taskList.appendChild(li);
    });
}

// Add new task
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

    saveTasks();

    taskInput.value = "";
    displayTasks();
});

// Add task using Enter key
taskInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        addBtn.click();
    }
});

// Filter tasks
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;
        displayTasks();
    });
});

// Load saved tasks when page opens
loadTasks();
displayTasks();
