
# Express File Upload Example using Multer

This is a simple Node.js project demonstrating **file upload** using **Express.js** and **Multer**.  
Users can upload files (images, documents, etc.) which are stored on the server.

---

## Table of Contents
- [Concepts](#concepts)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [License](#license)

---

## Concepts

### 1. What is Multer?
Multer is a **middleware for handling multipart/form-data**, which is primarily used for uploading files.  
- Integrates easily with Express.js.
- Saves files to disk or memory.
- Supports single or multiple file uploads.

### 2. How File Upload Works
1. Client sends a **POST request** with a file in `multipart/form-data` format.  
2. Multer middleware processes the file and saves it based on configuration (disk storage, filename, etc.).  
3. Server responds with success message and file details.

### 3. Key Multer Concepts
| Option/Method      | Description |
|-------------------|-------------|
| `diskStorage`      | Saves files to a folder on the server's disk. |
| `destination`      | Folder where uploaded files are stored. |
| `filename`         | Sets the file name; often made unique using timestamp. |
| `upload.single("image")` | Accepts a single file with the field name `image`. |
| `req.file`         | Contains uploaded file information after successful upload. |

---

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
````

2. Install dependencies:

```bash
npm install express multer
```

3. Create an `uploads` folder in the project root:

```bash
mkdir uploads
```

4. Start the server:

```bash
node index.js
```

---

## Usage

### Upload via Postman

1. Method: POST
2. URL: `http://localhost:3000/upload`
3. Body → form-data → Key: `image` → Select file
4. Send request → Server responds with:

```json
{
  "message": "File uploaded successfully!",
  "file": {
    "fieldname": "image",
    "originalname": "example.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "uploads",
    "filename": "1698000000000.jpg",
    "path": "uploads/1698000000000.jpg",
    "size": 12345
  }
}
```

### Upload via Browser Form

Open the HTML file:

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="image" />
  <button type="submit">Upload</button>
</form>
```

* Select a file and submit.
* File will be saved in the `uploads` folder.

---

## API Endpoint

| Endpoint  | Method | Form Field Name | Description                     |
| --------- | ------ | --------------- | ------------------------------- |
| `/upload` | POST   | `image`         | Uploads a single file to server |

