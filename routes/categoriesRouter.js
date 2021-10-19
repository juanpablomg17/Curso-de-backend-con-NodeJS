const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get("/categories", (req, res) =>{
    res.send("Hola, soy una nueva ruta");
  });
  
  
  router.get("/:categoryId/products/:productId", (req, res) => {
      const {categoryId, productId} = req.params;
      res.json({
        categoryId,
        productId,
      })
  
  })


  module.exports = router;