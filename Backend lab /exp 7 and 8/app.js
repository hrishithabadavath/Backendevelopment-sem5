
let tasks = [];

const input = document.getElementById("taskInput");
const form = document.getElementById("taskForm");
const list = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

class Task {
    constructor(title) {
        this.id = Date.now() + Math.random();
        this.title = title;
        this.completed = false;
    }
}

const renderTasks = () => {
    list.innerHTML = "";

    tasks.forEach(({ id, title, completed }) => {
        const li = document.createElement("li");
        li.dataset.id = id;

        const span = document.createElement("span");
        span.textContent = title;
        span.classList.add("task-title");

        if (completed) span.classList.add("done");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.type = "button";
        deleteBtn.classList.add("delete-btn");

        li.append(span, deleteBtn);
        list.appendChild(li);
    });

    const remaining = tasks.filter(task => !task.completed).length;
    taskCount.textContent = `${tasks.length} tasks, ${remaining} remaining`;
};

const addTask = () => {
    const title = input.value.trim();
    if (!title) return;

    tasks = [...tasks, new Task(title)];
    input.value = "";
    renderTasks();
    input.focus();
};

form.addEventListener("submit", event => {
    event.preventDefault();
    addTask();
});

list.addEventListener("click", event => {
    const li = event.target.closest("li");
    if (!li) return;

    const id = Number(li.dataset.id);

    if (event.target.classList.contains("delete-btn")) {
        tasks = tasks.filter(task => task.id !== id);
    } else {
        tasks = tasks.map(task =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        );
    }

    renderTasks();
});
