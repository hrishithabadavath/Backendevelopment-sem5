const field = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Restore autosaved text from sessionStorage
if (sessionStorage.getItem("autosave")) {
    field.value = sessionStorage.getItem("autosave");
}

// Save text whenever it changes
field.addEventListener("input", () => {
    sessionStorage.setItem("autosave", field.value);
});


// Get todos from sessionStorage
function getTodos() {
    const todos = sessionStorage.getItem("todos");

    if (todos) {
        return JSON.parse(todos);
    }

    return [];
}


// Display todos
function displayTodos() {

    const todos = getTodos();

    todoList.innerHTML = "";

    todos.forEach((todo, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${todo}
            <button onclick="deleteTodo(${index})">
                Delete
            </button>
        `;

        todoList.appendChild(li);
    });
}


// Add a todo
function addTodo() {

    const todo = field.value.trim();

    if (todo === "") {
        alert("Please enter a task");
        return;
    }

    const todos = getTodos();

    todos.push(todo);

    sessionStorage.setItem("todos", JSON.stringify(todos));

    field.value = "";

    sessionStorage.removeItem("autosave");

    displayTodos();
}


// Delete a todo
function deleteTodo(index) {

    const todos = getTodos();

    todos.splice(index, 1);

    sessionStorage.setItem("todos", JSON.stringify(todos));

    displayTodos();
}


// Save dark theme using localStorage
function setDarkTheme() {

    localStorage.setItem("theme", "dark");

    applyTheme();
}


// Save light theme using localStorage
function setLightTheme() {

    localStorage.setItem("theme", "light");

    applyTheme();
}


// Apply saved theme
function applyTheme() {

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {

        document.body.style.backgroundColor = "#222";
        document.body.style.color = "white";

    } else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}


// Load saved theme when page opens
applyTheme();

// Load saved todos when page opens
displayTodos();