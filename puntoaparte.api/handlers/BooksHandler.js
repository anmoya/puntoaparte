const db = require("../models");
const { bookSchema } = require("../validators");
const Joi = require("@hapi/joi");

const JoiErrorHandler = errorArray => {
  let obj = {};
  errorArray.map((item, index) => {
    obj[`Error[${index}]`] = item.message;
  });
  return obj;
};

class BooksHandler {
  static async getBook(req, res) {
    const validation = Joi.validate(req.body, bookSchema);

    if (validation.error)
      return res.json(JoiErrorHandler(validation.error.details));

    db.Book.create({
      title: req.body.title,
      isbn: req.body.isbn,
      subtitle: req.body.subtitle,
      abstract: req.body.abstract,
      price: req.body.price,
      year: req.body.year,
      author_id: req.body.author_id
    })
      .then(result => res.json(result))
      .catch(error => res.json({
          type: error.name,
          erro: error.parent.detail
      }));
  }
}

module.exports = BooksHandler;
