const express = require('express');
const router = express.Router();
const LandingHandler = require('../handlers/LandingHandler');
const BooksHandler = require('../handlers/BooksHandler');

router.get('/test', LandingHandler.test );
router.get('/date', LandingHandler.getDate );
router.get('/', LandingHandler.getBooks );
router.get('/books', BooksHandler.getBook );

module.exports = router;