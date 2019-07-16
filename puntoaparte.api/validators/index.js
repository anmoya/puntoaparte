const Joi = require("@hapi/joi");

const bookSchema = Joi.object().keys({
  isbn: Joi.string()
    .min(10)
    .max(15)
    .required(),
  title: Joi.string()
    .min(3)
    .max(60)
    .required(),
  subtitle: Joi.string()
    .min(3)
    .max(100)
    .required(),
  abstract: Joi.string()
    .min(50)
    .max(600)
    .required(),
  quantity: Joi.number()
    .integer()
    .min(0),
  price: Joi.number()
    .integer()
    .min(0),
  year: Joi.number()
    .integer()
    .max(2050),
  AuthorId: Joi.number()
    .integer()
    .min(1)
});

authorSchema = Joi.object().keys({
  firstname: Joi.string()
    .min(2)
    .max(255)
    .required(),
  lastname: Joi.string()
    .min(2)
    .max(255)
    .required(),
  city: Joi.string()
    .min(2)
    .max(255)
    .required(),
  country: Joi.string()
    .min(2)
    .max(255)
    .required(),
  born: Joi.date().iso()
});

module.exports = {
  bookSchema,
  authorSchema
};
