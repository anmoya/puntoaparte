const express = require('express');
const router = express.Router();
const LandingHandler = require('../handlers/LandingHandler');
const BooksHandler = require('../handlers/BooksHandler');
const AuthorHandler = require('../handlers/AuthorHandler');

router.get('/test', LandingHandler.test );
router.get('/date', LandingHandler.getDate );
router.get('/', LandingHandler.getBooks );
router.get('/books', BooksHandler.getBook );
router.get('/checkAuthor', AuthorHandler.checkAuthor );
router.get('/getAuthors', AuthorHandler.getAllAuthors );

module.exports = router;