# TaskFlow API

## Overview

TaskFlow API is a RESTful backend service built using Node.js and Express.
It provides endpoints to manage tasks including creating, retrieving, updating, and deleting tasks.

This project replaces client-side storage with a backend API and demonstrates core backend development concepts such as REST architecture, middleware usage, and HTTP communication.

---

## Project Objective

The objective of this project is to design and implement a secure backend API that supports task management functionality for the TaskFlow Lite application.

---

## Features

* RESTful API design
* CRUD operations for tasks
* Middleware implementation (CORS, logging, security)
* Input validation
* Proper HTTP status code handling
* Error handling middleware
* In-memory data storage
* API testing with Postman

---

## Tech Stack

* Node.js
* Express.js
* CORS
* Morgan
* Helmet
* Dotenv

---

## Project Structure

taskflow-api
│
├── server.js
├── package.json
├── .env
│
└── src
  ├── routes
  │  └── taskRoutes.js
  │
  ├── controllers
  │  └── taskController.js
  │
  ├── middleware
  │  └── security.js
  │
  └── utils

---

## Installation

### 1. Clone the repository

git clone <repository_url>

### 2. Navigate to project folder

cd taskflow-api

### 3. Install dependencies

npm install

### 4. Create environment file

Create `.env` file in the root directory.

PORT=5000
NODE_ENV=development

### 5. Start the server

node server.js

Server will start at:

http://localhost:5000

---

## API Endpoints

### Get All Tasks

GET /api/tasks

Response:
200 OK

---

### Get Single Task

GET /api/tasks/:id

Response:
200 OK
404 Not Found

---

### Create Task

POST /api/tasks

Request Body:
{
"text": "Complete assignment"
}

Response:
201 Created
400 Bad Request

---

### Update Task

PUT /api/tasks/:id

Request Body:
{
"text": "Updated task",
"completed": true
}

Response:
200 OK
404 Not Found

---

### Delete Task

DELETE /api/tasks/:id

Response:
204 No Content
404 Not Found

---

## Middleware Used

### CORS

Allows cross-origin requests from frontend applications.

### Morgan

Logs HTTP requests for monitoring and debugging.

### Express JSON Parser

Parses incoming JSON request bodies.

### Security Headers

Adds security-related HTTP headers.

---

## Testing

API endpoints were tested using Postman to verify:

* Correct HTTP status codes
* Proper response structure
* Error handling
* CRUD functionality

---

## Future Improvements

* Integration with database (MongoDB / PostgreSQL)
* Authentication and authorization
* Rate limiting
* API documentation with Swagger
* Deployment to cloud platforms

---

## Learning Outcomes

* REST API design principles
* Express.js application structure
* Middleware implementation
* HTTP request/response lifecycle
* API testing and debugging

---

## Author

Yash Chavhan : Backend API Development Assignment
