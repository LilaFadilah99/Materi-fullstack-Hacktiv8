const router = require('express').Router()
const reportRouter = require('./reports')
const Controller = require('../controllers/controller')

router.get('/', Controller.homePage)
router.use('/reports', reportRouter)

module.exports =  router