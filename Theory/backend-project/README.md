# 📖 Theory — Unit 1: Student Management API Using Flask

## 📌 Overview

This implementation demonstrates a **Student Management REST API** using Flask and Python.

The application provides endpoints to retrieve student records in JSON format. It allows users to view all students and retrieve an individual student using their ID. It also demonstrates basic routing and HTTP error handling.

## 🎯 Objective

To understand:

- Flask application development
- REST API fundamentals
- HTTP request handling
- Routing using Flask
- JSON responses
- GET requests
- Dynamic URL parameters
- Retrieving records by ID
- HTTP status codes
- Error handling

## 💻 Technologies Used

- Python
- Flask
- Flask `jsonify`
- REST API
- JSON

## 📋 Student Data

The application contains three predefined student records.

```python
students = [
    {"id": 1, "name": "Aarav", "branch": "CSE"},
    {"id": 2, "name": "Diya", "branch": "ECE"},
    {"id": 3, "name": "Rohan", "branch": "IT"}
]
```

Each student record contains:

- `id`: Unique student identifier
- `name`: Student's name
- `branch`: Student's academic branch

The records are stored in a Python list.

## ⚙️ API Implementation

### 🏠 Home Route

**GET `/`**

Returns a simple message to confirm that the application is running.

```python
@app.route("/")
def home():
    return "Student Management API"
```

### 📋 Get All Students

**GET `/students`**

Returns all available student records in JSON format.

```python
@app.route("/students")
def get_students():
    return jsonify(students)
```

Example response:

```json
[
    {"id": 1, "name": "Aarav", "branch": "CSE"},
    {"id": 2, "name": "Diya", "branch": "ECE"},
    {"id": 3, "name": "Rohan", "branch": "IT"}
]
```

### 🔍 Get Student by ID

**GET `/students/{student_id}`**

Retrieves a particular student using their ID.

```python
@app.route("/students/<int:student_id>")
def get_student(student_id):
    student = next(
        (s for s in students if s["id"] == student_id),
        None
    )
    if student:
        return jsonify(student)
    else:
        return jsonify({"error": "Student not found"}), 404
```

Example request:

```http
GET /students/2
```

Example response:

```json
{
    "id": 2,
    "name": "Diya",
    "branch": "ECE"
}
```

If the student does not exist, the API returns a `404 Not Found` response.

Example error response:

```json
{
    "error": "Student not found"
}
```

## 🛣️ API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Displays the API welcome message |
| GET | `/students` | Retrieves all students |
| GET | `/students/{student_id}` | Retrieves a student by ID |

## ⚠️ Error Handling

The application checks whether the requested student ID exists in the student list.

If a matching record is found, it returns the student details as JSON. Otherwise, it returns an error message with HTTP status code `404`.

```python
return jsonify({"error": "Student not found"}), 404
```

## 📂 Project Structure

```text
backend-project/
│
├── backend-project/
│   ├── app.py
│   └── venv/
└── README.md
```

- `app.py` — Contains the Flask application, student data, routes, and error handling.
- `venv/` — Local Python virtual environment used for dependencies.
- `README.md` — Project documentation.

The virtual environment should not be uploaded to GitHub.

## 🚀 How to Run

### 1. Navigate to the Project Directory

From the main repository directory, run:

```bash
cd "Theory/backend-project/backend-project"
```

### 2. Activate the Virtual Environment (Optional)

On macOS or Linux:

```bash
source venv/bin/activate
```

### 3. Install Flask

```bash
python3 -m pip install flask
```

### 4. Start the Application

```bash
python app.py
```

The Flask development server will display a local URL, usually:

http://127.0.0.1:5000

### 5. Test the Endpoints

Open these URLs in your browser:

- **Home:** http://127.0.0.1:5000/
- **All Students:** http://127.0.0.1:5000/students
- **Student with ID 2:** http://127.0.0.1:5000/students/2

Try a non-existing student ID to test the `404 Not Found` response.

## 📚 Concepts Demonstrated

- Flask application creation
- URL routing
- HTTP GET requests
- REST API fundamentals
- JSON responses using `jsonify`
- Dynamic URL parameters
- Python lists and dictionaries
- Searching records using `next()`
- Conditional statements
- HTTP status codes
- Error handling
- Running a local development server

## ⚠️ Note

- Student records are stored in a Python list.
- The application supports only GET requests; create, update, and delete operations are not implemented.
- No database is connected to the application.
- Data is predefined in `app.py` and is not persisted in a database.
- Debug mode is enabled, so this development configuration should not be used as-is in production.

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

Theory — Implementation of a Student Management REST API using Flask to retrieve all student records and individual student details in JSON format.
