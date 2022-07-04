const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')
const chefsRouter = require('./chefs')
const recipesRouter = require('./recipes')

router.get('/', Controller.renderHome)
router.use('/chefs', chefsRouter)
router.use('/recipes', recipesRouter)

module.exports = router