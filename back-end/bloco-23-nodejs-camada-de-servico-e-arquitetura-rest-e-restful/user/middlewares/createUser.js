const Joi = require('joi');
const UserModel = require('../models/User')

const userSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required()
});
 
const isValidCreateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) return next(error);

  next();
}

module.exports = isValidCreateUser