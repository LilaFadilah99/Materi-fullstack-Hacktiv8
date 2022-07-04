const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')

router.get('/', Controller.readChefs) // localhost:3000/chefs/
router.get('/detail', Controller.readChefsDetail) // localhost:3000/chefs/detail

module.exports = router