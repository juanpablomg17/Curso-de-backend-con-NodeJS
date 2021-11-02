const Joi = require('joi');

const id = Joi.string().uuid().required();
const name = Joi.string().min(2).max(20).required();
const lastname = Joi.string().min(2).max(20).required();
const email = Joi.string().email({minDomainSegments: 2}).required();
const phone = Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required()
const password = Joi.string().min(8).max(20).required();

const createUserSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  email: email.required(),
  phone: phone.required(),
  password: password.required(),
  
});

const updateUserShema = Joi.object({
  name: name,
  lastname: lastname,
  email: email,
  phone:phone
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserShema, getUserSchema }