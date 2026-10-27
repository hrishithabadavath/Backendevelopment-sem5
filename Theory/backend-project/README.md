📖 Theory — Unit 1, Day 4: Session Management in Express.js

📌 Overview

This implementation demonstrates session management using Express.js and express-session.

The application creates a session during login, stores a username in the session, accesses the session data on a profile page, and destroys the session during logout.

🎯 Objective

To understand:

Express Sessions
Creating session variables
Accessing session data
Session expiration
Destroying sessions
Basic login/profile/logout flow
💻 Technologies Used

Node.js
Express.js
JavaScript
express-session
🔐 Session Configuration

app.use(
    session({
        secret: 'mySecretKey',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000
        }
    })
);
The session cookie has a lifetime of:

60000 milliseconds = 1 minute
🔑 Login — Create Session

Route

GET /login
The username is stored in the session:

req.session.username = 'JohnDoe';
Response:

Session started for JohnDoe
👤 Profile — Access Session

Route

GET /profile
The application checks:

if (req.session.username)
If the session exists:

Welcome JohnDoe
Otherwise:

Please log in first.
🚪 Logout — Destroy Session

Route

GET /logout
The session is destroyed using:

req.session.destroy()
After successful destruction:

Session destroyed successfully
🔄 Application Flow

/login
   ↓
Create Session
   ↓
Store username
   ↓
/profile
   ↓
Read Session Data
   ↓
/logout
   ↓
Destroy Session
🛣️ Routes

Method	Route	Purpose
GET	/login	Create session
GET	/profile	Access session data
GET	/logout	Destroy session
📂 Project Structure

Day_4(Session)/
│
├── app.js
├── package.json
└── README.md
🚀 How to Run

Install dependencies:

npm install
Run the application:

node app.js
Then test in this order:

http://localhost:3000/login
http://localhost:3000/profile
http://localhost:3000/logout
http://localhost:3000/profile
After logout, /profile should display:

Please log in first.
📚 Concepts Demonstrated

Express.js
express-session
Session middleware
req.session
Session variables
Session cookies
Cookie expiration
req.session.destroy()
Basic session-based authentication flow
🧭 Navigation

⬅️ Back to Unit 1

📖 Back to Theory

🏠 Back to Main Repository

👩‍💻 Submitted By

Hrishitha
SAP ID: 590019239
Course: Backend Development
University: UPES

Theory — Unit 1, Day 4: Demonstration of creating, accessing, expiring, and destroying sessions using Express.js.