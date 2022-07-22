const router = require('express').Router();
const Controller = require('../controllers');

router.get('/', Controller.showAll);
router.get('/add', Controller.formAdd);
router.post('/add', Controller.create);
router.get('/edit/:id', Controller.formEdit);
router.post('/edit/:id', Controller.update);
router.get('/delete/:id', Controller.destroy);
router.post('/search', Controller.search);

module.exports = router;