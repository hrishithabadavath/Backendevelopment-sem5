# 📖 Theory —  FastAPI CRUD API

## 📌 Overview

This implementation demonstrates a **Student Management REST API** using FastAPI and Pydantic.

The API supports complete CRUD operations for student records, including creating, retrieving, updating, and deleting students. It also supports branch-based filtering, request data validation, response models, and HTTP error handling.

## 🎯 Objective

To understand:

- FastAPI application development
- REST API design
- Pydantic models and data validation
- GET, POST, PUT, and DELETE requests
- Path parameters and query parameters
- Response models
- HTTP status codes
- Exception handling
- CRUD operations

## 💻 Technologies Used

- Python
- FastAPI
- Pydantic
- Uvicorn
- REST API

## 📋 Pydantic Models

Two Pydantic models are used in the application.

### Student

```python
class Student(BaseModel):
    id: int
    name: str
    branch: str
```

The `Student` model represents a student record containing an ID, name, and branch.

### StudentCreate

```python
class StudentCreate(BaseModel):
    name: str
    branch: str
```

The `StudentCreate` model is used when creating or updating students because the student ID is generated automatically by the application.

## ⚙️ CRUD Operations

### 📋 Read All Students

**GET `/students`**

Returns all available student records.

The API also supports filtering students by branch.

Example:

```http
GET /students?branch=CSE
```

The branch filter is case-insensitive.

### 🔍 Get Student by ID

**GET `/students/{student_id}`**

Retrieves a particular student using their ID.

Example:

```http
GET /students/2
```

If the student does not exist, the API returns a `404 Not Found` response with the message `Student not found`.

### ➕ Create Student

**POST `/students`**

Adds a new student to the list.

Example request body:

```json
{
    "name": "New Student",
    "branch": "CSE"
}
```

The application automatically assigns the next available ID.

A successful request returns **201 Created** along with the newly created student record.

### ✏️ Update Student

**PUT `/students/{student_id}`**

Updates an existing student's name and branch.

Example request:

```http
PUT /students/1
```

Request body:

```json
{
    "name": "Updated Student",
    "branch": "ECE"
}
```

The existing record is replaced with the updated information while retaining the same student ID.

If the student does not exist, the API returns `404 Not Found`.

### 🗑️ Delete Student

**DELETE `/students/{student_id}`**

Deletes a student record using the student ID.

Example:

```http
DELETE /students/1
```

After successful deletion, the API returns **204 No Content**. If the student does not exist, it returns `404 Not Found`.

## 🛣️ API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/students` | Retrieve all students |
| GET | `/students?branch=CSE` | Filter students by branch |
| GET | `/students/{student_id}` | Retrieve a student by ID |
| POST | `/students` | Create a new student |
| PUT | `/students/{student_id}` | Update student details |
| DELETE | `/students/{student_id}` | Delete a student |

## ⚠️ Error Handling

FastAPI's `HTTPException` is used when a requested student does not exist.

```python
raise HTTPException(
    status_code=404,
    detail="Student not found"
)
```

The application also uses Pydantic models to validate incoming request data and response models to define the expected response structure.

## 📂 Project Structure

```text
fastapi-student-api/
│
├── main.py
└── README.md
```

## 🚀 How to Run

### 1. Install Dependencies

Install FastAPI and Uvicorn:

```bash
pip install fastapi uvicorn
```

### 2. Navigate to the Project Directory

From the main repository directory, run:

```bash
cd Theory/fastapi-student-api
```

### 3. Start the Server

```bash
uvicorn main:app --reload --port 5000
```

The API server will run at:

http://127.0.0.1:5000

### 4. Interactive Swagger Documentation

Open the following URL to test the API endpoints interactively:

http://127.0.0.1:5000/docs

### 5. ReDoc Documentation

Access the alternative API documentation at:

http://127.0.0.1:5000/redoc

## 📚 Concepts Demonstrated

- FastAPI application creation
- Pydantic `BaseModel`
- REST API development
- CRUD operations
- GET, POST, PUT, and DELETE methods
- Path parameters
- Query parameters
- Optional parameters
- Response models
- HTTP status codes
- `HTTPException`
- Request data validation
- Python type hints
- List filtering
- Automatic ID generation
- Interactive API documentation

## ⚠️ Note

Student records are stored in an in-memory Python list:

```python
students: List[Student]
```

Therefore, the data is temporary and resets whenever the FastAPI server restarts. The application does not use a database for persistent storage.

## 🧭 Navigation

- ⬅️ Back to [Unit 1](../README.md)
- 📖 Back to [Theory](../README.md)
- 🏠 Back to [Main Repository](../../README.md)

## 👩‍💻 Submitted By
HRISHITHA BADAVATH
590015596
**Course:** Backend Development
**University:** UPES

## 📝 Summary

Theory — Unit 1, Day 3: Implementation of a Student Management CRUD REST API using FastAPI and Pydantic.
