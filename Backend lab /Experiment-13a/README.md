# 🧪 Experiment 13A — MongoDB and Mongoose

## 📌 Aim

To understand how to connect a Node.js application to a MongoDB database using Mongoose and perform database-related operations.

## 📖 Description

This experiment contains a Node.js application that uses Mongoose for working with MongoDB. Mongoose provides a structured way to define schemas and interact with database collections from a JavaScript application.

The project includes a server file, package configuration, and environment configuration.

## 🛠️ Technologies Used

- Node.js
- JavaScript
- MongoDB
- Mongoose
- npm (Node Package Manager)
- Environment variables

## 📂 Project Structure

```text
Experiment-13a/
├── mongoose-demo/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── node_modules/
└── README.md
```

## 📄 File Description

- **`server.js`** — Contains the main server-side JavaScript code for the application.
- **`package.json`** — Contains project information, dependencies, and available scripts.
- **`package-lock.json`** — Records the exact dependency versions installed through npm.
- **`.env`** — Stores environment-specific configuration, such as a database connection string.
- **`.gitignore`** — Specifies files and folders that should not be tracked by Git.
- **`node_modules/`** — Contains the installed Node.js dependencies.
- **`README.md`** — Documents the experiment and explains how to set up the project.

## ▶️ How to Run

### 1. Open the project

Open the `mongoose-demo` folder in VS Code or navigate to it in your terminal:

```bash
cd "Backend lab /Experiment-13a/mongoose-demo"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Make sure the `.env` file contains the required configuration for your application.

**Security note:** Never upload database passwords, secret keys, or private connection strings to GitHub.

### 4. Start the application

Check `package.json` for the available scripts. If the application uses `server.js` as its entry point, run:

```bash
node server.js
```

### 5. Check the output

Follow the messages displayed in the terminal to confirm whether the application starts and connects to the database successfully.

## 🎯 Learning Outcomes

- Understand the role of MongoDB in backend development.
- Learn how Mongoose helps applications interact with MongoDB.
- Understand the purpose of project dependencies and configuration files.
- Practice running a Node.js application.
- Learn to configure environment variables for database connectivity.

## 👩‍💻 Submitted By

**Hrishitha Badavath**
590015596
B.Tech Computer Science and Engineering
University of Petroleum and Energy Studies (UPES)

This experiment is part of the Backend Development laboratory coursework at UPES.