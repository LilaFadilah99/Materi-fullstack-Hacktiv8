const express = require('express')
const router = express.Router()
const PatientController = require('../controllers/patientController')

router.get('/', PatientController.findAll)
router.get('/:id', PatientController.findByPk)

module.exports = router