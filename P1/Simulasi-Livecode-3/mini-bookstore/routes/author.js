const router = require('express').Router();
const Controller = require('../controllers/author');

router.get('/', Controller.getAuthors);

module.exports = router;