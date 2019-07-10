const db = require('../models');

class BooksHandler {
    static async getBook(req, res){
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