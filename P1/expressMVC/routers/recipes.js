const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')

router.get('/', Controller.readRecipes)
router.get('/add', Controller.addRecipesPage)
router.post('/add', Controller.addRecipe)
router.post('/search', Controller.searchRecipes)
router.get('/:id/delete', Controller.deleteRecipe)
router.get('/:id/edit', Controller.editRecipePage)
router.post('/:id/edit', Controller.editRecipe)




module.exports = router