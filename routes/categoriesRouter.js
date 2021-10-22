const express = require("express");
const router = express.Router();
const Service = require('../services/categoryService');

const service = new Service();

router.get("/categories", (req, res) =>{
    res.send("Hola, soy una nueva ruta");
  });

router.get("/", (req, res) => {
  const categories = service.list();

  res.json({categories});
})

router.get("/:categoryID", (req, res) => {
  const {categoryID} = req.params;
  const categoryTOFind = service.findOne(categoryID);
  res.json({categoryTOFind});
})
  
  
router.get("/:categoryId/products/:productId", (req, res) => {
      const {categoryId, productId} = req.params;
      res.json({
        categoryId,
        productId,
      })
  
  })


  module.exports = router;