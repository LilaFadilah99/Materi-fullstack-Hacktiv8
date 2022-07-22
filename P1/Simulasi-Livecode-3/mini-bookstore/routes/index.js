const router = require('express').Router();
const Controller = require('../controllers');
const authorRoute = require('./author');
const bookRoute = require('./book');

router.get('/', Controller.home);
router.use('/authors', authorRoute);
router.use('/books', bookRoute);

module.exports = router;