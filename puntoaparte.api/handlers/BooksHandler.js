const db = require('../models');
const { bookSchema } = require('../validators');
const Joi = require("@hapi/joi");


class BooksHandler {
    static async getBook(req, res){

        const bodyBook = req.body;
        console.log(req.body);

        const validation = Joi.validate(bodyBook, bookSchema);
        
        return res.json(validation);
        db.Book.create({
            title: req.body.title,
            subtitle: req.body.subtitle,
            abstract : req.body.abstract,
            price: req.body.price,
            year: req.body.year,
            author_id: req.body.author_id
          }).then( (result) => res.json(result) )
    }
}

module.exports = BooksHandler;