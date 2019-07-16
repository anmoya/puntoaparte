const db = require('../models');
// Buscar schema para validacion

class ReviewHandler {
    static async getReviews(req, res){
        db.Review.findAll().then(result => res.json(result)).catch(err => res.json(err));
    }

    static async addReview(req, res)
    {
        console.log(req.body);
        db.Review.create({
            title: req.body.title,
            text: req.body.text,
            date: req.body.date,
            likes: req.body.likes,
            BookId: req.body.BookId
        })
        .then( result => res.json( result ))
        .catch ( err => res.json(err));
    }
}

module.exports = ReviewHandler;