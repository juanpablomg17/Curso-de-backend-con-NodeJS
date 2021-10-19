const { application } = require("express");
const express = require("express");
const faker = require("faker");

const app = express();
const port = 3001;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
  console.log(`Listening at http://localhost:${port}`);
});


app.get("/categories", (req, res) =>{
  res.send("Hola, soy una nueva ruta");
});

app.get("/products", (req, res) =>{
  const products = [];
  const {size} = req.query;
  const limit = size | 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),


    })
    
  }
  res.json(products);
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

app.get("/users", (req, res) => {
   const {limit, offset} = req.query;

   if (limit && offset){
     res.json({
       limit,
       offset
     })
   } 
   else{
     res.send('No Hay parámetros')
   }

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

