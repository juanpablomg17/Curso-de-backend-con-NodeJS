const express = require("express");
const validatorHandler = require('./../middlewares/validators/validatorHandler');
const userService = require('../services/userService');
const { createUserSchema, updateUserShema, getUserSchema } = require('./../schemas/userSchema')

const router = express.Router();
const service = new userService();


router.get("/", async (req, res, next) => {
  try {
    const users = await service.list();
    res.json(users);
  } catch (error) {
    next(error);
  }
    
 });


 router.get("/:id",validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const {userID} = req.params;
      const user = service.findOne(userID);
      res.json(user);  
    } catch (error) {
      
    }
    
  }
   )
 


module.exports = router;
