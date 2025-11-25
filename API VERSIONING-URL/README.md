
# Express API Versioning Example (URL Versioning)

This is a simple Node.js project demonstrating **API versioning using URLs** in Express.js.  
It allows clients to request different versions of an API by specifying the version in the URL path.

---

## Table of Contents
- [Concepts](#concepts)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Concepts

### 1. What is API Versioning?
API versioning is a technique to manage **updates or changes** in your API without breaking existing clients.  
- Old clients can continue using previous versions.  
- New clients can access the latest version.  

### 2. URL Versioning
URL versioning includes the version number in the API endpoint path.  

**Example:**  
```

GET /api/v1/products   → version 1
GET /api/v2/products   → version 2

````

Advantages:
- Clear and explicit versioning
- Easy for clients to understand
- Works well for public RESTful APIs

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

Open your browser or Postman and test the endpoints:

### Version 1

**GET** `http://localhost:3000/api/v1/products`

**Response:**

```json
{
  "version": "v1",
  "products": ["Phone", "Laptop"]
}
```

### Version 2

**GET** `http://localhost:3000/api/v2/products`

**Response:**

```json
{
  "version": "v2",
  "products": [
    { "name": "Phone", "price": 15000 },
    { "name": "Laptop", "price": 50000 }
  ]
}
```

---

## API Endpoints

| Endpoint           | Method | Description                          |
| ------------------ | ------ | ------------------------------------ |
| `/api/v1/products` | GET    | Returns products in version 1 format |
| `/api/v2/products` | GET    | Returns products in version 2 format |

