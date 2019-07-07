const express = require('express');
const router = express.Router();
const LandingHandler = require('../handlers/LandingHandler');

router.get('/test', LandingHandler.test );
router.get('/date', LandingHandler.getDate );
router.get('/date', LandingHandler.getBooks );

module.exports = router;