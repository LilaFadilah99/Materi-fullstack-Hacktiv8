const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')

router.get('/', Controller.readRecipes)
router.get('/add', Controller.addRecipesPage)
router.post('/add', Controller.addRecipe)
router.get('/:id/delete', Controller.deleteRecipe)


module.exports = router