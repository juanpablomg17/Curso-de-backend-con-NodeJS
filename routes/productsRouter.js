
const express = require("express");
const faker = require("faker");

const router = express.Router();


router.get("/", (req, res) =>{
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

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});


router.get("/:id", (req, res)=> {

  // el objeto req del callback, puede recibir los parámetros de la ruta, devuelve un objeto.

  // esta sintaxis de es6 permite obtener sólo el parámetro id del objeto params
  const {id} = req.params;
  res.json({
    id,
    name: 'Product 3',
    price: 3000
  });
});



router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    message: "creation",
    data: body
  });
});

module.exports = router;
