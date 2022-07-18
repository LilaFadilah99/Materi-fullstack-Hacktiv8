const express = require('express')
const router = express.Router()
const DoctorController = require('../controllers/doctorController')

router.get('/', DoctorController.findAll)
router.get('/:id', DoctorController.findByPk)

module.exports = router