const { application } = require("express");
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
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    },
    {
      name: 'Product 3',
      price: 3000
    }
  ]);
  console.log(`Listening at http://localhost:${port}`);
});


app.get("/products/:id", (req, res)=> {

  // el objeto req del callback, puede recibir los parámetros de la ruta, devuelve un objeto.

  // esta sintaxis de es6 permite obtener sólo el parámetro id del objeto params
  const {id} = req.params;
  res.json({
    id,
    name: 'Product 3',
    price: 3000
  });
});

app.get("/categories/:categoryId/products/:productId", (req, res) => {
    const {categoryId, productId} = req.params;
    res.json({
      categoryId,
      productId,
    })

})


app.listen(port, () =>{
  console.log("My port: " + port);
});

