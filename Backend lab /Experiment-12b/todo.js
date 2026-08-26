const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    secret: 'mytodo-secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 600000
    }
}));

// Home page - display todos
app.get('/', (req, res) => {

    if (!req.session.todos) {
        req.session.todos = [];
    }

    const theme = req.cookies.theme || 'light';

    const todoList = req.session.todos.map((item, index) => `
        <li>
            ${item}
            <form action="/delete/${index}" method="post" style="display:inline;">
                <button type="submit">Delete</button>
            </form>
        </li>
    `).join('');

    res.send(`
        <html>
        <head>
            <title>Session To-Do List</title>
            <style>
                body {
                    font-family: Arial;
                    max-width: 600px;
                    margin: 40px auto;
                    padding: 20px;
                    background: ${theme === 'dark' ? '#222' : '#fff'};
                    color: ${theme === 'dark' ? '#fff' : '#000'};
                }

                input {
                    padding: 8px;
                }

                button {
                    padding: 8px;
                    margin: 5px;
                }

                li {
                    margin: 10px 0;
                }
            </style>
        </head>

        <body>

            <h1>Session-Based To-Do List</h1>

            <form action="/add" method="post">
                <input
                    type="text"
                    name="todoItem"
                    placeholder="Enter a task"
                    required
                >
                <button type="submit">Add Todo</button>
            </form>

            <h2>Your Tasks</h2>

            <ul>
                ${todoList || '<li>No tasks yet.</li>'}
            </ul>

            <hr>

            <form action="/theme/dark" method="post">
                <button type="submit">Dark Theme</button>
            </form>

            <form action="/theme/light" method="post">
                <button type="submit">Light Theme</button>
            </form>

        </body>
        </html>
    `);
});

// Add todo
app.post('/add', (req, res) => {

    if (!req.session.todos) {
        req.session.todos = [];
    }

    req.session.todos.push(req.body.todoItem);

    res.redirect('/');
});

// Delete todo
app.post('/delete/:id', (req, res) => {

    const id = parseInt(req.params.id);

    if (!req.session.todos) {
        req.session.todos = [];
    }

    req.session.todos =
        req.session.todos.filter((item, index) => index !== id);

    res.redirect('/');
});

// Dark theme cookie
app.post('/theme/dark', (req, res) => {
    res.cookie('theme', 'dark', {
        maxAge: 900000
    });

    res.redirect('/');
});

// Light theme cookie
app.post('/theme/light', (req, res) => {
    res.cookie('theme', 'light', {
        maxAge: 900000
    });

    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`To-Do app running at http://localhost:${PORT}`);
});