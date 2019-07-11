const Joi = require("@hapi/joi");

const bookSchema = Joi.object()
  .keys({
    title: Joi.string()
      .alphanum()
      .min(3)
      .max(60)
      .required(),
    subtitle: Joi.string()
      .alphanum()
      .min(3)
      .max(100)
      .required(),
    abstract: Joi.string()
      .alphanum()
      .min(50)
      .max(600)
      .required(),
    price: Joi.number()
      .integer()
      .min(0),
    year: Joi.number()
      .integer()
      .min(1900)
      .max(2050),
    author_id: Joi.number()
      .integer()
      .min(1)
  })
  .with("username", "birthyear")
  .without("password", "access_token");

module.exports = {
  bookSchema
};
