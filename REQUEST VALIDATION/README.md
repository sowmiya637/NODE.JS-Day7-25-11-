
# Express Validator Example - User Registration API

This is a simple Node.js project demonstrating **request validation** in Express.js using `express-validator`. It validates user input for a registration API.

---

## Table of Contents
- [Concepts](#concepts)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [License](#license)

---

## Concepts

### 1. What is Request Validation?
Request validation ensures that **incoming data** sent by the client meets expected rules before processing it.  
- Prevents invalid or malicious data from reaching your database or application logic.
- Common in APIs for **user registration**, **login**, and **form submissions**.

### 2. Why Use express-validator?
`express-validator` is a popular middleware for validating and sanitizing request data in Express.js.  
- Provides **built-in validators** (e.g., `isEmail`, `isLength`, `notEmpty`).  
- Returns clear **error messages** for invalid input.  
- Helps maintain **data integrity** and **security**.

### 3. How Validation Works
1. Define validation rules for fields in the request body using `body()`.  
2. Run `validationResult(req)` to check if the request violates any rules.  
3. If errors exist, return them to the client with a `400 Bad Request` response.  
4. If valid, proceed to process the request (e.g., save user to database).

---

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
````

2. Install dependencies:

```bash
npm install express express-validator
```

3. Start the server:

```bash
node index.js
```

---

## Usage

Use **Postman** or any API client to test the endpoint:

### Register User

**POST** `http://localhost:3000/register`

**Request Body (JSON):**

```json
{
  "username": "Sowmiya",
  "email": "sowmiya@example.com",
  "password": "mypassword"
}
```

**Validation Rules:**

* `username` → required, minimum 3 characters
* `email` → must be a valid email
* `password` → minimum 6 characters

**Response (Success):**

```json
{
  "message": "User registered successfully",
  "user": {
    "username": "Sowmiya",
    "email": "sowmiya@example.com"
  }
}
```

**Response (Validation Error):**

```json
{
  "errors": [
    {
      "msg": "Username must be at least 3 characters",
      "param": "username",
      "location": "body"
    }
  ]
}
```

---

## API Endpoint

| Endpoint    | Method | Request Body | Description                      |
| ----------- | ------ | ------------ | -------------------------------- |
| `/register` | POST   | JSON         | Registers a user with validation |

