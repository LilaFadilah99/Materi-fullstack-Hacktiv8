const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')

router.get('/', Controller.readRecipes)
router.get('/add', Controller.addRecipesPage)
router.post('/add', Controller.addRecipe)
router.get('/:id/delete', Controller.deleteRecipe)
router.get('/:id/edit', Controller.editRecipePage)



module.exports = router