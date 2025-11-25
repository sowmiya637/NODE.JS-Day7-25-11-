
# Express API Versioning Example (Query Parameter)

This is a simple Node.js project demonstrating **API versioning** using **query parameters** in Express.js.  
It allows clients to request different versions of an API without breaking existing functionality.



## Concepts

### 1. What is API Versioning?
API versioning is a strategy to manage **changes or updates** in your API without breaking existing clients.  
- When you release a new version, old clients can continue using the previous version.  
- New clients can access the latest version.

### 2. Why Use Query Parameter Versioning?
Query parameter versioning allows the client to specify the API version in the URL as a query string.  

**Example:**  
```

GET /products?version=2

````

Advantages:
- Easy to implement
- Flexible, no need to change routes
- Works well for public APIs

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

Open your browser or Postman and test the endpoint:

### Get Products (Default Version v1)

**GET** `http://localhost:3000/products`

**Response:**

```json
{
  "version": "v1",
  "products": ["Phone", "Laptop"]
}
```

### Get Products (Version v2)

**GET** `http://localhost:3000/products?version=2`

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

| Endpoint    | Method | Query Parameter      | Description                           |
| ----------- | ------ | -------------------- | ------------------------------------- |
| `/products` | GET    | `version` (optional) | Returns products based on API version |

