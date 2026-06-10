# 🎓 Student Management System

A React-based Student Management System developed as part of internship learning and practice to understand modern web development concepts such as React, API integration, CRUD operations, frontend-backend communication, state management, and RESTful APIs.

---

## 📌 Project Overview

This project was built to gain hands-on experience with:

* React.js fundamentals
* Component-based architecture
* API integration using Axios
* CRUD (Create, Read, Update, Delete) operations
* Frontend and backend communication
* State management using React Hooks
* REST API concepts
* JSON data handling

The application allows users to manage student records through a simple and interactive interface.

---

## 🎯 Learning Objectives

The primary goal of this project is educational rather than production deployment.

Through this project, the following concepts are explored:

### React Fundamentals

* Functional Components
* JSX
* State Management (`useState`)
* Side Effects (`useEffect`)
* Component Re-rendering

### API Integration

* Sending HTTP requests
* Consuming REST APIs
* Handling asynchronous operations
* Processing JSON responses

### CRUD Operations

* Create new student records
* Read student data from API
* Update existing student information
* Delete student records

### Frontend ↔ Backend Communication

Understanding how:

```text
React Frontend
       ↓
HTTP Request
       ↓
REST API
       ↓
Backend Server
       ↓
Database
```

work together to create a complete web application.

---

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3

### API Communication

* Axios

### Backend (Mock API)

* JSON Server

### Data Format

* JSON

---

## 📂 Project Structure

```text
student-management-system
│
├── src
│   ├── components
│   ├── App.jsx
│   ├── App.css
│
├── db.json
├── package.json
└── README.md
```

---

## 🔄 CRUD Operations Implemented

### Create

Add new student records through a form interface.

```http
POST /students
```

### Read

Fetch and display all students from the API.

```http
GET /students
```

### Update

Modify existing student details.

```http
PUT /students/:id
```

### Delete

Remove student records.

```http
DELETE /students/:id
```

---

## 🌐 API Calling Workflow

### Step 1

React application loads.

### Step 2

`useEffect()` triggers an API request.

### Step 3

Axios sends an HTTP request.

```javascript
axios.get("/students")
```

### Step 4

JSON Server processes the request and returns data.

### Step 5

React updates the component state.

```javascript
setStudents(response.data)
```

### Step 6

React re-renders the UI and displays updated data.

---

## Key Concepts Practiced

### What is React?

React is a JavaScript library used for building dynamic and interactive user interfaces using reusable components.

### What is an API?

An API (Application Programming Interface) enables communication between different software systems.

### What is Axios?

Axios is a promise-based HTTP client used to send requests and receive responses from APIs.

### What is JSON Server?

JSON Server is a lightweight mock backend used to simulate REST APIs during development and learning.

### What is State?

State is React's internal memory used to store and manage data that affects the UI.

---

## 🚀 Running the Project

### Install Dependencies

```bash
npm install
```

### Start React Development Server

```bash
npm run dev
```

### Start JSON Server

```bash
npx json-server --watch db.json --port 3000
```

### Access Application

Frontend:

```text
http://localhost:5173
```

Backend API:

```text
http://localhost:3000/students
```

---

## 📚 Internship Learning Outcome

This project serves as a practical introduction to modern frontend development and API integration.

By completing this project, the following skills were strengthened:

* React development workflow
* API consumption
* CRUD implementation
* State management
* HTTP methods (GET, POST, PUT, DELETE)
* Frontend and backend interaction
* Debugging and development practices
* Understanding the architecture of modern web applications

---

## 🔮 Future Enhancements

* Search functionality
* Student filtering
* Pagination
* Authentication & Authorization
* Responsive dashboard UI
* Backend integration using Node.js and Express.js
* Database integration using MySQL or MongoDB
* Form validation
* Toast notifications
* Role-based access control

---

## 👨‍💻 Author

Developed as part of internship practice and self-learning to understand React, REST APIs, CRUD operations, and modern web application architecture.
