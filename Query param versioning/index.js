const express = require("express");
const app = express();
app.use(express.json());

// Query parameter versioning
app.get("/products", (req, res) => {
  const version = req.query.version; // get ?version=2

  if (version === "2") {
    res.json({
      version: "v2",
      products: [
        { name: "Phone", price: 15000, stock: 50 },
        { name: "Laptop", price: 50000, stock: 20 },
      ],
    });
  } else {
    res.json({ version: "v1", products: ["Phone", "Laptop"] });
  }
});


app.listen(3000, () => console.log("Server running at http://localhost:3000"));
