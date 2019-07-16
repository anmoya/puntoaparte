const db = require("../models");
const { authorSchema } = require("../validators");
const Joi = require("@hapi/joi");

const JoiErrorHandler = errorArray => {
  let obj = {};
  errorArray.map((item, index) => {
    obj[`Error[${index}]`] = item.message;
  });
  return obj;
};

class AuthorHandler {
  static async getAutor(req, res) {
    const validation = Joi.validate(req.body, bookSchema);

    if (validation.error)
      return res.json(JoiErrorHandler(validation.error.details));

    
  }

  static async addAuthor(req, res)
  {
    db.Author.create({
      first: req.body.first,
      last: req.body.last,
      city: req.body.city
    })
      .then(result => res.json(result))
      .catch(error => res.json({
          type: error.name,
          erro: error.parent.detail
      }));
  }

  static async checkAuthor(req, res){
      const id = req.body.id;

      db.Author.findAll({
        where: {
          id: id
        }
      })
      .then( result => res.json( result ))
      .catch( error => res.json(error));

  }

  static async getAllAuthors(req, res){
      db.Author.findAll({})
      .then( result => res.json(result))
      .catch( error => res.json(error));
  }
}

module.exports = AuthorHandler;