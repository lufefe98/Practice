class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  toggle() {
    this.completed = !this.completed;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }
  addTask(name) {
    const task = new Task(name);
    this.tasks.push(task);
  }
}

// Select DOM elements
const input = document.querySelector("#task-input");
const button = document.querySelector("#add-task-btn");
const ul = document.querySelector("#task-list");

// Create TaskManager instance
const manager = new TaskManager();

// Render function
function renderTasks() {
  ul.innerHTML = ""; // clear old list

  manager.tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.name;

    if (task.completed) {
      li.classList.add("completed");
    }

    li.addEventListener("click", () => {
      task.toggle();
      renderTasks();
    });

    ul.appendChild(li);
  });
}

// Add task on button click
button.addEventListener("click", () => {
  const taskName = input.value.trim();
  if (taskName === "") return;

  manager.addTask(taskName);
  input.value = "";
  renderTasks();
});
