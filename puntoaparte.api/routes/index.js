const express = require('express');
const router = express.Router();
const LandingHandler = require('../handlers/LandingHandler');
const BooksHandler = require('../handlers/BooksHandler');
const AuthorHandler = require('../handlers/AuthorHandler');
const ReviewHandler = require('../handlers/ReviewHandler');
const CategoryHandler = require('../handlers/CategoryHandler');

// Landing Handler: for testing
router.get('/', LandingHandler.test );
router.get('/landing/date', LandingHandler.getDate );
router.get('/', LandingHandler.getBooks );

router.get('/categories', CategoryHandler.getCategories)

// Books Handler
router.get('/books', BooksHandler.getBooks );
//router.get('/books:id', BooksHandler.getBookById );
//router.put('/books/:id', BooksHandler.updateBook );
router.post('/books', BooksHandler.addBook );
// router.delete('/books/:id', BooksHandler.deleteBook );
// router.patch('/books:id', BooksHandler.patchBook );

// Author Handler
router.get('/checkAuthor', AuthorHandler.checkAuthor );
router.get('/getAuthors', AuthorHandler.getAllAuthors );
router.post('/authors', AuthorHandler.addAuthor );

// Review Handler
router.get('/reviews', ReviewHandler.getReviews );
router.post('/reviews', ReviewHandler.addReview );

module.exports = router;