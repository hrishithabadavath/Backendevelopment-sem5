# 📝 Notes Taking App

A web-based Notes Taking Application developed as part of the Backend Development laboratory coursework at the University of Petroleum and Energy Studies (UPES). This project demonstrates how backend technologies can be used to build a web application for managing notes.

## 📌 Project Overview

The Notes Taking App is designed to provide a simple interface for creating and managing notes. It uses Node.js and Express.js for server-side processing, EJS for rendering dynamic web pages, and Mongoose for working with MongoDB.

The project demonstrates how the frontend, backend, and database layers work together in a web application.

## 🎯 Objectives

- Understand the fundamentals of backend web development.
- Build a server using Node.js and Express.js.
- Learn how to render dynamic web pages using EJS templates.
- Understand how Mongoose models represent application data.
- Explore database connectivity using MongoDB.
- Organize an application using models, views, public assets, and server-side code.

## ✨ Features

The project structure supports a notes management interface. Depending on the routes and functionality implemented in `server.js`, the application may include:

- **Notes display:** Present notes on the main page.
- **Note editing:** Provide an interface for editing an existing note.
- **Database integration:** Use a Mongoose model to work with note data.
- **Dynamic pages:** Render application pages using EJS templates.
- **Custom styling:** Use CSS to style the application's interface.

*Note: The exact create, delete, search, and other operations depend on the implementation in the source code.*

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for server-side development |
| Express.js | Handles HTTP requests and application routes |
| MongoDB | Database for storing application data |
| Mongoose | Defines models and interacts with MongoDB |
| EJS | Renders dynamic HTML pages |
| HTML5 | Structures web page content |
| CSS3 | Styles the user interface |
| npm | Installs and manages project dependencies |
| Git and GitHub | Version control and source code hosting |

## 🏗️ Application Architecture

The application follows a common server-side web architecture.

```text
User / Web Browser
        |
        v
   Express.js Server
        |
        v
    Application Routes
        |
        +------------------+
        |                  |
        v                  v
   EJS Templates      Mongoose Model
        |                  |
        v                  v
   HTML Response       MongoDB Database
        |
        v
   User Interface
```

The browser sends requests to the server. Express.js handles the requests, the Mongoose model provides database access where required, and EJS templates generate the HTML response.

*This diagram illustrates the typical architecture for this technology stack; the exact request flow depends on the implementation.*

## 📂 Project Structure

```text
notes-taking-app/
│
├── models/
│   └── Note.js
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   └── edit.ejs
│
├── server.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

## 📄 File Descriptions

### `server.js`

The main server-side JavaScript file. It contains the application setup and backend logic, including the routes and request handlers defined for the project.

### `models/Note.js`

Contains the Mongoose model used to define and work with note data. A Mongoose model provides an interface for interacting with the corresponding MongoDB collection.

### `views/index.ejs`

The EJS template used for the application's main notes page.

### `views/edit.ejs`

The EJS template used for the note-editing interface.

### `public/style.css`

Contains CSS rules used to style the application's pages and user interface.

### `package.json`

Stores project metadata, dependencies, and npm scripts used to run or manage the application.

### `package-lock.json`

Records the dependency tree and package versions installed through npm.

### `.env`

Stores environment-specific configuration, such as a MongoDB connection string when required.

### `.gitignore`

Specifies files and directories that should not be tracked by Git.

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the application:

- Node.js
- npm
- MongoDB, or access to a MongoDB database if the application requires one
- Visual Studio Code or another code editor

### Step 1: Clone or open the repository

If you have already cloned the repository, open the project in VS Code.

Otherwise, clone your repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate to the Notes Taking App folder:

```bash
cd "Backend lab /notes-taking-app"
```

### Step 2: Install dependencies

Run:

```bash
npm install
```

This installs the packages listed in `package.json`.

### Step 3: Configure environment variables

Create or update the `.env` file with the configuration required by the application.

For example, if the application uses a MongoDB connection string, the variable might look like this:

```env
MONGODB_URI=your_mongodb_connection_string
```

Use the exact variable name expected by your `server.js` file. The example above is illustrative and may need to be adjusted.

**Security reminder:** Never commit real database passwords, API keys, or private connection strings to GitHub.

### Step 4: Start the application

Check the scripts in `package.json`. If the project uses `server.js` as its entry point and has no special startup script, run:

```bash
node server.js
```

Alternatively, if a suitable start script exists, use:

```bash
npm start
```

### Step 5: Open the application

Open the local URL displayed in the terminal. The port and URL depend on the server configuration.

## 🔄 Application Workflow

A typical notes application works as follows:

1. The user opens the notes page in a browser.
2. The browser sends a request to the Express.js server.
3. The server processes the request and retrieves data when required.
4. Mongoose interacts with MongoDB if the requested operation requires database access.
5. The server passes the required data to an EJS template.
6. EJS renders the page as HTML.
7. The browser displays the response to the user.

The exact operations available depend on the routes and functions implemented in the project.

## 🧠 Concepts Demonstrated

### 1. Backend Development

Node.js allows JavaScript to run on the server, while Express.js simplifies the handling of HTTP requests and responses.

### 2. Model-View Organization

The project separates database-related logic into `models/` and page templates into `views/`. This separation helps organize application code.

### 3. Server-Side Templating

EJS combines templates with application data to generate dynamic HTML pages.

### 4. Database Integration

Mongoose provides schemas and models for working with MongoDB documents from a Node.js application.

### 5. Static Assets

The `public/` directory contains static resources such as CSS files used by the web interface.

### 6. Environment Configuration

Environment variables allow configuration to be kept separate from application source code.

## 🧪 Testing and Troubleshooting

If the application does not start, check the following:

- Confirm Node.js and npm are installed.
- Run `npm install` in the project directory.
- Verify the startup command in `package.json`.
- Check that the environment variables match those used by the application.
- Confirm that MongoDB is accessible if the application uses a database.
- Review the terminal output for errors.
- Check the browser's Developer Tools Console for frontend errors.

## 🔐 Security Considerations

- Keep database credentials in environment variables.
- Ensure `.env` is excluded from Git.
- Do not publish passwords or private connection strings.
- Validate user input on the server.
- Handle invalid requests and database errors appropriately.

## 📈 Future Improvements

Possible improvements, depending on the current implementation, include:

- Adding a dedicated form for creating notes.
- Implementing note deletion.
- Adding search and filtering.
- Improving responsive design for mobile devices.
- Adding input validation and clearer error messages.
- Implementing authentication so each user can manage their own notes.
- Adding automated tests for routes and database operations.

## 🎓 Learning Outcomes

After completing this project, students can gain practical experience in:

- Building server-side applications with Node.js and Express.js.
- Organizing backend code using models and views.
- Rendering dynamic pages with EJS.
- Understanding database models and MongoDB integration.
- Installing and managing npm dependencies.
- Configuring environment variables.
- Structuring and documenting a web development project.

## 👩‍💻 Submitted By

**Hrishitha Badavath**
590015596
B.Tech Computer Science and Engineering
University of Petroleum and Energy Studies (UPES)

**Course:** Backend Development

---

This project is part of the Backend Development laboratory coursework at UPES.