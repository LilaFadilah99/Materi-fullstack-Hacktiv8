const router = require('express').Router();
const Controller = require('../controllers/book');

router.get('/', Controller.getBooks);
router.get('/add', Controller.formAddBook);
router.post('/add', Controller.addBook);
router.get('/emptyList', Controller.emptyBook);
router.get('/buy/:id', Controller.buyBook);
router.get('/restock/:id', Controller.formRestockBook);
router.post('/restock/:id', Controller.restockBook);
router.get('/delete/:id', Controller.deleteBook);

module.exports = router;