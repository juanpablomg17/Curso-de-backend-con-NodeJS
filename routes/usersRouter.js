const express = require("express");
const faker = require("faker");
const Service = require('../services/userService');
const router = express.Router();

const service = new Service();


router.get("/", (req, res) => {
    const users = service.list();
    res.json(users);
 });


 router.get("/:userID", (req, res) => {
   const {userID} = req.params;
   const user = service.findOne(userID);
   res.json(user);
 })
 


module.exports = router;
