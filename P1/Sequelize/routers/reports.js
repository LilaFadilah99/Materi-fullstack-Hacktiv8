const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.reportsPage)

router.get('/:id/delete', Controller.deleteReport)

module.exports =  router