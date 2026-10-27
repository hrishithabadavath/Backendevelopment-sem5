# 🚀 Express.js Demo

## 📌 Project Overview

This project is part of the Backend Development theory coursework at the University of Petroleum and Energy Studies (UPES). It demonstrates the use of Node.js and Express.js for building server-side web applications.

The project includes EJS templates for displaying a home page and a students page, illustrating how server-side applications can organize and render web pages.

## 🎯 Objectives

- Understand the fundamentals of Node.js and Express.js.
- Learn how to create and run a backend web application.
- Understand the purpose of server-side routing.
- Explore EJS templates for generating dynamic HTML pages.
- Organize application code and view templates into separate folders.

## 🛠️ Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- HTML
- JavaScript
- npm (Node Package Manager)

## 📂 Project Structure

```text
express-demo/
├── express-demo/
│   ├── Backend lab /
│   ├── Theory/
│   ├── nodejs-express-lab/
│   ├── package.json
│   └── README.md
├── views/
│   ├── home.ejs
│   └── students.ejs
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
```

*Note: This is a simplified overview of the directory structure. Some folders contain additional files and subfolders.*

## 📄 File and Folder Description

- **`package.json`** — Contains project metadata, dependencies, and available npm scripts.
- **`package-lock.json`** — Records the dependency versions used by npm.
- **`views/home.ejs`** — EJS template for the home page.
- **`views/students.ejs`** — EJS template for the students page.
- **`express-demo/`** — Contains a nested project directory.
- **`node_modules/`** — Contains installed Node.js dependencies.
- **`README.md`** — Documents the project and instructions for running it.

## ⚙️ Installation and Setup

### Prerequisites

Make sure Node.js and npm are installed on your system.

Check their versions:

```bash
node -v
npm -v
```

### Step 1: Navigate to the project

From the repository root, run:

```bash
cd "Theory/express-demo"
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Start the application

Check the `scripts` section of `package.json` to identify the correct startup command. If the project uses an `app.js` entry point, for example, you can run:

```bash
node app.js
```

Use the actual entry-point filename specified by your project.

### Step 4: Open the application

Open the local URL displayed in the terminal in your web browser.

## 🧠 Concepts Covered

### 1. Node.js

Node.js allows JavaScript to run outside the browser and supports server-side application development.

### 2. Express.js

Express.js provides routing and request-handling features for building web applications with Node.js.

### 3. EJS Templates

EJS allows a server to generate HTML pages using templates and application data.

### 4. Views and Routing

Separating page templates into a `views` directory helps organize the presentation layer of a web application.

## 🎓 Learning Outcomes

- Understand the basic structure of an Express.js application.
- Learn how Node.js and Express.js support backend development.
- Understand the purpose of EJS templates.
- Explore the organization of views and project dependencies.
- Gain practical experience running a Node.js application.

## 👩‍💻 Submitted By

**Hrishitha Badavath**
590015596
B.Tech Computer Science and Engineering
University of Petroleum and Energy Studies (UPES)

This project is maintained as part of the Backend Development coursework at UPES.