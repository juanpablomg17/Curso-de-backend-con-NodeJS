const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
  console.log(`Listening at http://localhost:${port}`);
});


app.get("/categories", (req, res) =>{
  res.send("Hola, soy una nueva ruta");
  console.log(`Listening at http://localhost:${port}`);
});

app.get("/products", (req, res) =>{
  res.json({
    name: 'Product 1',
    price: 1000
  });
  console.log(`Listening at http://localhost:${port}`);
});

app.listen(port, () =>{
  console.log("My port: " + port);
});

