🧪 Experiment 5 — JavaScript Fundamentals

📌 Experiment Overview

This experiment demonstrates the fundamentals of JavaScript using arrays, objects, functions, string methods, and basic data manipulation operations.

The output of the JavaScript program is displayed in the browser console.

🎯 Objective

The objective of this experiment is to understand and implement basic JavaScript concepts, including:

Arrays
Objects
Functions
String methods
Array operations
Object operations
Console output
💻 Technologies Used

HTML5
JavaScript
Browser Developer Console
✨ Concepts Implemented

1. JavaScript Arrays

An array of fruits is created:

const fruits = ['Apple', 'Banana', 'Mango'];
The push() method is used to add a new element:

fruits.push('Orange');
Result:

Apple, Banana, Mango, Orange
2. JavaScript Objects

A student object is created containing multiple properties:

const student = {
    name: 'John Doe',
    age: 20,
    course: 'Backend Development'
};
Individual object properties are accessed using dot notation:

student.name
3. JavaScript Functions

A function named greet() is created:

function greet(name) {
    return `Hello, ${name}! Welcome to Backend Development Lab.`;
}
The function accepts a name as an argument and returns a greeting message.

Example:

greet('Student');
Output:

Hello, Student! Welcome to Backend Development Lab.
🔤 String Methods

The experiment demonstrates commonly used JavaScript string methods.

Original string:

const str = "Backend Development";
toUpperCase()

Converts the complete string to uppercase.

str.toUpperCase();
Output:

BACKEND DEVELOPMENT
toLowerCase()

Converts the complete string to lowercase.

str.toLowerCase();
Output:

backend development
split()

Splits a string into an array using the specified delimiter.

const words = str.split(" ");
Output:

["Backend", "Development"]
📦 Array Operations

The experiment also demonstrates basic operations on an array.

Initial array:

let items = ['Node', 'Express'];
➕ Add

The push() method adds an element to the end of the array.

items.push('MongoDB');
Result:

['Node', 'Express', 'MongoDB']
👀 Read

An array element is accessed using its index:

items[0];
Output:

Node
✏️ Update

An existing array element is changed using its index:

items[0] = 'Node.js';
Updated array:

['Node.js', 'Express', 'MongoDB']
👤 Object Operations

The experiment demonstrates basic operations on JavaScript objects.

Initial object:

let user = {
    name: "John",
    role: "Dev"
};
➕ Add

A new property is added:

user.age = 25;
The object becomes:

{
    name: "John",
    role: "Dev",
    age: 25
}
👀 Read

An object property is accessed using dot notation:

user.name;
Output:

John
✏️ Update

An existing object property is modified:

user.role = "Senior Dev";
The updated object becomes:

{
    name: "John",
    role: "Senior Dev",
    age: 25
}
🖥️ Console Output

The experiment uses:

console.log();
to display the results of different JavaScript operations.

To view the output:

Open the webpage in a browser.
Press F12 or Ctrl + Shift + I.
Select the Console tab.
Observe the JavaScript output.
📂 Project Structure

Experiment_5/
│
├── index.html
├── script.js
└── README.md
▶️ How to Run

Step 1

Open the Experiment_5 folder in VS Code.

Step 2

Open:

index.html
using a browser or Live Server.

Step 3

Open Browser Developer Tools:

F12
Step 4

Go to:

Console
The output of all JavaScript operations will be displayed there.

🌐 Live Demo

This experiment uses frontend HTML and JavaScript, so it can run directly through GitHub Pages.

🚀 Open Live Experiment

Open the browser developer console after opening the live experiment to view the JavaScript results.
📚 Concepts Demonstrated

JavaScript variables
Arrays
Array indexing
push()
Objects
Object properties
Dot notation
Functions
Function parameters
Return values
Template literals
String methods
toUpperCase()
toLowerCase()
split()
Add operations
Read operations
Update operations
console.log()
🧭 Navigation

⬅️ Back to Lab Experiments

🏠 Back to Main Repository

👩‍💻 Submitted By

Hrishitha badavath
SAP ID: 590015596
Course: Backend Development
University: UPES

Experiment 5: Demonstration of JavaScript fundamentals using arrays, objects, functions, string methods, and basic data manipulation.