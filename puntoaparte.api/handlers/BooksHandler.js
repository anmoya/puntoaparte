const db = require("../models");
const { bookSchema } = require("../validators");
const Joi = require("@hapi/joi");
const to = require("await-to-js").default;
const { PayloadException } = require("../_utils/exceptions");

const JoiErrorHandler = errorArray => {
  let obj = {};
  errorArray.map((item, index) => {
    obj[`Error[${index}]`] = item.message;
  });
  return obj;
};

class BooksHandler {
  static async getBooks(req, res) {
    const [err, books] = await to(db.Book.findAll());
    if (!books)
      res.json(
        PayloadException(
          "No books found. Contact administrator",
          "No data found",
          404
        )
      );
    if (books) return res.json(books);
    return res.json(err);
  }

  static async addBook(req, res) {
    const validation = Joi.validate(req.body, bookSchema);
    console.log(req.body);
    if (validation.error) return res.json(validation);

    db.Book.create({
      title: req.body.title,
      isbn: req.body.isbn,
      subtitle: req.body.subtitle,
      abstract: req.body.abstract,
      price: req.body.price,
      year: req.body.year,
      AuthorId: req.body.AuthorId
    })
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }

  static async updateBook(req, res) {
    const idbook = req.body.id;
    //const validation = Joi.validate(req.body.book, bookSchema);
    console.log(req.body);
    //if (validation.error) return res.json(validation);

    db.Book.update(
      {
        title: req.body.book.title,
        isbn: req.body.book.isbn,
        subtitle: req.body.book.subtitle,
        abstract: req.body.book.abstract,
        price: req.body.book.price,
        year: req.body.book.year,
        AuthorId: req.body.book.AuthorId
      },
      {
        where: {
          id: idbook
        }
      }
    )
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
}

module.exports = BooksHandler;
