const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')

router.get('/', Controller.readRecipes)

module.exports = router