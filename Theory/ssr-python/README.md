# 📖 Theory — Server-Side Rendering (SSR) Using Python

## 📌 Overview

This implementation demonstrates **Server-Side Rendering (SSR)** using FastAPI and Jinja2 templates.

The application displays student records on a web page. FastAPI handles the incoming HTTP request, while Jinja2 renders the student data into an HTML template that is sent to the browser.

The project uses a predefined list of student records containing their ID, name, and branch.

## 🎯 Objective

To understand:

- Server-Side Rendering (SSR)
- FastAPI application development
- HTTP request handling
- Jinja2 templating
- Dynamic HTML generation
- Template rendering
- Passing data from Python to HTML
- REST and web application fundamentals
- Running a Python web server using Uvicorn

## 💻 Technologies Used

- Python
- FastAPI
- Jinja2
- Starlette
- Uvicorn
- HTML

## 📋 Student Data

The application contains three predefined student records.

```python
students = [
    {"id": 1, "name": "Aarav", "branch": "CSE"},
    {"id": 2, "name": "Diya", "branch": "ECE"},
    {"id": 3, "name": "Rohan", "branch": "IT"},
]
```

Each student record contains:

- `id`: Unique student identifier
- `name`: Student's name
- `branch`: Student's academic branch

The data is stored in a Python list and passed to the HTML template for display.

## ⚙️ Implementation

### 🌐 FastAPI Application

The application is created using FastAPI.

```python
app = FastAPI()
```

This creates the web application that handles incoming requests.

### 📄 Jinja2 Template Configuration

Jinja2 templates are configured using:

```python
templates = Jinja2Templates(directory="templates")
```

This tells the application to look for HTML templates inside the `templates` directory.

### 🏠 Home Route

**GET `/`**

The home route handles requests to the root URL.

```python
@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="students.html",
        context={
            "students": students
        }
    )
```

When a user opens the home page:

1. FastAPI receives the HTTP request.
2. The `home()` function is executed.
3. The student list is passed to `students.html`.
4. Jinja2 renders the template using the supplied data.
5. The rendered HTML page is returned to the browser.

The `HTMLResponse` response class indicates that the route returns HTML content.

## 🛣️ Application Route

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Displays the student records as an HTML page |

The application currently contains only one route.

## 🔄 How Server-Side Rendering Works

1. The user opens the application in a browser.
2. The browser sends a request to the FastAPI server.
3. FastAPI processes the request.
4. The application passes student data to the Jinja2 template.
5. Jinja2 generates the HTML using the template.
6. The server sends the rendered HTML back to the browser.

## 📂 Project Structure

```text
ssr-python/
│
├── main.py
├── requirements.txt
├── .gitignore
├── templates/
│   ├── home.html
│   └── students.html
└── README.md
```

- `main.py` — FastAPI application and home route.
- `templates/home.html` — Additional HTML template.
- `templates/students.html` — Template rendered by the home route to display student records.
- `requirements.txt` — Python dependency list.
- `.gitignore` — Specifies files Git should ignore.
- `README.md` — Project documentation.

The project also contains a local virtual environment (`venv`), which is used to manage Python dependencies and should not be committed to GitHub.

## 🚀 How to Run

### 1. Navigate to the Project Directory

From the main repository directory, run:

```bash
cd Theory/ssr-python
```

### 2. Install Dependencies

The `requirements.txt` file is currently empty. Install the required packages using:

```bash
python3 -m pip install fastapi uvicorn jinja2
```

### 3. Start the Server

Run the following command:

```bash
uvicorn main:app --reload --port 8000
```

Alternatively, the application can be started using:

```bash
python main.py
```

### 4. Open the Application

Visit the following URL in your browser:

http://127.0.0.1:8000

The page should display the student records rendered through the `students.html` template.

## 📚 Concepts Demonstrated

- Server-Side Rendering (SSR)
- FastAPI application creation
- HTTP GET requests
- Route handling
- `HTMLResponse`
- Jinja2 template configuration
- `TemplateResponse`
- Passing context data to templates
- Dynamic HTML rendering
- Python lists and dictionaries
- Request objects
- Uvicorn server execution
- Python web application development

## ⚠️ Note

- Student records are stored in a Python list and are predefined in `main.py`.
- The application currently provides only a page for displaying students.
- No database or CRUD functionality is implemented in the provided Python code.
- The `requirements.txt` file is empty, so dependencies must be installed separately unless they are already available in the Python environment.
- The `students.html` file must exist inside the `templates` directory for the home route to render successfully.

## 🧭 Navigation

- ⬅️ Back to [Unit 1](../README.md)
- 📖 Back to [Theory](../README.md)
- 🏠 Back to [Main Repository](../../README.md)

## 👩‍💻 Submitted By

**Name:** Hrishitha Badavath
**SAP ID:** 590015596
**Course:** Backend Development
**University:** UPES

## 📝 Summary

Theory — Implementation of a Server-Side Rendering application using FastAPI and Jinja2 to display student records dynamically on an HTML page.
