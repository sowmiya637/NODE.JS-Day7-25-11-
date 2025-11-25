
# Express Cookie Example using cookie-parser

This is a simple Node.js project demonstrating **cookie management** using **Express.js** and the `cookie-parser` middleware.  
It shows how to set, read, and clear cookies on the client.

---

## Table of Contents
- [Concepts](#concepts)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Concepts

### 1. What is a Cookie?
A **cookie** is a small piece of data stored in the client’s browser.  
- Commonly used for **session management**, **personalization**, and **tracking**.  
- Sent back to the server automatically with each request to the same domain.

### 2. Why Use Cookies?
- Store user-specific information temporarily or permanently.  
- Can store **session identifiers**, **preferences**, or **authentication tokens**.  

### 3. cookie-parser
`cookie-parser` is a middleware in Express.js that:
- Parses cookies attached to the client request (`req.cookies`).  
- Allows you to **read, set, and clear cookies** easily.

### 4. Key Methods
| Method                | Description |
|----------------------|-------------|
| `res.cookie(name, value, options)` | Sets a cookie with name, value, and options like `maxAge` or `httpOnly`. |
| `req.cookies`         | Reads cookies sent by the client. |
| `res.clearCookie(name)` | Deletes a specific cookie from the client. |

---

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
````

2. Install dependencies:

```bash
npm install express cookie-parser
```

3. Start the server:

```bash
node index.js
```

---

## Usage

### Set a Cookie

**GET** `http://localhost:3000/set-cookie`

* Sets a cookie `username=Sowmiya` with:

  * `maxAge: 60000` → expires after 1 minute
  * `httpOnly: true` → not accessible via JavaScript

**Response:**

```
Cookie set!
```

### Read Cookies

**GET** `http://localhost:3000/get-cookie`

**Response:**

```json
{
  "username": "Sowmiya"
}
```

### Clear a Cookie

**GET** `http://localhost:3000/clear-cookie`

* Deletes the `username` cookie.

**Response:**

```
Cookie cleared!
```

---

## API Endpoints

| Endpoint        | Method | Description                 |
| --------------- | ------ | --------------------------- |
| `/set-cookie`   | GET    | Sets a cookie on the client |
| `/get-cookie`   | GET    | Reads all cookies           |
| `/clear-cookie` | GET    | Clears a specific cookie    |

