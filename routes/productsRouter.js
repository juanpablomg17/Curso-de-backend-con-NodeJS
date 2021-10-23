
const express = require("express");
const ProductService = require('../services/productService');


const router = express.Router();
const service = new ProductService();


router.get("/", async (req, res) =>{
  const products = await service.find();
  res.json(products);
});



router.get("/:id", async (req, res)=> {
  const {id} = req.params;
  const  product = await service.findOne(id);
  res.json({product});
});



// the post method is to add 
router.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(201).json({
    message: 'create',
    data: newProduct,
  })
});


// the patch method is to update
router.patch("/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id,body);
    
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
    

    
});


// the delete method is to delete
router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const response = await service.delete(id);
    
    res.json(response);
});

module.exports = router;
