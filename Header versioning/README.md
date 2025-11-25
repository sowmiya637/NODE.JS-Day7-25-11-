
# Express API Versioning Example (Header Versioning)

This is a simple Node.js project demonstrating **API versioning using request headers** in Express.js.  
It allows clients to request different versions of an API by specifying the version in the `Accept` header.



## Concepts

### 1. What is API Versioning?
API versioning is a strategy to manage **changes or updates** in your API without breaking existing clients.  
- Older clients can continue using the previous API version.  
- New clients can access the latest version.

### 2. Header Versioning
Header versioning allows the client to specify the API version in the **request headers** rather than the URL.  
- This keeps URLs clean.  
- The server checks the `Accept` header to determine which version to return.

**Example Header for Version 2:**
```

Accept: application/vnd.myapp.v2+json

````

Advantages:
- Keeps URLs consistent and clean
- Works well for RESTful APIs
- Allows flexible versioning without changing endpoints

---

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
````

2. Install dependencies:

```bash
npm install express
```

3. Start the server:

```bash
node index.js
```

---

## Usage

Use **Postman** or any HTTP client to test the endpoint:

### Default Version (v1)

**GET** `http://localhost:3000/products`
**Headers:** None or any `Accept` header not matching v2

**Response:**

```json
{
  "version": "v1",
  "products": ["Phone", "Laptop"]
}
```

### Version 2 (v2)

**GET** `http://localhost:3000/products`
**Headers:**

```
Accept: application/vnd.myapp.v2+json
```

**Response:**

```json
{
  "version": "v2",
  "products": [
    { "name": "Phone", "price": 15000, "stock": 50 },
    { "name": "Laptop", "price": 50000, "stock": 20 }
  ]
}
```

---

## API Endpoint

| Endpoint    | Method | Header                                  | Description                           |
| ----------- | ------ | --------------------------------------- | ------------------------------------- |
| `/products` | GET    | `Accept: application/vnd.myapp.vX+json` | Returns products based on API version |

