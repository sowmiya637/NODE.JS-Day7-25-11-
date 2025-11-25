
# Express Session Example

This is a simple Node.js project demonstrating **session management** using `express-session`.  



## Concepts

### 1. What is a Session?
A **session** is a way to store data on the server for individual users against a unique session ID.  
- The session ID is usually stored in a **cookie** on the client side.
- Sessions are commonly used for **login authentication**, shopping carts, and user preferences.

### 2. Why Use Sessions?
- HTTP is **stateless**, meaning the server does not remember users between requests.
- Sessions allow the server to **remember information** across multiple requests from the same client.

### 3. Express-session
`express-session` is a middleware in Express.js that:
- Creates a **session object** for each client.
- Stores session data **server-side**.
- Sends a **session ID cookie** to the client.

### 4. Key Options in express-session

| Option             | Description |
|-------------------|-------------|
| `secret`          | A string used to sign the session ID cookie. Ensures data integrity. |
| `resave`          | If `false`, prevents saving the session if it hasn't changed. |
| `saveUninitialized` | If `true`, saves a new session even if it has no data. Useful for login or flash messages. |
| `cookie.maxAge`   | Time in milliseconds for the session cookie to expire (e.g., `1000 * 60 * 10` = 10 minutes). |

---

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
````

2. Install dependencies:

```bash
npm install express express-session
```

---

## Usage

1. Start the server:

```bash
node index.js
```

2. Open your browser or Postman and test the routes:

* **Create session (Login):**
  `GET http://localhost:3000/login`
  Response: `Session created!`

* **Access session (Dashboard):**
  `GET http://localhost:3000/dashboard`
  Response:

  * `Welcome Sowmiya` if session exists
  * `Please login first` if session does not exist

* **Destroy session (Logout):**
  `GET http://localhost:3000/logout`
  Response: `Logged out!`

---

## Routes

| Route        | Method | Description                     |
| ------------ | ------ | ------------------------------- |
| `/login`     | GET    | Creates a session with username |
| `/dashboard` | GET    | Accesses the session data       |
| `/logout`    | GET    | Destroys the session            |


Do you want me to add that?
```
